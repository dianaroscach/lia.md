import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Proiecte",
  description: "Pagina cu proiectele comunității Ciocârlia este în pregătire.",
};

export default function ProjectsPage() {
  return <ComingSoon
    eyebrow="Proiecte"
    heading="Lucruri făcute împreună."
    intro="Pregătim o pagină despre proiectele comunității Ciocârlia și oamenii care duc mai departe tradiția cămășii cusute."
    title="Proiectele sunt în pregătire."
    description="Revino curând pentru a descoperi proiectele noastre."
  />;
}
