import { CaseStudy, CareerMilestone, RecognitionItem, TestimonialItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Anjali Nayakanti Veera',
  headline: 'Director of Engineering Management | Cloud & AI Strategist | Global Changemaker',
  location: 'Toronto, Canada',
  email: 'nv.anjalisri@gmail.com',
  phone: '+1 (548) 577-5119',
  linkedin: 'https://www.linkedin.com/in/anjali-n-2b7009114/',
  topmate: 'https://topmate.io/anjali_nayakanti',
  bioShort: '16+ years of distinguished engineering leadership scaling high-performance global teams across TCS, Verizon, Wells Fargo, EPAM Systems, and Apply Digital. Architect of 80+ enterprise AI use cases, former Disney game developer (200+ titles), and Founder of "Let\'s Fight Back" — a grassroots movement empowering 5,000+ women and girls.',
  philosophy: 'Sustainable technology leadership is not measured merely in throughput or compute efficiency, but in human resilience, empathy, and ethical stewardship.',
  stats: [
    { label: 'Industry Experience', value: '16+ Yrs', detail: 'Across TCS, Verizon, Wells Fargo, EPAM, & Apply Digital' },
    { label: 'Global Team Leadership', value: '125+ Eng', detail: 'Direct reporting lines across Canada, Georgia, & Brazil' },
    { label: 'Enterprise AI Deployed', value: '80+ Cases', detail: 'GenAI platforms delivered with 0 SLA violations' },
    { label: 'Grassroots Social Impact', value: '5,000+ Women', detail: 'Trained in self-defense & legal rights through Let\'s Fight Back' },
    { label: 'Global Ranking', value: '#2 Worldwide', detail: '#2 Future Leader Global Leadership Awardee' },
  ],
};

export interface Ideology {
  id: string;
  number: string;
  title: string;
  quote: string;
  tagline: string;
  isHero?: boolean;
  deepDive?: string;
  operationalPractice?: string;
  operationalTags?: string[];
  iconType: 'heart' | 'cpu' | 'ear' | 'shield' | 'compass';
}

export const LEADERSHIP_IDEOLOGIES: Ideology[] = [
  {
    id: 'sovereignty-subservience',
    number: '01',
    title: 'Sovereignty Over Subservience',
    tagline: 'Self-Authorship, Ownership & Psychological Safety',
    isHero: true,
    quote: 'Engineers who obey build fragile systems; engineers who own their craft build enduring ones. Leadership is not demanding compliance—it is giving people the ground to stand on.',
    deepDive: 'In kickboxing rings and grassroots activism with Let\'s Fight Back, you learn quickly that true power is never obedience—it is self-authorship. When leading 125+ engineers, velocity never came from policing process or enforcing fear. It came from removing the terror of failure so engineers own their code with pride, speak truth to power, and stand behind what they build.',
    operationalPractice: 'Blameless post-mortems that treat errors as system learnings, protecting squads from disruptive top-down micromanagement, and coaching engineers to debate architecture directly with executives.',
    iconType: 'heart'
  },
  {
    id: 'clarity-generosity',
    number: '02',
    title: 'Clarity as an Act of Generosity',
    tagline: 'Clean Boundaries, Lean Architecture & Zero Ambiguity',
    isHero: false,
    quote: 'Vagueness is hidden cruelty; clear expectations and lean architecture are the highest forms of respect.',
    deepDive: 'Shipping 300 game engines under 64MB memory limits taught me that tight, clear boundaries unlock creative courage.',
    operationalTags: ['Explicit Architectural Guardrails', 'Zero-Ambiguity PRDs', 'Frugal Cloud Budgets'],
    operationalPractice: 'Enforcing strict token usage governance, deterministic vector retrieval caching, and zero-ambiguity sprint commitments.',
    iconType: 'cpu'
  },
  {
    id: 'quietest-voice',
    number: '03',
    title: 'The Quietest Voice Holds the Bug',
    tagline: 'Active Listening in Tribal Villages and Architecture Reviews',
    isHero: false,
    quote: 'The loudest voices in the room rarely find subtle race conditions; the quietest person usually knows where the system breaks.',
    deepDive: 'Sitting in rural village squares and multi-squad architecture reviews taught me to always listen for the hesitation.',
    operationalTags: ['Silent Risk Reviews', 'Asynchronous Dissent Channels', 'Radical Psychological Safety'],
    operationalPractice: 'Structured round-robin architectural reviews, anonymous risk contribution channels, and deliberate space for contrary technical perspectives.',
    iconType: 'ear'
  },
  {
    id: 'human-dignity-architecture',
    number: '04',
    title: 'Human Dignity as an Architectural Constraint',
    tagline: 'Bridging High-Scale Engineering with Grassroots Ethics',
    isHero: true,
    quote: 'High throughput is meaningless if it runs over people. We design software architecture and team culture under the exact same non-negotiable constraint: human dignity.',
    deepDive: 'In technical systems, constraints are usually latency, compute cost, or uptime SLAs. But engineering decisions always ripple into real human lives—whether it is vulnerable commuters needing accurate winter transit guidance or marginalized women learning self-defense in rural hamlets. When human dignity is an explicit architectural constraint, reliability, ethics, and team resilience naturally follow.',
    operationalPractice: 'Ethical data governance and strict hallucination prevention in production AI, proactive team workload balancing to eliminate burnout, and measuring engineering success by human empowerment alongside system SLAs.',
    iconType: 'shield'
  },
  {
    id: 'calm-crisis-shelter',
    number: '05',
    title: 'Decisive Shelter in the Storm',
    tagline: 'Lowering Cortisol & Leading Through High-Stakes Severity',
    isHero: false,
    quote: 'Panic is contagious, but so is composure. A leader’s first duty in a Sev-1 outage is to lower the room’s cortisol so the team can think.',
    deepDive: 'From high-stakes banking cutovers to real-world martial arts emergencies, clarity is a muscle built through calm discipline.',
    operationalTags: ['Zero-Blame Sev-1 Playbooks', 'Cortisol De-escalation', 'Decisive Incident Command'],
    operationalPractice: 'Standardized Sev-1 playbooks, calm executive stakeholder communications, and post-crisis care for engineering staff.',
    iconType: 'compass'
  }
];

