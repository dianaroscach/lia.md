"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { bookDescriptions } from "@/data/bookDescriptions";
import type { Book } from "@/types/book";

type BooksLibraryProps = { books: Book[] };

type PreviewSlide = {
  src: string;
  alt: string;
  position?: string;
};

const bookPreviews: Record<string, PreviewSlide[]> = {
  b2: [
    { src: "/images/books/intelepciunea-editorial.webp", alt: "Coperta cărții Înțelepciunea acului" },
    { src: "/images/books/intelepciunea-acului.png", alt: "Detaliu al copertei cărții Înțelepciunea acului" },
    { src: "/images/books/intelepciunea-editorial.webp", alt: "Detaliu din cartea Înțelepciunea acului", position: "50% 72%" },
  ],
  b1: [
    { src: "/images/books/rapsodia-editorial.webp", alt: "Coperta cărții Rapsodia patrimoniului" },
    { src: "/images/books/rapsodia-patrimoniului.png", alt: "Detaliu al copertei cărții Rapsodia patrimoniului" },
    { src: "/images/books/rapsodia-editorial.webp", alt: "Detaliu din cartea Rapsodia patrimoniului", position: "50% 72%" },
  ],
};

function Arrow({ direction }: { direction: "previous" | "next" }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={direction === "previous" ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"} />
  </svg>;
}

function BookPreview({ book }: { book: Book }) {
  const slides = bookPreviews[book.id] ?? [{ src: book.image, alt: `Coperta cărții ${book.title}` }];
  const [activeSlide, setActiveSlide] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const goToSlide = (index: number) => setActiveSlide((index + slides.length) % slides.length);
  const slide = slides[activeSlide];
  const readingDescription = bookDescriptions[book.id]
    ?.slice(book.id === "b2" ? 2 : 1)
    .filter((block) => block.type === "list" || !/^(Autori?:|Tipul copertei:|Limba:|Ediție:)/.test(block.text));

  const openDescription = () => {
    previousOverflow.current = document.body.style.overflow;
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeDescription = () => {
    document.body.style.overflow = previousOverflow.current;
    triggerRef.current?.focus();
  };

  const imageOnRight = book.id === "b1";
  const authorLabel = book.authors.length === 1 ? "Autor" : "Autori";

  return <article className={imageOnRight ? "relative isolate px-5 py-12 sm:px-7 sm:py-14 lg:px-9 lg:py-16" : ""}>
    {imageOnRight && <div aria-hidden="true" className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[var(--mist)]" />}
    <div className={`grid lg:items-center lg:gap-15 ${imageOnRight ? "lg:grid-cols-[minmax(0,1fr)_420px]" : "lg:grid-cols-[420px_minmax(0,1fr)]"}`}>
      <div className={imageOnRight ? "lg:order-2" : "p-5 sm:p-7 lg:py-8 lg:pl-0 lg:pr-0"}>
      <div className="max-w-[420px]">
      <div className="relative h-[400px] overflow-hidden bg-[var(--sand)]">
        <Image key={slide.src + activeSlide} src={slide.src} alt={slide.alt} fill sizes="(max-width: 1024px) calc(100vw - 64px), 50vw" className="object-cover transition-opacity duration-300" style={{ objectPosition: slide.position ?? "center" }} priority={book.id === "b2" && activeSlide === 0} />
        <button type="button" aria-label={`Pagina precedentă din ${book.title}`} onClick={() => goToSlide(activeSlide - 1)} className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-[var(--forest)] shadow-sm transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wine)]"><Arrow direction="previous" /></button>
        <button type="button" aria-label={`Pagina următoare din ${book.title}`} onClick={() => goToSlide(activeSlide + 1)} className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-[var(--forest)] shadow-sm transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wine)]"><Arrow direction="next" /></button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5" aria-label={`Pagina ${activeSlide + 1} din ${slides.length}`}>
        {slides.map((_, index) => <span key={index} aria-hidden="true" className={`size-1.5 rounded-full ${index === activeSlide ? "bg-[var(--forest)]" : "bg-[var(--line-strong)]"}`} />)}
        <span className="ml-3 text-[10px] font-semibold tracking-[.16em] text-[var(--muted)]">{activeSlide + 1} / {slides.length}</span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {slides.map((preview, index) => <button key={`${preview.src}-${index}`} type="button" onClick={() => setActiveSlide(index)} aria-label={`Arată pagina ${index + 1} din ${book.title}`} aria-current={index === activeSlide ? "true" : undefined} className={`relative aspect-[1.45] overflow-hidden border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wine)] ${index === activeSlide ? "border-[var(--forest)]" : "border-transparent hover:border-[var(--line-strong)]"}`}>
          <Image src={preview.src} alt="" fill sizes="160px" className="object-cover" style={{ objectPosition: preview.position ?? "center" }} />
        </button>)}
      </div>
    </div>
    </div>

    <div className={`flex flex-col justify-center ${imageOnRight ? "pt-6 sm:pt-8 lg:order-1 lg:py-0" : "p-6 sm:p-8 lg:py-8 lg:pl-0 lg:pr-0"}`}>
      <p className="eyebrow">{book.id === "b2" ? "Ghid practic" : "Album-document"}</p>
      <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">{book.title}</h2>
      <p className="mt-3 font-serif text-xl leading-7 text-[var(--ink)]">{book.subtitle}</p>
      <p className="mt-2 text-sm font-semibold text-[var(--ink)]">{authorLabel}: {book.authors.join(" și ")}</p>
      <p className="mt-5 max-w-none text-base leading-7 text-[var(--muted)]">
        {book.description}{" "}
        <button ref={triggerRef} type="button" aria-haspopup="dialog" aria-controls={`book-details-${book.id}`} onClick={openDescription} className="text-action focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cta)]">Citește mai mult</button>
      </p>
      <div className="mt-6"><Button href="/contact" variant="secondary">Ia legătura cu autorul</Button></div>
    </div>
    </div>
    <dialog ref={dialogRef} id={`book-details-${book.id}`} aria-labelledby={`book-details-title-${book.id}`} onClose={closeDescription} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} className="fixed inset-y-0 right-0 left-auto m-0 ml-auto h-dvh max-h-dvh w-full max-w-[680px] overflow-hidden border-0 bg-[var(--paper)] p-0 text-[var(--ink)] shadow-2xl backdrop:bg-black/50">
      <div className="flex h-full flex-col">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-[var(--line)] bg-[var(--paper)] px-6 py-5 sm:px-9">
          <div>
            <p className="eyebrow">Despre carte</p>
            <h2 id={`book-details-title-${book.id}`} className="mt-2 text-3xl leading-tight">{book.title}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{authorLabel}: {book.authors.join(" și ")}</p>
          </div>
          <button type="button" autoFocus aria-label="Închide descrierea cărții" onClick={() => dialogRef.current?.close()} className="grid size-10 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-2xl leading-none text-[var(--forest)] hover:bg-[var(--mist)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wine)]">×</button>
        </div>
        <div className="overflow-y-auto px-6 py-6 sm:px-9">
          <div className="space-y-4 text-base leading-7 text-[var(--muted)]">
            {readingDescription ? readingDescription.map((block, index) => block.type === "list" ?
              <ul key={index} className="list-disc space-y-2 pl-6 marker:text-[var(--forest)]">{block.items.map((item) => <li key={item}>{item}</li>)}</ul> :
              <p key={index}>{block.text}</p>
            ) : book.story.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </dialog>
  </article>;
}

export function BooksLibrary({ books }: BooksLibraryProps) {
  return <section aria-label="Biblioteca Ciocârlia" className="pt-2 md:pt-4">
    <div className="space-y-12 md:space-y-16">{books.map((book) => <BookPreview key={book.id} book={book} />)}</div>
  </section>;
}
