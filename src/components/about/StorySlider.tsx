"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function StorySlider({ photos }: { photos: string[][] }) {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [enlarged, setEnlarged] = useState(0);
  const [active, setActive] = useState(0);

  function changeEnlarged(direction: number) {
    setEnlarged((current) => (current + direction + photos.length) % photos.length);
  }

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const step = () => (element.children[1] as HTMLElement).offsetLeft - (element.children[0] as HTMLElement).offsetLeft;
    element.scrollLeft = photos.length * step();
    const normalize = () => {
      const width = step();
      const index = Math.round(element.scrollLeft / width);
      if (index < photos.length || index >= photos.length * 2) {
        element.scrollTo({ left: (photos.length + ((index % photos.length) + photos.length) % photos.length) * width, behavior: "instant" });
      }
    };
    element.addEventListener("scrollend", normalize);
    return () => element.removeEventListener("scrollend", normalize);
  }, [photos.length]);

  function goTo(index: number) {
    const element = track.current;
    if (!element) return;
    const step = (element.children[1] as HTMLElement).offsetLeft - (element.children[0] as HTMLElement).offsetLeft;
    const current = Math.round(element.scrollLeft / step);
    element.scrollTo({ left: (current + index - active) * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section aria-label="Fotografii din comunitate" aria-roledescription="carusel" className="w-full">
      <div
        ref={track}
        tabIndex={0}
        aria-label="Galerie foto. Folosește săgețile stânga și dreapta pentru navigare."
        className="relative flex gap-4 md:gap-6 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--forest)]"
        onScroll={() => {
          const element = track.current;
          if (element && element.children.length > 1) {
            const step = (element.children[1] as HTMLElement).offsetLeft - (element.children[0] as HTMLElement).offsetLeft;
            setActive(((Math.round(element.scrollLeft / step) % photos.length) + photos.length) % photos.length);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(active + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}
      >
        {[...photos, ...photos, ...photos].map(([name, alt], index) => (
          <div key={`${name}-${index}`} role="group" aria-roledescription="diapozitiv" aria-label={`${index % photos.length + 1} din ${photos.length}`} className="relative aspect-[4928/3280] w-[85%] md:w-[calc((100%-36px)/2.5)] shrink-0 snap-start snap-always">
            <button type="button" aria-label={`Mărește fotografia ${index % photos.length + 1}: ${alt}`} onClick={() => { setEnlarged(index % photos.length); dialog.current?.showModal(); }} className="absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white">
              <Image src={`/images/povestea-noastra/${name}.webp`} alt={alt} fill sizes="(max-width: 768px) 85vw, 40vw" className="object-contain" />
            </button>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-5 flex max-w-[1240px] items-center justify-between gap-3 px-5 sm:px-8">
        <p aria-live="polite" aria-atomic="true" className="text-sm tabular-nums text-[var(--muted)]">{String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</p>
        <div className="flex items-center gap-1">
          {photos.map(([name], index) => <button key={name} type="button" aria-label={`Vezi fotografia ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => goTo(index)} className="flex h-11 w-9 items-center justify-center"><span className={`h-px transition-all ${active === index ? "w-6 bg-[var(--forest)]" : "w-6 bg-[var(--sand)]"}`} /></button>)}
        </div>
        <div className="flex gap-2">
          <button type="button" aria-label="Fotografia precedentă" onClick={() => goTo(active - 1)} className="h-11 w-11 border-b border-[var(--line-strong)] text-xl text-[var(--forest)] transition hover:border-[var(--forest)] hover:bg-[var(--mist)]">←</button>
          <button type="button" aria-label="Fotografia următoare" onClick={() => goTo(active + 1)} className="h-11 w-11 border-b border-[var(--line-strong)] text-xl text-[var(--forest)] transition hover:border-[var(--forest)] hover:bg-[var(--mist)]">→</button>
        </div>
      </div>
      <dialog ref={dialog} aria-label="Galerie foto mărită" onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          changeEnlarged(event.key === "ArrowRight" ? 1 : -1);
        }
      }} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto h-[100dvh] max-h-none w-screen max-w-none border-0 bg-black/80 p-4 text-white backdrop:bg-black/30 sm:p-8">
        <div className="pointer-events-none flex h-full flex-col items-center justify-center gap-3 pt-12">
          <button type="button" autoFocus aria-label="Închide fotografia mărită" onClick={() => dialog.current?.close()} className="pointer-events-auto absolute right-5 top-3 z-10 flex min-h-11 items-center gap-3 border-b border-[var(--line-strong)] px-2 text-[11px] font-semibold uppercase tracking-[.15em] text-white sm:right-8">Închide<span className="text-xl" aria-hidden="true">×</span></button>
          <div className="pointer-events-auto relative min-h-0 w-full max-w-[1600px] flex-1">
            <Image src={`/images/povestea-noastra/${photos[enlarged][0]}.webp`} alt={photos[enlarged][1]} fill sizes="100vw" className="object-contain" />
          </div>
          <div className="pointer-events-auto flex w-full max-w-3xl shrink-0 items-center justify-between gap-3">
            <button type="button" aria-label="Imaginea precedentă în galerie" onClick={() => changeEnlarged(-1)} className="h-11 w-11 shrink-0 border-b border-white/30 text-2xl text-white hover:bg-white/10">←</button>
            <p aria-live="polite" aria-atomic="true" className="text-center text-xs leading-5 text-white/75 sm:text-sm">{enlarged + 1} / {photos.length} · {photos[enlarged][1]}</p>
            <button type="button" aria-label="Imaginea următoare în galerie" onClick={() => changeEnlarged(1)} className="h-11 w-11 shrink-0 border-b border-white/30 text-2xl text-white hover:bg-white/10">→</button>
          </div>
          <div aria-label="Miniaturile galeriei" className="pointer-events-auto flex max-w-full shrink-0 gap-3 overflow-x-auto p-1">
            {photos.map(([name, alt], index) => (
              <button key={name} type="button" aria-label={`Deschide fotografia ${index + 1}`} aria-pressed={enlarged === index} onClick={() => setEnlarged(index)} className={`relative h-14 w-20 shrink-0 overflow-hidden border-b-2 transition sm:h-20 sm:w-28 ${enlarged === index ? "border-white opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}>
                <Image src={`/images/povestea-noastra/${name}.webp`} alt={alt} fill sizes="112px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </section>
  );
}
