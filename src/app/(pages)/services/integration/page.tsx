"use client";
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const getServicesContent = (lang: string) => {
  const content = {
    tr: {
      pageTitle: "Hizmetlerimiz",
      pageSubtitle: "Entegrasyon Çözümleri",
      contactPrompt: "Detaylı bilgi ve danışmanlık için bizimle iletişime geçebilirsiniz.",
      contactButtonText: "İletişime Geçin",
      services: [
        {
          title: "Burs Başvurusu Danışmanlığı",
          items: [
            "Profilinize uygun devlet, bölgesel ve özel burs olanaklarının taranması",
            "Başvuru takvimi ve şartların burs başvurusu zaman çizelgesine dönüştürülmesi",
            "CV, motivasyon mektubu, gelir belgeleri ve referansların hazırlanıp kontrol edilmesi",
            "Online portallarda başvuru gönderimi ve sonuçların takibi",
            "Muhasebe uygulamaları konusunda danışmanlık yapmak."
          ]
        },
        {
          title: "Oturum İzni (Permesso di Soggiorno) Danışmanlığı",
          items: [
            "Kişisel durumunuza göre uygun permesso di soggiorno türünün seçimi",
            "Belgelerin (kontrat, sigorta, gelir kanıtı vb.) eksiksiz hazırlanması",
            "Karakol (Questura) randevusu alma, posta kitinin doldurulması ve posta takibi",
            "İzin süresince başvuru durumu sorgulama ve güncel mevzuat bilgilendirmesi",
            "Yenileme & adres değişikliği işlemleri için hatırlatıcı ve belge desteği"
          ]
        },
        {
          title: "Konaklama Bulma Danışmanlığı",
          items: [
            "Bütçe, konum ve konut tipine göre özelleştirilmiş ev portföyü sunumu",
            "Emlak gezileri, video turları ve sözleşme müzakere desteği",
            "Kontrat, depozito ve noter işlemlerinde hukuki rehberlik",
            "Taşınma günü abone açılışları & belediye kayıt işlemlerinde yardımcı olma",
            "Yerleşim sonrası acil tamir/servis ağlarına yönlendirme"
          ]
        },
        {
          title: "Karşılama Hizmeti",
          items: [
            "Havalimanında karşılama & özel transfer (birey/öğrenci grupları)",
            "Şehir oryantasyonu: toplu taşıma kartı, SIM kart, temel ihtiyaç noktaları",
            "İlk günler için acil destek hattı (kayıp eşya, sağlık, dil yardımı)",
            "Özel taleplere göre turlar ve rehberlik organizasyonu"
          ]
        },
        {
          title: "Üniversite Başvuru Danışmanlığı",
          items: [
            "Üniversite başvuru süreçlerinin yönetimi ve takibi",
            "Gerekli belgelerin hazırlanması ve kontrolü",
            "Başvuru formlarının doldurulması ve gönderimi",
            "Kabul sonrası kayıt işlemlerinin yönetimi",
            "Oryantasyon ve adaptasyon desteği"
          ]
        },
        {
          title: "Öğrenci Vizesi Danışmanlığı",
          items: [
            "Vize başvuru süreçlerinin yönetimi",
            "Gerekli belgelerin hazırlanması ve kontrolü",
            "Başvuru formlarının doldurulması",
            "Konsolosluk randevusu alma ve takibi",
            "Vize sonrası süreç desteği"
          ]
        },
        {
          title: "Bürokratik İşlemler Desteği",
          items: [
            "Codice fiscale alma işlemleri",
            "Sağlık sigortası ve sağlık sistemi kaydı",
            "Banka hesabı açma işlemleri",
            "Belediye kayıt işlemleri",
            "Diğer resmi işlemlerde rehberlik"
          ]
        },
        {
          title: "Ehliyet İşlemleri Danışmanlığı",
          items: [
            "Mevcut ehliyetin dönüştürülmesi süreci",
            "Yeni ehliyet alma süreci",
            "Gerekli belgelerin hazırlanması",
            "Sınav ve randevu işlemleri",
            "Motorizzazione Civile işlemleri"
          ]
        }
      ],
      ctaSection: {
        title: "İtalya'da Yeni Hayatınıza Güvenle Başlayın",
        description: "Tüm entegrasyon hizmetlerimiz ve fiyatlarımızı inceleyin veya emlak danışmanlarımızla iletişime geçin.",
        pricing: "Fiyatlarımızı Görüntüle"
      }
    },
    en: {
      pageTitle: "Our Services",
      pageSubtitle: "Integration Solutions",
      contactPrompt: "You can contact us for detailed information and consultancy.",
      contactButtonText: "Contact Us",
      services: [
        {
          title: "Scholarship Application Consultancy",
          items: [
            "Scanning for state, regional, and private scholarship opportunities suitable for your profile",
            "Converting application calendars and requirements into a scholarship application timeline",
            "Preparing and checking CVs, motivation letters, income documents, and references",
            "Submitting applications via online portals and monitoring results",
            "Providing consultancy on accounting practices."
          ]
        },
        {
          title: "Residence Permit (Permesso di Soggiorno) Consultancy",
          items: [
            "Selecting the appropriate type of permesso di soggiorno according to your personal situation",
            "Complete preparation of documents (contract, insurance, proof of income, etc.)",
            "Scheduling an appointment at the police station (Questura), filling out the postal kit, and tracking mail",
            "Inquiry about application status and current legislation information during the permit period",
            "Reminder and document support for renewal & address change procedures"
          ]
        },
        {
          title: "Accommodation Finding Consultancy",
          items: [
            "Presentation of a customized housing portfolio according to budget, location, and housing type",
            "Support for real estate tours, video tours, and contract negotiation",
            "Legal guidance for contracts, deposits, and notary procedures",
            "Assistance with utility subscriptions & municipal registration on moving day",
            "Referral to emergency repair/service networks after settling in"
          ]
        },
        {
          title: "Welcome Service",
          items: [
            "Airport reception & private transfer (individual/student groups)",
            "City orientation: public transport card, SIM card, essential points of interest",
            "Emergency support line for the first few days (lost items, health, language assistance)",
            "Organization of tours and guidance based on specific requests"
          ]
        },
        {
          title: "University Enrollment Procedures",
          items: [
            "Management and tracking of university application processes",
            "Preparation and verification of required documents",
            "Filling out and submitting application forms",
            "Management of post-acceptance registration procedures",
            "Orientation and adaptation support"
          ]
        },
        {
          title: "Student Visa Consultancy",
          items: [
            "Management of visa application processes",
            "Preparation and verification of required documents",
            "Filling out application forms",
            "Scheduling and tracking consulate appointments",
            "Post-visa process support"
          ]
        },
        {
          title: "Bureaucratic Procedures Support",
          items: [
            "Codice fiscale application procedures",
            "Health insurance and healthcare system registration",
            "Bank account opening procedures",
            "Municipal registration procedures",
            "Guidance for other official procedures"
          ]
        },
        {
          title: "Driving License Consultancy",
          items: [
            "Process for converting existing license",
            "Process for obtaining new license",
            "Preparation of required documents",
            "Exam and appointment procedures",
            "Motorizzazione Civile procedures"
          ]
        }
      ],
      ctaSection: {
        title: "Start Your New Life in Italy with Confidence",
        description: "See all our integration services and pricing or connect with our real estate agents.",
        pricing: "View Our Pricing"
      }
    },
    it: {
      pageTitle: "I Nostri Servizi",
      pageSubtitle: "Soluzioni di Integrazione",
      contactPrompt: "Potete contattarci per informazioni dettagliate e consulenza.",
      contactButtonText: "Contattaci",
      services: [
        {
          title: "Consulenza per la domanda di borsa di studio",
          items: [
            "Ricerca di opportunità di borse di studio statali, regionali e private adatte al tuo profilo",
            "Trasformazione dei requisiti e delle scadenze in una timeline di candidatura",
            "Preparazione e verifica di CV, lettere motivazionali, documenti di reddito e referenze",
            "Invio delle domande tramite portali online e monitoraggio dei risultati",
            "Consulenza sulle pratiche contabili."
          ]
        },
        {
          title: "Consulenza Permesso di Soggiorno",
          items: [
            "Scelta del tipo di permesso di soggiorno più adatto alla tua situazione personale",
            "Preparazione completa dei documenti (contratto, assicurazione, prova di reddito, ecc.)",
            "Prenotazione appuntamento in questura, compilazione del kit postale e tracciamento della posta",
            "Monitoraggio dello stato della domanda e aggiornamenti normativi durante il periodo di validità",
            "Promemoria e supporto documentale per rinnovo e cambio indirizzo"
          ]
        },
        {
          title: "Consulenza per la ricerca alloggio",
          items: [
            "Presentazione di un portafoglio immobiliare personalizzato in base a budget, posizione e tipologia di alloggio",
            "Supporto per visite immobiliari, video tour e negoziazione contrattuale",
            "Assistenza legale per contratti, depositi e pratiche notarili",
            "Assistenza per attivazione utenze e registrazione comunale il giorno del trasloco",
            "Indirizzamento a reti di assistenza/servizio di emergenza dopo l'insediamento"
          ]
        },
        {
          title: "Servizio di Accoglienza",
          items: [
            "Accoglienza in aeroporto & transfer privato (singoli/gruppi di studenti)",
            "Orientamento cittadino: tessera trasporti, SIM card, punti di interesse essenziali",
            "Linea di supporto emergenze per i primi giorni (oggetti smarriti, salute, assistenza linguistica)",
            "Organizzazione di tour e guida su richiesta"
          ]
        },
        {
          title: "Procedure di Iscrizione Universitaria",
          items: [
            "Gestione e monitoraggio delle procedure di candidatura universitaria",
            "Preparazione e verifica dei documenti richiesti",
            "Compilazione e invio dei moduli di domanda",
            "Gestione delle procedure di iscrizione post-accettazione",
            "Supporto per orientamento e adattamento"
          ]
        },
        {
          title: "Consulenza Visto Studenti",
          items: [
            "Gestione delle procedure di richiesta visto",
            "Preparazione e verifica dei documenti richiesti",
            "Compilazione dei moduli di domanda",
            "Prenotazione e monitoraggio appuntamenti consolari",
            "Supporto post-visto"
          ]
        },
        {
          title: "Supporto Pratiche Burocratiche",
          items: [
            "Procedure per ottenere il codice fiscale",
            "Registrazione assicurazione sanitaria e sistema sanitario",
            "Apertura conto bancario",
            "Procedure di registrazione comunale",
            "Guida per altre pratiche ufficiali"
          ]
        },
        {
          title: "Consulenza Patente di Guida",
          items: [
            "Procedura per la conversione della patente esistente",
            "Procedura per ottenere una nuova patente",
            "Preparazione dei documenti richiesti",
            "Procedure d'esame e appuntamento",
            "Procedure Motorizzazione Civile"
          ]
        }
      ],
      ctaSection: {
        title: "Inizia la tua nuova vita in Italia con fiducia",
        description: "Scopri tutti i nostri servizi di integrazione e prezzi o contatta i nostri agenti immobiliari.",
        pricing: "Vedi i nostri prezzi"
      }
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const IntegrationServicesPage = () => {
  const { language } = useLanguage();
  const c = getServicesContent(language);
  return (
    <>
      <Navbar />
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brand-blue">{c.pageTitle}</h1>
          <div className="flex space-x-4">
            <Link href="/pricing" className="text-brand-gold hover:text-brand-gold/80">Pricing</Link>
            <Link href="/real-estate-agents" className="text-brand-gold hover:text-brand-gold/80">Real Estate Agents</Link>
          </div>
        </div>
      </div>
      <main className="max-w-5xl mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 text-center">{c.pageSubtitle}</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {c.services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start"><FaCheckCircle className="text-brand-gold mt-1 mr-2" />{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-brand-text-secondary mb-4">{c.contactPrompt}</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-brand-gold text-white font-semibold rounded hover:bg-brand-gold/90 transition">{c.contactButtonText}</Link>
        </div>
      </main>
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue/90 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">{c.ctaSection.title}</h3>
        <p className="text-lg text-brand-blue mb-8">{c.ctaSection.description}</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/pricing" className="inline-block px-8 py-3 border-2 border-brand-blue text-lg font-medium rounded-md text-white hover:bg-white hover:text-brand-blue transition-colors duration-200">{c.ctaSection.pricing}</Link>
        </div>
      </section>
          </>
  );
};

export default IntegrationServicesPage;