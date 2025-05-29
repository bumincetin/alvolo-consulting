"use client"; // Make sure client component if not already

import { FaCalculator, FaChartLine, FaFileInvoiceDollar, FaHandshake, FaBalanceScale, FaBook } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext'; // Import useLanguage

// Original services data - keep for structure if needed, or remove if fully dynamic
const staticServicesData = [
  { icon: FaCalculator, keyPrefix: "service1" },
  { icon: FaFileInvoiceDollar, keyPrefix: "service2" },
  { icon: FaBook, keyPrefix: "service3" },
  { icon: FaHandshake, keyPrefix: "service4" },
  { icon: FaChartLine, keyPrefix: "service5" },
  { icon: FaBalanceScale, keyPrefix: "service6" },
];

const Services = () => {
  const { translations, isLoading } = useLanguage(); // Get translations

  if (isLoading || !translations.servicesPage) {
    // Show loading state or a fallback
    return (
      <section id="services" className="py-20 bg-brand-bg-primary">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl text-brand-text-secondary">Loading services...</p>
        </div>
      </section>
    );
  }

  // Map over static data to get icons and keys, then use translations
  const services = staticServicesData.map(service => ({
    icon: service.icon,
    title: translations.servicesPage[service.keyPrefix]?.title || `${service.keyPrefix} title missing`,
    description: translations.servicesPage[service.keyPrefix]?.description || `${service.keyPrefix} description missing`,
  }));

  return (
    <section id="services" className="py-20 bg-brand-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            {translations.servicesPage.title}
          </h2>
          <p className="text-xl text-brand-text-secondary">
            {translations.servicesPage.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-brand-bg-surface hover:shadow-xl transition duration-300"
            >
              <service.icon className="w-12 h-12 text-brand-gold mb-6" />
              <h3 className="text-2xl font-semibold text-brand-blue mb-4">
                {service.title}
              </h3>
              <p className="text-brand-text-secondary">
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