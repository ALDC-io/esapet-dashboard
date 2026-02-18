import type {
  KPIMetric,
  RevenueData,
  FunnelStep,
  TrafficSource,
  StateData,
  EmailCampaign,
  Campaign,
  DashboardData,
} from "@/types/dashboard";

// Generate sparkline data (30 days of values with realistic trend)
function generateSparkline(base: number, variance: number, trend: number): number[] {
  const data: number[] = [];
  let current = base - trend * 15;
  for (let i = 0; i < 30; i++) {
    current += trend + (Math.random() - 0.5) * variance;
    data.push(Math.max(0, Math.round(current)));
  }
  return data;
}

const kpis: KPIMetric[] = [
  {
    label: "Monthly Revenue",
    value: 42_300,
    formattedValue: "$42.3K",
    change: 18.2,
    sparklineData: generateSparkline(1200, 200, 18),
    icon: "dollar-sign",
  },
  {
    label: "Funnel Conversion",
    value: 12.4,
    formattedValue: "12.4%",
    change: 2.1,
    sparklineData: generateSparkline(10, 1.5, 0.08),
    icon: "funnel",
  },
  {
    label: "Email Subscribers",
    value: 28_450,
    formattedValue: "28,450",
    change: 8.6,
    sparklineData: generateSparkline(26000, 300, 80),
    icon: "mail",
  },
  {
    label: "Organic Sessions",
    value: 186_000,
    formattedValue: "186K",
    change: 14.3,
    sparklineData: generateSparkline(5400, 600, 80),
    icon: "trending-up",
  },
];

// 30 days of revenue by product
function generateRevenueData(): RevenueData[] {
  const data: RevenueData[] = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayOfWeek = date.getDay();
    const weekendFactor = dayOfWeek === 0 || dayOfWeek === 6 ? 0.65 : 1.0;
    // Slight upward trend over the month
    const trendFactor = 1 + (29 - i) * 0.005;

    const esaLetter = Math.round((850 + Math.random() * 250) * weekendFactor * trendFactor);
    const psdLetter = Math.round((240 + Math.random() * 80) * weekendFactor * trendFactor);
    const dogTraining = Math.round((100 + Math.random() * 50) * weekendFactor * trendFactor);

    data.push({
      date: date.toISOString().split("T")[0],
      esaLetter,
      psdLetter,
      dogTraining,
      total: esaLetter + psdLetter + dogTraining,
    });
  }
  return data;
}

const revenueData = generateRevenueData();

const funnelSteps: FunnelStep[] = [
  {
    name: "Landing Page",
    visitors: 186_000,
    dropoffRate: 0,
    conversionRate: 100,
  },
  {
    name: "Screening Start",
    visitors: 42_000,
    dropoffRate: 77.4,
    conversionRate: 22.6,
  },
  {
    name: "Screening Complete",
    visitors: 28_500,
    dropoffRate: 32.1,
    conversionRate: 15.3,
  },
  {
    name: "Payment",
    visitors: 24_200,
    dropoffRate: 15.1,
    conversionRate: 13.0,
  },
  {
    name: "Letter Issued",
    visitors: 23_100,
    dropoffRate: 4.5,
    conversionRate: 12.4,
  },
];

const trafficSources: TrafficSource[] = [
  {
    id: "src-001",
    channel: "Organic Search",
    sessions: 68_400,
    conversions: 8_920,
    conversionRate: 13.0,
    revenue: 18_240,
    momChange: 14.3,
  },
  {
    id: "src-002",
    channel: "Paid Search",
    sessions: 42_100,
    conversions: 4_630,
    conversionRate: 11.0,
    revenue: 9_480,
    momChange: 6.2,
  },
  {
    id: "src-003",
    channel: "Email",
    sessions: 31_200,
    conversions: 5_460,
    conversionRate: 17.5,
    revenue: 7_840,
    momChange: 22.8,
  },
  {
    id: "src-004",
    channel: "Direct",
    sessions: 24_600,
    conversions: 3_440,
    conversionRate: 14.0,
    revenue: 4_120,
    momChange: 3.1,
  },
  {
    id: "src-005",
    channel: "Social",
    sessions: 14_200,
    conversions: 1_280,
    conversionRate: 9.0,
    revenue: 1_840,
    momChange: -4.7,
  },
  {
    id: "src-006",
    channel: "Referral",
    sessions: 7_500,
    conversions: 1_370,
    conversionRate: 18.3,
    revenue: 2_780,
    momChange: 31.4,
  },
];

