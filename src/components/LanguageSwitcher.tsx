"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage, isLoading } = useLanguage();

  if (isLoading) {
    return <div className="w-20 h-10 rounded-md bg-gray-200 animate-pulse"></div>; // Placeholder while loading
  }

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}; 