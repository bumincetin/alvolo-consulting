"use client";

import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { translations, isLoading } = useLanguage();

  if (isLoading || !translations.aboutSection) {
    return (
      <section id="about" className="py-20 bg-brand-bg-primary">
        <p className="text-center text-brand-text-secondary">Loading about section...</p>
      </section>
    );
  }

  const { 
    title,
    paragraph1,
    paragraph2,
    paragraph3,
    valuesTitle,
    value1,
    value2,
    value3,
    value4,
    value5,
    experienceStat,
    happyClientsStat 
  } = translations.aboutSection;

  const valuesList = [value1, value2, value3, value4, value5];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-brand-bg-primary to-blue-50">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative w-full h-[600px] transform hover:scale-[1.02] transition-transform duration-500">
              {/* <div className="absolute -inset-4 bg-blue-600/10 rounded-xl blur-lg"></div> */}
              <Image
                src="/selmazeynepesra.jpg"
                alt={translations.navbar?.brand || "Team Image"}
                fill
                className="object-cover rounded-xl shadow-xl"
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-brand-blue mb-2">
                {title}
              </h2>
              <div className="h-1 w-1/3 bg-brand-gold rounded-full mb-6"></div>
            </div>
            <p className="text-lg text-brand-text-primary mb-8">
              {paragraph1}
              <span className="block mt-4 font-semibold text-brand-blue">
                {paragraph2}
              </span>
              <span className="block mt-4 text-brand-text-secondary">
                {paragraph3}
              </span>
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-brand-blue mb-4">
                {valuesTitle}
              </h3>
              <ul className="space-y-3">
                {valuesList.map((value, index) => (
                  value && (
                    <li key={index} className="flex items-center gap-3 group">
                      <FaCheck className="text-brand-gold flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-brand-text-secondary group-hover:text-brand-blue transition-colors duration-300">{value}</span>
                    </li>
                  )
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-6 bg-brand-bg-surface backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-brand-gold mb-2">28+</div>
                <div className="text-brand-text-secondary">{experienceStat}</div>
              </div>
              <div className="p-6 bg-brand-bg-surface backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-brand-gold mb-2">1000+</div>
                <div className="text-brand-text-secondary">{happyClientsStat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 