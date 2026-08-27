// BASEの楽しみ方のメニュー項目（カード・サブページ共通データ）
export type MenuItem = {
  slug: string;
  no: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const menuItems: MenuItem[] = [
  {
    slug: "curry",
    no: "01",
    title: "CURRY",
    subtitle: "BASEのカレー",
    description:
      "野菜をじっくり溶かし込んだ、甘みからスパイスの余韻へ変化する欧風スパイスカレー。",
    image: {
      src: "/main/mood/curry.jpg",
      alt: "鉄鍋で提供されるカレー",
      width: 680,
      height: 1020,
    },
  },
  {
    slug: "story-cocktail",
    no: "02",
    title: "STORY COCKTAIL",
    subtitle: "物語カクテル",
    description:
      "一杯のカクテルに、一つの物語を。舞子の旅シリーズなど、BASEならではのカクテル体験。",
    image: {
      src: "/main/concept/olvo-cocktail.png",
      alt: "オリジナルカクテル「Olvo」とサインボード",
      width: 945,
      height: 513,
    },
  },
  {
    slug: "bar-selection",
    no: "03",
    title: "BAR SELECTION",
    subtitle: "豊富なお酒とカクテル",
    description:
      "定番から少し珍しいものまで、幅広いラインナップ。豊富なカクテル／鹿児島のお酒／ウイスキー／ワインセラー完備。",
    image: {
      src: "/main/how-to/whisky-shelf.jpg",
      alt: "ウイスキーボトルが並ぶバックバーの棚",
      width: 1179,
      height: 782,
    },
  },
  {
    slug: "gacha-bingo",
    no: "04",
    title: "GACHA BINGO",
    subtitle: "カクテルガシャビンゴ",
    description:
      "何が出るかわからない楽しさと、ビンゴを組み合わせたBASEの遊び体験。",
    image: {
      src: "/main/mood/cocktail-lineup.jpg",
      alt: "色とりどりのカクテルが並ぶバックバー",
      width: 1179,
      height: 734,
    },
  },
  {
    slug: "non-alcohol",
    no: "05",
    title: "NON-ALCOHOL",
    subtitle: "ノンアルカクテル",
    description:
      "お酒を飲まない夜でも、カクテルらしい特別感や物語を楽しめる一杯。",
    image: {
      src: "/main/mood/blue-cocktail.png",
      alt: "カウンターに置かれた青いカクテル",
      width: 816,
      height: 1020,
    },
  },
];
