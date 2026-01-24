import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-5">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Zamance Logo"
              className="h-10 mb-4 bg-white p-1 rounded"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Zamance is a global consulting and solutions firm specializing in
              Data, Technology, AI Automations, and Engineering — delivering
              outcome-driven solutions with accountability.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white">Services</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-white">Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><NavLink to="/services/data" className="hover:text-white">Data & Intelligence</NavLink></li>
              <li><NavLink to="/services/technology" className="hover:text-white">Technology Consulting</NavLink></li>
              <li><NavLink to="/services/ai-automations" className="hover:text-white">AI Automations</NavLink></li>
              <li><NavLink to="/services/engineering" className="hover:text-white">Engineering Consulting</NavLink></li>
            </ul>
          </div>
{/* Global Presence */}
<div>
  <h4 className="font-semibold mb-4">Global Presence</h4>

  <ul className="space-y-3 text-sm text-white/80">
    <li>
      <span className="block font-medium text-white">🇮🇳 India</span>
      <span>Delivery & Engineering Operations</span>
    </li>

    <li>
      <span className="block font-medium text-white">🇪🇺 Europe</span>
      <span>Consulting, Compliance & Governance (GDPR)</span>
    </li>
  </ul>
</div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-white/80 mb-4">
              Get insights on data, AI, technology, and engineering consulting.
            </p>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full px-4 py-2 text-black text-sm"
              />
              <button
                type="submit"
                className="rounded-full bg-[#1FA45B] px-5 py-2 text-sm font-semibold hover:bg-green-600"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60 gap-4">

          <p>
            © {new Date().getFullYear()} Zamance Consultancy. All rights reserved.
          </p>

          <div className="flex gap-6">
            <NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink>
            <NavLink to="/terms" className="hover:text-white">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
