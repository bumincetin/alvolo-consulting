'use client';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaCheck } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const getFooterContent = (lang: string) => {
  const content = {
    tr: {
      company: {
        name: 'ALVOLO CONSULTING',
        title: 'Finansal Danışmanlık ve İtalya Entegrasyon Çözümleri',
        subtitle: 'Chamber of Certified Public Accountants',
        address: 'Via Valsugana 6, 20139 Milan, Italy',
      },
      corporate: {
        title: 'Kurumsal',
        links: [
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hakkımızda', href: '/about' },
          { label: 'Hizmetlerimiz', href: '/services' },
          { label: 'Duyurular', href: '/announcements' },
          { label: 'Blog', href: '/blog' },
          { label: 'İletişim', href: '/contact' },
        ],
      },
      services: {
        title: 'Hizmetler',
        links: [
          { label: 'Entegrasyon Çözümleri', href: '/services/integration' },
          { label: 'Finansal Danışmanlık', href: '/services/financial' },
          { label: 'Entegrasyon Hizmetleri Fiyatlandırma', href: '/pricing' },
          { label: 'Emlak Danışmanları İçin', href: '/real-estate-agents' },
        ],
      },
      hours: {
        title: 'Çalışma Saatleri',
        weekday: 'Pazartesi – Cuma',
        time: '09:00 – 18:00',
        closed: 'Cumartesi ve Pazar günleri kapalıyız.',
      },
      copyright: 'ALVOLO CONSULTING',
      disclaimer: 'Bu web sitesinde yer alan tüm içerikler, yazılı izin alınmadıkça kopyalanamaz, çoğaltılamaz, dağıtılamaz veya başka platformlarda kullanılamaz. Site içeriği, yalnızca bilgilendirme amaçlıdır ve profesyonel mali danışmanlık hizmeti yerine geçmez.',
      reserved: '© 2024 – Tüm Hakları Saklıdır.',
    },
    en: {
      company: {
        name: 'ALVOLO CONSULTING',
        title: 'Financial Consultancy & Italy Integration Solutions',
        subtitle: 'Chamber of Certified Public Accountants',
        address: 'Via Valsugana 6, 20139 Milan, Italy',
      },
      corporate: {
        title: 'Corporate',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Announcements', href: '/announcements' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      services: {
        title: 'Services',
        links: [
          { label: 'Integration Solutions', href: '/services/integration' },
          { label: 'Financial Consultancy', href: '/services/financial' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Real Estate Agents', href: '/real-estate-agents' },
        ],
      },
      hours: {
        title: 'Working Hours',
        weekday: 'Monday – Friday',
        time: '09:00 – 18:00',
        closed: 'Closed on Saturday and Sunday.',
      },
      copyright: 'ALVOLO CONSULTING',
      disclaimer: 'All content on this website may not be copied, reproduced, distributed, or used on other platforms without written permission. The site content is for informational purposes only and does not constitute professional financial consulting.',
      reserved: '© 2024 – All Rights Reserved.',
    },
    it: {
      company: {
        name: 'ALVOLO CONSULTING',
        title: 'Consulenza Finanziaria & Soluzioni di Integrazione Italia',
        subtitle: 'Camera dei Commercialisti Certificati',
        address: 'Via Valsugana 6, 20139 Milan, Italy',
      },
      corporate: {
        title: 'Società',
        links: [
          { label: 'Pagina Iniziale', href: '/' },
          { label: 'Chi Siamo', href: '/about' },
          { label: 'Servizi', href: '/services' },
          { label: 'Annunci', href: '/announcements' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contatto', href: '/contact' },
        ],
      },
      services: {
        title: 'Servizi',
        links: [
          { label: 'Soluzioni di Integrazione', href: '/services/integration' },
          { label: 'Consulenza Finanziaria', href: '/services/financial' },
          { label: 'Prezzi', href: '/pricing' },
          { label: 'Agenti Immobiliari', href: '/real-estate-agents' },
        ],
      },
      hours: {
        title: 'Orari di Lavoro',
        weekday: 'Lunedì – Venerdì',
        time: '09:00 – 18:00',
        closed: 'Chiuso il sabato e la domenica.',
      },
      copyright: 'ALVOLO CONSULTING',
      disclaimer: 'Tutti i contenuti di questo sito web non possono essere copiati, riprodotti, distribuiti o utilizzati su altre piattaforme senza autorizzazione scritta. Il contenuto del sito è solo a scopo informativo e non costituisce consulenza finanziaria professionale.',
      reserved: '© 2024 – Tutti i diritti riservati.',
    },
  };
  return content[lang as keyof typeof content] || content.tr;
};

const Footer = () => {
  const { language } = useLanguage();
  const c = getFooterContent(language);
  return (
    <footer className="bg-white border-t border-gray-100 pt-10 pb-4 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo & Contact */}
          <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
            <div className="flex items-center mb-2">
              <img src="https://dl.dropboxusercontent.com/scl/fi/kyiy7zmfhp2qm0sucd7nt/ICON.png?rlkey=3wzqu5r27zaag3j8mpawjydpy&st=qjoffk41&dl=1&raw=1" alt="ALVOLO CONSULTING Logo" className="h-12 w-12 object-contain mr-3 rounded bg-white border border-gray-200 p-1" />
              <div>
                <div className="font-bold text-lg text-brand-blue">{c.company.name}</div>
                <div className="text-xs text-gray-600">{c.company.title}<br />{c.company.subtitle}</div>
              </div>
            </div>
            <div className="text-sm text-gray-700 mb-2">{c.company.address}</div>
            <div className="flex space-x-2 mb-4">
              <a href="https://www.instagram.com/alvoloconsulting?igsh=Z3IzbzBsNGJraWs%3D" target="_blank" rel="noopener" className="p-2 bg-gray-100 rounded hover:bg-brand-blue hover:text-white transition"><FaInstagram size={20} /></a>
              <a href="https://www.linkedin.com/company/alvolo-consulting" target="_blank" rel="noopener" className="p-2 bg-gray-100 rounded hover:bg-brand-blue hover:text-white transition"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Corporate Links */}
          <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
            <div className="font-bold text-lg text-brand-blue border-b border-gray-200 pb-1 mb-3">{c.corporate.title}</div>
            <ul className="space-y-2 text-sm">
              {c.corporate.links.map((item, idx) => (
                <li key={idx}>
                  <FaCheck className="inline mr-2 text-brand-gold" />
                  <Link href={item.href} className="hover:underline">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
            <div className="font-bold text-lg text-brand-blue border-b border-gray-200 pb-1 mb-3">{c.services.title}</div>
            <ul className="space-y-2 text-sm">
              {c.services.links.map((item, idx) => (
                <li key={idx}><FaCheck className="inline mr-2 text-brand-gold" /><Link href={item.href} className="hover:underline">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="flex-1 min-w-[180px]">
            <div className="font-bold text-lg text-brand-blue border-b border-gray-200 pb-1 mb-3">{c.hours.title}</div>
            <div className="text-sm mb-2"><span className="font-semibold">{c.hours.weekday}</span><br />{c.hours.time}</div>
            <div className="text-xs text-gray-500">{c.hours.closed}</div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 text-xs text-gray-500 text-center">
          <div className="mb-2 font-semibold text-gray-700">{c.copyright}</div>
          <div className="mb-2">{c.disclaimer}</div>
          <div>{c.reserved}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 