import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Services />
      <Features />
      <Process />
      {/*<Testimonials />*/}
      <CTA />
    </>
  );
}