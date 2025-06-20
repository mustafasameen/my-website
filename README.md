# mustafasameen.com

- **Icons**: [Lucide React](https://lucide.dev/icons/)
- **Like**: [Upstash Claps](https://github.com/upstash/claps)
- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Syntax Highlight**: [Sugar High](https://github.com/huozhi/sugar-high)
- **Blog**: [Next MDX Remote](https://github.com/hashicorp/next-mdx-remote)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)

## Overview

- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction), claps.
- `app/publications/*` - Static pre-rendered publication pages using Contentlayer.
- `app/*` - All other pages.
- `components/` - All components.
- `public/*` - Static assets including images for publications and other all images.
- `content/` - Contains all posts and snippets.
- `lib/`- Contains metadata and util functions.
- `types/`- Contains all types and interfaces.
- `styles/*` - Contains all global styles.

## Demo

```bash
https://mustafasameen.com
```

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/mustafasameen/my-website.git
cd my-website
npm install
npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/mustafasameen/my-website/blob/master/.env.example). You don't need to fill them out for the site to work. However, it is required to be able to use the [Upstash/Claps](https://github.com/upstash/claps) package.

## Cloning / Forking

Please review the [license](https://github.com/mustafasameen/my-website/blob/master/LICENSE.txt) and remove all of my personal information (resume, publications, images, etc.).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# Credits

- [@onurhan1337](https://github.com/onurhan1337)
