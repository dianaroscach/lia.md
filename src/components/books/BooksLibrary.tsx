"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { BookDescriptionBlock } from "@/data/bookDescriptions";
import type { Book } from "@/types/book";

type BooksLibraryProps = {
  books: Book[];
  descriptions: Record<string, BookDescriptionBlock[]>;
};

type ContentGroup = {
  title: string;
  blocks: BookDescriptionBlock[];
};

const metaPattern = /^(Autori?:|Tipul copertei:|Limba:|Ediție:)/;

function groupDescription(blocks: BookDescriptionBlock[]) {
  const meta = blocks.filter((block) => block.type === "text" && metaPattern.test(block.text));
  const body = blocks.filter((block) => !(block.type === "text" && metaPattern.test(block.text)));
  const listIndexes = body.flatMap((block, index) => block.type === "list" ? [index] : []);

  if (listIndexes.length === 1) {
    const listIndex = listIndexes[0];
    return {
      intro: body.slice(0, 2),
      groups: [
        { title: "Povestea și contextul", blocks: body.slice(2, Math.max(2, listIndex - 1)) },
        { title: "Cui îi este recomandată", blocks: body.slice(Math.max(2, listIndex - 1)) },
      ].filter((group) => group.blocks.length > 0),
      meta,
    };
  }

  const firstList = listIndexes[0] ?? body.length;
  const secondList = listIndexes[1] ?? body.length;
  const introEnd = Math.max(0, firstList - 1);

  const groups: ContentGroup[] = [
    { title: "Ce vei găsi în carte", blocks: body.slice(introEnd, firstList + 1) },
    { title: "Povestea și contextul", blocks: body.slice(firstList + 1, Math.max(firstList + 1, secondList - 1)) },
    { title: "Cui îi este recomandată", blocks: secondList < body.length ? body.slice(secondList - 1) : [] },
  ].filter((group) => group.blocks.length > 0);

  return { intro: body.slice(0, introEnd), groups, meta };
}

function Blocks({ blocks }: { blocks: BookDescriptionBlock[] }) {
  return <div className="space-y-3">
    {blocks.map((block, index) => block.type === "list" ?
      <ul key={index} className="list-disc space-y-2 pl-5 marker:text-[var(--olive)]">
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul> :
      <p key={index}>{block.text}</p>
    )}
  </div>;
}

export function BooksLibrary({ books, descriptions }: BooksLibraryProps) {
  const [activeId, setActiveId] = useState(books[0].id);
  const activeBook = books.find((book) => book.id === activeId) ?? books[0];
  const activeIndex = books.findIndex((book) => book.id === activeBook.id);
  const { intro, groups, meta } = groupDescription(descriptions[activeBook.id]);

  return <section aria-labelledby="book-picker-title" className="border-t border-[var(--line)] pt-7">
    <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[var(--wine)]">Biblioteca Ciocârlia</p>
        <h2 id="book-picker-title" className="mt-2 text-2xl md:text-3xl">Alege cartea pe care vrei să o descoperi</h2>
      </div>
      <p className="text-sm text-[var(--muted)]">Conținutul se deschide mai jos, în aceeași pagină.</p>
    </div>

    <div role="tablist" aria-label="Cărțile disponibile" className="grid gap-3 sm:grid-cols-2">
      {books.map((book) => {
        const selected = book.id === activeBook.id;
        return <button
          key={book.id}
          id={`book-tab-${book.id}`}
          type="button"
          role="tab"
          aria-selected={selected}
          aria-controls="selected-book"
          onClick={() => setActiveId(book.id)}
          className={`group grid min-h-32 grid-cols-[82px_1fr] items-center gap-4 border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--wine)] ${selected ? "border-[var(--forest)] bg-[var(--paper)]" : "border-[var(--line)] hover:border-[var(--line-strong)]"}`}
        >
          <span className="relative block aspect-[1066/1475] overflow-hidden bg-white">
            <Image src={book.image} alt="" fill sizes="82px" className="object-cover" />
          </span>
          <span>
            <span className={`text-[10px] font-semibold uppercase tracking-[.16em] ${selected ? "text-[var(--wine)]" : "text-[var(--muted)]"}`}>{book.id === "b2" ? "Ghid practic" : "Album-document"}</span>
            <span className="mt-1 block font-serif text-xl leading-tight text-[var(--ink)] md:text-2xl">{book.title}</span>
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[.12em] text-[var(--forest)]">{selected ? "Selectată" : "Vezi cartea"} →</span>
          </span>
        </button>;
      })}
    </div>

    <article id="selected-book" role="tabpanel" aria-labelledby={`book-tab-${activeBook.id}`} className="mt-8 scroll-mt-28 border-y border-[var(--line)] py-8 md:mt-10 md:py-12">
      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-12 lg:gap-16">
        <aside>
          <Image src={activeBook.image} alt={`Coperta cărții „${activeBook.title}”`} width={1066} height={1475} preload={activeIndex === 0} sizes="(max-width: 768px) 320px, 300px" className="mx-auto h-auto w-full max-w-[300px]" />
          <div className="mx-auto mt-5 max-w-[300px]"><Button href="/contact" className="w-full">Întreabă despre carte</Button></div>
        </aside>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[var(--wine)]">{activeBook.id === "b2" ? "Ghid practic · Meșteșug" : "Album-document · Comunitate"}</p>
          <h3 className="mt-2 text-3xl md:text-5xl">{activeBook.title}</h3>
          <p className="mt-3 max-w-2xl font-serif text-xl leading-7 text-[var(--olive)]">{activeBook.subtitle}</p>

          <div className="mt-6 max-w-3xl text-[15px] leading-7 text-[var(--muted)]">
            <Blocks blocks={intro} />
          </div>

          <dl className="mt-7 grid gap-x-8 gap-y-3 border-y border-[var(--line)] py-5 text-sm sm:grid-cols-2">
            {meta.map((block) => block.type === "text" ? <div key={block.text} className="flex gap-2"><dd className="text-[var(--ink)]">{block.text}</dd></div> : null)}
          </dl>

          <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {groups.map((group, index) => <details key={group.title} open={index === 0} className="group/details">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-[var(--forest)] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--wine)]">
                <span>{group.title}</span>
                <span aria-hidden="true" className="text-lg font-normal transition-transform group-open/details:rotate-180">⌄</span>
              </summary>
              <div className="max-w-3xl pb-6 text-[14px] leading-[1.8] text-[var(--muted)]"><Blocks blocks={group.blocks} /></div>
            </details>)}
          </div>
        </div>
      </div>
    </article>
  </section>;
}
