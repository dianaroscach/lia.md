import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { WorkshopOfferings } from "@/components/workshops/WorkshopOfferings";

export const metadata: Metadata = {
  title: "Atelier de cusut",
  description: "Șezători, ateliere de grup și îndrumare individuală Ciocârlia.",
};

export default function AtelierPage() {
  return <main>
    <PageIntro label="Atelier de cusut" title="Învățăm împreună, punct cu punct." intro="Alege o șezătoare, un atelier pentru grup sau o întâlnire individuală potrivită proiectului tău." />
    <Container className="pb-20 pt-8 sm:pt-10"><WorkshopOfferings /></Container>
  </main>;
}
