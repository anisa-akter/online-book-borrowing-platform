"use client";

import { useEffect, useMemo, useState } from "react";
import BookCard from "@/components/BookCard";
import CategorySidebar from "@/components/CategorySidebar";
import { books as initialBooks } from "@/data/books";

export default function AllBooksPage() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.set("q", search);
      if (category) params.set("category", category);
      const response = await fetch(`/api/books?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      } else {
        setBooks(initialBooks);
      }
      setLoading(false);
    }
    loadBooks();
  }, [search, category]);

  const categories = useMemo(() => Array.from(new Set(initialBooks.map((book) => book.category))), []);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Search the library</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">All Books</h1>
          </div>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search books by title or author"
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none sm:max-w-md"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <CategorySidebar categories={categories} selectedCategory={category} onSelect={setCategory} />
          <div className="space-y-6">
            {loading ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">Loading books...</div>
            ) : books.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
                No books matched your search.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
