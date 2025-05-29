"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { translations, isLoading } = useLanguage();

  if (isLoading || !translations.heroSection) {
    return (
      <section className="relative h-screen flex items-center justify-center bg-brand-bg-primary">
        <p className="text-brand-text-secondary">Loading hero content...</p>
      </section>
    );
  }

  const { mainHeading, subheading1, subheading2, contactButton, servicesButton } = translations.heroSection;
  const brandName = translations.navbar?.brand || mainHeading;

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-brand-bg-primary to-blue-50">
      {/* Turkish pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/pattern.png')] bg-repeat"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-blue mb-2">
                {brandName}
              </h1>
              <div className="h-1 w-1/3 bg-brand-gold rounded-full mb-6 mx-auto md:mx-0"></div>
            </div>
            <p className="text-xl md:text-2xl text-brand-text-primary mb-8">
              {subheading1}
              <span className="block mt-2 font-semibold text-brand-blue">
                {subheading2}
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg hover:shadow-xl text-center"
              >
                {contactButton}
              </a>
              <Link
                href="/hizmetlerimiz"
                className="px-8 py-4 border-2 border-brand-gold text-brand-gold rounded-lg hover:bg-yellow-50 hover:text-yellow-700 transition duration-300 text-center"
              >
                {servicesButton}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative mt-10 md:mt-0">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent rounded-xl"></div> */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-bg-primary to-transparent rounded-xl"></div>
              <Image
                src="/milano2.jpg"
                alt="Milano"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg-primary to-transparent"></div>
    </section>
  );
};

export default Hero; 