"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await authClient.signUpEmail({
        name,
        email,
        password,
        image: image || undefined,
      });
      if (response?.user) {
        router.push("/login");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Unable to register. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const result = await authClient.signInSocial({
        provider: "google",
        callbackURL: window.location.origin,
        errorCallbackURL: `${window.location.origin}/register`,
        disableRedirect: false,
        requestSignUp: true,
      });
      if (result?.redirect && result?.url) {
        window.location.href = result.url;
      } else if (result?.token) {
        router.push("/");
      }
    } catch (err) {
      setError("Google registration failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-teal-600">Create account</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Register with BookBorrow</h1>
        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              placeholder="Your full name"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Photo URL</label>
            <input
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="Optional photo URL"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="Choose a secure password"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
        </form>
        <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
          <span>Already have an account?</span>
          <Link href="/login" className="font-semibold text-slate-900 hover:text-slate-700">
            Login
          </Link>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
}
