"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Header() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-semibold text-xl text-slate-900">
          BookBorrow
        </Link>

        <nav className="hidden items-center gap-6 md:flex text-slate-700">
          <Link href="/" className="hover:text-slate-900 transition">Home</Link>
          <Link href="/all-books" className="hover:text-slate-900 transition">All Books</Link>
          <Link href="/profile" className="hover:text-slate-900 transition">My Profile</Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/profile">
                <img
                  src={user.image || `https://ui-avatars.com/api/?name=${user.name || user.email}`}
                  alt="Profile"
                  className="h-8 w-8 rounded-full border border-slate-300"
                />
              </Link>
              <span className="hidden sm:inline text-sm text-slate-600">Hello, {user.name || user.email}</span>
              <button onClick={handleLogout} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 transition">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
