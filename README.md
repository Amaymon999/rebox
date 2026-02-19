# REBOX STORE

**Payoff:** _Ogni box è un’occasione._

Web app mobile-first in stile marketplace energico (ispirazione Temu/AliExpress, senza copia grafica), progettata per aumentare conversione e frequenza di acquisto dei box sorpresa in negozio.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui style components (local)
- Framer Motion
- Zustand
- Supabase (Auth + Postgres + Storage)
- ESLint + Prettier
- Vitest (test base)

## 1) Installazione locale

```bash
npm install
cp .env.example .env.local
npm run dev
```

Apri `http://localhost:3000`.

## 2) Setup variabili ambiente

Compila `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_STORE_CITY`
- `DROP_CUTOFF_HOUR`

## 3) Supabase: schema e seed

Esegui nel SQL Editor di Supabase:

1. `supabase/schema.sql`
2. `supabase/seed.sql`

Tabelle incluse:

- users
- profiles
- transactions
- rewards
- redemptions
- drops
- referrals

## 4) Run, lint e test

```bash
npm run dev
npm run lint
npm run test
```

## 5) Deploy su Vercel (10 min)

1. Push su GitHub.
2. Import progetto in Vercel.
3. Configura variabili ambiente uguali a `.env.local`.
4. Deploy (`main` o branch dedicato).

## Routes MVP

- `/` Home feed
- `/drop` dettaglio drop + countdown
- `/loyalty` punti/livelli/missioni
- `/rewards` catalogo premi
- `/invite` referral
- `/alerts` iscrizione avvisi
- `/profile` profilo + QR cassa
- `/admin` dashboard MVP

## Analytics MVP (schema eventi)

Tracciamenti predisposti:

- `view_home`
- `click_drop`
- `subscribe_alert`
- `redeem_reward`
- `show_qr`
- `referral_share`

Attualmente in `console.info`. Integrazione consigliata:

- **PostHog** (eventi + funnel + retention)
- **GA4** (acquisizione/canali)

## Accessibilità + UX note

- Contrasto alto navy/cream
- Focus ring visibile su interazioni
- `aria-label` sui campi principali
- FOMO solo su dati reali di disponibilità

## Phase 2 checklist

- [ ] Push notifications web/app
- [ ] Wallet pass (Apple/Google) per loyalty
- [ ] WA Business API con template verificati
- [ ] Segmentazione CRM (city, fascia oraria, tier)
- [ ] Event pipeline verso PostHog + GA4 + BI
- [ ] Admin scanner QR live (camera + validazione)

## Brand kit implementato

- Orange `#FF7A1B`
- Navy `#192134`
- Cream `#FFF5E3`
- Yellow `#FFD752` (accent)
- Font: Montserrat
