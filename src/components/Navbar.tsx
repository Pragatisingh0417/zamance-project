import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close everything (mobile navigation)
  const closeAllMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // Close only desktop services dropdown
  const closeServicesOnly = () => {
    setServicesOpen(false);
  };

  const services = [
    ["Data & Intelligence", "/services/data-intelligence"],
    ["Technology Consulting", "/services/technology-consulting"],
    ["AI Automations", "/services/ai-automations"],
    ["Engineering Consulting", "/services/engineering-consulting"],
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">

        {/* Logo */}
        <NavLink to="/" onClick={closeAllMenus} className="flex items-center">
          <img
            src={logo}
            alt="Zamance Logo"
            className="w-32 sm:w-40 md:w-44 lg:w-48"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm md:text-base font-medium text-black">

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
              <div className="absolute top-8 left-0 w-60 rounded-lg border border-black/10 bg-white shadow-lg">
                {services.map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={closeServicesOnly}
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
            to="/contact"
            className="ml-4 rounded-full bg-[#1E3A8A] px-6 py-2 text-white font-semibold hover:bg-[#1FA45B]"
          >
            Get Started
          </NavLink>

          <NavLink
            to="/login"
            className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#1FA45B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
              <path d="M4 20a8 8 0 0116 0" />
            </svg>
            <span className="hidden xl:inline">Admin</span>
          </NavLink>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setServicesOpen(false);
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col gap-1 p-4 text-black font-semibold text-base">

            <NavLink to="/" onClick={closeAllMenus} className="py-2 px-2 hover:bg-[#1FA45B]/10">Home</NavLink>
            <NavLink to="/about" onClick={closeAllMenus} className="py-2 px-2 hover:bg-[#1FA45B]/10">About Us</NavLink>

            {/* Mobile Services */}
            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between py-2 px-2 hover:bg-[#1FA45B]/10"
              >
                Services ▾
              </button>

              {servicesOpen && (
                <ul className="pl-4">
                  {services.map(([label, path]) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={closeAllMenus}
                      className="block py-2 px-2 hover:bg-[#1FA45B]/10"
                    >
                      {label}
                    </NavLink>
                  ))}
                </ul>
              )}
            </li>

            <NavLink to="/blog" onClick={closeAllMenus} className="py-2 px-2 hover:bg-[#1FA45B]/10">Blog</NavLink>
            <NavLink to="/contact" onClick={closeAllMenus} className="py-2 px-2 hover:bg-[#1FA45B]/10">Contact</NavLink>

            <NavLink
              to="/contact"
              onClick={closeAllMenus}
              className="mt-2 rounded-full bg-[#1E3A8A] px-4 py-2 text-white text-center hover:bg-[#1FA45B]"
            >
              Get Started
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
}
