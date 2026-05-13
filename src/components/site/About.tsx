import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number;
    const dur = 1600;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const stats = [
  { v: 500, s: "+", label: "Installations" },
  { v: 120, s: "+", label: "Corporate Clients" },
  { v: 24, s: "/7", label: "Support Coverage" },
  { v: 10, s: "+", label: "Years of Experience" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">About SentraVision</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              A decade of <span className="text-gradient">protecting</span> what
              matters most.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded with a single mission — to bring enterprise-grade
              surveillance technology to every business and home — SentraVision
              has installed and maintained security systems across hundreds of
              sites. We pair cutting-edge AI hardware with a team of certified
              engineers who treat your safety as their personal responsibility.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Certified, background-checked engineers",
                "Enterprise-grade hardware with lifetime support",
                "End-to-end encrypted live monitoring",
                "Compliance-ready installations (GDPR, ISO 27001)",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--cyan-glow)]" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="glass rounded-2xl p-6 hover:glow transition-all"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                  <Counter value={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
