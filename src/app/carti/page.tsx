import type { Metadata } from "next";
import { books } from "@/data/books";
import { bookDescriptions } from "@/data/bookDescriptions";
import { Container } from "@/components/layout/Container";
import { BooksLibrary } from "@/components/books/BooksLibrary";

export const metadata: Metadata = {
  title: "Cărți",
  description: "Înțelepciunea acului și Rapsodia patrimoniului: tehnici de cusut, mărturii și povești din comunitatea Șezătoarea Ciocârlia.",
};

export default function Books() {
  return <Container className="pt-14 pb-10 md:pt-20 md:pb-12">
    <header className="mb-10">
      <div className="grid gap-6 pb-10 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16 md:pb-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[var(--wine)]">Cărți · Biblioteca Ciocârlia</p>
          <h1 className="mt-5 text-5xl leading-[1.08] md:text-7xl">Povești și<br />meșteșug,<br />pagină cu pagină.</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">Două cărți ne apropie de cămașa tradițională și de oamenii care îi duc povestea mai departe. „Înțelepciunea acului” însoțește lucrul cu acul, iar „Rapsodia patrimoniului” păstrează memoria și creațiile comunității Șezătoarea Ciocârlia.</p>
      </div>
    </header>
    <BooksLibrary books={[books[1], books[0]]} descriptions={bookDescriptions} />
  </Container>;
}
