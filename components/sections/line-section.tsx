import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionTitle } from "@/components/ui/section-title";

const lineBenefits = [
  {
    title: "01. 飲める店・買える店の最新リスト",
    image: "/main/line/1.jpg",
    alt: "店内でスマートフォンの店舗リストを見ながらビールを楽しむ女性",
    lines: [
      "取扱店舗は随時拡大しています。",
      "現在まるかしビールを楽しめる場所を、LINEでご案内します。",
    ],
  },
  {
    title: "02. 限定醸造・新作の先行情報",
    image: "/main/line/2.jpg",
    alt: "ブルワリーでスマートフォンの新作ビール情報を見る手元",
    lines: [
      "数量限定の商品や、",
      "新しいラインアップの情報をいち早くお知らせします。",
    ],
  },
  {
    title: "03. 出店イベントのスケジュール",
    image: "/main/line/3.jpg",
    alt: "屋外イベント会場でスマートフォンのスケジュールを確認する男性",
    lines: [
      "ホームゲーム開催日の販売場所や、",
      "地域イベント、試飲会などの予定をお届けします。",
    ],
  },
];

export function LineSection() {
  return (
    <section
      id="line"
      className="[--base:390] md:[--base:1280] w-full bg-[#f9f9f9]"
    >
      <div
        className="
          [--top:80] [--bottom:80] [--left:20] [--right:20]
          md:[--top:102] md:[--bottom:96] md:[--left:183] md:[--right:0]
          mx-auto w-full max-w-[1280px]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
          pl-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
        "
      >
        {/* セクションタイトル */}
        <ScrollReveal>
          <SectionTitle en="LINE" ja="公式LINE登録" tone="dark" labelGap={33} />
        </ScrollReveal>
        {/* キャッチコピー */}
        <ScrollReveal>
          <p
            className="
            [--fs:24] [--top:32]
            md:[--fs:39] md:[--top:52]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            font-zen-maru
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.3] text-[#1b1b1b]
          "
          >
            乗り遅れるな。
            <br />
            まるかし最新情報は、LINEで。
          </p>
        </ScrollReveal>
        {/* 本文 */}
        <ScrollReveal>
          <p
            className="
            [--fs:16] [--top:24]
            md:[--fs:18] md:[--top:41]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            font-zen-maru
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.125] text-[#1b1b1b] [text-wrap:pretty]
          "
          >
            まるかしビールを飲める場所や、
            <br className="hidden md:inline" />
            イベント出店、新作・限定醸造などの最新情報を
            <br className="hidden md:inline" />
            公式LINEでお届けしています。
            <br className="hidden md:inline" />
            取扱店舗や販売場所は、
            <br className="hidden md:inline" />
            随時更新されています。
            <br className="hidden md:inline" />
            次の一杯を逃さないために、
            <br className="hidden md:inline" />
            ぜひ友だち追加をお願いします。
          </p>
        </ScrollReveal>
        {/* 登録メリット一覧 */}
        <ul
          className="
            [--top:40] [--gap:40]
            md:[--top:69] md:[--gap:52]
            flex flex-col
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
          "
        >
          {lineBenefits.map((benefit) => (
            <li key={benefit.title}>
              <ScrollReveal className="flex flex-col md:flex-row">
                {/* 項目画像 */}
                <Image
                  src={benefit.image}
                  alt={benefit.alt}
                  width={337}
                  height={182}
                  className="
                  [--w:337] [--h:182] [--left:15]
                  aspect-[337/182] w-full object-cover
                  md:aspect-auto
                  md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                  md:h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                  md:ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                  shrink-0
                "
                  sizes="(min-width: 768px) 337px, 100vw"
                />
                <div
                  className="
                  [--left:66]
                  md:ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                "
                >
                  {/* 項目タイトル */}
                  <p
                    className="
                    [--fs:18] [--top:16]
                    md:[--fs:24] md:[--top:41]
                    mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                    font-zen-maru
                    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                    leading-[1.4] md:leading-[2.125] text-[#1b1b1b]
                  "
                  >
                    {benefit.title}
                  </p>
                  {/* 項目説明 */}
                  <p
                    className="
                    [--fs:16] [--top:8]
                    md:[--fs:18] md:[--top:12]
                    mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                    font-zen-maru
                    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                    leading-[1.125] text-[#1b1b1b] [text-wrap:pretty]
                  "
                  >
                    {benefit.lines[0]}
                    <br className="hidden md:inline" />
                    {benefit.lines[1]}
                  </p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
        {/* CTAボタン */}
        {/* TODO: LINEの正式URLが決まり次第差し替え */}
        <div
          className="
            [--top:48] [--left:185]
            md:[--top:70]
            flex justify-center md:justify-start
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:pl-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          "
        >
          <ScrollReveal>
            <CtaButton
              label="友だち追加して、乾杯に備える"
              href="#"
              variant="gradient"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
