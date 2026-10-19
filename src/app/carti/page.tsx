import type { Metadata } from "next";
import { books } from "@/data/books";
import { Container } from "@/components/layout/Container";
import { BooksLibrary } from "@/components/books/BooksLibrary";

export const metadata: Metadata = {
  title: "Cărți",
  description: "Înțelepciunea acului și Rapsodia patrimoniului: tehnici de cusut, mărturii și povești din comunitatea Șezătoarea Ciocârlia.",
};

export default function Books() {
  return <Container className="pt-12 pb-12 md:pt-16 md:pb-16">
    <header className="mb-8">
      <div className="grid gap-5 pb-8 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16 md:pb-10">
        <div>
          <p className="eyebrow">Cărți · Biblioteca Ciocârlia</p>
          <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">Două cărți.<br />O moștenire vie.</h1>
        </div>
        <p className="max-w-xl text-base leading-7 text-[var(--muted)]">Alege un ghid pentru lucru sau un album care păstrează poveștile comunității Șezătoarea Ciocârlia.</p>
      </div>
    </header>
    <BooksLibrary books={[books[1], books[0]]} />
  </Container>;
}
