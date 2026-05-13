import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cctvHero from "@/assets/cctv-hero.png";

const features = [
  { label: "4K HD Recording", angle: -120, top: "12%", left: "8%" },
  { label: "AI Detection", angle: -60, top: "8%", left: "70%" },
  { label: "Night Vision", angle: 60, top: "55%", left: "82%" },
  { label: "Mobile Access", angle: 120, top: "78%", left: "62%" },
  { label: "Cloud Backup", angle: 180, top: "70%", left: "10%" },
];

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-electric/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Inside the hardware</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Engineered to <span className="text-gradient">see everything.</span>
          </h2>
        </motion.div>

        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          <motion.div
            style={{ scale, rotate }}
            className="relative animate-float"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-glow/30 blur-3xl scale-110" />
            <img
              src={cctvHero}
              alt="Camera feature breakdown"
              width={500}
              height={500}
              loading="lazy"
              className="relative w-[280px] sm:w-[400px] md:w-[500px] drop-shadow-[0_20px_60px_rgba(0,180,255,0.4)]"
            />
          </motion.div>

          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="hidden md:flex absolute items-center gap-3 glass rounded-full px-4 py-2.5 glow"
              style={{ top: f.top, left: f.left }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-cyan-glow animate-ping opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-cyan-glow" />
              </span>
              <span className="text-xs font-medium whitespace-nowrap">{f.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-8 flex flex-wrap justify-center gap-2">
          {features.map((f) => (
            <span key={f.label} className="glass rounded-full px-3 py-1.5 text-xs">{f.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
