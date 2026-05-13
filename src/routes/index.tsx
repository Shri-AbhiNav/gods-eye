import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { CctvBackdrop } from "@/components/site/CctvBackdrop";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { WhyUs } from "@/components/site/WhyUs";
import { LiveDemo } from "@/components/site/LiveDemo";
import { Testimonials } from "@/components/site/Testimonials";
import { Portfolio } from "@/components/site/Portfolio";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "God's Eye Technologies" },
      { name: "description", content: "Advanced CCTV systems with AI monitoring, real-time threat detection, and 24/7 professional support by God's Eye Technologies." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <CctvBackdrop />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <LiveDemo />
      <Testimonials />
      <Portfolio />
      <FAQ />
      <Contact />
    </>
  );
}
