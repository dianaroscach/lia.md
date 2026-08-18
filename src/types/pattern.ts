import type { Product } from "./product";
export type Pattern = Product & { region:string; difficulty:string; format:string; size:string };
