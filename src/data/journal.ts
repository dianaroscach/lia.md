export type JournalPhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
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
      { src: "/images/jurnal/geneva-ziua-iei-album-5.jpg", alt: "Trei participante în port tradițional la Ziua Iei din Geneva, una ținând cartea Înțelepciunea acului", objectPosition: "center 18%" },
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
      "Împreună cu minunatele doamne de la Șezătoarea Ciocârlia, Clubul Femeilor Active și Ansamblul Etnofolcloric „Glas de Sânziene”, ne-am adunat la Complexul Turistic „Costești” pentru a petrece așa cum se cuvine, împreună, sărbătoarea Sânzienelor – o zi de vară plină de tradiții, frumusețe și emoție.",
      "Am împletit coronițe din flori, păstrând vie legătura cu obiceiurile strămoșești, dar și creând amintiri noi. Prin jocuri interactive, cântec, voie bună și discuții calde, ne-am cunoscut mai bine și am consolidat legături frumoase.",
      "Astfel de întâlniri ne ajută să promovăm și să transmitem mai departe tinerei generații valorile noastre culturale, tradițiile și dragostea pentru ceea ce ne definește.",
      "Mulțumim tuturor celor care au fost alături de noi și au contribuit la această zi specială. Împreună păstrăm tradițiile vii și construim comunități mai unite!",
    ],
    photos: [
      { src: "/images/jurnal/sanziene-2026-1.jpeg", alt: "Participantele la sărbătoarea Sânzienelor, reunite în grădina Complexului Turistic Costești" },
      { src: "/images/jurnal/sanziene-2026-2.jpeg", alt: "Membră a comunității Ciocârlia purtând o coroniță din flori de Sânziene" },
      { src: "/images/jurnal/sanziene-2026-3.jpeg", alt: "Femei și fete împletind coronițe din flori la sărbătoarea Sânzienelor" },
      { src: "/images/jurnal/sanziene-2026-4.jpeg", alt: "Participante în cămăși tradiționale pregătind coronițe din flori" },
      { src: "/images/jurnal/sanziene-2026-5.jpeg", alt: "Comunitatea adunată pe covoare tradiționale pentru atelierul de coronițe" },
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
      "Ultimul weekend din iunie este dedicat Zilei Portului Popular, iar anul acesta Șezătoarea Ciocârlia a avut bucuria de a sărbători această zi alături de alte comunități la Muzeul Național de Etnografie și Istorie Naturală, la invitația echipei muzeului.",
      "În cadrul evenimentului am prezentat costumul tradițional creat în comunitatea Ciocârlia, printr-o defilare plină de emoție, și am lansat albumul «Rapsodia patrimoniului. 5 ani de renaștere a cămășii tradiționale. Șezătoarea Ciocârlia», împărtășind cu publicul povestea comunității noastre.",
      "Mulțumim administrației muzeului pentru invitație și ospitalitate, tuturor celor care au fost alături de noi și domnului primar al satului Costești, Grigore Țurcan, pentru prezență și susținerea comunității.",
      "Ne-am bucurat de o zi frumoasă, de oameni minunați și de încă o sărbătoare dedicată patrimoniului nostru viu. La cât mai multe cămăși cusute cu drag și purtate cu mândrie!",
      "Foto: Aleksandr Wegera, Muzeul Național de Etnografie și Istorie Naturală.",
    ],
    photos: [
      { src: "/images/jurnal/ziua-portului-2026-1.jpg", alt: "Participanții la Ziua Portului Popular, în costume tradiționale, în fața Muzeului Național de Etnografie și Istorie Naturală", objectPosition: "center top" },
      { src: "/images/jurnal/ziua-portului-2026-2.jpg", alt: "Membrele comunității Ciocârlia în port tradițional, cu diploma primită la muzeu", objectPosition: "center top" },
      { src: "/images/jurnal/ziua-portului-2026-3.jpg", alt: "Membrele comunității Ciocârlia prezentând albumul Rapsodia patrimoniului", objectPosition: "center top" },
      { src: "/images/jurnal/ziua-portului-2026-4.jpg", alt: "Comunitatea Ciocârlia reunită la evenimentul dedicat Zilei Portului Popular", objectPosition: "center top" },
    ],
    sources: [{ label: "Postarea despre Ziua Portului Popular", href: "https://www.facebook.com/share/p/1KeficYuj9/" }],
  },
  {
    slug: "ziua-universala-a-iei-ialoveni-2026",
    title: "Ziua Universală a Iei, sărbătorită în premieră la Ialoveni",
    date: "24 iunie 2026",
    place: "Ialoveni",
    excerpt: "Prima celebrare a Zilei Universale a Iei la Ialoveni a reunit comunitățile creatoare de cămăși tradiționale din raion.",
    paragraphs: [
      "La 24 iunie, odată cu sărbătoarea de Sânziene, comunități din întreaga lume celebrează Ziua Universală a Iei, dedicată „Artei cămășii cu altiță – element de identitate culturală în România și Republica Moldova”, înscrisă în anul 2022 pe Lista Reprezentativă a Patrimoniului Cultural Imaterial al Umanității UNESCO.",
      "În acest an, această sărbătoare a fost marcată în premieră în orașul Ialoveni, în Parcul „Sfatul Țării”, printr-un eveniment organizat de Casa Raională de Cultură „Andrei Ungureanu” din Ialoveni și comunitatea Șezătoarea Ciocârlia.",
      "Programul a reunit iubitori ai patrimoniului, creatori și purtători ai cămășii cu altiță, oferind publicului:",
      "• expoziție de cămăși tradiționale și costume populare;",
      "• prezentarea unor publicații dedicate patrimoniului;",
      "• momente artistice;",
      "• o amplă defilare de port tradițional.",
      "La defilarea costumului tradițional au participat:",
      "• comunitatea Șezătoarea Ciocârlia;",
      "• Șezătoarea „Suveicuța” din satul Dânceni;",
      "• Laboratorul Creativ din satul Dânceni;",
      "• Svetlana Arva și Ana Ursu.",
      "Momentul artistic a fost susținut de ansamblul „Haiducii”, condus de Gheorghe Matei, și de instrumentiștii Ion Condrea, Maestru în Artă, Igor Popovici și Ion Garbuz, care au oferit publicului un repertoriu inspirat din tradiția muzicală locală, completând atmosfera autentică a sărbătorii.",
      "Un moment aparte al evenimentului l-a constituit prezentarea volumelor „Înțelepciunea acului” și „Rapsodia patrimoniului. Șezătoarea Ciocârlia și 5 ani de renaștere a cămășii tradiționale”, lucrări dedicate cercetării, documentării și transmiterii meșteșugului cămășii cu altiță.",
      "Participanții au avut bucuria de a primi și un mesaj de felicitare din partea etnografei Varvara Buzilă, doctor în filologie, conferențiar universitar și una dintre cele mai importante personalități ale patrimoniului cultural din Republica Moldova. În mesajul său, aceasta a evidențiat rolul esențial al comunităților locale în păstrarea și transmiterea artei cămășii cu altiță, apreciind implicarea celor care duc mai departe acest patrimoniu viu.",
      "Evenimentul s-a bucurat și de susținerea autorităților publice, prin mesajele adresate de Natalia Eremia, președinta raionului Ialoveni, Sergiu Armașu, primarul orașului Ialoveni, și Diana Josu-Braniște, șefa Secției Cultură Ialoveni, care au apreciat implicarea comunităților în protejarea și valorificarea patrimoniului cultural.",
      "Evenimentul a marcat un moment de referință pentru viața culturală a raionului Ialoveni, devenind prima inițiativă care a adus împreună toate comunitățile creatoare de cămăși tradiționale din raion, într-o celebrare comună a patrimoniului înscris în Lista Reprezentativă a Patrimoniului Cultural Imaterial al Umanității UNESCO. Prin această premieră, Ialoveni afirmă rolul comunităților locale în protejarea și transmiterea artei cămășii cu altiță către generațiile viitoare, demonstrând că patrimoniul trăiește prin oamenii care îl creează, îl poartă și îl împărtășesc mai departe.",
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
      "De-a lungul anilor, Șezătoarea Ciocârlia a reușit să unească femei care și-au dorit să poarte cămașa cu altiță nu doar ca piesă vestimentară, ci ca parte a propriei identități. Unele au venit, au cusut o cămașă și au mers mai departe pe drumul vieții lor. Altele au rămas aproape și continuă să coasă neîntrerupt. Cineva a devenit mentor, cineva și-a învățat fiica să țină acul în mână, iar altcineva a cusut cămăși pentru copii, nepoți și chiar strănepoți.",
      "În această comunitate se întâlnesc fete de 10 ani și doamne de peste 70 de ani. Între generații s-a creat o legătură socială extraordinară, construită în jurul acestei haine cu valoare sacră – cămașa ancestrală. Aici, cusutul nu înseamnă doar tehnică sau ornament, ci timp împărtășit, memorie transmisă și apartenență la o continuitate vie.",
    ],
    photos: [
      { src: "/images/jurnal/sezatoare-oameni-camasi-2026-1.jpg", alt: "O femeie și o fetiță lucrează împreună la gherghef în fața unei case cu ferestre albastre" },
      { src: "/images/jurnal/sezatoare-oameni-camasi-2026-2.jpg", alt: "Un cuplu poartă cămăși tradiționale cu broderie în nuanțe de galben și negru", objectPosition: "center top" },
      { src: "/images/jurnal/sezatoare-oameni-camasi-2026-3.jpg", alt: "O femeie în cămașă cu altiță admiră o țesătură cu motive tradiționale în grădină", objectPosition: "center 30%" },
    ],
    sources: [{ label: "Povestea comunității pe Facebook", href: "https://www.facebook.com/share/p/19nQz1sgzu/" }],
  },
];
