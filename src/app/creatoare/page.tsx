import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { CreatorChips } from "@/components/creators/CreatorChips";
import { creators } from "@/data/creators";

export const metadata: Metadata = {
  title: "Creatoare",
  description: "Poveștile celor șase creatoare și mentori din comunitatea Șezătoarea Ciocârlia.",
};

export default function CreatorsPage() {
  return <>
    <PageIntro label="Creatoare" title="Femeile care duc tradiția mai departe." intro="Fiecare cămașă poartă o poveste. Cunoaște creatoarele care împărtășesc din ceea ce au învățat și îi îndrumă pe cei care vor să coasă." />

    <div className="h-11 bg-white sm:h-[52px]" aria-hidden="true" />
    <div className="sticky z-40 border-b border-[var(--line)] bg-white/95 backdrop-blur" style={{ top: 82 }}>
      <Container className="py-4">
        <CreatorChips creators={creators} />
      </Container>
    </div>

    {creators.map((creator, index) => <section key={creator.id} id={creator.id} aria-labelledby={`${creator.id}-title`} style={{ scrollMarginTop: 171 }} className={`border-b border-[var(--line)] py-14 sm:py-20 ${index % 2 ? "bg-[var(--mist)]" : "bg-white"}`}>
      <Container className={`grid items-start gap-9 lg:gap-16 xl:gap-24 ${index % 2 ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"}`}>
        <div className={`relative aspect-[4/5] w-full overflow-hidden bg-[var(--sand)] lg:sticky lg:top-28 ${index % 2 ? "lg:order-2" : ""}`}>
          <Image src={creator.image} alt={creator.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" className={`object-cover ${creator.id === "svetlana-maftei" ? "object-top" : "object-center"}`} priority={index === 0} />
        </div>
        <div className="min-w-0 lg:py-4">
          <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {String(creators.length).padStart(2, "0")} · {creator.role}</p>
          <h2 id={`${creator.id}-title`} className="mt-4 text-4xl leading-tight sm:text-5xl">{creator.name}</h2>
          <div className="mt-7 h-px w-20 bg-[var(--wine)]" aria-hidden="true" />
          <div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
            {creator.paragraphs.map((paragraph, paragraphIndex) => <p key={`${creator.id}-${paragraphIndex}`}>{paragraph}</p>)}
          </div>
        </div>
      </Container>
    </section>)}
  </>;
}
