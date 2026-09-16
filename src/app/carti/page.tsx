import type { Metadata } from "next";
import Image from "next/image";
import { books } from "@/data/books";
import { bookDescriptions } from "@/data/bookDescriptions";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cărți",
  description: "Înțelepciunea acului și Rapsodia patrimoniului: tehnici de cusut, mărturii și povești din comunitatea Șezătoarea Ciocârlia.",
};

export default function Books() {
  return <Container className="pt-14 pb-10 md:pt-20 md:pb-12">
    <header className="mb-8">
      <div className="grid gap-6 pb-10 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16 md:pb-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[var(--wine)]">Cărți · Biblioteca Ciocârlia</p>
          <h1 className="mt-5 text-5xl leading-[1.08] md:text-7xl">Povești și<br />meșteșug,<br />pagină cu pagină.</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">Două cărți ne apropie de cămașa tradițională și de oamenii care îi duc povestea mai departe. „Înțelepciunea acului” însoțește lucrul cu acul, iar „Rapsodia patrimoniului” păstrează memoria și creațiile comunității Șezătoarea Ciocârlia.</p>
      </div>
      <nav aria-label="Alege cartea" className="flex flex-wrap gap-x-6 gap-y-3 border-y border-[var(--line)] py-5 text-xs font-semibold text-[var(--forest)]">
        <a href="#intelepciunea" className="underline decoration-[var(--line-strong)] underline-offset-8 hover:decoration-current">Înțelepciunea acului</a>
        <a href="#rapsodia" className="underline decoration-[var(--line-strong)] underline-offset-8 hover:decoration-current">Rapsodia patrimoniului</a>
      </nav>
    </header>
    {[books[1], books[0]].map((book, index) => <section key={book.id} id={index === 0 ? "intelepciunea" : "rapsodia"} className="scroll-mt-28 border-b border-[var(--line)] py-8 first-of-type:pt-0 md:py-12">
      <div className="grid items-start gap-7 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:gap-10 lg:gap-14">
        <aside className="md:sticky md:top-28">
          <Image src={book.image} alt={`Coperta cărții „${book.title}”`} width={1066} height={1475} preload={index === 0} sizes="(max-width: 768px) 320px, 280px" className="mx-auto h-auto w-full max-w-[280px]" />
          <div className="mx-auto mt-5 max-w-[280px]"><Button href="/contact" className="w-full">Ia legătura cu autorul</Button></div>
        </aside>
        <article>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[var(--wine)]">{index === 0 ? "Ghid practic · Meșteșug" : "Album-document · Comunitate"}</p>
          <h2 className="mt-2 text-3xl md:text-4xl">{book.title}</h2>
          <p className="mt-2 font-serif text-xl leading-7 text-[var(--olive)]">{book.subtitle}</p>
          <div className="mt-5 space-y-3 text-[14px] leading-[1.8] text-[var(--muted)]">
            {bookDescriptions[book.id].map((block, blockIndex) => block.type === "list" ?
              <ul key={blockIndex} className="list-disc space-y-1 pl-5 marker:text-[var(--olive)]">{block.items.map((item) => <li key={item}>{item}</li>)}</ul> :
              <p key={blockIndex} className={block.text.endsWith(":") || /^(Autori?:|Tipul copertei:|Limba:|Ediție:)/.test(block.text) ? "font-medium text-[var(--ink)]" : ""}>{block.text}</p>
            )}
          </div>
        </article>
      </div>
    </section>)}
  </Container>;
}
