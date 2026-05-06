# AMR Properties — Corporate Website

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Netlify

## Quick Start

```bash
cd amr-properties
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Netlify

1. Push the repo to GitHub.
2. Connect the repo in the Netlify dashboard.
3. Netlify auto-detects `netlify.toml` — no manual config needed.
4. Set build command: `next build`, publish directory: `.next`.

Or deploy via CLI:

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

## Project Structure

```
amr-properties/
├── app/
│   ├── layout.tsx          Root layout (Navbar, Footer, WhatsApp button)
│   ├── globals.css         Tailwind base + custom utilities
│   ├── page.tsx            Home — hero, Why AMR, facilities strip, CTA
│   ├── about/page.tsx      Company story, mission/vision, stats, leadership
│   ├── rooms/page.tsx      4 room type cards with enquiry links
│   ├── facilities/page.tsx 6 facility cards + map embed
│   └── contact/page.tsx    Split layout: contact details + mailto form
├── components/
│   ├── Navbar.tsx          Sticky navbar with scroll blur + mobile menu
│   ├── Footer.tsx          4-col footer with links and contact info
│   ├── WhatsAppButton.tsx  Fixed floating WhatsApp CTA
│   └── FadeUp.tsx          Framer Motion scroll-triggered fade-up wrapper
├── netlify.toml
└── README.md
```

## Brand

| Token     | Value     |
|-----------|-----------|
| Navy      | `#0A1931` |
| Gold      | `#C9A84C` |
| Off-white | `#F4F1EA` |

Fonts: **Playfair Display** (headings) · **Inter** (body)

## Contact Details (do not change)

- Phone / WhatsApp: +971 6 554 2201
- Email: info@amrproperties.ae
- Address: Al Quoz, Dubai, UAE
- Website: amrproperties.ae
