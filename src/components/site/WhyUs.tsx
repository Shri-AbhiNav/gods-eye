import { motion } from "framer-motion";
import { Clock, Wrench, Zap, BadgeCheck, Cpu, Users } from "lucide-react";

const items = [
  { icon: Clock, title: "24/7 Monitoring", desc: "Eyes on your property at every hour, every day." },
  { icon: Wrench, title: "Pro Installation", desc: "Certified engineers, clean cabling, zero hassle." },
  { icon: Zap, title: "Fast Maintenance", desc: "Same-day response on critical incidents." },
  { icon: BadgeCheck, title: "Affordable Pricing", desc: "Enterprise quality without enterprise pricing." },
  { icon: Cpu, title: "Latest Technology", desc: "AI vision, edge computing, 4K HDR sensors." },
  { icon: Users, title: "Expert Engineers", desc: "10+ years average team experience." },
];

export function WhyUs() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Why us</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            The <span className="text-gradient">SentraVision</span> difference
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group glass rounded-2xl p-7 hover:glow transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-electric/10 group-hover:scale-110 transition-transform">
                  <it.icon className="h-5 w-5 text-cyan-glow" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">{it.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
