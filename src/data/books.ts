import type { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: "b1", slug: "ciocarlia-volumul-i", title: "Rapsodia patrimoniului",
    subtitle: "Șezătoarea Ciocârlia și 5 ani de renaștere a cămășii tradiționale",
    authors: ["Diana Roșca"], language: "Română și engleză", type: "carte", price: 450,
    image: "/images/books/rapsodia-editorial.webp",
    description: "Un album-document despre oamenii, cămășile și legăturile care au dat viață comunității Șezătoarea Ciocârlia. Imagini, mărturii și povești reunite în 190 de pagini dedicate patrimoniului viu.",
    story: "Povestea începe în februarie 2020, în satul Costești, raionul Ialoveni. Volumul urmărește cinci ani de activitate ai comunității și femeile care au revenit la lucrul cu acul. Dincolo de cămășile terminate, descoperim documentarea, alegerea modelului, lunile de lucru și legătura personală dintre fiecare creatoare și piesa pe care o coase.",
    audience: "Pentru iubitorii de port tradițional, cercetători, muzeografi, comunități de cusut și românii din țară și din diaspora. Un volum pentru biblioteca personală, colecții și instituții culturale sau pentru un dar cu semnificație.",
    format: "Copertă tare · 190 de pagini", availability: "Întreabă despre disponibilitate",
    benefits: ["Parcursul comunității, de la înființare la cinci ani de activitate", "Rolul șezătorilor în transmiterea memoriei culturale", "Legătura dintre creatoare, cămașă și comunitate"],
    contents: ["Fotografii ale cămășilor și ale vieții comunității", "Mărturii și povești ale femeilor care cos", "Documentarea, alegerea modelelor și procesul de lucru"],
  },
  {
    id: "b2", slug: "ciocarlia-volumul-ii", title: "Înțelepciunea acului",
    subtitle: "Descoperind tehnici de realizare a cămășilor strămoșești",
    authors: ["Varvara Buzilă", "Diana Roșca"], language: "Română", type: "carte", price: 520,
    image: "/images/books/intelepciunea-editorial.webp",
    description: "O carte practică pentru cei care doresc să înțeleagă și să învețe realizarea unei cămăși tradiționale. Explicații, recomandări și planșe care însoțesc lucrul de la alegerea materialelor până la finisarea piesei.",
    story: "Realizată de Varvara Buzilă și Diana Roșca, lucrarea explică etapele și logica tehnicilor folosite la confecționarea cămășilor strămoșești. Poate fi păstrată aproape pe tot parcursul lucrului: la pregătirea croiului, la cusut și la asamblare. Cunoștințele transmise în familie și la șezători sunt prezentate într-o formă accesibilă, pentru studiu și practică.",
    audience: "Pentru începători și persoane cu experiență, meșteri populari, coordonatori de șezători și ateliere, profesori, educatori și tineri interesați de tradiție. Potrivită pentru studiu individual și activități educaționale dedicate patrimoniului.",
    format: "Copertă moale", availability: "Întreabă despre disponibilitate",
    benefits: ["Alegi pânza, firele și instrumentele potrivite", "Înțelegi croiul și principalele părți ale cămășii", "Urmezi etapele de la pregătire până la finisare"],
    contents: ["Materiale și organizarea lucrului", "Tehnici tradiționale de cusut și asamblare", "Planșe și modele pentru realizarea cămășii"],
  },
];
