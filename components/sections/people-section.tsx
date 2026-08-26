"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionTitle } from "@/components/ui/section-title";

type DecorCircle = {
  /** 円の直径（PC px値） */
  size: number;
  /** 配置エリア左上からの横位置（PC px値） */
  left: number;
  /** 配置エリア左上からの縦位置（PC px値） */
  top: number;
  /** パララックス移動量（px。セクション通過で +range → -range に動く） */
  range: number;
  /** fill: 塗りつぶし / ring: 輪 */
  variant: "fill" | "ring";
};

// 上部テキストエリアの装飾白丸
const upperCircles: DecorCircle[] = [
  { size: 40, left: 856, top: 36, range: 70, variant: "fill" },
  { size: 120, left: 1084, top: 128, range: 140, variant: "fill" },
  { size: 24, left: 1008, top: 318, range: 90, variant: "fill" },
  { size: 88, left: 928, top: 384, range: 120, variant: "ring" },
  { size: 56, left: 60, top: 210, range: 100, variant: "fill" },
];

// 作り手紹介エリアの装飾白丸
const makerCircles: DecorCircle[] = [
  { size: 70, left: 640, top: 480, range: 120, variant: "fill" },
  { size: 70, left: 569, top: 1100, range: 90, variant: "fill" },
  { size: 180, left: 984, top: 567, range: 160, variant: "ring" },
];

type ParallaxCircleProps = {
  circle: DecorCircle;
  /** セクション全体のスクロール進行度（0〜1） */
  progress: MotionValue<number>;
};

function ParallaxCircle({ circle, progress }: ParallaxCircleProps) {
  const reducedMotion = useReducedMotion();
  const y = useTransform(progress, [0, 1], [circle.range, -circle.range]);
  const variantClass =
    circle.variant === "ring" ? "border-2 border-white" : "bg-white";

  return (
    <motion.div
      aria-hidden="true"
      style={
        {
          "--w": circle.size,
          "--left": circle.left,
          "--top": circle.top,
          y: reducedMotion ? 0 : y,
        } as MotionStyle
      }
      className={`
        col-start-1 row-start-1
        hidden md:block self-start justify-self-start
        aspect-square rounded-full
        w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
        ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
        mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
        ${variantClass}
      `}
    />
  );
}

export function PeopleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // セクション上端が画面下端に入ってから、セクション下端が画面上端を抜けるまでを0〜1とする
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="people"
      className="[--base:390] md:[--base:1280] w-full bg-gradient-to-b from-[#ca7304] to-[#e4b856]"
    >
      <div
        className="
          [--top:80] [--bottom:80]
          md:[--top:195] md:[--bottom:203]
          mx-auto w-full max-w-[1280px]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
        "
      >
        <div className="grid">
          {/* 装飾の白丸（スクロールパララックス） */}
          {upperCircles.map((circle, index) => (
            <ParallaxCircle
              key={index}
              circle={circle}
              progress={scrollYProgress}
            />
          ))}
          <div
            className="
              [--px:20] md:[--px:183]
              col-start-1 row-start-1
              px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
            "
          >
            {/* セクションタイトル */}
            <ScrollReveal>
              <SectionTitle
                en="People"
                ja="作り手・スタッフ紹介"
                tone="light"
                labelGap={25}
              />
            </ScrollReveal>
            {/* キャッチコピー */}
            <ScrollReveal>
              <p
                className="
                [--fs:22] [--top:32]
                md:[--fs:39] md:[--top:52]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                font-zen-maru
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.3] text-white
              "
              >
                このビールをつくっているのは、
                <br />
                こんな顔ぶれです。
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
                leading-[1.125] text-white [text-wrap:pretty]
              "
              >
                ビールの向こうには、必ず人がいます。
                <br />
                <br />
                醸造するのは、品評会で金賞を受賞した実績を持つ醸造所。
                <br />
                <br />
                企画するのは、柏を本気で盛り上げたいと考える
                <br className="hidden md:inline" />
                地元のメンバーたちです。
                <br />
                <br />
                担当する役割や経歴は違っても、
                <br className="hidden md:inline" />
                共通しているのは、全員が柏を大切に思っていること。
                <br />
                <br />
                どのような人が、どのような想いでこの一杯をつくっているのか。
                <br />
                <br />
                まるかしビールに関わる作り手と企画メンバーをご紹介します。
              </p>
            </ScrollReveal>
          </div>
        </div>
        {/* 作り手紹介エリア */}
        <div
          className="
            [--top:48] md:[--top:97]
            flex flex-col md:grid
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          "
        >
          {/* 醸造担当の写真 */}
          <Image
            src="/main/people/1.jpg"
            alt="醸造タンクからグラスにビールを注ぐ様子"
            width={550}
            height={550}
            className="
              [--w:280] [--left:0] [--top:0]
              md:[--w:550] md:[--left:115]
              col-start-1 row-start-1
              self-center md:self-start
              aspect-square rounded-full object-cover
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            "
            sizes="(min-width: 768px) 550px, 280px"
          />
          {/* 醸造担当のコメント */}
          <p
            className="
              [--fs:16] [--left:20] [--right:20] [--top:24]
              md:[--fs:18] md:[--left:764] md:[--right:0] md:[--top:183]
              col-start-1 row-start-1
              self-start justify-self-start
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              font-zen-maru
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.625] text-white [text-wrap:pretty]
            "
          >
            氏名：正式なお名前を掲載
            <br />
            役割：醸造担当
            <br />
            コメント例：レイソルが勝った日に飲むビールは、
            <br className="hidden md:inline" />
            同じレシピでも、いつもよりうまく感じる気がします。
            <br className="hidden md:inline" />
            試合の日にも、普段の日にも、
            <br className="hidden md:inline" />
            柏の人たちが自然と乾杯したくなるような
            <br className="hidden md:inline" />
            一杯を目指して醸造しています。
          </p>
          {/* 企画メンバーの写真 */}
          <Image
            src="/main/people/2.jpg"
            alt="醸造所でタンクの状態を確認するスタッフ"
            width={550}
            height={550}
            className="
              [--w:280] [--left:0] [--top:40]
              md:[--w:550] md:[--left:614] md:[--top:620]
              col-start-1 row-start-1
              self-center md:self-start
              aspect-square rounded-full object-cover
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            "
            sizes="(min-width: 768px) 550px, 280px"
          />
          {/* 企画メンバーのコメント */}
          <p
            className="
              [--fs:16] [--left:20] [--right:20] [--top:24]
              md:[--fs:18] md:[--left:115] md:[--right:0] md:[--top:803]
              col-start-1 row-start-1
              self-start justify-self-start
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              font-zen-maru
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.625] text-white [text-wrap:pretty]
            "
          >
            氏名：正式なお名前を掲載
            <br />
            役割：企画、営業、イベント運営などを掲載
            <br />
            コメント例：柏の人が胸を張って勧められて、
            <br className="hidden md:inline" />
            街の外から来た人にも持ち帰ってもらえる。
            <br className="hidden md:inline" />
            まるかしビールを、そんな柏みやげに育てていきたいと
            <br className="hidden md:inline" />
            考えています。
          </p>
          {/* 装飾の白丸（スクロールパララックス） */}
          {makerCircles.map((circle, index) => (
            <ParallaxCircle
              key={index}
              circle={circle}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
