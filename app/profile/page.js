"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data } = authClient.useSession();
  const sessionData = data?.data;
  const user = sessionData?.user;

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-teal-600">My profile</p>
                <h1 className="mt-3 text-3xl font-bold text-slate-900">Welcome back{user?.name ? `, ${user.name}` : ""}</h1>
              </div>
              <Link href="/profile/edit" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition">
                Update information
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Name</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{user?.name || "No name provided"}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Email</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{user?.email}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Photo URL</p>
                <p className="mt-3 text-sm text-slate-700 break-all">{user?.image || "Not set"}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Account status</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{sessionData ? "Active" : "Signed out"}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
