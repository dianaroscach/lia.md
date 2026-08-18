import type { Product } from "./product";
export type Consultation = Product & { duration:string; responseTime:string; includes:string[]; clientSends:string };
