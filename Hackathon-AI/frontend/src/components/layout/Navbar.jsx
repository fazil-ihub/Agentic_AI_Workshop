import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bot, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Submissions", path: "/submissions" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Branding */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 font-bold text-xl tracking-tight hover:text-blue-300 transition"
        >
          <Bot size={22} />
          <span>Agentic Evaluator</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`pb-1 border-b-2 transition-all duration-200 ${
                    isActive
                      ? "text-white border-blue-400"
                      : "text-slate-300 border-transparent hover:text-blue-300 hover:border-blue-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-1 text-base transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
