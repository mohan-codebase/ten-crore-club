"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
  "Private Wealth Community",
  "Structured SIP Roadmaps",
  "Behavioral Coaching",
  "Long-Term Discipline",
  "Peer Accountability",
  "Goal-Based Investing",
];

function TickerItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex shrink-0 items-center gap-3.5 px-4 sm:gap-4 sm:px-5"
        >
          <span
            aria-hidden
            className="size-1 rotate-45 bg-red-mid/70"
          />
          <span className="luxury-ticker-label whitespace-nowrap font-display text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
            {highlight}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function LuxuryTicker() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      aria-label="Ten Crore Club principles"
      className="luxury-ticker-shell relative z-10 flex"
    >
      <div className="luxury-ticker-mask min-w-0 flex-1 overflow-hidden py-2.5">
        <div
          className={cn(
            "luxury-ticker-track flex w-max items-center",
            paused && "luxury-ticker-paused",
          )}
        >
          <TickerItems />
          <TickerItems hidden />
        </div>
      </div>

      <div className="luxury-ticker-control flex w-10 shrink-0 items-center justify-center sm:w-11">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play moving highlights" : "Pause moving highlights"}
          title={paused ? "Play" : "Pause"}
          className="inline-flex size-7 items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        >
          {paused ? <Play className="size-3" /> : <Pause className="size-3" />}
        </button>
      </div>
    </section>
  );
}
