import { Container } from "@/components/layout/Container";
import { PageIntro } from "./PageIntro";

export function ComingSoon({ eyebrow, heading, intro, title, description }: {
  eyebrow: string;
  heading: string;
  intro: string;
  title: string;
  description: string;
}) {
  return <main className="bg-white">
    <PageIntro label={eyebrow} title={heading} intro={intro} />
    <Container className="pb-16 sm:pb-20 lg:pb-24">
      <section className="mt-12 border border-dashed border-[var(--line-strong)] px-6 py-10 text-center sm:mt-16 sm:px-10 sm:py-14">
        <h2 className="text-2xl leading-tight sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">{description}</p>
      </section>
    </Container>
  </main>;
}
