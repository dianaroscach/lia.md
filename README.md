# Ciocârlia Website

MVP local, modern și responsive pentru brandul educațional Ciocârlia: cărți, planșe de cusut, consultații, articole și magazin demonstrativ.

## Tehnologii

Next.js (App Router), React, TypeScript, Tailwind CSS și ESLint. Datele sunt separate de interfață pentru o migrare simplă spre CMS și ecommerce.

## Pornire

```bash
npm install
npm run dev
```

Site-ul va fi disponibil implicit la `http://localhost:3000`.

Verificări:

```bash
npm run typecheck
npm run lint
npm run build
```

## Structură

- `src/app` — pagini și rute App Router;
- `src/components` — componente pe domenii: layout, home, books, patterns, consultations, blog, shop, UI;
- `src/data` — cărți, planșe, consultații, articole, testimoniale și navigare;
- `src/types` — modelele TypeScript;
- `src/hooks` — coș local și meniul mobil;
- `src/lib` — formatare, validare, constante și evenimente analytics;
- `public/images` — imagini locale demonstrative, grupate pe categorii.

Produsele se modifică în `src/data/books.ts`, `patterns.ts` și `consultations.ts`. Articolele se modifică în `src/data/articles.ts`. Imaginile se înlocuiesc păstrând căile sau actualizând câmpul `image` din date.

## Variabile de mediu

Copiază `.env.example` în `.env.local` și completează URL-ul site-ului, ID-ul analytics și datele de contact. Niciuna nu este obligatorie pentru rularea locală.

## Funcționalități MVP

- toate paginile publice, rute dinamice și metadata;
- meniu desktop și mobil;
- conținut realist în română;
- coș frontend persistent în `localStorage`;
- validare frontend și mesaje demonstrative pentru formulare;
- date structurate Person, Organization, Book, Product și Article;
- strat simplu pentru evenimente analytics;
- design mobile-first, focus states și semantică accesibilă.

## Etapa următoare

Nu sunt implementate încă backend-ul, încărcarea reală a imaginilor, trimiterea emailurilor, CMS-ul, inventarul, checkout-ul, plata, calculul real al livrării și autentificarea. Recomandare: conectarea datelor la un CMS headless, apoi integrarea unui provider ecommerce și a unui serviciu securizat pentru formulare/fișiere. După validarea juridică se completează politicile și se activează analytics prin variabilele de mediu.
