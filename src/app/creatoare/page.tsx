import type {Metadata} from "next";
import Image from "next/image";
import {Container} from "@/components/layout/Container";
import {SectionHeading} from "@/components/ui/SectionHeading";

export const metadata:Metadata={title:"Creatoare",description:"Creatoarele și vocile comunității Ciocârlia."};

const creators=[
  {id:"svetlana-maftei",name:"Svetlana Maftei",area:"Patrimoniu textil și documentare",description:"Oferă context pentru citirea pieselor tradiționale și păstrarea poveștilor de familie.",image:"/images/creators/svetlana-maftei.png",position:"center"},
  {id:"diana-rosca",name:"Diana Roșca",area:"Comunicare culturală și proiecte",description:"Ajută la transformarea cercetării în proiecte clare, accesibile și conectate cu oamenii.",image:"/images/author/diana-rosca-carti.png",position:"center 22%"},
  {id:"tatiana-luca",name:"Tatiana Luca",area:"Tehnici de cusut și lucru în atelier",description:"Îndrumă alegerea tehnicilor și organizarea practică a unui proiect cusut.",image:"/images/workshops/atelier-adulti.png",position:"36% center"},
  {id:"tatiana-borta",name:"Tatiana Borta",area:"Compoziție și design de planșe",description:"Poate ajuta cu adaptarea modelelor, ritmul ornamentului și pregătirea planșelor de lucru.",image:"/images/workshops/indrumare-individuala.png",position:"center"},
];

export default function CreatorsPage(){return <Container className="py-20"><SectionHeading eyebrow="Mentori și creatoare" title="Oameni care duc povestea mai departe." intro="Descoperă domeniul în care fiecare mentor sau creatoare poate oferi context și îndrumare."/><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{creators.map((creator,index)=><article id={creator.id} className="scroll-mt-28 overflow-hidden border border-[var(--line)] bg-[var(--paper)]" key={creator.id}><div className="relative aspect-[4/3] overflow-hidden bg-[var(--mist)]"><Image src={creator.image} alt={`Portret ${creator.name}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" style={{objectPosition:creator.position}}/></div><div className="p-6"><p className="text-xs tracking-[.15em] text-[var(--wine)]">0{index+1}</p><h2 className="mt-5 text-2xl">{creator.name}</h2><p className="mt-3 text-xs font-bold uppercase tracking-[.1em] text-[var(--cta)]">{creator.area}</p><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{creator.description}</p></div></article>)}</div></Container>}
