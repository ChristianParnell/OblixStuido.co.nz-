# Oblix Studio website

A static, responsive studio website built for GitHub Pages. No build tools or paid services are required.

## Before publishing

1. Replace `hello@oblixstudio.com` in both `contact.html` and `script.js` with your real email address.
2. Replace the placeholder social links (`href="#"`) in `contact.html`.
3. Replace any SVG project artwork inside `/assets` with your own JPG, PNG, WebP or SVG files. Keep the existing filenames, or update the image paths in the HTML.
4. Edit the project descriptions and studio wording to match your final services.

## Publish with GitHub Desktop

1. Unzip this folder.
2. Open GitHub Desktop and choose **File → Add local repository**.
3. Select this folder. If prompted, choose **Create a repository**.
4. Commit the files, then click **Publish repository**.
5. On GitHub.com, open the repository and go to **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and the `/ (root)` folder, then save.

Your site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/` after GitHub finishes deploying it.

## Local preview

Double-click `index.html`, or run a local static server such as VS Code Live Server.

## Fonts

The site loads Barlow Condensed and IBM Plex Sans from Google Fonts. The fallback fonts still work if the external font request is blocked.
