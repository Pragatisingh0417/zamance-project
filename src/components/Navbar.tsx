import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Zamance Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">

          <NavLink to="/" className="hover:text-[#1FA45B]">Home</NavLink>
          <NavLink to="/about" className="hover:text-[#1FA45B]">About Us</NavLink>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#1FA45B]">
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute top-8 left-0 w-64 rounded-lg border border-black/10 bg-white shadow-lg">
                {[
                  ["Data & Intelligence", "/services/data"],
                  ["Technology Consulting", "/services/technology"],
                  ["AI Automations", "/services/ai-automations"],
                  ["Engineering Consulting", "/services/engineering"],
                ].map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    className="block px-5 py-3 text-sm hover:bg-[#1FA45B]/10 hover:text-[#1E3A8A]"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          <NavLink to="/blog" className="hover:text-[#1FA45B]">Blog</NavLink>
          <NavLink to="/contact" className="hover:text-[#1FA45B]">Contact</NavLink>
        </ul>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-block rounded-full bg-[#1E3A8A] px-6 py-2 text-white font-semibold hover:bg-[#1FA45B]"
        >
          Get Started
        </NavLink>
      </nav>
    </header>
  );
}
