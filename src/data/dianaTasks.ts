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
];
