# Muhammad Khan — Civil Engineering Portfolio

A personal portfolio website built with React + Vite.

## Sections
- About
- Certificate
- Projects
- Education
- Contact

---

## 1. Open the project in VS Code

1. Unzip/copy this folder anywhere on your computer (e.g. Desktop).
2. Open **VS Code** → `File > Open Folder` → select the `my-civil-portfolio` folder.

## 2. Install dependencies and run locally

Open the built-in terminal in VS Code (`Terminal > New Terminal`) and run:

```bash
npm install
npm run dev
```

This will print a local URL (e.g. `http://localhost:5173/my-civil-portfolio/`). Open it in your browser to see the live site update as you edit files.

## 3. Replace the placeholder images

Two placeholder images are in the `public` folder — swap them with your real files, **keeping the exact same filenames**:

- `public/profile.jpg` → your profile photo
- `public/certificate-solidworks.jpg` → your certificate scan

Just drag your real image into the `public` folder in VS Code's file explorer and overwrite.

## 4. Update your real LinkedIn link

Open `src/components/Contact.jsx` and replace:

```
https://linkedin.com/in/yourprofile
```

with your actual LinkedIn URL.

## 5. Push the project to GitHub using GitHub Desktop

1. Open **GitHub Desktop** → `File > Add Local Repository` → choose the `my-civil-portfolio` folder.
2. If it says "this directory is not a Git repository," click **create a repository**.
3. Write a commit message like `Initial portfolio commit` → click **Commit to main**.
4. Click **Publish repository** (top bar). Name it exactly `my-civil-portfolio` (matches the `base` path in `vite.config.js`). Keep it **Public** so GitHub Pages can serve it for free.

## 6. Deploy to GitHub Pages

Back in VS Code's terminal, run:

```bash
npm run deploy
```

This builds the site and pushes it to a `gh-pages` branch automatically.

Then on GitHub.com:
1. Go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment" → Source: **Deploy from a branch**.
3. Branch: select **gh-pages** → folder **/ (root)** → **Save**.
4. Wait 1–2 minutes, then your live site will be at:

```
https://<your-github-username>.github.io/my-civil-portfolio/
```

## Making future updates

Whenever you change something:

```bash
npm run dev      # preview locally
```

Then commit + push via GitHub Desktop as usual, and re-run:

```bash
npm run deploy
```

to publish the update.

## Project structure

```
src/
  components/
    Navbar.jsx / .css
    Hero.jsx / .css
    About.jsx / .css
    Certificate.jsx / .css
    Projects.jsx / .css
    Education.jsx / .css
    Contact.jsx / .css
  App.jsx
  main.jsx
  index.css       (global styles & theme variables)
public/
  profile.jpg
  certificate-solidworks.jpg
  favicon.svg
```
