"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";

export default function ProfileEditPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const result = await authClient.updateUser({ name, image: image || undefined });
      if (result?.status) {
        setStatus("Profile updated successfully.");
        router.push("/profile");
      } else {
        setStatus("Unable to update profile. Please try again.");
      }
    } catch (error) {
      setStatus("Update failed. Please check your input.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-600">Update profile</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">Edit your information</h1>
            <form onSubmit={handleUpdate} className="mt-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your display name"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Photo URL</label>
                <input
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  placeholder="Enter a photo URL"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {loading ? "Updating..." : "Update Information"}
              </button>
              {status ? <p className="text-sm text-slate-600">{status}</p> : null}
            </form>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
