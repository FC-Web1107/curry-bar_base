import { SiteFooter } from "@/components/layout/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { BeerLineupSection } from "@/components/sections/beer-lineup-section";
import { FvSection } from "@/components/sections/fv-section";
import { InformationSection } from "@/components/sections/information-section";
import { LineSection } from "@/components/sections/line-section";
import { MessageSection } from "@/components/sections/message-section";
import { PeopleSection } from "@/components/sections/people-section";
import { ShopSection } from "@/components/sections/shop-section";

export default function Home() {
  return (
    <>
      <main>
        <FvSection />
        <InformationSection />
        <AboutSection />
        <BeerLineupSection />
        <PeopleSection />
        <MessageSection />
        <LineSection />
        <ShopSection />
      </main>
      <SiteFooter />
    </>
  );
}
