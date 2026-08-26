"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function MessageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  // セクション上端が画面下端に入ってから、セクション下端が画面上端を抜けるまでを0〜1とする
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // セクションの出入りで白オーバーレイをフェードさせ、中央付近では固定背景をそのまま見せる
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 0, 0, 0.85],
  );

  return (
    <section
      ref={sectionRef}
      id="message"
      className="
        [--base:390] md:[--base:1280]
        grid w-full
        bg-[image:linear-gradient(rgba(255,255,255,0.83),rgba(255,255,255,0.83)),url('/main/message/message.jpg')] bg-cover bg-center md:bg-fixed
      "
    >
      {/* スクロールフェードオーバーレイ */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: reducedMotion ? 0 : overlayOpacity }}
        className="col-start-1 row-start-1 h-full w-full bg-white"
      />
      <div
        className="
          [--top:64] [--bottom:64] [--px:16]
          md:[--top:107] md:[--bottom:97] md:[--px:0]
          col-start-1 row-start-1
          mx-auto flex w-full max-w-[1280px] flex-col items-center
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
          px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
        "
      >
        {/* セクションタイトル */}
        <ScrollReveal>
          <SectionTitle
            en="Message"
            ja="想い・ストーリー"
            tone="dark"
            layout="column"
          />
        </ScrollReveal>
        {/* キャッチコピー */}
        <ScrollReveal>
          <p
            className="
            [--fs:24] [--top:32]
            md:[--fs:39] md:[--top:61]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            font-zen-maru
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.3] text-center text-[#1b1b1b]
          "
          >
            柏の飲食店と、
            <br />
            一緒に強くなる。
          </p>
        </ScrollReveal>
        {/* 本文 */}
        <ScrollReveal>
          <p
            className="
            [--fs:16] [--top:24]
            md:[--fs:18] md:[--top:52]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            font-zen-maru
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.125] text-center text-[#1b1b1b] [text-wrap:pretty]
          "
          >
            原材料の高騰や人手不足など、地元の飲食店を取り巻く環境は決して簡単なものではありません。
            <br />
            <br />
            だからこそ、まるかしビールは、柏の飲食店と一緒に売れ、
            <br className="hidden md:inline" />
            一緒に街を盛り上げていくビールでありたいと考えています。
            <br />
            <br />
            この一杯が、お店の新しい看板メニューになる。
            <br />
            <br />
            まるかしビールを目当てに、人がお店へ足を運ぶ。
            <br />
            <br />
            お店に人が集まり、街に人が集まり、柏全体がさらに活気づいていく。
            <br />
            <br />
            商品を届けるだけではなく、飲食店と一緒に価値をつくり、
            <br className="hidden md:inline" />
            柏の魅力を街の外へ発信していくこと。
            <br />
            <br />
            ビールで街を強くする。
            <br />
            <br />
            冗談のように聞こえるかもしれませんが、
            <br />
            私たちは本気で取り組んでいます。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
