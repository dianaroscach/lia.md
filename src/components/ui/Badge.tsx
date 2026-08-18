import type { ReactNode } from "react";
export function Badge({children}:{children:ReactNode}){return <span className="inline-flex rounded-full bg-[var(--sage)]/15 px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-[var(--forest)]">{children}</span>}
