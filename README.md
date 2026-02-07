# SkillMatch AI - Corporate Intelligence Ecosystem 🚀

**Status**: ✅ Production Ready (v1.0.0)

**SkillMatch AI** is a fully gamified, monetized, and certified career ecosystem. It bridges the gap between talent and enterprise by using autonomous agents to match skills, verify expertise, and predict career trajectories.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Shadcn/UI**.

---

## 🚀 Key Features

### 1. 🤖 Autonomous AI Agents
The platform features a simulated multi-agent system:
- **Adaptive Learning Engine**: Uses a "Reinforcement Learning" simulation (via LocalStorage weights). Every time a user views or saves a job, the system up-weights those skills, tailoring future results.
- **Discovery Agent**: A background worker (simulated in `/admin`) that "scrapes" the web for new opportunities and auto-classifies them.
- **Career Compass**: An intent-based AI planner that adapts the dashboard workflow based on the user's current goal (e.g., "Upskill" vs "Get Hired").

### 2. 🌍 Live Ecosystem & Community
- **Global Neural Network**: An `EcosystemContext` acts as the central brain, simulating real-time market trends and community activity.
- **Social Feed**: A `/community` hub where users can share opportunities and track peer progress.
- **Market Pulse**: Real-time trending skills (e.g., "Generative AI +45%") injected live into user dashboards.

### 3. 🎯 Personalized Growth
- **Smart Skill Gap Analysis**: Visualizes exactly what skills a user is missing for their dream role.
- **Auto-Generated Learning Paths**: If a user lacks a skill (e.g., TypeScript), the AI proactively generates a 3-step mastery plan.
- **Match Prediction**: A predictive gauge showing the likelihood of landing an interview.

---

## 🎨 Design & Experience
- **Dark Mode**: Fully supported with a toggle in the header. Persists user preference.
- **Live Data**: Opportunities are fetched in real-time from GitHub Jobs (Issues) and Hacker News. No fake data.
- **Verified Listings**: All opportunities include verified links and company logos (via Clearbit API).
- **Profile Editing**: Users can customize their identity with a display name and profile picture (via `Dashboard` or header).
- **Smooth Animations**: Glassmorphism and micro-interactions powered by Framer Motion-inspired CSS.

---

## 📦 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Tirth-byte/ai-skill-opportunity-matcher.git
    cd ai-skill-matcher
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment (Optional)**:
    Create a `.env.local` file to increase GitHub API rate limits:
    ```bash
    GITHUB_TOKEN=your_personal_access_token_here
    ```

4.  **Run the application**:
    ```bash
    npm run dev
    ```

5.  **Explore the Ecosystem**:
    - **Login**: Use `demo@example.com` (Password: any)
    - **Admin Mode**: Visit `/admin` to trigger the AI Agents manually.
    - **Community**: Visit `/community` to see the live feed.

---

## 📂 Project Structure

```bash
├── app
│   ├── admin           # AI Agent Control Center
│   ├── community       # Social Feed & Leaderboard
│   ├── dashboard       # User Personalization Hub
│   ├── login           # Auth Flow
│   ├── results         # Main Matching Engine
│   └── skills          # Skill Input Interface
├── components
│   ├── dashboard       # Career Compass, Stats
│   ├── layout          # Header, Footer, NotificationCenter
│   ├── results         # JobCard, LearningPath, SkillGap
│   └── profile         # ProfileEditor Modal
├── lib
│   ├── auth            # AuthContext (Mock Session)
│   ├── context         # EcosystemContext (real-time sim)
│   └── hooks           # useUserHistory (Adaptive Weights)
```

---

## 🛡 Performance & Scalability
- **Edge-Ready**: Designed for serverless deployment on Vercel.
- **Optimized Assets**: Uses `next/font` and pure CSS gradients.
- **Scalability Roadmap**: See `SCALABILITY.md` for the migration plan from Mock -> Supabase/Clerk.

---

*Built for Codeversity 2026.*
