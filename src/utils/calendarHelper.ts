import { BookingFormState } from '../types';

export function generateICSContent(booking: BookingFormState): string {
  // Format dates: booking.selectedDate is YYYY-MM-DD
  const dateParts = booking.selectedDate.split('-');
  const timeParts = booking.selectedTime.replace(/(AM|PM)/i, '').trim().split(':');
  let hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1] || '0', 10);
  const isPM = booking.selectedTime.toUpperCase().includes('PM');
  if (isPM && hours < 12) hours += 12;
  if (!isPM && hours === 12) hours = 0;

  const durationMinutes = booking.meetingType === '15-min-kickoff' ? 15 : 30;

  // Format ISO-like basic UTC string: YYYYMMDDTHHmmssZ
  const pad = (n: number) => n.toString().padStart(2, '0');
  const year = dateParts[0];
  const month = pad(parseInt(dateParts[1], 10));
  const day = pad(parseInt(dateParts[2], 10));

  const startFormatted = `${year}${month}${day}T${pad(hours)}${pad(minutes)}00`;
  
  // Calculate end
  let endHours = hours;
  let endMinutes = minutes + durationMinutes;
  if (endMinutes >= 60) {
    endHours += Math.floor(endMinutes / 60);
    endMinutes = endMinutes % 60;
  }
  const endFormatted = `${year}${month}${day}T${pad(endHours)}${pad(endMinutes)}00`;

  const title = booking.meetingType === '15-min-kickoff'
    ? `15-Min Career & EM Kickoff with Anjali Nayakanti Veera`
    : `30-Min Strategic Advisory with Anjali Nayakanti Veera`;

  const description = `Connect with Anjali Nayakanti Veera\\nDirector of Engineering Management | Cloud & AI Strategist\\n\\nAttendee: ${booking.fullName} (${booking.email})\\nRole/Org: ${booking.roleCompany}\\nTopic: ${booking.primaryTopic}\\n\\nNotes: ${booking.notes || 'None provided'}\\n\\nMeeting Link: Virtual Call link will be confirmed prior to session.`;

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Anjali Nayakanti Veera//Executive Connect//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:anjali-connect-${Date.now()}@anjalinayakanti.com`,
    `DTSTAMP:${year}${month}${day}T120000Z`,
    `DTSTART:${startFormatted}`,
    `DTEND:${endFormatted}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    'LOCATION:Google Meet / Topmate Video',
    'STATUS:CONFIRMED',
    'ORGANIZER;CN=Anjali Nayakanti Veera:mailto:inquiries@anjalinayakanti.com',
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=${booking.fullName}:mailto:${booking.email}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  return ics;
}

export function downloadICSFile(booking: BookingFormState) {
  const icsData = generateICSContent(booking);
  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Anjali-Veera-${booking.meetingType}-${booking.selectedDate}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generateGoogleCalendarUrl(booking: BookingFormState): string {
  const dateParts = booking.selectedDate.split('-');
  const timeParts = booking.selectedTime.replace(/(AM|PM)/i, '').trim().split(':');
  let hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1] || '0', 10);
  const isPM = booking.selectedTime.toUpperCase().includes('PM');
  if (isPM && hours < 12) hours += 12;
  if (!isPM && hours === 12) hours = 0;

  const durationMinutes = booking.meetingType === '15-min-kickoff' ? 15 : 30;
  const pad = (n: number) => n.toString().padStart(2, '0');
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

  const text = encodeURIComponent(
    booking.meetingType === '15-min-kickoff'
      ? `15-Min Career & EM Kickoff with Anjali Nayakanti Veera`
      : `30-Min Strategic Advisory with Anjali Nayakanti Veera`
  );
  const details = encodeURIComponent(
    `Meeting with Anjali Nayakanti Veera\nTopic: ${booking.primaryTopic}\nAttendee: ${booking.fullName} (${booking.roleCompany})\nNotes: ${booking.notes || 'None'}`
  );
  const location = encodeURIComponent('Virtual Meeting (Google Meet / Topmate)');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${startFormatted}/${endFormatted}&details=${details}&location=${location}`;
}
