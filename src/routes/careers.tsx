import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Users, Rocket, Heart } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — God's Eye Technologies" },
      { name: "description", content: "Join God's Eye Technologies and help build the future of AI-powered surveillance. Explore open roles in engineering, AI, design and operations." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Senior AI/Computer Vision Engineer", dept: "Engineering", location: "Remote · Global", type: "Full-time" },
  { title: "Embedded Firmware Engineer", dept: "Hardware", location: "Bangalore, IN", type: "Full-time" },
  { title: "Cloud Infrastructure Lead", dept: "Platform", location: "Remote · EU", type: "Full-time" },
  { title: "Product Designer (Dashboards)", dept: "Design", location: "Remote", type: "Full-time" },
  { title: "Field Installation Technician", dept: "Operations", location: "Mumbai · Delhi", type: "Full-time" },
  { title: "Customer Success Manager", dept: "Support", location: "Remote", type: "Full-time" },
  { title: "Cybersecurity Analyst", dept: "Security", location: "Hybrid · Pune", type: "Full-time" },
  { title: "Sales Executive — Enterprise", dept: "Sales", location: "Remote · APAC", type: "Full-time" },
];

const perks = [
  { icon: Sparkles, title: "Cutting-edge tech", desc: "Work on the frontier of AI vision, edge compute and real-time analytics." },
  { icon: Heart, title: "Health & wellness", desc: "Comprehensive medical, mental health support and annual wellness budget." },
  { icon: Rocket, title: "Growth & learning", desc: "Conference budget, certifications, and a personal learning stipend." },
  { icon: Users, title: "Remote-first culture", desc: "Flexible hours, async collaboration, and global team meetups." },
];

function CareersPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Careers</span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold leading-tight">
              Build the future of <span className="text-gradient">intelligent security</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At God's Eye Technologies we're a team of engineers, designers and security experts protecting what matters most. Join us to ship tech that watches everything — and protects everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#openings" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-electric px-6 py-3 text-sm font-medium text-primary-foreground glow hover:glow-strong transition-all hover:scale-105">
                View open roles <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:glow transition-all">
                Talk to recruiting
              </Link>
            </div>
          </motion.div>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-6 hover:glow transition-all">
                <p.icon className="h-6 w-6 text-cyan-glow" />
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="relative mt-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Open Roles</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Find your <span className="text-gradient">mission</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              {roles.length} positions open across engineering, design, operations and sales.
            </p>
          </motion.div>

          <div className="mt-12 space-y-3">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group glass rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-border/50 hover:border-cyan-glow/40 hover:glow transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-cyan-glow" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold group-hover:text-cyan-glow transition-colors">{r.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="font-mono text-cyan-glow/80">{r.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {r.type}</span>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-glow group-hover:translate-x-1 transition-transform">
                  Apply <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 glass-strong rounded-3xl p-10 text-center glow">
            <h3 className="font-display text-2xl md:text-3xl font-bold">Don't see your role?</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              We're always looking for exceptional people. Send us your story and let's see where you fit.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-electric px-6 py-3 text-sm font-medium text-primary-foreground glow hover:glow-strong transition-all hover:scale-105">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
