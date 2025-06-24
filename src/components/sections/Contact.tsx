'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const getContactSectionContent = (lang: string) => {
  const content = {
    tr: {
      title: "İletişim",
      subtitle: "İtalya'da iş ve yaşam için entegrasyon çözümleri ve finansal danışmanlık hizmetlerimiz hakkında bize ulaşın.",
      formNameLabel: "Ad Soyad",
      formEmailLabel: "E-posta",
      formMessageLabel: "Mesajınız",
      formSubmitButton: "Gönder",
      formSendingButton: "Gönderiliyor...",
      formSuccessMessage: "Mesajınız başarıyla gönderildi!",
      formErrorMessage: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      formErrorDetails: "Hata detayı: ",
      privacyCheckbox1: "Kişisel verilerimin AB 679/2016 sayılı Tüzük uyarınca işlenmesine izin veriyorum",
      privacyCheckbox2: "Pazarlama, promosyon faaliyetleri, ticari teklifler ve pazar araştırması amaçlarıyla veri işlenmesine izin veriyorum",
      privacyPolicy: "Gizlilik Politikası",
      phoneTitle: "Telefon",
      phoneDetails: "Whatsapp: +39 348 170 5207<br />Alternatif: +39 351 713 6434",
      emailTitle: "E-posta",
      emailDetails: "alvoloconsulting@gmail.com",
      addressTitle: "Adres",
      addressDetails: "Via Valsugana <br />20139 Milano (MI)"
    },
    en: {
      title: "Contact",
      subtitle: "Contact us for integration solutions and financial consultancy services for doing business and living in Italy.",
      formNameLabel: "Full Name",
      formEmailLabel: "Email",
      formMessageLabel: "Your Message",
      formSubmitButton: "Send",
      formSendingButton: "Sending...",
      formSuccessMessage: "Your message has been sent successfully!",
      formErrorMessage: "An error occurred while sending your message. Please try again.",
      formErrorDetails: "Error details: ",
      privacyCheckbox1: "I authorize the processing of my personal data in accordance with EU Regulation No. 679/2016",
      privacyCheckbox2: "I authorize the processing of data for marketing purposes, promotional activities, commercial offers and market research",
      privacyPolicy: "Privacy Policy",
      phoneTitle: "Phone",
      phoneDetails: "Whatsapp: +39 348 170 5207<br />Alternative: +39 351 713 6434",
      emailTitle: "Email",
      emailDetails: "alvoloconsulting@gmail.com",
      addressTitle: "Address",
      addressDetails: "Via Valsugana <br />20139 Milano (MI)"
    },
    it: {
      title: "Contatti",
      subtitle: "Contattaci per soluzioni di integrazione e consulenza finanziaria per vivere e fare business in Italia.",
      formNameLabel: "Nome Cognome",
      formEmailLabel: "Email",
      formMessageLabel: "Il Tuo Messaggio",
      formSubmitButton: "Invia",
      formSendingButton: "Invio in corso...",
      formSuccessMessage: "Il tuo messaggio è stato inviato con successo!",
      formErrorMessage: "Si è verificato un errore durante l'invio del messaggio. Riprova.",
      formErrorDetails: "Dettagli errore: ",
      privacyCheckbox1: "Autorizzo il trattamento dei miei dati personali in base al Regolamento UE n. 679/2016",
      privacyCheckbox2: "Autorizzo al trattamento dei dati per finalità di marketing, attività promozionali, offerte commerciali ed indagini di mercato.",
      privacyPolicy: "Privacy Policy",
      phoneTitle: "Telefono",
      phoneDetails: "Whatsapp: +39 348 170 5207<br />Alternativo: +39 351 713 6434",
      emailTitle: "Email",
      emailDetails: "alvoloconsulting@gmail.com",
      addressTitle: "Indirizzo",
      addressDetails: "Via Valsugana <br />20139 Milano (MI)"
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
    <section id="contact" className="py-20 bg-brand-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            {c.title}
          </h2>
          <p className="text-xl text-brand-text-secondary">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-bg-surface p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-brand-text-primary mb-2">
                  {c.formNameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-brand-text-primary mb-2">
                  {c.formEmailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-brand-text-primary mb-2">
                  {c.formMessageLabel}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {/* Privacy Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    className="mt-1 w-4 h-4 text-brand-gold bg-gray-100 border-gray-300 rounded focus:ring-brand-gold focus:ring-2"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="privacyConsent" className="text-sm text-brand-text-secondary leading-relaxed">
                    {c.privacyCheckbox1} (
                    <a href="/privacy" className="text-brand-gold hover:underline" target="_blank" rel="noopener noreferrer">
                      {c.privacyPolicy}
                    </a>
                    )
                  </label>
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketingConsent"
                    className="mt-1 w-4 h-4 text-brand-gold bg-gray-100 border-gray-300 rounded focus:ring-brand-gold focus:ring-2"
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
                className="w-full bg-brand-blue text-black py-3 px-6 rounded-lg hover:brightness-10 transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? c.formSendingButton : c.formSubmitButton}
              </button>

              {submissionStatus === 'success' && (
                <p className="text-green-600">{c.formSuccessMessage}</p>
              )}
              {submissionStatus === 'error' && (
                <div className="text-red-600">
                  <p>{c.formErrorMessage}</p>
                  {errorDetails && (
                    <p className="text-sm mt-1">
                      {c.formErrorDetails}{errorDetails}
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaPhone className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">
                  {c.phoneTitle}
                </h3>
                <div className="text-brand-text-secondary">
                  {renderHtml(c.phoneDetails)}
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaEnvelope className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">
                  {c.emailTitle}
                </h3>
                <div className="text-brand-text-secondary">
                  {renderHtml(c.emailDetails)}
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">
                  {c.addressTitle}
                </h3>
                <div className="text-brand-text-secondary">
                  {renderHtml(c.addressDetails)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 