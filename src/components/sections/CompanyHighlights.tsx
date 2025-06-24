'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { FaUsers, FaGlobe, FaAward, FaHandshake, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const getCompanyHighlightsContent = (lang: string) => {
  const content = {
    tr: {
      title: "Neden Alvolo Danışmanlık?",
      subtitle: "İtalya'da başarılı olmak için ihtiyacınız olan her şey",
      highlights: [
        {
          icon: FaUsers,
          number: "500+",
          label: "Mutlu Müşteri",
          description: "İtalya'da başarıyla yerleşen ve iş kuran müşterilerimiz"
        },
        {
          icon: FaGlobe,
          number: "15+",
          label: "Ülke",
          description: "Farklı ülkelerden gelen müşterilerimize hizmet veriyoruz"
        },
        {
          icon: FaAward,
          number: "98%",
          label: "Başarı Oranı",
          description: "Vize başvurularında elde ettiğimiz başarı oranı"
        },
        {
          icon: FaHandshake,
          number: "24/7",
          label: "Destek",
          description: "Sürekli müşteri desteği ve danışmanlık hizmeti"
        },
        {
          icon: FaChartLine,
          number: "€2M+",
          label: "Yatırım",
          description: "Müşterilerimizin İtalya'da yaptığı toplam yatırım"
        },
        {
          icon: FaShieldAlt,
          number: "10+",
          label: "Yıl Deneyim",
          description: "İtalya'da iş ve göçmenlik alanında uzmanlık"
        }
      ],
      ctaText: "Hikayenizi Başlatın",
      ctaSubtext: "Ücretsiz danışmanlık için bizimle iletişime geçin"
    },
    en: {
      title: "Why Alvolo Consulting?",
      subtitle: "Everything you need to succeed in Italy",
      highlights: [
        {
          icon: FaUsers,
          number: "500+",
          label: "Happy Clients",
          description: "Successfully settled and established businesses in Italy"
        },
        {
          icon: FaGlobe,
          number: "15+",
          label: "Countries",
          description: "Serving clients from different countries worldwide"
        },
        {
          icon: FaAward,
          number: "98%",
          label: "Success Rate",
          description: "Success rate in visa applications"
        },
        {
          icon: FaHandshake,
          number: "24/7",
          label: "Support",
          description: "Continuous customer support and consulting services"
        },
        {
          icon: FaChartLine,
          number: "€2M+",
          label: "Investment",
          description: "Total investment made by our clients in Italy"
        },
        {
          icon: FaShieldAlt,
          number: "10+",
          label: "Years Experience",
          description: "Expertise in business and immigration in Italy"
        }
      ],
      ctaText: "Start Your Story",
      ctaSubtext: "Contact us for free consultation"
    },
    it: {
      title: "Perché Alvolo Consulenza?",
      subtitle: "Tutto quello che ti serve per avere successo in Italia",
      highlights: [
        {
          icon: FaUsers,
          number: "500+",
          label: "Clienti Felici",
          description: "Successfully settled and established businesses in Italy"
        },
        {
          icon: FaGlobe,
          number: "15+",
          label: "Paesi",
          description: "Serviamo clienti da diversi paesi in tutto il mondo"
        },
        {
          icon: FaAward,
          number: "98%",
          label: "Tasso di Successo",
          description: "Tasso di successo nelle domande di visto"
        },
        {
          icon: FaHandshake,
          number: "24/7",
          label: "Supporto",
          description: "Supporto clienti continuo e servizi di consulenza"
        },
        {
          icon: FaChartLine,
          number: "€2M+",
          label: "Investimento",
          description: "Investimento totale fatto dai nostri clienti in Italia"
        },
        {
          icon: FaShieldAlt,
          number: "10+",
          label: "Anni di Esperienza",
          description: "Esperienza in business e immigrazione in Italia"
        }
      ],
      ctaText: "Inizia la Tua Storia",
      ctaSubtext: "Contattaci per una consulenza gratuita"
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const CompanyHighlights = () => {
  const { language } = useLanguage();
  const c = getCompanyHighlightsContent(language);

  return (
    <section className="py-20 bg-gradient-to-br from-brand-bg-primary to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            {c.title}
          </h2>
          <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {c.highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                  {highlight.number}
                </div>
                <h3 className="text-xl font-semibold text-brand-text-primary mb-3">
                  {highlight.label}
                </h3>
                <p className="text-brand-text-secondary leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              {c.ctaText}
            </h3>
            <p className="text-brand-text-secondary mb-6">
              {c.ctaSubtext}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Ücretsiz Danışmanlık Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights; 