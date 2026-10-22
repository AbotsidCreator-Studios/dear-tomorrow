# Dear Tomorrow

A polished future-self letter app, designed to help people write private notes, preserve memories, and reopen them on a chosen future date.

## Features
- Waitlist signup flow with validation
- Sign up / sign in demo using browser-local storage
- Letter writing, drafts, seals, and previews
- Dashboard for upcoming letters and opened memories
- Time capsule detail pages
- Responsive marketing pages that match the supplied design language

## Stack
- React
- TypeScript
- Vite
- React Router

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm run dev
   ```
3. Open the local preview in your browser.

## Environment variables
Copy `.env.example` to `.env` and fill in any production values you need.

## Production notes
This MVP stores data locally in the browser for the prototype experience. For production, connect a secure backend such as Supabase with row-level security, authenticated sessions, and scheduled notifications on server-side jobs.

## Database schema concept
```sql
CREATE TABLE users (
  id uuid primary key,
  email text unique not null,
  password_hash text not null,
  full_name text,
  created_at timestamptz default now()
);

CREATE TABLE letters (
  id uuid primary key,
  user_id uuid references users(id) on delete cascade,
  title text,
  content text,
  future_open_date date,
  status text check (status in ('draft', 'sealed', 'opened')) not null,
  created_at timestamptz default now(),
  sealed_at timestamptz,
  opened_at timestamptz
);
```

## Deployment
Use a static host such as Vercel or Netlify for the front end, and a managed backend for auth and database operations. Configure environment variables securely and never expose secrets in client-side code.
