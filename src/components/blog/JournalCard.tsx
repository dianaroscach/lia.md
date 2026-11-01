import Image from "next/image";
import Link from "next/link";
import type { JournalEntry } from "@/data/journal";

export function JournalCard({ entry, featured = false }: { entry: JournalEntry; featured?: boolean }) {
  return <article className={`group border border-[var(--line)] bg-white ${featured ? "lg:grid lg:grid-cols-2" : ""}`}>
    <Link href={`/jurnal/${entry.slug}`} className={`block ${featured ? "lg:contents" : ""}`}>
      <div className={`relative overflow-hidden bg-[var(--cream)] ${featured ? "aspect-[4/3] lg:aspect-auto lg:min-h-[430px]" : "aspect-[4/3]"}`}>
        <Image src={entry.photos[0].src} alt={entry.photos[0].alt} fill priority={featured} sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"} className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
      </div>
      <div className={`flex flex-col ${featured ? "justify-center p-7 sm:p-10 lg:p-12" : "p-6 sm:p-7"}`}>
        <p className="eyebrow">{entry.date}{entry.place ? ` · ${entry.place}` : ""}</p>
        <h2 className={`mt-4 leading-[1.1] transition-colors group-hover:text-[var(--forest)] ${featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>{entry.title}</h2>
        <p className="mt-5 text-base leading-7 text-[var(--muted)]">{entry.excerpt}</p>
        <span className="text-action mt-7 self-start">Citește povestea <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  </article>;
}
