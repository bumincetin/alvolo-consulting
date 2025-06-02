"use client"; // Make sure client component if not already

import { FaCalculator, FaFileInvoiceDollar, FaHandshake, FaBalanceScale, FaBook, FaUniversity, FaPassport } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext'; // Import useLanguage

const getServicesSectionContent = (lang: string) => {
  const content = {
    tr: {
      title: "Hizmet Alanlarımız",
      subtitle: "İtalya'daki ihtiyaçlarınız için kapsamlı çözümler sunuyoruz.",
      services: [
        { icon: FaCalculator, title: "Burs Başvurusu Danışmanlığı", description: "Üniversite ve diğer kurumların burslarına başvuru süreçlerinde rehberlik." },
        { icon: FaFileInvoiceDollar, title: "Oturum İzni (Permesso di Soggiorno)", description: "İtalya'da yasal olarak ikamet etmek için gerekli izinlerin alınması." },
        { icon: FaBook, title: "Konaklama Danışmanlığı", description: "Öğrenci yurtları, kiralık daireler ve diğer konaklama seçenekleri bulma." },
        { icon: FaHandshake, title: "Karşılama ve Oryantasyon", description: "İtalya'ya varışınızda karşılama ve yeni yaşamınıza adaptasyon desteği." },
        { icon: FaUniversity, title: "Üniversite Kayıt İşlemleri", description: "İtalyan üniversitelerine başvuru ve kayıt süreçlerinin yönetimi." },
        { icon: FaPassport, title: "Öğrenci Vizesi Danışmanlığı", description: "İtalya'da eğitim almak için gerekli vize başvuru süreçlerinde rehberlik." },
        { icon: FaBalanceScale, title: "Bürokratik İşlemler Desteği", description: "Codice fiscale, sağlık sigortası gibi resmi işlemlerinizde yardım." },
      ]
    },
    en: {
      title: "Our Service Areas",
      subtitle: "We offer comprehensive solutions for your needs in Italy.",
      services: [
        { icon: FaCalculator, title: "Scholarship Application Consultancy", description: "Guidance in application processes for university and other institutional scholarships." },
        { icon: FaFileInvoiceDollar, title: "Residence Permit (Permesso di Soggiorno)", description: "Obtaining the necessary permits to legally reside in Italy." },
        { icon: FaBook, title: "Accommodation Consultancy", description: "Finding student dormitories, rental apartments, and other accommodation options." },
        { icon: FaHandshake, title: "Welcome and Orientation", description: "Welcome upon your arrival in Italy and support for adapting to your new life." },
        { icon: FaUniversity, title: "University Enrollment Procedures", description: "Management of application and enrollment processes for Italian universities." },
        { icon: FaPassport, title: "Student Visa Consultancy", description: "Guidance in visa application processes for studying in Italy." },
        { icon: FaBalanceScale, title: "Bureaucratic Procedures Support", description: "Assistance with official procedures such as Codice Fiscale, health insurance." },
      ]
    },
    it: {
      title: "Le Nostre Aree di Servizio",
      subtitle: "Offriamo soluzioni complete per le vostre esigenze in Italia.",
      services: [
        { icon: FaCalculator, title: "Consulenza per la Domanda di Borsa di Studio", description: "Guida nei processi di candidatura per borse di studio universitarie e di altre istituzioni." },
        { icon: FaFileInvoiceDollar, title: "Permesso di Soggiorno", description: "Ottenimento dei permessi necessari per risiedere legalmente in Italia." },
        { icon: FaBook, title: "Consulenza Alloggiativa", description: "Ricerca di dormitori per studenti, appartamenti in affitto e altre opzioni di alloggio." },
        { icon: FaHandshake, title: "Accoglienza e Orientamento", description: "Accoglienza al vostro arrivo in Italia e supporto per l'adattamento alla vostra nuova vita." },
        { icon: FaUniversity, title: "Procedure di Iscrizione Universitaria", description: "Gestione dei processi di candidatura e iscrizione alle università italiane." },
        { icon: FaPassport, title: "Consulenza Visto Studentesco", description: "Guida nei processi di richiesta del visto per studiare in Italia." },
        { icon: FaBalanceScale, title: "Supporto Procedure Burocratiche", description: "Assistenza nelle procedure ufficiali come Codice Fiscale, assicurazione sanitaria." },
      ]
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const Services = () => {
  const { language } = useLanguage();
  const c = getServicesSectionContent(language);

  return (
    <section id="services" className="pt-10 pb-20 md:pt-20 bg-brand-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            {c.title}
          </h2>
          <p className="text-xl text-brand-text-secondary">
            {c.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.services.map((service, index) => {
            const ServiceIcon = service.icon; // Capitalize to use as a component
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-brand-bg-surface hover:shadow-xl transition duration-300"
              >
                <ServiceIcon className="w-12 h-12 text-brand-gold mb-6" />
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-text-secondary">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 