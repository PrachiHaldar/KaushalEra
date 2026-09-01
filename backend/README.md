# KaushalEra Backend API

A robust REST API service built with Node.js and Express to power the KaushalEra Career & Education Intelligence ecosystem.

## Features
- **Authentication & Persona Management**: Role-based access (Student, Faculty, Recruiter, Institution Admin, System Admin), demo role quick switcher, user onboarding.
- **Opportunities (Jobs & Internships)**: Full listing, search, filtering, and job creation.
- **Application Tracking (Kanban)**: Track student applications across Applied, Shortlisted, Interview, and Selected stages.
- **Recruiter Talent Pipeline**: Candidate pool filtering by verification, status, and matched skills.
- **Domain & Skill Intelligence**: Curated industry domains, learning roadmaps, and verified skills directory.
- **Resource Library**: Educational modules, video courses, and interactive labs.
- **Skill Assessments & XP Gamification**: Automated evaluation and score calculation.

## Tech Stack
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express 4.x
- **Middleware**: CORS, Morgan / Request Logger, Custom Error Handler
- **Development Tooling**: Nodemon

## Quick Start

```bash
# 1. Navigate to backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Start development server with hot-reload
npm run dev

# 4. Or start production server
npm start
```

## Environment Variables
Create a `.env` file (copied from `.env.example`):
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## API Endpoints

### Health
- `GET /api/health` - Server health check & status

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/demo-login` - Instant 1-click persona switch
- `POST /api/auth/signup` - Register user
- `POST /api/auth/onboarding` - Complete profile onboarding
- `GET /api/auth/me` - Get current session user

### Jobs & Internships
- `GET /api/jobs` - List jobs (supports `?search=` and `?location=`)
- `GET /api/jobs/:id` - Get job details by ID
- `POST /api/jobs` - Post a new job
- `GET /api/jobs/internships` - List internships
- `POST /api/jobs/internships` - Post a new internship

### Applications
- `GET /api/applications` - Get student submitted applications
- `POST /api/applications` - Apply to a job/internship
- `PATCH /api/applications/:id/stage` - Update application stage (APPLIED, SHORTLISTED, INTERVIEW, SELECTED)

### Candidates (Recruiters)
- `GET /api/candidates` - Candidate directory (supports `?status=` and `?skill=`)
- `PATCH /api/candidates/:id/status` - Update candidate status

### Domains & Skills
- `GET /api/domains` - List all domains
- `GET /api/domains/:id` - Domain details
- `POST /api/domains` - Create domain
- `GET /api/skills` - List skills (supports `?category=` and `?verified=`)
- `POST /api/skills` - Create skill

### Resources
- `GET /api/resources` - List learning resources (supports `?type=` and `?skill=`)
- `POST /api/resources` - Create learning resource

### Assessments
- `GET /api/assessments` - List available skill assessments
- `GET /api/assessments/:id` - Get assessment questions
- `POST /api/assessments/:id/submit` - Submit answers and calculate score/XP
