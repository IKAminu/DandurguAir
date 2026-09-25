# Dandurgu Air Travel & Tours

Official website for Dandurgu Air Travel & Tours Ltd.

The website provides company information, travel services, accreditation details and the customer application flow for Dandurgu.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages

## Local development

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Deployment

The site is deployed to GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

The production application uses Dandurgu's custom domain:

https://dandurgu.l.cd/

## Application flow

Customer applications are submitted through FormSubmit using a native multipart form submission so uploaded documents can be delivered with the application.

The Meta Pixel is installed in the document shell and the `Lead` event is fired for validated application submissions.

## Repository notes

This repository is maintained for Dandurgu Air Travel & Tours. Public-facing metadata and documentation should remain Dandurgu-specific and should not contain references to third-party design or site-building platforms.
