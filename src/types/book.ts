import type { Product } from "./product";
export type Book = Product & { subtitle:string; format:string; availability:string; benefits:string[]; contents:string[] };
