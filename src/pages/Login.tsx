export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden  px-4">

      {/* Ambient Gradient Background */}
      <div className="absolute inset-0 -z-10">

        {/* Top Glow */}
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#1E3A8A]/40 rounded-full blur-[160px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-[#1FA45B]/30 rounded-full blur-[160px]" />

        {/* Center Soft Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_60%)]" />
      </div>

      {/* Card */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10">

        {/* LEFT – Graphic Section */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white relative">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />

          <h2 className="text-3xl font-bold leading-tight">
            WELCOME TO <br /> ZAMANCE CONSULTING.
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
        <div className="p-8 md:p-12 flex flex-col justify-center text-white">
          <h3 className="text-2xl font-semibold">
            Welcome Back
          </h3>
          <p className="text-slate-400 mt-1">
            Please sign in to your account
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label className="text-sm text-slate-400">Email Address</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-lg bg-slate-800/80 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-slate-400">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg bg-slate-800/80 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] font-semibold text-white shadow-lg hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            © 2026 Zamance Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
