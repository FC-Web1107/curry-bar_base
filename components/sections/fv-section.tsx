import Image from "next/image";
import Link from "next/link";
import { LuBookOpen, LuMartini, LuSoup, LuUser } from "react-icons/lu";
import { FvNav } from "@/components/sections/fv-nav";
import { ChevronRight } from "@/components/ui/chevron-right";
import { asset } from "@/lib/utils";

// TODO: アイコンはreact-icons（Lucide）による仮素材（正式アイコン支給後に差し替え）
const features = [
  { icon: LuUser, label: "お一人歓迎" },
  { icon: LuBookOpen, label: "バー初心者歓迎"},
  { icon: LuSoup, label: "カレーだけでもOK" },
  { icon: LuMartini, label: "物語カクテル" },
];

// FV右下のCTAボタン（リンク先はページ内アンカー）
const ctaButtons = [
  {
    label: "アクセス・営業時間",
    href: "#map",
    variantClass:
      "border border-[white]/30 bg-[#c9803f]/80 text-white",
  },
  {
    label: "Baseの楽しみ方を見る",
    href: "#cocktail",
    variantClass:
      "border border-[white]/30 bg-[#c9803f]/80 text-white",
  },
];

export function FvSection() {
  return (
    <section id="home" className="[--base:390] md:[--base:1280] grid w-full">
      {/* メインビジュアル */}
      <div className="col-start-1 row-start-1 grid">
        <Image
          src={asset("/main/fv/main-visual.jpg")}
          alt="カウンター越しにボトルを取るバーテンダーとマンゴヤンのボトル"
          width={1179}
          height={756}
          className="col-start-1 row-start-1 h-full w-full object-cover object-[92%_center] md:aspect-[1280/710] md:object-center"
          sizes="100vw"
          priority
        />
        {/* 左側を暗くするグラデーション（SPは全体を暗くして可読性を確保） */}
        <div
          aria-hidden="true"
          className="col-start-1 row-start-1 bg-[rgba(0,0,0,0.55)] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_9.7%,rgba(0,0,0,0)_59.7%)]"
        />
      </div>
      {/* FVコンテンツ */}
      <div
        className="
          [--px:20] md:[--px:75]
          [--top:24] md:[--top:88]
          [--bottom:48] md:[--bottom:64]
          col-start-1 row-start-1
          mx-auto flex w-full max-w-[1280px] flex-col
          px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
        "
      >
        {/* ロゴ・グローバルナビ */}
        <div className="flex items-start justify-between">
          {/* ロゴ・所在地 */}
          <div className="min-w-0 flex-1">
            <h1 className="font-normal">
              <span
                className="
                  [--fs:14] md:[--fs:26]
                  block
                  text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                  leading-[1.4] tracking-[0.04em]
                "
              >
                Curry&Bar
              </span>
              <span
                className="
                  [--fs:40] md:[--fs:86]
                  block
                  text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                  leading-[1.1] tracking-[0.02em]
                "
              >
                Base
              </span>
            </h1>
            {/* 所在地 */}
            <p
              className="
                [--top:10] md:[--top:14]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                whitespace-nowrap text-[13px] leading-[1.6] tracking-[0.06em] text-[#cbb394] md:whitespace-normal md:tracking-[0.14em] [--fs:18] md:text-[clamp(min(14px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              "
            >
              OPEN 19:00 — 3:00{" "}
              <br className="hidden md:inline" />/ CURRY & COCKTAIL
            </p>
          </div>
          <FvNav />
        </div>
        {/* キャッチコピー */}
        <h2
          className="
            [--fs:30] md:[--fs:56]
            [--top:40] md:[--top:48]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            font-normal
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.45] tracking-[0.06em]
          "
        >
          バーが初めてでも、
          <br />
          一人でも、<span className="text-[#c9803f]">気軽に。</span>
        </h2>
        {/* 説明文 */}
        <p
          className="
            [--fs:16] md:[--fs:20]
            [--top:24] md:[--top:32]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            text-[clamp(min(14px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.8] tracking-[0.06em] md:leading-[2.1]
          "
        >
          鹿児島・天文館の地下にある、
          <br />
          カレーとカクテルを楽しめる小さなBar。
          <br />
          飲み終わりの締めカレーにも。
        </p>
        
        {/* Barの特徴バッジ */}
        <ul
          className="
            [--top:32] md:[--top:44]
            [--gap:6] md:[--gap:20]
            grid grid-cols-4
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            md:flex md:flex-wrap
          "
        >
          {features.map((feature) => (
            <li
              key={feature.label}
              className="
                [--h:64] md:[--h:64]
                [--px:4] md:[--px:24]
                [--gap:4] md:[--gap:12]
                [--radius:8]
                flex flex-col items-center justify-center text-center
                min-h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
                py-2
                md:flex-row md:justify-start md:py-1 md:text-left
                gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                rounded-[min(calc(100vw*var(--radius)/var(--base)),calc(var(--radius)*1px))]
                border border-[#d9d9d9]/60 bg-white/10 backdrop-blur-[2px]
              "
            >
              <feature.icon
                aria-hidden="true"
                className="
                  [--w:16] md:[--w:26]
                  w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                  h-auto shrink-0 text-[#c9803f]
                "
              />
              <span className="text-[11px] leading-[1.35] [--fs:20] md:text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]">
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
        {/* CTAボタン */}
        <div
          className="
            [--top:32] md:[--top:28]
            [--gap:12] md:[--gap:20]
            flex flex-col
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            md:flex-row md:justify-end
          "
        >
          {ctaButtons.map((button) => (
            <Link
              key={button.label}
              href={button.href}
              className={`
                [--w:330] [--h:60] md:[--h:72]
                [--px:20] md:[--px:24]
                [--radius:10]
                grid grid-cols-[1em_1fr_1em] items-center
                w-full
                md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
                rounded-[min(calc(100vw*var(--radius)/var(--base)),calc(var(--radius)*1px))]
                [--fs:16] md:[--fs:20]
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                md:text-[min(calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.4] tracking-[0.06em]
                ${button.variantClass}
              `}
            >
              <span className="col-start-2 text-center">{button.label}</span>
              <ChevronRight className="col-start-3 h-[13px] w-[9px] justify-self-end" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
