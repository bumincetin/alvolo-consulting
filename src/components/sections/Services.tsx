import { FaCalculator, FaChartLine, FaFileInvoiceDollar, FaHandshake, FaBalanceScale, FaBook } from 'react-icons/fa';

const services = [
  {
    icon: FaCalculator,
    title: "Emlak Danışmanlığı",
    description: "konaklama alanında danışmanlık, konut seçimi, kontrat, depozito ve noter işlemlerinde hukuki rehberlik."
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Oturum İzni (Permesso di Soggiorno) Danışmanlığı",
    description: "Belgelerin (kontrat, sigorta, gelir kanıtı vb.) eksiksiz hazırlanması, karakol (Questura) randevusu alma, posta kitinin doldurulması ve posta takibi."
  },
  {
    icon: FaBook,
    title: "Öğrencilere Burs Başvurusu Danışmanlığı",
    description: "Profilinize uygun devlet, bölgesel ve özel burs olanaklarının taranması, başvuru takvimi ve şartların burs başvurusu zaman çizelgesine dönüştürülmesi, CV, motivasyon mektubu, gelir belgeleri ve referansların hazırlanıp kontrol edilmesi, online portallarda başvuru gönderimi ve sonuçların takibi."
  },
  {
    icon: FaHandshake,
    title: "Şirket Kuruluş ve Kapanış",
    description: "Limited ve Anonim şirket kuruluşu, şirket kapanış işlemleri ve tasfiye süreçleri."
  },
  {
    icon: FaChartLine,
    title: "Finansal Danışmanlık Hizmetleri",
    description: "Finansal planlama, bütçeleme ve yönetim danışmanlığı hizmetleri."
  },
  {
    icon: FaBalanceScale,
    title: "Karşılama Hizmeti",
    description: "Havalimanında karşılama & özel transfer (birey/öğrenci grupları), Şehir oryantasyonu: toplu taşıma kartı, SIM kart, temel ihtiyaç noktaları, İlk günler için acil destek hattı (kayıp eşya, sağlık, dil yardımı), Özel taleplere göre turlar ve rehberlik organizasyonu."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Profesyonel ve güvenilir mali müşavirlik hizmetleri
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 