export const WHAT_I_DO = [
  {
    title: 'Director of Engineering Management',
    tag: 'Executive Scale',
    description: 'Directing multi-squad engineering organizations (50 to 160+ engineers) across North America, Europe, and Latin America. Transforming complex business roadmaps into scalable, resilient delivery pipelines with 98% retention.',
    deliverables: ['Org Structure & Talent Scaling', 'Agile Governance & Predictability', 'Cross-Functional Executive Alignment']
  },
  {
    title: 'Enterprise GenAI & Cloud Platform Strategy',
    tag: 'Technical Moat',
    description: 'Bridging executive vision with production-grade AI systems (Google Vertex AI, AWS, Azure). Delivered 80+ enterprise AI use cases with zero SLA breaches for transit authorities, media giants, and financial institutions.',
    deliverables: ['Production LLM / RAG Architecture', 'Cloud Modernization (Java, Spring, Kafka)', 'Latency & Cost Optimization']
  },
  {
    title: 'Grassroots Social Entrepreneurship (Let\'s Fight Back)',
    tag: 'Human Dignity',
    description: 'Founder & Executive Director of Let\'s Fight Back. Combining kickboxing self-defense training with constitutional rights education for 5,000+ women and girls across tribal villages and corporate campuses.',
    deliverables: ['Tribal Community Workshops', 'Corporate Safety & Self-Defense', 'UN SDG 5 & 10 Alignment']
  },
  {
    title: 'Strategic Advisory & Keynote Speaking',
    tag: 'Global Voice',
    description: 'Ranked #2 Globally on the INvolve Future Women Leaders list (supported by YouTube). Advising emerging engineering leaders on transitions to management, and speaking on ethical AI and diversity in tech.',
    deliverables: ['15-Min Executive Mentorship', 'Keynote Talks & Panels', 'DEI Framework Consultation']
  }
];

