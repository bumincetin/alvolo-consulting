"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="relative">
      <select
        value={language}
        onChange={handleChange}
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