import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

const services = [
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
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hizmetlerimiz
            </h1>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Profesyonel mali müşavirlik ve danışmanlık hizmetlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                  {service.title}
                </h2>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Detaylı bilgi ve danışmanlık için bizimle iletişime geçebilirsiniz.
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 