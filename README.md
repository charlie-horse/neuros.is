# neuros.is

Static [SvelteKit](https://svelte.dev/docs/kit) site, deployed to GitHub Pages at <https://neuros.is>.

## Local development

```sh
npm install
npm run dev
```

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
