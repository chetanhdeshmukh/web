# AGENTS.md

Instructions for coding agents maintaining this repository.

## Mission

Maintain a polished, fast, static portfolio for Chetan Deshmukh. The experience should feel futuristic and technically credible while remaining readable, accessible, and easy to deploy.

## Start Here

Before editing:

1. Read `README.md`.
2. Read `New Data.txt`.
3. Inspect `index.html`, the relevant shared stylesheet, and any page being changed.
4. Check `git status` and preserve unrelated user changes.
5. Preview through a local HTTP server instead of `file://`.

## Technical Constraints

- Use plain HTML, CSS, and vanilla JavaScript.
- Do not introduce a framework, bundler, package manager, or build step unless explicitly requested.
- Keep paths relative so the site works on ordinary static hosting.
- Prefer shared styles in `assets/` over large new inline style blocks.
- Use semantic HTML and accessible names for interactive controls.
- Maintain responsive behavior down to narrow mobile screens.
- Respect `prefers-reduced-motion`.
- Avoid unnecessary external dependencies. Google Fonts are the only current visual dependency.

## Content Ownership

- `New Data.txt` is the canonical profile content source.
- `index.html` is the concise public overview.
- `projects/*.html` contains detailed project case studies.
- Keep project GitHub links direct and functional.
- Do not invent employers, dates, metrics, awards, technologies, or project results.
- If content conflicts, prefer the latest explicit user-provided information and update `New Data.txt` accordingly.

## Protected Files And Routes

These routes are externally important:

- `/counter/privacypolicy.html`
- `/heartbeat/privacypolicy.html`
- `/onionmarket/privacypolicy.html`
- `/app-ads.txt`
- `/verify.html`

Rules:

- Never rename, move, or delete these files unless explicitly instructed.
- Never alter privacy policy text unless the user explicitly requests a content change.
- Privacy page design changes should normally be implemented in `assets/policy.css`.
- Preserve the exact content of `app-ads.txt`.
- Preserve the exact verification token in `verify.html`.

## Visual Language

Use the existing design system:

- Background: near-black navy
- Primary signal: acid green
- Secondary signal: cyan
- Display/body type: Manrope
- Technical labels: DM Mono
- Motifs: grids, signals, protocol layers, instrumentation, geometric panels

Keep effects restrained. The design should communicate engineering precision, not generic science-fiction decoration.

CSS responsibilities:

- `assets/styles.css`: tokens, global layout, homepage, shared header/footer
- `assets/project.css`: project detail pages
- `assets/policy.css`: privacy policy presentation only
- `assets/script.js`: shared lightweight interactions

Reuse existing components and variables before adding new patterns.

## Adding A Project

1. Add accurate source content to `New Data.txt`.
2. Add a summary card to the homepage project section.
3. Create `projects/<project-slug>.html`.
4. Reuse `assets/styles.css`, `assets/project.css`, and `assets/script.js`.
5. Add the real external repository link when one exists.
6. Add previous/next navigation if the project sequence changes.
7. Test the homepage card and all relative paths.

## Verification

For every meaningful change:

1. Run `git diff --check`.
2. Confirm every local `href` and `src` resolves.
3. Serve the repository locally.
4. Inspect desktop and mobile layouts in a browser.
5. Check for horizontal overflow.
6. Check browser console warnings and errors.
7. Exercise navigation and changed interactions.
8. Verify protected routes still return successfully.

For privacy page styling changes, compare the page content against the previous Git version and confirm only presentation changed.

## Git Workflow

- Work on the requested branch; the production branch is currently `main`.
- Do not discard unrelated working-tree changes.
- Use focused, descriptive commit messages.
- Before pushing, review `git diff --stat`, `git diff --check`, and `git status`.
- Push only after verification succeeds.
