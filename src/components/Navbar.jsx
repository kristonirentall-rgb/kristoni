import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/Logo.jpeg"; // Adjust path if different

// Main nav items
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/90 backdrop-blur-lg shadow-lg border-b border-primary/20"
          : "py-5 bg-background/95",
        "opacity-0 animate-[fadeIn_0.8s_ease-out_forwards_0.2s]"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo + Brand Name */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Kristoni Holdings Logo"
            className="h-10 w-auto transform group-hover:scale-110 transition-transform duration-300 md:h-12"
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
          <span className="text-xl font-extrabold text-primary md:text-2xl">
            <span className="relative inline-block">
              Kristoni
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Holdings</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-lg font-semibold text-foreground/90 hover:text-primary hover:scale-105 transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-full transition-colors duration-300 mobile-menu-container"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl text-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/90 font-bold hover:text-primary transition-all duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Close button inside mobile menu */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-primary hover:bg-primary/10 rounded-full transition-colors duration-300"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdownFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};