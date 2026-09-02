"use client";

import { useEffect, useState } from "react";

type TypedTextProps = {
  phrases: string[];
  className?: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
};

export default function TypedText({
  phrases,
  className,
  typingSpeedMs = 65,
  deletingSpeedMs = 35,
  pauseMs = 1400,
}: TypedTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      const next = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, typingSpeedMs);
      return () => clearTimeout(next);
    }

    const step = setTimeout(
      () => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      },
      deleting ? deletingSpeedMs : typingSpeedMs
    );

    return () => clearTimeout(step);
  }, [text, deleting, phraseIndex, phrases, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return (
    <span className={className}>
      {text}
      <span className="caret h-[0.9em] translate-y-[0.1em]" />
    </span>
  );
}
