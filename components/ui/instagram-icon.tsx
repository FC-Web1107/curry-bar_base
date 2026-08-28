type InstagramIconProps = {
  className?: string;
};

// Figmaの線画アイコンをCSSで再現（色は currentColor を継承）
export function InstagramIcon({ className }: InstagramIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-[36px] w-[38px] rounded-[9px] border-[3px] border-current ${className ?? ""}`}
    >
      <span className="col-start-1 row-start-1 h-[18px] w-[18px] place-self-center rounded-full border-[3px] border-current" />
      <span className="col-start-1 row-start-1 mr-[4px] mt-[3px] h-[4px] w-[4px] justify-self-end rounded-full bg-current" />
    </span>
  );
}
