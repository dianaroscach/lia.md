import type { Metadata } from "next";

const title = "Ciocârlia — Test imagine";
const description = "Test pentru previzualizarea imaginii Ciocârlia.";
const image = {
  url: "https://www.lia.md/og-image-test.jpg",
  width: 1200,
  height: 630,
  alt: title,
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://www.lia.md/og-test" },
  openGraph: {
    title,
    description,
    url: "https://www.lia.md/og-test",
    type: "website",
    images: [{ ...image, secureUrl: image.url, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function OgTestPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
