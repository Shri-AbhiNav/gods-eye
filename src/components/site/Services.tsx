import { motion } from "framer-motion";
import {
  Camera, Wifi, Building2, Home, Eye, Brain, Moon, Fingerprint,
} from "lucide-react";

const services = [
  { icon: Camera, title: "CCTV Installation", desc: "Professional setup with cabling, configuration, and tuning." },
  { icon: Wifi, title: "Wireless Cameras", desc: "Cable-free deployment with rock-solid encrypted streaming." },
  { icon: Building2, title: "Office Surveillance", desc: "Multi-floor coverage tailored to your workspace layout." },
  { icon: Home, title: "Home Security", desc: "Discreet, smart-home integrated cameras for residences." },
  { icon: Eye, title: "Remote Monitoring", desc: "Watch every feed live from any device, anywhere." },
  { icon: Brain, title: "AI Smart Cameras", desc: "Person, vehicle, and behavior detection in real time." },
  { icon: Moon, title: "Night Vision Systems", desc: "Color night vision with ultra-low-light sensors." },
  { icon: Fingerprint, title: "Access Control", desc: "Biometric, RFID, and facial recognition entry systems." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">What we do</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            End-to-end <span className="text-gradient">security solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From single-camera deployments to multi-site enterprise networks —
            we design, install, and maintain it all.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-glow/10 via-transparent to-electric/10" />
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, oklch(0.85 0.18 200 / 0.4), transparent 50%)", padding: 1, mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor" }} />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-electric/10 group-hover:from-cyan-glow/40 group-hover:to-electric/20 transition-all">
                  <s.icon className="h-6 w-6 text-cyan-glow group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
