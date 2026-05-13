import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden pt-32"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 grid-bg radial-fade opacity-40 animate-grid"
      />
      <Particles count={50} />

      {/* Glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-electric/20 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
          >
            <Zap className="h-3 w-3 text-cyan-glow" />
            <span className="text-muted-foreground">AI-Powered Surveillance · 24/7 Active</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Watching
            <br />
            Everything.
            <br />
            <span className="text-gradient">Protecting Everyone.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            God's Eye Technologies delivers next-generation CCTV and AI
            surveillance — real-time threat detection, 24/7 monitoring, and
            professional installation engineered for absolute peace of mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-electric px-7 py-3.5 text-sm font-medium text-primary-foreground glow hover:glow-strong transition-all hover:scale-[1.03]"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-cyan-glow/40 transition-all"
            >
              <Play className="h-4 w-4 text-cyan-glow" />
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              ["10+", "Years"],
              ["500+", "Installs"],
              ["24/7", "Support"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-2xl font-bold text-gradient">{k}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* The CCTV camera lives in <CctvBackdrop /> as a fixed
            element so it can persist as the page background while
            scrolling. This empty column reserves the same space. */}
        <div aria-hidden className="hidden lg:block" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-cyan-glow to-transparent" />
      </motion.div>
    </section>
  );
}
