import { motion } from "framer-motion";
import dome from "@/assets/products/dome.jpg";
import bullet from "@/assets/products/bullet.jpg";
import ptz from "@/assets/products/ptz.jpg";
import wireless from "@/assets/products/wireless.jpg";
import ip from "@/assets/products/ip.jpg";
import turret from "@/assets/products/turret.jpg";
import thermal from "@/assets/products/thermal.jpg";
import nightvision from "@/assets/products/nightvision.jpg";
import ai from "@/assets/products/ai.jpg";
import fisheye from "@/assets/products/fisheye.jpg";
import anpr from "@/assets/products/anpr.jpg";
import solar from "@/assets/products/solar.jpg";
import spy from "@/assets/products/spy.jpg";
import doorbell from "@/assets/products/doorbell.jpg";
import industrial from "@/assets/products/industrial.jpg";
import baby from "@/assets/products/baby.jpg";
import floodlight from "@/assets/products/floodlight.jpg";
import duallens from "@/assets/products/duallens.jpg";
import vehicle from "@/assets/products/vehicle.jpg";
import smartcity from "@/assets/products/smartcity.jpg";

type Product = { name: string; tag: string; desc: string; img: string };

const products: Product[] = [
  { name: "Dome Camera", tag: "Indoor", desc: "Discreet ceiling-mounted 4K dome with 360° awareness.", img: dome },
  { name: "Bullet Camera", tag: "Outdoor", desc: "All-weather long-range bullet with crystal night vision.", img: bullet },
  { name: "PTZ Camera", tag: "Pan · Tilt · Zoom", desc: "AI auto-tracking PTZ with 30x optical zoom.", img: ptz },
  { name: "Wireless WiFi Cam", tag: "Smart Home", desc: "Plug-and-play wireless monitoring from anywhere.", img: wireless },
  { name: "IP Network Camera", tag: "Corporate", desc: "Enterprise-grade IP camera with PoE & encryption.", img: ip },
  { name: "Turret Camera", tag: "Commercial", desc: "Glare-free matte turret built for high-traffic zones.", img: turret },
  { name: "Thermal Camera", tag: "Tactical", desc: "Military-grade thermal sensing through fog & dark.", img: thermal },
  { name: "Night Vision Cam", tag: "Low Light", desc: "Infrared clarity with 100ft cinematic IR range.", img: nightvision },
  { name: "Smart AI Camera", tag: "AI Vision", desc: "Real-time facial recognition & behavior analytics.", img: ai },
  { name: "360° Fisheye", tag: "Panoramic", desc: "Single-lens 360° coverage with smart de-warping.", img: fisheye },
  { name: "ANPR Camera", tag: "Vehicle ID", desc: "Reads number plates at highway speeds, 24/7.", img: anpr },
  { name: "Solar CCTV", tag: "Off-Grid", desc: "Wireless solar-powered surveillance — zero cabling.", img: solar },
  { name: "Hidden Spy Cam", tag: "Covert", desc: "Ultra-mini covert recorder for discreet protection.", img: spy },
  { name: "Doorbell Camera", tag: "Smart Entry", desc: "HD video doorbell with two-way talk & motion AI.", img: doorbell },
  { name: "Industrial Cam", tag: "Heavy Duty", desc: "Rugged metal housing engineered for warehouses.", img: industrial },
  { name: "Baby Monitor", tag: "Family", desc: "Gentle smart monitor with cry & motion detection.", img: baby },
  { name: "Floodlight Cam", tag: "Deterrent", desc: "Twin LED floodlights triggered by motion AI.", img: floodlight },
  { name: "Dual Lens System", tag: "Pro Vision", desc: "Two synchronized lenses for ultra-wide depth.", img: duallens },
  { name: "Vehicle Cam", tag: "Mobile", desc: "Automotive surveillance for fleets & private cars.", img: vehicle },
  { name: "Smart City Cam", tag: "Urban Grid", desc: "Pole-mounted AI surveillance for urban grids.", img: smartcity },
];

function Card({ p, i }: { p: Product; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-glow/40 hover:shadow-[0_0_40px_-5px_oklch(0.85_0.18_200/0.45)]"
    >
      {/* animated gradient border */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, oklch(0.85 0.18 200 / 0.5), transparent 70%)",
          padding: 1,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent z-10" />
        <img
          src={p.img}
          alt={p.name}
          width={896}
          height={896}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        {/* spotlight */}
        <div className="absolute -inset-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, oklch(0.85 0.18 200 / 0.35), transparent 60%)",
          }}
        />
        <span className="absolute top-3 left-3 z-20 glass-strong rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-glow">
          {p.tag}
        </span>
      </div>

      {/* content */}
      <div className="relative p-5">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-cyan-glow transition-colors">
          {p.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            God's Eye Series
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-glow/30 text-cyan-glow transition-all group-hover:bg-cyan-glow group-hover:text-background group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Products() {
  return (
    <section id="products" className="relative py-32 overflow-hidden">
      {/* Background fx */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-[0.18]" />
      <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-electric/15 blur-[140px]" />
      <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-glow/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">
            The Product Showroom
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
            Every camera you'll <span className="text-gradient">ever need.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            From discreet indoor domes to AI-powered smart-city sentinels — explore the
            God's Eye Technologies surveillance lineup.
          </p>
        </motion.div>

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          style={{ perspective: "1200px" }}
        >
          {products.map((p, i) => (
            <Card key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
