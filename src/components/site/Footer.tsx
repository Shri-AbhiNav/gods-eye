import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-0 grid-bg radial-fade opacity-30 pointer-events-none" />
      <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-glow to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="God's Eye Technologies" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-display text-xl font-bold leading-none">
                  GOD'S <span className="text-gradient">EYE</span>
                </div>
                <div className="text-[10px] tracking-[0.25em] text-muted-foreground mt-1">
                  TECHNOLOGIES
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed italic">
              "Watching Everything. <span className="text-cyan-glow not-italic font-medium">Protecting Everyone.</span>"
            </p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
              Advanced surveillance and AI-powered CCTV systems engineered for
              modern enterprises, homes, and critical infrastructure.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-full glass hover:glow transition-all hover:-translate-y-0.5"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>CCTV Installation</li>
              <li>AI Smart Cameras</li>
              <li>Remote Monitoring</li>
              <li>Access Control</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} God's Eye Technologies. All rights reserved.</p>
          <p className="text-yellow-500 text-base font-medium">@Shri_Abhinav</p>
          <p>Engineered with precision · Watching what matters.</p>
        </div>
      </div>
    </footer>
  );
}
