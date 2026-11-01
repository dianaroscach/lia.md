export type NavigationItem={
  href:string;
  label:string;
  children?:Array<{href:string;label:string;meta?:string}>;
};

export const leftNavigation:NavigationItem[]=[
  {href:"/povestea-noastra",label:"Povestea noastră"},
  {href:"/creatoare",label:"Creatoare"},
  {href:"/proiecte",label:"Proiecte"},
];

export const rightNavigation:NavigationItem[]=[
  {
    href:"/atelier-de-cusut",
    label:"Atelier de cusut",
    children:[
      {href:"/atelier-de-cusut#ialoveni",label:"Șezătoarea din Ialoveni",meta:"Gratuit"},
      {href:"/atelier-de-cusut#costesti",label:"Șezătoarea din Costești",meta:"Gratuit"},
      {href:"/atelier-de-cusut#atelier-privat",label:"Atelier de grup · max. 20 persoane",meta:"2.000–5.000 MDL/grup"},
      {href:"/atelier-de-cusut#consultatie-online",label:"Consultație individuală online",meta:"600 MDL"},
    ],
  },
  {href:"/carti",label:"Cărți"},
  {href:"/planse",label:"Planșe"},
  {href:"/jurnal",label:"Jurnal"},
];

export const navigation=[...leftNavigation,...rightNavigation];
