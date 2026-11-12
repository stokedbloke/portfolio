// Single source for the content shown on the homepage, case pages and llms.txt.
// Every figure here comes from Neil's résumé (Nov 2026) or was confirmed by him.

export const site = {
  name: "Neil Sethi",
  url: "https://neil.percipience.live",
  title: "Neil Sethi | Healthcare Product Lead",
  description:
    "Selected work in clinical workflows, at-home care and healthcare developer tools.",
  email: "neil@percipience.live",
  linkedin: "https://www.linkedin.com/in/sethineil/",
  recommendations: "https://www.linkedin.com/in/sethineil/details/recommendations/",
  github: "https://github.com/stokedbloke",
  resume: "/neil-sethi-resume.pdf",
  headshot: "/images/neil-sethi.jpg",
}

export type Figure = { value: string; label: string }
export type Section = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  links?: { href: string; label: string }[]
}
export type Quote = { text: string; name: string; title: string }

export type CaseStudy = {
  id: string
  title: string
  company: string
  role: string
  period: string
  summary: string
  evidence?: string
  image?: string
  imageAlt?: string
  link?: { href: string; label: string }
  sections: Section[]
  figures?: Figure[]
  figuresLabel?: string
  quote?: Quote
}

const kalina: Quote = {
  text: "Neil has been instrumental in the development of integrated web and mobile software solutions for treatment planning and clinical documentation at Easterseals Northern California. He improved our data collection app and introduced an electronic session sign-off feature, which contributed to our efforts in making clinics paperless. Meetings with Neil were productive, collaborative, and warm. I admired his ability to take input and create it on an electronic platform. Neil's technical expertise, coupled with his ability to lead and innovate, makes him an invaluable asset to any team.",
  name: "Kalina Hatzell, PsyD, MBA, LBA, BCBA",
  title: "Easterseals Northern California",
}

const mehdi: Quote = {
  text: "I worked with Neil for 4 years at SpineZone. I watched as he navigated very well the difficult early stages of a startup: team building, product design, business formation, messaging, website design. Neil was a team player from day one, great attitude, committed, did not complain, worked on anything handed to him and was always willing to take on more responsibility. He was instrumental in bringing the company from two guys in a garage to a profitable business with robust customer base, value proposition and product.",
  name: "Mehdi Maghsoodnia",
  title: "CEO, 1health · Board Chair, SpineZone",
}

export const quotes: Quote[] = [kalina, mehdi]

