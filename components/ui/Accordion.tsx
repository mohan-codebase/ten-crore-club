"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** index open by default; -1 for none */
  defaultOpen?: number;
}

export function Accordion({ items, className, defaultOpen = -1 }: AccordionProps) {
  const [open, setOpen] = useState<number>(defaultOpen);
  const accordionId = useId();

  return (
    <div className={cn("divide-y divide-line rounded-lg border border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const triggerId = `${accordionId}-${item.id}-trigger`;
        const panelId = `${accordionId}-${item.id}-panel`;
        return (
          <div key={item.id}>
            <button
              id={triggerId}
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gold/5"
            >
              <span className="font-medium text-cream">{item.trigger}</span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-gold transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-gold-light/75">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
