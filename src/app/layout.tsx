import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
// LanguageProvider is a client component, useLanguage is also for client components
import { LanguageProvider } from "@/contexts/LanguageContext"; 

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
  title: "Alvolo Consulting Danismanlik", // Default to TR, or consider removing if it should be truly dynamic via other means
  description: "Eğitim, bürokrasi, emlak ve adaptasyon süreçlerinizde profesyonel danışmanlık hizmetleri",
  keywords: "Alvolo Consulting Danismanlik, Eğitim, bürokrasi, emlak, adaptasyon, danışmanlık",
  icons: {
    icon: '/icon.png', // Points to public/icon.png
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
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
