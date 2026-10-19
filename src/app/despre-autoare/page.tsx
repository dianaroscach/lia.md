import { StorySlider } from "@/components/about/StorySlider";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Povestea noastră",
  description: "Descoperă Șezătoarea Ciocârlia: o comunitate în care redescoperim cusutul tradițional și transmitem meșteșugul din generație în generație.",
};

const gallery = [
  ["comunitate-toamna", "Membre ale comunității în cămăși tradiționale, într-un peisaj de toamnă"],
  ["port-traditional", "Femei și tinere în port tradițional, reunite pe prispa unei case"],
  ["creatoare", "Creatoarele comunității prezentând cămășile și catrințele tradiționale"],
  ["sezatoare", "Participante la șezătoare cu gherghefuri și cusături"],
];

function StoryPhoto({ name, alt, className = "", preload = false }: { name: string; alt: string; className?: string; preload?: boolean }) {
  return <Image src={`/images/povestea-noastra/${name}.webp`} alt={alt} width={2000} height={name.startsWith("comunitate") || ["copii", "port-traditional", "creatoare", "sezatoare"].includes(name) ? 1331 : 1500} preload={preload} sizes={preload ? "(max-width: 1240px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"} className={`h-auto w-full ${className}`} />;
}

export default function About() {
  return <>
    <section className="pt-14 pb-12 md:pt-20 md:pb-20">
      <Container>
        <div className="grid gap-6 pb-10 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16 md:pb-14">
          <div>
            <p className="eyebrow">Povestea noastră</p>
            <h1 className="mt-5 text-5xl leading-[1.08] md:text-7xl">Un fir care<br />ne aduce împreună.</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">Suntem Șezătoarea Ciocârlia. Ne-a adus împreună dorința de a coase o cămașă care să ne exprime sufletul. Am descoperit, alături de ea, o comunitate în care învățăm și ducem tradiția mai departe.</p>
        </div>
        <StoryPhoto name="comunitate-generatii" alt="Comunitatea Șezătoarea Ciocârlia: femei și copii în cămăși tradiționale, împreună în aer liber" preload />
        <p className="mt-3 text-xs tracking-wide text-[var(--muted)]">Șezătoarea Ciocârlia · O poveste cusută împreună</p>
      </Container>
    </section>

    <section className="pb-16 md:pb-24">
      <Container className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-20">
        <div><p className="eyebrow">Începuturile</p><h2 className="mt-4 text-4xl md:text-5xl">Din dorința<br />de a învăța.</h2></div>
        <div className="prose-custom text-[var(--muted)]">
          <p>Comunitatea „Șezătoarea Ciocârlia” s-a născut firesc, fără planuri mărețe și fără un program prestabilit. La început, multe dintre noi nu știam ce înseamnă o piesă autentică sau o cămașă cusută „după canon”. Ne unea însă nevoia de a înțelege și de a regăsi un fir rupt din continuitatea tradiției.</p>
          <p>Studiul, migala și sprijinul reciproc s-au transformat în cămăși pline de sens. Împreună am redescoperit vechile tehnici de cusut, simbolurile, compozițiile ornamentale și sensurile din culori și din organizarea decorului. Cămășile noastre vorbesc despre viață, apartenență, credință și dragoste maternă.</p>
        </div>
      </Container>
    </section>

    <section className="bg-[var(--mist)] py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
          <StoryPhoto name="invatam-impreuna" alt="Participante de vârste diferite cos și studiază modele împreună la masa șezătorii" />
        <div className="mt-4 grid grid-cols-2 gap-4">
          <figure><StoryPhoto name="izvoade" alt="Izvoade și broderii în violet și galben, studiate la masa de lucru" /><figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">Studiem izvoadele și înțelegem rostul fiecărui ornament.</figcaption></figure>
          <figure><StoryPhoto name="cusaturi" alt="Mâini lucrând o cusătură galbenă în gherghef, lângă broderii roșii" /><figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">Învățăm punct cu punct, cu răbdare și sprijin reciproc.</figcaption></figure>
        </div>
          </div>
          <div>
            <p className="eyebrow">Meșteșug și răbdare</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Fiecare cămașă,<br />o nouă cercetare.</h2>
            <p className="mt-6 text-base leading-8 text-[var(--muted)]">În cinci ani de activitate, am creat aproximativ 90 de cămăși pentru femei, bărbați și copii. Coasem pe pânză naturală de in, bumbac sau cânepă, cu fire de bumbac ori de mătase.</p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">Butucei, cusătură la fir, lănțișor, șinătău, brânel, ateste: fiecare tehnică ne apropie de cunoașterea celor dinaintea noastră. Pornim de la izvoade vechi basarabene sau reimaginăm modele, cu respect pentru autenticitate și pentru logica vechii cămăși tradiționale.</p>
          </div>
        </div>

      </Container>
    </section>

    <section className="py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow">Din generație în generație</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Cunoașterea crește<br />când o împărtășim.</h2>
          <p className="mt-6 text-base leading-8 text-[var(--muted)]">La șezătoare, fiecare femeie este, pe rând, ucenică și îndrumătoare. Învățăm unele de la altele, ne împărtășim experiența și apropiem copiii și tinerii de patrimoniul cultural.</p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">Cămășile sunt făcute pentru a fi purtate la sărbători, în momente importante și în viața de familie. Transmise din mână în mână, ele devin un patrimoniu viu, personal și familial, dar și comunitar.</p>
        </div>
        <StoryPhoto name="copii" alt="Șase fete în cămăși tradiționale, cu fire, pânză și gherghefuri în mâini" />
      </Container>
    </section>

    <section className="border-t border-[var(--line)] py-16 md:py-20">
      <Container>
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:gap-16">
          <div><p className="eyebrow">O comunitate vie</p><h2 className="mt-4 text-4xl md:text-5xl">Oamenii din poveste.</h2></div>
          <p className="text-base leading-8 text-[var(--muted)]">La expoziții, ateliere, festivaluri și evenimente culturale din Republica Moldova și din afara țării, ducem cu noi ceea ce învățăm la șezătoare. Tradiția, cunoscută și practicată cu responsabilitate, își găsește locul în viața de astăzi.</p>
        </div>
      </Container>
      <StorySlider photos={gallery} />
    </section>

    <section className="bg-[var(--mist)] py-16 md:py-24">
      <Container className="max-w-[900px] text-center">
        <p className="eyebrow">Ce ducem mai departe</p>
        <h2 className="mt-5 text-4xl leading-tight md:text-5xl">Fiecare cămașă începută<br />este o promisiune.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">Ne dorim să păstrăm și să transmitem cunoașterea, să formăm noi creatoare și să contribuim la protejarea cămășii cu altiță ca expresie identitară. Firul tradiției continuă prin oamenii care îl poartă, îl cercetează și îl transmit mai departe.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4"><Button href="/atelier">Vino la șezătoare</Button><Button href="/creatoare" variant="secondary">Cunoaște creatoarele</Button></div>
      </Container>
    </section>
  </>;
}
