import Image from "next/image";
import Link from "next/link";
import { CocktailCardDeck } from "@/components/sections/cocktail-card-deck";
import { ChevronRight } from "@/components/ui/chevron-right";
import { menuItems } from "@/lib/menu-items";

// カードの配置（Figmaの額縁カードの位置を踏襲）
const cardLayoutClasses = [
  "[--left:0] md:[--left:18] [--top:0] md:[--top:0]",
  "[--left:0] md:[--left:14] [--top:48] md:[--top:98]",
  "[--left:0] md:[--left:14] [--top:48] md:[--top:48]",
  "[--left:0] md:[--left:242] [--top:48] md:[--top:96]",
  "[--left:0] md:[--left:80] [--top:48] md:[--top:0]",
];

function MenuCard({ index, stacked = false }: { index: number; stacked?: boolean }) {
  const item = menuItems[index];
  return (
    <Link
      href={`/${item.slug}`}
      className={`
        [--w:340] md:[--w:408]
        grid aspect-[386/511]
        w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
        border border-[#cbb394]/60 bg-[#0d0b09] p-2.5
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
      <article className="grid h-full w-full">
        {/* 背景写真 */}
        <div className="col-start-1 row-start-1 grid overflow-hidden border border-[#cbb394]/30 bg-black">
          <Image
            src={item.image.src}
            alt=""
            width={item.image.width}
            height={item.image.height}
            className="h-full w-full object-cover opacity-25"
            sizes="(min-width: 768px) 30vw, 87vw"
          />
        </div>
        {/* カード情報 */}
        <div
          className="
            [--px:28] md:[--px:34]
            col-start-1 row-start-1 flex flex-col items-center justify-center
            px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
            text-center
          "
        >
          <p
            className="
              [--fs:28] md:[--fs:32]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-none text-[#cbb394]
            "
          >
            {item.no}
          </p>
          <h3
            className="
              [--fs:28] md:[--fs:34]
              [--top:14] md:[--top:16]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              font-normal
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.15] md:whitespace-nowrap
            "
          >
            {item.title}
          </h3>
          {/* 飾り下線 */}
          <span
            aria-hidden="true"
            className="
              [--w:70] md:[--w:80]
              [--top:12] md:[--top:14]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-px bg-[#cbb394]/80
            "
          />
          <p
            className="
              [--top:10] md:[--top:12]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              text-[15px] leading-[1.6] tracking-[0.2em] text-[#cbb394] [--fs:20] md:text-[min(calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            "
          >
            {item.subtitle}
          </p>
          {/* 説明文 */}
          <p
            className="
              [--top:20] md:[--top:24]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              text-left text-[13px] leading-[1.9] tracking-[0.04em] [--fs:20] md:text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            "
          >
            {item.description}
          </p>
          <span
            className="
              [--fs:16] md:[--fs:20]
              [--top:24] md:[--top:30]
              [--gap:14] md:[--gap:18]
              flex items-center
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.5]
            "
          >
            more
            <ChevronRight className="h-[6.5px] w-[5.5px]" />
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
              [--w:70] md:[--w:251]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-px bg-white
            "
          />
          <h2
            className="
              [--fs:20] md:[--fs:22]
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
              [--w:70] md:[--w:251]
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
