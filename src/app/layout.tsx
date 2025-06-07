import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
// LanguageProvider is a client component, useLanguage is also for client components
import { LanguageProvider } from "@/contexts/LanguageContext"; 
import { CookieConsent } from "@/components/CookieConsent";
import { ScriptLoader } from "@/components/ScriptLoader";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

// Metadata can now be exported as this is a Server Component by default
export const metadata: Metadata = {
  title: "Alvolo Consulting Danışmanlık", // Default to TR, or consider removing if it should be truly dynamic via other means
  description: "Eğitim, bürokrasi, emlak ve adaptasyon süreçlerinizde profesyonel danışmanlık hizmetleri",
  keywords: "Alvolo Consulting Danışmanlık, Eğitim, bürokrasi, emlak, adaptasyon, danışmanlık",
  icons: {
    icon: '/ICON.png', // Points to public/icon.png
  },
  // For truly dynamic metadata based on language, you'd typically rely on route parameters (e.g., /[locale])
  // and generateMetadata function, which is not directly compatible with a purely client-side language context for metadata.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang attribute is static here. Dynamic update based on client context is removed to fix the error.
    <html lang="tr" suppressHydrationWarning={true}>
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
        suppressHydrationWarning={true} 
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <LanguageProvider> {/* LanguageProvider is a Client Component and can wrap children here */}
            {children}
            <CookieConsent />
            {/* Google Tag Manager (inline init, only after analytics consent) */}
            <ScriptLoader
              code={`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWK23TBJ');`}
              category="analytics"
              id="gtm-inline"
            />
            {/* Google Tag Manager (external script, only after analytics consent) */}
            <ScriptLoader
              src="https://www.googletagmanager.com/gtm.js?id=GTM-PWK23TBJ"
              category="analytics"
              async
              id="gtm-external"
            />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
