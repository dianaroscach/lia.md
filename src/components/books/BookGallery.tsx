import Image from "next/image";
export function BookGallery({image,title}:{image:string;title:string}){return <div className="relative h-[420px] overflow-hidden bg-[var(--sand)]"><Image src={image} alt={`Coperta și detalii din ${title}`} fill sizes="(max-width: 768px) 100vw, 50vw" preload className="object-contain"/></div>}
