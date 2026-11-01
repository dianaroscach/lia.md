import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Planșe",
  description: "Pagina cu planșe de cusut Ciocârlia este în pregătire.",
};

export default function PatternsPage() {
  return <ComingSoon
    eyebrow="Planșe"
    heading="Modele pentru următoarea cămașă."
    intro="Pregătim o colecție de planșe inspirate din motive tradiționale, pentru cei care vor să descopere și să coasă mai departe aceste modele."
    title="Planșele sunt în pregătire."
    description="Revino curând pentru a descoperi primele modele de cusut."
  />;
}
