*This activity has been created as part of the 42 curriculum by mmoskale, mmonnier, rfeghali, mde-nas.*

# PairMock

## Description

**PairMock** is a peer-to-peer mock technical interview platform. Users publish interview slots, other users book them, and both meet at the scheduled time in a shared live code editor to practice coding interviews. After each session, participants rate each other and can ask an AI for a review of their code.

**Key features**
- Create, book, cancel and delete interview slots (with difficulty, description, date and duration)
- Real-time collaborative code editor (Monaco + Yjs) for each interview
- Automatic Google Calendar event and Google Meet link when a slot is booked
- Post-interview feedback questionnaire (problem solving, code quality, complexity, communication)
- AI code review: tips, complexity analysis, bug hunting, optimal approach
- Personal analytics dashboard with charts, filters and CSV export
- Notifications (bookings, cancellations, 30-minute reminder)
- Email/password login, Google OAuth and 2FA (TOTP)
- English, French and Spanish UI, light/dark theme

## Instructions

### Prerequisites
- Podman + `podman-compose` (default), or Docker + Docker Compose
- `make`
- A Google Cloud OAuth client (for Google login / Calendar / Meet)
- One or more Groq API keys (for AI review)

### Setup
1. Clone the repository and create your environment file:
   ```bash
   cp .env.example .env
   ```
2. Fill in `.env`:

   | Variable | Description |
   | --- | --- |
   | `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` | Database credentials |
   | `DATABASE_URL` | PostgreSQL connection string used by Prisma |
   | `BETTER_AUTH_SECRET` | Random secret for Better Auth |
   | `BETTER_AUTH_URL` | Public URL of the app (e.g. `https://localhost:8443`) |
   | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | Google OAuth credentials |
   | `AI_API_KEYS` | Comma-separated Groq API keys |
   | `DOMAIN_NAME` | Domain served by Caddy (default `localhost`) |
   | `BUILD_TARGET` | `dev` (default) |

3. Build, start and apply database migrations in one command:
   ```bash
   make start     # = make up + make migrate
   ```
   With Docker: `make start COMPOSE="docker compose"`.
4. Open **https://localhost:8443** (self-signed certificate from Caddy).

### Other commands
| Command | Effect |
| --- | --- |
| `make up` / `make down` | Start / stop containers |
| `make migrate` | Apply Prisma migrations |
| `make logs` / `make backlogs` | Follow all logs / backend logs |
| `make ps` | Container status |
| `make opendb` | Open a `psql` shell |

## Team Information

| Member | Role(s) | Responsibilities |
| --- | --- | --- |
| Misha Moskalenko (`mmoskale`) | `<PO>` + Developer | Jira project lead: created and assigned most tickets, tracked module points. Built the dashboard, profile, interview and review pages, the Google Calendar/Meet integration and the backend architecture. |
| Maxime Monnier (`mmonnier`) | `<Tech Lead>` + Developer | Infrastructure (database, Prisma, Better Auth, HTTPS proxy), slot booking logic and real-time WebSocket security. |
| Ralph Feghali Feghali (`rfeghali`) | Developer | Internationalization, 2FA, LLM integration, legal pages. |
| Max de Nas de Tourris (`mde-nas`) |`<PM>` + Developer | Notification system, analytics dashboard, responsive design. |

## Project Management

- **Organization:** work was split into Jira tickets (project `TRN`). Each 42 module had its own ticket tagged `Points` and moved to *Finished points* once validated; feature tasks were assigned to one owner. Meeting where happening dayly at school.
- **Tools:** Jira (backlog and board), GitHub (pull requests linked to Jira tickets), GitHub Actions (auto-deploy to the server on push to `main`).
- **Communication:** Discord group

## Technical Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, React Router, TanStack Query, Tailwind CSS, shadcn/ui, Recharts, i18next, Monaco Editor |
| Backend | Node.js 24, Express 5, TypeScript, Better Auth, Hocuspocus (Yjs WebSocket server), node-cron |
| Database | PostgreSQL 17 with Prisma ORM |
| Infra | Podman/Docker Compose, Caddy (reverse proxy + HTTPS), GitHub Actions (auto-deploy) |
| External | Google Calendar / Meet API, Groq LLM API |

**Justification**
- **React + Express:** widely used, large ecosystem, same language (TypeScript) on both sides.
- **PostgreSQL:** relational data (users, slots, sessions) with strong consistency; well supported by Prisma and Better Auth.
- **Prisma:** type-safe queries and versioned migrations.
- **Better Auth:** secure password hashing, sessions, OAuth and 2FA out of the box.
- **Yjs + Hocuspocus:** conflict-free real-time editing without writing our own sync logic.
- **Caddy:** automatic HTTPS with minimal configuration.

