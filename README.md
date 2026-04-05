<div align="center">

<img src="client/src/assets/logo.svg" alt="Udyam Guild Logo" width="120" height="120" />

# 🛡️ Udyam Guild

### *Learn together. Earn together. Rise together.*

**A guild-based gamified learning platform for India's 10 crore SHG women**

<br/>

[![Built for](https://img.shields.io/badge/Built%20for-HackIndia%20Spark%206-blueviolet?style=for-the-badge)](https://hackindia.xyz)
[![Hackathon](https://img.shields.io/badge/Hosted%20by-NIT%20Delhi-orange?style=for-the-badge)](https://nitdelhi.ac.in)
[![Team](https://img.shields.io/badge/Team-Teen%20Titans-ff69b4?style=for-the-badge)](#-team)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br/>

> Built at **HackIndia Spark 6** hosted by **NIT Delhi**
> by Team **Teen Titans**

</div>

---

## 📋 Table of Contents

- [The Problem](#-the-problem)
- [Our Solution](#-our-solution)
- [App Screenshots](#-app-screenshots)
- [Demo Video](#-demo-video)
- [The 5 Pillars](#-the-5-pillars)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Repo Structure](#-repo-structure)
- [Team](#-team)

---

## 🔴 The Problem

India's **Self Help Group (SHG) ecosystem** is the largest grassroots women's network in the world:

| Stat | Number |
|------|--------|
| Women mobilized | **10.05 Crore** |
| Active SHGs | **90.90 Lakh** |
| Districts covered | **700+** |

Yet despite this scale, most SHG women still lack practical enterprise skills in **pricing, bookkeeping, digital selling, and market access.** Current training models are:

- 📵 Static and trainer-dependent
- 👤 Built for individuals, not groups
- 📊 Disconnected from real income generation
- 🔇 Not available in local languages

---

## 💡 Our Solution

**Udyam Guild** turns each SHG into a **guild** and each lesson into a **business mission.**

Instead of passive training, women:
- 🎯 Complete **proof-of-work missions** (real tasks, not just quizzes)
- 🏆 Earn **XP and badges** individually and as a guild
- 📈 Climb a **live leaderboard** against other guilds in their cluster
- 🛒 Unlock **real market access** (Meesho, ONDC, e-NAM) as they level up
- 💳 Build a **Loan Readiness Score** exportable to MFI partners

---

## 📱 App Screenshots

> *Screenshots coming soon — UI in active development*

| Screen | Preview |
|--------|---------|
| Login | ![Login Screen](docs/screenshots/login.png) |
| Guild Dashboard | ![Dashboard](docs/screenshots/dashboard.png) |
| Mission Player | ![Mission](docs/screenshots/mission.png) |
| Leaderboard | ![Leaderboard](docs/screenshots/leaderboard.png) |
| Business Tools | ![Tools](docs/screenshots/tools.png) |
| Facilitator Dashboard | ![Facilitator](docs/screenshots/facilitator.png) |

---

## 🎬 Demo Video

> *Demo video will be uploaded here after recording*

[![Watch Demo](https://img.shields.io/badge/Watch-Demo%20Video-red?style=for-the-badge&logo=youtube)](docs/demo/udyam-guild-demo.mp4)

---

## 🏛️ The 5 Pillars

### Pillar 1 — Guild Identity & Onboarding
Every SHG joins as a named **guild** with 8–12 members. Each member picks one of **5 core roles** (Treasurer, Catalog Lead, Seller, Maker, Digital Champion). A **Baseline Assessment** generates a starting Loan Readiness Score. KRP/NGO staff join as a **Guild Guide** with cluster-level tools.

### Pillar 2 — Structured Learning Journeys
**7–10 week tracks** mapped to real business goals ("Start Selling Locally", "Digital Orders", "Festival Business"). Each lesson is a **3-minute Hindi/regional audio** + scenario simulation. Content is **role-filtered** — a Treasurer gets pricing content, a Seller gets negotiation content.

### Pillar 3 — Mission Engine (Proof-of-Work Core)
**6 levels** from Udaan to Udyam Pro, each unlocking at real task completion:

```
Level 1 — Udaan        → Digital basics, product idea, confidence
Level 2 — Tayyari      → Pricing, cost, customer communication
Level 3 — Bazaar Ready → Meesho listing UNLOCKED 🛒
Level 4 — Vishwas      → Payments, record keeping, repeat buyers
Level 5 — Pragati      → Brand identity, ONDC / e-NAM UNLOCKED 🏪
Level 6 — Udyam Pro    → Advanced growth, facilitator certification
```

**Daily Sparks** + **Weekly Quests** + **Cluster Leaderboards** keep engagement high.

### Pillar 4 — Business Execution Tools
- 🧮 **Smart Pricing Calculator** — cost + margin → correct price
- 🎙️ **Voice Cashbook** — record income by speaking
- 📦 **Product Catalog Builder** — photos + descriptions → shareable catalog
- 📊 **Income Logger** — monthly tracking with streak badges
- 💳 **Loan Readiness Score** — 0–100 score exportable to MFI partners

### Pillar 5 — Facilitator Intelligence + Market Linkage
- 🗺️ **Guild Heatmap** — facilitators see which guilds need attention
- 📲 **WhatsApp Nudge Engine** — automated mission reminders
- 🤝 **Market Linkage Hub** — Meesho → ONDC → e-NAM progression
- 🏦 **MFI Integration** — automated credit proxy scores to partner banks

---

## 🛠️ Tech Stack

### Frontend
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com)

| Library | Purpose |
|---------|---------|
| React 18 + Vite | Fast web app, PWA-ready |
| Tailwind CSS | Rapid UI with custom SHG brand tokens |
| Zustand | Global state — user, guild, XP, missions |
| Framer Motion | XP animations, badge pops, level unlock celebrations |
| Recharts | Income graphs, skill radar, cluster bar charts |
| React Hook Form | All forms — onboarding, catalog builder, cashbook |
| Axios | HTTP client with JWT auto-injection |

### Backend
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)

| Library | Purpose |
|---------|---------|
| Node.js + Express | REST API server |
| JWT + bcrypt | Auth tokens + OTP hashing |
| Multer + AWS S3 | Task proof photo uploads |
| Bull + Redis | Background job queue — XP recalc, nudges |
| node-cron | Daily Sparks scheduler, streak checker |
| Zod | Input validation on all API routes |
| Morgan + Winston | Request and error logging |

### Database & Storage
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io)
[![AWS S3](https://img.shields.io/badge/AWS_S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white)](https://aws.amazon.com/s3)

| Technology | Purpose |
|-----------|---------|
| PostgreSQL 16 | Primary database — users, guilds, missions, progress |
| Redis 7 | Leaderboard cache, sessions, job queue |
| AWS S3 + CloudFront | Audio lessons, catalog images, task proof photos |

### Infrastructure & Integrations
[![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)

| Service | Purpose |
|---------|---------|
| Railway | One-click deploy for Node + Postgres + Redis |
| GitHub Actions | CI/CD — auto deploy on push to main |
| Docker Compose | Local dev — one command to run everything |
| Fast2SMS | OTP via Indian mobile numbers |
| Twilio WhatsApp | Facilitator nudges and mission reminders |
| Meesho Partner API | One-tap product listing at Level 3 |
| Razorpay | UPI checklist + payment readiness |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    WHO USES IT                               │
│  SHG Members  │  Facilitators  │  NGO/KRP  │  MFI Partners  │
└───────────────────────┬─────────────────────────────────────┘
                        │ browser (React PWA)
┌───────────────────────▼─────────────────────────────────────┐
│                   FRONTEND (React + Vite)                    │
│  Guild Hub  │  Missions  │  Biz Tools  │  Leaderboard  │ Admin│
└───────────────────────┬─────────────────────────────────────┘
                        │ REST API (JSON over HTTPS)
┌───────────────────────▼─────────────────────────────────────┐
│                BACKEND (Node.js + Express)                   │
│  Auth+Roles │ Mission Engine │ Biz Tools │ Facilitator │ Market│
└──────┬──────────────┬───────────────────────────────────────┘
       │              │
┌──────▼──────┐ ┌─────▼──────┐ ┌───────────┐
│ PostgreSQL  │ │   Redis    │ │  AWS S3   │
│  (primary)  │ │  (cache)   │ │  (files)  │
└─────────────┘ └────────────┘ └───────────┘
                        │
┌───────────────────────▼─────────────────────────────────────┐
│              EXTERNAL INTEGRATIONS                           │
│  Fast2SMS  │  Twilio  │  Meesho  │  ONDC  │  MFI/Banks      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 16
- Redis 7
- Docker + Docker Compose (recommended)

### Quick Start (Docker — recommended)

```bash
# 1. Clone the repo
git clone https://github.com/teentitans/udyam-guild.git
cd udyam-guild

# 2. Copy env file and fill in your values
cp .env.example .env

# 3. Start everything with one command
docker-compose up --build

# App runs at http://localhost:5173
# API runs at http://localhost:5000
```

### Manual Setup

```bash
# Install root dependencies
npm install

# ── Frontend ──────────────────────────
cd client
npm install
npm run dev          # http://localhost:5173

# ── Backend ───────────────────────────
cd ../server
npm install
npm run dev          # http://localhost:5000

# ── Database ──────────────────────────
# Make sure Postgres and Redis are running, then:
psql -U postgres -f database/schema.sql
psql -U postgres -f database/seeds/01_missions_level1.sql
psql -U postgres -f database/seeds/03_demo_guilds.sql
```

### Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/udyam_guild

# Redis
REDIS_URL=redis://localhost:6379

# Auth
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d

# OTP (set to 'mock' for dev — OTP will always be 1234)
OTP_MODE=mock
FAST2SMS_API_KEY=your_key_here

# AWS S3
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_BUCKET_NAME=udyam-guild-assets
AWS_REGION=ap-south-1

# Twilio WhatsApp
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886

# Meesho
MEESHO_PARTNER_API_KEY=your_key
MEESHO_API_BASE_URL=https://api.meesho.com/v1

# Client
VITE_API_BASE_URL=http://localhost:5000/api
```

### Demo Login Credentials

```
OTP_MODE=mock means any phone number logs in with OTP: 1234

Demo SHG Member  → phone: 9876543210  → role: member
Demo Facilitator → phone: 9876543211  → role: facilitator
Demo NGO Staff   → phone: 9876543212  → role: ngo
```

---

## 📁 Repo Structure

```
udyam-guild/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Auto-deploy to Railway on push to main
│       └── lint.yml            # ESLint check on every PR
│
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── pages/              # One file per screen
│   │   │   ├── Login.jsx
│   │   │   ├── GuildDashboard.jsx
│   │   │   ├── MissionPlayer.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── BusinessTools.jsx
│   │   │   ├── FacilitatorDashboard.jsx
│   │   │   └── ...13 more pages
│   │   ├── components/
│   │   │   ├── ui/             # Button, Card, Badge, Modal...
│   │   │   ├── animations/     # XPBurst, BadgePop, LevelUnlock...
│   │   │   ├── charts/         # IncomeGraph, SkillRadar...
│   │   │   ├── mission/        # AudioPlayer, QuizBlock...
│   │   │   ├── guild/          # MemberRoleCard, GuildAvatar...
│   │   │   └── tools/          # PricingCalculator, VoiceCashbook...
│   │   ├── hooks/              # useAuth, useGuild, useMissions...
│   │   ├── store/              # Zustand stores
│   │   ├── api/                # Axios API calls
│   │   └── assets/             # SVGs, level icons, role icons
│   └── ...config files
│
├── server/                     # Node.js + Express API
│   └── src/
│       ├── routes/             # 11 route files
│       ├── controllers/        # 11 controller files
│       ├── services/           # 11 service files (xp, loan, meesho...)
│       ├── middleware/         # auth, role, upload, validate
│       └── config/             # db, redis, s3, env
│
├── database/
│   ├── migrations/             # 9 versioned SQL migrations
│   ├── seeds/                  # Demo data — guilds, missions, users
│   └── schema.sql              # Full schema in one file
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── API.md
│   ├── DEMO_SCRIPT.md
│   └── LOAN_SCORE_FORMULA.md
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## 👥 Team

<div align="center">

### 🦸 Teen Titans

*Built at HackIndia Spark 6 · NIT Delhi*

</div>

| Member | Role | Pillars Owned |
|--------|------|--------------|
| **Krishna** | Full Stack Developer (Lead) | Pillar 1 (Guild Identity) · Pillar 5 (Facilitator + Market) · Auth · Infra |
| **Vansh** | Full Stack Developer | Pillar 2 (Learning Journeys) · Pillar 3 (Mission Engine) · XP System |
| **Aarushi** | Full Stack Developer | Pillar 4 (Business Tools) · Loan Readiness · NGO Dashboard |
| **Mehar** | Frontend Developer + UI/UX | Design System · All UI Screens · Animations · Mobile Responsiveness |

---

## 🎯 Impact

| Metric | Value |
|--------|-------|
| Target users | 10.05 Crore SHG women across India |
| SHGs addressable | 90.90 Lakh guilds |
| Deployment channel | Existing NRLM/DAY-NRLM network |
| Market unlock at Level 3 | Meesho (120M+ customers) |
| Market unlock at Level 5 | ONDC + e-NAM (govt. marketplaces) |
| Loan access | MFI partner banks via Loan Readiness Score |

---

## 🗺️ Future Scope

- [ ] Offline mode with background sync (low connectivity areas)
- [ ] 8 Indian language support (Hindi, Tamil, Bengali, Telugu, Marathi, Kannada, Gujarati, Odia)
- [ ] AI-powered personalized learning path recommendations
- [ ] Direct UPI payment integration for in-app transactions
- [ ] e-NAM agricultural marketplace integration
- [ ] Block-level competitions and inter-cluster tournaments
- [ ] Government MoU integration for formal certification

---

## 📄 License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

Made with ❤️ for India's SHG Women

**Team Teen Titans · HackIndia Spark 6 · NIT Delhi**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/teentitans/udyam-guild)

</div>
