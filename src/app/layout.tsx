import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
// LanguageProvider is a client component, useLanguage is also for client components
import { LanguageProvider } from "@/contexts/LanguageContext"; 
import { CookieConsent } from "@/components/CookieConsent";
import { ScriptLoader } from "@/components/ScriptLoader";
import Footer from "@/components/layout/Footer";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ClientLayout from "./ClientLayout";

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
  title: "Alvolo Consulting | Financial & Integration Solutions for Italy",
  description: "Professional, multilingual consulting for doing business in Italy. Company formation, financial consulting, integration, and legal services for international clients. Trusted by hundreds of happy clients.",
  keywords: [
    "Alvolo Consulting", "Italy business consulting", "company formation Italy", 
    "financial consulting Italy", "integration solutions Italy", "İtalya danışmanlık", "business setup Italy", 
    "Italian market entry", "legal consulting Italy", "international clients Italy", "italy startup package", 
    "italy expansion package", "italy company formation", "italy financial consulting", "italy integration solutions", 
    "italy legal consulting", "italy international clients","italya finansal danışmanlık", "italya girişimcilik paketi", 
    "italya genişleme paketi", "italya şirket kurulumu", "italya finansal danışmanlık", "italya entegrasyon çözümleri", 
    "italya yasal danışmanlık", "italya uluslararası müşteriler"
  ],
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
  // Add page transition animation using AnimatePresence
  // This must be a client component, so we need a wrapper
  // We'll create a ClientLayout for this
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data: blob:; font-src 'self' https: data:; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; style-src 'self' https: 'unsafe-inline';" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
        suppressHydrationWarning={true} 
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
            <Footer />
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

// ClientLayout.tsx (to be created in the same directory)
// This will wrap children with AnimatePresence and handle route transitions
