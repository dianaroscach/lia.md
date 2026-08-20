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
export const dianaTasks: DianaTask[] = [];
