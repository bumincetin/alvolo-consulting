'use client';

export const runtime = 'edge';

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const getAnnouncementDetails = (lang: string, id: string) => {
  const announcements = {
    tr: {
      backToAnnouncements: "Duyurulara Geri Dön",
      featured: "Öne Çıkan",
      share: "Paylaş",
      relatedAnnouncements: "İlgili Duyurular",
      announcements: {
        "1": {
          id: "1",
          date: "15 Aralık 2024",
          title: "Yeni Ofis Açılışı - Milano",
          excerpt: "Milano'da yeni ofisimizi açtık. Artık daha geniş bir hizmet ağı ile yanınızdayız.",
          category: "Şirket Haberleri",
          featured: true,
          content: `
            <p>Değerli müşterilerimiz ve iş ortaklarımız,</p>
            
            <p>Alvolo Consulting olarak, hizmet kalitemizi artırmak ve daha geniş bir müşteri kitlesine ulaşmak amacıyla Milano'da yeni ofisimizi açtığımızı duyurmaktan büyük mutluluk duyuyoruz.</p>
            
            <h3>Yeni Ofisimizin Özellikleri</h3>
            <ul>
              <li><strong>Konum:</strong> Milano'nun iş merkezinde, ulaşımı kolay bir bölgede</li>
              <li><strong>Kapasite:</strong> Daha geniş toplantı salonları ve çalışma alanları</li>
              <li><strong>Teknoloji:</strong> En son teknolojik altyapı ile donatılmış</li>
              <li><strong>Erişilebilirlik:</strong> Engelli erişimine uygun tasarım</li>
            </ul>
            
            <h3>Yeni Hizmetlerimiz</h3>
            <p>Yeni ofisimizle birlikte aşağıdaki hizmetlerimizi de genişletiyoruz:</p>
            <ul>
              <li>Yüz yüze danışmanlık seansları</li>
              <li>Seminer ve eğitim programları</li>
              <li>Networking etkinlikleri</li>
              <li>İş geliştirme toplantıları</li>
            </ul>
            
            <h3>İletişim Bilgileri</h3>
            <p><strong>Adres:</strong> Via Valsugana 6, 20139 Milan, Italy</p>
            <p><strong>Telefon:</strong> +39 02 1234 5678</p>
            <p><strong>E-posta:</strong> info@alvoloconsulting.com</p>
            
            <p>Yeni ofisimizde sizleri ağırlamaktan mutluluk duyacağız. Randevu almak için bizimle iletişime geçebilirsiniz.</p>
            
            <p>Saygılarımızla,<br>
            Alvolo Consulting Ekibi</p>
          `
        },
        "2": {
          id: "2",
          date: "10 Aralık 2024",
          title: "2025 İtalya Vize Politikalarında Değişiklikler",
          excerpt: "2025 yılında İtalya'da vize başvuru süreçlerinde yapılacak değişiklikler hakkında bilgilendirme.",
          category: "Vize & İzinler",
          featured: false,
          content: `
            <p>İtalya'da vize başvuru süreçlerinde 2025 yılında yapılacak önemli değişiklikler hakkında sizleri bilgilendirmek istiyoruz.</p>
            
            <h3>Yeni Vize Politikaları</h3>
            <p>İtalyan hükümeti, 2025 yılından itibaren vize başvuru süreçlerinde aşağıdaki değişiklikleri uygulamaya koyacaktır:</p>
            
            <h4>1. Dijital Başvuru Sistemi</h4>
            <ul>
              <li>Tüm vize başvuruları artık dijital platform üzerinden yapılacak</li>
              <li>Belge yükleme sistemi daha kullanıcı dostu hale getirildi</li>
              <li>Başvuru takibi online olarak yapılabilecek</li>
            </ul>
            
            <h4>2. Yeni Belge Gereksinimleri</h4>
            <ul>
              <li>Sağlık sigortası belgesi zorunlu hale getirildi</li>
              <li>Finansal yeterlilik kanıtı için minimum bakiye şartı güncellendi</li>
              <li>Konaklama kanıtı için daha detaylı belgeler isteniyor</li>
            </ul>
            
            <h4>3. İşlem Süreleri</h4>
            <ul>
              <li>Öğrenci vizesi başvuruları: 15-20 iş günü</li>
              <li>Çalışma vizesi başvuruları: 20-25 iş günü</li>
              <li>Aile birleşimi vizesi: 25-30 iş günü</li>
            </ul>
            
            <h3>Önerilerimiz</h3>
            <p>Bu değişiklikler ışığında aşağıdaki önerilerde bulunuyoruz:</p>
            <ul>
              <li>Başvurularınızı en az 2 ay önceden hazırlayın</li>
              <li>Tüm belgelerinizi güncel tutun</li>
              <li>Profesyonel danışmanlık hizmeti alın</li>
              <li>Alternatif planlarınızı hazırlayın</li>
            </ul>
            
            <h3>Hizmetlerimiz</h3>
            <p>Alvolo Consulting olarak, bu yeni süreçlerde size yardımcı olmak için kapsamlı vize danışmanlık hizmetlerimizi sunuyoruz:</p>
            <ul>
              <li>Başvuru dosyası hazırlama</li>
              <li>Belge kontrolü ve düzenleme</li>
              <li>Randevu alma ve takip</li>
              <li>Süreç boyunca destek</li>
            </ul>
            
            <p>Detaylı bilgi için bizimle iletişime geçebilirsiniz.</p>
          `
        },
        "3": {
          id: "3",
          date: "5 Aralık 2024",
          title: "Yeni Finansal Danışmanlık Paketleri",
          excerpt: "Küçük ve orta ölçekli işletmeler için özel olarak tasarlanmış yeni finansal danışmanlık paketlerimizi tanıtıyoruz.",
          category: "Finansal Hizmetler",
          featured: false,
          content: `
            <p>İtalya'da iş yapmanın finansal zorluklarını anlayarak, küçük ve orta ölçekli işletmeler için özel olarak tasarlanmış yeni finansal danışmanlık paketlerimizi tanıtmaktan mutluluk duyuyoruz.</p>
            
            <h3>Yeni Paketlerimiz</h3>
            
            <h4>1. Başlangıç Paketi (€2,500)</h4>
            <p>Yeni işletmeler için temel finansal danışmanlık hizmetleri:</p>
            <ul>
              <li>Şirket kurulumu ve yasal süreçler</li>
              <li>Finansal planlama ve bütçe yönetimi</li>
              <li>Vergi planlaması ve uyumluluk</li>
              <li>Banka hesabı açılışı ve finansal sistemler</li>
              <li>İlk yıl finansal danışmanlık</li>
            </ul>
            
            <h4>2. Genişleme Paketi (€3,500)</h4>
            <p>Büyüyen işletmeler için kapsamlı finansal çözümler:</p>
            <ul>
              <li>Pazar analizi ve stratejik planlama</li>
              <li>Yatırım danışmanlığı ve fon yönetimi</li>
              <li>Uluslararası ticaret ve finans</li>
              <li>Risk yönetimi ve sigorta planlaması</li>
              <li>Sürekli finansal danışmanlık ve destek</li>
            </ul>
            
            <h4>3. Premium Paketi (€5,000)</h4>
            <p>Kurumsal müşteriler için özel hizmetler:</p>
            <ul>
              <li>Özel finansal strateji geliştirme</li>
              <li>Uluslararası vergi planlaması</li>
              <li>Mergers & Acquisitions danışmanlığı</li>
              <li>Kurumsal yönetişim danışmanlığı</li>
              <li>7/24 öncelikli destek</li>
            </ul>
            
            <h3>Paket Avantajları</h3>
            <ul>
              <li>Sabit fiyat garantisi</li>
              <li>Şeffaf maliyet yapısı</li>
              <li>Esnek ödeme seçenekleri</li>
              <li>Deneyimli uzman ekibi</li>
              <li>Kişiselleştirilmiş yaklaşım</li>
            </ul>
            
            <h3>Nasıl Başlarız?</h3>
            <ol>
              <li>Ücretsiz ilk görüşme</li>
              <li>İhtiyaç analizi</li>
              <li>Uygun paket seçimi</li>
              <li>Hizmet başlangıcı</li>
              <li>Sürekli destek ve takip</li>
            </ol>
            
            <p>Bu yeni paketlerimiz hakkında detaylı bilgi almak ve ücretsiz danışmanlık randevusu için bizimle iletişime geçebilirsiniz.</p>
          `
        },
        "4": {
          id: "4",
          date: "1 Aralık 2024",
          title: "Üniversite Başvuru Dönemi Başladı",
          excerpt: "2025-2026 akademik yılı için İtalyan üniversitelerine başvuru süreci başladı. Erken başvuru avantajlarından yararlanın.",
          category: "Eğitim",
          featured: false,
          content: `
            <p>2025-2026 akademik yılı için İtalyan üniversitelerine başvuru süreci resmi olarak başlamıştır. Bu önemli süreçte size yardımcı olmak için kapsamlı hizmetlerimizi sunuyoruz.</p>
            
            <h3>Başvuru Takvimi</h3>
            <ul>
              <li><strong>1 Aralık 2024:</strong> Başvuru sürecinin başlangıcı</li>
              <li><strong>15 Ocak 2025:</strong> İlk başvuru dönemi sonu</li>
              <li><strong>1 Şubat 2025:</strong> İkinci başvuru dönemi</li>
              <li><strong>15 Mart 2025:</strong> Son başvuru tarihi</li>
            </ul>
            
            <h3>Popüler Üniversiteler ve Programlar</h3>
            
            <h4>Bocconi Üniversitesi (Milano)</h4>
            <ul>
              <li>İşletme Yönetimi</li>
              <li>Ekonomi ve Finans</li>
              <li>Uluslararası İşletme</li>
              <li>Pazarlama Yönetimi</li>
            </ul>
            
            <h4>Politecnico di Milano</h4>
            <ul>
              <li>Mimarlık</li>
              <li>Endüstri Mühendisliği</li>
              <li>Bilgisayar Mühendisliği</li>
              <li>Tasarım</li>
            </ul>
            
            <h4>Universita degli Studi di Milano</h4>
            <ul>
              <li>Hukuk</li>
              <li>Tıp</li>
              <li>Psikoloji</li>
              <li>Dil ve Edebiyat</li>
            </ul>
            
            <h3>Başvuru Gereksinimleri</h3>
            <ul>
              <li>Lise diploması (Apostilli)</li>
              <li>Transkript</li>
              <li>Dil yeterlilik belgesi (İtalyanca/İngilizce)</li>
              <li>Motivasyon mektubu</li>
              <li>Referans mektupları</li>
              <li>CV</li>
            </ul>
            
            <h3>Hizmetlerimiz</h3>
            <p>Alvolo Consulting olarak aşağıdaki hizmetleri sunuyoruz:</p>
            <ul>
              <li>Üniversite ve program seçimi danışmanlığı</li>
              <li>Başvuru dosyası hazırlama</li>
              <li>Belge çeviri ve apostil işlemleri</li>
              <li>Motivasyon mektubu yazımı</li>
              <li>CV hazırlama ve düzenleme</li>
              <li>Başvuru takibi</li>
              <li>Vize başvuru desteği</li>
            </ul>
            
            <h3>Erken Başvuru Avantajları</h3>
            <ul>
              <li>Daha fazla program seçeneği</li>
              <li>Burs imkanları</li>
              <li>Konaklama garantisi</li>
              <li>Vize sürecinde zaman avantajı</li>
              <li>Oryantasyon programlarına katılım</li>
            </ul>
            
            <p>Başvuru sürecinizde size yardımcı olmak için hemen bizimle iletişime geçin.</p>
          `
        },
        "5": {
          id: "5",
          date: "25 Kasım 2024",
          title: "Yeni Ortaklık - Bocconi Üniversitesi",
          excerpt: "Bocconi Üniversitesi ile stratejik ortaklık anlaşması imzaladık. Öğrencilerimiz için özel avantajlar.",
          category: "Ortaklıklar",
          featured: false,
          content: `
            <p>Alvolo Consulting olarak, İtalya'nın prestijli eğitim kurumlarından Bocconi Üniversitesi ile stratejik ortaklık anlaşması imzaladığımızı duyurmaktan büyük mutluluk duyuyoruz.</p>
            
            <h3>Ortaklık Detayları</h3>
            <p>Bu ortaklık kapsamında, Alvolo Consulting müşterileri ve öğrencileri için özel avantajlar sağlanacaktır:</p>
            
            <h4>Öğrenci Avantajları</h4>
            <ul>
              <li><strong>Başvuru Önceliği:</strong> Alvolo Consulting üzerinden başvuru yapan öğrenciler öncelikli değerlendirme</li>
              <li><strong>Burs İmkanları:</strong> Özel burs programları ve indirimler</li>
              <li><strong>Oryantasyon Desteği:</strong> Üniversiteye uyum sürecinde özel destek</li>
              <li><strong>Kariyer Danışmanlığı:</strong> Mezuniyet sonrası kariyer planlama desteği</li>
            </ul>
            
            <h4>İş Dünyası Avantajları</h4>
            <ul>
              <li><strong>Staj İmkanları:</strong> Bocconi öğrencileri için staj programları</li>
              <li><strong>Networking Etkinlikleri:</strong> Ortak organizasyonlar ve etkinlikler</li>
              <li><strong>Araştırma Projeleri:</strong> Akademik-ticari işbirliği fırsatları</li>
              <li><strong>Eğitim Programları:</strong> Özel eğitim ve sertifika programları</li>
            </ul>
            
            <h3>Bocconi Üniversitesi Hakkında</h3>
            <p>Bocconi Üniversitesi, İtalya'nın en prestijli işletme ve ekonomi üniversitelerinden biridir:</p>
            <ul>
              <li>1902 yılında kurulmuş</li>
              <li>QS World University Rankings'te ilk 100'de</li>
              <li>Uluslararası akreditasyonlar</li>
              <li>90+ ülkeden öğrenci</li>
              <li>Güçlü iş dünyası bağlantıları</li>
            </ul>
            
            <h3>Ortaklık Kapsamındaki Programlar</h3>
            <ul>
              <li>Lisans programları</li>
              <li>Yüksek lisans programları</li>
              <li>MBA programları</li>
              <li>Executive Education</li>
              <li>Kısa dönem programlar</li>
            </ul>
            
            <h3>Nasıl Yararlanabilirsiniz?</h3>
            <ol>
              <li>Alvolo Consulting ile iletişime geçin</li>
              <li>Eğitim hedeflerinizi belirleyin</li>
              <li>Uygun program seçimi yapın</li>
              <li>Ortaklık avantajlarından yararlanın</li>
            </ol>
            
            <p>Bu ortaklık hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
          `
        },
        "6": {
          id: "6",
          date: "20 Kasım 2024",
          title: "Konaklama Bulma Hizmetimizde İyileştirmeler",
          excerpt: "Konaklama bulma hizmetimizi geliştirdik. Artık daha hızlı ve güvenilir ev bulma süreci.",
          category: "Konaklama",
          featured: false,
          content: `
            <p>Müşterilerimizin konaklama ihtiyaçlarını daha iyi karşılamak amacıyla, konaklama bulma hizmetimizi önemli ölçüde geliştirdik ve iyileştirdik.</p>
            
            <h3>Yeni Özelliklerimiz</h3>
            
            <h4>1. Gelişmiş Arama Sistemi</h4>
            <ul>
              <li>Detaylı filtreleme seçenekleri</li>
              <li>Bütçe aralığı belirleme</li>
              <li>Mahalle bazlı arama</li>
              <li>Ulaşım kolaylığı filtreleri</li>
              <li>Özel gereksinimler (evcil hayvan, engelli erişimi vb.)</li>
            </ul>
            
            <h4>2. Sanal Tur İmkanı</h4>
            <ul>
              <li>360° sanal ev turları</li>
              <li>Video görüşmeler</li>
              <li>Detaylı fotoğraf galerileri</li>
              <li>Mahalle tanıtım videoları</li>
            </ul>
            
            <h4>3. Hızlı İşlem Süreci</h4>
            <ul>
              <li>24 saat içinde ilk öneriler</li>
              <li>Hızlı randevu alma</li>
              <li>Ekspres sözleşme hazırlama</li>
              <li>Hızlı taşınma desteği</li>
            </ul>
            
            <h3>Hizmet Kapsamımız</h3>
            
            <h4>Öğrenci Konaklaması</h4>
            <ul>
              <li>Öğrenci yurtları</li>
              <li>Paylaşımlı evler</li>
              <li>Stüdyo daireler</li>
              <li>Aile yanı konaklama</li>
            </ul>
            
            <h4>Profesyonel Konaklama</h4>
            <ul>
              <li>Lüks daireler</li>
              <li>İş merkezi yakını konaklama</li>
              <li>Kısa dönem kiralama</li>
              <li>Servisli daireler</li>
            </ul>
            
            <h4>Aile Konaklaması</h4>
            <ul>
              <li>Geniş aile daireleri</li>
              <li>Bahçeli evler</li>
              <li>Okul yakını konaklama</li>
              <li>Güvenli mahalleler</li>
            </ul>
            
            <h3>Ek Hizmetlerimiz</h3>
            <ul>
              <li>Sigorta danışmanlığı</li>
              <li>Mobilya kiralama</li>
              <li>Taşınma hizmetleri</li>
              <li>Ev açılış işlemleri</li>
              <li>Yasal süreç desteği</li>
            </ul>
            
            <h3>Garantilerimiz</h3>
            <ul>
              <li>%100 güvenli işlem</li>
              <li>Para iade garantisi</li>
              <li>7/24 destek hattı</li>
              <li>3 ay boyunca ücretsiz destek</li>
            </ul>
            
            <h3>Nasıl Çalışır?</h3>
            <ol>
              <li>İhtiyaç analizi ve bütçe belirleme</li>
              <li>Uygun seçeneklerin sunulması</li>
              <li>Sanal tur ve görüşmeler</li>
              <li>Seçim ve sözleşme süreci</li>
              <li>Taşınma ve yerleşim desteği</li>
            </ol>
            
            <p>Geliştirilmiş konaklama hizmetlerimizden yararlanmak için hemen bizimle iletişime geçin.</p>
          `
        }
      }
    },
    en: {
      backToAnnouncements: "Back to Announcements",
      featured: "Featured",
      share: "Share",
      relatedAnnouncements: "Related Announcements",
      announcements: {
        "1": {
          id: "1",
          date: "December 15, 2024",
          title: "New Office Opening - Milan",
          excerpt: "We have opened our new office in Milan. Now we are here for you with a wider service network.",
          category: "Company News",
          featured: true,
          content: `
            <p>Dear valued clients and business partners,</p>
            
            <p>We are pleased to announce that Alvolo Consulting has opened its new office in Milan to improve our service quality and reach a wider customer base.</p>
            
            <h3>Features of Our New Office</h3>
            <ul>
              <li><strong>Location:</strong> In Milan's business district, easily accessible</li>
              <li><strong>Capacity:</strong> Larger meeting rooms and workspace</li>
              <li><strong>Technology:</strong> Equipped with latest technological infrastructure</li>
              <li><strong>Accessibility:</strong> Disability-friendly design</li>
            </ul>
            
            <h3>Our New Services</h3>
            <p>Along with our new office, we are expanding the following services:</p>
            <ul>
              <li>Face-to-face consultation sessions</li>
              <li>Seminar and training programs</li>
              <li>Networking events</li>
              <li>Business development meetings</li>
            </ul>
            
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> Via Valsugana 6, 20139 Milan, Italy</p>
            <p><strong>Phone:</strong> +39 02 1234 5678</p>
            <p><strong>Email:</strong> info@alvoloconsulting.com</p>
            
            <p>We would be happy to welcome you at our new office. You can contact us to make an appointment.</p>
            
            <p>Best regards,<br>
            Alvolo Consulting Team</p>
          `
        }
      }
    },
    it: {
      backToAnnouncements: "Torna agli Annunci",
      featured: "In Evidenza",
      share: "Condividi",
      relatedAnnouncements: "Annunci Correlati",
      announcements: {
        "1": {
          id: "1",
          date: "15 Dicembre 2024",
          title: "Nuova Apertura Ufficio - Milano",
          excerpt: "Abbiamo aperto il nostro nuovo ufficio a Milano. Ora siamo qui per te con una rete di servizi più ampia.",
          category: "Notizie Aziendali",
          featured: true,
          content: `
            <p>Cari clienti e partner commerciali,</p>
            
            <p>Siamo lieti di annunciare che Alvolo Consulting ha aperto il suo nuovo ufficio a Milano per migliorare la qualità del nostro servizio e raggiungere una base di clienti più ampia.</p>
            
            <h3>Caratteristiche del Nostro Nuovo Ufficio</h3>
            <ul>
              <li><strong>Posizione:</strong> Nel distretto commerciale di Milano, facilmente accessibile</li>
              <li><strong>Capacità:</strong> Sale riunioni e spazi di lavoro più grandi</li>
              <li><strong>Tecnologia:</strong> Dotato di infrastruttura tecnologica all'avanguardia</li>
              <li><strong>Accessibilità:</strong> Design accessibile ai disabili</li>
            </ul>
            
            <h3>I Nostri Nuovi Servizi</h3>
            <p>Insieme al nostro nuovo ufficio, stiamo espandendo i seguenti servizi:</p>
            <ul>
              <li>Sessioni di consulenza faccia a faccia</li>
              <li>Programmi di seminari e formazione</li>
              <li>Eventi di networking</li>
              <li>Riunioni di sviluppo aziendale</li>
            </ul>
            
            <h3>Informazioni di Contatto</h3>
            <p><strong>Indirizzo:</strong> Via Valsugana 6, 20139 Milan, Italy</p>
            <p><strong>Telefono:</strong> +39 02 1234 5678</p>
            <p><strong>Email:</strong> info@alvoloconsulting.com</p>
            
            <p>Saremo felici di accogliervi nel nostro nuovo ufficio. Potete contattarci per fissare un appuntamento.</p>
            
            <p>Cordiali saluti,<br>
            Team Alvolo Consulting</p>
          `
        }
      }
    }
  };

  const content = announcements[lang as keyof typeof announcements] || announcements.en;
  const announcement = content.announcements[id as keyof typeof content.announcements];
  
  return {
    ...content,
    announcement
  };
};

const AnnouncementDetailPage = () => {
  const { language } = useLanguage();
  const params = useParams();
  const id = params.id as string;
  const c = getAnnouncementDetails(language, id);

  if (!c.announcement) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Duyuru Bulunamadı</h1>
              <p className="text-gray-600 mb-8">Aradığınız duyuru mevcut değil.</p>
              <Link href="/announcements" className="text-brand-blue hover:text-brand-blue-dark">
                ← Duyurulara Geri Dön
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-6">
            <Link 
              href="/announcements" 
              className="inline-flex items-center text-brand-blue hover:text-brand-blue-dark transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              {c.backToAnnouncements}
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-2" />
                    {c.announcement.date}
                  </div>
                  {c.announcement.featured && (
                    <span className="bg-brand-blue text-white text-xs px-2 py-1 rounded-full">
                      {c.featured}
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {c.announcement.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {c.announcement.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  {c.announcement.excerpt}
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: c.announcement.content }}
                />
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AnnouncementDetailPage; 