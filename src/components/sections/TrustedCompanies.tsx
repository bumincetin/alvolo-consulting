'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const getTrustedCompaniesContent = (lang: string) => {
  const content = {
    tr: {
      title: "Güvenilir Ortaklarımız",
      subtitle: "İtalya'nın önde gelen kurumları ve şirketleri ile çalışıyoruz",
      companies: [
        {
          name: "Bocconi Üniversitesi",
          logo: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          description: "İtalya'nın prestijli işletme üniversitesi"
        },
        {
          name: "Milano Belediyesi",
          logo: "https://www.dropbox.com/scl/fi/1e6b17ra9y0ey2kw192ej/LOGO.png?rlkey=eijo2u9qpo88udlovkmh3chaj&st=gnjfhg84&dl=1",
          description: "Resmi belediye ortaklığı"
        },
        {
          name: "İtalyan Ticaret Odası",
          logo: "https://www.dropbox.com/scl/fi/kyiy7zmfhp2qm0sucd7nt/ICON.png?rlkey=3wzqu5r27zaag3j8mpawjydpy&st=qjoffk41&dl=1",
          description: "Ticaret ve iş geliştirme desteği"
        },
        {
          name: "UniCredit Bank",
          logo: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          description: "Finansal hizmetler ortağı"
        },
        {
          name: "İtalyan Göçmenlik Bürosu",
          logo: "https://www.dropbox.com/scl/fi/y6en2p5fi5mg8clye3cnt/milanoyeni.jpg?rlkey=dfca5yg6f7mzeju965vbr6f8f&st=gsr57h2m&dl=1",
          description: "Resmi vize ve göçmenlik işlemleri"
        },
        {
          name: "Milano Teknik Üniversitesi",
          logo: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          description: "Teknoloji ve inovasyon ortaklığı"
        }
      ]
    },
    en: {
      title: "Our Trusted Partners",
      subtitle: "Working with Italy's leading institutions and companies",
      companies: [
        {
          name: "Bocconi University",
          logo: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          description: "Italy's prestigious business university"
        },
        {
          name: "Milan Municipality",
          logo: "https://www.dropbox.com/scl/fi/1e6b17ra9y0ey2kw192ej/LOGO.png?rlkey=eijo2u9qpo88udlovkmh3chaj&st=gnjfhg84&dl=1",
          description: "Official municipal partnership"
        },
        {
          name: "Italian Chamber of Commerce",
          logo: "https://www.dropbox.com/scl/fi/kyiy7zmfhp2qm0sucd7nt/ICON.png?rlkey=3wzqu5r27zaag3j8mpawjydpy&st=qjoffk41&dl=1",
          description: "Trade and business development support"
        },
        {
          name: "UniCredit Bank",
          logo: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          description: "Financial services partner"
        },
        {
          name: "Italian Immigration Office",
          logo: "https://www.dropbox.com/scl/fi/y6en2p5fi5mg8clye3cnt/milanoyeni.jpg?rlkey=dfca5yg6f7mzeju965vbr6f8f&st=gsr57h2m&dl=1",
          description: "Official visa and immigration procedures"
        },
        {
          name: "Milan Technical University",
          logo: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          description: "Technology and innovation partnership"
        }
      ]
    },
    it: {
      title: "I Nostri Partner Fidati",
      subtitle: "Lavoriamo con le principali istituzioni e aziende italiane",
      companies: [
        {
          name: "Università Bocconi",
          logo: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          description: "L'università di business prestigiosa d'Italia"
        },
        {
          name: "Comune di Milano",
          logo: "https://www.dropbox.com/scl/fi/1e6b17ra9y0ey2kw192ej/LOGO.png?rlkey=eijo2u9qpo88udlovkmh3chaj&st=gnjfhg84&dl=1",
          description: "Partnership municipale ufficiale"
        },
        {
          name: "Camera di Commercio Italiana",
          logo: "https://www.dropbox.com/scl/fi/kyiy7zmfhp2qm0sucd7nt/ICON.png?rlkey=3wzqu5r27zaag3j8mpawjydpy&st=qjoffk41&dl=1",
          description: "Supporto per il commercio e sviluppo aziendale"
        },
        {
          name: "Banca UniCredit",
          logo: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          description: "Partner per servizi finanziari"
        },
        {
          name: "Ufficio Immigrazione Italiano",
          logo: "https://www.dropbox.com/scl/fi/y6en2p5fi5mg8clye3cnt/milanoyeni.jpg?rlkey=dfca5yg6f7mzeju965vbr6f8f&st=gsr57h2m&dl=1",
          description: "Procedure ufficiali per visti e immigrazione"
        },
        {
          name: "Politecnico di Milano",
          logo: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          description: "Partnership per tecnologia e innovazione"
        }
      ]
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const TrustedCompanies = () => {
  const { language } = useLanguage();
  const c = getTrustedCompaniesContent(language);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === c.companies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [c.companies.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            {c.title}
          </h2>
          <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Sliding Showcase */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {c.companies.map((company, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-brand-bg-primary to-blue-50 rounded-2xl shadow-xl p-12 text-center">
                    <div className="mb-8">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-32 h-32 mx-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-blue mb-4">
                      {company.name}
                    </h3>
                    <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">
                      {company.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {c.companies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-gold scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex(prev => prev === 0 ? c.companies.length - 1 : prev - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous company"
          >
            <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex(prev => prev === c.companies.length - 1 ? 0 : prev + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next company"
          >
            <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Company Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {c.companies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 mx-auto object-contain mb-4"
                />
                <h4 className="text-sm font-semibold text-brand-text-primary">
                  {company.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies; 