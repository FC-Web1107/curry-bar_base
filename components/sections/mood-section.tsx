import Image from "next/image";
import { Parallax } from "@/components/ui/parallax";
import { GrowLine } from "@/components/ui/grow-line";
import { revealClass } from "@/components/ui/reveal-class";
import { asset } from "@/lib/utils";

// SPデザイン（幅375px）を基準に実装。
// PC・タブレットは全要素を同一セルに重ね、margin で配置する（absolute不使用）
export function MoodSection() {
  return (
    <section
      id="mood"
      className="
        [--base:375] md:[--base:1280]
        [--py:112] md:[--py:0]
        [--pb:76] md:[--pb:96]
        w-full
        pt-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
        pb-[min(calc(100vw*var(--pb)/var(--base)),calc(var(--pb)*1px))]
      "
    >
      {/* SPは row-start で行を分け、PCは md:row-start-1 で全要素を同一セルに重ねる。
          SPは要素の間を広めに取り、テキストの行間も 1.5em + 10px にしている。
          data-reveal の要素は、上端が画面の上から70%に入ったらぼかしからフェードインする（RevealObserver） */}
      <div className="mx-auto grid w-full max-w-[1280px]">
        {/* 青いカクテルの写真（右端に寄せる） */}
        <Parallax
          offset={40}
          scaleWithViewport
          reveal
          className="
            [--w:190] md:[--w:364]
            [--top:0] md:[--top:15]
            [--right:0] md:[--right:76]
            col-start-1 row-start-1 self-start justify-self-end
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
            w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
          "
        >
          <Image
            src={asset("/main/mood/blue-cocktail.png")}
            alt="カウンターに置かれた青いカクテル"
            width={816}
            height={1020}
            className="aspect-[190/195] w-full object-cover"
            sizes="(min-width: 768px) 28vw, 51vw"
          />
        </Parallax>
        {/* カレーの写真（SPは青いカクテルの下に50px離して置く。青いカクテルの高さ195px＋50px） */}
        <Parallax
          offset={24}
          scaleWithViewport
          reveal
          className="
            [--w:176] md:[--w:366]
            [--top:245] md:[--top:234]
            [--left:40] md:[--left:66]
            grid col-start-1 row-start-1 self-start justify-self-start
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
          "
        >
          <Image
            src={asset("/main/mood/curry-plate.webp")}
            alt="唐揚げと目玉焼きがのったカレー"
            width={1200}
            height={800}
            className="col-start-1 row-start-1 aspect-[176/117] w-full object-cover"
            sizes="(min-width: 768px) 29vw, 47vw"
          />
          {/* 20%の黒オーバーレイ（同一セルで重ねる） */}
          <span aria-hidden="true" className="col-start-1 row-start-1 bg-black/20" />
        </Parallax>
        {/* 空気感テキスト */}
        <p
          data-reveal
          className={`
            ${revealClass}
            [--fs:14] md:[--fs:18]
            [--top:157] md:[--top:114]
            [--left:53] md:[--left:371]
            relative z-10 col-start-1 row-start-2
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[calc(1.5em+10px)] md:leading-[1.5]
            md:row-start-1 md:self-start md:justify-self-start
          `}
        >
          店内に流れるのは
          <br />
          落ち着いた音楽と
          <br />
          ほどよく近い、人との距離。
        </p>
        {/* カウンターで乾杯する写真 */}
        <Parallax
          offset={32}
          scaleWithViewport
          reveal
          className="
            [--w:273] md:[--w:407]
            [--top:135] md:[--top:583]
            [--left:2] md:[--left:555]
            grid col-start-1 row-start-3
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
            md:row-start-1 md:self-start md:justify-self-start
          "
        >
          <Image
            src={asset("/main/mood/bar-counter.webp")}
            alt="カウンターでグラスを傾けながらカレーを楽しむ二人"
            width={1200}
            height={800}
            className="col-start-1 row-start-1 aspect-[273/196] w-full object-cover object-right"
            sizes="(min-width: 768px) 32vw, 73vw"
          />
          {/* 20%の黒オーバーレイ（同一セルで重ねる） */}
          <span aria-hidden="true" className="col-start-1 row-start-1 bg-black/20" />
        </Parallax>
        {/* ご来店案内テキスト（SPは右寄せ、PCは左寄せ）。SPは2つの段落の間も他の要素と同様に広く取る（10px＋80px） */}
        <div
          data-reveal
          className={`
            ${revealClass}
            [--top:130] md:[--top:353]
            [--right:39] md:[--right:0]
            [--left:0] md:[--left:661]
            [--gap:90] md:[--gap:10]
            relative z-10 col-start-1 row-start-4 flex flex-col text-right
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            md:row-start-1 md:self-start md:justify-self-start md:text-left
          `}
        >
          <p className="[--fs:14] md:[--fs:18] text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[calc(1.5em+10px)] md:leading-[1.5]">
            バーが初めての方も
            <br />
            お一人でのご来店も<br className="md:hidden" /> 大歓迎です。
          </p>
          {/* SPは左端（他の左寄せテキストと同じ53px）に左揃えで置く。PCは従来どおり */}
          <p
            className="
              [--fs:14] md:[--fs:18]
              [--left:53]
              self-start text-left
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[calc(1.5em+10px)]
              md:ml-0 md:self-auto md:leading-[1.5]
            "
          >
            その日の気分に<br className="md:hidden" /> 寄り添う一杯を
            <br />
            一緒に見つけます。
            <br />
            仕事帰りの一人飲み
            <br />
            デートや友人との時間
            <br />
            飲み終わりの締めカレーにも。
          </p>
        </div>
        {/* ワイングラスとボトルの写真（SPのみ） */}
        <Parallax
          offset={40}
          scaleWithViewport
          reveal
          className="
            [--w:155]
            [--top:142]
            [--left:33]
            grid col-start-1 row-start-5
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
            md:hidden
          "
        >
          <Image
            src={asset("/main/mood/wine-glass.webp")}
            alt="ボトルが並ぶカウンターに置かれたワイングラス"
            width={800}
            height={1200}
            className="col-start-1 row-start-1 aspect-[155/202] w-full object-cover object-top"
            sizes="41vw"
          />
          {/* 20%の黒オーバーレイ（同一セルで重ねる） */}
          <span aria-hidden="true" className="col-start-1 row-start-1 bg-black/20" />
        </Parallax>
        {/* 右端の縦の飾り線。高さ0の箱からはみ出させ、レイアウトの高さに影響させない。
            スクロールに合わせて上から伸びる（GrowLine）。
            SPは order-first で描画順を先頭にし、写真の下（背面）に回す（配置は row/col 指定のまま） */}
        <div aria-hidden="true" className="order-first col-start-1 row-start-2 h-0 md:order-none md:row-start-1">
          <GrowLine
            className="
              [--h:1308] md:[--h:517]
              [--top:0] md:[--top:239]
              [--right:27] md:[--right:41]
              ml-auto
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
              h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
              w-px
            "
          />
        </div>
        {/* 縦書きの締めコピー。PCは高さ0の箱からはみ出させ、次のセクション（ウイスキー棚）に重ねる。
            縦書きは画面の高さで折り返されるため、背の低い画面でも1列に保つよう nowrap にする */}
        <div className="col-start-1 row-start-6 md:row-start-1 md:h-0">
          <div
            data-reveal
            className={`
              ${revealClass}
              [--top:180] md:[--top:717]
              [--left:0] md:[--left:314]
              [--gap:37] md:[--gap:24]
              flex flex-row-reverse justify-center
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
              md:relative md:z-10 md:justify-end
            `}
          >
            <p
              className="
                [--fs:26] md:[--fs:30]
                [writing-mode:vertical-rl] whitespace-nowrap
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.38] tracking-[0.19em] text-white
              "
            >
              いつでも　どなたとでも
            </p>
            <p
              className="
                [--fs:26] md:[--fs:30]
                [--top:96] md:[--top:56]
                [writing-mode:vertical-rl] [text-orientation:upright] whitespace-nowrap
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[0.96] tracking-[0.05em] text-white
              "
            >
              気軽にBaseへお越しください
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
