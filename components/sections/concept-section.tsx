import Image from "next/image";
import { Parallax } from "@/components/ui/parallax";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="
        [--base:390] md:[--base:1280]
        [--py:72] md:[--py:105]
        w-full
        pt-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* 上段：フロアイラスト・縦書きコピー・見出し */}
        <div className="flex flex-col md:flex-row md:items-start">
          {/* welcome・1F・螺旋階段・B1Fの断面イラスト（パララックス付き） */}
          <Parallax
            offset={120}
            className="
              [--w:340] md:[--w:700]
              [--top:40] md:[--top:28]
              [--left:24] md:[--left:64]
              order-2 grid overflow-hidden
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              aspect-[593/1011]
              md:order-1
            "
          >
            <Image
              src="/main/concept/floor-illustration.png"
              alt="welcomeの文字と、1階の扉から螺旋階段で地下1階のバーへ降りるフロアイラスト"
              width={1122}
              height={1402}
              className="h-full w-[136.53%] max-w-none ml-[-20.46%]"
              sizes="(min-width: 768px) 55vw, 87vw"
            />
          </Parallax>
          {/* 縦書きコピー・見出し */}
          <div className="order-1 flex flex-col items-start md:order-2">
            {/* 縦書きコピー */}
            <div
              className="
                [--gap:32] md:[--gap:44]
                [--top:0] md:[--top:0]
                [--left:0] md:[--left:24]
                flex flex-row-reverse self-end
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
                [--right:24] md:[--right:0]
                gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                md:self-start
              "
            >
              <p
                className="
                  [--fs:20] md:[--fs:42]
                  [writing-mode:vertical-rl]
                  text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                  leading-[1.38] tracking-[0.31em] text-[#cbb394]
                "
              >
                螺旋階段の先にひろがる
              </p>
              <div
                className="
                  [--top:96] md:[--top:136]
                  flex flex-col items-center
                  mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                "
              >
                <p
                  className="
                    [--fs:20] md:[--fs:42]
                    [writing-mode:vertical-rl]
                    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                    leading-[1.38] tracking-[0.31em] text-[#cbb394]
                  "
                >
                  大人の秘密基地
                </p>
                {/* 縦の飾り線 */}
                <span
                  aria-hidden="true"
                  className="
                    [--h:68] md:[--h:97]
                    [--top:4] md:[--top:6]
                    mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                    h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                    w-px bg-[#cbb394]
                  "
                />
              </div>
            </div>
            {/* 見出し */}
            <h2
              className="
                [--fs:48] md:[--fs:99]
                [--top:56] md:[--top:198]
                [--left:24] md:[--left:23]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                font-normal
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.21] text-[#e1e1e1]
              "
            >
              Curry&Bar
              <br />
              Base
            </h2>
          </div>
        </div>
        {/* 導入文・オリジナルカクテルの写真 */}
        <div
          className="
            [--top:64] md:[--top:45]
            grid
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          "
        >
          {/* オリジナルカクテル「Olvo」の写真 */}
          <div
            className="
              [--w:945] [--left:292]
              col-start-1 row-start-1 hidden
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              md:grid
            "
          >
            <Image
              src="/main/concept/olvo-cocktail.png"
              alt="オリジナルカクテル「Olvo」〜謝り続ける怪物〜のグラスとサインボード"
              width={945}
              height={513}
              className="col-start-1 row-start-1 aspect-[945/513] w-full border border-[#cbb394]/60 object-cover"
              sizes="(min-width: 768px) 74vw, 100vw"
            />
          </div>
          {/* 導入文 */}
          <div
            className="
              [--left:24] md:[--left:158]
              [--bottom:0] md:[--bottom:36]
              [--gap:16] md:[--gap:10]
              col-start-1 row-start-1 flex flex-col self-end
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            "
          >
            <p className="[--fs:18] md:[--fs:20] text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[1.9] md:leading-[1.8]">
              家でもなく、職場でもない。
              <br />
              いつもの夜から少し離れて、
              <br />
              自分の時間を取り戻せる場所。
            </p>
            <p className="[--fs:18] md:[--fs:20] text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[1.9] md:leading-[1.8]">
              鹿児島・天文館の地下にある
              <br />
              「Curry & Bar Base」は、
              <br />
              カレーとカクテル、
              <br />
              そして会話を楽しむための
              <br />
              大人の秘密基地です。
            </p>
          </div>
        </div>
        {/* SP用：オリジナルカクテルの写真（テキストと重ねず下に表示） */}
        <div
          className="
            [--top:40]
            [--px:24]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
            md:hidden
          "
        >
          <Image
            src="/main/concept/olvo-cocktail.png"
            alt="オリジナルカクテル「Olvo」〜謝り続ける怪物〜のグラスとサインボード"
            width={945}
            height={513}
            className="aspect-[945/513] w-full border border-[#cbb394]/60 object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
