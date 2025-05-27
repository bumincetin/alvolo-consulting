import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Fikrimizin Doğuşu
              </h1>
              <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
            </div>
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                İtalya'da eğitim veya yeni bir yaşam hayali kuran birçok kişinin karşılaştığı bürokratik zorluklar ve bilgi karmaşası, Çetin & Aslan Danışmanlık fikrinin temelini attı.
              </p>
              <p>
                Kendi deneyimlerimizden ve çevremizdeki öğrencilerin, akademisyenlerin ve profesyonellerin İtalya'daki süreçlerde yaşadığı zorluklardan ilham alarak, bu yolculuğu herkes için daha anlaşılır, yönetilebilir ve stressiz hale getirmeyi amaçladık.
              </p>
              <p>
                En büyük motivasyonumuz, İtalya'daki hedeflerinize ulaşma yolunda karmaşık prosedürler arasında değerli zamanınızı ve enerjinizi kaybetmemeniz, bunun yerine hayallerinize ve yeni başlangıçlarınıza odaklanabilmenizdir.
              </p>
            </article>
            <div className="mt-12 text-center">
              <Link
                href="/hizmetlerimiz"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
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