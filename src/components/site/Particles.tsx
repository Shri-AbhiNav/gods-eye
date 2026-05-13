import { useMemo } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        delay: Math.random() * 6,
        dur: 6 + Math.random() * 8,
      })),
    [count]
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-cyan-glow/60 animate-float"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
            boxShadow: "0 0 8px oklch(0.85 0.18 200 / 0.8)",
          }}
        />
      ))}
    </div>
  );
}
