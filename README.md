# Chetan Deshmukh Portfolio

Source code for [chetandeshmukh.in](https://chetandeshmukh.in), a static portfolio focused on embedded software engineering, automotive software, verification, and engineering automation.

The site intentionally uses plain HTML, CSS, and JavaScript. It has no package manager, framework, build step, database, or server-side runtime.

## Local Preview

From the repository root:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

Do not preview the pages by opening them directly with `file://`. A local HTTP server gives behavior closer to production and catches incorrect relative paths.

## Repository Structure

```text
.
|-- index.html                         Main portfolio homepage
|-- New Data.txt                       Authoritative portfolio content source
|-- assets/
|   |-- styles.css                     Global design system and homepage styles
|   |-- script.js                      Navigation, reveal effects, and footer year
|   |-- project.css                    Shared project detail page styles
|   `-- policy.css                     Shared privacy policy visual theme
|-- projects/
|   |-- can-dashboard.html             CAN Dashboard case study
|   `-- modbus-slave.html              Modbus Slave Device case study
|-- counter/privacypolicy.html         Counter privacy policy
|-- heartbeat/privacypolicy.html       Heartbeat privacy policy
|-- onionmarket/privacypolicy.html     Kanda Bajarbhav privacy policy
|-- app-ads.txt                        Heartbeat advertising seller declaration
|-- verify.html                        Existing verification token
`-- AGENTS.md                          Maintenance instructions for coding agents
```

## Content Updates

`New Data.txt` is the canonical source for professional profile content. When experience, projects, skills, achievements, or goals change:

1. Update `New Data.txt`.
2. Reflect the relevant changes in `index.html`.
3. Update a project detail page when its project content changes.
4. Check dates, metrics, external links, and page metadata.

The site currently links to:

- [LinkedIn](https://www.linkedin.com/in/chetanhdeshmukh/)
- [GitHub](https://github.com/chetanhdeshmukh)
- [CAN Dashboard repository](https://github.com/chetanhdeshmukh/dashboard-can-project)
- [Modbus Slave Device repository](https://github.com/chetanhdeshmukh/Modbus_Slave_Device)
- Email: `support@chetandeshmukh.in`

## Design System

The visual direction is a futuristic embedded-systems laboratory:

- Dark technical canvas with subtle grid and noise layers
- Acid green (`--acid`) for primary emphasis
- Cyan (`--cyan`) for secondary signals and diagrams
- Manrope for display/body typography
- DM Mono for metadata and engineering labels
- Geometric borders, system panels, restrained motion, and CSS-built visuals

Global tokens live at the top of `assets/styles.css`. Reuse them rather than introducing isolated colors or spacing values.

The project pages share the homepage foundation and extend it through `assets/project.css`. Privacy pages retain their original inline styles but load `assets/policy.css` afterward so the shared theme overrides presentation only.

## Important Preservation Rules

- Do not change the paths of any privacy policy page.
- Do not edit privacy policy wording unless an explicit legal/content update is requested.
- Keep `app-ads.txt` at the domain root.
- Keep `verify.html` at the domain root and preserve its token.
- Keep the site fully static and usable without a build process.
- Preserve keyboard navigation, semantic headings, responsive behavior, and reduced-motion support.
- Project summaries belong on the homepage; detailed project content belongs on separate pages under `projects/`.

## Verification Checklist

Before publishing:

1. Start the local HTTP server.
2. Open the homepage at desktop and mobile widths.
3. Test the mobile menu and all homepage section links.
4. Open both project pages from their homepage cards.
5. Verify GitHub, LinkedIn, and email destinations.
6. Open all three privacy policy paths.
7. Confirm `app-ads.txt` and `verify.html` still load from the root.
8. Check the browser console for errors.
9. Confirm there is no horizontal overflow on mobile.
10. Run:

```powershell
git diff --check
```

## Deployment

The deployed site is the repository contents served as static files. Push reviewed changes to `main`:

```powershell
git add .
git commit -m "Describe the website change"
git push origin main
```

DNS, hosting, and domain configuration are external to this repository. Confirm the live site after the hosting provider finishes deployment.
