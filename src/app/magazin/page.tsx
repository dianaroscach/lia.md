import type {Metadata} from "next";
import Link from "next/link";
import {Container} from "@/components/layout/Container";
import {Button} from "@/components/ui/Button";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {shopCategories} from "@/data/shopCategories";

export const metadata:Metadata={
  title:"Resurse",
  description:"Cărți, planșe, ateliere și îndrumare Ciocârlia, prezentate pentru contact direct.",
};

export default function Shop(){return <Container className="py-20"><SectionHeading eyebrow="Bibliotecă și atelier" title="Resurse de descoperit, nu un magazin clasic." intro="Explorează cărțile, planșele și atelierele, apoi ia legătura direct cu autorul, creatorul sau organizatorul."/><div className="mt-12 grid gap-6 lg:grid-cols-3">{shopCategories.map((category,index)=><section className="flex flex-col border border-[var(--line)] bg-[var(--paper)] p-7 sm:p-8" key={category.title}><p className="text-xs font-bold tracking-[.18em] text-[var(--wine)]">0{index+1}</p><h2 className="mt-4 text-3xl">{category.title}</h2><p className="mt-4 leading-7 text-[var(--muted)]">{category.description}</p><ul className="mt-7 grow border-t border-[var(--line)]">{category.items.map(item=><li className="border-b border-[var(--line)]" key={item.title}><Link className="group flex items-center justify-between gap-4 py-4 font-serif text-lg" href={item.href}><span>{item.title}</span><span className="transition group-hover:translate-x-1" aria-hidden="true">→</span></Link></li>)}</ul><Button href={category.href} className="mt-7">{category.linkLabel}</Button></section>)}</div></Container>}