export const caseStudies: CaseStudy[] = [
  {
    id: "behavioral-health",
    title: "ABA treatment planning and reporting",
    company: "Xolv Technology Solutions",
    role: "Director of Product Management",
    period: "Oct 2022 – Apr 2024",
    summary:
      "I led product for the tools ABA clinicians use to document sessions, build treatment plans and write reports.",
    evidence: "Reports that took two hours now take less than an hour.",
    image: "/images/case-studies/behavioral-health.jpg",
    imageAlt: "Clinician scheduling and session screens",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "ABA clinicians collect data in every session. They turn that data into treatment plans and progress reports. A single report took about two hours to write.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I led product across four cross-functional pods: 13 engineers, plus data scientists and UX designers. We shipped 46 releases in 18 months.",
        ],
      },
      {
        heading: "What we shipped",
        paragraphs: [
          "We redesigned the reporting workflow and the clinical tools around it, and kept the redesign compliant. The work covered web and mobile software for treatment planning, clinical documentation and session data collection.",
        ],
      },
      {
        heading: "What changed",
        bullets: [
          "Reports that took two hours now take less than an hour.",
          "System speed improved 80%.",
          "The platform served hundreds of clinicians and tens of thousands of patients.",
          "The platform carried $20M in annual recurring revenue.",
        ],
      },
    ],
    quote: kalina,
  },
  {
    id: "healthcare-developer-platform",
    title: "The platform behind new clinical products",
    company: "1health (Tachin.AI)",
    role: "Director of Platform Product and Partnerships",
    period: "Jan 2026 – present",
    summary:
      "Every new clinical product needs the same regulated infrastructure: patient data, lab ordering, eligibility and compliance. I built 1health's developer-facing products: the portal, Patient Vault (a headless API over 2.7M patient records) and MCP tooling that lets AI coding agents discover and call the APIs directly.",
    evidence: "Muse Bio went from Google Forms, spreadsheets and paper to a live donor program in about a month.",
    link: { href: "https://dev.1health.io", label: "Visit the developer portal" },
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "1health is a HIPAA-compliant, SOC 2 Type II platform that healthcare products are built on. I own the developer-facing side: how engineers, and increasingly their AI coding agents, discover, understand and call the platform's APIs.",
        ],
      },
      {
        heading: "The problem",
        paragraphs: [
          "Every team building a clinical product hits the same wall: eligibility screening, CLIA lab ordering, medical-director oversight, results delivery and chain of custody. Building it yourself takes months to years and a team of hires, and none of it differentiates the product.",
          "There is a second, newer problem. Much of the integration work is now done by AI coding agents, and they cannot use documentation written only for humans.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "The developer portal at dev.1health.io.",
          "Agent-readable documentation, and MCP tooling that lets a coding agent find the right endpoint and call it directly.",
          "Patient Vault, a headless patient data API over the secure data layer holding 2.7M patient records.",
          "Lab ordering through national lab networks for startup and enterprise build partners.",
        ],
      },
      {
        heading: "The product bet",
        paragraphs: [
          "I treated AI agents as first-class users of the platform, not an add-on. Documentation is designed to be read by a model, APIs are designed to be discovered by one, and the portal serves both audiences from the same source.",
          "I run this site the same way. See /llms.txt.",
        ],
      },
      {
        heading: "What happened",
        paragraphs: [
          "Partners ship compliant products in weeks rather than months.",
          "Muse Bio, a regenerative medicine company working with stem cells, ran its donor program on Google Forms, spreadsheets and paper, out of one San Francisco clinic. It launched an automated program in about a month: eligibility and consent, lab orders, physician approval, specimen tracking and results. The program is now ready to scale nationwide. Their COO said that without 1health they would probably have needed to hire 10 people.",
          "Expert-Dx, a diagnostic consultation service for physicians with hard lab cases, led by Dr. Michael Laposata, went live in about a month. Getting from decision to a usable product normally takes about twelve.",
        ],
        links: [
          { href: "https://dev.1health.io/case-studies/muse-bio", label: "Muse Bio case study" },
          { href: "https://dev.1health.io/case-studies/expert-dx", label: "Expert-Dx case study" },
        ],
      },
    ],
  },
  {
    id: "physical-therapy",
    title: "Online back and neck program",
    company: "SpineZone Medical Fitness",
    role: "Co-Founder, VP of Product Management",
    period: "Jan 2015 – Aug 2018",
    summary:
      "I co-founded SpineZone and led product for a back and neck program people could do from home.",
    evidence: "The online business broke even in eight months.",
    image: "/images/case-studies/physical-therapy.jpg",
    imageAlt: "SpineZone clinic signage",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "SpineZone treated back and neck pain in clinics. People had to attend in person. We wanted to reach patients earlier with non-operative care, wherever they lived.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I was a co-founder and led product. I built the online program, the EMR behind it and the CRM we used to scale.",
        ],
      },
      {
        heading: "What we shipped",
        paragraphs: [
          "A 42-day online therapy program with personalized coaching, a progressive exercise plan and continuous outcomes monitoring.",
        ],
      },
      {
        heading: "What changed",
        bullets: [
          "The online business broke even in eight months.",
          "The platform grew 10x to thousands of users.",
          "We secured risk-sharing models with three payors.",
        ],
      },
    ],
    figuresLabel: "Program outcomes reported by SpineZone",
    figures: [
      { value: "90%", label: "fewer surgeries" },
      { value: "60%", label: "less patient pain" },
      { value: "85%", label: "less opioid dependence" },
    ],
    quote: mehdi,
  },
  {
    id: "preventative-care",
    title: "HealthBridge and sleep monitoring",
    company: "Sutter Health, Design & Innovation",
    role: "Director of Business Design, Product Management",
    period: "Jul 2019 – Aug 2021",
    summary:
      "I launched HealthBridge, a preventative care platform that pairs wearables with health coaches. Its first program was direct-to-consumer sleep monitoring.",
    evidence: "HealthBridge reached 90% engagement.",
    image: "/images/case-studies/preventative-care.jpg",
    imageAlt: "Sutter Health sleep monitoring and education program page",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Sutter wanted a way to reach people before they were sick. That meant using signals from wearables and support from health coaches, outside the clinic visit.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I led business design and product. I aligned clinicians and engineers on what to build and how to test it.",
        ],
      },
      {
        heading: "HealthBridge",
        paragraphs: [
          "HealthBridge is the platform that combines wearable data with health coaches. It reached 90% engagement across hundreds of users and secured $5M in funding.",
        ],
      },
      {
        heading: "Sleep monitoring",
        paragraphs: [
          "The sleep program was sold direct to consumers. People wore an Oura ring and worked with a coach, alone or in groups. It reduced churn 20% and projected $7M in revenue.",
        ],
      },
    ],
  },
  {
    id: "electronic-health-record",
    title: "Custom EMR for spine care",
    company: "SpineZone Medical Fitness",
    role: "Co-Founder, VP of Product Management",
    period: "Jan 2015 – Aug 2018",
    summary: "I built an electronic medical record designed for spine care and outcome tracking.",
    image: "/images/case-studies/electronic-health-record.jpg",
    imageAlt: "SpineZone EMR screen",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Existing EMR systems did not support our treatment protocols. They also could not produce the outcome data we needed to show that treatment worked.",
        ],
      },
      {
        heading: "What we shipped",
        paragraphs: [
          "An EMR built around spine-specific care pathways. It tracked pain and function over time and connected clinic and online care records.",
        ],
      },
      {
        heading: "What changed",
        bullets: [
          "It supported 10x user growth.",
          "It supported growth from two clinics to six.",
          "It gave healthcare partners detailed outcome reports.",
        ],
      },
    ],
  },
  {
    id: "patient-relationship",
    title: "Patient CRM and scheduling",
    company: "SpineZone Medical Fitness",
    role: "Co-Founder, VP of Product Management",
    period: "Jan 2015 – Aug 2018",
    summary: "I customized the patient CRM to improve scheduling and patient relationships as we grew.",
    image: "/images/case-studies/patient-relationship.jpg",
    imageAlt: "SpineZone patient CRM screen",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Scheduling limited how many patients each clinic could see. Denied insurance claims were high. Messaging differed from clinic to clinic.",
        ],
      },
      {
        heading: "What we shipped",
        paragraphs: [
          "A customized patient CRM for spine care, with scheduling built around clinician capacity. I also directed branding, segmentation and messaging.",
        ],
      },
      {
        heading: "What changed",
        bullets: [
          "Risk-sharing models with three payors.",
          "200% clinic growth.",
          "Denied claims fell 30%.",
        ],
      },
    ],
  },
  {
    id: "consumer-wellness",
    title: "WellnessFX growth and analytics",
    company: "WellnessFX",
    role: "Sr Product Marketing Manager and Head of Analytics",
    period: "Dec 2011 – Dec 2014",
    summary: "I led segmentation, positioning and analytics for a consumer lab-testing business.",
    image: "/images/case-studies/consumer-wellness.jpg",
    imageAlt: "WellnessFX product page",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "WellnessFX started with a narrow customer base of CrossFit athletes. It needed to reach a wider wellness audience.",
        ],
      },
      {
        heading: "What we shipped",
        paragraphs: [
          "Detailed customer segmentation, data-driven product positioning and growth marketing that scaled. We also worked through state-by-state compliance to offer lab biometrics in all 50 states.",
        ],
      },
      {
        heading: "What changed",
        bullets: ["10x user growth.", "The company was acquired by Thorne."],
      },
    ],
  },
]

