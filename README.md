# neuros.is

Static [SvelteKit](https://svelte.dev/docs/kit) site, deployed to GitHub Pages at <https://neuros.is>.

## Local development

```sh
npm install
npm run dev
```

## Editing content

- **Copy and links:** everything editable (bio placeholder, /now items and date, status lines, nav, contact details) lives in [`src/lib/site.ts`](src/lib/site.ts).
- **Theme:** colour and type tokens (light + dark) are CSS custom properties in [`src/lib/styles/global.css`](src/lib/styles/global.css).
- **Pages:** `src/routes/` (`/`, `/about`, `/now`, `/contact`, and `+error.svelte` for the 404).
- Fonts are self-hosted via `@fontsource` packages; the site makes no third-party requests and is `noindex, nofollow`.

## Build

```sh
npm run build    # static output in build/
npm run preview  # serve the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci` and `npm run build` and publishes `build/` to GitHub Pages.

## One-time GitHub setup

1. **Settings → Pages → Build and deployment → Source:** select **GitHub Actions**.
2. **Settings → Pages → Custom domain:** enter `neuros.is` and save. Once the certificate is issued, tick **Enforce HTTPS**.
   For Actions-based deploys GitHub takes the domain from this setting; `static/CNAME` is kept in the repo for clarity.
3. **DNS at the registrar** for the apex `neuros.is`:
   - `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - Optional: `www` `CNAME` → `charlie-horse.github.io`
