import type { Pattern } from "@/types/pattern";
const raw=[
["basarabia","Planșă tradițională – Model Basarabia","Basarabia","Intermediar","Fizic · A3",180],["bucovina","Planșă tradițională – Model Bucovina","Bucovina","Avansat","Digital · PDF",180],["nord","Rombul de Nord","Nordul Moldovei","Începător","Digital · PDF",140],["alunita","Alunița și spicul","Orhei","Intermediar","Fizic · A3",190],["steaua","Steaua în opt colțuri","Cahul","Avansat","Fizic + digital",220],["personalizat","Model personalizat după ie","La cerere","Personalizat","La cerere",350]
] as const;
export const patterns:Pattern[]=raw.map(([slug,title,region,difficulty,format,price],i)=>({id:`p${i+1}`,slug,title,type:"plansă",price,image:`/images/patterns/${slug}.png`,description:"Model redat clar, cu legendă cromatică și îndrumări pentru a păstra ritmul ornamentului.",region,difficulty,format,size:format.includes("A3")?"29,7 × 42 cm":"Fișier scalabil pentru imprimare"}));
