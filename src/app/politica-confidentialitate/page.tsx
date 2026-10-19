import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Cum sunt folosite datele personale atunci când contactezi comunitatea Șezătoarea Ciocârlia prin site.",
};

const sectionClass = "border-t border-[var(--line)] pt-9 md:pt-11";
const headingClass = "text-2xl leading-tight md:text-3xl";
const textClass = "mt-4 space-y-4 text-base leading-8 text-[var(--muted)]";

export default function Privacy() {
  return <Container className="max-w-[940px] py-14 md:py-20">
    <header className="pb-10 md:pb-14">
      <p className="eyebrow">Comunitatea Ciocârlia</p>
      <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Politica de confidențialitate</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">Respectăm viața privată a celor care ne scriu și a oamenilor din comunitatea Șezătoarea Ciocârlia. Aici explicăm ce date ajung la noi prin site și cum le folosim.</p>
      <p className="mt-5 text-sm text-[var(--muted)]">Ultima actualizare: 19 octombrie 2026</p>
    </header>

    <div className="space-y-9 md:space-y-11">
      <section className={sectionClass} aria-labelledby="responsabil">
        <h2 id="responsabil" className={headingClass}>Cine răspunde de date</h2>
        <div className={textClass}>
          <p>Diana Roșca, persoană fizică, gestionează datele primite prin formularul de contact al site-ului pentru activitatea comunității Șezătoarea Ciocârlia. Pentru întrebări despre această politică sau despre datele tale, scrie la <a className="font-semibold text-[var(--forest)] underline underline-offset-4" href="mailto:dianaroscach@gmail.com">dianaroscach@gmail.com</a>.</p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="date-colectate">
        <h2 id="date-colectate" className={headingClass}>Ce date primim</h2>
        <div className={textClass}>
          <p>Când folosești formularul de contact, primim numele, adresa de email și mesajul tău. Dacă ne scrii direct pe email, primim datele pe care alegi să le incluzi în corespondență. Te rugăm să nu trimiți informații sensibile care nu sunt necesare pentru solicitarea ta.</p>
          <p>Formularele demonstrative pentru înscrierea la newsletter, consultații sau alte activități nu înregistrează și nu trimit în prezent datele introduse. Ele nu reprezintă o înscriere confirmată. Pentru a lua legătura cu noi, folosește formularul de contact sau adresa de email de mai sus.</p>
          <p>Furnizorul de găzduire poate prelucra date tehnice ale vizitei, cum ar fi adresa IP, tipul browserului, ora cererii și pagina accesată, pentru funcționarea și securitatea site-ului.</p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="scop">
        <h2 id="scop" className={headingClass}>De ce folosim datele</h2>
        <div className={textClass}>
          <p>Folosim mesajele pentru a răspunde întrebărilor despre cărți, ateliere, proiecte și participarea la activitățile comunității, precum și pentru a continua dialogul inițiat de tine. Temeiul este interesul legitim de a răspunde corespondenței și de a proteja site-ul. Când mesajul privește participarea la o activitate, putem folosi datele și pentru demersurile pe care ni le ceri înainte de stabilirea participării.</p>
          <p>Nu folosim adresa ta de email pentru newsletter sau mesaje promoționale doar pentru că ne-ai contactat și nu vindem datele tale.</p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="partajare">
        <h2 id="partajare" className={headingClass}>Cui pot ajunge datele</h2>
        <div className={textClass}>
          <p>Mesajul trimis prin formular este transmis prin serviciul <a className="text-[var(--forest)] underline underline-offset-4" href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend</a> către căsuța de email folosită de Diana Roșca. Site-ul este găzduit pe <a className="text-[var(--forest)] underline underline-offset-4" href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Vercel</a>. Acești furnizori pot prelucra datele necesare furnizării serviciilor, inclusiv în afara Republicii Moldova.</p>
          <p>Linkurile către Facebook și Instagram te duc pe platformele respective. Din acel moment se aplică politicile lor de confidențialitate.</p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="pastrare">
        <h2 id="pastrare" className={headingClass}>Cât timp păstrăm datele</h2>
        <div className={textClass}>
          <p>Păstrăm corespondența cât este necesar pentru a răspunde și pentru a continua solicitarea ta. O putem păstra mai mult dacă există o obligație legală sau dacă este necesară pentru apărarea unor drepturi. Poți cere ștergerea datelor care nu mai sunt necesare.</p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="fotografii">
        <h2 id="fotografii" className={headingClass}>Fotografii din comunitate</h2>
        <div className={textClass}>
          <p>Site-ul prezintă fotografii de la șezători, ateliere și proiecte culturale. Dacă apari într-o fotografie și ai întrebări despre publicarea ei sau dorești să soliciți retragerea, scrie-ne la adresa de contact. Vom analiza cererea și vom răspunde.</p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="cookie-uri">
        <h2 id="cookie-uri" className={headingClass}>Cookie-uri și analiză</h2>
        <div className={textClass}>
          <p>Site-ul nu folosește în prezent cookie-uri de publicitate sau un instrument propriu de analiză a vizitatorilor. Furnizorul de găzduire poate prelucra date tehnice necesare livrării și protejării paginilor.</p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="drepturi">
        <h2 id="drepturi" className={headingClass}>Drepturile tale</h2>
        <div className={textClass}>
          <p>Ne poți cere informații despre datele pe care le avem despre tine, acces la ele, corectarea sau ștergerea lor, restricționarea prelucrării ori te poți opune prelucrării, în condițiile legii. Dacă prelucrarea se bazează pe consimțământ, îl poți retrage. În situațiile prevăzute de lege, poți cere și portabilitatea datelor.</p>
          <p>Trimite cererea la <a className="font-semibold text-[var(--forest)] underline underline-offset-4" href="mailto:dianaroscach@gmail.com">dianaroscach@gmail.com</a>. Dacă apreciezi că drepturile tale nu au fost respectate, poți depune o plângere la <a className="text-[var(--forest)] underline underline-offset-4" href="https://datepersonale.md/about/plingeri-si-petitii/" target="_blank" rel="noopener noreferrer">Centrul Național pentru Protecția Datelor cu Caracter Personal</a>.</p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="actualizari">
        <h2 id="actualizari" className={headingClass}>Actualizări</h2>
        <div className={textClass}>
          <p>Vom actualiza această pagină dacă se schimbă modul în care site-ul primește sau folosește date. Data ultimei actualizări este afișată la începutul paginii.</p>
        </div>
      </section>
    </div>
  </Container>;
}
