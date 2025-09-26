import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Navbar = ({ onBook }) => {
  const [customerId, setCustomerId] = useState("123"); // placeholder
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Profile", href: `/profile/${customerId}` },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-semibold">
          <div className="font-bold shadow-md shadow-blue-600 hover:shadow-black text-blue-500 w-16 h-16 text-center border border-blue-500 rounded-2xl">
            <img src="/CarDetailingWebLogo.png" className="w-16 h-16" alt="Logo" />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="hover:text-slate-900 text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact + Book button */}
        <div className="hidden sm:flex items-center gap-3">
          <a className="text-sm text-slate-600" href="tel:+919116447704">
            <Phone className="w-4 h-4 inline mr-1" /> +91 9116447704
          </a>
          <button
            onClick={onBook}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm"
          >
            Book now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-200 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-sm">
          <nav className="flex flex-col p-4 gap-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-slate-900 text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <a
              className="text-sm text-slate-600"
              href="tel:+919116447704"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4 inline mr-1" /> +91 9116447704
            </a>

            <button
              onClick={() => {
                onBook();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm"
            >
              Book now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
