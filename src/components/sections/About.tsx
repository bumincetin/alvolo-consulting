import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const values = [
  "Mesleki etik değerlere bağlılık",
  "Güvenilirlik ve şeffaflık",
  "Müşteri odaklı hizmet anlayışı",
  "Güncel mevzuat takibi",
  "Hızlı ve etkili çözümler"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative w-full h-[600px] transform hover:scale-[1.02] transition-transform duration-500">
              {/* <div className="absolute -inset-4 bg-blue-600/10 rounded-xl blur-lg"></div> */}
              <Image
                src="/bocconi.jpg"
                alt="Bocconi"
                fill
                className="object-cover rounded-xl shadow-xl"
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Hakkımızda
              </h2>
              <div className="h-1 w-1/3 bg-blue-600 rounded-full mb-6"></div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Güçlü Mali Müşavirlik olarak, 1995 yılından bu yana Ankara'da mali müşavirlik ve danışmanlık hizmetleri sunmaktayız. 
              <span className="block mt-4 font-semibold text-blue-700 dark:text-blue-400">
                SMMM Selma ÇETİN liderliğinde, deneyimli kadromuzla müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.
              </span>
              <span className="block mt-4">
                Mesleki gelişmeleri ve değişen mevzuatı yakından takip ederek, müşterilerimize güncel ve doğru bilgiyi aktarıyoruz.
              </span>
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Değerlerimiz
              </h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <FaCheck className="text-blue-600 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">28+</div>
                <div className="text-gray-700 dark:text-gray-300">Yıllık Tecrübe</div>
              </div>
              <div className="p-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">1000+</div>
                <div className="text-gray-700 dark:text-gray-300">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 