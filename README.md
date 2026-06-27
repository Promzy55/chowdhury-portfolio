# Chowdhury — Portfolio

A bold, dark-mode React portfolio site built from a resume template.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or above) — [Download here](https://nodejs.org)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone your repo (after pushing to GitHub)
git clone https://github.com/Chowdhury22/chowdhury-portfolio.git
cd chowdhury-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
chowdhury-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js / Header.css
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Projects.js / Projects.css
│   │   ├── Skills.js / Skills.css
│   │   └── Certifications.js / Certifications.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

---

## ✏️ Customising Your Links

Search for `TODO` comments across the project to find all placeholder URLs:

| File | What to update |
|------|---------------|
| `src/components/Header.js` | LinkedIn, GitHub, email, phone |
| `src/components/Experience.js` | Company website link |
| `src/components/Projects.js` | GitHub project link |
| `src/components/Certifications.js` | Meta & IBM certificate URLs |

---

## 📦 Pushing to GitHub

```bash
# Inside the project folder
git init
git add .
git commit -m "Initial commit: portfolio site"

# Create a new repo on github.com, then:
git remote add origin https://github.com/Chowdhury22/chowdhury-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `/build` folder — ready to deploy on GitHub Pages, Vercel, or Netlify.

---

## 🌐 Deploy to GitHub Pages (optional)

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://Chowdhury22.github.io/chowdhury-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```
