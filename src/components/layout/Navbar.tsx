'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const getNavbarContent = (lang: string) => {
  const content = {
    tr: {
      brand: "Alvolo Danışmanlık",
      home: "Ana Sayfa",
      missionVision: "Misyon & Vizyon",
      services: "Hizmetlerimiz",
      pricing: "Fiyatlandırma",
      about: "Hakkımızda",
      ourStory: "Hikayemiz",
      realEstateAgents: "Emlakçılar İçin",
      contact: "İletişim",
      openMenu: "Menüyü Aç",
      closeMenu: "Menüyü Kapat"
    },
    en: {
      brand: "Alvolo Consulting",
      home: "Home",
      missionVision: "Mission & Vision",
      services: "Services",
      pricing: "Pricing",
      about: "About Us",
      ourStory: "Our Story",
      realEstateAgents: "For Real Estate Agents",
      contact: "Contact",
      openMenu: "Open Menu",
      closeMenu: "Close Menu"
    },
    it: {
      brand: "Alvolo Consulenza",
      home: "Pagina Iniziale",
      missionVision: "Missione & Visione",
      services: "Servizi",
      pricing: "Prezzi",
      about: "Chi Siamo",
      ourStory: "La Nostra Storia",
      realEstateAgents: "Per Agenti Immobiliari",
      contact: "Contatti",
      openMenu: "Apri Menu",
      closeMenu: "Chiudi Menu"
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const c = getNavbarContent(language);

  const navItems = [
    { label: c.home, href: '/' },
    { label: c.missionVision, href: '/mission-vision' },
    { label: c.services, href: '/hizmetlerimiz' },
    { label: c.pricing, href: '/pricing' },
    { label: c.about, href: '/about' },
    { label: c.ourStory, href: '/our-story' },
    { label: c.realEstateAgents, href: '/real-estate-agents' },
    { label: c.contact, href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-bg-surface shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <div className="mr-3">
                <Image 
                  src="/LOGO.png" 
                  alt="Alvolo Consulting Logo" 
                  width={170}
                  height={110}
                />
              </div>
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
              aria-label={isOpen ? c.closeMenu : c.openMenu}
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
              <div className="flex items-center justify-center px-5">
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