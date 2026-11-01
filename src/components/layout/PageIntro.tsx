import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "./Container";

export function PageIntro({ label, title, intro }: { label: string; title: ReactNode; intro: ReactNode }) {
  return <header className="relative overflow-hidden bg-white pt-14 sm:pt-20">
    <Image src="/images/decor/ornament-decor-pagina.svg" alt="" width={341} height={50} aria-hidden="true" className="pointer-events-none absolute -right-24 -top-2 w-[520px] opacity-25 sm:-right-14 sm:w-[680px]" />
    <Container className="relative">
      <p className="eyebrow">{label}</p>
      <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-16">
        <h1 className="max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="max-w-lg text-base leading-8 text-[var(--muted)] sm:text-lg">{intro}</p>
      </div>
      <div className="relative mt-7 h-10 w-full max-w-[500px]" aria-hidden="true">
        <span className="absolute inset-x-0 top-1/2 h-px bg-[var(--wine)]" />
        <Image src="/images/decor/romb-element.svg" alt="" width={38} height={38} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-0.5" />
      </div>
    </Container>
  </header>;
}
