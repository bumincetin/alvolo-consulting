import { FaCheckCircle, FaStar, FaRocket, FaShieldAlt } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

const pricingPlans = [
  {
    title: "Başlangıç Paketi",
    price: "€199",
    icon: FaRocket,
    features: [
      "Profilinize uygun devlet/özel burs olanaklarının taranması (Temel Liste)",
      "Başvuru takvimi ve şartların genel bir zaman çizelgesine oturtulması",
      "CV ve motivasyon mektubu için genel şablon ve rehberlik",
      "Tek bir online portalda başvuru gönderimi için rehberlik",
    ],
    bgColor: "bg-brand-bg-surface",
    titleColor: "text-brand-blue",
    buttonClass: "bg-brand-gold hover:bg-yellow-700 text-white",
    description: "İtalya'da eğitim yolculuğunuza ilk adımı atın.",
    textColor: "text-brand-text-primary",
    featureTextColor: "text-brand-text-secondary"
  },
  {
    title: "Kapsamlı Paket",
    price: "€499",
    icon: FaShieldAlt,
    features: [
      "Kişisel durumunuza göre uygun permesso di soggiorno türü seçimi",
      "Detaylı belge hazırlığı (kontrat, sigorta, gelir kanıtı vb.) ve kontrolü",
      "Questura randevusu alma, posta kitinin doldurulması ve takibi",
      "Bütçe ve konum tercihlerinize göre özelleştirilmiş konaklama portföyü (5 opsiyon)",
      "Emlak gezileri ve sözleşme müzakerelerinde danışmanlık",
      "Yenileme & adres değişikliği için hatırlatma ve temel belge desteği",
    ],
    bgColor: "bg-brand-blue",
    titleColor: "text-white",
    buttonClass: "bg-brand-gold hover:bg-yellow-700 text-brand-blue",
    description: "Oturum izni ve konaklama süreçlerinizde tam güvence.",
    popular: true,
    textColor: "text-white",
    featureTextColor: "text-gray-200"
  },
  {
    title: "VIP Tam Destek Paketi",
    price: "€999",
    icon: FaStar,
    features: [
      "Tüm 'Kapsamlı Paket' hizmetleri",
      "Havalimanında karşılama ve konaklama yerine özel transfer",
      "Şehir oryantasyonu (toplu taşıma, SIM kart, banka hesabı vb.)",
      "Acil durumlar için ilk 1 ay kişisel destek hattı",
      "Kontrat, depozito ve noter işlemlerinde tam hukuki rehberlik",
      "Taşınma günü abone açılışları ve belediye kayıt işlemleri",
    ],
    bgColor: "bg-brand-bg-surface",
    titleColor: "text-brand-blue",
    buttonClass: "bg-brand-gold hover:bg-yellow-700 text-white",
    description: "İtalya'daki yeni hayatınıza stressiz bir başlangıç.",
    textColor: "text-brand-text-primary",
    featureTextColor: "text-brand-text-secondary"
  }
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-bg-primary pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
              Fiyatlandırma Planlarımız
            </h1>
            <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-brand-text-secondary">
              İhtiyaçlarınıza en uygun danışmanlık paketini seçin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 ${plan.bgColor} ${plan.popular ? 'border-4 border-brand-gold transform scale-105' : 'border border-gray-200'}`}
              >
                <div>
                  {plan.popular && (
                    <div className="absolute top-0 -mt-5 left-1/2 transform -translate-x-1/2">
                      <span className="bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">Popüler</span>
                    </div>
                  )}
                  <div className="flex justify-center mb-6">
                    <plan.icon className={`text-5xl ${plan.titleColor}`} />
                  </div>
                  <h2 className={`text-3xl font-bold text-center mb-4 ${plan.titleColor}`}>
                    {plan.title}
                  </h2>
                  <p className={`text-4xl font-extrabold text-center mb-6 ${plan.titleColor}`}>
                    {plan.price}
                  </p>
                  <p className={`text-center text-sm mb-8 ${plan.textColor}`}>
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <FaCheckCircle className={`${plan.popular ? 'text-brand-gold' : 'text-brand-blue'} flex-shrink-0 mt-1`} />
                        <span className={`${plan.featureTextColor}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/#contact"
                  className={`w-full block text-center mt-auto px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg ${plan.buttonClass}`}
                >
                  Paketi Seç & İletişime Geç
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-lg text-brand-text-secondary mb-4">
              Özel ihtiyaçlarınız veya farklı hizmet kombinasyonları için size özel bir teklif oluşturabiliriz.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Özel Teklif Alın
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 