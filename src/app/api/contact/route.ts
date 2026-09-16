const failure = (error: string, status: number) => Response.json({ error }, { status });

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return failure("Cerere nepermisă.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return failure("Format invalid.", 415);
  const raw = await request.text();
  if (raw.length > 12000) return failure("Mesajul este prea lung.", 413);
  let data;
  try { data = JSON.parse(raw); } catch { return failure("Date invalide.", 400); }
  if (!data || typeof data !== "object") return failure("Date invalide.", 400);
  const { name, email, message, website, requestId } = data;
  if (website) return failure("Cerere nepermisă.", 400);
  if (typeof name !== "string" || !name.trim() || name.length > 100 || /[\r\n]/.test(name) ||
      typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof message !== "string" || !message.trim() || message.length > 5000 ||
      typeof requestId !== "string" || !/^[0-9a-f-]{36}$/i.test(requestId)) return failure("Verifică numele, adresa de email și mesajul.", 400);
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (!key || !from) return failure("Trimiterea nu este disponibilă momentan. Scrie-ne direct la dianaroscach@gmail.com.", 503);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "Idempotency-Key": `contact-${requestId}` },
      body: JSON.stringify({ from, to: ["dianaroscach@gmail.com"], reply_to: email.trim(), subject: "Mesaj nou de pe site-ul Ciocârlia", text: `Nume: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}` }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) return failure("Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-ne direct pe email.", 502);
    const result = await response.json();
    if (!result.id) return failure("Trimiterea nu a fost confirmată. Încearcă din nou.", 502);
    return Response.json({ success: true });
  } catch {
    return failure("Nu am putut confirma trimiterea. Încearcă din nou sau scrie-ne direct pe email.", 502);
  }
}
