import type { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: "b1", slug: "ciocarlia-volumul-i", title: "Rapsodia patrimoniului",
    subtitle: "Șezătoarea Ciocârlia și 5 ani de renaștere a cămășii tradiționale",
    authors: ["Diana Roșca"], language: "Română și engleză", type: "carte", price: 450,
    image: "/images/books/rapsodia-editorial.webp",
    description: "Un album-document despre oamenii, cămășile și legăturile care au dat viață comunității Șezătoarea Ciocârlia. Imagini, mărturii și povești reunite în 190 de pagini dedicate patrimoniului viu.",
    story: "Volumul prezintă parcursul comunității de la înființarea sa, în februarie 2020, în satul Costești, raionul Ialoveni, până la dezvoltarea unei mișcări active de redescoperire, învățare și transmitere a artei cămășii tradiționale. În centrul cărții se află femeile care au ales să revină la lucrul cu acul, să studieze izvoarele vechi și să realizeze cămăși respectând tehnicile și principiile tradiționale.\n\nPe parcursul celor 190 de pagini sunt reunite imagini, mărturii și fragmente din viața comunității, alături de cămășile realizate în cadrul șezătorilor. Albumul surprinde nu doar rezultatul muncii, ci și procesul din spatele fiecărei piese: documentarea, alegerea modelului, lunile de lucru și legătura personală care se creează între femeie și cămașa pe care o coase.\n\nCartea vorbește despre patrimoniu ca despre o realitate vie, care poate fi învățată, practicată și transmisă mai departe. Ea documentează cinci ani de activitate ai comunității și evidențiază rolul șezătorilor în păstrarea memoriei culturale, formarea unor noi generații de creatoare și consolidarea legăturilor dintre oameni.\n\nPublicația are un format amplu, copertă tare și o prezentare vizuală bogată, fiind potrivită atât pentru lectura personală, cât și pentru colecții, biblioteci, muzee, instituții culturale și daruri cu valoare reprezentativă.",
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
    description: "Este o carte practică dedicată celor care doresc să înțeleagă și să învețe procesul de realizare a unei cămăși tradiționale. Realizată de Varvara Buzilă și Diana Roșca, lucrarea reunește informații esențiale despre meșteșugul cusutului și explică principalele etape necesare pentru confecționarea unei cămăși inspirate din modelele vechi.",
    story: "Realizată de Varvara Buzilă și Diana Roșca, lucrarea explică etapele și logica tehnicilor folosite la confecționarea cămășilor strămoșești. Poate fi păstrată aproape pe tot parcursul lucrului: la pregătirea croiului, la cusut și la asamblare. Cunoștințele transmise în familie și la șezători sunt prezentate într-o formă accesibilă, pentru studiu și practică.",
    audience: "Pentru începători și persoane cu experiență, meșteri populari, coordonatori de șezători și ateliere, profesori, educatori și tineri interesați de tradiție. Potrivită pentru studiu individual și activități educaționale dedicate patrimoniului.",
    format: "Copertă moale", availability: "Întreabă despre disponibilitate",
    benefits: ["Alegi pânza, firele și instrumentele potrivite", "Înțelegi croiul și principalele părți ale cămășii", "Urmezi etapele de la pregătire până la finisare"],
    contents: ["Materiale și organizarea lucrului", "Tehnici tradiționale de cusut și asamblare", "Planșe și modele pentru realizarea cămășii"],
  },
];