export const VIDEO_TRANSCRIPT = {
  speaker: 'Anjali Nayakanti Veera',
  location: 'Kitchener, Ontario, Canada',
  coreMessage: `Hey everyone, thank you for giving me the opportunity to talk a bit about myself. My name is Anjali, currently residing in Kitchener, Ontario, Canada. I was born and brought up in India and moved to Canada about three years ago.

I have been working on social causes for about a decade. Back in India, I founded my own organization, 'Let's Fight Back', where as a trained kickboxer, I deliver self-defense sessions across schools, tribal communities, and corporate settings — addressing safety, dignity, and awareness for girls from age five to working professionals.

I know for a fact that every impact and every story needs to be heard and given the attention it deserves. It all begins with community engagement. Community is all that we need, alongside the ambition and zeal to work together and build a wonderful future for the next generations.`,
  keyTakeaways: [
    'Trained kickboxer bridging physical resilience with psychological confidence',
    'Grassroots advocacy for tribal villages and underserved communities',
    'Advancing UN Sustainable Development Goals (SDGs 5, 8, 10, 13)',
    'Leading engineering with authentic human-centered empathy'
  ]
};

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: 'apply',
    company: 'Apply Digital',
    role: 'Director of Engineering Management',
    location: 'Canada',
    period: '2025 – Present',
    yearsSpan: 'Present',
    category: 'leadership',
    briefDescription: 'Executive leadership directing engineering strategy, cross-functional organizational design, and product delivery excellence.',
    keyAccomplishments: [
      'Spearheading modern engineering culture with high psychological safety, rigorous delivery discipline, and talent retention.',
      'Translating high-level executive business vision into scalable distributed architectures and predictable agile roadmap execution.',
      'Mentoring and coaching senior engineering managers and technical leads across multi-tier product ecosystems.',
      'Championing AI-accelerated delivery governance while maintaining strict code quality, observability, and compliance standards.'
    ],
    metrics: [
      { label: 'Executive Scope', value: 'Director Level' },
      { label: 'Org Strategy', value: 'Cross-Functional' },
      { label: 'Team Leadership', value: 'Multi-Squad' }
    ],
    techStack: ['Executive Leadership', 'System Architecture', 'People Management', 'Strategic Roadmaps', 'Org Scaling']
  },
  {
    id: 'epam',
    company: 'EPAM Systems',
    role: 'Engineering Manager & GenAI Incubation Lead',
    location: 'Toronto, Canada / India',
    period: '2019 – 2025',
    yearsSpan: '6 Years',
    category: 'leadership',
    briefDescription: 'Oversaw direct reporting lines of 125+ engineers across Canada, Georgia, and Brazil; headed the Java Practice & GenAI North America incubation.',
    keyAccomplishments: [
      'Delivered 80+ enterprise AI use cases expanding from 48 pilot projects with zero SLA violations across Tier-1 North American enterprise clients.',
      'Metrolinx: Directed delivery of AI-powered conversational voice assistant integrating Google Vertex AI, driving +45% CSAT and 35% query speedup.',
      'Thomson Reuters: Directed Master Data Management (MDM) platform with automated data lineage and compliance knowledge graphs across 5+ agile squads.',
      'BlackRock: Built and stabilized resilient microservices (Java 17, Spring Boot) on Microsoft Azure powering ETF lifecycle operations.',
      'London Stock Exchange Group (LSEG): Boosted quarterly release velocity 4x (from 2 to 8 per quarter) via automated AWS archival pipelines and zero-downtime cutovers.',
      'Co-founded & chaired SAEEG (Supporting and Advancing Ethnicities in EPAM Canada), scaling community to 250+ engineers with mentorship initiatives.'
    ],
    metrics: [
      { label: 'Direct Reports', value: '125+ Engineers' },
      { label: 'AI Use Cases Delivered', value: '80+ Enterprise' },
      { label: 'Retention Rate', value: '98% Across Teams' }
    ],
    techStack: ['Java 8-17', 'Spring Boot', 'Google Vertex AI', 'AWS', 'Azure', 'Docker', 'Kafka', 'MongoDB', 'Microservices']
  },
  {
    id: 'wellsfargo',
    company: 'Wells Fargo',
    role: 'Lead Systems Architect & Microservices Specialist',
    location: 'India & US Stakeholders',
    period: '2016 – 2019',
    yearsSpan: '3 Years',
    category: 'cloud-ai',
    briefDescription: 'Architected mission-critical banking backend systems, regulatory compliance frameworks, and high-throughput microservices.',
    keyAccomplishments: [
      'Engineered transaction processing microservices handling millions of financial records daily with zero transaction loss and strict ACID compliance.',
      'Led migration from monolithic legacy application servers to containerized Spring Boot microservices on enterprise cloud infrastructure.',
      'Designed real-time event-driven audit logging systems meeting stringent global banking regulatory standards (SOX, PCI-DSS).',
      'Mentored 20+ software engineers in clean code principles, test-driven development, and automated CI/CD pipelines.'
    ],
    metrics: [
      { label: 'Transaction Scale', value: 'Millions / Day' },
      { label: 'Audit Compliance', value: '100% Passed' },
      { label: 'Microservices Shipped', value: '25+ Services' }
    ],
    techStack: ['Java EE', 'Spring Boot', 'Oracle SQL', 'JMS / ActiveMQ', 'Docker', 'RESTful APIs', 'Splunk', 'CI/CD']
  },
  {
    id: 'verizon',
    company: 'Verizon',
    role: 'Senior Software Engineer & Telecommunications Lead',
    location: 'India & US Enterprise',
    period: '2014 – 2016',
    yearsSpan: '2 Years',
    category: 'cloud-ai',
    briefDescription: 'Built large-scale telecommunication billing services, high-throughput customer messaging pipelines, and automated mediation engines.',
    keyAccomplishments: [
      'Developed low-latency telemetry data pipelines processing millions of network connection records per hour.',
      'Optimized SQL query performance and database indexing, cutting customer account look-up latency by 40%.',
      'Instituted automated end-to-end integration test suites that reduced staging regression verification time from 2 days to under 45 minutes.',
      'Collaborated closely with US network operations centers to resolve critical production escalations within SLA.'
    ],
    metrics: [
      { label: 'Latency Cut', value: '40% Reduction' },
      { label: 'Network Records', value: 'Multi-Million / Hr' },
      { label: 'Release Cadence', value: 'Bi-Weekly Sprints' }
    ],
    techStack: ['Java', 'Spring MVC', 'Oracle Database', 'Linux / Unix', 'SOAP / REST Web Services', 'JUnit']
  },
  {
    id: 'tcs',
    company: 'Tata Consultancy Services (TCS)',
    role: 'Software Engineer & Enterprise Solutions Consultant',
    location: 'India',
    period: '2012 – 2014',
    yearsSpan: '2 Years',
    category: 'foundation',
    briefDescription: 'Engineered enterprise client solutions, database modernization layers, and automated batch processing systems for multinational accounts.',
    keyAccomplishments: [
      'Engineered core business logic components in Java for international client accounts spanning telecom and financial domains.',
      'Rewrote legacy batch ETL processing scripts, reducing overnight batch execution windows by 35%.',
      'Awarded TCS Star Performer recognition for outstanding client delivery and zero-defect deployment records.',
      'Active contributor to internal technical brownbag sessions and technical documentation standardization.'
    ],
    metrics: [
      { label: 'Batch Optimization', value: '35% Faster' },
      { label: 'Quality Score', value: 'Zero Defect' },
      { label: 'Client Satisfaction', value: 'Exemplary' }
    ],
    techStack: ['Java', 'SQL', 'Hibernate', 'Spring Framework', 'Shell Scripting', 'SVN / Git', 'Agile Scrum']
  },
  {
    id: 'disney',
    company: 'Disney Gaming Ecosystem',
    role: 'Game Developer & Systems Engineer (200–300 Games Shipped)',
    location: 'India',
    period: '2008 – 2012',
    yearsSpan: '4 Years',
    category: 'foundation',
    briefDescription: 'Began engineering career shipping 200 to 300 games with Disney intellectual properties, mastering real-time physics, tight memory budgets, and sub-16ms latency.',
    keyAccomplishments: [
      'Built over 200–300 commercial interactive games with Disney character IPs under stringent hardware resource constraints (sub-64MB memory limits).',
      'Engineered custom 2D rendering loops, collision detection state machines, and sound synthesis engines adhering to strict 60 FPS (sub-16.6ms) frame budgets.',
      'Created reusable cross-platform game templates and math utility libraries that accelerated new title production by 60%.',
      'Ingrained a permanent instinct for computational frugality, concurrency synchronization, and user delight that later anchored career-long enterprise architecture.'
    ],
    metrics: [
      { label: 'Games Shipped', value: '200–300 Games' },
      { label: 'Frame Budget', value: '<16.6ms (60 FPS)' },
      { label: 'Memory Limits', value: 'Sub-64MB Budget' }
    ],
    techStack: ['C++', 'Java', 'Object-Oriented Programming', 'Real-Time Physics', 'State Machines', 'Memory Optimization']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lets-fight-back-grassroots',
    category: 'social',
    tag: 'Social Entrepreneurship / Grassroots Impact',
    title: 'Let\'s Fight Back: Empowering 5,000+ Women & Girls Through Grassroots Self-Defense',
    subtitle: 'From Underserved Tribal Villages to Corporate Boardrooms',
    organization: 'Let\'s Fight Back (Founder) & Sakhya Women\'s Guidance Cell',
    period: '2015 – Present',
    userRole: 'Founder, Executive Director & Chief Martial Arts Instructor',
    overview: 'Founded Let\'s Fight Back as a grassroots social enterprise dedicated to eliminating violence against women and children. Combining martial arts kickboxing with constitutional rights education and emotional resilience training, the initiative has transformed the lives of over 5,000 girls across schools, colleges, corporate workplaces, and vulnerable tribal hamlets.',
    challengesFaced: [
      'Deeply entrenched societal conditioning in marginalized communities normalizing street harassment and domestic intimidation.',
      'Logistical challenges operating in remote tribal hamlets (Bhimdongri, Malai Talao, Bhadanepada) with minimal infrastructure and initial community skepticism.',
      'Overcoming internalized fear and hesitation among young schoolgirls who had never been encouraged to speak up or use their physical strength.',
      'Sustaining funding, volunteer networks, and cross-border expansion without institutional donors.'
    ],
    solutionsImplemented: [
      'Custom Martial Arts Curriculum: Distilled practical kickboxing and self-defense mechanics designed specifically for women of all physical statures and strength levels.',
      'Strategic NGO Collaboration: Partnered with Sakhya Women\'s Guidance Cell (led by Dr. Natty Lopes) to combine physical safety techniques with legal literacy (POCSO Act, domestic violence remedies, police helpline access).',
      'Multi-Tier Outreach Model: Deployed programs across three sectors — rural tribal schools (pro-bono workshops), urban colleges, and corporate offices (EmpowerHER workplace safety programs).',
      'Public Advocacy & Journalism: Authored over 10 feature articles in The Times of India documenting survivors\' legal rights, child protection frameworks, and systemic safety reforms.'
    ],
    outcomesAchieved: [
      'Trained and certified over 5,000 women, girls, and children in practical self-defense techniques and constitutional rights awareness.',
      'Expanded outreach into remote tribal hamlets of Bhimdongri, Malai Talao, and Bhadanepada, achieving 100% participation among enrolled adolescent girls.',
      'Zero repeat harassment incidents reported among graduate cohorts across multiple academic institutions.',
      'International recognition from UN-affiliated forums, YouTube, and global DEI leadership councils for authentic grassroots change.'
    ],
    metrics: [
      { label: 'Direct Lives Impacted', value: '5,000+', detail: 'Women and girls certified across India and Canada' },
      { label: 'Community Settings', value: 'Tribal & Urban', detail: 'Bhimdongri, Malai Talao, Bhadanepada, schools & workplaces' },
      { label: 'Journalistic Advocacy', value: '10+ Articles', detail: 'The Times of India published reports on women\'s rights' }
    ],
    technologies: ['Martial Arts / Kickboxing', 'Grassroots Community Organizing', 'Curriculum Design', 'Legal Rights Literacy', 'Public Advocacy'],
    resources: [
      {
        title: 'Let\'s Fight Back Official Workshops & Events Portal',
        url: 'https://infoletsfightback.wixsite.com/letsfightback/workshops-events',
        type: 'website',
        note: 'Explore workshop photo galleries, community programs, and upcoming sessions.'
      },
      {
        title: 'Sakhya Women\'s Guidance Cell Official Partnership',
        url: 'https://sakhya.wgc',
        type: 'partnership',
        note: 'Endorsement and collaborative community safety initiative with Dr. Natty Lopes.'
      },
      {
        title: 'The Times of India — Women\'s Rights Journalism',
        url: 'https://timesofindia.indiatimes.com',
        type: 'media',
        note: 'Published reporting and investigative coverage on legal safeguards and gender equity.'
      }
    ],
    associatedAwards: [
      {
        title: '#2 Global Future Women Leader',
        organization: 'INvolve Heroes Role Model Lists 2025 (Supported by YouTube)',
        year: '2025',
        badge: 'Ranked #2 Worldwide',
        link: 'https://heroes.involverolemodels.org'
      },
      {
        title: '2026 Rising Star Award Nominee',
        organization: 'Women Empowerment Awards (WOEA) Canada',
        year: '2026',
        badge: 'Official Nominee',
        link: 'https://womenempowermentawards.com'
      },
      {
        title: 'Fully Funded Delegate — Canada & UN Alignment',
        organization: 'Young Professional Fellowship Canada (Toronto Downtown)',
        year: '2025',
        badge: 'Fully Funded Delegate',
        link: 'https://youngprofessionalfellowship.org'
      }
    ],
    humanImpact: 'Young girls who once walked to school with downcast eyes and constant fear now walk with their heads held high, confident in their voice, body, and legal protections.',
    leadershipTakeaway: 'The exact same core discipline that governs elite engineering organizations — empathy, clarity of mission, amplifying the quietest voice, and unwavering accountability — is what turns grassroots conviction into lasting social revolution.'
  },
  {
    id: 'ai-voice-assistant',
    category: 'ai',
    tag: 'Enterprise AI / Public Transit',
    title: 'Transforming Public Transit Search with Google Vertex AI',
    subtitle: 'Metrolinx Conversational Voice Assistant Modernization',
    organization: 'Metrolinx / EPAM Systems',
    period: '2023 – 2024',
    userRole: 'GenAI Incubation Lead & Senior Engineering Manager',
    overview: 'Architected and directed the development of an enterprise-grade multimodal conversational voice assistant for Metrolinx (Ontario\'s regional public transit agency). Deployed on Google Vertex AI, the system handles real-time natural language commuter queries regarding train schedules, service delays, fare rules, and route alternatives.',
    challengesFaced: [
      'Commuters require sub-second responses during rush hour and unpredictable winter storm transit interruptions.',
      'Traditional rigid keyword search algorithms failed completely under colloquial phrasing, multi-lingual commuter speech, and spoken syntax.',
      'Strict zero-tolerance requirement for model hallucinations regarding live train platform numbers and safety notices.',
      'Integrating modern LLMs with legacy transit telemetry APIs and dynamic schedule databases.'
    ],
    solutionsImplemented: [
      'Engineered a deterministic RAG (Retrieval-Augmented Generation) pipeline grounding Google Vertex AI in real-time GTFS transit telemetry data.',
      'Implemented semantic cache layers and latency-optimized inference pipelines that reduced round-trip voice response times by 35%.',
      'Constructed strict guardrails with automated fallback validation preventing inaccurate schedule generation.',
      'Unified frontend, backend, data science, and DevOps squads under continuous integration with automated regression test suites.'
    ],
    outcomesAchieved: [
      'Customer Satisfaction (CSAT) score increased by +45% across public commuter testing groups.',
      'Reduced average query resolution time by 35% compared to legacy touch-tone IVR and portal search.',
      'Platform sustained 5x query spikes during major winter storm disruptions with zero service interruptions or memory leaks.'
    ],
    metrics: [
      { label: 'CSAT Improvement', value: '+45%', detail: 'Customer satisfaction with transit query resolution' },
      { label: 'Query Speedup', value: '35% Faster', detail: 'Natural language latency reduction for commuters' },
      { label: 'Public Query Scale', value: '5x Surge', detail: 'Handled traffic surge during peak transit disruptions' }
    ],
    technologies: ['Google Vertex AI', 'Java 17', 'Python', 'Kafka', 'GCP', 'Spring Boot', 'Agile Delivery'],
    resources: [
      {
        title: 'Google Vertex AI Enterprise Documentation',
        url: 'https://cloud.google.com/vertex-ai',
        type: 'website',
        note: 'Foundation platform for semantic embeddings, RAG pipelines, and inference guardrails.'
      },
      {
        title: 'Metrolinx Regional Transit Modernization',
        url: 'https://www.metrolinx.com',
        type: 'website',
        note: 'Public transit network serving the Greater Toronto and Hamilton Area.'
      }
    ],
    associatedAwards: [
      {
        title: 'EPAM North America Delivery Excellence',
        organization: 'EPAM Systems',
        year: '2024',
        badge: 'Innovation Delivery Award'
      }
    ],
    humanImpact: 'Hundreds of thousands of commuters, including visually impaired individuals and elderly riders, received immediate, spoken transit guidance in natural language during stressful winter delays.',
    leadershipTakeaway: 'In the GenAI era, technological leadership is not chasing the biggest model; it is anchoring intelligent models to deterministic data pipelines with low latency, robust guardrails, and zero hallucination.'
  },
  {
    id: 'disney-game-scale',
    category: 'gaming',
    tag: 'Foundational Systems / Real-Time Concurrency',
    title: 'The 300-Game Crucible: From 60 FPS Physics to Resilient Enterprise Microservices',
    subtitle: 'High-Throughput Architectural Mental Models Under Strict Budgets',
    organization: 'Disney Gaming Ecosystem',
    period: '2008 – 2012',
    userRole: 'Game Developer & Core Systems Engineer',
    overview: 'Shipped 200 to 300 commercial interactive titles for Disney\'s global gaming audience. Engineered real-time animation loops, collision detection routines, and asynchronous asset streaming within extreme CPU, memory, and hardware constraints.',
    challengesFaced: [
      'Sub-64MB hardware memory ceilings with zero tolerance for garbage collection pauses or frame rate drops below 60 FPS (16.6ms).',
      'Fragmented mobile and embedded hardware architectures requiring high portability without compromising graphics fidelity.',
      'Aggressive multi-title production release schedules with unbending launch deadlines tied to global Disney movie debuts.'
    ],
    solutionsImplemented: [
      'Constructed custom object pooling engines that eliminated runtime dynamic memory allocations and prevented fragmentation.',
      'Separated state progression, physics calculations, and graphics rendering into isolated deterministic pipelines.',
      'Developed reusable cross-platform game scaffolding that accelerated new game development cycles by 60%.',
      'Applied these exact low-latency architectural patterns years later when designing mission-critical fintech microservices.'
    ],
    outcomesAchieved: [
      'Successfully published over 200–300 games reaching millions of players worldwide with zero post-launch crash-defect regressions.',
      'Achieved stable 60 FPS across low-spec and high-spec hardware targets.',
      'Formed the foundational systems intuition for concurrency, memory safety, and telemetry monitoring.'
    ],
    metrics: [
      { label: 'Games Delivered', value: '200–300 Titles', detail: 'Commercial games shipped with Disney character IPs' },
      { label: 'Frame Budget', value: '<16.6ms', detail: 'Strict 60 FPS hardware latency boundary' },
      { label: 'Crash Rate', value: 'Zero Crashes', detail: 'Robust memory management under constrained hardware' }
    ],
    technologies: ['C++', 'Java', 'Real-Time Physics', 'Object Pooling', 'State Synchronization', 'Memory Profiling'],
    resources: [
      {
        title: 'Disney Interactive Gaming Archive',
        url: 'https://games.disney.com',
        type: 'website',
        note: 'Global catalog of interactive digital family experiences.'
      }
    ],
    associatedAwards: [
      {
        title: 'Disney Production Milestone Recognition',
        organization: 'Disney Interactive Studio Ecosystem',
        year: '2012',
        badge: 'High-Volume Production Honor'
      }
    ],
    humanImpact: 'Brought joy, creativity, and interactive play to tens of millions of young players around the globe.',
    leadershipTakeaway: 'An engineering leader who spent years fighting for individual kilobytes and milliseconds in game engines brings unmatched diagnostic instinct when evaluating modern distributed cloud architectures.'
  },
  {
    id: 'mdm-compliance-graph',
    category: 'enterprise',
    tag: 'Enterprise Architecture / Data Governance',
    title: 'Master Data Management (MDM) & Regulatory Knowledge Graph',
    subtitle: 'Thomson Reuters Legal Technology Platform',
    organization: 'Thomson Reuters / EPAM Systems',
    period: '2021 – 2023',
    userRole: 'Engineering Delivery Manager & Java Practice Lead',
    overview: 'Directed multi-squad engineering delivery of a comprehensive Master Data Management (MDM) and regulatory knowledge graph platform. The architecture streamlined legal entity data harmonization and automated lineage auditing across disparate corporate repositories.',
    challengesFaced: [
      'Siloed international legal repositories with conflicting data schemas and disparate regulatory reporting requirements.',
      'Stringent security, data privacy, and cryptographic traceability mandates across multi-country jurisdictions.',
      'Frequent deployment hotfixes and schema mismatches causing release instability across 5 distributed squads.'
    ],
    solutionsImplemented: [
      'Architected end-to-end Master Data Management (MDM) ingestion workflows with automated schema validation and semantic knowledge graph mapping.',
      'Institutionalized rigorous code governance, automated Fortify static security analysis (achieving an 80% vulnerability reduction), and comprehensive CI/CD quality gates.',
      'Authored standardized operational cutover playbooks empowering operations and site reliability teams to execute deployments independently with zero downtime.'
    ],
    outcomesAchieved: [
      'Reduced post-release hotfixes by 40% within the first two quarters of implementation.',
      'Unified 5 distributed agile squads across North America and Europe into cohesive two-week sprint cadences.',
      'Accomplished zero-downtime production cutovers for multi-terabyte legal compliance datasets.'
    ],
    metrics: [
      { label: 'Hotfix Reduction', value: '40% Drop', detail: 'Through institutionalized CI/CD & quality gates' },
      { label: 'Squad Alignment', value: '5+ Squads', detail: 'Cross-functional delivery across global regions' },
      { label: 'Downtime During Cutover', value: 'Zero Minutes', detail: 'Seamless cloud migration without client interruption' }
    ],
    technologies: ['Java 17', 'Knowledge Graphs', 'Fortify', 'AWS', 'Docker', 'Jenkins', 'REST / gRPC', 'Spring Boot'],
    resources: [
      {
        title: 'Thomson Reuters Legal Technology Overview',
        url: 'https://www.thomsonreuters.com',
        type: 'website',
        note: 'Global leader in legal, tax, and regulatory software solutions.'
      }
    ],
    associatedAwards: [
      {
        title: 'AWS Design Architecture Kata Winner',
        organization: 'EPAM Canada Architectural Forum',
        year: '2023',
        badge: '1st Place Architecture Kata'
      }
    ],
    humanImpact: 'Eliminated weeks of stressful manual compliance audits for legal practitioners, giving them instant verified cryptographic certainty.',
    leadershipTakeaway: 'True delivery leadership is building systems, documentation, and playbooks so transparent that your operations teams can execute flawlessly without emergency midnight escalations.'
  },
  {
    id: 'blackrock-lseg-fintech',
    category: 'enterprise',
    tag: 'FinTech & Capital Markets / Resilient Cloud',
    title: 'Mission-Critical Cloud Modernization for BlackRock & London Stock Exchange Group',
    subtitle: 'High-Throughput Microservices & Automated Financial Archival',
    organization: 'BlackRock & LSEG / EPAM Systems',
    period: '2019 – 2022',
    userRole: 'Delivery & Engineering Lead',
    overview: 'Led engineering modernization initiatives across Tier-1 financial institutions. Built microservices on Azure for BlackRock ETF lifecycle workflows and designed automated AWS archival pipelines for London Stock Exchange Group (LSEG).',
    challengesFaced: [
      'Extremely high transactional throughput where microsecond latency spikes could impact financial portfolio valuation.',
      'Complex legacy archival processes restricting LSEG quarterly release velocity to only 2 cycles per year.',
      'Stringent security, data privacy, and global financial compliance audit standards.'
    ],
    solutionsImplemented: [
      'Engineered fault-tolerant Java 17 and Spring Boot microservices backed by distributed Kafka message streaming.',
      'Automated cloud archival pipelines on AWS with zero-downtime database replication and verified snapshot integrity.',
      'Instituted automated end-to-end chaos engineering tests to validate failover behavior under simulated network partitions.'
    ],
    outcomesAchieved: [
      'Quadrupled quarterly release cycles for LSEG from 2 releases to 8 releases per year.',
      'Achieved zero transaction loss and maintained sub-50ms p99 latency across ETF operations at BlackRock.',
      'Earned executive commendation for seamless cross-border squad coordination between North America and European teams.'
    ],
    metrics: [
      { label: 'Release Velocity', value: '4x Increase', detail: 'Quarterly release frequency accelerated from 2 to 8' },
      { label: 'Transaction Loss', value: 'Zero Loss', detail: 'Strict financial ACID compliance maintained' },
      { label: 'P99 Latency', value: '<50ms', detail: 'High-throughput microservices response ceiling' }
    ],
    technologies: ['Java 17', 'Spring Boot', 'Kafka', 'Microsoft Azure', 'AWS', 'Docker', 'Kubernetes', 'Chaos Testing'],
    resources: [
      {
        title: 'London Stock Exchange Group Architecture Context',
        url: 'https://www.lseg.com',
        type: 'website',
        note: 'Global financial markets infrastructure and data provider.'
      }
    ],
    associatedAwards: [
      {
        title: 'Enterprise FinTech Delivery Commendation',
        organization: 'EPAM Financial Services Practice',
        year: '2022',
        badge: 'Capital Markets Excellence'
      }
    ],
    humanImpact: 'Ensured reliable, secure financial data access and trade clearing for millions of retail investors and institutional funds globally.',
    leadershipTakeaway: 'In high-stakes financial systems, architectural resilience is not just a technical specification; it is the fiduciary bedrock of user trust.'
  }
];

