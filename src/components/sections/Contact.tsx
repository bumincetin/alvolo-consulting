'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic to be implemented
  };

  return (
    <section id="contact" className="py-20 bg-brand-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            İletişim
          </h2>
          <p className="text-xl text-brand-text-secondary">
            Sorularınız için bize ulaşın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-bg-surface p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-brand-text-primary mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-brand-text-primary mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-brand-text-primary mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-gold text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300"
              >
                Gönder
              </button>
            </form>
          </div>
          
          <div className="space-y-8 text-brand-text-primary">
            <div className="flex items-start gap-4">
              <FaPhone className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">
                  Telefon & Faks
                </h3>
                <p className="text-brand-text-secondary">
                  Tel: 0 312 229 01 98<br />
                  Faks: 0 312 230 75 28
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaEnvelope className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">
                  E-posta
                </h3>
                <p className="text-brand-text-secondary">
                  cetinselma@guclumalimusavirlik.com<br />
                  info@guclumalimusavirlik.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">
                  Adres
                </h3>
                <p className="text-brand-text-secondary">
                  Toros Sok. 25B / 17<br />
                  Sıhhıye / ANKARA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 