import { motion } from "framer-motion";
import { Activity, AlertTriangle, Camera, MapPin, Users, Wifi } from "lucide-react";
import commandCenter from "@/assets/command-center.jpg";

const feeds = [
  { id: "CAM-01", label: "Main Entrance", status: "active" },
  { id: "CAM-02", label: "Parking · East", status: "active" },
  { id: "CAM-03", label: "Loading Bay", status: "alert" },
  { id: "CAM-04", label: "Server Room", status: "active" },
];

export function LiveDemo() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Command Center</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Your <span className="text-gradient">live security</span> dashboard
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real-time AI tracking, motion alerts, and analytics — all from one
            unified mission control.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-12 glass-strong rounded-3xl p-4 md:p-6 glow overflow-hidden relative"
        >
          {/* Top status bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-glow" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">sentravision://control · live</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><Wifi className="h-3 w-3 text-cyan-glow" /> 32 cams online</span>
              <span className="flex items-center gap-1.5"><Users className="h-3 w-3 text-cyan-glow" /> 4 operators</span>
            </div>
          </div>

          <div className="mt-4 grid lg:grid-cols-3 gap-4">
            {/* Main feed */}
            <div className="lg:col-span-2 relative rounded-xl overflow-hidden aspect-video bg-black">
              <img
                src={commandCenter}
                alt="Security feed"
                width={1600}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover opacity-90"
              />
              {/* Scanline */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-x-0 h-[3px] bg-gradient-to-b from-cyan-glow/0 via-cyan-glow to-cyan-glow/0 animate-scan" />
              </div>
              {/* Tracking box */}
              <motion.div
                animate={{ x: [0, 60, 30, 80, 0], y: [0, 20, 40, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/3 h-24 w-24 border-2 border-cyan-glow rounded-md"
              >
                <span className="absolute -top-6 left-0 text-[10px] font-mono bg-cyan-glow text-background px-1.5 py-0.5 rounded">
                  PERSON · 98%
                </span>
                <span className="absolute -top-1 -left-1 h-2 w-2 bg-cyan-glow" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-cyan-glow" />
                <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-cyan-glow" />
                <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-cyan-glow" />
              </motion.div>
              {/* Overlay info */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-background/60 backdrop-blur rounded px-2 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-destructive animate-ping" />
                  <span className="relative h-2 w-2 rounded-full bg-destructive" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider">REC · CAM-01</span>
              </div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-glow bg-background/60 backdrop-blur px-2 py-1 rounded">
                14:23:48 UTC · 4K
              </div>
            </div>

            {/* Side panel */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground uppercase tracking-wider">Feeds</span>
                  <Activity className="h-3 w-3 text-cyan-glow" />
                </div>
                <ul className="mt-3 space-y-2">
                  {feeds.map((f) => (
                    <li key={f.id} className="flex items-center justify-between text-xs">
                      <span className="font-mono">{f.id} · {f.label}</span>
                      <span className={`h-1.5 w-1.5 rounded-full ${f.status === "alert" ? "bg-destructive animate-pulse" : "bg-cyan-glow"}`} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-xl p-4">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-muted-foreground uppercase tracking-wider">Live Alerts</span>
                  <AlertTriangle className="h-3 w-3 text-yellow-400" />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
                    <div><div>Motion detected · Loading Bay</div><div className="text-muted-foreground font-mono text-[10px]">14:22:11</div></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-glow shrink-0" />
                    <div><div>Person identified · Lobby</div><div className="text-muted-foreground font-mono text-[10px]">14:18:02</div></div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-muted-foreground uppercase tracking-wider">Site Map</span>
                  <MapPin className="h-3 w-3 text-cyan-glow" />
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { z: "Z1", s: "ok" },
                    { z: "Z2", s: "ok" },
                    { z: "Z3", s: "ok" },
                    { z: "Z4", s: "ok" },
                    { z: "Z5", s: "live" },
                    { z: "Z6", s: "alert" },
                    { z: "Z7", s: "ok" },
                    { z: "Z8", s: "ok" },
                    { z: "Z9", s: "ok" },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className={`relative aspect-square rounded border flex flex-col items-center justify-center gap-0.5 transition-all hover:scale-105 cursor-pointer ${
                        c.s === "live"
                          ? "bg-cyan-glow/30 border-cyan-glow/60 animate-pulse"
                          : c.s === "alert"
                          ? "bg-destructive/20 border-destructive/60"
                          : "bg-cyan-glow/5 border-cyan-glow/20 hover:bg-cyan-glow/15"
                      }`}
                    >
                      <Camera className={`h-3 w-3 ${c.s === "alert" ? "text-destructive" : "text-cyan-glow"}`} />
                      <span className="text-[8px] font-mono text-foreground/80 leading-none">{c.z}</span>
                      <span className="absolute top-0.5 right-0.5 h-1 w-1 rounded-full bg-cyan-glow" />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span><span className="text-cyan-glow">●</span> 8 Online</span>
                  <span><span className="text-destructive">●</span> 1 Alert</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
