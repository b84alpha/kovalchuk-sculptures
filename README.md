# Kovalchuk Sculptures — One-Pager (Next.js + Tailwind)

Minimal, screenshot-friendly landing page with dark monochrome style.

## Quick start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Replace content
- Edit copy in `app/page.jsx`.
- Swap images in `/public/thumb-1.jpg` (and 2/3).
- Replace `/public/portfolio.pdf` with your curated PDF.
- Update email and footer text in `app/page.jsx`.

## Deploy
- **Vercel:** Import the repo and deploy. No config required.
- **Docker (optional):**
  ```bash
  npm run build
  npm start
  ```

## Notes
- No external fonts used (system stack). If you want custom fonts, add them in `/public/fonts` and extend Tailwind.
- This template avoids heavy imagery; keep the page height short so it fits into a single screenshot on most laptops.
