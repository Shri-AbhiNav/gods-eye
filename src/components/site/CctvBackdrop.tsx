import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import cctvHero from "@/assets/cctv-hero.png";

/**
 * Fixed CCTV camera that lives behind every section.
 * On the hero it sits on the right side at full presence.
 * As the user scrolls past the hero it scales up, drifts,
 * blurs and fades into a faint ambient backdrop so the rest
 * of the page reads cleanly while still feeling watched.
 */
export function CctvBackdrop() {
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(900);

  useEffect(() => {
    const update = () => setVh(window.innerHeight || 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Hero phase: 0 → vh. Slight zoom into ambient backdrop, then locked.
  const scale = useTransform(scrollY, [0, vh], [1, 1.15]);
  const x = useTransform(scrollY, [0, vh], ["0%", "-10%"]);
  const rotate = useTransform(scrollY, [0, vh], [0, -3]);
  const opacity = useTransform(
    scrollY,
    [0, vh * 0.5, vh],
    [1, 0.45, 0.15],
  );

  // Soft glow behind it fades out a touch faster.
  const glowOpacity = useTransform(scrollY, [0, vh], [1, 0.25]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="fixed inset-0 z-0 pointer-events-none hidden md:flex items-center justify-end pr-4 lg:pr-16"
    >
      <motion.div style={{ scale, x, rotate }} className="relative">
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 rounded-full bg-cyan-glow/30 blur-3xl scale-110"
        />
        <img
          src={cctvHero}
          alt=""
          width={620}
          height={620}
          className="relative w-[420px] lg:w-[560px] drop-shadow-[0_30px_60px_rgba(0,180,255,0.3)]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[110%] w-[110%] rounded-full border border-cyan-glow/20" />
        </div>
      </motion.div>
    </motion.div>
  );
}
