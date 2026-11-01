import { permanentRedirect } from "next/navigation";

export default async function OldJournalEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(`/jurnal/${slug}`);
}
