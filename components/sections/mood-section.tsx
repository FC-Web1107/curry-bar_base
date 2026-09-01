import Image from "next/image";
import { Parallax } from "@/components/ui/parallax";
import { asset } from "@/lib/utils";

export function MoodSection() {
  return (
    <section
      id="mood"
      className="
        [--base:390] md:[--base:1280]
        [--py:80] md:[--py:76]
        [--pb:50] md:[--pb:0]
        w-full
        pt-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
        pb-[min(calc(100vw*var(--pb)/var(--base)),calc(var(--pb)*1px))]
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* 青いカクテル・空気感テキスト・カレーの写真 */}
        <div className="flex flex-col md:flex-row md:items-start">
          {/* 青いカクテルの写真 */}
          <Parallax
            offset={40}
            scaleWithViewport
            className="
              [--w:240] md:[--w:287]
              [--top:30] md:[--top:36]
              [--left:24] md:[--left:121]
              order-2
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              md:order-2
            "
          >
            <Image
              src={asset("/main/mood/blue-cocktail.png")}
              alt="カウンターに置かれた青いカクテル"
              width={816}
              height={1020}
              className="aspect-[287/294] w-full border border-[#cbb394]/60 object-cover"
              sizes="(min-width: 768px) 22vw, 62vw"
            />
          </Parallax>
          {/* 空気感テキスト */}
          <div
            className="
              [--top:70] md:[--top:150]
              [--left:24] md:[--left:62]
              [--gap:16] md:[--gap:10]
              order-3 flex flex-col
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            "
          >
            <p className="[--fs:18] md:[--fs:20] text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[1.9] md:leading-[1.8]">
              店内に流れるのは、
              <br />
              落ち着いた音楽と、
              <br />
              ほどよく近い、人との距離。
            </p>
          </div>
          {/* カレーの写真 */}
          <Parallax
            offset={24}
            scaleWithViewport
            className="
              [--w:200] md:[--w:235]
              [--top:0] md:[--top:0]
              [--left:120] md:[--left:173]
              order-1 grid overflow-hidden
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              aspect-[235/113] border border-[#cbb394]/60
              md:order-3
            "
          >
            <Image
              src={asset("/main/mood/curry.jpg")}
              alt="鉄鍋で提供されるカレー"
              width={680}
              height={1020}
              className="aspect-[235/113] w-full object-cover object-[center_90%]"
              sizes="(min-width: 768px) 18vw, 51vw"
            />
          </Parallax>
        </div>
        {/* カクテルのラインナップ・ご来店案内テキスト・マンゴヤンの写真 */}
        <div
          className="
            [--top:78] md:[--top:0]
            [--bottom:0] md:[--bottom:54]
            flex flex-col
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:mt-[calc(min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))*-1)]
            md:flex-row md:items-start
          "
        >
          {/* カクテルのラインナップ写真 */}
          <Parallax
            offset={32}
            scaleWithViewport
            className="
              [--w:236] md:[--w:295]
              [--top:0] md:[--top:36]
              [--left:80] md:[--left:470]
              shrink-0
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
            "
          >
            <Image
              src={asset("/main/mood/cocktail-lineup.jpg")}
              alt="色とりどりのカクテルが並ぶバックバー"
              width={1179}
              height={734}
              className="aspect-[295/142] w-full border border-[#cbb394]/60 object-cover"
              sizes="(min-width: 768px) 23vw, 61vw"
            />
          </Parallax>
          {/* ご来店案内テキスト */}
          <div
            className="
              [--top:70] md:[--top:258]
              [--left:24] md:[--left:-78]
              [--gap:16] md:[--gap:10]
              flex flex-col
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            "
          >
            <p className="[--fs:18] md:[--fs:20] text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[1.9] md:leading-[1.8]">
              バーが初めての方も、
              <br />
              お一人でのご来店も大歓迎です。
            </p>
            <p className="[--fs:18] md:[--fs:20] text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[1.9] md:leading-[1.8]">
              その日の気分に寄り添う一杯を、
              <br />
              一緒に見つけます。
              <br />
              仕事帰りの一人飲み、
              <br />
              デートや友人との時間、
              <br />
              飲み終わりの締めカレーにも。
            </p>
          </div>
          {/* マンゴヤンの写真（メインビジュアルの一部を切り出し） */}
          <Parallax
            offset={40}
            scaleWithViewport
            className="
              [--w:200] md:[--w:241]
              [--top:70] md:[--top:0]
              [--left:100] md:[--left:44]
              grid shrink-0 overflow-hidden
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              aspect-[241/476] border border-[#cbb394]/60
            "
          >
            <Image
              src={asset("/main/fv/main-visual.jpg")}
              alt="ランプに照らされたマンゴヤンのボトル"
              width={1179}
              height={756}
              className="h-full w-[308.02%] max-w-none ml-[-90.08%]"
              sizes="(min-width: 768px) 19vw, 51vw"
            />
          </Parallax>
        </div>
        {/* 縦書きの締めコピー */}
        <div
          className="
            [--top:94] md:[--top:64]
            [--left:0] md:[--left:317]
            [--gap:28] md:[--gap:36]
            [--bottom:0] md:[--bottom:174]
            relative z-10 flex flex-row-reverse justify-center
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:mt-[calc(min(calc(100vw*82/1280),82px)*-1)]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            mb-[calc(min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))*-1)]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            md:justify-end
          "
        >
          <p
            className="
              [--fs:20] md:[--fs:42]
              [writing-mode:vertical-rl]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.38] tracking-[0.19em] text-[#cbb394]
            "
          >
            いつでも、どなたとでも、
          </p>
          <p
            className="
              [--fs:20] md:[--fs:42]
              [--top:44] md:[--top:63]
              [writing-mode:vertical-rl] [text-orientation:upright]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[0.96] tracking-[-0.02em] text-[#cbb394]
            "
          >
            気軽にBaseへお越しください。
          </p>
        </div>
      </div>
    </section>
  );
}
