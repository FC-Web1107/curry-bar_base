import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function AboutSection() {
  return (
    <section
      id="about"
      className="[--base:390] md:[--base:1280] w-full bg-[#f9f9f9]"
    >
      <div
        className="
          [--top:80] [--bottom:80] [--left:20] [--right:20]
          md:[--top:219] md:[--bottom:166] md:[--left:140] md:[--right:0]
          mx-auto w-full max-w-[1280px]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
          pl-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
        "
      >
        {/* セクションタイトル */}
        <ScrollReveal>
          <SectionTitle
            en="About"
            ja="まるかしビールについて"
            tone="dark"
            labelGap={16}
          />
        </ScrollReveal>
        <div
          className="
            [--top:32] md:[--top:52]
            flex flex-col md:flex-row md:items-start md:justify-between
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          "
        >
          <div>
            {/* キャッチコピー */}
            <ScrollReveal>
              <p
                className="
                  [--fs:24] md:[--fs:39]
                  font-zen-maru
                  text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                  leading-[1.3] text-[#1b1b1b]
                "
              >
                柏の良いもの、
                <br />
                まるっと一杯に。
              </p>
            </ScrollReveal>
            {/* 本文 */}
            <ScrollReveal>
              <p
                className="
                [--fs:16] [--top:24] [--w:608]
                md:[--fs:18] md:[--top:41]
                w-full md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                font-zen-maru
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.125] text-[#1b1b1b] [text-wrap:pretty]
              "
              >
                「まるかし」は、“まるっと柏”のこと。
                <br />
                <br />
                柏の素材。柏の醸造所。
                <br />
                <br />
                柏を愛し、この街をもっと盛り上げたいと考える人たち。
                <br />
                <br />
                まるかしビールは、柏の良いものを一杯にまるごと詰め込んだ
                <br className="hidden md:inline" />
                柏生まれのクラフトビールです。
                <br />
                <br />
                目指しているのは、柏みやげの新しい定番になること。
                <br />
                <br />
                そして、いつか街の外からも、
                <br />
                <br />
                「まるかしビールを飲みに柏へ行きたい」と言ってもらえる未来をつくることです。
                <br />
                <br />
                試合の日も、何でもない日も。
                <br className="hidden md:inline" />
                柏に集まる人たちのそばに、いつもうまい一杯がある。
                <br />
                <br />
                勝っても、負けても、うまい一杯がある。
                <br className="hidden md:inline" />
                それが、まるかしビールです。
              </p>
            </ScrollReveal>
          </div>
          {/* ビールを注ぐ写真 */}
          <ScrollReveal className="shrink-0" delay={0.1}>
            <Image
              src="/main/about/about.jpg"
              alt="タップからグラスへまるかしビールを注ぐ様子"
              width={502}
              height={280}
              className="
              [--w:502] [--h:280] [--top:24]
              md:[--top:0]
              aspect-[502/280] w-full object-cover
              md:h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
              md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            "
              sizes="(min-width: 768px) 502px, 100vw"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
