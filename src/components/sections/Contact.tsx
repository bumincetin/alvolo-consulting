'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const getContactSectionContent = (lang: string) => {
  const content = {
    tr: {
      title: "İletişim",
      subtitle: "Sorularınız için bize ulaşın",
      formNameLabel: "Ad Soyad",
      formEmailLabel: "E-posta",
      formMessageLabel: "Mesajınız",
      formSubmitButton: "Gönder",
      formSendingButton: "Gönderiliyor...",
      formSuccessMessage: "Mesajınız başarıyla gönderildi!",
      formErrorMessage: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      phoneTitle: "Telefon",
      phoneDetails: "Whatsapp: +39 348 170 5207<br />Alternatif: +39 351 713 6434",
      emailTitle: "E-posta",
      emailDetails: "alvoloconsulting@gmail.com<br />info@alvoloconsulting.it",
      addressTitle: "Adres",
      addressDetails: "Via Valsugana <br />20139 Milano (MI)"
    },
    en: {
      title: "Contact",
      subtitle: "Contact us with your questions",
      formNameLabel: "Full Name",
      formEmailLabel: "Email",
      formMessageLabel: "Your Message",
      formSubmitButton: "Send",
      formSendingButton: "Sending...",
      formSuccessMessage: "Your message has been sent successfully!",
      formErrorMessage: "An error occurred while sending your message. Please try again.",
      phoneTitle: "Phone",
      phoneDetails: "Whatsapp: +39 348 170 5207<br />Alternative: +39 351 713 6434",
      emailTitle: "Email",
      emailDetails: "alvoloconsulting@gmail.com<br />info@alvoloconsulting.it",
      addressTitle: "Address",
      addressDetails: "Via Valsugana <br />20139 Milano (MI)"
    },
    it: {
      title: "Contatti",
      subtitle: "Contattaci con le tue domande",
      formNameLabel: "Nome Cognome",
      formEmailLabel: "Email",
      formMessageLabel: "Il Tuo Messaggio",
      formSubmitButton: "Invia",
      formSendingButton: "Invio in corso...",
      formSuccessMessage: "Il tuo messaggio è stato inviato con successo!",
      formErrorMessage: "Si è verificato un errore durante l'invio del messaggio. Riprova.",
      phoneTitle: "Telefono",
      phoneDetails: "Whatsapp: +39 348 170 5207<br />Alternativo: +39 351 713 6434",
      emailTitle: "Email",
      emailDetails: "alvoloconsulting@gmail.com<br />info@alvoloconsulting.it",
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
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
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
                <p className="text-red-600">{c.formErrorMessage}</p>
              )}
            </form>
          </div>
          
          <div className="space-y-8 text-brand-text-primary">
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