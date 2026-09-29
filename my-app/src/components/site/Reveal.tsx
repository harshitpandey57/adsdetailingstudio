import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 text-4xl leading-[1.1] sm:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}