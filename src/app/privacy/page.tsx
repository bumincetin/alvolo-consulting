"use client";
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';

const getPrivacyContent = (lang: string) => {
  const content = {
    tr: {
      title: "Gizlilik Politikası",
      sections: [
        {
          heading: "1. Genel Bilgiler",
          text: "ALVOLO CONSULTING financial consultancy & Italy integration solutions olarak, kişisel verilerinizin gizliliğine büyük önem veriyoruz. Bu gizlilik politikası, web sitemizi kullanırken hangi bilgileri topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklar."
        },
        {
          heading: "2. Toplanan Bilgiler",
          text: "Web sitemizi ziyaret ettiğinizde, adınız, e-posta adresiniz, telefon numaranız gibi kişisel bilgiler ve IP adresiniz, tarayıcı bilgileriniz gibi teknik veriler toplanabilir."
        },
        {
          heading: "3. Bilgilerin Kullanımı",
          text: "Toplanan bilgiler, size daha iyi hizmet sunmak, taleplerinizi yanıtlamak, yasal yükümlülüklerimizi yerine getirmek ve hizmetlerimizi geliştirmek amacıyla kullanılır."
        },
        {
          heading: "4. Çerezler (Cookies)",
          text: "Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır. Çerezleri tarayıcı ayarlarınızdan devre dışı bırakabilirsiniz, ancak bu durumda bazı özellikler çalışmayabilir."
        },
        {
          heading: "5. Üçüncü Taraf Hizmetler",
          text: "Web sitemiz, Google Analytics gibi üçüncü taraf hizmet sağlayıcıları kullanabilir. Bu hizmetler, kendi gizlilik politikalarına tabidir."
        },
        {
          heading: "6. Kullanıcı Hakları",
          text: "Kişisel verilerinizin işlenip işlenmediğini öğrenme, verilerinize erişme, düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz."
        },
        {
          heading: "7. İletişim",
          text: "Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz: info@alvoloconsulting.com"
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. General Information",
          text: "At ALVOLO CONSULTING financial consultancy & Italy integration solutions, we highly value the privacy of your personal data. This privacy policy explains what information we collect, how we use it, and how we protect it when you use our website."
        },
        {
          heading: "2. Information Collected",
          text: "When you visit our website, we may collect personal information such as your name, email address, phone number, as well as technical data like your IP address and browser information."
        },
        {
          heading: "3. Use of Information",
          text: "The collected information is used to provide better service, respond to your requests, fulfill our legal obligations, and improve our services."
        },
        {
          heading: "4. Cookies",
          text: "We use cookies to enhance user experience on our website. You can disable cookies in your browser settings, but some features may not function properly."
        },
        {
          heading: "5. Third-Party Services",
          text: "Our website may use third-party service providers such as Google Analytics. These services are subject to their own privacy policies."
        },
        {
          heading: "6. User Rights",
          text: "You have the right to know whether your personal data is being processed, to access your data, and to request correction or deletion."
        },
        {
          heading: "7. Contact",
          text: "For questions about our privacy policy, you can contact us at: info@alvoloconsulting.com"
        }
      ]
    },
    it: {
      title: "Informativa sulla Privacy",
      sections: [
        {
          heading: "1. Informazioni Generali",
          text: "ALVOLO CONSULTING financial consultancy & Italy integration solutions attribuisce grande importanza alla privacy dei tuoi dati personali. Questa informativa spiega quali informazioni raccogliamo, come le utilizziamo e come le proteggiamo durante l'uso del nostro sito web."
        },
        {
          heading: "2. Informazioni Raccolte",
          text: "Quando visiti il nostro sito, possiamo raccogliere informazioni personali come nome, indirizzo email, numero di telefono, nonché dati tecnici come indirizzo IP e informazioni sul browser."
        },
        {
          heading: "3. Utilizzo delle Informazioni",
          text: "Le informazioni raccolte vengono utilizzate per fornire un servizio migliore, rispondere alle tue richieste, adempiere agli obblighi legali e migliorare i nostri servizi."
        },
        {
          heading: "4. Cookie",
          text: "Utilizziamo i cookie per migliorare l'esperienza utente sul nostro sito. Puoi disabilitare i cookie nelle impostazioni del browser, ma alcune funzionalità potrebbero non funzionare correttamente."
        },
        {
          heading: "5. Servizi di Terze Parti",
          text: "Il nostro sito può utilizzare fornitori di servizi di terze parti come Google Analytics. Questi servizi sono soggetti alle proprie politiche sulla privacy."
        },
        {
          heading: "6. Diritti dell'Utente",
          text: "Hai il diritto di sapere se i tuoi dati personali vengono trattati, di accedere ai tuoi dati e di richiederne la correzione o la cancellazione."
        },
        {
          heading: "7. Contatto",
          text: "Per domande sulla nostra informativa sulla privacy, puoi contattarci a: info@alvoloconsulting.com"
        }
      ]
    }
  };
  return content[lang as keyof typeof content] || content.tr;
};

const PrivacyPage = () => {
  const { language } = useLanguage();
  const c = getPrivacyContent(language);
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-10 text-center">{c.title}</h1>
        <div className="space-y-8">
          {c.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-semibold text-brand-gold mb-2">{section.heading}</h2>
              <p className="text-brand-text-secondary leading-relaxed">{section.text}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default PrivacyPage; 