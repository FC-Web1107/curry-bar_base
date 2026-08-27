import { SiteFooter } from "@/components/layout/site-footer";
import { CocktailSection } from "@/components/sections/cocktail-section";
import { ConceptSection } from "@/components/sections/concept-section";
import { FloorSection } from "@/components/sections/floor-section";
import { FvSection } from "@/components/sections/fv-section";
import { HowToSection } from "@/components/sections/how-to-section";
import { MoodSection } from "@/components/sections/mood-section";
import { NewsSection } from "@/components/sections/news-section";
import { ShopInfoSection } from "@/components/sections/shop-info-section";

export default function Home() {
  return (
    <>
      <main>
        <FvSection />
        {/* 漆喰テクスチャの共通背景 */}
        <div className="bg-[url('/main/common/texture-bg.png')] [background-size:100%_100%]">
          <ConceptSection />
          <MoodSection />
          <HowToSection />
          <CocktailSection />
          <FloorSection />
        </div>
        <ShopInfoSection />
        <NewsSection />
      </main>
      <SiteFooter />
    </>
  );
}
