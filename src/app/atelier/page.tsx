import type {Metadata} from "next";
import {Container} from "@/components/layout/Container";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {Button} from "@/components/ui/Button";
import {PrivateWorkshopForm} from "@/components/workshops/PrivateWorkshopForm";

export const metadata:Metadata={title:"Atelier de cusut",description:"Șezători, ateliere de grup și îndrumare individuală Ciocârlia."};

const offerings=[
  {id:"ialoveni",title:"Șezătoarea din Ialoveni",price:"Gratuit",description:"Întâlnire comunitară pentru cusut, schimb de experiență și păstrarea poveștilor locale.",audience:"Elevi, începători și membri ai comunității.",conditions:"Participarea se confirmă în limita locurilor disponibile.",href:"/contact",cta:"Înscrie-te la șezătoare"},
  {id:"costesti",title:"Șezătoarea din Costești",price:"Gratuit",description:"Un spațiu deschis pentru începătoare și meșterițe, cu lucru în ritm comun.",audience:"Elevi, familii și persoane interesate de cusut.",conditions:"Activitate gratuită, cu înscriere prealabilă.",href:"/contact",cta:"Înscrie-te la activitate"},
  {id:"atelier-privat",title:"Atelier privat pentru adulți",price:"de la 5.000 MDL / grup",description:"Atelier adaptat pentru un grup de maximum 20 de persoane, cu materiale și pași stabiliți împreună.",audience:"Grupuri private, echipe și comunități de adulți.",conditions:"Data, locația și oferta finală se confirmă după discuție.",href:"#formular-atelier-privat",cta:"Solicită atelierul"},
  {id:"consultatie-online",title:"Consultație individuală online",price:"600 MDL",description:"O întâlnire personală pentru alegerea modelului, materialelor sau organizarea proiectului.",audience:"Persoane care au nevoie de îndrumare punctuală.",conditions:"Programare individuală; detaliile se confirmă prin contact.",href:"/contact",cta:"Discută detaliile"},
];

export default function AtelierPage(){return <Container className="py-20"><SectionHeading eyebrow="Ateliere" title="Învățăm împreună, punct cu punct." intro="Alege o șezătoare, un atelier pentru grup sau o întâlnire individuală potrivită proiectului tău."/><div className="mt-12 grid gap-6 md:grid-cols-2">{offerings.map(item=><article id={item.id} className="flex scroll-mt-28 flex-col border border-[var(--line)] bg-[var(--paper)] p-7" key={item.id}><p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--cta)]">{item.price}</p><h2 className="mt-3 text-3xl">{item.title}</h2><p className="mt-4 leading-7 text-[var(--muted)]">{item.description}</p><dl className="mt-6 grow space-y-3 border-t border-[var(--line)] pt-5 text-sm"><div><dt className="font-bold">Pentru cine</dt><dd className="mt-1 text-[var(--muted)]">{item.audience}</dd></div><div><dt className="font-bold">Condiții</dt><dd className="mt-1 text-[var(--muted)]">{item.conditions}</dd></div></dl><Button href={item.href} className="mt-7">{item.cta}</Button></article>)}</div><section className="mt-20"><PrivateWorkshopForm/></section></Container>}
