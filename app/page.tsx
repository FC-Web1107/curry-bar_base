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
          {/* 漆喰テクスチャの共通背景。
              下地は #372710 から始まり、Conceptの導入文「家でもなく、職場でもない。」の位置で #333333 になり、
              そこからFloorセクション末尾（ラッパー下端）にかけて #000000 へ向かうグラデーション。
              テクスチャは screen で下地に重ねる（--h は #333333 になる位置＝導入文の位置） */}
          <div
            className="
              [--base:375] md:[--base:1280]
              [--h:1118] md:[--h:1729]
              [background-size:100%_100%]
              [background-blend-mode:screen]
            "
            style={{
              backgroundImage: `url('${asset("/main/common/texture-bg.png")}'), linear-gradient(#372710 0, #333333 min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px)), #000000 100%)`,
            }}
          >
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
