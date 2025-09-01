import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import logo from "@/assets/Logo.jpeg";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check system preference for dark mode
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const handleNavClick = (href, event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        "bg-background/80 backdrop-blur-lg border-b",
        isScrolled
          ? "py-3 border-border/40 shadow-sm"
          : "py-4 border-transparent",
        "dark:bg-background/90 dark:border-border/20"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        {/* Logo + Brand Name */}
        <a 
          href="#hero" 
          className="flex items-center space-x-3 group"
          onClick={(e) => handleNavClick('#hero', e)}
          aria-label="Kristoni Holdings Home"
        >
          <img
            src={logo}
            alt="Kristoni Holdings Logo"
            className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-300 md:h-12"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='20' text-anchor='middle' fill='%23333'%3ELOGO%3C/text%3E%3C/svg%3E";
            }}
          />
          <span className="text-xl font-bold md:text-2xl">
            <span className="text-primary dark:text-primary-foreground">Kristoni</span>
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text dark:from-blue-400 dark:to-amber-300">
              Holdings
            </span>
          </span>
        </a>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 dark:text-foreground/70 dark:hover:text-primary-foreground"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors duration-200 hidden md:flex"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun size={20} className="text-foreground" />
            ) : (
              <Moon size={20} className="text-foreground" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
  className={cn(
    "fixed inset-0 transition-all duration-500 ease-in-out md:hidden",
    "bg-gradient-to-br from-background/80 via-background/60 to-background/40",
    "backdrop-blur-xl backdrop-saturate-150",
    "dark:from-background/90 dark:via-background/80 dark:to-background/70",
    isMenuOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none delay-300"
  )}
  style={{
    backgroundImage: isMenuOpen 
      ? 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 180, 0, 0.08) 0%, transparent 50%)'
      : 'none'
  }}
>
         {/* Mobile Menu Content */}
<div
  ref={mobileMenuRef}
  className={cn(
    "absolute top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-2xl",
    "shadow-2xl border-l border-border/20",
    "transform transition-all duration-500 ease-out",
    "dark:bg-background/90 dark:border-border/30 dark:shadow-2xl dark:shadow-black/30",
    isMenuOpen 
      ? "translate-x-0 opacity-100" 
      : "translate-x-full opacity-0"
  )}
 style={{
  // Gradient overlays - adjust colors and opacity
  backgroundImage: `
    linear-gradient(135deg, 
      rgba(255, 255, 255, 0.08) 0%, 
      rgba(255, 251, 0, 0.03) 50%, 
      rgba(255, 255, 255, 0.01) 100%),
    radial-gradient(circle at 20% 30%, 
      rgba(59, 130, 246, 0.15) 0%, 
      transparent 50%),
    radial-gradient(circle at 80% 70%, 
      rgba(245, 158, 11, 0.1) 0%, 
      transparent 50%)
  `,
  
  // Blur effects - adjust values
  backdropFilter: 'blur(24px) saturate(200%) contrast(110%) brightness(105%)',
  WebkitBackdropFilter: 'blur(24px) saturate(200%) contrast(110%) brightness(105%)',
  
  // Border effects
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: `
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1)
  `,
  
  // Additional effects
  backgroundBlendMode: 'overlay',
  isolation: 'isolate'
}}
>
  {/* Premium Background Effects */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-400/5" />
    
    {/* Geometric pattern */}
    <div className="absolute inset-0 opacity-5"
         style={{
           backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
           backgroundSize: '50px 50px'
         }} />
  </div>

  <div className="relative p-6 h-full flex flex-col z-10">
    {/* Premium Header Section */}
    <div className="flex items-center justify-between mb-10 pb-4 border-b border-border/20 dark:border-border/30">
      <div className="flex items-center space-x-3">
        <div className="w-2 h-8 bg-gradient-to-b from-primary to-amber-500 rounded-full" />
        <span className="text-xl font-semibold text-foreground dark:text-foreground tracking-wide">
          Navigation
        </span>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* Premium Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={cn(
            "p-3 rounded-xl transition-all duration-300 transform hover:scale-110",
            "bg-gradient-to-br from-accent to-accent/80",
            "shadow-md hover:shadow-lg",
            "dark:from-accent/90 dark:to-accent/70",
            "border border-border/10 dark:border-border/20"
          )}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <Sun size={20} className="text-foreground" />
          ) : (
            <Moon size={20} className="text-foreground" />
          )}
        </button>

        {/* Premium Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "p-3 rounded-xl transition-all duration-300 transform hover:scale-110",
            "bg-gradient-to-br from-gray-100 to-gray-200",
            "shadow-md hover:shadow-lg",
            "dark:from-gray-800 dark:to-gray-700",
            "border border-border/10 dark:border-border/20"
          )}
          aria-label="Close menu"
        >
          <X size={20} className="text-foreground" />
        </button>
      </div>
    </div>


              <nav className="flex-1 space-y-3">
  {navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      onClick={(e) => handleNavClick(item.href, e)}
      className="block py-4 px-6 rounded-2xl text-base font-medium transition-all duration-300 transform hover:scale-102 group"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(0, 0, 0, 0.4) 0%,
            rgba(255, 238, 6, 0.83) 50%,
            rgba(19, 19, 19, 0.95) 100%
          )
        `,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: `
          0 4px 20px rgba(0, 0, 0, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
    >
      <span className="text-foreground/90 group-hover:text-primary transition-colors duration-300 dark:text-foreground/80 dark:group-hover:text-primary-foreground">
        {item.name}
      </span>
    </a>
  ))}
</nav>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};