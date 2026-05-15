# MLAMD Center Website Prototype | Multi-Page Option

Static local prototype for the exa-AMD / exa-PD CMS project website.

This option makes each major top-navigation item an independent page:
`thrusts.html`, `progress.html`, `publications.html`, `data.html`, `people.html`,
and `roadmap.html`, with `index.html` serving as the landing/overview page.

## Local preview

Open `index.html` directly in a browser, or run a small static server from this directory:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Content sources used

- Existing Ames Lab center page and ISU ML materials page.
- Ames Lab MLAMD people page for team photos, titles, and institutions.
- `exa-amd` repository README, JOSS paper source, docs images, and citation metadata.
- Local CMS posters for Thrust 1 and Thrust 2.
- Local Thrust 1 supplemental proposal draft.
- `references/notes/progress_import_2026-05-12.md`.
- Generated hero image: `assets/hero-mlamd-ai-exascale.png`.

## Deployment direction

See `HOSTING_STRATEGY.md` for the recommended Ames Lab plus technical microsite hosting plan.
