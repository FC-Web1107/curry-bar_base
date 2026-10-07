import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CocktailSection } from "@/components/sections/cocktail-section";
import { ConceptSection } from "@/components/sections/concept-section";
import { FloorSection } from "@/components/sections/floor-section";
import { FvSection } from "@/components/sections/fv-section";
import { FvSticky } from "@/components/sections/fv-sticky";
import { HowToSection } from "@/components/sections/how-to-section";
import { MoodSection } from "@/components/sections/mood-section";
import { NewsSection } from "@/components/sections/news-section";
import { ShopInfoSection } from "@/components/sections/shop-info-section";
import { RevealObserver } from "@/components/ui/reveal-observer";
import { asset } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ページ最上部のアンカー。
            FVはstickyでビューポート内に留まり続けるため、#homeのリンク先にできない */}
        <div id="home" aria-hidden="true" />
        {/* FVは背景として固定し、後続セクションが上に重なって競り上がる（中身のずらし方・黒フェードの詳細は FvSticky） */}
        <FvSticky>
          <FvSection />
        </FvSticky>
        {/* 固定したFVを見せておく余白。後続セクションが上がってくるまでの間 */}
        <div aria-hidden="true" className="h-[50vh]" />
        {/* flow-root：中の背景の負のマージンを外へ伝えず、#after-fv の上端（FVの黒フェードの基準）を動かさない */}
        <div id="after-fv" className="relative z-10 flow-root">
          {/* 漆喰テクスチャの共通背景。
              下地はConceptセクション先頭の #2a2a2a から、Floorセクション末尾（ラッパー下端）の #000000 へ向かうグラデーション。
              テクスチャは screen で下地に重ねる。
              上端の境界をぼかすため、背景だけを --fade 分上へ延ばし（負のマージン＋同量の padding で内容の位置は変えない）、
              延ばした部分を透明→不透明のマスクでFVになじませる */}
          <div
            className="
              [--base:390] md:[--base:1280]
              [--fade:80] md:[--fade:160]
              -mt-[min(calc(100vw*var(--fade)/var(--base)),calc(var(--fade)*1px))]
              pt-[min(calc(100vw*var(--fade)/var(--base)),calc(var(--fade)*1px))]
              [mask-image:linear-gradient(to_bottom,transparent_0,#000_min(calc(100vw*var(--fade)/var(--base)),calc(var(--fade)*1px)))]
              [background-size:100%_100%]
              [background-blend-mode:screen]
            "
            style={{
              backgroundImage: `url('${asset("/main/common/texture-bg.png")}'), linear-gradient(#2a2a2a 0, #000000 100%)`,
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
      {/* data-reveal の要素をスクロールでぼかしからフェードインさせる */}
      <RevealObserver />
    </>
  );
}
