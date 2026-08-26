"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { CtaButton } from "@/components/ui/cta-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function BeerLineupSection() {
  const bandRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  // 帯の上端が画面下端に入ってから、帯の下端が画面上端を抜けるまでを0〜1とする
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start end", "end start"],
  });
  // 帯の出入りで白オーバーレイをフェードさせ、中央付近では固定背景をそのまま見せる
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 0, 0, 0.85],
  );

  return (
    <section
      id="beer"
      className="[--base:390] md:[--base:1280] w-full bg-white"
    >
      <div
        className="
          [--top:80] [--left:20] [--right:20]
          md:[--top:158] md:[--left:140] md:[--right:182]
          mx-auto w-full max-w-[1280px]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pl-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
        "
      >
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            {/* セクションタイトル */}
            <ScrollReveal>
              <SectionTitle
                en="BEER LINEUP"
                ja="ビール紹介"
                tone="dark"
                labelGap={12}
              />
            </ScrollReveal>
            {/* 紹介文 */}
            <ScrollReveal>
              <p
                className="
                [--fs:16] [--top:32]
                md:[--fs:18] md:[--top:66]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                font-zen-maru
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.125] text-[#1b1b1b] [text-wrap:pretty]
              "
              >
                柏の熱気や街の個性を、
                <br className="hidden md:inline" />
                それぞれ異なる味わいで表現した
                <br className="hidden md:inline" />
                まるかしビールのラインアップをご紹介します。
                <br />
                <br />
                クラフトビールが好きな方はもちろん、
                <br className="hidden md:inline" />
                普段あまりビールを飲まない方にも、
                <br className="hidden md:inline" />
                気軽に楽しんでいただける一杯を目指しています。
              </p>
            </ScrollReveal>
            {/* 銘柄情報（正式情報が届くまでの仮テキスト） */}
            <ScrollReveal>
              <p
                className="
                [--fs:16] [--top:40]
                md:[--fs:18] md:[--top:98]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                font-zen-maru
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.125] text-[#1b1b1b] [text-wrap:pretty]
              "
              >
                銘柄名：正式な商品名を掲載
                <br />
                <br />
                スタイル：ペールエール、IPAなどの正式なビアスタイルを掲載
                <br />
                <br />
                味わい：華やかに広がる香りと、
                <br className="hidden md:inline" />
                試合前にも心地よい軽快な飲み口。
                <br className="hidden md:inline" />
                ビールが好きな方にも、
                <br className="hidden md:inline" />
                普段はあまり飲まない方にも楽しんでいただける、
                <br className="hidden md:inline" />
                思わず顔が上がるような一杯です。
              </p>
            </ScrollReveal>
          </div>
          {/* ボトル写真 */}
          <ScrollReveal
            delay={0.1}
            className="
              [--w:240] [--top:32]
              md:[--w:350] md:[--top:37]
              grid shrink-0 self-center md:self-start
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            "
          >
            <Image
              src="/main/beer-lineup/beer-bottle.webp"
              alt="まるかしビールのボトル"
              width={350}
              height={545}
              className="col-start-1 row-start-1 h-auto w-full"
              sizes="(min-width: 768px) 350px, 240px"
            />
            {/* 白い装飾（ペナント形）: 元写真左上の文字隠しも兼ねるため、SPでもPCと同じ画像比率で表示 */}
            <svg
              aria-hidden="true"
              viewBox="0 0 105.618 127.446"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
                [--w:73] [--top:10]
                md:[--w:106] md:[--top:15]
                col-start-1 row-start-1 self-start
                h-auto
                w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              "
            >
              <path d="M0 0H105.618V80.2695L0 127.446V0Z" fill="white" />
            </svg>
          </ScrollReveal>
        </div>
        {/* CTAボタン */}
        {/* TODO: LINEの正式URLが決まり次第差し替え */}
        <div
          className="
            [--top:48] [--left:228]
            md:[--top:73]
            flex justify-center md:justify-start
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:pl-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          "
        >
          <ScrollReveal>
            <CtaButton
              label="新作・限定醸造の情報をLINEで受け取る"
              href="#"
              variant="gradient"
            />
          </ScrollReveal>
        </div>
      </div>
      {/* 店舗写真の全幅帯（固定背景+スクロールフェード） */}
      <div
        ref={bandRef}
        aria-hidden="true"
        className="
          [--h:160] [--top:80]
          md:[--h:415] md:[--top:144]
          grid w-full
          h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
          mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          bg-[url('/main/shop.jpg')] bg-cover bg-center md:bg-fixed
        "
      >
        {/* スクロールフェードオーバーレイ */}
        <motion.div
          style={{ opacity: reducedMotion ? 0 : overlayOpacity }}
          className="col-start-1 row-start-1 h-full w-full bg-white"
        />
      </div>
    </section>
  );
}
