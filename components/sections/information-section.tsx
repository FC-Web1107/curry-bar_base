import {
  InformationCard,
  type InformationItem,
} from "@/components/sections/information-card";
import { InformationCarousel } from "@/components/sections/information-carousel";
import { HeadingUnderline } from "@/components/ui/heading-underline";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// TODO: インスタグラム投稿（画像・テキスト）が未確定のため、Figmaのままグレーのプレースホルダーと仮テキストで実装
const informationItems: InformationItem[] = [
  { text: "テキストが入ります。テキストが入ります。テキストが入ります。" },
  { text: "テキストが入ります。テキストが入ります。テキストが入ります。" },
  { text: "テキストが入ります。テキストが入ります。テキストが入ります。" },
  { text: "テキストが入ります。テキストが入ります。テキストが入ります。" },
];

export function InformationSection() {
  return (
    <section className="[--base:390] md:[--base:1280] grid w-full bg-white">
      {/* 黄色帯背景 */}
      <div
        aria-hidden="true"
        className="
          [--h:240] [--top:480]
          md:[--h:376]
          col-start-1 row-start-1
          w-full self-end md:self-start
          h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
          md:mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          bg-[#fef100]
        "
      />
      {/* コンテンツ */}
      <div
        className="
          [--top:80] [--bottom:60]
          md:[--top:150] md:[--bottom:98]
          col-start-1 row-start-1
          mx-auto w-full min-w-0 max-w-[1280px]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
        "
      >
        {/* 見出し */}
        <ScrollReveal className="mx-auto w-fit">
          <h2
            className="
              [--fs:28] md:[--fs:39]
              font-inter font-extrabold
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.2] text-[#1b1b1b]
            "
          >
            INFORMATION
          </h2>
          {/* 見出し下線 */}
          <HeadingUnderline />
        </ScrollReveal>
        {/* 投稿カード（PC: 4列グリッド） */}
        <div
          className="
            [--top:169] [--px:53] [--gap:30]
            hidden md:grid md:grid-cols-4
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
          "
        >
          {informationItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <InformationCard text={item.text} />
            </ScrollReveal>
          ))}
        </div>
        {/* 投稿カード（SP: 2投稿ずつの横スクロール） */}
        <div
          className="
            [--top:60] [--px:20]
            md:hidden
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
          "
        >
          <ScrollReveal>
            <InformationCarousel items={informationItems} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
