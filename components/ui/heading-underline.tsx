"use client";

import { motion, useReducedMotion } from "framer-motion";

/** 見出し下のグラデーション下線（スクロールで画面に入ると左から伸びる） */
export function HeadingUnderline() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={reducedMotion ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="
        [--top:8] md:[--top:12]
        h-[2px] w-full
        mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
        bg-gradient-to-r from-[#ca7304] to-[#e4b856]
        origin-left
      "
    />
  );
}
