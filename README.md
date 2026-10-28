# BracketDex — Website Version 1

Built from revision `619776df7f16cd8a953317637c64025355a73831` with the original illustrated homepage hero and navigation preserved. The completed version adds project summaries, engagement options, delivery details, FAQ/privacy pages, accessible contact options and responsive layouts.

## Local setup

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev -- --port 3015
```

Open `http://localhost:3015`.

## Verification

```sh
npm run build
npm run typecheck
npm run lint
npm start -- --port 3015
```

In a second terminal, run `npm test`. Route tests expect port 3015; set `SITE_TEST_URL` to test another server. Run the build before typechecking in a fresh checkout to generate Next.js route types. `npm run verify:home-boundary` checks the preserved hero/navigation sources and asset.

## Content and enquiries

- Main content: `src/content/marketing.ts` and `src/content/pages.ts`.
- Portfolio and engagement options: `src/content/work.ts`. All 15 project summaries were supplied by BracketDex. The projects page includes category filters; the homepage previews the first three. Maintain the category groups and original industry/type tags in this content file.
- Business contact details: `src/lib/site.ts`.
- Contact form: validates and prepares a brief locally. The visitor reviews it and chooses to send it through their email application. No email delivery API, hidden submission or database is configured. Copying the brief into webmail is the fallback.
- The privacy notice describes this behavior. Update it when adding analytics, email delivery, a CRM or other data processing.

## Deployment

Standard Next.js deployment: install with `npm ci`, build with `npm run build`, then run with `npm start`. No enquiry API credentials are required. The default canonical domain is `https://bracketdex.com`; change `siteConfig.url` before hosting this version on a different production domain. See `docs/version1-review.md` for verification evidence and remaining content opportunities.

PostCSS is pinned through an npm override to address advisories in the version bundled with Next.js 15. Recheck this override when updating Next.js. Do not commit `.env` files, private customer information or local QA artifacts.
