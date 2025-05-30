"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  // Add a simple translations object if you want to store some static strings here
  // translations: any; 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState('tr'); // Default to Turkish
  // const [translations, setTranslations] = useState({}); // If loading static translations here

  // Function to set language and potentially persist it (e.g., to localStorage)
  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    // if (typeof window !== "undefined") {
    //   localStorage.setItem('language', lang);
    // }
    // Here you could also set static translations based on lang if not loading from files
    // e.g., if (lang === 'en') setTranslations({ greeting: 'Hello' });
  };

  // useEffect(() => {
  //   // Optionally load persisted language
  //   const storedLanguage = typeof window !== "undefined" ? localStorage.getItem('language') : null;
  //   if (storedLanguage) {
  //     setLanguageState(storedLanguage);
  //   }
  //   // Load initial static translations or based on storedLanguage
  // }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage /*, translations */ }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 