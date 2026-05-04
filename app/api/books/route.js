import { NextResponse } from "next/server";
import { books } from "@/data/books";

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";
  const category = searchParams.get("category") || "";

  const results = books.filter((book) => {
    const matchesQuery = book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
    const matchesCategory = category ? book.category === category : true;
    return matchesQuery && matchesCategory;
  });

  return NextResponse.json(results);
}
