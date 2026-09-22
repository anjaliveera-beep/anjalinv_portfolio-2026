import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Resend lazy client
let resendClient: Resend | null = null;
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!resendClient) {
    resendClient = new Resend(key);
  }
  return resendClient;
}

// Gmail direct SMTP transporter (if user sets GMAIL_APP_PASSWORD)
function getGmailTransporter() {
  const user = process.env.GMAIL_USER || "nv.anjalisri@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!pass) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasGmailAppPassword: !!process.env.GMAIL_APP_PASSWORD,
  });
});

// API endpoint to handle booking confirmation email dispatch
app.post("/api/send-booking", async (req, res) => {
  const {
    fullName,
    email,
    roleCompany,
    meetingType,
    selectedDate,
    selectedTime,
    timezone,
    primaryTopic,
    notes,
  } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({ error: "Attendee name and email are required" });
  }

  const anjaliEmail = "nv.anjalisri@gmail.com";
  const attendeeEmail = email.trim();

  const meetingLabel =
    meetingType === "15-min-kickoff"
      ? "15-Minute Career & Leadership Kickoff"
      : "30-Minute Strategic Advisory";

  // Generate Google Calendar 1-Click Link
  const dateParts = selectedDate.split("-");
  const timeParts = selectedTime.replace(/(AM|PM)/i, "").trim().split(":");
  let hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1] || "0", 10);
  const isPM = selectedTime.toUpperCase().includes("PM");
  if (isPM && hours < 12) hours += 12;
  if (!isPM && hours === 12) hours = 0;
  const durationMinutes = meetingType === "15-min-kickoff" ? 15 : 30;

  const pad = (n: number) => n.toString().padStart(2, "0");
  const year = dateParts[0];
  const month = pad(parseInt(dateParts[1], 10));
  const day = pad(parseInt(dateParts[2], 10));

  const startFormatted = `${year}${month}${day}T${pad(hours)}${pad(minutes)}00`;
  let endHours = hours;
  let endMinutes = minutes + durationMinutes;
  if (endMinutes >= 60) {
    endHours += Math.floor(endMinutes / 60);
    endMinutes = endMinutes % 60;
  }
  const endFormatted = `${year}${month}${day}T${pad(endHours)}${pad(endMinutes)}00`;

  const gCalTitle = encodeURIComponent(`${meetingLabel} with Anjali Nayakanti Veera`);
  const gCalDetails = encodeURIComponent(
    `Consultation with Anjali Nayakanti Veera\nTopic: ${primaryTopic}\nAttendee: ${fullName} (${roleCompany || "Individual"})\nNotes: ${notes || "None"}\n\nHost Email: ${anjaliEmail}`
  );
  const gCalLocation = encodeURIComponent("Virtual Meeting (Google Meet / Topmate)");
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gCalTitle}&dates=${startFormatted}/${endFormatted}&details=${gCalDetails}&location=${gCalLocation}`;

  // Generate .ICS calendar invite file attachment content
  const icsAttachmentContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Anjali Nayakanti Veera//Executive Consultation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:anjali-consult-${Date.now()}@anjalinayakanti.com`,
    `DTSTAMP:${year}${month}${day}T120000Z`,
    `DTSTART:${startFormatted}`,
    `DTEND:${endFormatted}`,
    `SUMMARY:${meetingLabel} - Anjali Nayakanti Veera`,
    `DESCRIPTION:Consultation with Anjali Nayakanti Veera\\nAttendee: ${fullName}\\nTopic: ${primaryTopic}\\nNotes: ${notes || "None"}\\nHost: ${anjaliEmail}`,
    "LOCATION:Virtual Meeting (Google Meet / Topmate)",
    "STATUS:CONFIRMED",
    `ORGANIZER;CN=Anjali Nayakanti Veera:mailto:${anjaliEmail}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=${fullName}:mailto:${attendeeEmail}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const icsBase64 = Buffer.from(icsAttachmentContent).toString("base64");

  // Clean HTML confirmation email sent TO THE ATTENDEE from Anjali
  const attendeeHtmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px 24px; color: #1c1d22; background-color: #ffffff; border: 1px solid #EAE7E0; border-radius: 12px;">
      
      <div style="border-bottom: 2px solid #D49354; padding-bottom: 16px; margin-bottom: 22px;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #D49354; font-weight: 700;">Executive Consultation Confirmed</span>
        <h1 style="margin: 6px 0 0 0; color: #0D0E12; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">${meetingLabel}</h1>
      </div>

      <p style="font-size: 15px; line-height: 1.6; color: #2D3139;">
        Hi <strong>${fullName}</strong>,
      </p>
      
      <p style="font-size: 15px; line-height: 1.6; color: #4B5160;">
        Thank you for scheduling time to connect. Your consultation session has been confirmed. A calendar event file (<strong>.ics</strong>) is attached to this email so it can be added to your calendar in 1 click.
      </p>

      <div style="background-color: #FAF8F5; border-radius: 10px; padding: 20px; margin: 24px 0; border: 1px solid #EBE5DB;">
        <h3 style="margin: 0 0 14px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #8A6D3B;">Session Summary</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 7px 0; color: #6E7480; width: 130px;"><strong>Date & Time:</strong></td>
            <td style="padding: 7px 0; color: #0D0E12;"><strong>${selectedDate} at ${selectedTime}</strong> (${timezone || "EST"})</td>
          </tr>
          <tr>
            <td style="padding: 7px 0; color: #6E7480;"><strong>Topic Focus:</strong></td>
            <td style="padding: 7px 0; color: #0D0E12;"><span style="background-color: #F0EAE1; color: #0D0E12; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${primaryTopic}</span></td>
          </tr>
          <tr>
            <td style="padding: 7px 0; color: #6E7480;"><strong>Host:</strong></td>
            <td style="padding: 7px 0; color: #0D0E12;">Anjali Nayakanti Veera (<a href="mailto:${anjaliEmail}" style="color: #D49354; text-decoration: none;">${anjaliEmail}</a>)</td>
          </tr>
          ${
            roleCompany
              ? `
          <tr>
            <td style="padding: 7px 0; color: #6E7480;"><strong>Your Role/Org:</strong></td>
            <td style="padding: 7px 0; color: #0D0E12;">${roleCompany}</td>
          </tr>
          `
              : ""
          }
          ${
            notes
              ? `
          <tr>
            <td style="padding: 7px 0; color: #6E7480; vertical-align: top;"><strong>Agenda / Notes:</strong></td>
            <td style="padding: 7px 0; color: #0D0E12; line-height: 1.5;">${notes}</td>
          </tr>
          `
              : ""
          }
        </table>
      </div>

      <!-- Add to Calendar Action -->
      <div style="background-color: #F4F1EA; border-radius: 8px; padding: 16px; margin: 20px 0; text-align: center;">
        <span style="display: block; font-size: 12px; color: #666; margin-bottom: 10px; font-weight: 500;">
          Add this event to your calendar:
        </span>
        <a href="${googleCalendarUrl}" target="_blank"
           style="background-color: #1A73E8; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; display: inline-block; margin-right: 8px;">
          📅 Add to Google Calendar
        </a>
      </div>

      <div style="margin: 26px 0 20px 0;">
        <p style="font-size: 14px; line-height: 1.5; color: #555555; margin-bottom: 14px;">
          If you have slide decks, system design diagrams, or questions to review beforehand, feel free to reply directly to this email.
        </p>
        <a href="mailto:${anjaliEmail}?subject=${encodeURIComponent(`Notes for our call on ${selectedDate} - ${fullName}`)}" 
           style="background-color: #0D0E12; color: #ffffff; padding: 12px 22px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; display: inline-block;">
          Reply to Anjali
        </a>
      </div>

      <div style="border-top: 1px solid #EAE7E0; padding-top: 18px; margin-top: 26px; font-size: 12px; color: #8A909D; line-height: 1.5;">
        <strong style="color: #4B5160;">Anjali Nayakanti Veera</strong><br />
        Director of Engineering Management & GenAI Incubation Lead<br />
        Founder, <em>Let's Fight Back</em> &bull; Top 2 INvolve Future Leaders
      </div>
    </div>
  `;

  // Method 1: Direct Gmail SMTP using standard App Password
  const gmailTransporter = getGmailTransporter();
  if (gmailTransporter) {
    try {
      const info = await gmailTransporter.sendMail({
        from: `"Anjali Nayakanti Veera" <${anjaliEmail}>`,
        to: attendeeEmail,
        cc: anjaliEmail, // CC Anjali so she also gets it in her sent / inbox
        subject: `Confirmed: ${meetingLabel} with Anjali Nayakanti Veera (${selectedDate})`,
        html: attendeeHtmlContent,
        attachments: [
          {
            filename: `Consultation-${selectedDate}.ics`,
            content: icsAttachmentContent,
            contentType: "text/calendar",
          },
        ],
      });

      console.log("Email sent successfully via Gmail SMTP:", info.messageId);
      return res.status(200).json({
        success: true,
        provider: "gmail",
        recipient: attendeeEmail,
        message: `Confirmation email sent from ${anjaliEmail} directly to ${attendeeEmail}!`,
      });
    } catch (err: any) {
      console.error("Gmail SMTP error:", err);
      // Fall through to Resend or fallback
    }
  }

  // Method 2: Resend API
  const resend = getResend();
  if (resend) {
    try {
      // In Resend with verified domain or onboarding
      const sender = process.env.RESEND_FROM_EMAIL || "Anjali Nayakanti Veera <onboarding@resend.dev>";
      const data = await resend.emails.send({
        from: sender,
        to: [attendeeEmail],
        replyTo: anjaliEmail,
        cc: [anjaliEmail],
        subject: `Confirmed: ${meetingLabel} with Anjali Nayakanti Veera (${selectedDate})`,
        html: attendeeHtmlContent,
        attachments: [
          {
            filename: `Consultation-${selectedDate}.ics`,
            content: icsBase64,
          },
        ],
      });

      return res.status(200).json({
        success: true,
        provider: "resend",
        recipient: attendeeEmail,
        data,
        message: `Confirmation email sent to ${attendeeEmail} (Reply-To: ${anjaliEmail})`,
      });
    } catch (error: any) {
      console.error("Resend API error:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Failed to dispatch email via Resend",
      });
    }
  }

  // Fallback: If neither key is yet configured
  console.log("Simulated confirmation dispatch to attendee:", {
    from: anjaliEmail,
    to: attendeeEmail,
    date: selectedDate,
    time: selectedTime,
  });

  return res.status(200).json({
    success: true,
    simulated: true,
    recipient: attendeeEmail,
    message: `Ready to send directly from ${anjaliEmail} to ${attendeeEmail}. Configure GMAIL_APP_PASSWORD or RESEND_API_KEY in Settings.`,
  });
});

// Start Vite middleware in development or serve static in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
