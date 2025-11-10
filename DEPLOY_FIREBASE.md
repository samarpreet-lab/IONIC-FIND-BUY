Firebase Hosting deployment instructions (PowerShell)

Overview
--------
This project already contains a built Ionic web app in the `www/` folder. The following steps will deploy that folder to Firebase Hosting.

Quick steps (copy-paste to PowerShell):

1) Install Firebase CLI (if not installed):

```powershell
npm install -g firebase-tools
```

2) Login to Firebase (opens browser):

```powershell
firebase login
```

3) (Optional) Select or add your Firebase project id:

Replace `YOUR_FIREBASE_PROJECT_ID` in `.firebaserc`, or run:

```powershell
firebase use --add YOUR_FIREBASE_PROJECT_ID
```

4) (Optional) Initialize hosting (interactive - choose `www` as public folder and answer "Yes" for SPA rewrites):

```powershell
firebase init hosting
```

5) Deploy the `www` folder to Firebase Hosting:

```powershell
firebase deploy --only hosting
```

Notes
-----
- The `firebase.json` in the repo is already configured to serve `www/` and rewrite all routes to `index.html` (SPA behavior).
- If you want the CLI to manage the project selection, run `firebase init hosting` and choose an existing project, or run `firebase use --add <projectId>`.
- Ensure `www/` contains the production build before deploying. For Ionic projects, `ionic build` or `npm run build` typically outputs into `www/`.

Troubleshooting
---------------
- If `firebase` command is not found after installation, restart your shell or add npm global bin to PATH.
- If you see a permissions error when installing the CLI globally, try using a user-level install or use `npx firebase-tools` instead.
