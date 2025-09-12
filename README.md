
# Kin - Web Preview (Source)

This is a minimal React source package for the **Kin** web preview. It includes mock data and routes for Home, Share, Explore, Messages, and Profile.

## Quick steps to run locally (on Windows/macOS/Linux)

1. Install Node.js (>=16) and npm from https://nodejs.org/
2. Open a terminal, then:
   ```bash
   npm install
   npm start
   ```
3. The app opens at http://localhost:3000 and shows the Kin preview with mock data.

## Deploying a live preview online (no server required)

### Option A — Vercel (recommended)
1. Create a GitHub repository and push this project to it.
2. Go to https://vercel.com/, sign up and “Import Project” from GitHub.
3. Vercel detects Create React App automatically. Deploy. 
4. You will get a public URL like https://kin-preview.vercel.app

### Option B — Netlify (if you prefer drag-and-drop)
1. Build the project locally: `npm run build`
2. Upload the `build/` folder to Netlify via drag-and-drop at https://app.netlify.com/drop
3. Netlify will host the static site and provide a URL.

---
Files included:
- public/index.html
- src/index.js
- src/App.js (routes & mock data)
- src/index.css
- package.json

If you want, I can also create a GitHub repo for you or prepare the `build/` folder (production) and upload it to a hosting service — tell me and I'll proceed.
