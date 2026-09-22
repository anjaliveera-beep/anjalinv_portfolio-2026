export interface BookingSlot {
  time: string;
  period: 'morning' | 'afternoon' | 'evening';
  available: boolean;
}

export interface BookingFormState {
  fullName: string;
  email: string;
  roleCompany: string;
  meetingType: '15-min-kickoff' | '30-min-advisory';
  selectedDate: string;
  selectedTime: string;
  timezone: string;
  primaryTopic: 'EM Mentorship & Career' | 'GenAI & AI Strategy' | 'Enterprise Delivery & Cloud' | 'Grassroots & Social Impact' | 'General Executive Connect';
  notes: string;
}

export interface BookingConfirmation {
  id: string;
  createdAt: string;
  details: BookingFormState;
  icsDataUri: string;
}

export interface ProjectResource {
  title: string;
  url: string;
  type: 'website' | 'media' | 'recognition' | 'partnership';
  note?: string;
}

export interface AssociatedAward {
  title: string;
  organization: string;
  year: string;
  badge: string;
  link?: string;
}

export interface CaseStudy {
  id: string;
  category: 'social' | 'ai' | 'enterprise' | 'gaming';
  tag: string;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  userRole: string;
  overview: string;
  challengesFaced: string[];
  solutionsImplemented: string[];
  outcomesAchieved: string[];
  metrics: { label: string; value: string; detail: string }[];
  technologies: string[];
  resources: ProjectResource[];
  associatedAwards: AssociatedAward[];
  humanImpact: string;
  leadershipTakeaway: string;
}

export interface CareerMilestone {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  yearsSpan: string;
  category: 'leadership' | 'cloud-ai' | 'foundation';
  briefDescription: string;
  keyAccomplishments: string[];
  metrics?: { label: string; value: string }[];
  techStack: string[];
}

export interface RecognitionItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  ranking?: string;
  description: string;
  badgeText: string;
  quote?: string;
  link?: string;
  highlightTag: string;
}

export interface TestimonialItem {
  author: string;
  role: string;
  organization: string;
  relationship: string;
  content: string;
  keyHighlight: string;
  avatarPlaceholder?: string;
}
