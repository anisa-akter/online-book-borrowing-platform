export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">BookBorrow</h3>
          <p className="text-sm text-slate-400">A modern book borrowing experience with secure authentication, digital book discovery, and personal library management.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact Us</h4>
          <p className="text-sm text-slate-400">support@bookborrow.com</p>
          <p className="text-sm text-slate-400">+1 (800) 123-BOOK</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Follow</h4>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#" className="rounded-full border border-slate-700 px-3 py-2 hover:border-white transition">Twitter</a>
            <a href="#" className="rounded-full border border-slate-700 px-3 py-2 hover:border-white transition">Instagram</a>
            <a href="#" className="rounded-full border border-slate-700 px-3 py-2 hover:border-white transition">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-900 px-4 py-4 text-center text-sm text-slate-500 sm:px-6">
        © {new Date().getFullYear()} BookBorrow. Built with Next.js, BetterAuth, and Tailwind CSS.
      </div>
    </footer>
  );
}
