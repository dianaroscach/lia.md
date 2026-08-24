import Image from "next/image";
import Link from "next/link";
import {leftNavigation,rightNavigation,type NavigationItem} from "@/data/navigation";
import {Container} from "./Container";
import {MobileMenu} from "./MobileMenu";
import {SocialLinks} from "@/components/ui/SocialLinks";

function DesktopMenuItem({item}:{item:NavigationItem}){
  if(!item.children)return <Link className={`nav-link ${item.href==="/cos"?"flex items-center gap-2":""}`} href={item.href}>{item.href==="/cos"&&<span aria-hidden="true">□</span>}{item.label}</Link>;
  return <div className="group relative flex h-[74px] items-center"><Link className="nav-link flex items-center gap-1" href={item.href}>{item.label}<span className="text-[9px]" aria-hidden="true">⌄</span></Link><div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 border border-[var(--line)] bg-[var(--ivory)] p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"><div className="flex flex-col">{item.children.map(child=><Link className="border-b border-[var(--line)] px-4 py-3 last:border-b-0 hover:bg-white focus-visible:bg-white" href={child.href} key={`${child.href}-${child.label}`}><span className="block font-serif text-base">{child.label}</span>{child.meta&&<span className="mt-1 block text-[10px] uppercase tracking-[.12em] text-[var(--muted)]">{child.meta}</span>}</Link>)}</div></div></div>;
}

export function Header(){return <header className="sticky top-0 z-50 bg-white/95 backdrop-blur"><Container className="relative grid h-[82px] grid-cols-[1fr_auto_1fr] items-center"><nav className="hidden items-center gap-5 xl:flex" aria-label="Navigare principală">{leftNavigation.map(item=><DesktopMenuItem item={item} key={item.href}/>)}</nav><Link href="/" className="col-start-2 border-0 outline-none" aria-label="Ciocârlia, pagina principală"><Image src="/logo-ciocarlia.svg" alt="Ciocârlia" width={420} height={360} priority className="h-[72px] w-[84px] border-0 object-contain"/></Link><div className="hidden items-center justify-end gap-5 xl:flex"><nav className="flex items-center gap-5" aria-label="Navigare secundară">{rightNavigation.map(item=><DesktopMenuItem item={item} key={item.href}/>)}</nav><SocialLinks className="border-l border-[var(--line)] pl-4 text-[var(--cta)]"/></div><div className="col-start-3 row-start-1 justify-self-end xl:hidden"><MobileMenu/></div></Container></header>}
