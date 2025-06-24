# Italia Consultant - Next.js Project

This project is a modern website for "Çetin & Aslan Danışmanlık," a consultancy firm aimed at Turkish students and individuals planning to study or relocate to Italy. It's built with Next.js 14 (App Router) and TypeScript, focusing on a professional look and feel, multilingual support (planned), and content-driven services.

## 🚀 Project Goal

To create a visually appealing, responsive, and informative website providing comprehensive information and consultancy services related to studying and living in Italy. The site aims to support Turkish, with potential for English and Italian in the future.

## 💻 Tech Stack

*   **Framework:** Next.js 14 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** (Shadcn/ui - to be integrated or custom components)
*   **Icons:** React Icons
*   **Internationalization (i18n):** (next-i18next or similar - to be integrated)
*   **Content Management:** (Contentlayer - for potential blog/dynamic service pages - to be integrated)
*   **Form Handling:** (React-Hook-Form & Zod - to be integrated)
*   **Emailing:** (Nodemailer - for contact form, server-side - to be integrated)
*   **Animations:** (Framer Motion - for subtle animations - to be integrated)
*   **Linting & Formatting:** ESLint, Prettier
*   **Git Hooks:** Husky & lint-staged (assumed from general good practice)
*   **Deployment:** Vercel (assumed)
*   **Containerization:** Docker (for local development consistency, if used)

## 🛠️ Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/bumincetin/alvoloconsulting.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd alvoloconsulting
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or
    # pnpm install
    # or
    # yarn install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    # or
    # pnpm run dev
    # or
    # yarn dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📧 Email Configuration

The contact form requires email service configuration to send messages. You have two options:

### Option 1: Resend (Recommended - Free tier available)

1. Sign up at [Resend](https://resend.com) and get your API key
2. Create a `.env.local` file in the root directory:
   ```bash
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=alvoloconsulting@gmail.com
   ```

### Option 2: Gmail with Nodemailer

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App Passwords
3. Create a `.env.local` file in the root directory:
   ```bash
   GMAIL_USER=your_gmail@gmail.com
   GMAIL_APP_PASSWORD=your_gmail_app_password_here
   CONTACT_EMAIL=alvoloconsulting@gmail.com
   ```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Choose one of the email options above
RESEND_API_KEY=your_resend_api_key_here
# OR
GMAIL_USER=your_gmail@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password_here

# Where contact form submissions will be sent
CONTACT_EMAIL=alvoloconsulting@gmail.com
```

**Note:** The `.env.local` file is automatically ignored by Git for security reasons.

## 📁 Project Structure (Simplified)

```
src/
├── app/
│   ├── (pages)/                # Route groups for main pages
│   │   ├── page.tsx            # Main page (Home)
│   │   ├── hizmetlerimiz/page.tsx # Services page
│   │   ├── pricing/page.tsx      # Pricing page
│   │   ├── our-story/page.tsx    # Our Story page
│   │   └── ...                 # Other page routes
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Navigation component
│   │   └── Footer.tsx          # Footer component (if exists)
│   └── sections/               # Components for page sections (Hero, About, Contact, etc.)
│   └── ui/                     # UI elements (buttons, cards, etc.)
├── public/                     # Static assets (images, fonts)
├── styles/                     # Potentially other global styles or theme files (if any)
├── lib/                        # Utility functions, helper scripts (if any)
├── content/                    # (If using Contentlayer) MDX files for blog/services
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🌟 Key Features

*   **Professional Design**: Modern and clean design reflecting the consultancy's nature.
*   **Responsive Layout**: Fully responsive design working across all devices.
*   **Interactive Elements**: Smooth transitions and user-friendly interactions.
*   **Service Showcase**: Detailed presentation of consultancy services.
*   **Pricing Information**: Clear pricing packages.
*   **Company Story**: Narrative about the consultancy's origins.
*   **(Planned) Multilingual Support**: To cater to a wider audience.
*   **(Planned) Content-driven services**: Using a CMS like Contentlayer for easy updates.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (assuming MIT, please create one if it doesn't exist).

## 👤 Author

**Bumin Kağan Çetin**
*   GitHub: [@bumincetin](https://github.com/bumincetin)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
