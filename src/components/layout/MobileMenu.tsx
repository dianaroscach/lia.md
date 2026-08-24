"use client";
import Link from "next/link";
import {useState} from "react";
import {navigation} from "@/data/navigation";
import {SocialLinks} from "@/components/ui/SocialLinks";

export function MobileMenu(){
  const [open,setOpen]=useState(false);
  const close=()=>setOpen(false);
  return <div className="xl:hidden"><button aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(value=>!value)} className="border border-[var(--line)] px-4 py-2 text-xs uppercase tracking-[.12em]">{open?"Închide":"Meniu"}</button>{open&&<nav id="mobile-nav" className="absolute inset-x-0 top-full max-h-[calc(100vh-74px)] overflow-y-auto border-y border-[var(--line)] bg-[var(--ivory)] p-5 shadow-xl" aria-label="Navigare mobilă"><div className="flex flex-col">{navigation.map(item=>item.children?<details className="border-b border-[var(--line)]" key={item.href}><summary className="cursor-pointer py-5 text-sm font-semibold uppercase tracking-[.08em]">{item.label}</summary><div className="pb-3 pl-4">{item.children.map(child=><Link onClick={close} className="block border-l border-[var(--line)] px-4 py-3" href={child.href} key={`${child.href}-${child.label}`}><span className="block font-serif">{child.label}</span>{child.meta&&<span className="mt-1 block text-[10px] uppercase tracking-[.1em] text-[var(--muted)]">{child.meta}</span>}</Link>)}</div></details>:<Link onClick={close} className="border-b border-[var(--line)] py-5 text-sm font-semibold uppercase tracking-[.08em] last:border-b-0" key={item.href} href={item.href}>{item.label}</Link>)}<SocialLinks className="pt-5 text-[var(--cta)]" iconClassName="h-6 w-6"/></div></nav>}</div>;
}
