"use client";

import Link from "next/link";
import { type FormEvent, type MouseEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import type { Book } from "@/types/book";

const contactEmail = "dianaroscach@gmail.com";

export function BookOrderDrawer({ book }: { book: Book }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const previousOverflow = useRef("");
  const attempt = useRef<{ payload: string; id: string } | null>(null);
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [fallbackMessage, setFallbackMessage] = useState("");

  function open(event: MouseEvent<HTMLButtonElement>) {
    triggerRef.current = event.currentTarget;
    setError("");
    setSent(false);
    previousOverflow.current = document.body.style.overflow;
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  function close() {
    dialogRef.current?.close();
  }

  function afterClose() {
    document.body.style.overflow = previousOverflow.current;
    triggerRef.current?.focus();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const value = (key: string) => String(fields.get(key) ?? "").trim();
    const message = [
      `Solicitare de comandă carte: ${book.title}`,
      `Cantitate: ${value("quantity")}`,
      `Telefon: ${value("phone")}`,
      `Localitate / livrare: ${value("location")}`,
      `Detalii: ${value("details") || "Nu au fost adăugate."}`,
    ].join("\n");
    const payload = { name: value("name"), email: value("email"), message, website: value("website") };
    const serialized = JSON.stringify(payload);
    if (attempt.current?.payload !== serialized) attempt.current = { payload: serialized, id: crypto.randomUUID() };
    setPending(true);
    setError("");
    setFallbackMessage(message);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, requestId: attempt.current.id }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Solicitarea nu a putut fi trimisă.");
      form.reset();
      attempt.current = null;
      setSent(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Solicitarea nu a putut fi trimisă.");
    } finally {
      setPending(false);
    }
  }

  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(`Comandă cartea ${book.title}`)}&body=${encodeURIComponent(fallbackMessage)}`;

  return <>
    <Button type="button" aria-haspopup="dialog" aria-controls={`book-order-${book.id}`} onClick={open}>Comandă cartea</Button>
    <dialog
      ref={dialogRef}
      id={`book-order-${book.id}`}
      aria-labelledby={`book-order-title-${book.id}`}
      onClose={afterClose}
      onCancel={(event) => { if (pending) event.preventDefault(); }}
      onClick={(event) => { if (event.target === event.currentTarget && !pending) close(); }}
      className="fixed inset-x-0 bottom-0 top-auto m-0 max-h-[92dvh] w-full max-w-none overflow-y-auto rounded-t-2xl border-0 bg-white p-0 text-[var(--ink)] shadow-2xl backdrop:bg-black/55 sm:inset-y-0 sm:right-0 sm:left-auto sm:ml-auto sm:h-dvh sm:max-h-dvh sm:w-[min(100vw,600px)] sm:rounded-none"
    >
      <div className="border-b border-[var(--line)] px-6 py-6 sm:px-10 sm:py-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow">Solicitare de comandă</p>
            <h2 id={`book-order-title-${book.id}`} className="mt-3 text-3xl leading-tight sm:text-4xl">{book.title}</h2>
          </div>
          <button type="button" aria-label="Închide formularul de comandă" onClick={close} disabled={pending} className="grid size-10 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-2xl leading-none text-[var(--forest)] hover:bg-[var(--mist)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wine)]">×</button>
        </div>
        <p className="mt-4 leading-7 text-[var(--muted)]">Completează detaliile de mai jos pentru a trimite solicitarea de comandă.</p>
      </div>
      <div className="px-6 py-7 sm:px-10 sm:py-9">
        {sent ? <div role="status" className="space-y-5">
          <p className="text-xl font-semibold text-[var(--forest)]">Solicitarea a fost trimisă către Diana.</p>
          <p className="text-[var(--muted)]">Îți va răspunde la adresa de email indicată.</p>
          <Button type="button" variant="secondary" onClick={close}>Închide</Button>
        </div> : <form onSubmit={submit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block font-medium">Nume *<Input name="name" autoComplete="name" required maxLength={100} className="mt-2" /></label>
            <label className="block font-medium">Email *<Input name="email" type="email" autoComplete="email" required maxLength={254} className="mt-2" /></label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block font-medium">Telefon *<Input name="phone" type="tel" autoComplete="tel" required maxLength={50} className="mt-2" /></label>
            <label className="block font-medium">Număr de exemplare *<Input name="quantity" type="number" min={1} max={99} defaultValue={1} required className="mt-2" /></label>
          </div>
          <label className="block font-medium">Localitate / livrare *<Input name="location" autoComplete="address-level2" required maxLength={120} className="mt-2" /></label>
          <label className="block font-medium">Detalii suplimentare<Textarea name="details" maxLength={2000} rows={4} className="mt-2" placeholder="Scrie aici dacă ai o întrebare despre carte sau livrare." /></label>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
          <p className="text-sm leading-6 text-[var(--muted)]">Datele sunt folosite pentru a răspunde solicitării tale. <Link href="/politica-confidentialitate" className="underline underline-offset-4">Politica de confidențialitate</Link></p>
          <Button type="submit" disabled={pending}>{pending ? "Se trimite..." : "Trimite solicitarea"}</Button>
          {error && <div role="alert" className="space-y-2 text-sm leading-6 text-[var(--wine)]">
            <p>{error}</p>
            <a href={emailHref} className="font-semibold underline underline-offset-4">Scrie-i Dianei direct pe email</a>
          </div>}
        </form>}
      </div>
    </dialog>
  </>;
}
