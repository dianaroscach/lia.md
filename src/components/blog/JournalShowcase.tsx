"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { JournalEntry } from "@/data/journal";

export function JournalShowcase({ entries, archiveEntries }: { entries: JournalEntry[]; archiveEntries: JournalEntry[] }) {
  const [selectedSlug, setSelectedSlug] = useState(entries[0].slug);
  const articleRef = useRef<HTMLElement>(null);
  const selected = [...entries, ...archiveEntries].find(entry => entry.slug === selectedSlug) ?? entries[0];

  function selectEntry(slug: string, scrollToArticle = false) {
    setSelectedSlug(slug);
    if (scrollToArticle) articleRef.current?.scrollIntoView({ block: "start" });
  }

  return <>
    <p className="sr-only" aria-live="polite">Articol selectat: {selected.title}</p>
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(290px,1fr)] lg:gap-8">
      <article ref={articleRef} className="min-w-0 scroll-mt-28 overflow-hidden border border-[var(--line)] bg-white">
        <figure>
          <div className="relative aspect-[4/3] bg-[var(--cream)] sm:aspect-[16/10]">
            <Image src={selected.photos[0].src} alt={selected.photos[0].alt} fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
          </div>
          <figcaption className="px-6 pt-3 text-xs leading-5 text-[var(--muted)] sm:px-9">{selected.photos[0].alt}</figcaption>
        </figure>
        <div className="p-6 pt-8 sm:p-9 sm:pt-10">
          <p className="eyebrow">{selected.date}{selected.place ? ` · ${selected.place}` : ""}</p>
          <h2 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">{selected.title}</h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">{selected.excerpt}</p>
          <div className="mt-9 space-y-6 border-t border-[var(--line)] pt-8 text-base leading-8 sm:text-lg">
            {selected.paragraphs.map((paragraph, index) => <p key={`${selected.slug}-${index}`}>{paragraph}</p>)}
          </div>
          {selected.photos.length > 1 && <section className="mt-12 border-t border-[var(--line)] pt-8" aria-label="Fotografii din articol">
            <p className="eyebrow">Din album</p>
            <h3 className="mt-2 text-2xl sm:text-3xl">Momente în imagini</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {selected.photos.slice(1).map(photo => <figure key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cream)]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 32vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{photo.alt}</figcaption>
              </figure>)}
            </div>
          </section>}
        </div>
      </article>

      <aside aria-label="Alege o poveste din Jurnal" className="min-w-0 border border-[var(--line)] bg-white lg:sticky lg:top-24">
        <div className="border-b border-[var(--line)] px-5 py-5 sm:px-6">
          <p className="eyebrow">Din Jurnal</p>
          <h2 className="mt-2 text-2xl">Alte povești</h2>
        </div>
        <div className="max-h-[520px] snap-y snap-mandatory overflow-y-auto overscroll-contain lg:max-h-[calc(100vh-12rem)]">
          {entries.filter(entry => entry.slug !== selected.slug).map(entry => <button
            key={entry.slug}
            type="button"
            onClick={() => selectEntry(entry.slug)}
            className="group flex w-full snap-start gap-4 border-b border-[var(--line)] p-4 text-left transition-colors last:border-b-0 hover:bg-[var(--mist)] focus-visible:bg-[var(--mist)] sm:p-5"
            aria-label={`Afișează ${entry.title}`}
          >
            <span className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden bg-[var(--cream)] sm:w-32 lg:w-28 xl:w-36">
              <Image src={entry.photos[0].src} alt="" fill sizes="144px" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </span>
            <span className="min-w-0 self-center">
              <span className="block text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--wine)]">{entry.date}</span>
              <span className="mt-2 block font-serif text-xl leading-tight transition-colors group-hover:text-[var(--forest)] sm:text-2xl">{entry.title}</span>
            </span>
          </button>)}
        </div>
      </aside>
    </div>

    <section className="mt-14 border-t border-[var(--line)] pt-10 sm:mt-20">
      <p className="eyebrow">Mai departe</p>
      <h2 className="mt-3 text-3xl sm:text-4xl">Din arhivă</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {archiveEntries.map(entry => <button
          key={entry.slug}
          type="button"
          onClick={() => selectEntry(entry.slug, true)}
          className={`group w-full overflow-hidden border bg-white text-left transition-colors hover:border-[var(--forest)] focus-visible:border-[var(--forest)] ${selected.slug === entry.slug ? "border-[var(--forest)]" : "border-[var(--line)]"}`}
          aria-label={`Afișează ${entry.title}`}
          aria-pressed={selected.slug === entry.slug}
        >
          <span className="relative block aspect-[16/10] overflow-hidden bg-[var(--cream)]">
            <Image src={entry.photos[0].src} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
          </span>
          <span className="block p-6 sm:p-7">
            <span className="eyebrow block">{entry.date}{entry.place ? ` · ${entry.place}` : ""}</span>
            <span className="mt-4 block font-serif text-3xl leading-tight transition-colors group-hover:text-[var(--forest)]">{entry.title}</span>
            <span className="mt-4 block text-base leading-7 text-[var(--muted)]">{entry.excerpt}</span>
            <span className="text-action mt-6 block">Deschide povestea <span aria-hidden="true">↑</span></span>
          </span>
        </button>)}
      </div>
    </section>
  </>;
}
