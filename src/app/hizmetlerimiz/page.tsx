'use client';

import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const getServicesContent = (lang: string) => {
  const content = {
    tr: {
      pageTitle: "Hizmetlerimiz",
      pageSubtitle: "Öğrenciler ve profesyoneller için entegrasyon çözümleri",
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
          title: "Oturum İzni (Permesso di Soggiorno) Alma Danışmanlığı",
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
          title: "Üniversite Kayıt İşlemleri",

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
      ]
    },
    en: {
      pageTitle: "Our Services",
      pageSubtitle: "Integration solutions for students and professionals",
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
      ]
    },
    it: {
      pageTitle: "I Nostri Servizi",
      pageSubtitle: "Soluzioni di consulenza e assistenza per studenti e professionisti",
      contactPrompt: "Potete contattarci per informazioni dettagliate e consulenza.",
      contactButtonText: "Contattaci",
      services: [
        {
          title: "Consulenza per la Domanda di Borsa di Studio",
  
          items: [
            "Scansione delle opportunità di borse di studio statali, regionali e private adatte al tuo profilo",
            "Conversione dei calendari e dei requisiti delle domande in una cronologia per la domanda di borsa di studio",
            "Preparazione e controllo di CV, lettere di motivazione, documenti di reddito e referenze",
            "Invio delle domande tramite portali online e monitoraggio dei risultati",
            "Fornire consulenza sulle pratiche contabili."
          ]
        },
        {
          title: "Consulenza per il Permesso di Soggiorno",
           items: [
            "Selezione del tipo di permesso di soggiorno appropriato in base alla tua situazione personale",
            "Preparazione completa dei documenti (contratto, assicurazione, prova di reddito, ecc.)",
            "Fissare un appuntamento in Questura, compilare il kit postale e tracciare la posta",
            "Richiesta sullo stato della domanda e informazioni sulla legislazione vigente durante il periodo del permesso",
            "Promemoria e supporto documentale per le procedure di rinnovo e cambio indirizzo"
          ]
        },
        {
          title: "Consulenza per la Ricerca di Alloggio",

          items: [
            "Presentazione di un portafoglio di alloggi personalizzato in base a budget, posizione e tipo di alloggio",
            "Supporto per visite immobiliari, video tour e negoziazione contrattuale",
            "Guida legale per contratti, caparre e procedure notarili",
            "Assistenza con abbonamenti alle utenze e registrazione comunale il giorno del trasloco",
            "Indirizzamento a reti di riparazione/servizio di emergenza dopo l'insediamento"
          ]
        },
        {
          title: "Servizio di Benvenuto",

          items: [
            "Accoglienza in aeroporto e trasferimento privato (individuale/gruppi di studenti)",
            "Orientamento in città: tessera trasporti pubblici, SIM card, punti di interesse essenziali",
            "Linea di supporto di emergenza per i primi giorni (oggetti smarriti, salute, assistenza linguistica)",
            "Organizzazione di tour e guida in base a richieste specifiche"
          ]
        },
        {
          title: "Procedure di Iscrizione Universitaria",
  
          items: [
            "Gestione e monitoraggio dei processi di candidatura universitaria",
            "Preparazione e verifica dei documenti richiesti",
            "Compilazione e invio dei moduli di domanda",
            "Gestione delle procedure di registrazione post-accettazione",
            "Supporto per l'orientamento e l'adattamento"
          ]
        },
        {
          title: "Consulenza Visto Studentesco",
            items: [
            "Gestione dei processi di richiesta del visto",
            "Preparazione e verifica dei documenti richiesti",
            "Compilazione dei moduli di domanda",
            "Pianificazione e monitoraggio degli appuntamenti consolari",
            "Supporto per il processo post-visto"
          ]
        },
        {
          title: "Supporto Procedure Burocratiche",
          items: [
            "Procedure per la richiesta del codice fiscale",
            "Registrazione assicurazione sanitaria e sistema sanitario",
            "Procedure di apertura conto bancario",
            "Procedure di registrazione comunale",
            "Guida per altre procedure ufficiali"
          ]
        },
        {
          title: "Consulenza Patente di Guida",
          items: [
            "Processo per la conversione della patente esistente",
            "Processo per l'ottenimento della nuova patente",
            "Preparazione dei documenti richiesti",
            "Procedure per esami e appuntamenti",
            "Procedure presso la Motorizzazione Civile"
          ]
        }
      ]
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const ServicesPageComponent = () => {
  const { language } = useLanguage();
  const c = getServicesContent(language);

  return (
    <div className="min-h-screen bg-brand-bg-primary pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            {c.pageTitle}
          </h1>
          <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-brand-text-secondary">
            {c.pageSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {c.services.map((service, index) => (
            <div
              key={index}
              className="bg-brand-bg-surface rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-brand-blue">
                  {service.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <FaCheckCircle className="text-brand-gold flex-shrink-0 mt-1" />
                    <span className="text-brand-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-brand-text-secondary">
            {c.contactPrompt}
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-8 py-4 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            {c.contactButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesPageComponent />
    </>
  );
} 