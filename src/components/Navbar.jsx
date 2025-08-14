import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/Logo.jpeg"; // Adjust path if different
import chairs1 from "@/assets/chairs1.jpg"; // Representative image for Event Rentals
import home1 from "@/assets/home1.jpg"; // Representative image for E-Commerce
import produce1 from "@/assets/produce1.jpg"; // Representative image for Agriculture
import vocational1 from "@/assets/vocational1.jpg"; // Representative image for Education

// Main nav items
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

// Dropdown items for Services
const servicesDropdown = [
  {
    name: "Event Rentals",
    href: "#services",
    image: chairs1,
    filter: "Event Rentals", // Matches filter in ProjectsSection.jsx
  },
  {
    name: "E-Commerce",
    href: "#services",
    image: home1,
    filter: "E-Commerce",
  },
  {
    name: "Agriculture",
    href: "#services",
    image: produce1,
    filter: "Agriculture",
  },
  {
    name: "Education",
    href: "#services",
    image: vocational1,
    filter: "Education",
  },
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
            className="h-12 w-auto transform group-hover:scale-110 transition-transform duration-300"
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
          <span className="text-2xl font-extrabold text-primary">
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

          {/* Services dropdown */}
          <div
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="relative"
          >
            <button
              className="text-lg font-semibold text-foreground/90 hover:text-primary hover:scale-105 transition-all duration-300 flex items-center gap-1"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
           
              <ChevronDown
                size={20}
                className={cn(
                  "transition-transform duration-300",
                  isServicesOpen && "rotate-180"
                )}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-lg shadow-lg rounded-xl border border-primary/20 animate-[dropdownFadeIn_0.3s_ease-out] z-50">
                {servicesDropdown.map((service, idx) => (
                  <a
                    key={idx}
                    href={`${service.href}?filter=${encodeURIComponent(service.filter)}`}
                    className="flex items-center gap-3 px-4 py-3 text-foreground/90 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-lg"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <img
                      src={service.image}
                      alt={`${service.name} preview`}
                      className="h-10 w-10 object-cover rounded-md"
                      onError={(e) => (e.target.src = "/fallback-image.jpg")}
                    />
                    <span className="text-sm font-medium">{service.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-full transition-colors duration-300"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-6 text-2xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/90 font-bold hover:text-primary hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Services dropdown inside mobile menu */}
            <div className="flex flex-col space-y-4">
              <span className="text-foreground/90 font-bold text-2xl">Services</span>
              <div className="flex flex-col pl-6 space-y-3">
                {servicesDropdown.map((service, idx) => (
                  <a
                    key={idx}
                    href={`${service.href}?filter=${encodeURIComponent(service.filter)}`}
                    className="flex items-center gap-3 text-lg font-medium text-foreground/90 hover:text-primary hover:pl-2 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img
                      src={service.image}
                      alt={`${service.name} preview`}
                      className="h-8 w-8 object-cover rounded-md"
                      onError={(e) => (e.target.src = "/fallback-image.jpg")}
                    />
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
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