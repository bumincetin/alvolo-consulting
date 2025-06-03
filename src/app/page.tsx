"use client";

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import { useLanguage } from '@/contexts/LanguageContext';

export const runtime = 'edge';

const overlayText = {
  tr: {
    brand: 'Alvolo Danışmanlık',
    subtitle: "İtalya'da Hayallerinize Ulaşın"
  },
  en: {
    brand: 'Alvolo Consulting',
    subtitle: 'Reach Your Dreams in Italy'
  },
  it: {
    brand: 'Alvolo Consulenza',
    subtitle: 'Raggiungi i Tuoi Sogni in Italia'
  }
};

export default function Home() {
  const { language } = useLanguage();
  const text = overlayText[language as keyof typeof overlayText] || overlayText.tr;

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Video Background Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="/LOGO.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
          onError={(e) => {
            console.error('Video loading error:', e);
          }}
        >
          <source src="/arka2.mp4" type="video/mp4" />
          {/* fallback text for very old browsers */}
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              {text.brand}
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              {text.subtitle}
            </p>
          </div>
        </div>
      </div>
      

      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
