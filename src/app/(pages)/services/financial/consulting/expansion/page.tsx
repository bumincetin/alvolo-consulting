"use client";
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { FaCheck, FaCheckCircle, FaRegChartBar, FaRegHandshake, FaGlobe, FaRegLightbulb, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const getExpansionContent = (lang: string) => {
  const content = {
    tr: {
      title: "İtalya'ya Açılma Paketi",
      hero: {
        headline: "İtalya Pazarında Büyüme İçin Stratejik Rehberlik",
        sub: "Türk KOBİ'leri ve işletmeler için İtalya'ya açılmada kapsamlı finansal ve stratejik danışmanlık.",
        cta: "Hemen Başvurun"
      },
      process: {
        title: "Süreç Adımları",
        steps: [
          { icon: <FaRegLightbulb />, label: "Pazar ve Rekabet Analizi" },
          { icon: <FaGlobe />, label: "Uluslararası Ticaret ve Finans" },
          { icon: <FaRegChartBar />, label: "Yatırım ve Fon Yönetimi" },
          { icon: <FaRegHandshake />, label: "Risk Yönetimi ve Sigorta" },
          { icon: <FaCheckCircle />, label: "Sürekli Finansal Danışmanlık" }
        ]
      },
      features: {
        title: "Neleri Kapsar?",
        items: [
          "Pazar analizi ve rekabet değerlendirmesi",
          "Yatırım danışmanlığı ve fon yönetimi",
          "Uluslararası ticaret ve finans danışmanlığı",
          "Risk yönetimi ve sigorta planlaması",
          "Sürekli finansal danışmanlık ve raporlama"
        ]
      },
      benefits: {
        title: "Faydaları",
        items: [
          "İtalya pazarına hızlı ve güvenli giriş",
          "Stratejik büyüme ve yatırım fırsatları",
          "Uluslararası finansal uyumluluk",
          "Uzman ekiple sürekli destek"
        ]
      },
      faq: {
        title: "Sık Sorulan Sorular",
        questions: [
          { q: "İtalya'da pazar analizi nasıl yapılır?", a: "Uzman ekibimizle detaylı pazar ve rekabet analizi sunuyoruz." },
          { q: "Uluslararası finansal uyumluluk nedir?", a: "Tüm yasal ve finansal gerekliliklere tam uyum sağlıyoruz." },
          { q: "Sürekli danışmanlık neyi kapsar?", a: "Yatırım, finans, vergi ve risk yönetimi dahil tüm süreçlerde yanınızdayız." }
        ]
      }
    },
    en: {
      title: "Italy Expansion Package",
      hero: {
        headline: "Strategic Guidance for Growth in the Italian Market",
        sub: "Comprehensive financial and strategic consulting for Turkish SMEs and businesses expanding into Italy.",
        cta: "Apply Now"
      },
      process: {
        title: "Our Process",
        steps: [
          { icon: <FaRegLightbulb />, label: "Market & Competition Analysis" },
          { icon: <FaGlobe />, label: "International Trade & Finance" },
          { icon: <FaRegChartBar />, label: "Investment & Fund Management" },
          { icon: <FaRegHandshake />, label: "Risk Management & Insurance" },
          { icon: <FaCheckCircle />, label: "Ongoing Financial Consulting" }
        ]
      },
      features: {
        title: "What's Included?",
        items: [
          "Market analysis and competition assessment",
          "Investment advisory and fund management",
          "International trade and finance consulting",
          "Risk management and insurance planning",
          "Ongoing financial consulting and reporting"
        ]
      },
      benefits: {
        title: "Benefits",
        items: [
          "Fast and secure entry into the Italian market",
          "Strategic growth and investment opportunities",
          "International financial compliance",
          "Continuous support from our expert team"
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          { q: "How is market analysis conducted in Italy?", a: "Our expert team provides detailed market and competition analysis." },
          { q: "What is international financial compliance?", a: "We ensure full compliance with all legal and financial requirements." },
          { q: "What does ongoing consulting include?", a: "We support you in all processes including investment, finance, tax, and risk management." }
        ]
      }
    },
    it: {
      title: "Pacchetto Espansione in Italia",
      hero: {
        headline: "Guida Strategica per la Crescita nel Mercato Italiano",
        sub: "Consulenza finanziaria e strategica completa per PMI e aziende turche che si espandono in Italia.",
        cta: "Candidati Ora"
      },
      process: {
        title: "Il Nostro Processo",
        steps: [
          { icon: <FaRegLightbulb />, label: "Analisi di Mercato e Concorrenza" },
          { icon: <FaGlobe />, label: "Commercio e Finanza Internazionale" },
          { icon: <FaRegChartBar />, label: "Gestione Investimenti e Fondi" },
          { icon: <FaRegHandshake />, label: "Gestione del Rischio e Assicurazione" },
          { icon: <FaCheckCircle />, label: "Consulenza Finanziaria Continua" }
        ]
      },
      features: {
        title: "Cosa Include?",
        items: [
          "Analisi di mercato e valutazione della concorrenza",
          "Consulenza sugli investimenti e gestione dei fondi",
          "Consulenza su commercio e finanza internazionale",
          "Gestione del rischio e pianificazione assicurativa",
          "Consulenza finanziaria continua e reportistica"
        ]
      },
      benefits: {
        title: "Vantaggi",
        items: [
          "Ingresso rapido e sicuro nel mercato italiano",
          "Opportunità di crescita strategica e investimento",
          "Conformità finanziaria internazionale",
          "Supporto continuo dal nostro team di esperti"
        ]
      },
      faq: {
        title: "Domande Frequenti",
        questions: [
          { q: "Come viene condotta l'analisi di mercato in Italia?", a: "Il nostro team di esperti fornisce un'analisi dettagliata del mercato e della concorrenza." },
          { q: "Cosa significa conformità finanziaria internazionale?", a: "Garantiamo la piena conformità a tutti i requisiti legali e finanziari." },
          { q: "Cosa include la consulenza continua?", a: "Ti supportiamo in tutti i processi, inclusi investimenti, finanza, fiscalità e gestione del rischio." }
        ]
      }
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const ExpansionPage = () => {
  const { language } = useLanguage();
  const c = getExpansionContent(language);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-bg-primary to-blue-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">{c.title}</h1>
        <h2 className="text-2xl text-brand-gold mb-4">{c.hero.headline}</h2>
        <p className="text-lg text-brand-text-secondary mb-8 max-w-2xl mx-auto">{c.hero.sub}</p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-brand-gold text-white font-semibold rounded hover:bg-brand-gold/90 transition">{c.hero.cta}</Link>
      </section>
      {/* Process Timeline */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">{c.process.title}</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {c.process.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-3xl text-brand-gold mb-2">{step.icon}</div>
                <div className="text-base font-medium text-brand-blue text-center">{step.label}</div>
                {idx < c.process.steps.length - 1 && (
                  <div className="hidden md:block h-16 w-1 bg-brand-gold/30 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features & Benefits */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-brand-blue mb-4">{c.features.title}</h3>
            <ul className="space-y-3">
              {c.features.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <FaCheck className="text-brand-gold mt-[6px] mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-blue mb-4">{c.benefits.title}</h3>
            <ul className="space-y-3">
              {c.benefits.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <FaCheck className="text-brand-gold mt-[6px] mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">{c.faq.title}</h3>
          <div className="space-y-4">
            {c.faq.questions.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:border-brand-gold transition-colors duration-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h4 className="text-lg font-semibold text-brand-blue">{item.q}</h4>
                  <FaChevronDown className={`text-brand-gold transition-transform duration-200 ${openFaqs.includes(idx) ? 'transform rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-200 ${openFaqs.includes(idx) ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <p className="text-brand-text-secondary">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue/90 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">{c.hero.headline}</h3>
        <p className="text-lg text-brand-blue/90 mb-8">{c.hero.sub}</p>
        <Link href="/contact" className="inline-block px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-brand-blue transition-colors duration-200">{c.hero.cta}</Link>
      </section>
    </>
  );
};

export default ExpansionPage; 