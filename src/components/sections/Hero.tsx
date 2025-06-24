"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const getHeroContent = (lang: string) => {
  const content = {
    tr: {
      brandName: "Alvolo Danışmanlık",
      mainHeading: "İtalya'da Hayallerinize Ulaşın",
      subheading1: "İtalya'da iş, yaşam, entegrasyon ve finansal süreçlerinizde",
      subheading2: "profesyonel danışmanlık hizmetleri.",
      contactButton: "Bize Ulaşın",
      servicesButton: "Hizmetlerimiz"
    },
    en: {
      brandName: "Alvolo Consulting",
      mainHeading: "Reach Your Dreams in Italy",
      subheading1: "For your business, life, integration, and financial needs in Italy",
      subheading2: "professional consultancy services.",
      contactButton: "Contact Us",
      servicesButton: "Our Services"
    },
    it: {
      brandName: "Alvolo Consulenza",
      mainHeading: "Raggiungi i Tuoi Sogni in Italia",
      subheading1: "Per le tue esigenze di business, vita, integrazione e finanza in Italia",
      subheading2: "servizi professionali di consulenza.",
      contactButton: "Contattaci",
      servicesButton: "I Nostri Servizi"
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const Hero = () => {
  const { language } = useLanguage();
  const c = getHeroContent(language);

  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex flex-col justify-center md:items-center bg-gradient-to-r from-brand-bg-primary to-blue-50 pt-20 md:pt-0">
      {/* Turkish pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://dl.dropboxusercontent.com/scl/fi/lj4pmd2e0w91pvxm8m26k/pattern.svg?rlkey=ujqsmsszwn5f1xrmikll2lb5b&st=zk7ed1og&dl=1&raw=1')] bg-repeat"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold mb-2" style={{color: 'var(--logo-blue)'}}>
                {c.brandName}
              </h1>
              <div className="h-1 w-1/3 rounded-full mb-6 mx-auto md:mx-0" style={{backgroundColor: 'var(--logo-orange)'}}></div>
            </div>
            <p className="text-xl md:text-2xl text-brand-text-primary mb-8">
              {c.subheading1}
              <span className="block mt-2 font-semibold text-brand-blue">
                {c.subheading2}
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="px-8 py-4 text-white rounded-lg transition duration-300 shadow-lg hover:shadow-xl text-center"
                style={{backgroundColor: 'var(--logo-orange)'}}
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--logo-orange-ton)'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--logo-orange)'}
              >
                {c.contactButton}
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 rounded-lg transition duration-300 text-center"
                style={{borderColor: 'var(--logo-blue)', color: 'var(--logo-blue)'}}
                onMouseOver={e => {e.currentTarget.style.backgroundColor = 'var(--logo-orange-ton)'; e.currentTarget.style.color = 'white';}}
                onMouseOut={e => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--logo-blue)';}}
              >
                {c.servicesButton}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative mt-10 md:mt-0">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent rounded-xl"></div> */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-bg-primary to-transparent rounded-xl"></div>
              <Image
                src="https://dl.dropboxusercontent.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1&raw=1"
                alt="Milano"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
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