const topStates: StateData[] = [
  { state: "California", sessions: 28_400, conversions: 3_690, conversionRate: 13.0, revenue: 7_540 },
  { state: "Texas", sessions: 19_200, conversions: 2_500, conversionRate: 13.0, revenue: 5_110 },
  { state: "Florida", sessions: 16_800, conversions: 2_350, conversionRate: 14.0, revenue: 4_810 },
  { state: "New York", sessions: 14_600, conversions: 1_750, conversionRate: 12.0, revenue: 3_580 },
  { state: "Illinois", sessions: 9_400, conversions: 1_220, conversionRate: 13.0, revenue: 2_500 },
  { state: "Pennsylvania", sessions: 8_200, conversions: 1_060, conversionRate: 12.9, revenue: 2_170 },
  { state: "Ohio", sessions: 7_600, conversions: 990, conversionRate: 13.0, revenue: 2_020 },
  { state: "Georgia", sessions: 6_800, conversions: 920, conversionRate: 13.5, revenue: 1_880 },
  { state: "North Carolina", sessions: 6_200, conversions: 810, conversionRate: 13.1, revenue: 1_660 },
  { state: "Michigan", sessions: 5_800, conversions: 720, conversionRate: 12.4, revenue: 1_470 },
];

const emailCampaigns: EmailCampaign[] = [
  {
    id: "email-001",
    name: "Welcome Series",
    sentDate: "2026-02-15",
    recipients: 4_200,
    openRate: 62.4,
    clickRate: 18.3,
    conversions: 312,
    revenue: 8_420,
    status: "sent",
  },
  {
    id: "email-002",
    name: "Abandoned Screening",
    sentDate: "2026-02-14",
    recipients: 2_800,
    openRate: 48.6,
    clickRate: 22.1,
    conversions: 186,
    revenue: 5_240,
    status: "sent",
  },
  {
    id: "email-003",
    name: "Seasonal Wellness",
    sentDate: "2026-02-10",
    recipients: 18_400,
    openRate: 34.2,
    clickRate: 8.4,
    conversions: 420,
    revenue: 6_180,
    status: "sent",
  },
  {
    id: "email-004",
    name: "Re-engagement",
    sentDate: "2026-02-08",
    recipients: 6_200,
    openRate: 28.8,
    clickRate: 6.2,
    conversions: 94,
    revenue: 2_860,
    status: "sent",
  },
  {
    id: "email-005",
    name: "Referral Program",
    sentDate: "2026-02-20",
    recipients: 12_000,
    openRate: 0,
    clickRate: 0,
    conversions: 0,
    revenue: 0,
    status: "scheduled",
  },
  {
    id: "email-006",
    name: "Monthly Newsletter",
    sentDate: "2026-02-01",
    recipients: 28_450,
    openRate: 31.6,
    clickRate: 5.8,
    conversions: 248,
    revenue: 4_120,
    status: "sent",
  },
];

const campaigns: Campaign[] = [
  {
    id: "camp-001",
    name: "Google Ads — Branded",
    channel: "Paid Search",
    spend: 3_200,
    revenue: 14_800,
    roi: 363,
    status: "active",
    startDate: "2026-01-01",
    endDate: "2026-03-31",
  },
  {
    id: "camp-002",
    name: "Facebook — Awareness",
    channel: "Social",
    spend: 2_400,
    revenue: 6_200,
    roi: 158,
    status: "active",
    startDate: "2026-01-15",
    endDate: "2026-03-15",
  },
  {
    id: "camp-003",
    name: "Instagram Stories",
    channel: "Social",
    spend: 1_800,
    revenue: 4_100,
    roi: 128,
    status: "active",
    startDate: "2026-02-01",
    endDate: "2026-04-30",
  },
  {
    id: "camp-004",
    name: "Google Ads — Non-Brand",
    channel: "Paid Search",
    spend: 4_600,
    revenue: 9_400,
    roi: 104,
    status: "active",
    startDate: "2026-01-01",
    endDate: "2026-03-31",
  },
  {
    id: "camp-005",
    name: "Email Automation",
    channel: "Email",
    spend: 480,
    revenue: 8_420,
    roi: 1654,
    status: "active",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
  },
  {
    id: "camp-006",
    name: "Referral Program",
    channel: "Referral",
    spend: 1_200,
    revenue: 5_800,
    roi: 383,
    status: "active",
    startDate: "2026-01-01",
    endDate: "2026-06-30",
  },
];

export const mockDashboardData: DashboardData = {
  kpis,
  revenueData,
  funnelSteps,
  trafficSources,
  topStates,
  emailCampaigns,
  campaigns,
};
