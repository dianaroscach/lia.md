import Image from "next/image";
import Link from "next/link";
import {Container} from "@/components/layout/Container";
import {Button} from "@/components/ui/Button";

const collections=[
  {title:"Cărți de patrimoniu",image:"/images/books/rapsodia-patrimoniului.png",href:"/carti",cta:"Vezi cărțile"},
  {title:"Planșe pentru cusut",image:"/images/patterns/basarabia.png",href:"/planse",cta:"Vezi planșele"},
  {title:"Îndrumare personală",image:"/images/consultations/analiza.png",href:"/consultatii",cta:"Descoperă consultațiile"},
];

export function EditorialHome(){return <>
  <section className="border-b border-[var(--line)] py-10 sm:py-12"><Container><div className="grid gap-7 md:grid-cols-3">{collections.map(item=><article key={item.title} className="text-center"><h2 className="mb-3 text-2xl">{item.title}</h2><Link href={item.href} className="group block border border-[var(--line)] bg-white p-2 pb-3"><div className="relative aspect-[4/3] overflow-hidden bg-[var(--sand)]"><Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]"/></div><span className="mt-3 inline-flex border border-[var(--line-strong)] px-7 py-2 font-serif text-xs transition group-hover:bg-[var(--olive)] group-hover:text-white">{item.cta}</span></Link></article>)}</div></Container></section>

  <section className="border-b border-[var(--line)] py-10 sm:py-14"><Container className="grid items-stretch gap-7 lg:grid-cols-[.92fr_1.08fr]"><div className="flex flex-col items-center justify-center px-6 py-10 text-center lg:px-12"><p className="text-[10px] uppercase tracking-[.24em] text-[var(--wine)]">Meșteșug viu</p><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Eleganță cu rădăcini adânci</h2><p className="mt-5 max-w-md font-serif text-base leading-7 text-[var(--muted)]">Descoperă semnele, poveștile și tehnicile care transformă pânza într-o moștenire vie.</p><Button href="/despre-autoare" variant="secondary" className="mt-7">Povestea noastră</Button></div><div className="grid gap-2 sm:grid-cols-2"><Feature image="/images/author/portret.png" title="Din atelier" cta="Cunoaște autoarea" href="/despre-autoare"/><Feature image="/images/blog/simbolul-rombului.png" title="Jurnal de simboluri" cta="Citește jurnalul" href="/blog"/></div></Container></section>

  <section className="border-b border-[var(--line)]"><Container className="grid md:grid-cols-3">{[{t:"Noutăți",s:"Descoperă",h:"/magazin"},{t:"Povestea noastră",s:"Află mai mult",h:"/despre-autoare"},{t:"Inspirație",s:"Citește jurnalul",h:"/blog"}].map((x,i)=><Link href={x.h} key={x.t} className={`py-8 text-center transition hover:bg-white ${i?"md:border-l md:border-[var(--line)]":""}`}><h3 className="text-2xl">{x.t}</h3><span className="mt-2 block font-serif text-xs text-[var(--muted)]">{x.s}</span></Link>)}</Container></section>
</>}

function Feature({image,title,cta,href}:{image:string;title:string;cta:string;href:string}){return <Link href={href} className="group relative min-h-[390px] overflow-hidden"><Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, 30vw" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"/><div className="absolute inset-x-0 bottom-0 p-5 text-center text-white"><h3 className="text-2xl">{title}</h3><span className="mt-2 inline-block border border-white/55 px-6 py-2 font-serif text-xs">{cta}</span></div></Link>}
