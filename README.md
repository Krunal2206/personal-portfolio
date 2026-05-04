# Krunal Thakar — Developer Portfolio

Personal portfolio built with **Next.js 15**, **Tailwind CSS v4**, and **Motion**. Features smooth scroll navigation, animated particle backgrounds, a working contact form via Resend, and a fully responsive layout.

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS v4
- **Animation** — Motion (motion/react)
- **Particles** — tsParticles
- **Forms** — React Hook Form + Zod
- **Email** — Resend
- **Analytics** — Vercel Analytics
- **UI Primitives** — Headless UI

## Sections

- **Home** — Intro with typewriter effect
- **About** — Bio, education, and work experience tabs
- **Skills** — Tech stack grid
- **Projects** — Project showcase cards with GitHub link
- **Contact** — Validated contact form with email delivery

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_RECEIVER_EMAIL=your@email.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` and Vercel handles the rest. Add the environment variables in your Vercel project settings before deploying.