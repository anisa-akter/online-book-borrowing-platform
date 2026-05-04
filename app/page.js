import Link from "next/link";
import { books } from "@/data/books";
import FeaturedBooksSlider from "@/components/FeaturedBooksSlider";

const featuredBooks = books.slice(0, 4);
const categories = ["Story", "Tech", "Science"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_35%)]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex rounded-full bg-teal-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-teal-200">
              New arrivals every week
            </span>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Find Your Next Read</h1>
            <p className="max-w-xl text-lg leading-8 text-slate-200">
              Discover books across Story, Tech, and Science. Borrow online securely, manage your profile, and enjoy a modern library experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/all-books" className="z-10 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/10 hover:bg-slate-100 transition">
                Browse Now
              </Link>
              <Link href="/profile" className="z-10 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
                My Profile
              </Link>
            </div>
          </div>
          <div className="grid place-items-center">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-teal-200">Featured borrow</p>
              <h2 className="mt-4 text-3xl font-bold text-white">The library is now on your device.</h2>
              <p className="mt-4 text-slate-200">Get instant access to curated picks, trending titles, and a safer borrowing workflow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">New Arrivals</p>
          <div className="mt-4 overflow-hidden rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            Special Discount on Memberships • "Atomic Habits" • "Cosmos" • "The Night Circus" • 24h Express Reserve
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-teal-600">Featured Books</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Top picks for your next chapter</h2>
          </div>
          <Link href="/all-books" className="self-start rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition">
            Explore all books
          </Link>
        </div>
        <FeaturedBooksSlider books={featuredBooks} />
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-teal-200">{category}</p>
              <h3 className="mt-4 text-2xl font-bold">{category} Collection</h3>
              <p className="mt-3 text-slate-300">Browse carefully selected titles in the {category} section and borrow instantly when you find the perfect match.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Why choose BookBorrow?</p>
            <h2 className="text-4xl font-bold text-slate-900">Borrow smarter with a secure experience</h2>
            <p className="text-slate-600">From intuitive search to a private profile area, BookBorrow gives you a polished library experience without the paperwork.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Secure login</h3>
                <p className="mt-2 text-sm text-slate-600">Email/password and Google login backed by BetterAuth.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Fast book discovery</h3>
                <p className="mt-2 text-sm text-slate-600">Filter by category, search by title, and borrow in just a few clicks.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-900/95 p-8 text-slate-100 shadow-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-200">Student Friendly</p>
              <h3 className="mt-4 text-3xl font-semibold">Digital borrowing for modern readers</h3>
              <p className="mt-4 text-slate-300">Create an account, save your preferences, and keep track of books from anywhere.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-900 shadow-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-600">Easy access</p>
              <h3 className="mt-4 text-3xl font-semibold">Responsive on every screen</h3>
              <p className="mt-4 text-slate-600">Designed for mobile, tablet, and desktop so your library is always in reach.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