## Database Schema

```
User 1───* Slot (as host)          User 1───* Session
User 1───* Slot (as booker)        User 1───* Account
User 1───* TwoFactor               Notification (userId)
                                   Message (senderId, receiverId)
```

| Table | Key fields |
| --- | --- |
| `user` | `id` (String), `name`, `email` (unique), `image`, `twoFactorEnabled` |
| `Slot` | `id` (Int), `hostId`, `bookerId?`, `description`, `difficulty` (EASY/MEDIUM/HARD), `scheduledAt`, `durationMinutes`, `status` (AVAILABLE/BOOKED/CANCELLED/COMPLETED), `code`, `meetLink`, `googleEventId`, `hostFeedback` (JSON), `bookerFeedback` (JSON) |
| `Notification` | `id`, `userId`, `description`, `status`, `createdAt` |
| `Message` | `id`, `senderId`, `receiverId`, `text`, `createdAt` |
| `session`, `account`, `verification`, `twoFactor` | Managed by Better Auth (sessions, OAuth accounts/password hash, tokens, TOTP secrets) |

Full schema: [`backend/prisma/schema.prisma`](backend/prisma/schema.prisma).

## Features List

| Feature | Description | Member(s) |
| --- | --- | --- |
| Authentication | Email/password sign-up and login, protected routes | Maxime Monnier |
| Google OAuth | Sign in with Google | Maxime Monnier |
| 2FA | TOTP + backup codes | Ralph Feghali |
| Profile | Edit username and avatar, delete account | Misha Moskalenko |
| Slot management | Create, book, cancel and delete slots; no overlapping or last-minute bookings; expired slots removed automatically | Maxime Monnier |
| Dashboard | Available/booked slots with difficulty filter, date sorting and pagination | Misha Moskalenko, Maxime Monnier |
| Google Calendar / Meet | Calendar event + Meet link generated on booking | Misha Moskalenko |
| Interview room | Shared real-time code editor, synced language selector, timer | Misha Moskalenko, Maxime Monnier |
| Feedback | Post-interview questionnaire, slot marked as completed | Misha Moskalenko, Maxime Monnier |
| Review page | Shows the interview's code and the feedback received | Misha Moskalenko |
| AI review | Four types of LLM review of the interview code, in the user's language | Ralph Feghali, Max de Nas de Tourris |
| Analytics | Charts of feedback over time, filters, CSV export | Max de Nas de Tourris, Misha Moskalenko |
| Notifications | Booking/cancellation notifications and 30-min reminders | Max de Nas de Tourris, Maxime Monnier |
| i18n & theme | EN/FR/ES translations, light/dark mode | Ralph Feghali |
| Responsive design | Mobile layout of the dashboard | Max de Nas de Tourris |
| Legal pages | Privacy Policy and Terms of Service | Ralph Feghali |
| Welcome page | Rules, advice and purpose of the platform | Misha Moskalenko |
| HTTPS | Caddy reverse proxy with TLS | Maxime Monnier |

## Modules

| Module | Type | Pts | Implementation | Member(s) |
| --- | --- | --- | --- | --- |
| Frontend + backend frameworks | Major | 2 | React + Express | Whole team |
| Real-time features (WebSockets) | Major | 2 | Hocuspocus WebSocket server, session-authenticated per interview | Maxime Monnier |
| LLM system interface | Major | 2 | Groq API, key rotation on rate limit, error handling | Ralph Feghali, Max de Nas de Tourris |
| Advanced analytics dashboard | Major | 2 | Recharts, filters, CSV export | Max de Nas de Tourris |
| ORM | Minor | 1 | Prisma | Maxime Monnier |
| OAuth 2.0 | Minor | 1 | Google via Better Auth | Maxime Monnier |
| 2FA | Minor | 1 | TOTP + backup codes via Better Auth | Ralph Feghali |
| Notification system | Minor | 1 | Notification table + API + cron reminders | Max de Nas de Tourris, Maxime Monnier |
| Real-time collaborative features | Minor | 1 | Yjs live code editing (Monaco) | Misha Moskalenko |
| User activity analytics | Minor | 1 | Personal interview statistics page | Misha Moskalenko |
| Advanced search | Minor | 1 | Filters, sorting, pagination on dashboard | Misha Moskalenko |
| Multiple languages | Minor | 1 | i18next (EN, FR, ES) + language switcher | Ralph Feghali |
| Additional browsers | Minor | 1 | Tested on Brave, Firefox, Safari, Chrome | Whole Team |
| **Total** | | **17** | | |

