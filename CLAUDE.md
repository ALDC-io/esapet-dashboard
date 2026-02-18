# ESA Pet Analytics Dashboard

## Overview
Prospect prototype for ESA Pet, an online emotional support animal letter service (~$500K revenue). Demonstrates ALDC's analytics capabilities applied to DTC funnel performance (Heyflow screening → ESA letter delivery).

## Tech Stack
- **Next.js 16** (App Router, Turbopack)
- **React 19** + TypeScript
- **Tailwind CSS** with HSL color variables
- **Recharts** for data visualization
- **Lucide React** for icons
- **Poppins + Inter** fonts

## Brand Colors
- Primary: `#00a17a` (teal green)
- Accent: `#094454` (dark teal)
- Links: `#1863dc` (blue)
- Background: white with light gray accents

## Architecture
- All data is mock — no API keys needed
- Eclipse API proxy route exists for future live connection
- UI primitives shared with upventure-dashboard pattern
- Dashboard sections: KPI cards, Revenue by product, Heyflow funnel, Traffic/acquisition, Email campaigns, Campaign ROI

## Data Sources (Mock)
- **GA4**: Traffic sessions, channels, geographic
- **Heyflow**: Screening funnel steps and drop-off
- **Stripe**: Revenue by product (ESA Letter, PSD Letter, Dog Training)
- **Active Campaign**: Email campaign performance

## Development
```bash
npm install && npm run dev
# Visit http://localhost:3000
```

## Deployment
- **Vercel**: `esapet.analyticlabs.io`
- Deploy: `vercel deploy --prod --scope aldc`
- DNS: Cloudflare A record → 76.76.21.21
