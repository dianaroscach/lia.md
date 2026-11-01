import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { JournalCard } from "@/components/blog/JournalCard";
import { journalEntries } from "@/data/journal";

export function generateStaticParams() {
  return journalEntries.map(entry => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find(item => item.slug === slug);
  return entry ? {
    title: `${entry.title} | Jurnal`,
    description: entry.excerpt,
    openGraph: { title: entry.title, description: entry.excerpt, images: [entry.photos[0].src] },
  } : {};
}

export default async function JournalEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = journalEntries.find(item => item.slug === slug);
  if (!entry) notFound();
  const currentIndex = journalEntries.findIndex(item => item.slug === slug);
  const related = [1, 2, 3].map(offset => journalEntries[(currentIndex + offset) % journalEntries.length]);

  return <main>
    <PageIntro label="Jurnal" title={entry.title} intro={entry.excerpt} />
    <Container className="pb-10 pt-8 sm:pb-14 sm:pt-10">
      <Link href="/jurnal" className="text-action">← Înapoi la Jurnal</Link>
      <article>
        <p className="eyebrow mt-8">{entry.date}{entry.place ? ` · ${entry.place}` : ""}</p>

        <figure className="mt-10 sm:mt-14">
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cream)] sm:aspect-[16/9]">
            <Image src={entry.photos[0].src} alt={entry.photos[0].alt} fill priority sizes="(max-width: 1240px) 100vw, 1200px" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-xs text-[var(--muted)]">{entry.photos[0].alt}</figcaption>
        </figure>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-[var(--ink)] sm:mt-14 sm:text-lg">
          {entry.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <section className="mt-14 border-t border-[var(--line)] pt-10 sm:mt-20">
          <p className="eyebrow">Din album</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Momente în imagini</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {entry.photos.slice(1).map(photo => <figure key={photo.src}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cream)]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{photo.alt}</figcaption>
            </figure>)}
          </div>
        </section>

      </article>
      <section className="mt-14 border-t border-[var(--line)] pt-10 sm:mt-20">
        <p className="eyebrow">Continuă să descoperi</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Alte postări din Jurnal</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map(item => <JournalCard key={item.slug} entry={item} />)}
        </div>
      </section>
    </Container>
  </main>;
}
