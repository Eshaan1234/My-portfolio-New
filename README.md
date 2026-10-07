# Eshaan Gupta — Portfolio

A single-page, retro/pixel-game-themed portfolio site. Pure HTML/CSS/JS —
no build step, no framework, no dependencies.

## Files
- `index.html` — page structure and content (edit the `D = {...}` object
  near the top of `script.js` to change your name, projects, skills, etc.)
- `style.css` — all styling, themes, animations
- `script.js` — all interactivity (palette switcher, mini-game, sound,
  achievements, contact form, etc.)

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy on Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd portfolio-site
vercel
```
Follow the prompts (set up and deploy → yes, link to new project, etc.).
Framework preset: "Other" / static — no build command needed.

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → "Add New... Project" → import that repo.
3. Framework Preset: **Other**. Build Command: *(leave empty)*.
   Output Directory: *(leave empty / root)*.
4. Deploy.

No environment variables or server needed — it's fully static.
