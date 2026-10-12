# Pixel Perfect

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/53a68e51-6477-4584-b72a-db739404c89f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```


## Deploy to GitHub Pages

The workflow at `.github/workflows/static.yml` builds the app and deploys the generated static output.
In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.

### Important: local assets
The files `src/assets/hasanudin.png.asset.json` and `src/assets/cv-hasan.pdf.asset.json` contain Lovable-hosted asset URLs, not the actual image/PDF files. GitHub Pages cannot serve those Lovable asset endpoints. To make the profile photo and CV download work on GitHub Pages, place the real files in `public/assets/` (for example `public/assets/hasanudin.png` and `public/assets/CV-hasan.pdf`) and update `src/routes/index.tsx` to use `/assets/hasanudin.png` and `/assets/CV-hasan.pdf` respectively.
