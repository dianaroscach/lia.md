import { dianaTasks, type DianaTaskPriority, type DianaTaskStatus } from "@/data/dianaTasks";
import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Task-uri site | Ciocârlia",
  description: "Listă temporară de corectări pentru dezvoltarea site-ului Ciocârlia.",
  robots: { index: false, follow: false },
};

const statusLabels: Record<DianaTaskStatus, string> = {
  de_facut: "De făcut",
  in_lucru: "În lucru",
  rezolvat: "Rezolvat",
};

const priorityLabels: Record<DianaTaskPriority, string> = {
  normal: "Normal",
  important: "Important",
  urgent: "Urgent",
};

const statuses: DianaTaskStatus[] = ["de_facut", "in_lucru", "rezolvat"];

export default function TaskuriPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[.18em] text-[var(--wine)]">Development · temporar</p>
          <h1 className="font-serif text-4xl sm:text-5xl">Task-uri site</h1>
          <p className="mt-4 text-base leading-7 opacity-75">
            Corectările și observațiile pentru site-ul Ciocârlia trimise în perioada de dezvoltare.
          </p>
        </div>

        {dianaTasks.length === 0 ? (
          <div className="border border-[var(--line)] p-8 sm:p-10">
            <h2 className="font-serif text-2xl">Nu sunt task-uri încă.</h2>
            <p className="mt-2 opacity-70">Task-urile trimise din GPT-ul Dianei vor apărea aici.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {statuses.map((status) => {
              const tasks = dianaTasks.filter((task) => task.status === status);
              return (
                <section key={status} className="min-w-0">
                  <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-3">
                    <h2 className="font-serif text-2xl">{statusLabels[status]}</h2>
                    <span className="text-sm opacity-60">{tasks.length}</span>
                  </div>
                  <div className="space-y-4">
                    {tasks.length === 0 ? (
                      <p className="border border-dashed border-[var(--line)] p-5 text-sm opacity-60">Niciun task.</p>
                    ) : tasks.map((task) => (
                      <article key={task.id} className="border border-[var(--line)] bg-[var(--ivory)] p-5">
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[.1em]">
                          <span className="border border-[var(--line)] px-2 py-1">{priorityLabels[task.priority]}</span>
                          <span className="opacity-60">{task.page}</span>
                        </div>
                        <h3 className="font-serif text-xl">{task.title}</h3>
                        <p className="mt-3 whitespace-pre-line text-sm leading-6 opacity-80">{task.description}</p>
                        {task.note && <p className="mt-3 border-t border-[var(--line)] pt-3 text-sm italic opacity-70">{task.note}</p>}
                        <p className="mt-4 text-xs opacity-50">{task.createdAt}</p>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </Container>
    </main>
  );
}
