import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How is CCTV pricing determined?", a: "Pricing depends on number of cameras, camera type (HD vs 4K AI), wiring complexity, and storage requirements. We provide free site surveys and transparent quotes — no hidden costs." },
  { q: "How long does installation typically take?", a: "Most residential installations are completed in a single day. Commercial deployments range from 2-7 days depending on scale. We work in scheduled windows to minimize disruption." },
  { q: "Can I monitor my cameras from my phone?", a: "Yes. Every system ships with our encrypted mobile app for iOS and Android. Watch live feeds, get AI alerts, and review recordings from anywhere in the world." },
  { q: "What warranty do you provide?", a: "All hardware comes with a 3-year manufacturer warranty plus our 2-year installation guarantee. Annual maintenance plans extend coverage indefinitely." },
  { q: "Do you offer 24/7 support?", a: "Absolutely. Our monitoring team operates around the clock with guaranteed response times — under 30 seconds for critical alerts and same-day on-site service when required." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Questions</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Frequently <span className="text-gradient">asked</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass rounded-2xl overflow-hidden transition-all ${open === i ? "glow" : ""}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display font-medium">{f.q}</span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-cyan-glow transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
