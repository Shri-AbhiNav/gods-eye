import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "Aarav Mehta", role: "CEO, Northgate Logistics", quote: "SentraVision transformed our warehouse security. AI alerts cut incidents by 80% in the first quarter." },
  { name: "Sofia Chen", role: "Operations Director, Lumen Retail", quote: "Best installation team we've worked with. Clean cabling, zero downtime, and the dashboard is a joy to use." },
  { name: "Marcus Reid", role: "Facility Manager, Helix Tower", quote: "Their 24/7 monitoring caught an after-hours breach in under 30 seconds. Simply unmatched response time." },
  { name: "Priya Nair", role: "Homeowner, Bandra West", quote: "Premium gear, friendly engineers, and a mobile app I actually love opening. Highly recommended." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-electric/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Trusted globally</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
          What our <span className="text-gradient">clients say</span>
        </h2>

        <div className="mt-14 relative h-[280px] md:h-[220px]">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={false}
              animate={{
                opacity: idx === i ? 1 : 0,
                y: idx === i ? 0 : 20,
                scale: idx === i ? 1 : 0.95,
              }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 glass-strong rounded-3xl p-8 md:p-12 flex flex-col justify-center glow"
              style={{ pointerEvents: idx === i ? "auto" : "none" }}
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-cyan-glow text-cyan-glow" />
                ))}
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-glow to-electric flex items-center justify-center font-display font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-cyan-glow" : "w-1.5 bg-muted-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
