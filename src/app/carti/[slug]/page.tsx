import { redirect } from "next/navigation";
import { books } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default function BookPage() {
  redirect("/carti");
}
