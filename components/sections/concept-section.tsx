import Image from "next/image";
import { Parallax } from "@/components/ui/parallax";
import { asset } from "@/lib/utils";

// SPデザイン（幅375px）を基準に実装。PC・タブレットはSPの構成を保ったまま数値を調整している
export function ConceptSection() {
  return (
    <section
      id="concept"
      className="
        [--base:375] md:[--base:1280]
        [--py:39] md:[--py:105]
        [--pb:0] md:[--pb:48]
        w-full
        pt-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
        pb-[min(calc(100vw*var(--pb)/var(--base)),calc(var(--pb)*1px))]
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* 上段：縦書きコピー・見出し・フロアイラスト。
            SPは縦積み（コピー → 見出し → イラスト）、PCは従来どおりイラストを左・テキストを右に並べる */}
        <div className="flex flex-col md:flex-row md:items-start">
          {/* welcome・1F・螺旋階段・B1Fの断面イラスト（パララックス付き）。
              SPは全体を見出しに少し重ねて表示、PCは従来のトリミング・サイズ */}
          <Parallax
            offset={120}
            className="
              [--w:300] md:[--w:700]
              [--top:21] md:[--top:28]
              [--left:33] md:[--left:64]
              order-3
              mt-[calc(-1*min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px)))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              md:order-1 md:grid md:overflow-hidden md:aspect-[593/1011]
              md:mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            "
          >
            <Image
              src={asset("/main/concept/floor-illustration.png")}
              alt="welcomeの文字と、1階の扉から螺旋階段で地下1階のバーへ降りるフロアイラスト"
              width={1122}
              height={1402}
              className="h-auto w-full md:h-full md:w-[136.53%] md:max-w-none md:ml-[-20.46%]"
              sizes="(min-width: 768px) 55vw, 80vw"
            />
          </Parallax>
          {/* 縦書きコピー・見出し */}
          <div className="order-1 flex flex-col items-start md:order-2">
            {/* 縦書きコピー（SPは右寄せ、PCは従来どおり左寄せ） */}
            <div
              className="
                [--gap:44] md:[--gap:44]
                [--right:47] md:[--right:0]
                [--left:0] md:[--left:24]
                flex flex-row-reverse self-end
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
                gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                md:self-start
              "
            >
              <p
                className="
                  [--fs:26] md:[--fs:42]
                  [writing-mode:vertical-rl]
                  text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                  leading-[1.38] tracking-[0.31em] text-white
                "
              >
                螺旋階段の先にひろがる
              </p>
              <div
                className="
                  [--top:136] md:[--top:136]
                  flex flex-col items-center
                  mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                "
              >
                <p
                  className="
                    [--fs:26] md:[--fs:42]
                    [writing-mode:vertical-rl]
                    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                    leading-[1.38] tracking-[0.31em] text-white
                  "
                >
                  大人の秘密基地
                </p>
                {/* 縦の飾り線。SPは文字送り分の余白（tracking）を打ち消すため上に詰め、PCは従来の余白 */}
                <span
                  aria-hidden="true"
                  className="
                    [--h:97] md:[--h:97]
                    [--top:5] md:[--top:6]
                    mt-[calc(-1*min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px)))]
                    h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                    w-px bg-white
                    md:mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                  "
                />
              </div>
            </div>
            {/* 見出し */}
            <h2
              className="
                [--fs:39] md:[--fs:99]
                [--top:53] md:[--top:325]
                [--left:41] md:[--left:23]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                font-normal
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.32] text-[#e1e1e1]
                md:leading-[1.21]
              "
            >
              Curry&Bar
              <br />
              Base
            </h2>
          </div>
        </div>
        {/* 下段：導入文・オリジナルカクテルの写真・店の説明・左端の飾り線。
            SPは行ごとに縦に並べ、PCは全要素を同一セルに重ねて margin で配置する（absolute不使用） */}
        <div
          className="
            [--top:67] md:[--top:13]
            grid
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          "
        >
          {/* オリジナルカクテル「Olvo」の写真。PCでは導入文を上に重ねるため、DOM上は先に置く（SPの順序は row-start で制御） */}
          <div
            className="
              [--w:276] md:[--w:950]
              [--top:109] md:[--top:0]
              [--left:2] md:[--left:18]
              col-start-1 row-start-2
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              md:row-start-1 md:self-start md:justify-self-start
            "
          >
            <Image
              src={asset("/main/concept/olvo-cocktail-wide.webp")}
              alt="オリジナルカクテル「Olvo」〜謝り続ける怪物〜のグラスとサインボード"
              width={1360}
              height={907}
              className="aspect-[276/150] w-full object-cover"
              sizes="(min-width: 768px) 74vw, 74vw"
            />
          </div>
          {/* 導入文・店の説明。
              SPは contents で各段落をそのままグリッドの行に流し（写真を挟んだ従来の並び）、
              PCは1つの縦並びにまとめて写真の下に配置する（文字が16px未満に縮まないため、
              写真の横に置くと狭い画面で重なる。写真の下に置けばどの画面幅でも重ならない） */}
          <div
            className="
              [--top:580] [--left:865] [--gap:40]
              contents
              md:relative md:z-10 md:col-start-1 md:row-start-1 md:flex md:flex-col
              md:self-start md:justify-self-start
              md:mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              md:ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              md:gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            "
          >
            {/* 導入文（SPは右寄せ、PCは左寄せ） */}
            <p
              className="
                [--fs:14] md:[--fs:18]
                [--right:39]
                relative z-10 col-start-1 row-start-1
                pr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
                text-right
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.5]
                md:pr-0 md:text-left md:leading-[1.25]
              "
            >
              家でもなく、職場でもない。
              <br />
              いつもの夜から少し離れて
              <br />
              自分の時間を取り戻せる場所。
            </p>
            {/* 店の説明 */}
            <p
              className="
                [--fs:14] md:[--fs:18]
                [--top:56] [--left:53]
                relative z-10 col-start-1 row-start-3
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.5]
                md:ml-0 md:mt-0 md:leading-[1.25]
              "
            >
              鹿児島・天文館の地下にある
              <br />
              「CURRY & BAR BASE」は
              <br />
              カレーとカクテル
              <br />
              そして会話を楽しむための
              <br />
              大人の秘密基地です。
            </p>
          </div>
          {/* 左端の縦の飾り線。高さ0の箱からはみ出させ、レイアウトの高さに影響させない。
              SPは order-first で描画順を先頭にし、写真の下（背面）に回す（配置は row/col 指定のまま） */}
          <div aria-hidden="true" className="order-first col-start-1 row-start-1 h-0 md:order-none">
            <span
              className="
                [--h:776] md:[--h:627]
                [--top:42] md:[--top:389]
                [--left:33] md:[--left:26]
                block
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                w-px bg-white
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
