"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface Translations {
  [key: string]: any; // Allow nested translation objects
}

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  translations: Translations;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to safely get from localStorage
const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage && ['tr', 'en', 'it'].includes(storedLanguage)) {
      return storedLanguage;
    }
  }
  return 'tr'; // Default to Turkish
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<string>(getInitialLanguage);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTranslations = async (lang: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(`/locales/${lang}/common.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch translations for ${lang}`);
        }
        const data = await response.json();
        setTranslations(data);
        // Update document title when translations load
        if (data.metadata && data.metadata.title) {
          document.title = data.metadata.title;
        }
      } catch (error) {
        console.error("Error loading translations:", error);
        // Fallback to default or handle error appropriately
        if (lang !== 'tr') { // Avoid infinite loop if default fails
            fetchTranslations('tr'); // Attempt to load default Turkish
        }
      }
      setIsLoading(false);
    };

    fetchTranslations(language);
  }, [language]);

  const setLanguage = (lang: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem('preferredLanguage', lang);
    }
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, isLoading }}>
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