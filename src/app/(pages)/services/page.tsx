'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const getServicesContent = (lang: string) => {
  const content = {
    tr: {
      title: "Hizmetlerimiz",
      subtitle: "Size özel çözümler sunuyoruz",
      integrationTitle: "Entegrasyon Çözümleri",
      integrationDesc: "İtalya'ya taşınırken rahat kalmanızı sağlayacak entegrasyon çözümleri",
      financialTitle: "Finansal Danışmanlık",
      financialDesc: "Finansal hedeflerinize ulaşmanız için profesyonel danışmanlık hizmetleri",
      learnMore: "Detaylı Bilgi",
    },
    en: {
      title: "Our Services",
      subtitle: "Tailored solutions for your needs",
      integrationTitle: "Integration Solutions",
      integrationDesc: "Integration solutions to help you relax when you are relocating to Italy",
      financialTitle: "Financial Consulting",
      financialDesc: "Professional consulting services to help you achieve your financial goals in Italy",
      learnMore: "Learn More",
    },
    it: {
      title: "I Nostri Servizi",
      subtitle: "Soluzioni su misura per le tue esigenze",
      integrationTitle: "Soluzioni di Integrazione",
      integrationDesc: "Soluzioni di integrazione per aiutarti a rilassarti quando ti stai trasferendo in Italia",
      financialTitle: "Consulenza Finanziaria",
      financialDesc: "Servizi di consulenza professionale per aiutarti a raggiungere i tuoi obiettivi finanziari in Italia",
      learnMore: "Scopri di Più",
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const ServicesPage = () => {
  const { language } = useLanguage();
  const c = getServicesContent(language);

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-bg-primary to-blue-50">
        <div className="container mx-auto px-6">
          <div className="w-full max-w-5xl mx-auto mb-12">
            <Image
              src="/services2.png"
              alt="Our Services Overview"
              width={1200}
              height={400}
              className="w-full h-auto rounded-2xl object-cover shadow-md"
              priority
            />
          </div>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
              {c.title}
            </h1>
            <div className="h-1 w-24 bg-brand-gold rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-brand-text-secondary">
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/services/integration" className="group">
              <div className="bg-brand-bg-surface rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <h2 className="text-2xl font-bold text-brand-blue mb-4">
                  {c.integrationTitle}
                </h2>
                <p className="text-brand-text-secondary mb-6">
                  {c.integrationDesc}
                </p>
                <div className="flex items-center text-brand-gold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">{c.learnMore}</span>
                  <FaArrowRight />
                </div>
              </div>
            </Link>

            <Link href="/services/financial" className="group">
              <div className="bg-brand-bg-surface rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <h2 className="text-2xl font-bold text-brand-blue mb-4">
                  {c.financialTitle}
                </h2>
                <p className="text-brand-text-secondary mb-6">
                  {c.financialDesc}
                </p>
                <div className="flex items-center text-brand-gold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">{c.learnMore}</span>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage; 