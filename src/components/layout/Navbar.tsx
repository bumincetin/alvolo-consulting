'use client';

import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
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
      integrationServices: "Entegrasyon Çözümleri",
      financialServices: "Finansal Danışmanlık",
      pricing: "Fiyatlandırma",
      about: "Hakkımızda",
      ourStory: "Hikayemiz",
      announcements: "Duyurular",
      blog: "Blog",
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
      integrationServices: "Integration Solutions",
      financialServices: "Financial Consulting",
      pricing: "Pricing",
      about: "About Us",
      ourStory: "Our Story",
      announcements: "Announcements",
      blog: "Blog",
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
      integrationServices: "Soluzioni di Integrazione",
      financialServices: "Consulenza Finanziaria",
      pricing: "Prezzi",
      about: "Chi Siamo",
      ourStory: "La Nostra Storia",
      announcements: "Annunci",
      blog: "Blog",
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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const c = getNavbarContent(language);

  const navItems = [
    { label: c.home, href: '/' },
    { label: c.missionVision, href: '/mission-vision' },
    { label: c.about, href: '/about' },
    { label: c.ourStory, href: '/our-story' },
    { label: c.announcements, href: '/announcements' },
    { label: c.blog, href: '/blog' },
    { label: c.contact, href: '/contact' },
  ];

  const serviceItems = [
    { label: c.integrationServices, href: '/services/integration' },
    { label: c.financialServices, href: '/services/financial' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-bg-surface shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <div className="mr-3">
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/1e6b17ra9y0ey2kw192ej/LOGO.png?rlkey=eijo2u9qpo88udlovkmh3chaj&st=gnjfhg84&dl=1&raw=1"
                  alt="ALVOLO CONSULTING"
                  className="h-8 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-brand-text-secondary hover:text-brand-gold transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown with Unified Button */}
            <div className="relative group" ref={servicesRef}>
              <div
                className="flex items-center text-brand-text-secondary hover:text-brand-gold transition-colors duration-300 cursor-pointer select-none px-2 py-1 rounded"
                tabIndex={0}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onFocus={() => setIsServicesOpen(true)}
                onBlur={() => setIsServicesOpen(false)}
              >
                <span
                  onClick={() => {
                    setIsServicesOpen(false);
                    window.location.href = '/services';
                  }}
                  className="pr-1"
                  style={{ outline: 'none' }}
                  tabIndex={-1}
                >
                  {c.services}
                </span>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className="flex items-center pl-1 bg-transparent border-none outline-none cursor-pointer"
                  aria-label={c.services}
                  tabIndex={0}
                  type="button"
                >
                  <FaChevronDown className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-brand-bg-surface rounded-lg shadow-lg py-2 z-50">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-brand-text-secondary hover:bg-brand-bg-primary hover:text-brand-gold transition-colors duration-300"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(2).map((item) => (
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
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-brand-text-primary hover:bg-brand-bg-primary hover:text-brand-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-brand-text-primary mb-2">
                  {c.services}
                </div>
                <div className="pl-4 space-y-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-brand-text-secondary hover:bg-brand-bg-primary hover:text-brand-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navItems.slice(2).map((item) => (
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