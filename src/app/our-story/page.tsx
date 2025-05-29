import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-bg-primary pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto bg-brand-bg-surface rounded-xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
                Fikrimizin Doğuşu
              </h1>
              <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full mb-6"></div>
            </div>
            <article className="prose prose-lg max-w-none text-brand-text-primary">
              <p className="text-brand-text-secondary">
                İtalya&apos;da eğitim veya yeni bir yaşam hayali kuran birçok kişinin karşılaştığı bürokratik zorluklar ve bilgi karmaşası, Çetin & Aslan Danışmanlık fikrinin temelini attı.
              </p>
              <p className="text-brand-text-secondary">
                Kendi deneyimlerimizden ve çevremizdeki öğrencilerin, akademisyenlerin ve profesyonellerin İtalya&apos;daki süreçlerde yaşadığı zorluklardan ilham alarak, bu yolculuğu herkes için daha anlaşılır, yönetilebilir ve stressiz hale getirmeyi amaçladık.
              </p>
              <p className="text-brand-text-secondary">
                En büyük motivasyonumuz, İtalya&apos;daki hedeflerinize ulaşma yolunda karmaşık prosedürler arasında değerli zamanınızı ve enerjinizi kaybetmemeniz, bunun yerine hayallerinize ve yeni başlangıçlarınıza odaklanabilmenizdir.
              </p>
            </article>
            <div className="mt-12 text-center">
              <Link
                href="/hizmetlerimiz"
                className="inline-block px-8 py-4 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Hizmetlerimize Göz Atın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 