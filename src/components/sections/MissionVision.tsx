'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { FaBullseye, FaEye } from 'react-icons/fa';

const content = {
  tr: {
    title: 'Misyonumuz ve Vizyonumuz',
    mission: {
      title: 'Misyonumuz',
      description: 'İtalya\'ya eğitim veya yaşam amacıyla gelen Türk öğrencilere ve bireylere kapsamlı danışmanlık hizmetleri sunarak, onların İtalya\'daki yolculuklarını sorunsuz ve başarılı bir şekilde tamamlamalarına yardımcı olmak. Her müşterimizin benzersiz ihtiyaçlarını anlayarak, kişiselleştirilmiş çözümler sunmak ve İtalya\'daki deneyimlerini en iyi şekilde yaşamalarını sağlamak.'
    },
    vision: {
      title: 'Vizyonumuz',
      description: 'İtalya\'daki Türk topluluğunun güvenilir danışmanlık merkezi olmak ve eğitim, yaşam ve kariyer hedeflerine ulaşmalarında öncü bir rol oynamak. Sürekli gelişen ve değişen İtalyan sistemine hakim olarak, müşterilerimize en güncel ve doğru bilgileri sunmak ve onların başarı hikayelerinin bir parçası olmak.'
    }
  },
  en: {
    title: 'Our Mission and Vision',
    mission: {
      title: 'Our Mission',
      description: 'To provide comprehensive consultancy services to Turkish students and individuals coming to Italy for education or living purposes, helping them complete their journey in Italy smoothly and successfully. By understanding the unique needs of each client, we offer personalized solutions and ensure they have the best possible experience in Italy.'
    },
    vision: {
      title: 'Our Vision',
      description: 'To become the trusted consultancy center for the Turkish community in Italy and play a leading role in helping them achieve their educational, living, and career goals. By mastering the continuously evolving Italian system, we provide our clients with the most up-to-date and accurate information and be part of their success stories.'
    }
  },
  it: {
    title: 'La Nostra Missione e Visione',
    mission: {
      title: 'La Nostra Missione',
      description: 'Fornire servizi di consulenza completi agli studenti e agli individui turchi che vengono in Italia per motivi di studio o di vita, aiutandoli a completare il loro percorso in Italia in modo fluido e di successo. Comprendendo le esigenze uniche di ogni cliente, offriamo soluzioni personalizzate e garantiamo la migliore esperienza possibile in Italia.'
    },
    vision: {
      title: 'La Nostra Visione',
      description: 'Diventare il centro di consulenza di fiducia per la comunità turca in Italia e svolgere un ruolo di primo piano nell\'aiutare a raggiungere i loro obiettivi educativi, di vita e di carriera. Padroneggiando il sistema italiano in continua evoluzione, forniamo ai nostri clienti le informazioni più aggiornate e accurate e facciamo parte delle loro storie di successo.'
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
            <p className="mt-4 text-brand-text-secondary leading-relaxed">
              We are committed to excellence and innovation, ensuring that every client receives the highest quality service tailored to their specific needs.
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
            <p className="mt-4 text-brand-text-secondary leading-relaxed">
              Our vision is to be a beacon of trust and excellence, guiding our clients through their journey in Italy with confidence and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 