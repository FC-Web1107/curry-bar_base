import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CocktailSection } from "@/components/sections/cocktail-section";
import { ConceptSection } from "@/components/sections/concept-section";
import { FloorSection } from "@/components/sections/floor-section";
import { FvSection } from "@/components/sections/fv-section";
import { HowToSection } from "@/components/sections/how-to-section";
import { MoodSection } from "@/components/sections/mood-section";
import { NewsSection } from "@/components/sections/news-section";
import { ShopInfoSection } from "@/components/sections/shop-info-section";
import { asset } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ページ最上部のアンカー。
            FVはstickyでビューポート内に留まり続けるため、#homeのリンク先にできない */}
        <div id="home" aria-hidden="true" />
        {/* FVは背景として固定し、後続セクションが上に重なって競り上がる。
            固定はロゴ・ナビが画面トップに達してから始める（FV下部のボタンを見せるため） */}
        <div
          className="
            [--base:390] md:[--base:1280]
            [--top:24] md:[--top:88]
            sticky z-0
            top-[calc(-1*min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px)))]
          "
        >
          <FvSection />
        </div>
        {/* 固定したFVを見せておく余白。後続セクションが上がってくるまでの間 */}
        <div aria-hidden="true" className="h-[50vh]" />
        <div id="after-fv" className="relative z-10">
          {/* 漆喰テクスチャの共通背景 */}
          <div className="[background-size:100%_100%]" style={{ backgroundImage: `url('${asset("/main/common/texture-bg.png")}')` }}>
            <ConceptSection />
            <MoodSection />
            <HowToSection />
            <CocktailSection />
            <FloorSection />
          </div>
          <NewsSection />
          <ShopInfoSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
