'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const getContactSectionContent = (lang: string) => {
  const content = {
    tr: {
      title: "İletişim",
      subtitle: "İtalya'da iş ve yaşam için entegrasyon çözümleri ve finansal danışmanlık hizmetlerimiz hakkında bize ulaşın.",
      formNameLabel: "Ad Soyad",
      formEmailLabel: "E-posta",
      formMessageLabel: "Mesajınız",
      formSubmitButton: "Mesaj Gönder",
      formSendingButton: "Gönderiliyor...",
      formSuccessMessage: "Mesajınız başarıyla gönderildi!",
      formErrorMessage: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      formErrorDetails: "Hata detayı: ",
      privacyCheckbox1: "Kişisel verilerimin AB 679/2016 sayılı Tüzük uyarınca işlenmesine izin veriyorum",
      privacyCheckbox2: "Pazarlama, promosyon faaliyetleri, ticari teklifler ve pazar araştırması amaçlarıyla veri işlenmesine izin veriyorum",
      privacyPolicy: "Gizlilik Politikası",
      phoneTitle: "Telefon",
      phoneDetails: "+39 348 170 5207",
      whatsappDetails: "WhatsApp: +39 348 170 5207",
      emailTitle: "E-posta",
      emailDetails: "alvoloconsulting@gmail.com",
      addressTitle: "Adres",
      addressDetails: "Via Valsugana, 20139 Milano (MI), İtalya",
      hoursTitle: "Çalışma Saatleri",
      hoursDetails: "Pazartesi - Cuma: 09:00 - 18:00<br />Cumartesi: 09:00 - 14:00<br />Pazar: Kapalı",
      getInTouch: "Bizimle İletişime Geçin",
      contactInfo: "İletişim Bilgileri",
      followUs: "Bizi Takip Edin"
    },
    en: {
      title: "Contact",
      subtitle: "Contact us for integration solutions and financial consultancy services for doing business and living in Italy.",
      formNameLabel: "Full Name",
      formEmailLabel: "Email",
      formMessageLabel: "Your Message",
      formSubmitButton: "Send Message",
      formSendingButton: "Sending...",
      formSuccessMessage: "Your message has been sent successfully!",
      formErrorMessage: "An error occurred while sending your message. Please try again.",
      formErrorDetails: "Error details: ",
      privacyCheckbox1: "I authorize the processing of my personal data in accordance with EU Regulation No. 679/2016",
      privacyCheckbox2: "I authorize the processing of data for marketing purposes, promotional activities, commercial offers and market research",
      privacyPolicy: "Privacy Policy",
      phoneTitle: "Phone",
      phoneDetails: "+39 348 170 5207",
      whatsappDetails: "WhatsApp: +39 348 170 5207",
      emailTitle: "Email",
      emailDetails: "alvoloconsulting@gmail.com",
      addressTitle: "Address",
      addressDetails: "Via Valsugana, 20139 Milano (MI), Italy",
      hoursTitle: "Business Hours",
      hoursDetails: "Monday - Friday: 09:00 - 18:00<br />Saturday: 09:00 - 14:00<br />Sunday: Closed",
      getInTouch: "Get In Touch",
      contactInfo: "Contact Information",
      followUs: "Follow Us"
    },
    it: {
      title: "Contatti",
      subtitle: "Contattaci per soluzioni di integrazione e consulenza finanziaria per vivere e fare business in Italia.",
      formNameLabel: "Nome Cognome",
      formEmailLabel: "Email",
      formMessageLabel: "Il Tuo Messaggio",
      formSubmitButton: "Invia Messaggio",
      formSendingButton: "Invio in corso...",
      formSuccessMessage: "Il tuo messaggio è stato inviato con successo!",
      formErrorMessage: "Si è verificato un errore durante l'invio del messaggio. Riprova.",
      formErrorDetails: "Dettagli errore: ",
      privacyCheckbox1: "Autorizzo il trattamento dei miei dati personali in base al Regolamento UE n. 679/2016",
      privacyCheckbox2: "Autorizzo al trattamento dei dati per finalità di marketing, attività promozionali, offerte commerciali ed indagini di mercato.",
      privacyPolicy: "Privacy Policy",
      phoneTitle: "Telefono",
      phoneDetails: "+39 348 170 5207",
      whatsappDetails: "WhatsApp: +39 348 170 5207",
      emailTitle: "Email",
      emailDetails: "alvoloconsulting@gmail.com",
      addressTitle: "Indirizzo",
      addressDetails: "Via Valsugana, 20139 Milano (MI), Italia",
      hoursTitle: "Orari di Lavoro",
      hoursDetails: "Lunedì - Venerdì: 09:00 - 18:00<br />Sabato: 09:00 - 14:00<br />Domenica: Chiuso",
      getInTouch: "Mettiti in Contatto",
      contactInfo: "Informazioni di Contatto",
      followUs: "Seguici"
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const Contact = () => {
  const { language } = useLanguage();
  const c = getContactSectionContent(language);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyConsent: false,
    marketingConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ 
      ...prev, 
      [id]: type === 'checkbox' ? checked : value 
    }));
    // Clear error when user starts typing
    if (submissionStatus === 'error') {
      setSubmissionStatus(null);
      setErrorDetails(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setErrorDetails(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '', privacyConsent: false, marketingConsent: false }); // Reset form
      } else {
        setSubmissionStatus('error');
        setErrorDetails(data.details || data.error || 'An unknown error occurred');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      setErrorDetails('Network error. Please check your internet connection.');
    }
    setIsSubmitting(false);
  };

  // Helper to render text with <br /> tags
  const renderHtml = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-full mb-6 shadow-lg">
            <FaEnvelope className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-blue mb-6">
            {c.title}
          </h2>
          <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-lg flex items-center justify-center mr-3">
                  <FaPhone className="w-4 h-4 text-white" />
                </div>
                {c.contactInfo}
              </h3>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brand-blue mb-1">
                      {c.phoneTitle}
                    </h4>
                    <p className="text-brand-text-secondary mb-2">
                      {c.phoneDetails}
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      {c.whatsappDetails}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brand-blue mb-1">
                      {c.emailTitle}
                    </h4>
                    <p className="text-brand-text-secondary">
                      {c.emailDetails}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brand-blue mb-1">
                      {c.addressTitle}
                    </h4>
                    <p className="text-brand-text-secondary">
                      {c.addressDetails}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brand-blue mb-1">
                      {c.hoursTitle}
                    </h4>
                    <div className="text-brand-text-secondary text-sm">
                      {renderHtml(c.hoursDetails)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-brand-blue mb-4">
                  {c.followUs}
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/393481705207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/alvolo-consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaLinkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/alvoloconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaInstagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-lg flex items-center justify-center mr-3">
                  <FaEnvelope className="w-4 h-4 text-white" />
                </div>
                {c.getInTouch}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-brand-text-primary font-semibold mb-3">
                      {c.formNameLabel} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-brand-text-primary focus:outline-none focus:border-brand-gold focus:bg-white transition-all duration-300"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-brand-text-primary font-semibold mb-3">
                      {c.formEmailLabel} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-brand-text-primary focus:outline-none focus:border-brand-gold focus:bg-white transition-all duration-300"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-brand-text-primary font-semibold mb-3">
                    {c.formMessageLabel} *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-brand-text-primary focus:outline-none focus:border-brand-gold focus:bg-white transition-all duration-300 resize-none"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>
                
                {/* Privacy Checkboxes */}
                <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      className="mt-1 w-5 h-5 text-brand-gold bg-white border-2 border-gray-300 rounded focus:ring-brand-gold focus:ring-2"
                      required
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="privacyConsent" className="text-sm text-brand-text-secondary leading-relaxed">
                      {c.privacyCheckbox1} (
                      <a href="/privacy" className="text-brand-gold hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                        {c.privacyPolicy}
                      </a>
                      )
                    </label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="marketingConsent"
                      className="mt-1 w-5 h-5 text-brand-gold bg-white border-2 border-gray-300 rounded focus:ring-brand-gold focus:ring-2"
                      checked={formData.marketingConsent}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="marketingConsent" className="text-sm text-brand-text-secondary leading-relaxed">
                      {c.privacyCheckbox2}
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-gold to-yellow-600 text-white py-4 px-8 rounded-xl hover:from-yellow-600 hover:to-brand-gold transition-all duration-300 disabled:opacity-50 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {c.formSendingButton}
                    </span>
                  ) : (
                    c.formSubmitButton
                  )}
                </button>

                {submissionStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-700 font-medium">{c.formSuccessMessage}</p>
                  </div>
                )}
                {submissionStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-700 font-medium">{c.formErrorMessage}</p>
                    {errorDetails && (
                      <p className="text-sm text-red-600 mt-2">
                        {c.formErrorDetails}{errorDetails}
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 