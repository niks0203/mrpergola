# Deployment Guide

This project is a Vite + React static site.

## Build Output

- Install dependencies: `npm install`
- Build the site: `npm run build`
- Output folder: `dist`

After build, deploy the contents of `dist` to your hosting provider.

## Important Note About Routing

This site uses client-side routing with `react-router-dom`.

That means every host must rewrite unknown routes to `index.html`, otherwise pages like `/technicals`, `/gallery`, or `/contact` may fail on refresh.

## Netlify

This project already includes `netlify.toml` with the correct settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Redirect rule: `/* -> /index.html`

Deploy with CLI:

```bash
netlify deploy --prod --dir=dist --no-build
```

Or connect the Git repository and let Netlify build automatically.

## Vercel

1. Import the repo into Vercel.
2. Framework preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`

Add a rewrite file if needed:

Create `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Cloudflare Pages

1. Connect the repository.
2. Build command: `npm run build`
3. Build output directory: `dist`

For SPA routing, add `_redirects` inside `public`:

```txt
/* /index.html 200
```

## GitHub Pages

GitHub Pages is possible, but it is less convenient for React Router sites unless you:

- use hash routing, or
- configure a custom 404 fallback

If you want normal routes like `/technicals`, Netlify, Vercel, or Cloudflare Pages is a better fit.

If you still want GitHub Pages:

1. Build locally with `npm run build`
2. Upload the built files from `dist`
3. Add a `404.html` copy of `index.html` for route fallback

## Shared Hosting / cPanel

If your host lets you upload static files:

1. Run `npm run build`
2. Open the `dist` folder
3. Upload everything inside `dist` to `public_html` or your site root

You also need a rewrite rule so all routes load `index.html`.

Example `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## AWS S3 + CloudFront

1. Run `npm run build`
2. Upload `dist` contents to an S3 bucket
3. Enable static website hosting or place CloudFront in front
4. Configure error fallback:
   - 403 -> `/index.html`
   - 404 -> `/index.html`

This is required for React Router pages.

## Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Init hosting: `firebase init hosting`
4. Set public directory to `dist`
5. Configure as single-page app: `Yes`
6. Build and deploy:

```bash
npm run build
firebase deploy
```

## Render Static Site

1. Create a new Static Site
2. Connect repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add rewrite rule:
   - Source: `/*`
   - Destination: `/index.html`

## Generic Static Host Checklist

If the provider supports static hosting, you need:

- Build command: `npm run build`
- Publish folder: `dist`
- SPA fallback: all unknown routes -> `index.html`

## Updating the Live Site

Whenever content changes:

```bash
npm install
npm run build
```

Then either:

- deploy `dist` manually, or
- push changes and let your host rebuild automatically

## Troubleshooting

### Refreshing a page gives 404

Your host is missing the SPA rewrite rule to `index.html`.

### Build works locally but deploy build fails

Try rebuilding locally first:

```bash
npm run build
```

If local build passes, the deploy issue is usually host configuration.

### Netlify fails while deleting `dist/assets`

Deploy without rebuilding:

```bash
netlify deploy --prod --dir=dist --no-build
```

### Images or assets do not load

Make sure the entire contents of `dist` were uploaded, not the project source files.
