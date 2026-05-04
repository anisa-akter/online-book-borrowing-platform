import { NextResponse } from "next/server";
import { books } from "@/data/books";

export function GET(request, { params }) {
  const book = books.find((item) => item.id === params.id);
  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }
  return NextResponse.json(book);
}
