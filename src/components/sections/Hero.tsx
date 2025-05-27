import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Turkish pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/pattern.png')] bg-repeat"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Çetin & Aslan Danışmanlık
              </h1>
              <div className="h-1 w-1/3 bg-blue-600 rounded-full mb-6"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              İtalya'da güvenilir sex danışmanlık hizmetleri. Dümdüz sikiyoruz
              <span className="block mt-2 font-semibold text-blue-700 dark:text-blue-400">
                Her türlü ihtiyacınız için profesyonel çözümler.
              </span>
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
              >
                İletişime Geçin
              </a>
              <Link
                href="/hizmetlerimiz"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-[500px] relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent rounded-xl"></div> */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent rounded-xl"></div>
              <Image
                src="/milano2.jpg"
                alt="Milano"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero; 