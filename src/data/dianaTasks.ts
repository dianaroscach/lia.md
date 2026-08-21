export type DianaTaskStatus = "de_facut" | "in_lucru" | "rezolvat";
export type DianaTaskPriority = "normal" | "important" | "urgent";

export type DianaTask = {
  id: string;
  title: string;
  page: string;
  description: string;
  status: DianaTaskStatus;
  priority: DianaTaskPriority;
  createdAt: string;
  note?: string;
};

// Temporary development data source. Diana's GPT can add/update tasks here.
export const dianaTasks: DianaTask[] = [
  {
    id: "inlocuire-jurnal-fata-fara-zestre",
    title: "Înlocuirea compartimentului „Jurnal” cu blogul „Fata fără zestre”",
    page: "Blog / Jurnal",
    description:
      "Înlocuirea compartimentului existent „Jurnal” cu un blog dedicat proiectului „Fata fără zestre”.",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-20",
  },
  {
    id: "actualizare-meniu-principal",
    title: "Actualizarea meniului principal al site-ului",
    page: "Navigare principală",
    description:
      "Actualizează meniul principal în următoarea ordine: Povestea noastră | Magazin | Proiecte | Evenimente | Blog | Contact | Coș.",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-20",
  },
  {
    id: "organizare-magazin-categorii",
    title: "Organizarea Magazinului pe categorii",
    page: "Magazin",
    description:
      "Structurează Magazinul astfel:\n\nCărți:\n- „Înțelepciunea acului”\n- „Rapsodia patrimoniului”\n\nPlanșe:\n- Planșa X\n- Planșa Y\n\nAteliere și îndrumare:\n- Workshop de grup pentru adulți\n- Workshop pentru copii\n- Îndrumare individuală\n\nNu afișa toate cele șapte produse direct în meniul principal. Păstrează gruparea pe categorii pentru claritate și extindere ulterioară.",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-20",
  },
  {
    id: "structura-detaliata-meniu",
    title: "Implementarea structurii detaliate a meniului",
    page: "Meniu principal și submeniuri",
    description:
      "PARTEA STÂNGĂ\n\nPovestea noastră\n- Fără submeniu.\n\nAtelier de cusut\n- Șezătoarea din Ialoveni — Gratuit\n- Șezătoarea din Costești — Gratuit\n- Atelier privat pentru maximum 20 de persoane — 5.000 MDL/grup\n- Consultație individuală online — 600 MDL\n\nCărți\n- Rapsodia patrimoniului\n- Înțelepciunea acului\n\nPlanșe\n- Planșa X\n- Planșa Y\n- Alte planșe adăugate ulterior\n\nCreatoare\n- Svetlana Maftei\n- Diana Roșca\n- Tatiana Luca\n- Tatiana Borta\n- Alte creatoare\n\nPARTEA DREAPTĂ\n\nProiecte\n- Aici vor fi adăugate proiectele și activitățile realizate, fiecare cu fotografii, perioadă, localitate, parteneri și rezultate.\n\nJurnal | Contact | Coș",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-21",
    note:
      "Dacă lista va crește mult, nu afișa toate planșele și toate creatoarele direct în submeniu. Afișează primele 4–6 elemente, apoi opțiunea „Vezi toate planșele” sau „Vezi toate creatoarele”. Meniul trebuie să rămână aerisit și ușor de folosit pe telefon.",
  },
];
