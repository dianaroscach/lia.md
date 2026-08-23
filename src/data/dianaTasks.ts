export type DianaTaskStatus = "de_facut" | "in_lucru" | "rezolvat";
export type DianaTaskPriority = "normal" | "important" | "urgent";

export type DianaTask = {
  id: string;
  title: string;
  page: string;
  description: string;
  status: DianaTaskStatus;
  priority: DianaTaskPriority;
  createdAt: string;
  note?: string;
};

// Temporary development data source. Diana's GPT can add/update tasks here.
export const dianaTasks: DianaTask[] = [
  {
    id: "inlocuire-jurnal-fata-fara-zestre",
    title: "Înlocuirea compartimentului „Jurnal” cu blogul „Fata fără zestre”",
    page: "Blog / Jurnal",
    description:
      "Înlocuirea compartimentului existent „Jurnal” cu un blog dedicat proiectului „Fata fără zestre”.",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-20",
  },
  {
    id: "actualizare-meniu-principal",
    title: "Actualizarea meniului principal al site-ului",
    page: "Navigare principală",
    description:
      "Actualizează meniul principal în următoarea ordine: Povestea noastră | Magazin | Proiecte | Evenimente | Blog | Contact | Coș.",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-20",
  },
  {
    id: "organizare-magazin-categorii",
    title: "Organizarea Magazinului pe categorii",
    page: "Magazin",
    description:
      "Structurează Magazinul astfel:\n\nCărți:\n- „Înțelepciunea acului”\n- „Rapsodia patrimoniului”\n\nPlanșe:\n- Planșa X\n- Planșa Y\n\nAteliere și îndrumare:\n- Workshop de grup pentru adulți\n- Workshop pentru copii\n- Îndrumare individuală\n\nNu afișa toate cele șapte produse direct în meniul principal. Păstrează gruparea pe categorii pentru claritate și extindere ulterioară.",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-20",
  },
  {
    id: "structura-detaliata-meniu",
    title: "Implementarea structurii detaliate a meniului",
    page: "Meniu principal și submeniuri",
    description:
      "PARTEA STÂNGĂ\n\nPovestea noastră\n- Fără submeniu.\n\nAtelier de cusut\n- Șezătoarea din Ialoveni — Gratuit\n- Șezătoarea din Costești — Gratuit\n- Atelier privat pentru maximum 20 de persoane — 5.000 MDL/grup\n- Consultație individuală online — 600 MDL\n\nCărți\n- Rapsodia patrimoniului\n- Înțelepciunea acului\n\nPlanșe\n- Planșa X\n- Planșa Y\n- Alte planșe adăugate ulterior\n\nCreatoare\n- Svetlana Maftei\n- Diana Roșca\n- Tatiana Luca\n- Tatiana Borta\n- Alte creatoare\n\nPARTEA DREAPTĂ\n\nProiecte\n- Aici vor fi adăugate proiectele și activitățile realizate, fiecare cu fotografii, perioadă, localitate, parteneri și rezultate.\n\nJurnal | Contact | Coș",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-21",
    note:
      "Dacă lista va crește mult, nu afișa toate planșele și toate creatoarele direct în submeniu. Afișează primele 4–6 elemente, apoi opțiunea „Vezi toate planșele” sau „Vezi toate creatoarele”. Meniul trebuie să rămână aerisit și ușor de folosit pe telefon.",
  },
  {
    id: "revizuire-structura-site-contact-in-loc-de-vanzare",
    title: "Revizuirea structurii site-ului: prezentare și contact în loc de vânzare online",
    page: "Meniu, Ateliere, Cărți, Planșe, Mentori, Proiecte / Evenimente",
    description:
      "Actualizează structura și logica site-ului după următoarea direcție:\n\n1. POVESTEA NOASTRĂ\n- Primul element din meniu.\n- Pagină separată, fără submeniu complicat.\n\n2. ATELIERE\n- Al doilea element din meniu.\n- La click se deschide pagina Ateliere, unde sunt prezentate clar ofertele, nu neapărat ca produse de magazin.\n- Include cel puțin:\n  • Înscriere la șezătoare / activități pentru elevi — Gratuit.\n  • Atelier pentru adulți, grup de maximum 20 de persoane — cu preț afișat.\n  • Consultație privată / individuală — cu preț afișat.\n- Fiecare atelier trebuie să aibă pagină sau card clar cu descriere, pentru cine este, condiții și CTA de înscriere/contact.\n\n3. CĂRȚI\n- Cărțile NU trebuie tratate ca produse ecommerce și nu trebuie să aibă flux de cumpărare online.\n- La click pe o carte se deschide o pagină de prezentare editorială.\n- Exemplu: „Rapsodia patrimoniului” — copertă, povestea cărții, descriere, ce conține, cui se adresează și imagini din interior.\n- CTA principal: „Ia legătura cu autorul”.\n- CTA-ul trebuie să conducă spre contact / mesaj către autor, nu spre coș sau checkout.\n\n4. PLANȘE\n- Fără submeniu inutil dacă sunt puține. Click pe „Planșe” deschide direct pagina dedicată.\n- Planșele pot fi prezentate individual, dar nu ca produse cu checkout.\n- CTA: „Ia legătura cu creatorul / designerul” sau o formulare echivalentă.\n\n5. MENTORI / CREATOARE\n- Adaugă o secțiune în navigare și în site pentru mentorii / creatoarele implicate.\n- Fiecare persoană poate avea o prezentare scurtă și domeniul în care poate ajuta.\n- Denumirea finală poate fi „Mentori”, „Creatoare” sau altă variantă potrivită tonului brandului.\n\n6. PARTEA DREAPTĂ A NAVBARULUI\n- Adaugă „Proiecte” și/sau „Evenimente” pentru activități realizate și evenimente curente/viitoare.\n- Apoi „Jurnal”, păstrat mai scurt și mai puțin dominant în navigare.\n- Contactul rămâne disponibil clar.\n\n7. DIRECȚIE GENERALĂ\n- Site-ul nu trebuie să arate ca un magazin online clasic.\n- Accentul trebuie să fie pe patrimoniu, prezentare, ateliere, mentorat și contact direct cu autorul/creatorul.\n- Elimină logica de cumpărare online pentru cărți și planșe acolo unde există acum.",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-23",
    note:
      "Acest task actualizează direcția anterioară în care cărțile și planșele erau tratate ca produse de magazin. Pentru acestea, noua prioritate este prezentarea + contact direct, nu checkout. Atelierele și consultațiile pot afișa prețul, dar înscrierea se poate face prin formular/contact.",
  },
  {
    id: "atelier-privat-formular-fara-plata-online",
    title: "Atelier privat: formular de solicitare și contact, fără plată online",
    page: "Ateliere / Atelier privat",
    description:
      "Pentru atelierul privat destinat unui grup de până la 20 de persoane, elimină logica de cumpărare și plată online. Pagina atelierului trebuie să funcționeze ca o solicitare de ofertă / rezervare. Utilizatorul trebuie să poată selecta sau propune data dorită, să indice numărul aproximativ de participanți și să descrie detaliile evenimentului sau cerințele speciale. Adaugă un formular cu minimum: nume, telefon, email, data dorită, număr de participanți, localitate / locație, mesaj cu detalii și buton de trimitere. După submit, afișează un mesaj clar că solicitarea a fost înregistrată și că organizatorul va lua legătura pentru confirmarea detaliilor. Nu crea checkout și nu solicita plata cu cardul. Prețul poate fi afișat orientativ sau „de la”, dar oferta finală se confirmă după discuție.",
    status: "de_facut",
    priority: "important",
    createdAt: "2026-08-23",
    note:
      "Motivul: atelierul se contractează individual, iar condițiile finale depind de dată, locație, numărul de participanți și detalii. După contact se poate încheia un contract privat. CTA recomandat: „Solicită atelierul” sau „Discută detaliile”.",
  },
];
