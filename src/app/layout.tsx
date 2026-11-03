import type {Metadata} from "next";import {Montserrat,Playfair_Display} from "next/font/google";import "./globals.css";import {Header} from "@/components/layout/Header";import {Footer} from "@/components/layout/Footer";import {siteUrl} from "@/lib/constants";
const montserrat=Montserrat({subsets:["latin","latin-ext"],variable:"--font-body",display:"swap"});
const playfair=Playfair_Display({subsets:["latin","latin-ext"],variable:"--font-display",display:"swap"});
const sharingTitle = "Ciocârlia — Tradiție. Oameni. Creație.";
const sharingDescription = "Descoperă atelierele de cusut, poveștile și comunitatea care păstrează vie tradiția cămășii românești.";
const sharingImage = {
  url: "https://www.lia.md/og-image.jpg?v=2",
  width: 1200,
  height: 630,
  alt: "Comunitatea Ciocârlia — femei și copii în port tradițional",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lia.md"),
  title: {
    default: "Ciocârlia — Cărți, cusături și patrimoniu",
    template: "%s | Ciocârlia",
  },
  description: "Cărți, planșe și îndrumare pentru cei care vor să înțeleagă și să ducă mai departe tradiția iei.",
  alternates: { canonical: "./" },
  openGraph: {
    title: sharingTitle,
    description: sharingDescription,
    url: "https://www.lia.md",
    siteName: "Ciocârlia",
    type: "website",
    locale: "ro_RO",
    images: [{ ...sharingImage, secureUrl: sharingImage.url, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: sharingTitle,
    description: sharingDescription,
    images: [sharingImage],
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){const jsonLd={"@context":"https://schema.org","@graph":[{"@type":"Organization","name":"Ciocârlia (denumire demonstrativă)","url":siteUrl},{"@type":"Person","name":"Autoarea Ciocârlia (placeholder)","description":"Autoare și cercetătoare a portului tradițional."}]};return <html lang="ro" className={`${montserrat.variable} ${playfair.variable}`} suppressHydrationWarning><body suppressHydrationWarning><Header/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>}
