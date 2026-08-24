export type ShopCategory = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  items: Array<{title:string;href:string}>;
};

export const shopCategories:ShopCategory[]=[
  {
    title:"Cărți",
    description:"Volume pentru cercetare, inspirație și lucru atent cu patrimoniul textil.",
    href:"/carti",
    linkLabel:"Descoperă cărțile",
    items:[
      {title:"Înțelepciunea acului",href:"/carti/ciocarlia-volumul-ii"},
      {title:"Rapsodia patrimoniului",href:"/carti/ciocarlia-volumul-i"},
    ],
  },
  {
    title:"Planșe",
    description:"Modele de lucru clare, pregătite pentru atelier și proiecte personale.",
    href:"/planse",
    linkLabel:"Vezi toate planșele",
    items:[
      {title:"Planșa X",href:"/planse/basarabia"},
      {title:"Planșa Y",href:"/planse/bucovina"},
    ],
  },
  {
    title:"Ateliere și îndrumare",
    description:"Întâlniri și sprijin personalizat pentru adulți, copii și proiecte individuale.",
    href:"/consultatii",
    linkLabel:"Vezi evenimentele",
    items:[
      {title:"Workshop de grup pentru adulți",href:"/consultatii"},
      {title:"Workshop pentru copii",href:"/consultatii"},
      {title:"Îndrumare individuală",href:"/consultatii"},
    ],
  },
];
