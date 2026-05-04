"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function BorrowButton({ bookId }) {
  const { data } = authClient.useSession();
  const session = data?.data;
  const signedIn = Boolean(session);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleBorrow = () => {
    if (!signedIn) {
      setMessage("Please login first to borrow this book.");
      router.push("/login");
      return;
    }
    setMessage("Borrow request sent! Check your profile for updates.");
  };

  return (
    <div className="space-y-3">
      <button onClick={handleBorrow} className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition">
        Borrow This Book
      </button>
      {message ? <p className="text-sm text-emerald-700">{message}</p> : null}
    </div>
  );
}
