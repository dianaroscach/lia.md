"use client";

import { useEffect, useState } from "react";
import type { Creator } from "@/data/creators";

export function CreatorChips({ creators }: { creators: Creator[] }) {
  const [activeId, setActiveId] = useState(creators[0].id);

  useEffect(() => {
    function syncFromScroll() {
      const current = creators.reduce((active, creator) => {
        const section = document.getElementById(creator.id);
        return section && section.getBoundingClientRect().top <= 203 ? creator.id : active;
      }, creators[0].id);
      setActiveId(current);
    }

    function syncFromHash() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (creators.some(creator => creator.id === id)) setActiveId(id);
    }

    syncFromScroll();
    if (window.location.hash) syncFromHash();
    window.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [creators]);

  return <nav aria-label="Creatoarele comunității" className="flex gap-2.5 overflow-x-auto xl:grid xl:grid-cols-6 xl:overflow-visible">
    {creators.map(creator => <a
      key={creator.id}
      href={`#${creator.id}`}
      onClick={() => setActiveId(creator.id)}
      aria-current={activeId === creator.id ? "location" : undefined}
      className={`flex min-h-14 min-w-[155px] shrink-0 items-center justify-center rounded-[4px] border px-3 py-3 text-center text-xs font-semibold uppercase tracking-[.055em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--forest)] sm:text-sm xl:min-w-0 ${activeId === creator.id ? "border-[var(--forest)] bg-[var(--forest)] text-white" : "border-[#d2cab9] bg-[var(--cream)] text-[var(--forest)] hover:border-[var(--forest)] hover:bg-[var(--mist)]"}`}
    >{creator.name}</a>)}
  </nav>;
}
