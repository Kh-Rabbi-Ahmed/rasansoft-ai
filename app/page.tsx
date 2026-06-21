import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-slate-950" id="top">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
