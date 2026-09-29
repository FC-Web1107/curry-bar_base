import Image from "next/image";
import Link from "next/link";
import { CocktailCardDeck } from "@/components/sections/cocktail-card-deck";
import { ChevronRight } from "@/components/ui/chevron-right";
import { MenuText, fontSizeClass, marginTopClass, widthClass } from "@/components/ui/menu-text";
import { menuItems } from "@/lib/menu-items";
import { asset } from "@/lib/utils";

// カードの配置（Figmaの額縁カードの位置を踏襲）
const cardLayoutClasses = [
  "[--left:0] md:[--left:18] [--top:0] md:[--top:0]",
  "[--left:0] md:[--left:14] [--top:48] md:[--top:98]",
  "[--left:0] md:[--left:14] [--top:48] md:[--top:48]",
  "[--left:0] md:[--left:242] [--top:48] md:[--top:96]",
  "[--left:0] md:[--left:80] [--top:48] md:[--top:0]",
];

// カードごとに異なる値（文字の値は MenuText 側で管理）。
// - ボタン：位置は全カード共通なので、説明文の行数に応じて上の余白を変えている。左右余白はPDFの文字・矢印の位置に合わせる
// - overlay：写真に重ねる放射グラデーションの中央の黒の濃さ
const cardVars: Record<string, { button: string; overlay: string }> = {
  curry: {
    button: "[--top:55.4] md:[--top:66.5] [--px:38.7] md:[--px:46.5]",
    overlay: "[--overlay-center:0.8]",
  },
  "story-cocktail": {
    button: "[--top:59.5] md:[--top:71.4] [--px:42.9] md:[--px:51.5]",
    overlay: "[--overlay-center:0.65]",
  },
  "bar-selection": {
    button: "[--top:59.5] md:[--top:71.4] [--px:34.5] md:[--px:41.4]",
    overlay: "[--overlay-center:0.65]",
  },
  "gacha-bingo": {
    button: "[--top:81.6] md:[--top:97.9] [--px:38.7] md:[--px:46.5]",
    overlay: "[--overlay-center:0.85]",
  },
  "non-alcohol": {
    button: "[--top:81.6] md:[--top:97.9] [--px:30.3] md:[--px:36.4]",
    overlay: "[--overlay-center:0.7]",
  },
};

function MenuCard({ index, stacked = false }: { index: number; stacked?: boolean }) {
  const item = menuItems[index];
  const vars = cardVars[item.slug];
  return (
    <Link
      href={`/${item.slug}`}
      className={`
        [--w:340] md:[--w:408]
        [--px:7.3] md:[--px:8.8] [--py:6.3] md:[--py:7.5]
        grid aspect-[386/511]
        ${widthClass}
        px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
        py-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
        border border-[#cbb394]/40
        transition-transform duration-300 ease-out motion-reduce:transition-none
        md:hover:translate-y-[10px]
        ${
          stacked
            ? ""
            : `
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              ${cardLayoutClasses[index]}
            `
        }
      `}
    >
      {/* 外枠は透明度40%の1px線、内枠は外枠と同色の不透明な1px線。枠の間は塗らない（背景が透ける） */}
      <article className="grid h-full w-full grid-cols-[minmax(0,1fr)]">
        {/* 背景写真。中央が黒（濃さはカードごと）・75%の位置で黒50%・外周で透明になる放射グラデーションを
            Gridの同一セルで重ねる */}
        <div className="col-start-1 row-start-1 grid grid-cols-[minmax(0,1fr)] overflow-hidden border border-[#cbb394] bg-black">
          <Image
            src={asset(item.image.src)}
            alt=""
            width={item.image.width}
            height={item.image.height}
            className="col-start-1 row-start-1 aspect-[386/518] h-full w-full object-cover"
            sizes="(min-width: 768px) 30vw, 87vw"
          />
          <div
            aria-hidden="true"
            className={`col-start-1 row-start-1 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,var(--overlay-center))_0%,rgba(0,0,0,0.5)_75%,rgba(0,0,0,0)_100%)] ${vars.overlay}`}
          />
        </div>
        {/* カード情報。
            390px・1280px では各行がPDFどおり1行に収まり、間の画面幅では文字が16pxより小さくならないため折り返す */}
        <div
          className="
            [--px:16.7] md:[--px:20]
            col-start-1 row-start-1 flex flex-col items-center justify-center
            px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
            text-center text-white
          "
        >
          <MenuText item={item} headingLevel="h3" />
          {/* 詳細ページへのボタン。オレンジの塗り（PDF: #ca8e42 85% を黒の上に重ねた色）＋外枠と同色の1px線 */}
          <span
            className={`
              [--w:211.3] md:[--w:253.6] [--h:54.4] md:[--h:65.3] [--fs:16.6] md:[--fs:20]
              flex items-center justify-between
              ${marginTopClass}
              ${widthClass}
              h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
              px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
              ${fontSizeClass}
              rounded-full border border-[#cbb394] bg-[#ac7938] text-white shadow-[0_4px_8px_rgba(0,0,0,0.25)]
              font-maru font-medium leading-none tracking-[0.04em]
              ${vars.button}
            `}
          >
            {item.linkLabel}
            <ChevronRight className={`[--w:11.1] md:[--w:13.3] ${widthClass} aspect-[7/8.5] h-auto`} />
          </span>
        </div>
      </article>
    </Link>
  );
}

export function CocktailSection() {
  return (
    <section
      id="cocktail"
      className="
        [--base:390] md:[--base:1280]
        [--py:96] md:[--py:238]
        w-full
        pt-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* 見出し */}
        <div
          className="
            [--gap:24] md:[--gap:60]
            flex items-center justify-center
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
          "
        >
          <span
            aria-hidden="true"
            className="
              [--w:44] md:[--w:251]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-px bg-white
            "
          />
          <h2
            className="
              [--fs:29] md:[--fs:32]
              shrink-0
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              font-normal leading-[1.5]
            "
          >
            Baseの楽しみ方
          </h2>
          <span
            aria-hidden="true"
            className="
              [--w:44] md:[--w:251]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-px bg-white
            "
          />
        </div>
        {/* SP: カードを重ねて1枚ずつ切り替える */}
        <CocktailCardDeck
          className="
            [--top:56]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:hidden
          "
        >
          {menuItems.map((item, index) => (
            <MenuCard key={item.slug} index={index} stacked />
          ))}
        </CocktailCardDeck>
        {/* md以上: Figmaの配置 */}
        <div className="hidden md:block">
          {/* メニューカード 1段目 */}
          <div
            className="
              md:[--top:36]
              flex flex-col items-center
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              md:flex-row md:items-start
            "
          >
            {[0, 1, 2].map((index) => (
              <MenuCard key={menuItems[index].slug} index={index} />
            ))}
          </div>
          {/* メニューカード 2段目 */}
          <div
            className="
              md:[--top:16]
              flex flex-col items-center
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              md:flex-row md:items-start
            "
          >
            {[3, 4].map((index) => (
              <MenuCard key={menuItems[index].slug} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
