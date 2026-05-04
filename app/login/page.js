"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const {data, error} = await authClient.signIn.email({ email, password });
      if (data) {
        alert("Login successful! Redirecting to your profile...");
        router.push("/");
      } else {
        setError(error?.message || "Invalid login credentials. Please try again.");
      }
    } catch (err) {
      setError("Login failed. Please check your email and password.");
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
        errorCallbackURL: `${window.location.origin}/login`,
        disableRedirect: false,
      });
      if (result?.redirect && result?.url) {
        window.location.href = result.url;
        return;
      }
      if (result?.token) {
        router.push("/");
      }
    } catch (err) {
      setError("Google login failed. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-teal-600">Welcome back</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Login to your account</h1>
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
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
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="Enter your password"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
        </form>
        <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
          <span>New here?</span>
          <Link href="/register" className="font-semibold text-slate-900 hover:text-slate-700">
            Create an account
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
