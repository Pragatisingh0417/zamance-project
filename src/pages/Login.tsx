import { useState } from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      
      {/* Card */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl bg-slate-900">

        {/* LEFT – Graphic Section */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white relative">
          
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />

          <h2 className="text-3xl font-bold leading-tight">
        WELCOME TO  <br /> ZAMANCE CONSULTING.
          </h2>

          <p className="mt-4 text-white/80 max-w-sm">
            Secure access to your consulting dashboard.
            Make smarter decisions with intelligence-driven solutions.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Trusted by global enterprises
          </div>
        </div>

        {/* RIGHT – Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-white">
            Welcome Back
          </h3>
          <p className="text-slate-400 mt-1">
            Please sign in to your account
          </p>

          <form className="mt-8 space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm text-slate-400">Email Address</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-slate-400">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" className="accent-indigo-500" />
                Remember me
              </label>
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] transition font-semibold text-white shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-slate-500">
            © 2026 Consulting Platform. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

