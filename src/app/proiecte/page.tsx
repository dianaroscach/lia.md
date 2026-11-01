import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Proiecte",
  description: "Arhiva proiectelor comunității Ciocârlia este în pregătire.",
};

export default function ProjectsPage() {
  return <ComingSoon
    eyebrow="Proiecte"
    heading="Lucruri făcute împreună."
    intro="Aici documentăm proiectele și activitățile realizate: fotografii, perioadă, localitate, parteneri și rezultate."
    title="Arhiva proiectelor este în pregătire."
    description="Primele proiecte vor apărea aici pe măsură ce sunt documentate, într-o structură ușor de extins."
  />;
}
