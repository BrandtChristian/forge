"use client";

import { Info } from "@phosphor-icons/react";

export function DemoBanner() {
  return (
    <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center justify-center gap-2 text-sm text-primary">
      <Info className="h-4 w-4 shrink-0" weight="fill" />
      <span>
        Hackathon demo environment &mdash; explore freely, email sending is live for testing
      </span>
    </div>
  );
}
