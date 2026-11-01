import { journalEntries } from "@/data/journal";
import { JournalCard } from "@/components/blog/JournalCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogPreview() {
  return <section className="py-24">
    <Container>
      <SectionHeading eyebrow="Jurnal" title="Întâlniri și povești din comunitate." />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {journalEntries.slice(0, 3).map(entry => <JournalCard key={entry.slug} entry={entry} />)}
      </div>
    </Container>
  </section>;
}
