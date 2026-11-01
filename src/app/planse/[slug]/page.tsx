import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { patterns } from "@/data/patterns";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { PatternDetails } from "@/components/patterns/PatternDetails";
import { PatternOrderForm } from "@/components/patterns/PatternOrderForm";

export function generateStaticParams() {
  return patterns.map(pattern => ({ slug: pattern.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pattern = patterns.find(item => item.slug === slug);
  return pattern ? {
    title: pattern.title,
    description: pattern.description,
    openGraph: { title: pattern.title, description: pattern.description, images: [pattern.image] },
  } : {};
}

export default async function PatternPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pattern = patterns.find(item => item.slug === slug);
  if (!pattern) notFound();

  return <main>
    <PageIntro label="Planșe" title={pattern.title} intro={pattern.description} />
    <Container className="pb-16 pt-10">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden">
          <Image src={pattern.image} alt={pattern.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <PatternDetails pattern={pattern} />
          <div className="mt-8"><PatternOrderForm /></div>
        </div>
      </div>
    </Container>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: pattern.title, description: pattern.description, creator: { "@type": "Organization", name: "Ciocârlia" } }) }} />
  </main>;
}
