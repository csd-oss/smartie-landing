export const COMPANY = {
  name: "Smartie s.r.o.",
  shortName: "Smartie",
  ico: "57 537 828",
  address: "Lermontovova 911/3",
  city: "Bratislava - Staré Mesto",
  zip: "811 05",
  country: "Slovakia",
  fullAddress: "Lermontovova 911/3, 811 05 Bratislava, Slovakia",
  court: "Municipal Court Bratislava III",
  founded: "2026",
  foundedDate: "2026-03-27",
  legalForm: "Limited Liability Company",
  email: "hello@smartie.team",
  phone: "+421 844 707 681",
  domain: "smartie.team",
  url: "https://smartie.team",
} as const;

export const APPS = [
  {
    name: "Driver SK",
    slug: "driver-sk",
    tagline: "Your driving exam companion",
    description:
      "Master the Slovak driving theory exam with 1,000+ official practice questions, an adaptive study algorithm, and realistic mock exams — all completely offline.",
    features: [
      "1,000+ Questions",
      "3 Languages",
      "Works Offline",
      "Smart Algorithm",
      "Mock Exams",
      "Progress Tracking",
    ],
    status: "coming-soon" as const,
    platforms: ["iOS", "Android"] as const,
  },
] as const;
