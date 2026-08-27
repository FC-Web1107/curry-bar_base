type ChevronRightProps = {
  className?: string;
};

export function ChevronRight({ className }: ChevronRightProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 7 8.5"
      fill="none"
      className={className}
    >
      <path
        d="M0.5 0.5L6 4.25L0.5 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
