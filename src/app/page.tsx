import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Pricing } from "@/components/Pricing";
import { Gallery } from "@/components/Gallery";
import { News } from "@/components/News";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Team />
        <Pricing />
        <Gallery />
        <News />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
