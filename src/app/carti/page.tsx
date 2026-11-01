import type { Metadata } from "next";
import { books } from "@/data/books";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { BooksLibrary } from "@/components/books/BooksLibrary";

export const metadata: Metadata = {
  title: "Cărți",
  description: "Înțelepciunea acului și Rapsodia patrimoniului: tehnici de cusut, mărturii și povești din comunitatea Șezătoarea Ciocârlia.",
};

export default function Books() {
  return <main>
    <PageIntro label="Cărți" title="Prin cărți, lăsăm mai departe ceea ce suntem." intro="Alege un ghid pentru lucru sau un album care păstrează poveștile comunității Șezătoarea Ciocârlia." />
    <Container className="pb-12 pt-8 md:pb-16 md:pt-10">
      <BooksLibrary books={[books[1], books[0]]} />
    </Container>
  </main>;
}
