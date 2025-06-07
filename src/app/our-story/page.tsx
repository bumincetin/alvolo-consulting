'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const getOurStoryContent = (lang: string) => {
  const content = {
    tr: {
      pageTitle: "Fikrimizin Doğuşu",
      paragraph1: "İtalya'da eğitim veya yeni bir yaşam hayali kuran birçok kişinin karşılaştığı bürokratik zorluklar ve bilgi karmaşası, Alvolo Danışmanlık fikrinin temelini attı.",
      paragraph2: "Kendi deneyimlerimizden ve çevremizdeki öğrencilerin, akademisyenlerin ve profesyonellerin İtalya'daki süreçlerde yaşadığı zorluklardan ilham alarak, bu yolculuğu herkes için daha anlaşılır, yönetilebilir ve stressiz hale getirmeyi amaçladık.",
      paragraph3: "En büyük motivasyonumuz, İtalya'daki hedeflerinize ulaşma yolunda karmaşık prosedürler arasında değerli zamanınızı ve enerjinizi kaybetmemeniz, bunun yerine hayallerinize ve yeni başlangıçlarınıza odaklanabilmenizdir.",
      servicesButtonText: "Hakkımızda"
    },
    en: {
      pageTitle: "The Birth of Our Idea",
      paragraph1: "The bureaucratic difficulties and information chaos faced by many people dreaming of education or a new life in Italy laid the foundation for the idea of Alvolo Consulting.",
      paragraph2: "Inspired by our own experiences and the difficulties faced by students, academics, and professionals around us in their processes in Italy, we aimed to make this journey more understandable, manageable, and stress-free for everyone.",
      paragraph3: "Our greatest motivation is to ensure that you do not lose your valuable time and energy among complex procedures on the way to achieving your goals in Italy, but instead can focus on your dreams and new beginnings.",
      servicesButtonText: "About Us"
    },
    it: {
      pageTitle: "La Nascita della Nostra Idea",
      paragraph1: "Le difficoltà burocratiche e il caos informativo affrontati da molte persone che sognano un'istruzione o una nuova vita in Italia hanno posto le basi per l'idea di Alvolo Consulenza.",
      paragraph2: "Ispirati dalle nostre esperienze e dalle difficoltà affrontate da studenti, accademici e professionisti intorno a noi nei loro processi in Italia, abbiamo mirato a rendere questo viaggio più comprensibile, gestibile e privo di stress per tutti.",
      paragraph3: "La nostra più grande motivazione è garantire che non perdiate tempo ed energia preziosi tra procedure complesse sulla strada per raggiungere i vostri obiettivi in Italia, ma che possiate invece concentrarvi sui vostri sogni e nuovi inizi.",
      servicesButtonText: "Chi Siamo"
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const OurStoryPageComponent = () => {
  const { language } = useLanguage();
  const c = getOurStoryContent(language);

  return (
    <div className="min-h-screen bg-brand-bg-primary pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="w-full max-w-3xl mx-auto mb-10">
          <Image
            src="/milanoyeni.jpg"
            alt="Milan city view - Our Story"
            width={900}
            height={400}
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>
        <div className="max-w-3xl mx-auto bg-brand-bg-surface rounded-xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
              {c.pageTitle}
            </h1>
            <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full mb-6"></div>
          </div>
          <article className="prose prose-lg max-w-none text-brand-text-primary">
            <p className="text-brand-text-secondary">
              {c.paragraph1}
            </p>
            <p className="text-brand-text-secondary">
              {c.paragraph2}
            </p>
            <p className="text-brand-text-secondary">
              {c.paragraph3}
            </p>
          </article>
          <div className="mt-12 text-center">
            <Link
              href="/about" // Assuming this path is correct and doesn't need locale prefixing by Link itself
              className="inline-block px-8 py-4 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              {c.servicesButtonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <OurStoryPageComponent />
    </>
  );
} 