export const featuredIds = [
  "behavioral-health",
  "healthcare-developer-platform",
  "physical-therapy",
  "preventative-care",
]
export const earlierIds = ["electronic-health-record", "patient-relationship", "consumer-wellness"]

export const getCase = (id: string) => caseStudies.find((c) => c.id === id)

export const projects = [
  {
    name: "GiggleGauge",
    tagline: "Track your laughter, measure your joy.",
    href: "https://gigglegauge.com",
    note: "Account required",
    image: "/images/projects/gigglegauge.png",
    imageAlt: "GiggleGauge home page with a daily count of 18 giggles",
    imageFit: "cover",
    text: "The Fitbit for laughs. GiggleGauge uses AI to detect and count laughter from your voice, helping you notice and revisit the unplanned moments of joy already happening in your life. It works with Omi wearables, connects AI assistants like Claude to your laughter data, and can press your family’s greatest hits onto a vinyl record.",
  },
  {
    name: "VocalMirror",
    tagline: "Release your inner monologue.",
    href: "https://vocalmirror.io",
    note: "",
    image: "/images/projects/vocalmirror.png",
    imageAlt: "VocalMirror logo: a speech bubble and its reflection",
    imageFit: "contain",
    text: "Talk it through and hear it reflected back. I use it for offloading rumination to be more present with people I love, for rehearsals before presentations, interviews or hard conversations, and for quick debriefs after classes, podcasts or meetings.",
  },
  {
    name: "Percipience",
    tagline: "Atman and Brahman, in one view.",
    href: "https://percipience.live",
    note: "",
    image: "/images/projects/percipience.png",
    imageAlt: "Percipience sky view with the Sun and Moon, a timeline and playback controls",
    imageFit: "cover",
    text: "Percipience aligns the cosmic, universal truths, or Brahman, with the internal truths, or Atman. In an embodied sense the two are indistinguishable. This is a reminder of that as we spiral through the moon cycles, the Milky Way and our personal journeys. It sets my fortnightly work cycles, heart-rate variability and laugh counts against the Sun, Moon and inner planets.",
  },
]

export const traits = ["An analytical storyteller", "A computer scientist", "A culture influencer", "An empathetic leader"]

export const experience = [
  { org: "1health (Tachin.AI)", role: "Director of Platform Product and Partnerships", period: "Jan 2026 – present" },
  { org: "Sethi Solutions", role: "Founder & Product Lead, voice-AI behavioral health", period: "Jan 2024 – present" },
  { org: "Xolv Technology Solutions", role: "Director of Product Management", period: "Oct 2022 – Apr 2024" },
  { org: "Sutter Health, Design & Innovation", role: "Director of Business Design, Product Management", period: "Jul 2019 – Aug 2021" },
  { org: "SpineZone Medical Fitness", role: "Co-Founder, VP of Product Management", period: "Jan 2015 – Aug 2018" },
  { org: "WellnessFX", role: "Sr Product Marketing Manager and Head of Analytics", period: "Dec 2011 – Dec 2014" },
  { org: "Qualcomm", role: "Software Engineer, Product Manager", period: "Jun 2004 – Dec 2009" },
]
