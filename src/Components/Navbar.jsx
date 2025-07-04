import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Gallery", to: "/gallery" },
    { name: "Reviews", to: "/reviews" },
    { name: "Booking", to: "/booking" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-md text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white relative group"
          onClick={() => setMenuOpen(false)}
        >
          Ink Studio
          <span className="absolute left-0 -bottom-1 h-1 w-0 bg-pink-600 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.to}
                className={`pb-1 ${
                  pathname === link.to
                    ? "text-pink-500 font-semibold"
                    : "hover:text-pink-500"
                }`}
              >
                {link.name}
              </Link>
              {/* Underline */}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-pink-500 transition-all duration-300 ${
                  pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-6 py-4 space-y-3 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block transition ${
                pathname === link.to
                  ? "text-pink-500 font-semibold"
                  : "hover:text-pink-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
