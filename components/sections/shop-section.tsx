import { CtaButton } from "@/components/ui/cta-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function ShopSection() {
  return (
    <section
      className="
        [--base:390] md:[--base:1280]
        w-full
        bg-[image:linear-gradient(rgba(255,255,255,0.83),rgba(255,255,255,0.83)),url('/main/shop/bg.jpg')] bg-cover bg-center
      "
    >
      <div
        className="
          [--top:64] [--bottom:48] [--left:20] [--right:20]
          md:[--top:93] md:[--bottom:38] md:[--left:111] md:[--right:116]
          mx-auto w-full max-w-[1280px]
          pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
          pl-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
        "
      >
        {/* セクションタイトル */}
        <ScrollReveal>
          <SectionTitle en="Shop" ja="旗艦店紹介" tone="dark" labelGap={19} />
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
            いつでも飲める場所。
            <br />
            旗艦店 クラスター
          </p>
        </ScrollReveal>
        <div
          className="
            [--top:24] md:[--top:41]
            flex flex-col md:flex-row md:justify-between
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          "
        >
          <div>
            {/* 本文 */}
            <ScrollReveal>
              <p
                className="
                [--fs:16]
                md:[--fs:18]
                font-zen-maru
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.125] text-[#1b1b1b] [text-wrap:pretty]
              "
              >
                まるかしビールを、樽生で楽しめる旗艦店「クラスター」。
                <br />
                <br />
                試合の前も、試合のあとも、ここへ来れば、いつもの一杯と仲間が待っています。
                <br />
                <br />
                レイソルの話をしながら飲む人。
                <br />
                柏の街について語り合う人。
                <br />
                初めて会ったはずなのに、気づけば同じテーブルで乾杯している人たち。
                <br />
                <br />
                クラスターは、まるかしビールを通して人と人がつながる場所です。
              </p>
            </ScrollReveal>
            {/* 店舗情報（正式情報が届くまでの仮テキスト） */}
            <ScrollReveal>
              <p
                className="
                [--fs:16] [--top:32] [--left:0]
                md:[--fs:18] md:[--top:57] md:[--left:3]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                font-zen-maru
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.125] text-[#1b1b1b]
              "
              >
                店名：クラスター
                <br />
                住所：正式な住所を掲載
                <br />
                営業時間：正式な営業時間を掲載
                <br />
                定休日：正式な定休日を掲載
                <br />
                アクセス：最寄り駅や交通手段を掲載
                <br />
                Googleマップ：店舗位置を掲載
              </p>
            </ScrollReveal>
          </div>
          {/* 地図（未確定のためプレースホルダー） */}
          <ScrollReveal className="shrink-0" delay={0.1}>
            <div
              className="
                [--w:418] [--h:266] [--top:24]
                md:[--top:106]
                aspect-[418/266] w-full bg-[#d9d9d9]
                md:aspect-auto
                md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                md:h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              "
            />
          </ScrollReveal>
        </div>
        {/* CTAボタン */}
        {/* TODO: LINEの正式URLが決まり次第差し替え */}
        <div
          className="
            [--top:48] [--left:3]
            md:[--top:25]
            flex justify-center md:justify-start
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:pl-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          "
        >
          <ScrollReveal>
            <CtaButton
              label="LINEで飲める店・買える店を確認する"
              href="#"
              variant="yellow"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
