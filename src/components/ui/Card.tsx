import type { ReactNode } from "react";
export function Card({children,className=""}:{children:ReactNode;className?:string}){return <div className={`rounded-[1.5rem] border border-black/10 bg-[var(--paper)] ${className}`}>{children}</div>}
