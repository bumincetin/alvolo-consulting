'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import { FaCheck, FaChevronDown, FaBuilding, FaChartLine, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

const getFinancialContent = (lang: string) => {
  const content = {
    tr: {
      title: "İtalya'da İş Yapmak İçin Finansal Danışmanlık",
      subtitle: "İtalya'da iş kurmanız ve büyümeniz için kapsamlı finansal çözümler sunuyoruz.",
      cta: "Ücretsiz Danışmanlık Alın",
      trust: {
        title: "Neden Bizi Seçmelisiniz?",
        description: "20 yılı aşkın deneyimimiz ve uzman ekibimizle İtalya'da iş yapmanın tüm finansal zorluklarını çözüyoruz.",
        items: [
          {
            icon: 'building',
            title: "Yerel Uzmanlık",
            description: "İtalya'nın finansal ve yasal sistemine hakim uzman ekibimizle yanınızdayız."
          },
          {
            icon: 'chart',
            title: "Stratejik Planlama",
            description: "İşletmenizin büyüme hedeflerine ulaşması için özel finansal stratejiler geliştiriyoruz."
          },
          {
            icon: 'handshake',
            title: "Kişiselleştirilmiş Çözümler",
            description: "Her işletmenin ihtiyaçlarına özel finansal danışmanlık hizmetleri sunuyoruz."
          },
          {
            icon: 'shield',
            title: "Güvenilir Ortaklık",
            description: "Uzun vadeli iş ilişkileri kurarak sürdürülebilir başarı sağlıyoruz."
          }
        ]
      },
      plans: {
        title: "Finansal Danışmanlık Paketlerimiz",
        description: "İşletmenizin ihtiyaçlarına uygun, kapsamlı finansal danışmanlık paketlerimiz.",
        items: [
          {
            title: "Başlangıç Paketi",
            price: "€2,500",
            items: [
              "Şirket kurulumu ve yasal süreçler",
              "Finansal planlama ve bütçe yönetimi",
              "Vergi planlaması ve uyumluluk",
              "Banka hesabı açılışı ve finansal sistemler",
              "İlk yıl finansal danışmanlık"
            ]
          },
          {
            title: "Genişleme Paketi",
            price: "€3,500",
            items: [
              "Pazar analizi ve stratejik planlama",
              "Yatırım danışmanlığı ve fon yönetimi",
              "Uluslararası ticaret ve finans",
              "Risk yönetimi ve sigorta planlaması",
              "Sürekli finansal danışmanlık ve destek"
            ]
          }
        ],
        cta: "Detaylı Bilgi Alın"
      },
      faq: {
        title: "Sık Sorulan Sorular",
        questions: [
          {
            q: "İtalya'da şirket kurmak için ne kadar süre gerekiyor?",
            a: "Şirket türüne ve karmaşıklığına bağlı olarak, kurulum süreci genellikle 2-4 hafta sürer. Tüm süreç boyunca size rehberlik ediyoruz."
          },
          {
            q: "Hangi finansal raporlama standartlarını kullanıyoruz?",
            a: "İtalyan şirketleri hem IFRS hem de İtalyan muhasebe standartlarına (OIC) uyumlu raporlama yapmalıdır. Size her iki standarda da uygun çözümler sunuyoruz."
          },
          {
            q: "Vergi planlaması ve uyumluluk konusunda nasıl yardımcı oluyorsunuz?",
            a: "Kapsamlı vergi planlaması ve uyumluluk hizmetlerimiz, şirketinizin İtalyan vergi düzenlemelerine tam uyumunu sağlar ve vergi avantajlarından yararlanmanıza yardımcı olur."
          },
          {
            q: "İtalya'da şirket kurmak için minimum sermaye gereksinimleri nelerdir?",
            a: "Limited şirketler için minimum sermaye €10,000, anonim şirketler için €50,000'dir. Ancak, bazı özel durumlarda bu gereksinimler değişebilir. Size en uygun yapıyı belirlemenize yardımcı oluyoruz."
          },
          {
            q: "Yabancı yatırımcılar için özel teşvikler var mı?",
            a: "Evet, İtalya'da yabancı yatırımcılar için çeşitli teşvikler mevcuttur. Bunlar arasında vergi kredileri, bölgesel teşvikler ve araştırma-geliştirme destekleri bulunmaktadır. Size uygun teşvikleri belirlemenize yardımcı oluyoruz."
          },
          {
            q: "İtalya'da banka hesabı açmak için ne gerekiyor?",
            a: "İtalyan bankalarında hesap açmak için şirket belgeleri, kimlik doğrulama ve iş planı gereklidir. Size banka seçimi ve hesap açma sürecinde rehberlik ediyoruz."
          },
          {
            q: "Çalışan istihdamı ve SGK süreçleri nasıl işliyor?",
            a: "İtalya'da çalışan istihdamı için özel sözleşmeler ve SGK kayıtları gereklidir. Size çalışan istihdamı, sözleşme hazırlama ve SGK süreçlerinde destek sağlıyoruz."
          },
          {
            q: "İtalya'da şirket kurulumu için hangi belgeler gerekiyor?",
            a: "Temel olarak kimlik belgeleri, adres kanıtı, iş planı ve sermaye kanıtı gereklidir. Yabancı belgelerin apostil onayı gerekebilir. Size gerekli tüm belgelerin hazırlanmasında yardımcı oluyoruz."
          }
        ]
      },
      ctaSection: {
        title: "İtalya'da İş Fırsatlarını Keşfedin",
        description: "Uzman ekibimizle ücretsiz danışmanlık alın ve İtalya'da iş yapmanın avantajlarını keşfedin.",
        button: "Hemen İletişime Geçin"
      }
    },
    en: {
      title: "Financial Consultancy for Doing Business in Italy",
      subtitle: "Comprehensive financial solutions for establishing and growing your business in Italy.",
      cta: "Get Free Consultation",
      trust: {
        title: "Why Choose Us?",
        description: "With over 20 years of experience and our expert team, we solve all financial challenges of doing business in Italy.",
        items: [
          {
            icon: 'building',
            title: "Local Expertise",
            description: "We're here with our expert team that masters Italy's financial and legal system."
          },
          {
            icon: 'chart',
            title: "Strategic Planning",
            description: "We develop custom financial strategies to help your business achieve its growth goals."
          },
          {
            icon: 'handshake',
            title: "Personalized Solutions",
            description: "We provide financial consulting services tailored to each business's needs."
          },
          {
            icon: 'shield',
            title: "Trusted Partnership",
            description: "We ensure sustainable success by building long-term business relationships."
          }
        ]
      },
      plans: {
        title: "Our Financial Consulting Packages",
        description: "Comprehensive financial consulting packages tailored to your business needs.",
        items: [
          {
            title: "Startup Package",
            price: "€2,500",
            items: [
              "Company formation and legal processes",
              "Financial planning and budget management",
              "Tax planning and compliance",
              "Bank account opening and financial systems",
              "First-year financial consulting"
            ]
          },
          {
            title: "Expansion Package",
            price: "€3,500",
            items: [
              "Market analysis and strategic planning",
              "Investment advisory and fund management",
              "International trade and finance",
              "Risk management and insurance planning",
              "Ongoing financial consulting and support"
            ]
          }
        ],
        cta: "Get More Information"
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            q: "How long does it take to set up a company in Italy?",
            a: "Depending on the company type and complexity, the setup process typically takes 2-4 weeks. We guide you through the entire process."
          },
          {
            q: "Which financial reporting standards do we use?",
            a: "Italian companies must report in compliance with both IFRS and Italian accounting standards (OIC). We provide solutions that meet both standards."
          },
          {
            q: "How do you help with tax planning and compliance?",
            a: "Our comprehensive tax planning and compliance services ensure your company's full compliance with Italian tax regulations while helping you benefit from available tax advantages."
          },
          {
            q: "What are the minimum capital requirements for setting up a company in Italy?",
            a: "The minimum capital requirement is €10,000 for limited companies and €50,000 for joint-stock companies. However, these requirements may vary in special cases. We help you determine the most suitable structure."
          },
          {
            q: "Are there special incentives for foreign investors?",
            a: "Yes, Italy offers various incentives for foreign investors, including tax credits, regional incentives, and R&D support. We help you identify and apply for relevant incentives."
          },
          {
            q: "What is needed to open a bank account in Italy?",
            a: "Opening a bank account in Italy requires company documents, identity verification, and a business plan. We guide you through bank selection and account opening processes."
          },
          {
            q: "How does employee hiring and social security work?",
            a: "Employee hiring in Italy requires specific contracts and social security registrations. We support you with employee hiring, contract preparation, and social security processes."
          },
          {
            q: "What documents are needed for company formation in Italy?",
            a: "Basic requirements include identity documents, proof of address, business plan, and capital proof. Foreign documents may need apostille certification. We help you prepare all necessary documents."
          }
        ]
      },
      ctaSection: {
        title: "Discover Business Opportunities in Italy",
        description: "Get a free consultation with our expert team and discover the advantages of doing business in Italy.",
        button: "Contact Us Now"
      }
    },
    it: {
      title: "Consulenza Finanziaria per Fare Affari in Italia",
      subtitle: "Soluzioni finanziarie complete per stabilire e far crescere la tua attività in Italia.",
      cta: "Ottieni una Consulenza Gratuita",
      trust: {
        title: "Perché Sceglierci?",
        description: "Con oltre 20 anni di esperienza e il nostro team di esperti, risolviamo tutte le sfide finanziarie del fare affari in Italia.",
        items: [
          {
            icon: 'building',
            title: "Competenza Locale",
            description: "Siamo qui con il nostro team di esperti che padroneggia il sistema finanziario e legale italiano."
          },
          {
            icon: 'chart',
            title: "Pianificazione Strategica",
            description: "Sviluppiamo strategie finanziarie personalizzate per aiutare la tua azienda a raggiungere i suoi obiettivi di crescita."
          },
          {
            icon: 'handshake',
            title: "Soluzioni Personalizzate",
            description: "Forniamo servizi di consulenza finanziaria su misura per le esigenze di ogni azienda."
          },
          {
            icon: 'shield',
            title: "Partnership Affidabile",
            description: "Garantiamo il successo sostenibile costruendo relazioni commerciali a lungo termine."
          }
        ]
      },
      plans: {
        title: "I Nostri Pacchetti di Consulenza Finanziaria",
        description: "Pacchetti di consulenza finanziaria completi su misura per le tue esigenze aziendali.",
        items: [
          {
            title: "Pacchetto Startup",
            price: "€2,500",
            items: [
              "Costituzione aziendale e processi legali",
              "Pianificazione finanziaria e gestione del budget",
              "Pianificazione fiscale e conformità",
              "Apertura conto bancario e sistemi finanziari",
              "Consulenza finanziaria del primo anno"
            ]
          },
          {
            title: "Pacchetto Espansione",
            price: "€3,500",
            items: [
              "Analisi di mercato e pianificazione strategica",
              "Consulenza sugli investimenti e gestione dei fondi",
              "Commercio internazionale e finanza",
              "Gestione del rischio e pianificazione assicurativa",
              "Consulenza finanziaria continua e supporto"
            ]
          }
        ],
        cta: "Ottieni Maggiori Informazioni"
      },
      faq: {
        title: "Domande Frequenti",
        questions: [
          {
            q: "Quanto tempo ci vuole per costituire un'azienda in Italia?",
            a: "A seconda del tipo e della complessità dell'azienda, il processo di costituzione richiede tipicamente 2-4 settimane. Ti guidiamo attraverso l'intero processo."
          },
          {
            q: "Quali standard di rendicontazione finanziaria utilizziamo?",
            a: "Le aziende italiane devono rendicontare in conformità sia con gli IFRS che con gli standard contabili italiani (OIC). Forniamo soluzioni che soddisfano entrambi gli standard."
          },
          {
            q: "Come aiutate nella pianificazione fiscale e nella conformità?",
            a: "I nostri servizi completi di pianificazione fiscale e conformità garantiscono la piena conformità della tua azienda alle normative fiscali italiane, aiutandoti a beneficiare dei vantaggi fiscali disponibili."
          },
          {
            q: "Quali sono i requisiti di capitale minimo per costituire un'azienda in Italia?",
            a: "Il capitale minimo richiesto è di €10.000 per le società a responsabilità limitata e €50.000 per le società per azioni. Tuttavia, questi requisiti possono variare in casi speciali. Ti aiutiamo a determinare la struttura più adatta."
          },
          {
            q: "Ci sono incentivi speciali per gli investitori stranieri?",
            a: "Sì, l'Italia offre vari incentivi per gli investitori stranieri, inclusi crediti d'imposta, incentivi regionali e supporto per R&S. Ti aiutiamo a identificare e richiedere gli incentivi pertinenti."
          },
          {
            q: "Cosa serve per aprire un conto bancario in Italia?",
            a: "L'apertura di un conto bancario in Italia richiede documenti aziendali, verifica dell'identità e un business plan. Ti guidiamo attraverso i processi di selezione della banca e apertura del conto."
          },
          {
            q: "Come funziona l'assunzione di dipendenti e la previdenza sociale?",
            a: "L'assunzione di dipendenti in Italia richiede contratti specifici e registrazioni previdenziali. Ti supportiamo con l'assunzione di dipendenti, la preparazione dei contratti e i processi previdenziali."
          },
          {
            q: "Quali documenti sono necessari per la costituzione di un'azienda in Italia?",
            a: "I requisiti di base includono documenti di identità, prova dell'indirizzo, business plan e prova del capitale. I documenti stranieri potrebbero richiedere la certificazione apostille. Ti aiutiamo a preparare tutti i documenti necessari."
          }
        ]
      },
      ctaSection: {
        title: "Scopri le Opportunità di Business in Italia",
        description: "Ottieni una consulenza gratuita con il nostro team di esperti e scopri i vantaggi di fare affari in Italia.",
        button: "Contattaci Ora"
      }
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const FinancialPage = () => {
  const { language } = useLanguage();
  const c = getFinancialContent(language);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-brand-bg-primary to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-gold/10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
                {c.title}
              </h1>
              <p className="text-xl text-brand-text-secondary mb-8">
                {c.subtitle}
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-gold hover:bg-brand-gold/90 transition-colors duration-200"
                >
                  {c.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">
                {c.trust.title}
              </h2>
              <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                {c.trust.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {c.trust.items.map((item, index) => (
                <div key={index} className="bg-brand-bg-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="text-brand-gold text-3xl mb-4">
                    {item.icon === 'building' && <FaBuilding />}
                    {item.icon === 'chart' && <FaChartLine />}
                    {item.icon === 'handshake' && <FaHandshake />}
                    {item.icon === 'shield' && <FaShieldAlt />}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Plans Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">
                {c.plans.title}
              </h2>
              <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                {c.plans.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {c.plans.items.map((plan, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-brand-blue mb-2">
                      {plan.title}
                    </h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <FaCheck className="text-brand-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-brand-text-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {index === 0 && (
                    <Link 
                      href="/services/financial/consulting/startup"
                      className="block w-full text-center px-6 py-3 border border-brand-gold text-brand-gold font-medium rounded-md hover:bg-brand-gold hover:text-white transition-colors duration-200"
                    >
                      {c.plans.cta}
                    </Link>
                  )}
                  {index === 1 && (
                    <Link 
                      href="/services/financial/consulting/expansion"
                      className="block w-full text-center px-6 py-3 border border-brand-gold text-brand-gold font-medium rounded-md hover:bg-brand-gold hover:text-white transition-colors duration-200"
                    >
                      {c.plans.cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">
                {c.faq.title}
              </h2>
            </div>
            <div className="space-y-4">
              {c.faq.questions.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:border-brand-gold transition-colors duration-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-brand-blue">
                      {item.q}
                    </h3>
                    <FaChevronDown 
                      className={`text-brand-gold transition-transform duration-200 ${
                        openFaqs.includes(index) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-200 ${
                      openFaqs.includes(index) ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-brand-text-secondary">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue/90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {c.ctaSection.title}
            </h2>
            <p className="text-xl text-brand-blue/90 mb-8">
              {c.ctaSection.description}
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-brand-blue transition-colors duration-200"
            >
              {c.ctaSection.button}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default FinancialPage; 