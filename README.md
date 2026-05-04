# Online Book Borrowing Platform

A responsive library application built with Next.js, Tailwind CSS, and BetterAuth. Users can search and filter books, login or register with email/password, use Google login, view protected book details, and manage their profile.

## Live URL

Live deployment link: `https://your-live-url.vercel.app` (replace with your actual deployed URL)

## Key Features

- Landing page with banner, marquee, featured book carousel, category highlights, and responsive layout.
- Login and registration pages with email/password plus Google authentication.
- All Books page with search functionality and category sidebar filtering.
- Private book details page for authenticated users.
- Profile page with update information form for name and image.
- Local book dataset served through API routes.
- Uses BetterAuth for secure authentication and MongoDB for persistence.

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `better-auth`
- `@better-auth/mongo-adapter`
- `@heroui/react`
- `@heroui/styles`
- `mongodb`
- `swiper`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and set the values:

- `MONGO_URI`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_BASE_URL`
- `BETTER_AUTH_SECRET`

## Notes

- The app uses BetterAuth for secure user authentication.
- Book data is stored locally in `app/data/books.js` and served through API routes.
- Refreshing any route works with the Next.js App Router.
