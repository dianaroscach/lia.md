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
];
