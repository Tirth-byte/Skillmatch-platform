# Global Scalability & Architecture Roadmap

*Target Scope: 100,000+ Concurrent Users across 3 Regions*

## 1. Multi-Region Architecture
To ensure low latency (<100ms) for global users, we will adopt a **Edge-First** strategy.

### 🌍 Edge Deployment (Vercel)
- **Frontend**: Deployed to Vercel Edge Network. Assets served from the nearest PoP (Point of Presence).
- **Compute**: Next.js App Router (Server Components) run on **Edge Runtime** where possible for instant rendering closer to the user.
- **Regions**:
    - `iad1` (US East - N. Virginia)
    - `fra1` (Europe - Frankfurt)
    - `sin1` (Asia - Singapore)

### 🗄 Global Database (Supabase / Turso)
- **Primary**: Postgres cluster in US East.
- **Read Replicas**:
    - Replica in EU (Frankfurt) for fast reads in Europe.
    - Replica in Asia (Singapore) for fast reads in APAC.
- **Strategy**: 
    - Writes go to Primary (slightly higher latency for EU/Asia users on *updates*).
    - Reads (Feed, Profile) go to nearest Replica (instant).

## 2. AI Intelligence Scaling
### 🧠 Distributed AI Workers
- **Opportunity Scraper**:
    - **Worker NA**: Scrapes LinkedIn/Indeed US.
    - **Worker EU**: Scrapes Xing/LinkedIn Europe.
    - **Worker APAC**: Scrapes regional job boards.
- **Normalization Pipeline**: All data normalized to a standard schema (English) via GPT-4 before ingestion.

### 📈 Caching Strategy
- **Redis (Upstash Global)**:
    - User Sessions
    - Hot "Top Opportunities" lists per region.
    - Rate Limiting counters.
- **Stale-While-Revalidate**:
    - API responses cached for 60s at the Edge. Background re-validation updates capability without blocking users.

## 3. Monitoring & Reliability
- **Synthetic Monitoring**: Checkly probes running every 5 min from 5 global locations.
- **Error Tracking**: Sentry with geographic tagging.
- **Failover**: If Edge Region fails, traffic automatically re-routed to next nearest region.

---
*Prepared by Antigravity Agents for Codeversity 2026*
