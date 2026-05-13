import { motion } from "framer-motion";
import office from "@/assets/install-office.jpg";
import home from "@/assets/install-home.jpg";
import warehouse from "@/assets/install-warehouse.jpg";
import retail from "@/assets/install-retail.jpg";

const items = [
  { src: office, label: "Corporate Office · Bengaluru", tag: "32 cameras", aspect: "tall" },
  { src: warehouse, label: "Distribution Warehouse · Pune", tag: "AI tracking", aspect: "wide" },
  { src: home, label: "Smart Home · Mumbai", tag: "Wireless mesh", aspect: "wide" },
  { src: retail, label: "Retail Storefront · Delhi", tag: "24/7 monitoring", aspect: "tall" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Recent work</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Installations & <span className="text-gradient">case studies</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[260px]">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden glass cursor-pointer ${
                it.aspect === "tall" ? "lg:row-span-2" : ""
              }`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              <div className="absolute inset-0 ring-1 ring-inset ring-cyan-glow/0 group-hover:ring-cyan-glow/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-cyan-glow bg-cyan-glow/10 border border-cyan-glow/30 rounded px-2 py-0.5">
                  {it.tag}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{it.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
