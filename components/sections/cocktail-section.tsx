import Image from "next/image";
import Link from "next/link";
import { CocktailCardDeck } from "@/components/sections/cocktail-card-deck";
import { ChevronRight } from "@/components/ui/chevron-right";
import {
  MenuText,
  fontSizeClass,
  marginTopClass,
  widthClass,
} from "@/components/ui/menu-text";
import { menuItems } from "@/lib/menu-items";
import { asset } from "@/lib/utils";

// カードの配置（Figmaの額縁カードの位置を踏襲）。
// カードは 1024px（lg）未満で SP のサイズ、以上で PC のサイズ（[--base] もカード側で切り替える）
const cardLayoutClasses = [
  "[--left:0] lg:[--left:18] [--top:0] lg:[--top:0]",
  "[--left:0] lg:[--left:14] [--top:48] lg:[--top:98]",
  "[--left:0] lg:[--left:14] [--top:48] lg:[--top:48]",
  "[--left:0] lg:[--left:242] [--top:48] lg:[--top:96]",
  "[--left:0] lg:[--left:80] [--top:48] lg:[--top:0]",
];

// カードごとに異なる値（文字の値は MenuText 側で管理）。
// - ボタン：説明文との間の余白。左右余白はPDFの文字・矢印の位置に合わせる
// - overlay：写真に重ねる放射グラデーションの中央の黒の濃さ
const cardVars: Record<string, { button: string; overlay: string }> = {
  curry: {
    button: "[--top:45.4] lg:[--top:56.5] [--px:38.7] lg:[--px:46.5]",
    overlay: "[--overlay-center:0.8]",
  },
  "story-cocktail": {
    button: "[--top:49.5] lg:[--top:61.4] [--px:42.9] lg:[--px:51.5]",
    overlay: "[--overlay-center:0.65]",
  },
  "bar-selection": {
    button: "[--top:49.5] lg:[--top:61.4] [--px:34.5] lg:[--px:41.4]",
    overlay: "[--overlay-center:0.65]",
  },
  "gacha-bingo": {
    button: "[--top:49.5] lg:[--top:61.4] [--px:38.7] lg:[--px:46.5]",
    overlay: "[--overlay-center:0.75]",
  },
  "bar-con": {
    button: "[--top:49.5] lg:[--top:61.4] [--px:34.5] lg:[--px:41.4]",
    overlay: "[--overlay-center:0.7]",
  },
};

function MenuCard({
  index,
  stacked = false,
}: {
  index: number;
  stacked?: boolean;
}) {
  const item = menuItems[index];
  const vars = cardVars[item.slug];
  const className = `
    [--base:390] lg:[--base:1280]
    [--w:340] lg:[--w:408]
    [--px:7.3] lg:[--px:8.8] [--py:6.3] lg:[--py:7.5]
    grid
    ${widthClass}
    px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
    py-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
    border border-[#cbb394]/40
    transition-transform duration-300 ease-out motion-reduce:transition-none
    lg:hover:translate-y-[10px]
    ${
      stacked
        ? // SPの重ねカードは一番高いカードに高さをそろえる
          "h-full"
        : `
          mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          ${cardLayoutClasses[index]}
        `
    }
  `;
  const content = (
    <>
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
            // 高さはカード情報に合わせる（h-0 min-h-full で写真の固有の高さがカードを押し広げないようにする）
            className="col-start-1 row-start-1 h-0 min-h-full w-full object-cover"
            sizes="(min-width: 768px) 30vw, 87vw"
          />
          <div
            aria-hidden="true"
            className={`col-start-1 row-start-1 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,var(--overlay-center))_0%,rgba(0,0,0,0.5)_75%,rgba(0,0,0,0)_100%)] ${vars.overlay}`}
          />
        </div>
        {/* カード情報。カードの高さは内容＋上下同じ余白で決まる（固定の縦横比は持たない）。
              390px・1280px では各行が1行に収まり、間の画面幅では文字が16pxより小さくならないため折り返す */}
        <div
          className="
              [--px:16.7] lg:[--px:20]
              [--py:32] lg:[--py:40]
              col-start-1 row-start-1 flex flex-col items-center justify-center
              px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
              py-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
              text-center text-white
            "
        >
          <MenuText item={item} headingLevel="h3" />
          {/* 詳細ページへのボタン。オレンジの塗り（PDF: #ca8e42 85% を黒の上に重ねた色）＋外枠と同色の1px線 */}
          <span
            className={`
                [--w:211.3] lg:[--w:253.6] [--h:54.4] lg:[--h:65.3] [--fs:16.6] lg:[--fs:20]
                flex items-center justify-between
                ${marginTopClass}
                ${widthClass}
                h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
                ${fontSizeClass}
                rounded-full border border-[#cbb394] bg-[#ac7938] text-white shadow-[0_4px_8px_rgba(0,0,0,0.25)]
                font-shippori font-medium leading-none tracking-[0.04em]
                ${vars.button}
              `}
          >
            {item.linkLabel}
            <ChevronRight
              className={`[--w:11.1] lg:[--w:13.3] ${widthClass} aspect-[7/8.5] h-auto`}
            />
          </span>
        </div>
      </article>
      {item.externalUrl && (
        <span className="sr-only">（新しいタブで開きます）</span>
      )}
    </>
  );

  // 外部サイトへ飛ばすメニューは a タグで新しいタブに開き、それ以外はサブページへ遷移する
  return item.externalUrl ? (
    <a
      href={item.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <Link href={`/${item.slug}`} className={className}>
      {content}
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
        {/* SP・タブレット（1023px以下）: カードを重ねて1枚ずつ切り替える。
            1024px以上なら PC のカードを縮小しても文字が16px以上を保てるため、そこから PC の配置にする */}
        <CocktailCardDeck
          className="
            [--top:56]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            lg:hidden
          "
        >
          {menuItems.map((item, index) => (
            <MenuCard key={item.slug} index={index} stacked />
          ))}
        </CocktailCardDeck>
        {/* 1024px以上: Figmaの配置 */}
        <div className="hidden lg:block">
          {/* メニューカード 1段目 */}
          <div
            className="
              lg:[--top:36]
              flex flex-col items-center
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              lg:flex-row lg:items-start
            "
          >
            {[0, 1, 2].map((index) => (
              <MenuCard key={menuItems[index].slug} index={index} />
            ))}
          </div>
          {/* メニューカード 2段目 */}
          <div
            className="
              lg:[--top:16]
              flex flex-col items-center
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              lg:flex-row lg:items-start
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
