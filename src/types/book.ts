import type { Product } from "./product";
export type Book = Product & { authors:string[]; language:string; audience:string; story:string; subtitle:string; format:string; availability:string; benefits:string[]; contents:string[] };
