"use client";

import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="shadow-lg rounded-3xl overflow-hidden bg-white/95 border border-slate-200 hover:-translate-y-1 transition-transform duration-300">
      <div className="h-56 overflow-hidden bg-slate-100">
        <img src={book.image_url} alt={book.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span className="font-semibold text-slate-700">{book.category}</span>
          <span>{book.available_quantity} copies</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{book.title}</h3>
        <p className="min-h-[3rem] text-sm text-slate-600">{book.description}</p>
        <p className="text-sm text-slate-500">By {book.author}</p>
        <Link href={`/book/${book.id}`} className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-700">
          View Details
        </Link>
      </div>
    </div>
  );
}
