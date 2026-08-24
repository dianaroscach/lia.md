export type NavigationItem={
  href:string;
  label:string;
  children?:Array<{href:string;label:string;meta?:string}>;
};

export const leftNavigation:NavigationItem[]=[
  {href:"/despre-autoare",label:"Povestea noastră"},
  {href:"/creatoare",label:"Creatoare"},
  {href:"/proiecte",label:"Proiecte"},
];

export const rightNavigation:NavigationItem[]=[
  {
    href:"/atelier",
    label:"Atelier de cusut",
    children:[
      {href:"/atelier#ialoveni",label:"Șezătoarea din Ialoveni",meta:"Gratuit"},
      {href:"/atelier#costesti",label:"Șezătoarea din Costești",meta:"Gratuit"},
      {href:"/atelier#atelier-privat",label:"Atelier privat · max. 20 persoane",meta:"5.000 MDL/grup"},
      {href:"/atelier#consultatie-online",label:"Consultație individuală online",meta:"600 MDL"},
    ],
  },
  {href:"/carti",label:"Cărți"},
  {href:"/planse",label:"Planșe"},
  {href:"/blog",label:"Jurnal"},
];

export const navigation=[...leftNavigation,...rightNavigation];
