'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';

const content = {
  tr: {
    title: 'Misyonumuz ve Vizyonumuz',
    mission: {
      title: 'Misyonumuz',
      description: 'İtalya\'ya eğitim, yaşam veya iş amacıyla gelen Türk öğrencilere ve bireylere kapsamlı entegrasyon ve finansal danışmanlık hizmetleri sunarak, onların İtalya\'daki yolculuklarını sorunsuz ve başarılı bir şekilde tamamlamalarına yardımcı olmak. Her müşterimizin benzersiz ihtiyaçlarını anlayarak, kişiselleştirilmiş çözümler sunmak ve İtalya\'daki deneyimlerini en iyi şekilde yaşamalarını sağlamak. Şirketlerini buraya taşımak veya burada kurmak isteyenlere ise kapsamlı güvenli finansal danışmanlık hizmetleri sunmak.'
    },
    vision: {
      title: 'Vizyonumuz',
      description: 'İtalya\'daki Türk topluluğunun güvenilir entegrasyon ve finansal danışmanlık merkezi olmak ve eğitim, yaşam, kariyer ve finansal hedeflerine ulaşmalarında öncü bir rol oynamak. Sürekli gelişen ve değişen İtalyan sistemine hakim olarak, müşterilerimize en güncel ve doğru bilgileri sunmak ve onların başarı hikayelerinin bir parçası olmak.'
    },
    values: {
      title: 'Değerlerimiz',
      description: 'Müşteri odaklılık, dürüstlük, yenilikçilik ve sürekli gelişim değerlerimizi temel alarak, her müşterimize en yüksek kalitede hizmet sunmayı hedefliyoruz. İtalya\'daki dinamik ortama uyum sağlayarak, müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamak için çalışıyoruz.'
    }
  },
  en: {
    title: 'Our Mission and Vision',
    mission: {
      title: 'Our Mission',
      description: 'To provide comprehensive integration and financial consultancy services to Turkish students and individuals coming to Italy for education, living, or business purposes, helping them complete their journey in Italy smoothly and successfully. By understanding the unique needs of each client, offering personalized solutions and ensuring they have the best possible experience in Italy. To provide comprehensive and secure financial consultancy services to those who want to move or establish their companies in Italy.'
    },
    vision: {
      title: 'Our Vision',
      description: 'To become the trusted integration and financial consultancy center for the Turkish community in Italy and play a leading role in helping them achieve their educational, living, career, and financial goals. By mastering the continuously evolving Italian system, we provide our clients with the most up-to-date and accurate information and be part of their success stories.'
    },
    values: {
      title: 'Our Values',
      description: 'We are committed to excellence and innovation, ensuring that every client receives the highest quality service tailored to their specific needs. Our values of customer focus, integrity, innovation, and continuous improvement drive us to adapt to the dynamic environment in Italy and meet our clients\' needs effectively.'
    }
  },
  it: {
    title: 'La Nostra Missione e Visione',
    mission: {
      title: 'La Nostra Missione',
      description: 'Fornire servizi di consulenza completi di integrazione e consulenza finanziaria agli studenti e agli individui turchi che vengono in Italia per motivi di studio, vita o business, aiutandoli a completare il loro percorso in Italia in modo fluido e di successo. Comprendendo le esigenze uniche di ogni cliente, offriamo soluzioni personalizzate e garantiamo la migliore esperienza possibile in Italia. Forniamo anche servizi di consulenza finanziaria completi e sicuri a coloro che desiderano trasferire o stabilire le proprie aziende in Italia.'
    },
    vision: {
      title: 'La Nostra Visione',
      description: 'Diventare il centro di consulenza di fiducia per l\'integrazione e la consulenza finanziaria per la comunità turca in Italia e svolgere un ruolo di primo piano nell\'aiutare a raggiungere i loro obiettivi educativi, di vita, di carriera e finanziari. Padroneggiando il sistema italiano in continua evoluzione, forniamo ai nostri clienti le informazioni più aggiornate e accurate e facciamo parte delle loro storie di successo.'
    },
    values: {
      title: 'I Nostri Valori',
      description: 'Siamo impegnati nell\'eccellenza e nell\'innovazione, garantendo che ogni cliente riceva un servizio di alta qualità su misura per le proprie esigenze specifiche. I nostri valori di attenzione al cliente, integrità, innovazione e miglioramento continuo ci spingono ad adattarci all\'ambiente dinamico in Italia e a soddisfare efficacemente le esigenze dei nostri clienti.'
    }
  }
};

export default function MissionVision() {
  const { language } = useLanguage();
  const currentContent = content[language as keyof typeof content];

  return (
    <section className="py-20 bg-brand-bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-brand-blue mb-16">
          {currentContent.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-brand-bg-surface p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <FaBullseye className="text-brand-gold text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-brand-blue">
                {currentContent.mission.title}
              </h3>
            </div>
            <p className="text-brand-text-secondary leading-relaxed">
              {currentContent.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-brand-bg-surface p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <FaEye className="text-brand-gold text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-brand-blue">
                {currentContent.vision.title}
              </h3>
            </div>
            <p className="text-brand-text-secondary leading-relaxed">
              {currentContent.vision.description}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 bg-brand-bg-surface p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center mb-6">
            <FaHandshake className="text-brand-gold text-3xl mr-4" />
            <h3 className="text-2xl font-semibold text-brand-blue">
              {currentContent.values.title}
            </h3>
          </div>
          <p className="text-brand-text-secondary leading-relaxed">
            {currentContent.values.description}
          </p>
        </div>
      </div>
    </section>
  );
} 