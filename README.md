# KaushalEra — Premium Career & Skill Intelligence Platform

An integrated academia-industry ecosystem connecting **Students**, **Faculty/Academicians**, **Industry Recruiters**, and **Institution Administrators**.

---

## 📁 Architecture & Directory Layout

The codebase is organized into separated **Frontend** and **Backend** applications:

```
KaushalEra/
├── frontend/                     # React 18 + Vite Client Application
│   ├── index.html               # Entry HTML with modern typography (Inter & Outfit)
│   ├── vite.config.js           # Vite configuration with API reverse proxy
│   ├── package.json             # Frontend dependencies & scripts
│   └── src/
│       ├── components/          # Reusable UI & Layout components
│       ├── context/             # React State & Auth Contexts (AppDataContext, AuthRoleContext)
│       ├── data/                # Data fixtures & local fallbacks
│       ├── pages/               # Multi-role portals (Student, Faculty, Recruiter, Institution, Admin, Public)
│       ├── services/            # API client service layer (`api.js`)
│       ├── styles/              # Design tokens, utilities, and animations
│       ├── App.jsx              # Main router & layout shell
│       └── main.jsx             # React DOM root mounting
│
├── backend/                      # Node.js + Express REST API Server
│   ├── .env                     # Server environment configuration
│   ├── .env.example             # Environment template
│   ├── server.js                # Express app entrypoint & middleware setup
│   ├── package.json             # Backend dependencies & scripts
│   └── src/
│       ├── controllers/         # Business logic for all API entities
│       ├── data/                # Seed data store
│       ├── middleware/          # Request logger & error handlers
│       └── routes/              # Modular REST routes (Auth, Jobs, Apps, Candidates, Domains, Skills, etc.)
│
├── package.json                 # Monorepo orchestration scripts
└── README.md                    # Project documentation
```

---

## 🚀 Quick Start & Running the Project

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Install All Dependencies
From the root directory:
```bash
npm run install:all
```
*(Or install in root, `frontend/`, and `backend/` independently with `npm install`)*

---

### 2. Run Full-Stack (Frontend + Backend Concurrently)
From the root directory, execute:
```bash
npm run dev
```
- **Frontend App**: `http://localhost:3000`
- **Backend REST API**: `http://localhost:5000`
- **API Health Endpoint**: `http://localhost:5000/api/health`

---

### 3. Run Independently

#### Run Backend Server Only
```bash
# From root:
npm run dev:backend

# Or directly in backend folder:
cd backend
npm run dev
```

#### Run Frontend Client Only
```bash
# From root:
npm run dev:frontend

# Or directly in frontend folder:
cd frontend
npm run dev
```

---

## 🌐 API Endpoints Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service health status & uptime |
| `POST` | `/api/auth/login` | User login |
| `POST` | `/api/auth/demo-login` | 1-Click demo persona switcher |
| `POST` | `/api/auth/signup` | User account registration |
| `POST` | `/api/auth/onboarding` | Complete profile onboarding wizard |
| `GET` | `/api/auth/me` | Current authenticated user session |
| `GET` | `/api/jobs` | Retrieve active jobs |
| `POST` | `/api/jobs` | Post new job |
| `GET` | `/api/jobs/internships` | Retrieve internships |
| `POST` | `/api/jobs/internships` | Post new internship |
| `GET` | `/api/applications` | Student job/internship applications |
| `POST` | `/api/applications` | Submit new application |
| `PATCH` | `/api/applications/:id/stage` | Update Kanban status stage |
| `GET` | `/api/candidates` | Recruiter candidate talent pipeline |
| `PATCH` | `/api/candidates/:id/status` | Update candidate status |
| `GET` | `/api/domains` | Industry domains taxonomy |
| `GET` | `/api/skills` | Skills catalog & verification metrics |
| `GET` | `/api/resources` | Learning modules & video courses |
| `GET` | `/api/assessments` | Skill assessment directory |
| `POST` | `/api/assessments/:id/submit` | Submit assessment answers for evaluation & XP |

---

## 🎨 Portals & Personas Supported
- **Public & Marketing**: Landing page, About, How It Works, Audience pages, Contact, Interactive Demo.
- **Student Portal**: Dashboard, My Skills, Skill Gap Analysis, Career Explorer, Learning Roadmap, Opportunities, Kanban Application Tracker, Internship Workspace, Assessment Engine, Verified Portfolio.
- **Faculty Portal**: Research Collaborations, Faculty Development Programs (FDP), Industry Consultancy.
- **Industry / Recruiter Portal**: Talent Matching Engine, Candidate Pipeline, Job Postings Manager.
- **Institution Admin**: College Placement Analytics, Department KPIs, Accreditation readiness.
- **System Admin**: Platform metrics and global telemetry.
