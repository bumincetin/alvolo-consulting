'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaBoxOpen, 
  FaPlaneArrival, 
  FaHome, 
  FaPassport, 
  FaGraduationCap, 
  FaCar,
  FaUniversity,
  FaArrowRight
} from 'react-icons/fa';

const getPricingContent = (lang: string) => {
  const content = {
    tr: {
      pageTitle: "Fiyatlandırma Planlarımız",
      pageSubtitle: "İhtiyaçlarınıza en uygun çözümü seçin.",
      individualServicesTitle: "Tekil Hizmet Fiyatları",
      packagesTitle: "Avantajlı Paketlerimiz",
      contactPrompt: "Size özel bir paket oluşturmak veya detaylı bilgi almak için bizimle iletişime geçin.",
      contactButtonText: "İletişime Geçin",
      currencySymbol: "€",
      learnMoreText: "Daha Fazla Bilgi",
      services: [
        { name: "Karşılama Hizmeti", price: 200, icon: FaPlaneArrival, description: "Havalimanı veya tren istasyonunda kişisel karşılama ve konaklama yerinize transfer.", slug: "karsilama-hizmeti" },
        { name: "Konaklama Bulma Danışmanlığı", price: 300, icon: FaHome, description: "Bütçenize ve tercihlerinize uygun kiralık daire veya oda bulma desteği.", slug: "konaklama-danismanligi" },
        { name: "Oturum İzni & İkametgah Danışmanlığı", price: 200, icon: FaPassport, description: "Permesso di Soggiorno ve residenza başvurularınız için tam kapsamlı danışmanlık.", slug: "oturum-izni-ikametgah" },
        { name: "Üniversite Basvuru Danışmanlığı", price: 800, icon: FaUniversity, description: "İtalyan üniversitelerine kayıt sürecinde profesyonel rehberlik ve başvuru desteği.", slug: "universite-kayit" },
        { name: "Öğrenci Vizesi Danışmanlığı", price: 200, icon: FaPassport, description: "İtalya'da eğitim almak için gerekli vize başvuru süreçlerinde rehberlik.", slug: "ogrenci-vizesi" },
        { name: "Burs Başvurusu Danışmanlığı", price: 200, icon: FaGraduationCap, description: "İtalya'daki burs olanaklarını araştırma ve başvuru sürecinde profesyonel destek.", slug: "burs-basvurusu" },
        { name: "Sürücü Belgesi Alma Danışmanlığı", price: 200, icon: FaCar, description: "İtalyan ehliyeti alma veya mevcut ehliyetinizi çevirme işlemlerinde rehberlik.", slug: "surucu-belgesi" }
      ],
      packages: [
        { title: "Emlak + Bürokrasi Paketi (Permesso & Residenza)", price: 450, description: "Konaklama bulma ve oturum izni (permesso di soggiorno) ile ikametgah (residenza) kayıt işlemleriniz için kapsamlı destek." },
        { title: "Karşılama + Emlak Paketi", price: 450, description: "Havalimanı karşılama, şehre adaptasyon ve konaklama bulma hizmetlerini içerir." },
        { title: "Freelancer Profesyonel Paketi (Emlak + Tüm Bürokrasi)", price: 600, description: "Freelancerlar için özel olarak tasarlanmış; konaklama bulma, oturum izni, ikametgah kaydı ve diğer ilgili tüm bürokratik işlemleri kapsayan paket." },
        { title: "Üniversite Kabul Sonrası Kapsamlı Paket (Karşılama + Emlak + Bürokrasi: Permesso & Residenza)", price: 600, description: "Karşılama, konaklama bulma ve temel bürokrasi (permesso & residenza) hizmetlerimizi içeren avantajlı paket." },
        { title: "Üniversite Kabul Sonrası Ultra Tam Paket (Karşılama + Emlak + Bürokrasi: Permesso & Residenza + Burs)", price: 760, description: "En kapsamlı kabul sonrası paketimiz; karşılama, konaklama, temel bürokrasi (permesso & residenza) ve burs başvurusu danışmanlığını içerir." },
        { title: "Üniversite Kabul Öncesi Tam Paket (Üniversite Kayıt + Öğrenci Vizesi)", price: 960, description: "En kapsamlı kabul öncesi paketimiz; üniversite kayıt ve öğrenci vizesi danışmanlığını içerir." },
        { title: "Ultra Deluxe Paket (Karşılama + Emlak + Bürokrasi: Permesso & Residenza + Üniversite Kayıt + Öğrenci Vizesi + Burs)", price: 1400, description: "En kapsamlı paketimiz; karşılama, konaklama, temel bürokrasi (permesso & residenza), üniversite kayıt, öğrenci vizesi ve burs başvurusu danışmanlığını içerir." }
      ]
    },
    en: {
      pageTitle: "Our Pricing Plans",
      pageSubtitle: "Choose the best solution for your needs.",
      individualServicesTitle: "Individual Service Prices",
      packagesTitle: "Our Advantageous Packages",
      contactPrompt: "Contact us to create a custom package or for more detailed information.",
      contactButtonText: "Contact Us",
      currencySymbol: "€",
      learnMoreText: "Learn More",
      services: [
        { name: "Welcome Service", price: 200, icon: FaPlaneArrival, description: "Personal welcome at the airport or train station and transfer to your accommodation.", slug: "welcome-service" },
        { name: "Accommodation Finding Consultancy", price: 300, icon: FaHome, description: "Support in finding a suitable apartment or room for rent according to your budget and preferences.", slug: "accommodation-consultancy" },
        { name: "Residence Permit & Residency Consultancy", price: 200, icon: FaPassport, description: "Comprehensive consultancy for your Permesso di Soggiorno and residenza applications.", slug: "residence-permit-residency" },
        { name: "University Enrollment Consultancy", price: 800, icon: FaUniversity, description: "Professional guidance and application support for enrolling in Italian universities.", slug: "university-enrollment" },
        { name: "Student Visa Consultancy", price: 200, icon: FaPassport, description: "Guidance in visa application processes for studying in Italy.", slug: "student-visa" },
        { name: "Scholarship Application Consultancy", price: 200, icon: FaGraduationCap, description: "Professional support in researching scholarship opportunities in Italy and the application process.", slug: "scholarship-application" },
        { name: "Driving License Acquisition Consultancy", price: 200, icon: FaCar, description: "Guidance on obtaining an Italian driving license or converting your current license.", slug: "driving-license" }
      ],
      packages: [
        { title: "Real Estate + Bureaucracy Package (Permesso & Residenza)", price: 450, description: "Comprehensive support for finding accommodation and for your residence permit (permesso di soggiorno) and residency registration (residenza) procedures." },
        { title: "Welcome + Real Estate Package", price: 450, description: "Includes airport reception, city orientation, and accommodation finding services." },
        { title: "Freelancer Professional Package (Real Estate + Full Bureaucracy)", price: 600, description: "Specially designed for freelancers; includes accommodation finding, residence permit, residency registration, and all other related bureaucratic procedures." },
        { title: "Post-University Acceptance Comprehensive Package (Welcome + Real Estate + Bureaucracy: Permesso & Residenza)", price: 600, description: "Advantageous package including our welcome, accommodation finding, and essential bureaucracy (permesso & residenza) services." },
        { title: "Post-University Acceptance Ultra Full Package (Welcome + Real Estate + Bureaucracy: Permesso & Residenza + Scholarship)", price: 760, description: "Our most comprehensive post-acceptance package; includes welcome, accommodation, essential bureaucracy (permesso & residenza), and scholarship application consultancy." },
        { title: "Pre-University Acceptance Full Package (University Enrollment + Student Visa)", price: 960, description: "Our most comprehensive pre-acceptance package; includes university enrollment and student visa consultancy." },
        { title: "Ultra Deluxe Package (Welcome + Real Estate + Bureaucracy: Permesso & Residenza + University Enrollment + Student Visa + Scholarship)", price: 1400, description: "Our most comprehensive package; includes welcome, accommodation, essential bureaucracy (permesso & residenza), university enrollment, student visa, and scholarship application consultancy." }
      ]
    },
    it: {
      pageTitle: "I Nostri Piani Tariffari",
      pageSubtitle: "Scegli la soluzione migliore per le tue esigenze.",
      individualServicesTitle: "Prezzi dei Servizi Individuali",
      packagesTitle: "I Nostri Pacchetti Vantaggiosi",
      contactPrompt: "Contattaci per creare un pacchetto personalizzato o per informazioni più dettagliate.",
      contactButtonText: "Contattaci",
      currencySymbol: "€",
      learnMoreText: "Scopri di più",
      services: [
        { name: "Servizio di Benvenuto", price: 200, icon: FaPlaneArrival, description: "Accoglienza personale in aeroporto o stazione ferroviaria e trasferimento al tuo alloggio.", slug: "servizio-benvenuto" },
        { name: "Consulenza per la Ricerca di Alloggio", price: 300, icon: FaHome, description: "Supporto nella ricerca di un appartamento o stanza in affitto adatti al tuo budget e preferenze.", slug: "consulenza-alloggio" },
        { name: "Consulenza Permesso di Soggiorno e Residenza", price: 200, icon: FaPassport, description: "Consulenza completa per le tue richieste di Permesso di Soggiorno e residenza.", slug: "permesso-soggiorno-residenza" },
        { name: "Consulenza Iscrizione Universitaria", price: 800, icon: FaUniversity, description: "Guida professionale e supporto per l'iscrizione alle università italiane.", slug: "iscrizione-universitaria" },
        { name: "Consulenza Visto Studentesco", price: 200, icon: FaPassport, description: "Guida nei processi di richiesta del visto per studiare in Italia.", slug: "visto-studentesco" },
        { name: "Consulenza per la Domanda di Borsa di Studio", price: 200, icon: FaGraduationCap, description: "Supporto professionale nella ricerca di opportunità di borse di studio in Italia e nel processo di candidatura.", slug: "domanda-borsa-studio" },
        { name: "Consulenza per Ottenimento Patente di Guida", price: 200, icon: FaCar, description: "Guida per ottenere la patente di guida italiana o convertire la tua patente attuale.", slug: "patente-guida" }
      ],
      packages: [
        { title: "Pacchetto Immobiliare + Burocrazia (Permesso & Residenza)", price: 450, description: "Supporto completo per la ricerca dell'alloggio e per le procedure del permesso di soggiorno e registrazione della residenza." },
        { title: "Pacchetto Benvenuto + Immobiliare", price: 450, description: "Include accoglienza in aeroporto, orientamento in città e servizi di ricerca alloggio." },
        { title: "Pacchetto Professionale Freelancer (Immobiliare + Tutta la Burocrazia)", price: 600, description: "Progettato appositamente per i liberi professionisti; include ricerca alloggio, permesso di soggiorno, registrazione della residenza e tutte le altre procedure burocratiche correlate." },
        { title: "Pacchetto Completo Post-Accettazione Universitaria (Benvenuto + Immobiliare + Burocrazia: Permesso & Residenza)", price: 600, description: "Pacchetto vantaggioso che include i nostri servizi di benvenuto, ricerca alloggio e burocrazia essenziale (permesso & residenza)." },
        { title: "Pacchetto Ultra Completo Post-Accettazione Universitaria (Benvenuto + Immobiliare + Burocrazia: Permesso & Residenza + Borsa di Studio)", price: 760, description: "Il nostro pacchetto più completo post-accettazione; include benvenuto, alloggio, burocrazia essenziale (permesso & residenza) e consulenza per la domanda di borsa di studio." },
        { title: "Pacchetto Completo Pre-Accettazione Universitaria (Iscrizione Universitaria + Visto Studentesco)", price: 960, description: "Il nostro pacchetto più completo pre-accettazione; include iscrizione universitaria e consulenza per il visto studentesco." },
        { title: "Pacchetto Ultra Deluxe (Benvenuto + Immobiliare + Burocrazia: Permesso & Residenza + Iscrizione Universitaria + Visto Studentesco + Borsa di Studio)", price: 1400, description: "Il nostro pacchetto più completo; include benvenuto, alloggio, burocrazia essenziale (permesso & residenza), iscrizione universitaria, visto studentesco e consulenza per la domanda di borsa di studio." }
      ]
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const PricingPageComponent = () => {
  const { language } = useLanguage();
  const c = getPricingContent(language);

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

        {/* Individual Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center">
            {c.individualServicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-bg-surface rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col text-center"
                >
                  <div className="flex-grow">
                    {IconComponent && (
                      <IconComponent className="text-brand-gold text-4xl mb-4 mx-auto" />
                    )}
                    <h3 className="text-xl font-semibold text-brand-blue mb-2">
                      {service.name}
                    </h3>
                    <p className="text-brand-text-secondary text-sm mb-3">
                      {service.description}
                    </p>
                    <p className="text-3xl font-bold text-brand-gold mb-4">
                      {c.currencySymbol}{service.price}
                    </p>
                  </div>
                  <Link
                    href={`/pricing/${service.slug}`}
                    className="mt-auto inline-flex items-center justify-center px-6 py-2.5 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium"
                  >
                    {c.learnMoreText}
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Packages Section */}
        <div>
          <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center">
            {c.packagesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {c.packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-brand-bg-surface rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-start md:items-center"
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 text-center md:text-left">
                    <FaBoxOpen className="text-brand-gold text-5xl mx-auto md:mx-0" />
                </div>
                <div className="flex-grow mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-brand-blue mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-brand-text-secondary text-sm">
                    {pkg.description}
                  </p>
                </div>
                <div className="text-3xl font-bold text-brand-gold self-center md:self-auto md:ml-6 whitespace-nowrap">
                  {c.currencySymbol}{pkg.price}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-lg text-brand-text-secondary">
            {c.contactPrompt}
          </p>
          <Link
            href="/#contact"
            className="inline-block mt-6 px-8 py-4 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            {c.contactButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <PricingPageComponent />
    </>
  );
}