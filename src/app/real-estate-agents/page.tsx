'use client';

import { useLanguage } from '@/contexts/LanguageContext'; // Assuming this is the correct path

const getRealEstateAgentsPageContent = (lang: string) => {
  const content = {
    en: {
      title: "For Real Estate Agents",
      intro: "We help you reach serious, ready-to-rent international tenants — students, professionals, and newcomers to Italy — by matching your listings with their needs through targeted promotion and personalized support.",
      value_prop_intro: "You bring the property. We bring vetted demand that you would otherwise not reach.",
      what_we_offer_title: "What We Offer You:",
      offer_1_title: "New Demand Stream",
      offer_1_desc: "We connect your listings to non-Italian tenants, including international students, expats, and freelancers moving to Italy — a group often underserved by traditional agencies.",
      offer_2_title: "Multi-Channel Visibility",
      offer_2_desc: "We promote your properties on non-Italian platforms (like Sahibinden, Facebook expat groups, and university housing boards), helping you reach tenants who may not speak Italian or use local platforms.",
      offer_3_title: "Localized Tenant Support",
      offer_3_desc: "We handle communication, translation, and clarification of the Italian rental process — reducing your time spent managing language barriers and unrealistic expectations.",
      offer_4_title: "Lead Quality, Not Quantity",
      offer_4_desc: "You receive inquiries only from pre-screened tenants who match your rental conditions (duration, documents, budget). We filter out non-serious interest.",
      offer_5_title: "No Exclusivity, No Disruption",
      offer_5_desc: "You keep full control over your listings, contracts, and fees. We're not a competing agency — we're an additional demand channel that works alongside your existing model.",
      offer_6_title: "Professional Presentation",
      offer_6_desc: "We help prepare or translate listing information, ensuring that your property is clearly and professionally presented to international audiences."
    },
    it: {
      title: "Per Agenti Immobiliari",
      intro: "Ti aiutiamo a raggiungere inquilini internazionali seri e pronti per l'affitto — studenti, professionisti e nuovi arrivati in Italia — abbinando le tue inserzioni alle loro esigenze attraverso una promozione mirata e un supporto personalizzato.",
      value_prop_intro: "Tu porti la proprietà. Noi portiamo una domanda verificata che altrimenti non raggiungeresti.",
      what_we_offer_title: "Cosa Ti Offriamo:",
      offer_1_title: "Nuovo Flusso di Domanda",
      offer_1_desc: "Colleghiamo le tue inserzioni a inquilini non italiani, inclusi studenti internazionali, expat e liberi professionisti che si trasferiscono in Italia — un gruppo spesso poco servito dalle agenzie tradizionali.",
      offer_2_title: "Visibilità Multicanale",
      offer_2_desc: "Promuoviamo le tue proprietà su piattaforme non italiane (come Sahibinden, gruppi Facebook per expat e bacheche universitarie), aiutandoti a raggiungere inquilini che potrebbero non parlare italiano o non utilizzare piattaforme locali.",
      offer_3_title: "Supporto Localizzato per Inquilini",
      offer_3_desc: "Gestiamo la comunicazione, la traduzione e la chiarificazione del processo di affitto italiano — riducendo il tempo speso a gestire barriere linguistiche e aspettative irrealistiche.",
      offer_4_title: "Qualità dei Contatti, Non Quantità",
      offer_4_desc: "Ricevi richieste solo da inquilini pre-selezionati che corrispondono alle tue condizioni di affitto (durata, documenti, budget). Filtriamo l'interesse non serio.",
      offer_5_title: "Nessuna Esclusività, Nessuna Interruzione",
      offer_5_desc: "Mantieni il pieno controllo sulle tue inserzioni, contratti e commissioni. Non siamo un'agenzia concorrente — siamo un canale di domanda aggiuntivo che funziona parallelmente al tuo modello esistente.",
      offer_6_title: "Presentazione Professionale",
      offer_6_desc: "Aiutiamo a preparare o tradurre le informazioni delle inserzioni, assicurando che la tua proprietà sia presentata in modo chiaro e professionale a un pubblico internazionale."
    },
    tr: {
      title: "Emlakçılar İçin",
      intro: "İtalya'ya yeni gelen öğrenciler, profesyoneller ve göçmenler gibi ciddi, kiralamaya hazır uluslararası kiracılara ulaşmanıza yardımcı oluyoruz - listelerinizi hedefli tanıtım ve kişiselleştirilmiş destek yoluyla ihtiyaçlarıyla eşleştiriyoruz.",
      value_prop_intro: "Siz mülkü getirirsiniz. Biz, başka türlü ulaşamayacağınız, incelenmiş bir talep getiririz.",
      what_we_offer_title: "Size Ne Sunuyoruz:",
      offer_1_title: "Yeni Talep Akışı",
      offer_1_desc: "Listelerinizi, uluslararası öğrenciler, gurbetçiler ve İtalya'ya taşınan serbest çalışanlar da dahil olmak üzere İtalyan olmayan kiracılara bağlıyoruz - geleneksel ajanslar tarafından genellikle yeterince hizmet verilmeyen bir grup.",
      offer_2_title: "Çok Kanallı Görünürlük",
      offer_2_desc: "Mülklerinizi İtalyan olmayan platformlarda (Sahibinden, Facebook gurbetçi grupları ve üniversite konut panoları gibi) tanıtarak, İtalyanca konuşmayan veya yerel platformları kullanmayan kiracılara ulaşmanıza yardımcı oluyoruz.",
      offer_3_title: "Yerelleştirilmiş Kiracı Desteği",
      offer_3_desc: "İtalyan kiralama sürecinin iletişimini, çevirisini ve açıklığa kavuşturulmasını biz yönetiyoruz - dil engellerini ve gerçekçi olmayan beklentileri yönetmek için harcadığınız zamanı azaltıyoruz.",
      offer_4_title: "Nicelik Değil, Nitelikli Müşteri Adayları",
      offer_4_desc: "Yalnızca kiralama koşullarınıza (süre, belgeler, bütçe) uyan önceden incelenmiş kiracılardan sorular alırsınız. Ciddi olmayan ilgiyi filtreliyoruz.",
      offer_5_title: "Münhasırlık Yok, Kesinti Yok",
      offer_5_desc: "Listeleriniz, sözleşmeleriniz ve ücretleriniz üzerinde tam kontrole sahip olursunuz. Rakip bir ajans değiliz - mevcut modelinizle birlikte çalışan ek bir talep kanalız.",
      offer_6_title: "Profesyonel Sunum",
      offer_6_desc: "Mülkünüzün uluslararası kitlelere açık ve profesyonel bir şekilde sunulmasını sağlayarak listeleme bilgilerinin hazırlanmasına veya çevrilmesine yardımcı oluyoruz."
    }
  };
  return content[lang as keyof typeof content] || content.en; // Default to English if lang not found
};

const RealEstateAgentsPage = () => {
  const { language } = useLanguage();
  const c = getRealEstateAgentsPageContent(language);

  return (
    <div className="container mx-auto px-4 py-8 mt-20"> {/* Added mt-20 for spacing below navbar */}
      <h1 className="text-4xl font-bold mb-6 text-center">{c.title}</h1>
      <p className="text-lg mb-4">
        {c.intro}
      </p>
      <p className="text-lg mb-8 font-semibold">
        {c.value_prop_intro}
      </p>

      <h2 className="text-3xl font-bold mb-6">{c.what_we_offer_title}</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">{c.offer_1_title}</h3>
          <p>{c.offer_1_desc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">{c.offer_2_title}</h3>
          <p>{c.offer_2_desc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">{c.offer_3_title}</h3>
          <p>{c.offer_3_desc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">{c.offer_4_title}</h3>
          <p>{c.offer_4_desc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">{c.offer_5_title}</h3>
          <p>{c.offer_5_desc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">{c.offer_6_title}</h3>
          <p>{c.offer_6_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAgentsPage; 