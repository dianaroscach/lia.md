"use client";

import { type FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { trackEvent } from "@/lib/analytics";

type Offering = {
  id: string;
  title: string;
  kind: "sezatoare" | "grup" | "consultatie";
  price?: string;
  description: string;
  audience: string;
  conditions: string;
  cta: string;
};

const offerings: Offering[] = [
  {
    id: "ialoveni", title: "Șezătoarea din Ialoveni", kind: "sezatoare",
    description: "Întâlnire comunitară pentru cusut, schimb de experiență și păstrarea poveștilor locale.",
    audience: "Elevi, începători și membri ai comunității.",
    conditions: "Participarea se confirmă în limita locurilor disponibile.", cta: "Înscrie-te la șezătoare",
  },
  {
    id: "costesti", title: "Șezătoarea din Costești", kind: "sezatoare",
    description: "Un spațiu deschis pentru începătoare și meșterițe, cu lucru în ritm comun.",
    audience: "Elevi, familii și persoane interesate de cusut.",
    conditions: "Activitate gratuită, cu înscriere prealabilă.", cta: "Înscrie-te la șezătoare",
  },
  {
    id: "atelier-privat", title: "Atelier de grup pentru adulți", kind: "grup", price: "2.000–5.000 MDL / grup",
    description: "Atelier adaptat pentru un grup de maximum 20 de persoane, cu materiale și pași stabiliți împreună.",
    audience: "Grupuri private, echipe și comunități de adulți.",
    conditions: "Data, locația și oferta finală se confirmă după discuție.", cta: "Solicită un atelier",
  },
  {
    id: "consultatie-online", title: "Consultație individuală online", kind: "consultatie", price: "600 MDL",
    description: "O întâlnire personală pentru alegerea modelului, materialelor sau organizarea proiectului.",
    audience: "Persoane care au nevoie de îndrumare punctuală.",
    conditions: "Programare individuală; detaliile se confirmă prin contact.", cta: "Programează o consultație",
  },
];

const intro = {
  sezatoare: "Lasă-ne datele tale și numărul de participanți. Revenim cu detaliile și confirmarea locului.",
  grup: "Spune-ne câteva detalii despre grup. Oferta finală și data se confirmă după discuție; nu se solicită plata online.",
  consultatie: "Spune-ne ce ai vrea să discutăm și când ți-ar fi potrivit. Îți confirmăm programarea prin contact.",
};
const labelClass = "block text-sm font-medium text-[var(--ink)]";
const contactEmail = "dianaroscach@gmail.com";

export function WorkshopOfferings() {
  const [active, setActive] = useState<Offering | null>(null);
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [emailDraft, setEmailDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const attempt = useRef<{ payload: string; id: string } | null>(null);
  const sending = useRef(false);

  function open(offer: Offering, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    attempt.current = null;
    setActive(offer);
    setSent(false);
    setError("");
    setEmailDraft("");
    setCopyStatus("");
    dialogRef.current?.showModal();
  }

  function close() {
    if (!sending.current) dialogRef.current?.close();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!active || sending.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const value = (name: string) => String(fields.get(name) || "").trim();
    const message = [
      `Solicitare: ${active.title}`,
      `Telefon: ${value("phone")}`,
      active.kind !== "consultatie" && `Participanți: ${value("participants")}`,
      active.kind === "grup" && `Data dorită: ${value("date")}`,
      active.kind === "grup" && `Localitate / locație: ${value("location")}`,
      active.kind === "consultatie" && `Subiect: ${value("topic")}`,
      active.kind === "consultatie" && `Data preferată: ${value("date") || "de stabilit"}`,
      `Detalii: ${value("message") || "—"}`,
    ].filter(Boolean).join("\n");
    const payload = { name: value("name"), email: value("email"), message, website: value("website") };
    setEmailDraft(`Nume: ${payload.name}\nEmail: ${payload.email}\n\n${message}`);
    const serialized = JSON.stringify(payload);
    if (attempt.current?.payload !== serialized) attempt.current = { payload: serialized, id: crypto.randomUUID() };
    sending.current = true;
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, requestId: attempt.current.id }), signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Solicitarea nu a putut fi trimisă.");
      form.reset();
      attempt.current = null;
      setSent(true);
      trackEvent("form_submit", { form: active.id });
    } catch (cause) {
      setError(cause instanceof Error && cause.name !== "TimeoutError" ? cause.message : "Trimiterea nu a fost confirmată. Încearcă din nou.");
    } finally {
      sending.current = false;
      setPending(false);
    }
  }

  async function copyRequest() {
    const text = `Către: ${contactEmail}\nSubiect: Solicitare de pe site-ul Ciocârlia\n\n${emailDraft}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("Datele solicitării au fost copiate.");
    } catch {
      const field = document.createElement("textarea");
      field.value = text;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      setCopyStatus(copied ? "Datele solicitării au fost copiate." : "Copiază adresa afișată și trimite-ne mesajul din aplicația ta de email.");
    }
  }

  return <>
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-7">
      {offerings.map((item) => <article id={item.id} className="flex scroll-mt-28 flex-col rounded-[2px] border border-[var(--line-strong)] bg-white p-7 sm:p-9" key={item.id}>
        <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] leading-[1.15] text-[var(--ink)]">{item.title}</h2>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          {item.kind === "sezatoare" && <span className="inline-flex rounded-full bg-[var(--cream)] px-5 py-2.5 text-xs font-bold uppercase tracking-[.08em] text-[var(--forest)]">Participare gratuită</span>}
          {item.price && <strong className="text-xl font-bold text-[var(--forest)]">{item.price}</strong>}
        </div>
        <p className="mt-5 text-base leading-7 text-[var(--muted)]">{item.description}</p>
        <dl className="mt-7 grow space-y-4 border-t border-[var(--line)] pt-6 text-[15px] leading-6">
          <div><dt className="font-bold text-[var(--ink)]">Pentru cine</dt><dd className="mt-0.5 text-[var(--muted)]">{item.audience}</dd></div>
          <div><dt className="font-bold text-[var(--ink)]">Condiții</dt><dd className="mt-0.5 text-[var(--muted)]">{item.conditions}</dd></div>
        </dl>
        <Button type="button" onClick={(event) => open(item, event.currentTarget)} className="mt-8 w-full sm:w-auto sm:self-start">{item.cta}</Button>
      </article>)}
    </div>

    <dialog ref={dialogRef} aria-labelledby="workshop-dialog-title" onCancel={(event) => { if (sending.current) event.preventDefault(); }} onClose={() => { setActive(null); triggerRef.current?.focus(); }} onClick={(event) => { if (event.target === dialogRef.current) close(); }} className="fixed inset-x-0 bottom-0 top-auto m-0 max-h-[92dvh] w-full max-w-none overflow-y-auto rounded-t-2xl border border-[var(--line-strong)] bg-white p-0 text-[var(--ink)] shadow-2xl backdrop:bg-black/50 sm:inset-0 sm:m-auto sm:max-h-[min(90dvh,820px)] sm:w-[min(92vw,760px)] sm:rounded-[4px]">
      {active && <div className="p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:p-9">
        <div className="sticky top-0 z-10 -mx-6 -mt-6 flex items-start justify-between gap-5 border-b border-[var(--line)] bg-white px-6 pb-4 pt-6 sm:static sm:mx-0 sm:mt-0 sm:border-0 sm:px-0 sm:pb-0 sm:pt-0">
          <div><p className="eyebrow">{active.kind === "sezatoare" ? "Înscriere gratuită" : active.kind === "grup" ? "Solicitare de ofertă" : "Programare online"}</p><h2 id="workshop-dialog-title" className="mt-3 text-3xl leading-tight sm:text-4xl">{active.title}</h2></div>
          <button type="button" onClick={close} aria-label="Închide formularul" className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-2xl leading-none text-[var(--forest)] hover:bg-[var(--cream)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--forest)]">×</button>
        </div>
        {sent ? <div className="mt-8 border-t border-[var(--line)] pt-7" role="status"><p className="text-lg font-semibold text-[var(--forest)]">Mulțumim! Solicitarea a fost trimisă.</p><p className="mt-2 text-[var(--muted)]">Te vom contacta pentru confirmarea detaliilor.</p><Button type="button" variant="secondary" onClick={close} className="mt-6">Închide</Button></div> : <>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">{intro[active.kind]}</p>
          {active.price && <p className="mt-3 font-bold text-[var(--forest)]">{active.price}</p>}
          <form key={active.id} onSubmit={submit} aria-busy={pending} className="mt-7">
            <fieldset disabled={pending} className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>Nume *<Input name="name" autoComplete="name" maxLength={100} required /></label>
              <label className={labelClass}>Telefon *<Input name="phone" type="tel" autoComplete="tel" maxLength={40} required /></label>
              <label className={labelClass}>Email *<Input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
              {active.kind === "sezatoare" && <label className={labelClass}>Număr de participanți *<Input name="participants" type="number" min="1" required /></label>}
              {active.kind === "grup" && <><label className={labelClass}>Data dorită *<Input name="date" type="date" required /></label><label className={labelClass}>Număr aproximativ de participanți *<Input name="participants" type="number" min="1" max="20" required /></label><label className={labelClass}>Localitate / locație *<Input name="location" autoComplete="address-level2" maxLength={150} required /></label></>}
              {active.kind === "consultatie" && <><label className={labelClass}>Subiectul consultației *<select name="topic" className="field" required defaultValue=""><option value="" disabled>Alege subiectul</option><option>Alegerea modelului</option><option>Materiale și tehnici</option><option>Organizarea proiectului</option><option>Alt subiect</option></select></label><label className={labelClass}>Data preferată (opțional)<Input name="date" type="date" /></label></>}
              <label className={`${labelClass} sm:col-span-2`}>{active.kind === "grup" ? "Detalii și cerințe speciale *" : active.kind === "consultatie" ? "Ce ai vrea să discutăm? *" : "Mesaj (opțional)"}<Textarea name="message" maxLength={3500} required={active.kind !== "sezatoare"} placeholder={active.kind === "grup" ? "Descrie evenimentul, publicul și programul dorit..." : active.kind === "consultatie" ? "Spune-ne pe scurt despre proiectul tău..." : "Orice detaliu util pentru înscriere..."} /></label>
            </fieldset>
            <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
            <p className="mt-5 text-xs leading-5 text-[var(--muted)]">Datele sunt folosite pentru a răspunde solicitării tale. <Link href="/politica-confidentialitate" target="_blank" className="underline underline-offset-2 hover:text-[var(--forest)]">Politica de confidențialitate</Link></p>
            <Button type="submit" disabled={pending} className="mt-5 w-full sm:w-auto">{pending ? "Se trimite…" : active.cta}</Button>
            {error && <div role="alert" className="mt-4 space-y-3 text-sm font-medium text-[var(--wine)]">
              <p>{error}</p>
              <p>Adresa Dianei: <span className="select-all">{contactEmail}</span></p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <a className="underline underline-offset-2" href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Solicitare: ${active.title}`)}&body=${encodeURIComponent(emailDraft)}`}>Deschide aplicația de email</a>
                <a className="underline underline-offset-2" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(`Solicitare: ${active.title}`)}&body=${encodeURIComponent(emailDraft)}`} target="_blank" rel="noopener noreferrer">Deschide Gmail</a>
                <button type="button" onClick={copyRequest} className="underline underline-offset-2">Copiază datele solicitării</button>
              </div>
              {copyStatus && <p role="status">{copyStatus}</p>}
            </div>}
          </form>
        </>}
      </div>}
    </dialog>
  </>;
}
