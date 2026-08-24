"use client";
import {FormEvent,useState} from "react";
import {Button} from "@/components/ui/Button";
import {Input} from "@/components/ui/Input";
import {Textarea} from "@/components/ui/Textarea";
import {isEmail} from "@/lib/validation";
import {trackEvent} from "@/lib/analytics";

export function PrivateWorkshopForm(){
  const [status,setStatus]=useState("");
  const submit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const form=event.currentTarget;
    const data=new FormData(form);
    const participants=Number(data.get("participants"));
    if(!data.get("name")||!data.get("phone")||!isEmail(String(data.get("email")))||!data.get("date")||participants<1||participants>20||!data.get("location")||!data.get("message")){
      setStatus("Verifică toate câmpurile. Numărul de participanți trebuie să fie între 1 și 20.");
      return;
    }
    setStatus("Solicitarea a fost înregistrată. Organizatorul te va contacta pentru confirmarea datei, condițiilor și ofertei finale.");
    trackEvent("form_submit",{form:"private_workshop"});
    form.reset();
  };
  return <form id="formular-atelier-privat" onSubmit={submit} className="scroll-mt-28 border border-[var(--line)] bg-[var(--paper)] p-6 sm:p-8" noValidate><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[.16em] text-[var(--wine)]">Solicitare de ofertă</p><h2 className="mt-3 text-3xl">Solicită atelierul privat</h2><p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">Preț orientativ: de la 5.000 MDL pentru un grup de maximum 20 de persoane. Oferta finală se confirmă după discuție; nu se solicită plata online.</p></div><div className="grid gap-5 md:grid-cols-2"><label>Nume *<Input name="name" autoComplete="name" required/></label><label>Telefon *<Input name="phone" type="tel" autoComplete="tel" required/></label><label>Email *<Input name="email" type="email" autoComplete="email" required/></label><label>Data dorită *<Input name="date" type="date" required/></label><label>Număr aproximativ de participanți *<Input name="participants" type="number" min="1" max="20" required/></label><label>Localitate / locație *<Input name="location" autoComplete="address-level2" required/></label><label className="md:col-span-2">Detalii și cerințe speciale *<Textarea name="message" required placeholder="Descrie evenimentul, publicul, programul dorit și orice cerințe speciale..."/></label></div><div className="mt-6 flex flex-wrap items-center gap-4"><Button type="submit">Solicită atelierul</Button>{status&&<p role="status" className="max-w-2xl text-sm font-semibold text-[var(--forest)]">{status}</p>}</div></form>;
}
