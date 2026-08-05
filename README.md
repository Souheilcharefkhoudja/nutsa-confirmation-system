# 🌰 Nutsa — Système de confirmation

Beautiful, mobile-first web app for Nutsa agents to call clients, confirm orders, and auto-send confirmed orders to Anderson/EcoTrack.

## ✨ Features

- 🔐 **Secure login** — Worker number + PIN (uses existing `_workerLogin` endpoint)
- 📞 **Tap to call** — one-tap `tel:` link opens the phone dialer
- ✅ **Confirm → Anderson** — hitting "Confirmer" auto-triggers `_sendOneOrderToAnderson` in the Apps Script backend
- 🎯 **Filters + search** — filter by status (En attente / Rappeler / Sans réponse / Confirmées), live search across name / phone / order ref / commune
- 📊 **Live stats** — pending / confirmed / cancelled counts at the top
- 🔄 **Auto-refresh** — polls every 60s (configurable)
- 📱 **Mobile-first** — PWA-ready, iOS safe-area aware, offline-friendly caching
- 🎨 **Warm design** — cream, deep forest green, gold accents

## 🚀 Setup

### 1. Deploy the Apps Script Web App

In your existing Nutsa `Code.gs`:

1. Open the Apps Script editor
2. **Deploy → New deployment → Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Copy the `/exec` URL

### 2. Configure the app

Open [`config.js`](./config.js) and paste your URL:

```js
window.NUTSA_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfyc.../exec",
  AUTO_REFRESH_SECONDS: 60,
  LOCALE: "fr-DZ"
};
```

### 3. Serve the app

Any static hosting works. Options:

**Local (dev):**
```bash
npx serve .
```

**GitHub Pages:**
1. Push to a GitHub repo
2. Settings → Pages → Deploy from branch → `main` → `/root`

**Vercel / Netlify:** drop the folder in.

## 👥 Agent PINs (from `Code.gs`)

| Agent | PIN  |
|-------|------|
| 1     | 4821 |
| 2     | 7356 |
| 3     | 3947 |

Change these in `_workerLogin()` inside the Apps Script.

## 🔄 How order confirmation works

1. Agent taps an order → sees full details
2. Agent taps 📞 **Appeler le client** → phone dialer opens
3. After the call, agent taps one of:
   - ✅ **Confirmer** → status becomes `Confirmed` → backend calls `_sendOneOrderToAnderson()` → Anderson tracking number appears in the sheet
   - ❌ **Annuler** → status becomes `Cancelled`
   - 📵 **Sans réponse** → status becomes `No Answer`
   - 🔁 **Rappeler** → status becomes `Callback`
4. The main Google Sheet updates automatically

## 🎨 Design notes

- Font: [Inter](https://fonts.google.com/specimen/Inter)
- Palette: cream (`#FAF6EF`), forest green (`#1B5E20`), gold (`#C9A961`)
- Radius scale: 10 / 16 / 22 px
- All easings: `cubic-bezier(.16, 1, .3, 1)` (out-quart)
- Reduced-motion support baked in

## 📁 Files

```
├── index.html      # markup
├── styles.css      # design system + components
├── app.js          # logic, API calls, state
├── config.js       # your API URL
└── README.md
```

## 🔒 Security

- PIN is sent over HTTPS to Apps Script
- Session token cached in `localStorage`, expires after 8h (server-side cache)
- Every mutating action re-validates the token
- No secrets in the frontend

---

Built for **Nutsa Distribution Algérie** · Souheil Charef Khoudja
