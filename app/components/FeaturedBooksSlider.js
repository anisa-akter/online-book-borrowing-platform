"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function FeaturedBooksSlider({ books }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      className="pb-10"
    >
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:grid-cols-[320px_minmax(0,1fr)]">
            <img src={book.image_url} alt={book.title} className="h-80 w-full rounded-3xl object-cover" />
            <div className="space-y-5">
              <div className="inline-flex rounded-full bg-slate-100 px-4 py-1 text-sm text-slate-700">Featured</div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-slate-900">{book.title}</h2>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{book.category}</p>
                <p className="text-slate-600">{book.description}</p>
                <p className="text-sm text-slate-500">By {book.author}</p>
              </div>
              <Link href={`/book/${book.id}`} className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition">
                View book details
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