export const GLOBAL_HONORS: RecognitionItem[] = [
  {
    id: 'involve-2025',
    year: '2025',
    title: '#2 Future Leader Global Leadership Awardee',
    organization: 'INvolve Heroes Role Model Lists · Supported by YouTube',
    ranking: 'Ranked #2 Globally',
    description: 'Selected #2 worldwide out of hundreds of global nominations across international technology and corporate sectors for extraordinary leadership in engineering and diversity.',
    badgeText: 'Ranked #2 Worldwide',
    highlightTag: 'Global Recognition',
    link: 'https://heroes.involverolemodels.org'
  },
  {
    id: 'involve-2024',
    year: '2024',
    title: 'Top 20 Global Future Women Leaders',
    organization: 'INvolve Heroes Lists 2024',
    ranking: 'Top 20 Worldwide',
    description: 'Recognized for innovative leadership, delivery excellence across EPAM Canada, and championing women empowerment both inside tech companies and across grassroots initiatives.',
    badgeText: 'Top 20 Worldwide',
    highlightTag: 'Leadership Award',
    link: 'https://heroes.involverolemodels.org/poll/2024-top-100-women-future-leaders/'
  },
  {
    id: 'ypf-canada-2025',
    year: '2025',
    title: 'Fully Funded Delegate, Young Professional Fellowship Canada',
    organization: 'Young Professional Fellowship · Toronto Downtown',
    ranking: 'Fully Funded Delegate',
    description: 'Selected representing India/Canada to convene on international sustainable development, cross-border technology policy, and youth leadership initiatives.',
    badgeText: 'Fully Funded Delegate',
    highlightTag: 'International Fellowship'
  },
  {
    id: 'woea-2026',
    year: '2026',
    title: 'Nominated: Rising Star Award',
    organization: 'Women Empowerment Awards (WOEA) Canada',
    ranking: 'Nominee 2026',
    description: 'Nominated by the Women Empowerment Foundation in recognition of authentic community leadership, corporate mentoring, and the Let\'s Fight Back initiative.',
    badgeText: '2026 Nominee',
    highlightTag: 'Empowerment Award'
  },
  {
    id: 'aws-architecture-kata',
    year: '2023',
    title: 'Winner, Architecture Kata — AWS Design Competition',
    organization: 'EPAM Canada',
    ranking: '1st Place Winner',
    description: 'Won 1st place in regional architecture competition for scalable, fault-tolerant cloud systems design on AWS.',
    badgeText: '1st Place Winner',
    highlightTag: 'Technical Excellence'
  },
  {
    id: 'times-of-india',
    year: 'Investigative & Opinion',
    title: 'Published Reporter on Women\'s Rights',
    organization: 'The Times of India',
    description: 'Authored over 10 feature articles shedding light on women\'s legal protections, anti-harassment advocacy, and female labor participation.',
    badgeText: '10+ Articles',
    highlightTag: 'Advocacy & Media'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    author: 'Shanthikumar C',
    role: 'Vice President, Strategy & Technology',
    organization: 'EPAM & Nirmaan',
    relationship: 'Executive Leadership Recommendation',
    keyHighlight: 'Combines strategic execution with people-centered leadership; managed 50 to over 160 engineers with extraordinary dedication.',
    content: 'Anjali stands out not only for her exceptional leadership in engineering and delivery management, but also for the humanity and empathy she brings into every space she leads. In her leadership role, she has successfully managed and mentored teams ranging from 50 to over 160 engineers across regions and functions, helping individuals navigate career growth, leadership transitions, and professional confidence with extraordinary dedication. Beyond her professional accomplishments, Anjali’s commitment to social impact is deeply inspiring. Through her initiative Let’s Fight Back, she has empowered thousands of women and girls through self-defense and legal awareness programs, proving that leadership is most powerful when used in service of others.'
  },
  {
    author: 'Dr. Natty Lopes',
    role: 'Founder',
    organization: 'Sakhya Women\'s Guidance Cell',
    relationship: 'Grassroots Community Partner',
    keyHighlight: 'What distinguishes Anjali is the sincerity and compassion behind her work. Her workshops restore confidence, dignity, and self-belief.',
    content: 'As the Founder of Let’s Fight Back, Anjali has dedicated years of her life to empowering women and girls through self-defense training, legal rights awareness, confidence building, and leadership education. What began as a grassroots initiative has today impacted more than 5,000 women and girls across schools, colleges, tribal communities, workplaces, and social organizations. What distinguishes Anjali’s work is not only the scale of impact but the sincerity and compassion behind it. Her workshops do not simply teach physical safety — they restore confidence, dignity, and self belief in individuals who often feel unheard. She bridges corporate leadership with community activism as a rare and powerful changemaker.'
  },
  {
    author: 'Klaudia Zinaty',
    role: 'President & Founder',
    organization: 'Women Empowerment Awards (WOEA)',
    relationship: 'Nomination Citation',
    keyHighlight: 'A true testament to your hard work, impact, and dedication to empowering others across business, leadership, and diversity.',
    content: 'The Women Empowerment Awards is more than just an awards initiative, it’s a movement that celebrates the achievements of exceptional women across business, leadership, mentorship, community support, and diversity. Anjali represents the very essence of lifting others as we climb.'
  }
];

