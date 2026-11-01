import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { JournalShowcase } from "@/components/blog/JournalShowcase";
import { journalEntries } from "@/data/journal";

export const metadata: Metadata = {
  title: "Jurnal",
  description: "Evenimentele, oamenii și cămășile comunității Șezătoarea Ciocârlia, în imagini și povești.",
};

export default function JournalPage() {
  const showcaseSlugs = ["ziua-iei-geneva-2026", "ziua-universala-a-iei-ialoveni-2026", "ia-mania-festival-2026", "sanziene-2026"];
  const showcaseEntries = showcaseSlugs.map(slug => journalEntries.find(entry => entry.slug === slug)!);
  const archiveEntries = journalEntries.filter(entry => !showcaseSlugs.includes(entry.slug));

  return <main>
    <PageIntro label="Jurnal" title="Povești din viața comunității." intro="Întâlniri, sărbători și oameni care păstrează vie povestea cămășii tradiționale." />
    <Container className="py-8 sm:py-12">
      <JournalShowcase entries={showcaseEntries} archiveEntries={archiveEntries} />
    </Container>
  </main>;
}
