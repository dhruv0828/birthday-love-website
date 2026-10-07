# 💕 Birthday Love Website

A beautiful, cinematic, personal birthday website — built with React + Vite.

---

## 🚀 Deploying to GitHub Pages

### Step 1: Create your GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click **New repository**
3. Name it anything, e.g. `birthday-website`
4. Keep it **Public** (required for free GitHub Pages)
5. Do NOT add a README (the project has its own)
6. Click **Create repository**

---

### Step 2: Configure the Base Path

Open **`vite.config.js`** and change the `base` to match your repository name:

```js
// If your repo is: https://github.com/yourname/birthday-website
base: '/birthday-website/',

// If your repo is: https://github.com/yourname/my-love-letter
base: '/my-love-letter/',
```

> ⚠️ The base must start and end with `/` and must match your repo name exactly.

---

### Step 3: Personalize the Website

Open **`src/config.js`** and fill in the details:

```js
GIRLFRIEND_NAME: "Her Name",      // or leave "" to not use her name
MY_NAME: "Your Name",
RELATIONSHIP_YEARS: 2,
BIRTHDAY_DATE: "October 7",
MUSIC_FILE: "audio/song.mp3",     // add file to /public/audio/
PHOTOS: [
  "images/photo1.jpg",            // add files to /public/images/
  "images/photo2.jpg",
],
```

#### Adding photos:
1. Copy photo files to the `public/images/` folder
2. Add the filenames to `PHOTOS` in `config.js`

#### Adding music:
1. Copy your MP3/OGG file to `public/audio/`
2. Set `MUSIC_FILE: "audio/yourfile.mp3"` in `config.js`

---

### Step 4: Push to GitHub

Run these commands in your terminal from the project folder:

```bash
git init
git add .
git commit -m "Initial commit: Birthday website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

---

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site every time you push to `main`.

---

### Step 6: Access the Website

After the first deployment (~2 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Share this URL with her! 🎉

---

## 🛠 Running Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

To test the production build locally:
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
birthday-website/
├── public/
│   ├── images/          ← Add photos here
│   └── audio/           ← Add music here
├── src/
│   ├── components/      ← All UI components
│   ├── hooks/           ← Custom React hooks
│   ├── utils/           ← Animation utilities
│   ├── config.js        ← ⭐ Personalization config
│   ├── App.jsx          ← Main app
│   └── index.css        ← Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml   ← Auto-deployment workflow
├── vite.config.js       ← ⭐ Change base path here
└── index.html
```

---

## 🎨 Customization Tips

- **Colors**: Edit CSS variables in `src/index.css` under `:root`
- **Story text**: Edit the chapter components in `src/components/`
- **Timeline**: Edit the `TIMELINE_ITEMS` array in `src/components/Timeline.jsx`
- **Reveal lines**: Edit the `LINES` array in `src/components/OneThing.jsx`

---

## ❤️ Made with love

This website was built to be a personal digital love letter. Every chapter, every word, every animation was designed to make her feel loved.

Happy Birthday to her. 🎂
