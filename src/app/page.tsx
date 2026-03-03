import { createClient } from "@/lib/supabase/server";
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

export const revalidate = 60;

export default async function Home() {
  const supabase = await createClient();

  const [articlesRes, sectionsRes] = await Promise.all([
    supabase
      .from("articles")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .limit(6),
    supabase.from("page_sections").select("*"),
  ]);

  const articles = articlesRes.data ?? [];
  const sections = new Map(
    (sectionsRes.data ?? []).map((s) => [s.id, s]),
  );

  const aboutSection = sections.get("about");
  const servicesSection = sections.get("services");
  const pricingSection = sections.get("pricing");
  const faqSection = sections.get("faq");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs
          content={aboutSection?.content as Parameters<typeof AboutUs>[0]["content"]}
        />
        <Services
          title={servicesSection?.title ?? undefined}
          subtitle={servicesSection?.subtitle ?? undefined}
          items={servicesSection?.content as Parameters<typeof Services>[0]["items"]}
        />
        <Team />
        <Pricing
          title={pricingSection?.title ?? undefined}
          subtitle={pricingSection?.subtitle ?? undefined}
          content={pricingSection?.content as Parameters<typeof Pricing>[0]["content"]}
        />
        <Gallery />
        <News articles={articles} />
        <FAQ
          title={faqSection?.title ?? undefined}
          subtitle={faqSection?.subtitle ?? undefined}
          items={faqSection?.content as Parameters<typeof FAQ>[0]["items"]}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