## Individual Contributions

### Misha Moskalenko
- Dashboard page, TanStack Query data fetching, profile page and dropdown
- Interview page (Monaco editor, dynamic routes, avatars endpoint, Meet link), feedback component and saving feedback on the server
- Google Calendar API integration and Google account sync check
- Review page, welcome page, analytics translation
- Modular backend architecture
- Modules: real-time collaboration, user activity analytics, advanced search
- **Challenges:** Google Calendar & Meet integration: Managed OAuth token refresh, Google account sync validation, and automatic Meet link generation for scheduled interviews.
Modular backend architecture: Decoupled routes, services, and data access into isolated domain modules to improve maintainability and prevent team merge conflicts.
Analytics & advanced search: Built multi-criteria filtering and aggregated user activity metrics
Interview flow & feedback persistence: Handled dynamic session routing, custom avatar endpoints, and reliable server-side validation when submitting post-interview reviews.

### Maxime Monnier
- PostgreSQL container, Prisma setup and schema fixes
- Better Auth setup, front/back sign-in connection, CORS, protected route redirects, Google OAuth
- Slot creation form, booking, cancellation, deletion, overlap and time checks, automatic cleanup of past slots
- WebSocket security, synced language selector and timer in the interview room
- End-of-interview flow (feedback request, slot set to COMPLETED)
- HTTPS reverse proxy, data polling
- Modules: ORM, real-time WebSockets, OAuth
- **Challenges:** Container networking & HTTPS: Configured communication between Podman services and secured API/WebSocket traffic through Caddy.
Authentication & OAuth: Resolved CORS, session synchronization, and redirect issues during login/logout.
Slot scheduling: Implemented overlap detection, time validation, and automatic cleanup to prevent conflicting or outdated bookings.
Real-time collaboration: Integrated Hocuspocus/Yjs with secure WebSockets and synchronized editor settings between users.
Database migrations: Handled Prisma schema changes, migration conflicts, and existing data constraints.

### Ralph Feghali
- Privacy Policy and Terms of Service pages
- Internationalization (EN/FR/ES)
- 2FA
- LLM code review integration
- Modules: 2FA, multiple languages, LLM interface
- **Challenges:**   - *AI rate limits:* Groq's free tier quickly returned 429 errors. I added a rotation over several API keys, so a rate-limited request is retried with the next key before an error is shown.
  - *Useful AI answers:* early responses were long and unfocused. I split the review into four types (tips, complexity, bugs, optimal approach), each with its own short prompt. The model answers in the user's interface language and falls back to English for anything unsupported.
  - *Translating everything:* moving all user-facing text, including the legal pages, into three languages meant hunting down hardcoded strings. Typed i18next keys made missing translations show up as compile errors.
  - *2FA flow:* users with 2FA  enabled had to be stopped between the password step and the dashboard. I added a dedicated `/2fa` route to the guest flow, with a QR code for setup and backup codes in case the authenticator is lost.

### Max de Nas de Tourris
- Project management in Jira (backlog, ticket assignment, module tracking)
- Notification system
- Advanced analytics dashboard
- Responsive design for phones (dashboard)
- LLM integration (with Ralph Feghali)
- Modules: notification system, advanced analytics dashboard
- **Challenges:** Duplicate reminders: a job runs every minute and sends a reminder 30 min before each interview. An infoThirty flag on each slot makes sure the reminder goes out only once.
Relevant analytics: the backend picks the feedback written by the other participant. All KPIs, filters and the CSV export use the same filtered dataset.
LLM rate limits: when a Groq API key hits its limit (429), the next key is used automatically. And the prompt limits the usage.

## Resources

- [React](https://react.dev) · [Vite](https://vite.dev) · [Tailwind CSS](https://tailwindcss.com) · [shadcn/ui](https://ui.shadcn.com)
- [Express](https://expressjs.com) · [Prisma](https://www.prisma.io/docs) · [PostgreSQL](https://www.postgresql.org/docs/)
- [Better Auth](https://www.better-auth.com/docs) · [Yjs](https://docs.yjs.dev) · [Hocuspocus](https://tiptap.dev/docs/hocuspocus)
- [Google Calendar API](https://developers.google.com/calendar/api) · [Groq API](https://console.groq.com/docs)
- [Caddy](https://caddyserver.com/docs) · [Podman Compose](https://github.com/containers/podman-compose)

### AI usage
- **During development:** locale for i18n where created and translated by AI; verification and debugging

## Known limitations

- Google Calendar/Meet features require a Google-linked account.
