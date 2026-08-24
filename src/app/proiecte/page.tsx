import type {Metadata} from "next";
import {Container} from "@/components/layout/Container";
import {SectionHeading} from "@/components/ui/SectionHeading";

export const metadata:Metadata={title:"Proiecte",description:"Proiectele și activitățile realizate de comunitatea Ciocârlia."};

export default function ProjectsPage(){return <Container className="py-20"><SectionHeading eyebrow="Proiecte" title="Lucruri făcute împreună." intro="Aici documentăm proiectele și activitățile realizate: fotografii, perioadă, localitate, parteneri și rezultate."/><section className="mt-12 border border-dashed border-[var(--line-strong)] bg-[var(--paper)] p-10 text-center"><h2 className="text-3xl">Arhiva de proiecte este în pregătire.</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--muted)]">Primele proiecte vor apărea aici pe măsură ce sunt documentate, într-o structură ușor de extins.</p></section></Container>}
