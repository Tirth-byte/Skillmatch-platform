# SkillMatch  
AI-powered Skill-to-Opportunity Matching Platform

SkillMatch AI helps users discover internships, jobs, hackathons, freelance work, and learning opportunities based on their real skills — not just resumes. The platform focuses on potential, growth, and clear next steps instead of rejection.

##  What It Does
- Matches users to opportunities using skill analysis
- Shows skill gaps and readiness level
- Suggests learning paths to unlock better opportunities
- Supports beginners and advanced users
- Includes community, mentorship, and enterprise views

## 🛠 Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + Shadcn/UI
- Context-based AI simulation
- Deployed-ready architecture

## 👥 Team Contributions
**TIRTH PATEL (Full Stack / AI / Integration / Deployment):**
- Core logic & AI matching engine
- Skill gap analysis & learning paths
- API routes & services
- Integration, debugging, deployment readiness

**MAN PATEL (UI/UX & System Architecture):**
- UI/UX design & flow
- Page layouts & component structure
- Design system & user experience
- Overall system architecture planning

##  Hackathon Note
Built and refined during the hackathon with a focus on scalability, usability, and real-world impact.


---

##  Design & Experience
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

## TESTING

## 🛡 Performance & Scalability
- **Edge-Ready**: Designed for serverless deployment on Vercel.
- **Optimized Assets**: Uses `next/font` and pure CSS gradients.
- **Scalability Roadmap**: See `SCALABILITY.md` for the migration plan from Mock -> Supabase/Clerk.

---

*Built for Codeversity 2026.*
