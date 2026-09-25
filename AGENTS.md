# Dandurgu Air Travel & Tours

This repository contains the official Dandurgu Air Travel & Tours website.

The site is a React + Vite + Tailwind CSS application deployed to GitHub Pages. The public application includes the main company website, the travel application flow, and the application success page.

## Development

Install dependencies with:

```bash
pnpm install
```

Run the local development server with:

```bash
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

Preview the production build with:

```bash
pnpm preview
```

## Project structure

- `src/main.tsx` - React entrypoint
- `src/App.tsx` - Main application shell and routing
- `src/index.css` - Global styles and Tailwind CSS v4
- `src/pages/` - Website pages and application flow
- `public/` - Static assets such as logos and images
- `index.html` - HTML document shell and Meta Pixel initialization
- `package.json` - Project dependencies and scripts
- `vite.config.ts` - Vite configuration
- `.github/workflows/deploy.yml` - GitHub Pages deployment
- `.github/workflows/update-accreditations.yml` - Accreditation data update workflow

## Website and conversion flow

The application form submits directly to FormSubmit using a multipart POST so passport and other uploaded files are preserved.

The Meta Pixel is initialized in `index.html`. A validated application submission fires the Meta `Lead` event immediately before the native form submission. Lead tracking should remain independent of the FormSubmit redirect and CAPTCHA flow.

Do not replace the native multipart submission with a JSON or AJAX submission without verifying that file attachments still arrive correctly.

## Code quality

- Use double quotes for strings containing apostrophes, or escape apostrophes when using single-quoted strings.
- Keep JSX tags closed and braces balanced.
- Preserve the existing application flow when making UI changes.
- Do not remove or alter the Meta Pixel ID, FormSubmit endpoint, or conversion event without an explicit requirement.
- Keep public-facing copy specific to Dandurgu Air Travel & Tours.
