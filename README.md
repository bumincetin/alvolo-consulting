# Italia Consultant - Next.js Project

This project is a modern website for a consultancy firm aimed at Turkish students planning to study in Italy. It's built with Next.js 14 (App Router) and TypeScript, focusing on a professional look and feel, multilingual support, and content-driven services using Contentlayer.

## Project Goal

To create a visually appealing, responsive, and informative website, similar in structure and detail to `eduvitanova.com`, providing comprehensive information and consultancy services. The site will support Turkish, English, and Italian languages.

## Tech Stack

*   **Framework:** Next.js 14 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** Shadcn/ui
*   **Internationalization (i18n):** next-i18next (or similar, to be integrated)
*   **Content Management:** Contentlayer (for blog posts and services)
*   **Form Handling:** React-Hook-Form & Zod (to be integrated)
*   **Emailing:** Nodemailer (for contact form, server-side)
*   **Animations:** Framer Motion (to be integrated for subtle animations)
*   **Linting & Formatting:** ESLint, Prettier
*   **Git Hooks:** Husky & lint-staged
*   **Deployment:** Vercel
*   **Containerization:** Docker (for local development consistency)

## Design System (Key Elements)

*   **Primary Color:** `#E91E2E`
*   **Fonts:**
    *   `Inter` (for general text)
    *   `Playfair Display` (for headings)
*   **Responsive Design:** Mobile-first approach for all components and pages.

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm (v9 or later) or pnpm (v8 or later)
*   Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bumincetin/cetin-aslan.git # Or your repository URL
    cd cetin-aslan
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using pnpm:
    ```bash
    pnpm install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
```
Or if you used pnpm:
```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the `package.json`, you will find several scripts:

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts a Next.js production server (after building).
*   `npm run lint`: Lints the codebase using ESLint and automatically fixes issues.
*   `npm run format`: Formats the codebase using Prettier.
*   `npm run check-types`: Runs TypeScript type checking.
*   `npm run lint-staged`: Runs linters on staged files (used by Husky pre-commit hook).
*   `npm run prepare`: Installs Husky hooks (runs automatically after `npm install`).

## Project Structure

*   `app/`: Contains all routes, pages, and layouts (App Router structure).
    *   `app/layout.tsx`: The main layout વરસાદ for the application.
    *   `app/globals.css`: Global styles and Tailwind CSS directives.
    *   `app/[locale]/...`: Structure for internationalized routes.
*   `components/`: Shared React components used across the application.
    *   `components/layout/`: Layout components like Navbar, Footer.
    *   `components/ui/`: Components from Shadcn/ui (or custom UI elements).
*   `content/`: MDX files for blog posts and services, processed by Contentlayer.
    *   `content/blog/`: Contains blog post MDX files.
    *   `content/services/`: Contains service page MDX files.
*   `public/`: Static assets like images, fonts (if not using `next/font`).
*   `contentlayer.config.ts`: Configuration for Contentlayer document types.
*   `tailwind.config.ts`: Configuration for Tailwind CSS.
*   `next.config.mjs`: Configuration for Next.js.
*   `.eslintrc.json`: ESLint configuration.
*   `.prettierrc.json`: Prettier configuration.
*   `Dockerfile` & `docker-compose.yml`: For Docker-based development and deployment.

## Code Quality

This project uses:

*   **ESLint:** For identifying and reporting on patterns in JavaScript/TypeScript.
*   **Prettier:** For automatic code formatting.
*   **Husky & lint-staged:** To run linters and formatters automatically on staged files before committing, ensuring code consistency.

## Deployment

This project is configured for easy deployment to [Vercel](https://vercel.com/), the creators of Next.js.

1.  Push your code to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2.  Sign up or log in to Vercel.
3.  Import your Git repository.
4.  Vercel will automatically detect it as a Next.js project, build it, and deploy it.

Ensure environment variables (if any) are configured in the Vercel project settings.

---

This README provides a starting point. Feel free to expand it as the project evolves! 