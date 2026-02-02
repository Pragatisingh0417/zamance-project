import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Zamance Logo" className="w-30 sm:w-40 md:w-40 lg:w-48" />
        </NavLink>

        {/* Desktop Menu (only for large screens lg and above) */}
        <ul className="hidden lg:flex items-center text-black gap-6 xl:gap-10 text-sm md:text-base font-medium">
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
              <div className="absolute top-8 left-0 w-56 rounded-lg border border-black/10 bg-white shadow-lg">
                {[
                  ["Data & Intelligence", "/services/data"],
                  ["Technology Consulting", "/services/technology"],
                  ["AI Automations", "/services/ai-automations"],
                  ["Engineering Consulting", "/services/engineering"],
                ].map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    className="block px-4 py-2 text-sm hover:bg-[#1FA45B]/10 hover:text-[#1E3A8A]"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          <NavLink to="/blog" className="hover:text-[#1FA45B]">Blog</NavLink>
          <NavLink to="/contact" className="hover:text-[#1FA45B]">Contact</NavLink>
          <NavLink
  to="/"
  className="flex items-center gap-2 py-2 px-2 rounded-md bg-[#1FA45B]/10 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-[#1FA45B]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
    <path d="M4 20a8 8 0 0116 0" />
  </svg>

  <span>Admin</span>
</NavLink>

          <NavLink
            to="/contact"
            className="ml-4 rounded-full bg-[#1E3A8A] px-6 py-2 text-white font-semibold hover:bg-[#1FA45B]"
          >
            Get Started
          </NavLink>
        </ul>

        {/* Mobile & Tablet Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile & Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col gap-1 p-4 text-black font-semibold text-base">
            <NavLink to="/" className="block py-2 px-2 hover:bg-[#1FA45B]/10">Home</NavLink>
            <NavLink to="/about" className="block py-2 px-2 hover:bg-[#1FA45B]/10">About Us</NavLink>

            {/* Services Collapsible */}
            <li className="block">
              <button
                className="w-full flex justify-between items-center py-2 px-2 hover:bg-[#1FA45B]/10"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services ▾
              </button>
              {servicesOpen && (
                <ul className="pl-4 flex flex-col gap-1">
                  {[
                    ["Data & Intelligence", "/services/data"],
                    ["Technology Consulting", "/services/technology"],
                    ["AI Automations", "/services/ai-automations"],
                    ["Engineering Consulting", "/services/engineering"],
                  ].map(([label, path]) => (
                    <NavLink
                      key={path}
                      to={path}
                      className="block py-2 px-2 hover:bg-[#1FA45B]/10"
                    >
                      {label}
                    </NavLink>
                  ))}
                </ul>
              )}
            </li>

            <NavLink to="/blog" className="block py-2 px-2 hover:bg-[#1FA45B]/10">Blog</NavLink>
            <NavLink to="/contact" className="block py-2 px-2 hover:bg-[#1FA45B]/10">Contact</NavLink>
            <NavLink
  to="/"
  className="flex items-center gap-2 py-2 px-2 rounded-md hover:bg-[#1FA45B]/10 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-[#1FA45B]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
    <path d="M4 20a8 8 0 0116 0" />
  </svg>

  <span>Admin</span>
</NavLink>

            <NavLink
              to="/contact"
              className="mt-2 block rounded-full bg-[#1E3A8A] px-4 py-2 text-white text-center font-semibold hover:bg-[#1FA45B]"
            >
              Get Started
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
}
