import Image from "next/image";
export function BookGallery({image,title}:{image:string;title:string}){return <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--sand)]"><Image src={image} alt={`Coperta și detalii din ${title}`} fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover"/></div>}
