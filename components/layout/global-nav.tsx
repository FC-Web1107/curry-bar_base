import Link from "next/link";

type GlobalNavProps = {
  /** light: 白文字（ヘッダー用） / dark: 黒文字（フッター用） */
  tone: "light" | "dark";
};

// TODO: CONTACTのリンク先が未確定（対応するセクションがFigmaに無いため仮で「#」）
const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "BEER", href: "#beer" },
  { label: "PEOPLE", href: "#people" },
  { label: "MESSAGE", href: "#message" },
  { label: "CONTACT", href: "#" },
];

export function GlobalNav({ tone }: GlobalNavProps) {
  return (
    <nav>
      <ul
        className="
          [--gap:10] md:[--gap:17]
          flex
          gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
        "
      >
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`
                [--fs:12] md:[--fs:17]
                pb-0.5
                bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-[position:0_100%] bg-no-repeat
                font-noto-sans
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.5]
                transition-[background-size] duration-300 ease-out
                hover:bg-[length:100%_1px]
                ${tone === "light" ? "text-white" : "text-[#1b1b1b]"}
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
