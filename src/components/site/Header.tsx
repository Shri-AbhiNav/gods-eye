import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong glow" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-electric/40 group-hover:bg-electric/70 transition-all" />
              <img
                src={logo}
                alt="God's Eye Technologies"
                className="relative h-10 w-10 object-contain"
              />
            </div>
            <span className="font-display text-base sm:text-lg font-bold tracking-tight leading-none">
              GOD'S <span className="text-gradient">EYE</span>
              <span className="block text-[9px] sm:text-[10px] font-normal tracking-[0.25em] text-muted-foreground mt-0.5">
                TECHNOLOGIES
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-electric px-5 py-2 text-sm font-medium text-primary-foreground glow hover:glow-strong transition-all hover:scale-105"
          >
            Get a Quote
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm hover:bg-secondary/50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
