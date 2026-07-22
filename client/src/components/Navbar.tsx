import { useState, useEffect } from "react";
import { navItems, personalInfo } from "@/lib/portfolio-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href);
      const current = sections.find((section) => {
        const el = document.querySelector(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg cyan-gradient flex items-center justify-center font-display font-bold text-sm text-primary-foreground transition-transform group-hover:scale-105">
              RD
            </div>
            <span className="font-display font-semibold text-sm md:text-base text-foreground hidden sm:block">
              Rafael Damasceno
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg cyan-gradient text-primary-foreground transition-transform hover:scale-105"
          >
            Contato
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-foreground transition-all ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-foreground transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-foreground transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            onClick={() => setMobileOpen(false)}
          />
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-lg font-display font-medium transition-colors ${
                  activeSection === item.href
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-4 px-6 py-3 text-base font-medium rounded-lg cyan-gradient text-primary-foreground"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </>
  );
}
