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

// FVのCTAボタン（リンク先はページ内アンカー）
const ctaButtons = [
  {
    label: "Baseの楽しみ方を見る",
    href: "#cocktail",
    // SPだけメインボタンを高くする
    heightClass: "[--h:66] md:[--h:60]",
    // ガラス加工の濃いオレンジ。矢印は丸囲み
    variantClass:
      "border border-[#e8c489]/60 bg-[linear-gradient(180deg,rgba(178,92,32,0.62)_0%,rgba(138,64,20,0.72)_100%)] text-white backdrop-blur-[8px]",
    circledArrow: true,
  },
  {
    label: "アクセス・営業時間",
    href: "#map",
    heightClass: "[--h:48] md:[--h:60]",
    // 枠線だけのサブボタン
    variantClass: "border border-[#cbb394]/70 bg-black/25 text-white backdrop-blur-[2px]",
    circledArrow: false,
  },
];

export function FvSection() {
  return (
    <section className="[--base:390] md:[--base:1280] grid w-full">
      {/* メインビジュアル（左右反転して、明るい階段側を右端に置く） */}
      <div className="relative z-0 col-start-1 row-start-1 grid overflow-hidden">
        <Image
          src={asset("/main/fv/main-visual.png")}
          alt="オレンジ色の螺旋階段がある地下の店内"
          width={1179}
          height={756}
          className="col-start-1 row-start-1 h-full w-full scale-x-[-1] object-cover object-[92%_center] md:aspect-[1280/710] md:object-center"
          sizes="100vw"
          priority
        />
        {/* SPは右端に写真の光を残すグラデーション。md以上は従来どおり左側だけを暗くする */}
        <div
          aria-hidden="true"
          className="relative z-10 col-start-1 row-start-1 bg-[linear-gradient(to_right,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.88)_45%,rgba(0,0,0,0.6)_65%,rgba(0,0,0,0.15)_85%,rgba(0,0,0,0)_100%)] md:bg-[linear-gradient(to_right,rgba(0,0,0,1)_9.7%,rgba(0,0,0,0)_82.3%)]"
        />
      </div>
      {/* FVコンテンツ */}
      <div
        className="
          [--px:20] md:[--px:75]
          [--top:24] md:[--top:58]
          [--bottom:48] md:[--bottom:64]
          relative z-20 col-start-1 row-start-1
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
            {/* ロゴ下の飾り線 */}
            <span
              aria-hidden="true"
              className="
                [--w:56] md:[--w:104]
                [--top:12] md:[--top:18]
                block
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                h-0.5 bg-[#c9803f]
              "
            />
            {/* 所在地 */}
            <p
              className="
                [--top:12] md:[--top:16]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                whitespace-nowrap text-[13px] leading-[1.6] tracking-[0.06em] text-[#cbb394] md:tracking-[0.14em] [--fs:18] md:text-[clamp(min(14px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              "
            >
              OPEN 19:00 — 3:00 / CURRY & COCKTAIL
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
            [--fs:14] md:[--fs:20]
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
        {/* CTAボタン（説明文との間は100px。ボタン間と下の余白は20px） */}
        <div
          className="
            [--top:100] md:[--top:100]
            [--gap:20] md:[--gap:20]
            flex flex-col
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            md:flex-row md:justify-start
          "
        >
          {ctaButtons.map((button) => (
            <Link
              key={button.label}
              href={button.href}
              className={`
                [--w:330]
                [--px:20] md:[--px:24]
                [--radius:8]
                grid grid-cols-[1fr_auto_1fr] items-center
                w-full
                md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
                rounded-[min(calc(100vw*var(--radius)/var(--base)),calc(var(--radius)*1px))]
                [--fs:16] md:[--fs:20]
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                md:text-[min(calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.4] tracking-[0.06em]
                transition-transform duration-300 ease-out hover:scale-[1.04]
                motion-reduce:transition-none motion-reduce:hover:scale-100
                ${button.heightClass}
                ${button.variantClass}
              `}
            >
              <span className="col-start-2 whitespace-nowrap text-center">{button.label}</span>
              {button.circledArrow ? (
                <span
                  aria-hidden="true"
                  className="
                    [--w:34] md:[--w:40]
                    col-start-3 grid shrink-0 place-items-center justify-self-end
                    w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                    aspect-square rounded-full border border-[#e8c489]/60
                  "
                >
                  <ChevronRight className="h-[11px] w-[8px]" />
                </span>
              ) : (
                <ChevronRight className="col-start-3 h-[13px] w-[9px] justify-self-end" />
              )}
            </Link>
          ))}
        </div>
        {/* Barの特徴バッジ */}
        <ul
          className="
            [--top:20] md:[--top:30]
            [--gap:6] md:[--gap:20]
            grid grid-cols-4
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            md:w-fit
          "
        >
          {features.map((feature) => (
            <li
              key={feature.label}
              className="
                [--h:64] md:[--h:49]
                [--px:4] md:[--px:16]
                [--gap:4] md:[--gap:10]
                [--radius:8]
                flex flex-col items-center justify-center text-center
                min-h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
                py-2
                md:flex-row md:py-1
                gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                rounded-[min(calc(100vw*var(--radius)/var(--base)),calc(var(--radius)*1px))]
                border border-[#cbb394]/60 bg-white/5 backdrop-blur-[2px]
              "
            >
              <feature.icon
                aria-hidden="true"
                className="
                  [--w:16] md:[--w:22]
                  w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                  h-auto shrink-0 text-[#c9803f]
                "
              />
              <span className="text-[11px] leading-[1.35] [--fs:17] md:text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]">
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
