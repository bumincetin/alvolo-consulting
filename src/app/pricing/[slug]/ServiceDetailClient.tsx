'use client';

import {
  FaChevronLeft, FaInfoCircle, FaListUl,
  FaQuestionCircle, FaRegFileAlt,
} from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { getServiceDetails } from './serviceData';   // ✅ now a clean import

export const runtime = 'edge';

interface ServiceDetailClientProps {
  slug: string;
}

export default function ServiceDetailClient({ slug }: ServiceDetailClientProps) {
    const { language } = useLanguage();
    const service = getServiceDetails(slug, language); // Use slug directly
  
    if (!service) {
      return (
        <>
          <Navbar />
          <div className="min-h-screen bg-brand-bg-primary pt-20 flex flex-col items-center justify-center text-center px-6">
            <FaQuestionCircle className="text-brand-gold text-6xl mb-4" />
            <h1 className="text-4xl font-bold text-brand-blue mb-4">
              {language === 'tr' ? 'Hizmet Bulunamadı' : language === 'it' ? 'Servizio Non Trovato' : 'Service Not Found'}
            </h1>
            <p className="text-xl text-brand-text-secondary mb-8">
              {language === 'tr' ? 'Aradığınız hizmet detay sayfası mevcut değil veya taşınmış olabilir.' : 
               language === 'it' ? 'La pagina dei dettagli del servizio che stai cercando non esiste o potrebbe essere stata spostata.' :
               'The service detail page you are looking for does not exist or may have been moved.'}
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center px-6 py-3 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg"
            >
              <FaChevronLeft className="mr-2" />
              {language === 'tr' ? 'Tüm Fiyatlara Geri Dön' : language === 'it' ? 'Torna a Tutti i Prezzi' : 'Back to All Pricing'}
            </Link>
          </div>
        </>
      );
    }
  
    const renderSectionIcon = (type: string) => {
      switch (type) {
        case 'list': return <FaListUl className="text-brand-blue text-2xl mr-3 flex-shrink-0" />;
        case 'steps': return <FaRegFileAlt className="text-brand-blue text-2xl mr-3 flex-shrink-0" />;
        case 'paragraph': return <FaInfoCircle className="text-brand-blue text-2xl mr-3 flex-shrink-0" />;
        default: return null;
      }
    }
  
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-brand-bg-primary pt-20">
          <div className="container mx-auto px-6 py-12">
            {/* Back to pricing link */}
            <div className="mb-8">
              <Link 
                href="/pricing"
                className="inline-flex items-center text-brand-blue hover:text-brand-gold transition-colors duration-300 group"
              >
                <FaChevronLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" /> 
                {service.goBackText}
              </Link>
            </div>
  
            <div className="bg-brand-bg-surface shadow-xl rounded-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-3">{service.title}</h1>
                <p className="text-xl text-brand-text-secondary">{service.pageSubtitle}</p>
              </div>
  
              {service.mainImage && (
                <div className="mb-10 rounded-lg overflow-hidden shadow-lg relative w-full h-[400px]">
                  <Image 
                    src={service.mainImage} 
                    alt={service.title} 
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
  
              <div className="prose prose-lg max-w-none text-brand-text-primary mx-auto mb-10">
                <p>{service.introduction}</p>
              </div>
  
              {service.sections.map((section, index) => (
                <div key={index} className="mb-8 p-6 bg-brand-bg-primary rounded-lg shadow">
                  <div className="flex items-start mb-3">
                    {renderSectionIcon(section.type)}
                    <h2 className="text-2xl font-semibold text-brand-blue">{section.title}</h2>
                  </div>
                  {section.type === 'list' && section.items && (
                    <ul className="list-disc list-inside space-y-2 pl-5 text-brand-text-secondary">
                      {section.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                  {section.type === 'steps' && section.items && (
                    <ol className="list-decimal list-inside space-y-3 pl-5 text-brand-text-secondary">
                      {section.items.map((item, i) => <li key={i} className="mb-1">{item}</li>)}
                    </ol>
                  )}
                  {section.type === 'paragraph' && section.content && (
                    <p className="text-brand-text-secondary whitespace-pre-line">{section.content}</p>
                  )}
                </div> 
              ))}
  
              {service.priceDisplay && (
                <div className="my-10 text-center p-6 bg-brand-gold/10 rounded-lg">
                  <p className="text-xl font-semibold text-brand-blue">{service.priceDisplay}</p>
                </div>
              )}
  
              <div className="mt-12 text-center">
                <p className="text-lg text-brand-text-secondary mb-4">{service.contactPrompt}</p>
                <Link
                  href="/#contact" // Assuming your contact section is on the homepage
                  className="inline-block px-10 py-4 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg text-lg font-semibold"
                >
                  {service.contactButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } 
