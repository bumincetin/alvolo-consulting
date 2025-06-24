'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FaCalendarAlt, FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';

const getAnnouncementsContent = (lang: string) => {
  const content = {
    tr: {
      title: "Duyurular",
      subtitle: "Alvolo Consulting'den en güncel haberler ve önemli duyurular",
      description: "İtalya'da iş kurma, finansal danışmanlık ve entegrasyon hizmetlerimizle ilgili en son gelişmeleri takip edin.",
      announcements: [
        {
          id: 1,
          date: "15 Aralık 2024",
          title: "Yeni Ofis Açılışı - Milano",
          excerpt: "Milano'da yeni ofisimizi açtık. Artık daha geniş bir hizmet ağı ile yanınızdayız.",
          category: "Şirket Haberleri",
          featured: true
        },
        {
          id: 2,
          date: "10 Aralık 2024",
          title: "2025 İtalya Vize Politikalarında Değişiklikler",
          excerpt: "2025 yılında İtalya'da vize başvuru süreçlerinde yapılacak değişiklikler hakkında bilgilendirme.",
          category: "Vize & İzinler",
          featured: false
        },
        {
          id: 3,
          date: "5 Aralık 2024",
          title: "Yeni Finansal Danışmanlık Paketleri",
          excerpt: "Küçük ve orta ölçekli işletmeler için özel olarak tasarlanmış yeni finansal danışmanlık paketlerimizi tanıtıyoruz.",
          category: "Finansal Hizmetler",
          featured: false
        },
        {
          id: 4,
          date: "1 Aralık 2024",
          title: "Üniversite Başvuru Dönemi Başladı",
          excerpt: "2025-2026 akademik yılı için İtalyan üniversitelerine başvuru süreci başladı. Erken başvuru avantajlarından yararlanın.",
          category: "Eğitim",
          featured: false
        },
        {
          id: 5,
          date: "25 Kasım 2024",
          title: "Yeni Ortaklık - Bocconi Üniversitesi",
          excerpt: "Bocconi Üniversitesi ile stratejik ortaklık anlaşması imzaladık. Öğrencilerimiz için özel avantajlar.",
          category: "Ortaklıklar",
          featured: false
        },
        {
          id: 6,
          date: "20 Kasım 2024",
          title: "Konaklama Bulma Hizmetimizde İyileştirmeler",
          excerpt: "Konaklama bulma hizmetimizi geliştirdik. Artık daha hızlı ve güvenilir ev bulma süreci.",
          category: "Konaklama",
          featured: false
        }
      ],
      categories: {
        all: "Tümü",
        company: "Şirket Haberleri",
        visa: "Vize & İzinler",
        financial: "Finansal Hizmetler",
        education: "Eğitim",
        partnerships: "Ortaklıklar",
        accommodation: "Konaklama"
      },
      readMore: "Devamını Oku",
      featured: "Öne Çıkan"
    },
    en: {
      title: "Announcements",
      subtitle: "Latest news and important announcements from Alvolo Consulting",
      description: "Stay updated with the latest developments in our business establishment, financial consulting, and integration services in Italy.",
      announcements: [
        {
          id: 1,
          date: "December 15, 2024",
          title: "New Office Opening - Milan",
          excerpt: "We have opened our new office in Milan. Now we are here for you with a wider service network.",
          category: "Company News",
          featured: true
        },
        {
          id: 2,
          date: "December 10, 2024",
          title: "Changes in Italy Visa Policies for 2025",
          excerpt: "Information about changes to be made in visa application processes in Italy in 2025.",
          category: "Visa & Permits",
          featured: false
        },
        {
          id: 3,
          date: "December 5, 2024",
          title: "New Financial Consulting Packages",
          excerpt: "We are introducing new financial consulting packages specially designed for small and medium-sized businesses.",
          category: "Financial Services",
          featured: false
        },
        {
          id: 4,
          date: "December 1, 2024",
          title: "University Application Period Started",
          excerpt: "The application process for Italian universities for the 2025-2026 academic year has started. Take advantage of early application benefits.",
          category: "Education",
          featured: false
        },
        {
          id: 5,
          date: "November 25, 2024",
          title: "New Partnership - Bocconi University",
          excerpt: "We signed a strategic partnership agreement with Bocconi University. Special advantages for our students.",
          category: "Partnerships",
          featured: false
        },
        {
          id: 6,
          date: "November 20, 2024",
          title: "Improvements in Our Accommodation Finding Service",
          excerpt: "We have improved our accommodation finding service. Now a faster and more reliable home finding process.",
          category: "Accommodation",
          featured: false
        }
      ],
      categories: {
        all: "All",
        company: "Company News",
        visa: "Visa & Permits",
        financial: "Financial Services",
        education: "Education",
        partnerships: "Partnerships",
        accommodation: "Accommodation"
      },
      readMore: "Read More",
      featured: "Featured"
    },
    it: {
      title: "Annunci",
      subtitle: "Ultime notizie e annunci importanti da Alvolo Consulting",
      description: "Rimani aggiornato con gli ultimi sviluppi nei nostri servizi di costituzione aziendale, consulenza finanziaria e integrazione in Italia.",
      announcements: [
        {
          id: 1,
          date: "15 Dicembre 2024",
          title: "Nuova Apertura Ufficio - Milano",
          excerpt: "Abbiamo aperto il nostro nuovo ufficio a Milano. Ora siamo qui per te con una rete di servizi più ampia.",
          category: "Notizie Aziendali",
          featured: true
        },
        {
          id: 2,
          date: "10 Dicembre 2024",
          title: "Cambiamenti nelle Politiche dei Visti per l'Italia 2025",
          excerpt: "Informazioni sui cambiamenti da apportare nei processi di richiesta di visto in Italia nel 2025.",
          category: "Visti e Permessi",
          featured: false
        },
        {
          id: 3,
          date: "5 Dicembre 2024",
          title: "Nuovi Pacchetti di Consulenza Finanziaria",
          excerpt: "Presentiamo nuovi pacchetti di consulenza finanziaria appositamente progettati per piccole e medie imprese.",
          category: "Servizi Finanziari",
          featured: false
        },
        {
          id: 4,
          date: "1 Dicembre 2024",
          title: "Iniziato il Periodo di Domanda Universitaria",
          excerpt: "Il processo di domanda per le università italiane per l'anno accademico 2025-2026 è iniziato. Approfitta dei vantaggi della domanda anticipata.",
          category: "Educazione",
          featured: false
        },
        {
          id: 5,
          date: "25 Novembre 2024",
          title: "Nuova Partnership - Università Bocconi",
          excerpt: "Abbiamo firmato un accordo di partnership strategica con l'Università Bocconi. Vantaggi speciali per i nostri studenti.",
          category: "Partnership",
          featured: false
        },
        {
          id: 6,
          date: "20 Novembre 2024",
          title: "Miglioramenti nel Nostro Servizio di Ricerca Alloggi",
          excerpt: "Abbiamo migliorato il nostro servizio di ricerca alloggi. Ora un processo di ricerca casa più veloce e affidabile.",
          category: "Alloggi",
          featured: false
        }
      ],
      categories: {
        all: "Tutti",
        company: "Notizie Aziendali",
        visa: "Visti e Permessi",
        financial: "Servizi Finanziari",
        education: "Educazione",
        partnerships: "Partnership",
        accommodation: "Alloggi"
      },
      readMore: "Leggi di Più",
      featured: "In Evidenza"
    }
  };
  return content[lang as keyof typeof content] || content.en;
};

const AnnouncementsPage = () => {
  const { language } = useLanguage();
  const c = getAnnouncementsContent(language);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-bg-primary to-blue-50 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaBullhorn className="text-4xl text-brand-blue" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {c.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {c.subtitle}
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                {c.description}
              </p>
            </div>
          </div>
        </section>

        {/* Announcements Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {c.announcements.map((announcement) => (
                <article
                  key={announcement.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
                    announcement.featured ? 'ring-2 ring-brand-blue' : ''
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        {announcement.date}
                      </div>
                      {announcement.featured && (
                        <span className="bg-brand-blue text-white text-xs px-2 py-1 rounded-full">
                          {c.featured}
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {announcement.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {announcement.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {announcement.excerpt}
                    </p>
                    
                    <button className="text-brand-blue hover:text-brand-blue-dark font-medium transition-colors">
                      <Link href={`/announcements/${announcement.id}`}>
                        {c.readMore} →
                      </Link>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AnnouncementsPage; 