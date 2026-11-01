export type JournalPhoto = {
  src: string;
  alt: string;
};

export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  place?: string;
  excerpt: string;
  paragraphs: string[];
  photos: JournalPhoto[];
  sources: { label: string; href: string }[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "ziua-iei-geneva-2026",
    title: "Ziua Iei la Geneva 2026 – o ediție despre oameni, identitate și comunitate",
    date: "20 iunie 2026",
    place: "Geneva, Elveția",
    excerpt: "O ediție despre oameni, identitate și comunitate, alături de cei care păstrează viu patrimoniul românesc în Elveția.",
    paragraphs: [
      "Pe 20 iunie 2026, comunitatea „Șezătoarea Ciocârlia” a avut onoarea de a participa la cea de-a treia ediție a Zilei Iei la Geneva, un eveniment care a devenit deja o tradiție pentru comunitatea românească și moldovenească din Elveția.",
      "Anul acesta am fost invitați să fim alături de alți creatori, cercetători, promotori ai patrimoniului și oameni care cred că tradițiile merită nu doar păstrate, ci și trăite, înțelese și transmise mai departe.",
      "Am revenit acasă cu multe emoții și cu recunoștință pentru toți cei care au făcut posibilă această sărbătoare a identității noastre.",
      "Mulțumim doamnei Varvara Buzilă pentru lecția de demnitate și identitate oferită prin cuvintele sale și prin dialogul profund despre patrimoniu, rădăcini și sensul apartenenței. Mulțumim regizorului Victor Maxian pentru documentarul „Floarea Vieții”, o creație care reușește să aducă patrimoniul mai aproape de oameni și de generațiile tinere.",
      "Mulțumim Moldovan Mission in Geneva, domnului ambasador Vladimir Cuc și doamnei Cristina Morari pentru sprijinul, deschiderea și profesionalismul cu care reprezintă Republica Moldova și susțin comunitățile din diaspora.",
      "Mulțumim AREI Geneva pentru organizarea unui eveniment de o asemenea amploare.",
      "O apreciere deosebită aducem Florianei Anton-Pilorget și Colecției etnografice de costume populare Floriana Anton. Prin colecția impresionantă adusă în fața publicului, ne-au oferit un privilegiu rar: acela de a vedea piese care, în mod obișnuit, își găsesc locul în vitrinele muzeelor, purtate de oameni vii, în cadrul unei sărbători autentice. Pentru câteva ore, patrimoniul a ieșit din spațiul expozițional și a revenit în locul pentru care a fost creat: printre oameni.",
      "Pentru prima dată în experiența noastră, am putut vedea atât de aproape aceste piese de o frumusețe rară. Noi, cele care coasem și suntem mereu curioase să înțelegem cum au fost lucrate cămășile de odinioară, am avut ocazia să le admirăm, să le atingem, să le întoarcem pe dos și să urmărim fiecare cusătură și mic detaliu al lucrului de mână.",
      "În muzeu, privești asemenea piese de la distanță, protejate, așa cum este și firesc. La Geneva însă, pentru câteva clipe, am avut bucuria să le cercetăm îndeaproape și să înțelegem mai bine mâna și priceperea femeilor care le-au creat. Pentru niște femei îndrăgostite de cămașa tradițională, vă puteți imagina ce bucurie a fost! ❤️",
      "Am cunoscut fetele de la Șezătoarea Geneva, care au demonstrat că marile evenimente se construiesc prin muncă discretă, responsabilitate și spirit de echipă. În spatele fiecărui detaliu reușit au stat ore întregi de organizare, dedicare și grijă pentru comunitate.",
      "Mulțumim Centre d'enseignement de langue roumaine – CELR pentru efortul constant de a păstra limba română vie în rândul copiilor și pentru contribuția lor la continuitatea valorilor noastre culturale.",
      "Pentru comunitatea „Șezătoarea Ciocârlia”, participarea la această ediție a însemnat mai mult decât prezentarea unor cămăși tradiționale. A fost o ocazie de a vorbi despre cercetare, despre autenticitate, despre oamenii care cos astăzi patrimoniul de mâine și despre puterea comunităților de a păstra vie identitatea unui neam, indiferent de distanțe.",
      "Mulțumim tuturor celor care au fost alături de noi. Vă lăsăm și vouă câteva imagini din această întâlnire specială cu patrimoniul nostru.",
    ],
    photos: [
      { src: "/images/jurnal/geneva-ziua-iei-2.jpg", alt: "Expoziție de costume tradiționale la Ziua Iei din Geneva" },
      { src: "/images/jurnal/geneva-ziua-iei-album-5.jpg", alt: "Trei participante în port tradițional la Ziua Iei din Geneva, una ținând cartea Înțelepciunea acului" },
      { src: "/images/jurnal/geneva-ziua-iei-album-4.jpg", alt: "Participanți în port tradițional pe scena evenimentului Ziua Iei la Geneva" },
      { src: "/images/jurnal/geneva-ziua-iei-album-3.jpg", alt: "Fotografie de grup cu participanții la Ziua Iei din Geneva, în port tradițional" },
      { src: "/images/jurnal/geneva-ziua-iei-album-2.jpg", alt: "Participantă în cămașă brodată cu roșu, privind costumele tradiționale expuse" },
      { src: "/images/jurnal/geneva-ziua-iei-album-1.jpg", alt: "Pregătirea cămășilor tradiționale pe manechine pentru expoziția de la Geneva" },
    ],
    sources: [
      { label: "Participarea la Ziua Iei", href: "https://www.facebook.com/share/p/1FJoVNxdqY/" },
      { label: "Colecția de costume populare", href: "https://www.facebook.com/share/p/1C79YbP5Bq/" },
      { label: "Oamenii din spatele evenimentului", href: "https://www.facebook.com/share/p/1GaHFdWkJp/" },
    ],
  },
  {
    slug: "ia-mania-festival-2026",
    title: "IA Mania Festival 2026",
    date: "2026",
    excerpt: "Cămăși, cărți, cusături și întâlniri cu oameni care prețuiesc patrimoniul viu.",
    paragraphs: [
      "Șezătoarea Ciocârlia a fost prezentă la Ia Mania Festival – un eveniment care adună oameni frumoși în jurul acelorași valori: dragostea pentru cămașa tradițională, rădăcini și patrimoniu.",
      "A fost o bucurie să ne revedem cu oameni care simt și prețuiesc aceleași lucruri ca și noi. Am adus cu noi povestea comunității Ciocârlia, cămășile cusute de membrele noastre, cărțile și materialele care ne inspiră, dar mai ales dorința de a împărtăși din ceea ce am învățat de-a lungul anilor.",
      "Am povestit despre pașii de creare a unei cămăși, am răspuns la întrebări, am discutat despre cusături, simboluri și despre răbdarea pe care o cere această frumoasă călătorie.",
      "Un moment aparte a fost atelierul dedicat copiilor, condus de Gabi și Elisa – cele mai tinere cusătoare din comunitatea noastră, care au demonstrat că dragostea pentru tradiție poate începe de la o vârstă fragedă.",
      "Ne-am bucurat de vreme bună, de întâlniri sincere și de oameni care duc mai departe frumusețea cămășii cu altiță.",
      "Mulțumim tuturor celor care s-au oprit la noi, au întrebat, au admirat și au împărtășit cu noi această zi.",
      "Povestea Ciocârlia continuă, fir cu fir.",
    ],
    photos: [
      { src: "/images/jurnal/ia-mania-2026-1.jpg", alt: "Membră a Șezătorii Ciocârlia la standul cu cămăși și cărți de la Ia Mania Festival" },
      { src: "/images/jurnal/ia-mania-2026-2.jpg", alt: "Două membre ale comunității cos la standul Ciocârlia, lângă cămăși și cărți" },
      { src: "/images/jurnal/ia-mania-2026-3.jpg", alt: "Copii și tinere participă la atelierul de cusut în aer liber" },
      { src: "/images/jurnal/ia-mania-2026-4.jpg", alt: "Tânără cusătoare lucrează la o piesă brodată în cadrul atelierului pentru copii" },
      { src: "/images/jurnal/ia-mania-2026-5.jpg", alt: "Detaliu al cusăturilor realizate pe o planșetă de lemn la atelier" },
      { src: "/images/jurnal/ia-mania-2026-6.jpg", alt: "Trei membre ale comunității Ciocârlia în cămăși tradiționale la festival" },
    ],
    sources: [
      { label: "Povestea participării", href: "https://www.facebook.com/share/p/1FHNWt22qz/" },
      { label: "Invitația la festival", href: "https://www.facebook.com/share/p/1DGZwUjV82/" },
    ],
  },
  {
    slug: "sanziene-2026",
    title: "Sânziene 2026",
    date: "Iunie 2026",
    place: "Costești",
    excerpt: "O zi de vară cu flori, cântec și obiceiuri trăite împreună la Costești.",
    paragraphs: [
      "La Complexul Turistic Costești, membrele Șezătorii Ciocârlia s-au întâlnit cu Clubul Femeilor Active și Ansamblul Etnofolcloric «Glas de Sânziene» pentru a sărbători Sânzienele.",
      "Au împletit coronițe din flori și au petrecut împreună prin cântec, joc și discuții despre tradițiile care le apropie.",
    ],
    photos: [
      { src: "/images/jurnal/sanziene-2.png", alt: "Grupul participantelor la sărbătoarea Sânzienelor din Costești" },
      { src: "/images/jurnal/sanziene-1.png", alt: "Participante în port tradițional la sărbătoarea Sânzienelor" },
      { src: "/images/jurnal/sanziene-3.png", alt: "Participante la Sânziene în fața unei case tradiționale" },
    ],
    sources: [{ label: "Postarea despre Sânziene", href: "https://www.facebook.com/share/p/1A4PyuZjDq/" }],
  },
  {
    slug: "ziua-portului-popular-2026",
    title: "Ziua Portului Popular 2026",
    date: "Iunie 2026",
    place: "Chișinău",
    excerpt: "Costumul creat în comunitate și albumul «Rapsodia patrimoniului» au ajuns la Muzeul Național de Etnografie și Istorie Naturală.",
    paragraphs: [
      "În ultimul weekend din iunie, Șezătoarea Ciocârlia a sărbătorit Ziua Portului Popular la Muzeul Național de Etnografie și Istorie Naturală, alături de alte comunități.",
      "Am prezentat costumul tradițional creat în comunitate și am lansat albumul «Rapsodia patrimoniului. 5 ani de renaștere a cămășii tradiționale. Șezătoarea Ciocârlia».",
    ],
    photos: [
      { src: "/images/jurnal/port-popular-1.jpg", alt: "Participante în port tradițional la Ziua Portului Popular" },
      { src: "/images/jurnal/port-popular-3.jpg", alt: "Detaliu al costumelor tradiționale prezentate la eveniment" },
      { src: "/images/jurnal/port-popular-2.jpg", alt: "Diploma primită de Șezătoarea Ciocârlia la Ziua Portului Popular" },
    ],
    sources: [{ label: "Postarea despre Ziua Portului Popular", href: "https://www.facebook.com/share/p/1KeficYuj9/" }],
  },
  {
    slug: "ziua-universala-a-iei-ialoveni-2026",
    title: "Ziua Universală a Iei la Ialoveni 2026",
    date: "24 iunie 2026",
    place: "Ialoveni",
    excerpt: "Ziua Universală a Iei, sărbătorită pentru prima dată la Ialoveni alături de comunitate.",
    paragraphs: [
      "Pe 24 iunie, Ziua Universală a Iei a fost marcată în Parcul «Sfatul Țării» din Ialoveni. Evenimentul a fost organizat de Casa Raională de Cultură «Andrei Ungureanu» și Șezătoarea Ciocârlia.",
      "Întâlnirea a reunit iubitori ai patrimoniului, creatori și purtători ai cămășii cu altiță, într-o zi dedicată legăturii dintre oameni și tradiție.",
    ],
    photos: [
      { src: "/images/jurnal/ia-ialoveni-2.jpg", alt: "Membrele comunității Ciocârlia în port tradițional la Ziua Iei din Ialoveni" },
      { src: "/images/jurnal/ia-ialoveni-1.jpg", alt: "Participanți în cămăși tradiționale la evenimentul din Ialoveni" },
      { src: "/images/jurnal/ia-ialoveni-3.jpg", alt: "Fotografie de grup de la Ziua Universală a Iei la Ialoveni" },
    ],
    sources: [{ label: "Postarea despre evenimentul din Ialoveni", href: "https://www.facebook.com/share/p/18psNdBbJu/" }],
  },
  {
    slug: "sezatoare-oameni-camasi",
    title: "Șezătoare. Oameni. Cămăși.",
    date: "2026",
    excerpt: "Femei de generații diferite se întâlnesc în jurul cămășii cu altiță și duc mai departe bucuria de a coase.",
    paragraphs: [
      "De-a lungul anilor, Șezătoarea Ciocârlia a adus împreună femei care au dorit să coasă și să poarte cămașa cu altiță ca parte a propriei identități.",
      "În comunitate se întâlnesc fete de 10 ani și doamne de peste 70 de ani. Unele membre au devenit mentori, altele au împărtășit cusutul cu fiicele, copiii și nepoții lor.",
    ],
    photos: [
      { src: "/images/jurnal/sezatoare-oameni-camasi-3.jpg", alt: "O femeie o învață pe o fetiță să coasă, ambele în port tradițional" },
      { src: "/images/jurnal/sezatoare-oameni-camasi-1.jpg", alt: "Membri ai comunității îmbrăcați în cămăși tradiționale" },
      { src: "/images/jurnal/sezatoare-oameni-camasi-2.jpg", alt: "Detaliu al mâinilor și broderiei unei cămăși tradiționale" },
    ],
    sources: [{ label: "Povestea comunității pe Facebook", href: "https://www.facebook.com/share/p/19nQz1sgzu/" }],
  },
];
