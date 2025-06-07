"use client";
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { FaCheck, FaRegLightbulb, FaRegBuilding, FaRegChartBar, FaRegHandshake, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const getStartupContent = (lang: string) => {
  const content = {
    tr: {
      title: "Başlangıç Paketi",
      hero: {
        headline: "İtalya'da Şirket Kurulumunda Güvenilir Ortağınız",
        sub: "Girişimciler ve yatırımcılar için anahtar teslim finansal ve yasal danışmanlık. Tüm süreç boyunca yanınızdayız.",
        cta: "Hemen Başvurun"
      },
      process: {
        title: "Süreç Adımları",
        steps: [
          { icon: <FaRegLightbulb />, label: "İhtiyaç Analizi ve Danışmanlık" },
          { icon: <FaRegBuilding />, label: "Şirket Türü Seçimi ve Kuruluş" },
          { icon: <FaRegChartBar />, label: "Finansal Planlama ve Bütçe" },
          { icon: <FaRegHandshake />, label: "Banka Hesabı ve Resmi Kayıtlar" },
          { icon: <FaCheck />, label: "İlk Yıl Sürekli Destek" }
        ]
      },
      features: {
        title: "Neleri Kapsar?",
        items: [
          "Şirket türü seçimi ve kuruluş işlemleri",
          "Vergi numarası ve yasal kayıtlar",
          "Banka hesabı açılışı ve finansal sistem entegrasyonu",
          "İlk yıl finansal danışmanlık ve raporlama",
          "Bütçe ve nakit akışı planlaması",
          "Vergi planlaması ve uyumluluk"
        ]
      },
      benefits: {
        title: "Faydaları",
        items: [
          "Hızlı ve sorunsuz şirket kuruluşu",
          "Yasal ve finansal risklerin minimize edilmesi",
          "Uzman ekiple birebir danışmanlık",
          "İlk yıl boyunca sürekli destek"
        ]
      },
      faq: {
        title: "Sık Sorulan Sorular",
        questions: [
          { q: "İtalya'da şirket kurmak ne kadar sürer?", a: "Genellikle 2-4 hafta içinde tamamlanır. Tüm süreçte yanınızdayız." },
          { q: "Hangi belgeler gereklidir?", a: "Kimlik, adres kanıtı, iş planı ve sermaye kanıtı gereklidir." },
          { q: "Banka hesabı açmak zor mu?", a: "Tüm süreci sizin adınıza kolaylaştırıyoruz." }
        ]
      }
    },
    en: {
      title: "Startup Package",
      hero: {
        headline: "Your Trusted Partner for Company Formation in Italy",
        sub: "Turnkey financial and legal consulting for entrepreneurs and investors. We guide you every step of the way.",
        cta: "Apply Now"
      },
      process: {
        title: "Our Process",
        steps: [
          { icon: <FaRegLightbulb />, label: "Needs Analysis & Consulting" },
          { icon: <FaRegBuilding />, label: "Company Type Selection & Incorporation" },
          { icon: <FaRegChartBar />, label: "Financial Planning & Budgeting" },
          { icon: <FaRegHandshake />, label: "Bank Account & Legal Registrations" },
          { icon: <FaCheck />, label: "Continuous Support (Year 1)" }
        ]
      },
      features: {
        title: "What's Included?",
        items: [
          "Company type selection and incorporation",
          "Tax ID and legal registrations",
          "Bank account opening and financial system integration",
          "First-year financial consulting and reporting",
          "Budget and cash flow planning",
          "Tax planning and compliance"
        ]
      },
      benefits: {
        title: "Benefits",
        items: [
          "Fast and smooth company setup",
          "Minimized legal and financial risks",
          "One-on-one consulting with experts",
          "Continuous support throughout the first year"
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          { q: "How long does it take to set up a company in Italy?", a: "Usually completed within 2-4 weeks. We support you throughout." },
          { q: "What documents are required?", a: "ID, proof of address, business plan, and capital proof are needed." },
          { q: "Is opening a bank account difficult?", a: "We make the entire process easy for you." }
        ]
      }
    },
    it: {
      title: "Pacchetto Startup",
      hero: {
        headline: "Il tuo partner di fiducia per la costituzione di società in Italia",
        sub: "Consulenza finanziaria e legale chiavi in mano per imprenditori e investitori. Ti guidiamo in ogni fase.",
        cta: "Candidati Ora"
      },
      process: {
        title: "Il Nostro Processo",
        steps: [
          { icon: <FaRegLightbulb />, label: "Analisi delle esigenze e consulenza" },
          { icon: <FaRegBuilding />, label: "Scelta tipo società e costituzione" },
          { icon: <FaRegChartBar />, label: "Pianificazione finanziaria e budget" },
          { icon: <FaRegHandshake />, label: "Conto bancario e registrazioni legali" },
          { icon: <FaCheck />, label: "Supporto continuo (1° anno)" }
        ]
      },
      features: {
        title: "Cosa Include?",
        items: [
          "Scelta del tipo di società e costituzione",
          "Codice fiscale e registrazioni legali",
          "Apertura conto bancario e integrazione sistemi finanziari",
          "Consulenza finanziaria e reportistica per il primo anno",
          "Pianificazione di budget e flussi di cassa",
          "Pianificazione fiscale e conformità"
        ]
      },
      benefits: {
        title: "Vantaggi",
        items: [
          "Costituzione rapida e senza problemi",
          "Rischi legali e finanziari ridotti al minimo",
          "Consulenza personalizzata con esperti",
          "Supporto continuo durante il primo anno"
        ]
      },
      faq: {
        title: "Domande Frequenti",
        questions: [
          { q: "Quanto tempo ci vuole per costituire una società in Italia?", a: "Di solito si completa in 2-4 settimane. Ti supportiamo in ogni fase." },
          { q: "Quali documenti sono necessari?", a: "Documento d'identità, prova di indirizzo, business plan e prova del capitale sono richiesti." },
          { q: "È difficile aprire un conto bancario?", a: "Rendiamo l'intero processo semplice per te." }
        ]
      }
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const StartupPage = () => {
  const { language } = useLanguage();
  const c = getStartupContent(language);
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
        <Link href="/#contact" className="inline-block px-8 py-3 bg-brand-gold text-white font-semibold rounded hover:bg-brand-gold/90 transition">{c.hero.cta}</Link>
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
                <li key={i} className="flex items-start"><FaCheck className="text-brand-gold mt-1 mr-2" />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-blue mb-4">{c.benefits.title}</h3>
            <ul className="space-y-3">
              {c.benefits.items.map((item, i) => (
                <li key={i} className="flex items-start"><FaCheck className="text-brand-gold mt-1 mr-2" />{item}</li>
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
        <p className="text-lg text-white/90 mb-8">{c.hero.sub}</p>
        <Link href="/#contact" className="inline-block px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-brand-blue transition-colors duration-200">{c.hero.cta}</Link>
      </section>
    </>
  );
};

export default StartupPage; 