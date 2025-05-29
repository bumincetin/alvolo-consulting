'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations, isLoading, language } = useLanguage();

  const navItems = isLoading || !translations.navbar ? [
    // Default/fallback items
    { label: 'Ana Sayfa', href: '/', lang: 'tr' },
    { label: 'Hizmetler', href: '/hizmetlerimiz', lang: 'tr' },
    { label: 'Fiyatlandırma', href: '/pricing', lang: 'tr' },
    { label: 'Hakkımızda', href: '/#about', lang: 'tr' },
    { label: 'Hikayemiz', href: '/our-story', lang: 'tr' },
    { label: 'İletişim', href: '/#contact', lang: 'tr' },
  ] : [
    { label: translations.navbar.home, href: '/', lang: language },
    { label: translations.navbar.services, href: '/hizmetlerimiz', lang: language },
    { label: translations.navbar.pricing, href: '/pricing', lang: language },
    { label: translations.navbar.about, href: '/#about', lang: language },
    { label: translations.navbar.ourStory, href: '/our-story', lang: language },
    { label: translations.navbar.contact, href: '/#contact', lang: language },
  ];

  const brandName = isLoading || !translations.navbar ? "Cetin & Aslan Danismanlik" : translations.navbar.brand;

  return (
    <nav className="fixed w-full bg-brand-bg-surface shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-brand-blue hover:text-brand-gold transition-colors">
              {brandName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-brand-text-secondary hover:text-brand-gold transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text-secondary hover:text-brand-gold focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-brand-bg-surface">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-brand-text-primary hover:bg-brand-bg-primary hover:text-brand-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-around px-5">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 