export const BRANDING_STRATEGY_ANALYSIS = {
  title: 'Strategic Analysis: Why Anjali Stands Out in the AI Era',
  thesis: 'In an era where synthetic code generation is becoming a utility commodity, the highest market premium shifts to engineering leaders who embody technical rigor, human orchestration, and grassroots ethical stewardship.',
  pillars: [
    {
      pillar: '1. The "Game Dev to GenAI" Mental Model',
      whyItMatters: 'Most modern managers know only high-level abstractions. Anjali shipped 200–300 games with Disney where every frame had a strict 16ms budget, followed by Tier-1 enterprise platforms at LSEG, BlackRock, and Metrolinx.',
      strategicMoat: 'Deep technical intuition: She can evaluate whether an AI architecture is bottlenecked by prompt engineering, context window limits, vector retrieval latency, or infrastructure concurrency.',
      aiEraAdvantage: 'AI generates code quickly; only experienced systems architects know which code is robust enough for zero-downtime financial and transit production.'
    },
    {
      pillar: '2. Empathy as an Operational Delivery Metric',
      whyItMatters: 'Burnout and turnover cripple high-velocity software engineering teams. Anjali managed 125+ engineers across three continents (Canada, Georgia, Brazil) while achieving high retention and zero SLA breaches across 80+ AI projects.',
      strategicMoat: 'People-first psychology honed on martial arts mats and tribal villages: She identifies unspoken team anxieties, fosters psychological safety, and mentors junior devs into principal engineers.',
      aiEraAdvantage: 'As teams adapt to AI-assisted workflows, cultural anxiety is the #1 friction. Leaders who lead with authentic empathy achieve 3x faster team adoption than authoritarian managers.'
    },
    {
      pillar: '3. Grassroots Changemaker Authenticity (Let\'s Fight Back)',
      whyItMatters: 'Corporate DEI is frequently criticized as superficial sloganism. Anjali physically traveled to remote tribal villages (Bhimdongri, Malai Talao) and taught 5,000+ vulnerable women self-defense kickboxing and legal constitutional rights.',
      strategicMoat: 'Unshakable real-world credibility: Recognized as #2 Global Future Woman Leader by INvolve and supported by YouTube, she represents genuine public-spirited leadership.',
      aiEraAdvantage: 'Governments, enterprise boards, and top-tier companies need leaders who naturally balance rapid technological scaling with ethics, fairness, and tangible social uplift.'
    }
  ],
  audienceFit: [
    {
      audience: 'Hiring Executives & Tech VPs',
      lookingFor: 'Director of Engineering / Head of Delivery',
      valueProp: '16-year track record stabilizing multi-squad deliveries, launching GenAI initiatives with zero SLA violations, and leading 125+ engineers with 90%+ retention.'
    },
    {
      audience: 'Aspiring Engineers & New EMs',
      lookingFor: '15-Min Career & EM Mentorship',
      valueProp: 'Direct, actionable frameworks for transitioning from individual contributor to engineering manager, navigating international relocations, and overcoming imposter syndrome.'
    },
    {
      audience: 'Conference Organizers & Universities',
      lookingFor: 'Keynote Speaker & Panelist',
      valueProp: 'Gripping, authentic talks that weave martial arts self-defense lessons, UN sustainable development goals, and enterprise AI production delivery.'
    },
    {
      audience: 'Social Impact Investors & NGOs',
      lookingFor: 'Collaborative Partner (Let\'s Fight Back)',
      valueProp: 'Proven grassroots execution model already validated with Sakhya Women\'s Guidance Cell across tribal communities, schools, and corporate campuses.'
    }
  ]
};
