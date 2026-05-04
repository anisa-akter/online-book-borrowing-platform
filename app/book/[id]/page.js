import Link from "next/link";
import { books } from "@/data/books";
import ProtectedRoute from "@/components/ProtectedRoute";
import BorrowButton from "@/components/BorrowButton";

export default function BookDetailsPage({ params }) {
  const book = books.find((item) => item.id === params.id);

  if (!book) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">Book not found</h1>
          <p className="mt-3 text-slate-600">Try browsing the library for another title.</p>
          <Link href="/all-books" className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition">
            Back to All Books
          </Link>
        </div>
      </main>
    );
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[420px_minmax(0,1fr)]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <img src={book.image_url} alt={book.title} className="h-96 w-full rounded-[1.5rem] object-cover" />
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-slate-100 p-4 text-sm text-slate-700">Category: {book.category}</div>
              <div className="rounded-3xl bg-slate-100 p-4 text-sm text-slate-700">Available quantity: {book.available_quantity}</div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-teal-600">Book details</p>
              <h1 className="mt-4 text-4xl font-bold text-slate-900">{book.title}</h1>
              <p className="mt-2 text-lg text-slate-600">By {book.author}</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Book description</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{book.description}</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <BorrowButton bookId={book.id} />
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
