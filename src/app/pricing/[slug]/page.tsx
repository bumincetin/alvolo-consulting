'use client';

import Navbar from '@/components/layout/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { FaChevronLeft, FaInfoCircle, FaListUl, FaQuestionCircle, FaRegFileAlt } from 'react-icons/fa';

// Define a type for the service details
interface ServiceDetail {
  slug: string;
  title: string;
  pageSubtitle: string;
  mainImage?: string; // Optional: path to an image for the service
  introduction: string;
  sections: Array<{
    title: string;
    type: 'list' | 'paragraph' | 'steps';
    items?: string[]; // For 'list' or 'steps'
    content?: string; // For 'paragraph'
  }>;
  priceDisplay?: string; // Optional: if you want to reiterate price
  contactPrompt: string;
  contactButtonText: string;
  goBackText: string;
}

const allServiceDetails: {
  [lang: string]: {
    [slug: string]: ServiceDetail;
  };
} = {
  tr: {
    'karsilama-hizmeti': {
      slug: 'karsilama-hizmeti',
      title: 'Karşılama Hizmeti Detayları',
      pageSubtitle: 'İtalya\'ya varışınızda sizi nelerin beklediğini ve sunduğumuz kolaylıkları keşfedin.',
      mainImage: '/images/services/welcome_banner.jpg',
      introduction: 'İtalya\'ya ilk adımınızı attığınız andan itibaren konforunuz ve rahatınız bizim için önceliklidir. Karşılama hizmetimiz, yeni şehrinize stressiz, güvenli ve bilgili bir başlangıç yapmanız için özenle tasarlanmıştır. Havalimanı veya tren istasyonunda sizi isminizle karşılayıp, konaklama yerinize kadar eşlik ediyoruz.',
      sections: [
        {
          title: 'Bu Hizmet Neleri Kapsar?',
          type: 'list',
          items: [
            'Havalimanı/Tren İstasyonu\'nda İsimli Tabela ile Kişisel Karşılama',
            'Özel Araç veya Toplu Taşıma ile Konaklama Yerinize Güvenli Transfer (Tercihinize Bağlı)',
            'SIM Kart Temini ve Aktivasyonu Konusunda Yardım (Talep Üzerine)',
            'Toplu Taşıma Kartı (Abonman) Alma Sürecinde Rehberlik',
            'Şehirdeki İlk Günler İçin Temel Bilgilendirme (En Yakın Market, Eczane, Önemli Noktalar)',
            'Acil Durum İletişim Bilgileri ve Destek Hattı Paylaşımı'
          ]
        },
        {
          title: 'Süreç Nasıl İşler?',
          type: 'steps',
          items: [
            'Seyahat Planlama: Varış tarihinizi, saatinizi ve uçuş/tren bilgilerinizi bizimle paylaşırsınız.',
            'Karşılama: Ekibimizden bir temsilci, varış noktanızda (örneğin, bagaj alım sonrası) sizi isminizin yazılı olduğu bir tabela ile bekler.',
            'Transfer: Eşyalarınızla birlikte, önceden belirlenmiş olan konaklama adresinize konforlu bir şekilde ulaştırılırsınız.',
            'İlk Bilgilendirme: Varışınızda, SIM kart, ulaşım kartı gibi acil ihtiyaçlarınız ve şehirle ilgili temel sorularınız için size yardımcı olunur.'
          ]
        },
        {
          title: 'Neden Karşılama Hizmetimizi Tercih Etmelisiniz?',
          type: 'paragraph',
          content: 'Yabancı bir ülkeye ilk kez gelmek, özellikle dil bariyeri ve bilinmezlikler nedeniyle stresli olabilir. Karşılama hizmetimiz, bu ilk karmaşayı ortadan kaldırarak İtalya maceranıza huzurlu ve pozitif bir başlangıç yapmanızı sağlar. Zaman kaybını önler, güvenliğinizi temin eder ve ilk andan itibaren kendinizi daha rahat hissetmenize yardımcı olur.'
        }
      ],
      priceDisplay: 'Bu hizmetin tekil fiyatı €200\'dur.',
      contactPrompt: 'Karşılama hizmetimizle ilgili daha fazla bilgi veya özel talepleriniz mi var?',
      contactButtonText: 'Bize Ulaşın',
      goBackText: 'Tüm Fiyatlara Geri Dön'
    },
    'konaklama-danismanligi': {
      slug: 'konaklama-danismanligi',
      title: 'Konaklama Bulma Danışmanlığı Detayları',
      pageSubtitle: 'İtalya\'daki yeni yuvanızı bulma sürecinizi kolaylaştırıyoruz.',
      mainImage: '/images/services/accommodation_banner.jpg',
      introduction: 'İtalya\'da eğitim veya profesyonel yaşamınıza başlarken en önemli adımlardan biri doğru konaklamayı bulmaktır. Bütçenize, tercihlerinize ve yaşam tarzınıza uygun, güvenli ve konforlu bir yer bulmanız için size özel danışmanlık hizmeti sunuyoruz.',
      sections: [
        {
          title: 'Sunduğumuz Destekler',
          type: 'list',
          items: [
            'İhtiyaç Analizi: Bütçe, konum tercihleri (okula/işe yakınlık), daire tipi (stüdyo, paylaşımlı, vb.) gibi kriterlerinizin belirlenmesi.',
            'Özelleştirilmiş Portföy Sunumu: Kriterlerinize uygun güncel kiralık ilanlarının taranması ve size özel bir portföy oluşturulması.',
            'Emlak Gezileri Organizasyonu: Beğendiğiniz yerler için randevu alma, ziyaretlerde size eşlik etme veya video turları düzenleme.',
            'Kontrat İnceleme ve Müzakere Desteği: Kira sözleşmelerinin İtalyanca\'dan çevirisi, şartların anlaşılması ve gerekirse müzakerelerde yardımcı olma.',
            'Depozito ve İlk Kira Ödemeleri Konusunda Bilgilendirme.',
            'Taşınma Süreci İpuçları ve Yerel Bilgiler.'
          ]
        },
        {
          title: 'Süreç Adımları',
          type: 'steps',
          items: [
            'Danışmanlık Talebi: Bizimle iletişime geçerek konaklama arayışınızı başlatırsınız.',
            'İhtiyaç Belirleme: Detaylı bir görüşme ile beklentilerinizi ve kriterlerinizi netleştiririz.',
            'Portföy ve Seçim: Size sunulan seçenekler arasından potansiyel evleri belirlersiniz.',
            'Ziyaret ve Değerlendirme: Seçilen evleri ziyaret eder (veya sanal tur yapar) ve değerlendirirsiniz.',
            'Kontrat ve Taşınma: Uygun evi bulduğunuzda kontrat işlemleri ve taşınma sürecinde size destek oluruz.'
          ]
        },
        {
          title: 'Neden Biz?',
          type: 'paragraph',
          content: 'İtalya emlak piyasası ve kiralama süreçleri karmaşık olabilir. Yerel bilgi birikimimiz ve geniş ağımız sayesinde, dolandırıcılıklardan kaçınmanıza, zaman kazanmanıza ve ihtiyaçlarınıza en uygun evi güvenle kiralamanıza yardımcı oluyoruz. Sürecin her aşamasında yanınızdayız.'
        }
      ],
      priceDisplay: 'Bu hizmetin tekil fiyatı €300\'dur.',
      contactPrompt: 'Konaklama bulma sürecinizde profesyonel destek almak ister misiniz?',
      contactButtonText: 'Bize Ulaşın',
      goBackText: 'Tüm Fiyatlara Geri Dön'
    },
    'oturum-izni-ikametgah': {
      slug: 'oturum-izni-ikametgah',
      title: 'Oturum İzni (Permesso di Soggiorno) & İkametgah (Residenza) Danışmanlığı',
      pageSubtitle: 'İtalya\'daki yasal süreçlerinizi sorunsuz bir şekilde tamamlayın.',
      mainImage: '/images/services/permit_banner.jpg',
      introduction: 'İtalya\'da uzun süreli kalmayı planlayan öğrenciler ve profesyoneller için oturum izni (Permesso di Soggiorno) ve ikametgah kaydı (Residenza) almak yasal bir zorunluluktur. Bu karmaşık ve zaman alıcı bürokratik süreçlerde size adım adım rehberlik ediyoruz.',
      sections: [
        {
          title: 'Permesso di Soggiorno Danışmanlığı Kapsamı',
          type: 'list',
          items: [
            'Kişisel Durumunuza Göre Uygun Permesso Türünün Belirlenmesi (Öğrenci, Çalışan, Aile Birleşimi vb.).',
            'Gerekli Belgelerin Eksiksiz ve Doğru Şekilde Hazırlanması (Başvuru Formu, Sigorta, Gelir Kanıtı, Konaklama Belgesi vb.).',
            'Posta Kiti (Kit Permesso) Doldurma ve Postane Randevusu Alma Konusunda Destek.',
            'Questura (Emniyet Müdürlüğü) Randevusu Alma ve Randevu Takibi.',
            'Başvuru Sonrası Süreç Takibi ve Olası Ek Belge Taleplerinde Yardımcı Olma.'
          ]
        },
        {
          title: 'Residenza (İkametgah Kaydı) Danışmanlığı Kapsamı',
          type: 'list',
          items: [
            'İkametgah Kaydı İçin Gerekli Şartlar ve Belgeler Hakkında Bilgilendirme.',
            'Belediye (Comune) Nezdinde Başvuru Süreci ve Randevu Alma.',
            'Başvuru Formlarının Doldurulması.',
            'Polis Kontrolü (Vigili Urbani) Sürecine Hazırlık.',
            'Sağlık Kartı (Tessera Sanitaria) Başvurusu İçin Ön Bilgilendirme (Residenza sonrası adım).'
          ]
        },
        {
          title: 'Neden Bu Hizmeti Almalısınız?',
          type: 'paragraph',
          content: 'İtalyan bürokrasisi, özellikle dil engeli ve sistemin işleyişine yabancılık nedeniyle göz korkutucu olabilir. Yanlış veya eksik başvurular ciddi zaman kayıplarına ve hatta başvurunun reddedilmesine yol açabilir. Profesyonel danışmanlığımızla bu süreçleri doğru, hızlı ve stressiz bir şekilde tamamlamanızı sağlıyoruz.'
        }
      ],
      priceDisplay: 'Bu hizmetin tekil fiyatı €200\'dur.',
      contactPrompt: 'Oturum izni ve ikametgah işlemleriniz için uzman desteğine mi ihtiyacınız var?',
      contactButtonText: 'Bize Ulaşın',
      goBackText: 'Tüm Fiyatlara Geri Dön'
    },
    'burs-basvurusu': {
      slug: 'burs-basvurusu',
      title: 'Burs Başvurusu Danışmanlığı Detayları',
      pageSubtitle: 'İtalya\'daki eğitim hayallerinizi burslarla destekleyin.',
      mainImage: '/images/services/scholarship_banner.jpg',
      introduction: 'İtalya, uluslararası öğrencilere çeşitli burs imkanları sunan bir ülkedir. Ancak doğru bursu bulmak, başvuru şartlarını anlamak ve etkili bir başvuru dosyası hazırlamak uzmanlık gerektirebilir. Burs başvurusu danışmanlık hizmetimizle, potansiyelinizi en iyi şekilde yansıtarak burs alma şansınızı artırmanıza yardımcı oluyoruz.',
      sections: [
        {
          title: 'Danışmanlık Hizmetimizin İçeriği',
          type: 'list',
          items: [
            'Profil Analizi ve Uygun Bursların Belirlenmesi (Devlet, Bölgesel, Üniversite ve Özel Vakıf Bursları).',
            'Başvuru Takvimlerinin Oluşturulması ve Son Başvuru Tarihlerinin Takibi.',
            'Gerekli Belgelerin Listelenmesi ve Hazırlık Sürecinde Rehberlik (CV, Motivasyon Mektubu, Referans Mektupları, Gelir Beyanları, ISEE vb.).',
            'Motivasyon Mektubu Yazımı ve Düzenlenmesi Konusunda Stratejik Destek.',
            'Başvuru Formlarının Doğru ve Eksiksiz Doldurulması.',
            'Online Portal Üzerinden Başvuruların Yapılması ve Takibi.',
            'Olası Mülakatlara Hazırlık İpuçları.'
          ]
        },
        {
          title: 'Burs Türleri Hakkında Genel Bilgi',
          type: 'paragraph',
          content: 'İtalya\'da genellikle iki ana tür burs bulunur: İhtiyaç bazlı burslar (DSU gibi bölgesel burslar) ve başarı bazlı burslar (üniversitelerin veya özel kurumların sunduğu). Her bir bursun kendine özgü kriterleri ve başvuru süreçleri vardır. Size en uygun olanları belirlemek ve başvuru sürecinizi yönetmek için buradayız.'
        },
        {
          title: 'Başarı Şansınızı Artırın',
          type: 'paragraph',
          content: 'Güçlü bir başvuru dosyası, burs alma olasılığınızı önemli ölçüde etkiler. Deneyimli danışmanlarımız, başvurunuzun her detayını dikkatle inceleyerek, sizi diğer adaylardan ayıracak şekilde sunmanıza yardımcı olur. Eğitim yatırımınızı hafifletmek için bu fırsatı değerlendirin.'
        }
      ],
      priceDisplay: 'Bu hizmetin tekil fiyatı €200\'dur.',
      contactPrompt: 'Burs başvurusu sürecinde profesyonel bir yol arkadaşı mı arıyorsunuz?',
      contactButtonText: 'Bize Ulaşın',
      goBackText: 'Tüm Fiyatlara Geri Dön'
    },
    'surucu-belgesi': {
      slug: 'surucu-belgesi',
      title: 'Sürücü Belgesi (Ehliyet) Alma Danışmanlığı Detayları',
      pageSubtitle: 'İtalya yollarında güvenle araç kullanmak için ilk adımınız.',
      mainImage: '/images/services/license_banner.jpg',
      introduction: 'İtalya\'da araç kullanmayı planlıyorsanız, geçerli bir sürücü belgesine sahip olmanız gerekir. Mevcut ehliyetinizin İtalya\'da ne kadar süreyle geçerli olduğu, İtalyan ehliyetine nasıl çevrileceği veya sıfırdan nasıl İtalyan ehliyeti alınacağı gibi konularda size kapsamlı danışmanlık sunuyoruz.',
      sections: [
        {
          title: 'Hizmet Kapsamımız',
          type: 'list',
          items: [
            'Mevcut Ehliyetin Geçerliliği ve Çeviri Şartları Hakkında Bilgilendirme.',
            'Türk Ehliyetinin İtalyan Ehliyetine Çevrilmesi Süreci İçin Gerekli Belgeler ve Adımlar.',
            'Sıfırdan İtalyan Ehliyeti Alma Süreci: Teori ve Pratik Sınavlar, Sürücü Kursu Seçimi.',
            'Gerekli Sağlık Raporları ve Diğer Bürokratik İşlemler Konusunda Rehberlik.',
            'Motorizzazione Civile (Ulaştırma Bakanlığı) Randevuları ve İşlemleri.',
            'Uluslararası Sürücü Belgesi (IDP) Hakkında Bilgi.'
          ]
        },
        {
          title: 'Kimler Bu Hizmetten Faydalanabilir?',
          type: 'paragraph',
          content: 'İtalya\'ya yeni taşınmış ve araç kullanmak isteyenler, mevcut yabancı ehliyetini İtalyan ehliyetine çevirmek isteyenler, veya İtalya\'da ilk kez ehliyet alacak olan herkes bu hizmetimizden faydalanabilir. Özellikle AB dışı ülke vatandaşları için çeviri ve yeni ehliyet alma süreçleri farklılık gösterebilir.'
        },
        {
          title: 'Süreci Kolaylaştırın',
          type: 'paragraph',
          content: 'Ehliyet alma veya çevirme süreci, birçok farklı belge ve prosedür içerdiğinden karmaşık görünebilir. Danışmanlık hizmetimizle, doğru adımları atarak, gereksiz gecikmelerden ve masraflardan kaçınarak ehliyetinize daha hızlı ve kolay bir şekilde ulaşabilirsiniz.'
        }
      ],
      priceDisplay: 'Bu hizmetin tekil fiyatı €200\'dur.',
      contactPrompt: 'İtalyan sürücü belgesi işlemleriniz için yardıma mı ihtiyacınız var?',
      contactButtonText: 'Bize Ulaşın',
      goBackText: 'Tüm Fiyatlara Geri Dön'
    }
  },
  en: {
    'welcome-service': {
      slug: 'welcome-service',
      title: 'Welcome Service Details',
      pageSubtitle: 'Discover what awaits you upon your arrival in Italy and the conveniences we offer.',
      mainImage: '/images/services/welcome_banner.jpg',
      introduction: 'Your comfort and ease are our priority from the moment you first step into Italy. Our welcome service is meticulously designed for you to make a stress-free, safe, and informed start in your new city. We greet you by name at the airport or train station and accompany you to your accommodation.',
      sections: [
        {
          title: 'What Does This Service Include?',
          type: 'list',
          items: [
            'Personal Welcome with a Name Sign at the Airport/Train Station',
            'Safe Transfer to Your Accommodation by Private Car or Public Transport (Your Choice)',
            'Assistance with SIM Card Purchase and Activation (Upon Request)',
            'Guidance on the Public Transport Card (Subscription) Acquisition Process',
            'Basic Information for Your First Days in the City (Nearest Supermarket, Pharmacy, Key Locations)',
            'Sharing of Emergency Contact Information and Support Line'
          ]
        },
        {
          title: 'How Does the Process Work?',
          type: 'steps',
          items: [
            'Travel Planning: You share your arrival date, time, and flight/train details with us.',
            'Reception: A representative from our team will await you at your arrival point (e.g., after baggage claim) with a sign bearing your name.',
            'Transfer: You will be comfortably transported with your luggage to your pre-arranged accommodation address.',
            'Initial Briefing: Upon arrival, you will be assisted with urgent needs like SIM cards, transport cards, and any initial questions about the city.'
          ]
        },
        {
          title: 'Why Choose Our Welcome Service?',
          type: 'paragraph',
          content: 'Arriving in a foreign country for the first time can be stressful, especially with language barriers and uncertainties. Our welcome service eliminates this initial chaos, allowing you to start your Italian adventure peacefully and positively. It prevents time loss, ensures your safety, and helps you feel more at ease from the very first moment.'
        }
      ],
      priceDisplay: 'The individual price for this service is €200.',
      contactPrompt: 'Do you have more questions or special requests regarding our welcome service?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing'
    },
    'accommodation-consultancy': {
      slug: 'accommodation-consultancy',
      title: 'Accommodation Finding Consultancy Details',
      pageSubtitle: 'We simplify the process of finding your new home in Italy.',
      mainImage: '/images/services/accommodation_banner.jpg',
      introduction: 'Finding the right accommodation is one of the most crucial steps when starting your studies or professional life in Italy. We offer personalized consultancy services to help you find a safe, comfortable place that fits your budget, preferences, and lifestyle.',
      sections: [
        {
          title: 'Our Support Includes',
          type: 'list',
          items: [
            'Needs Analysis: Defining your criteria such as budget, location preferences (proximity to school/work), apartment type (studio, shared, etc.).',
            'Customized Portfolio Presentation: Scanning current rental listings matching your criteria and creating a personalized portfolio.',
            'Real Estate Tour Organization: Scheduling appointments for places you like, accompanying you on visits, or arranging video tours.',
            'Contract Review and Negotiation Support: Translation of rental agreements from Italian, understanding terms, and assisting in negotiations if necessary.',
            'Information on Deposits and First Rent Payments.',
            'Moving Process Tips and Local Information.'
          ]
        },
        {
          title: 'Process Steps',
          type: 'steps',
          items: [
            'Consultancy Request: You initiate your accommodation search by contacting us.',
            'Needs Assessment: We clarify your expectations and criteria through a detailed discussion.',
            'Portfolio and Selection: You identify potential homes from the options presented to you.',
            'Visit and Evaluation: You visit (or virtually tour) and evaluate the selected homes.',
            'Contract and Moving: Once you find a suitable home, we assist you with the contract procedures and moving process.'
          ]
        },
        {
          title: 'Why Us?',
          type: 'paragraph',
          content: 'The Italian real estate market and rental processes can be complex. With our local knowledge and extensive network, we help you avoid scams, save time, and securely rent the home that best suits your needs. We are with you every step of the way.'
        }
      ],
      priceDisplay: 'The individual price for this service is €300.',
      contactPrompt: 'Would you like professional support in your accommodation search process?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing'
    },
    'residence-permit-residency': {
      slug: 'residence-permit-residency',
      title: 'Residence Permit (Permesso di Soggiorno) & Residency (Residenza) Consultancy Details',
      pageSubtitle: 'Complete your legal processes in Italy smoothly.',
      mainImage: '/images/services/permit_banner.jpg',
      introduction: 'For students and professionals planning a long-term stay in Italy, obtaining a residence permit (Permesso di Soggiorno) and registering residency (Residenza) is a legal requirement. We guide you step-by-step through these complex and time-consuming bureaucratic processes.',
      sections: [
        {
          title: 'Permesso di Soggiorno Consultancy Scope',
          type: 'list',
          items: [
            'Determining the Appropriate Permesso Type Based on Your Personal Situation (Student, Employee, Family Reunification, etc.).',
            'Complete and Accurate Preparation of Required Documents (Application Form, Insurance, Proof of Income, Accommodation Document, etc.).',
            'Support in Filling Out the Postal Kit (Kit Permesso) and Scheduling a Post Office Appointment.',
            'Scheduling and Tracking the Questura (Police Headquarters) Appointment.',
            'Post-Application Process Follow-up and Assistance with Potential Additional Document Requests.'
          ]
        },
        {
          title: 'Residenza (Residency Registration) Consultancy Scope',
          type: 'list',
          items: [
            'Information on Requirements and Documents for Residency Registration.',
            'Application Process and Appointment Scheduling at the Municipality (Comune).',
            'Filling Out Application Forms.',
            'Preparation for the Police Check (Vigili Urbani) Process.',
            'Preliminary Information for Health Card (Tessera Sanitaria) Application (step after Residenza).'
          ]
        },
        {
          title: 'Why Should You Get This Service?',
          type: 'paragraph',
          content: 'Italian bureaucracy can be daunting, especially due to language barriers and unfamiliarity with the system. Incorrect or incomplete applications can lead to significant time losses and even application rejection. With our professional consultancy, we ensure you complete these processes correctly, quickly, and stress-free.'
        }
      ],
      priceDisplay: 'The individual price for this service is €200.',
      contactPrompt: 'Do you need expert support for your residence permit and residency procedures?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing'
    },
    'scholarship-application': {
      slug: 'scholarship-application',
      title: 'Scholarship Application Consultancy Details',
      pageSubtitle: 'Support your educational dreams in Italy with scholarships.',
      mainImage: '/images/services/scholarship_banner.jpg',
      introduction: 'Italy is a country that offers various scholarship opportunities to international students. However, finding the right scholarship, understanding the application requirements, and preparing an effective application file can require expertise. With our scholarship application consultancy service, we help you increase your chances of receiving a scholarship by best reflecting your potential.',
      sections: [
        {
          title: 'Content of Our Consultancy Service',
          type: 'list',
          items: [
            'Profile Analysis and Identification of Suitable Scholarships (State, Regional, University, and Private Foundation Scholarships).',
            'Creation of Application Calendars and Tracking of Deadlines.',
            'Listing of Required Documents and Guidance in the Preparation Process (CV, Motivation Letter, Reference Letters, Income Statements, ISEE, etc.).',
            'Strategic Support in Writing and Editing the Motivation Letter.',
            'Correct and Complete Filling of Application Forms.',
            'Submission and Tracking of Applications via Online Portals.',
            'Preparation Tips for Potential Interviews.'
          ]
        },
        {
          title: 'General Information About Scholarship Types',
          type: 'paragraph',
          content: 'In Italy, there are generally two main types of scholarships: need-based scholarships (such as regional DSU scholarships) and merit-based scholarships (offered by universities or private institutions). Each scholarship has its own specific criteria and application processes. We are here to identify the most suitable ones for you and manage your application process.'
        },
        {
          title: 'Increase Your Chances of Success',
          type: 'paragraph',
          content: 'A strong application file significantly impacts your likelihood of receiving a scholarship. Our experienced consultants carefully review every detail of your application, helping you present yourself in a way that distinguishes you from other candidates. Take this opportunity to lighten your educational investment.'
        }
      ],
      priceDisplay: 'The individual price for this service is €200.',
      contactPrompt: 'Are you looking for a professional companion in the scholarship application process?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing'
    },
    'driving-license': {
      slug: 'driving-license',
      title: 'Driving License Acquisition Consultancy Details',
      pageSubtitle: 'Your first step to driving safely on Italian roads.',
      mainImage: '/images/services/license_banner.jpg',
      introduction: 'If you plan to drive in Italy, you must have a valid driving license. We offer comprehensive consultancy on how long your current license is valid in Italy, how to convert it to an Italian license, or how to obtain an Italian license from scratch.',
      sections: [
        {
          title: 'Our Service Scope',
          type: 'list',
          items: [
            'Information on the Validity of Your Current License and Translation Requirements.',
            'Required Documents and Steps for Converting a Foreign License to an Italian License.',
            'Process for Obtaining an Italian License from Scratch: Theory and Practical Exams, Driving School Selection.',
            'Guidance on Required Medical Reports and Other Bureaucratic Procedures.',
            'Motorizzazione Civile (Ministry of Transport) Appointments and Procedures.',
            'Information on International Driving Permit (IDP).'
          ]
        },
        {
          title: 'Who Can Benefit From This Service?',
          type: 'paragraph',
          content: 'Anyone who has recently moved to Italy and wants to drive, wants to convert their existing foreign license to an Italian one, or is obtaining a license for the first time in Italy can benefit from this service. Conversion and new license acquisition processes may vary, especially for non-EU citizens.'
        },
        {
          title: 'Simplify the Process',
          type: 'paragraph',
          content: 'The process of obtaining or converting a license can seem complicated as it involves many different documents and procedures. With our consultancy service, you can obtain your license more quickly and easily by taking the right steps and avoiding unnecessary delays and expenses.'
        }
      ],
      priceDisplay: 'The individual price for this service is €200.',
      contactPrompt: 'Do you need help with your Italian driving license procedures?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing'
    }
  },
  it: {
    'servizio-benvenuto': {
      slug: 'servizio-benvenuto',
      title: 'Dettagli del Servizio di Benvenuto',
      pageSubtitle: 'Scopri cosa ti aspetta al tuo arrivo in Italia e le comodità che offriamo.',
      mainImage: '/images/services/welcome_banner.jpg',
      introduction: 'Il tuo comfort e la tua tranquillità sono la nostra priorità dal momento in cui metti piede in Italia. Il nostro servizio di benvenuto è meticolosamente progettato per farti iniziare la tua avventura nella nuova città in modo sereno, sicuro e informato. Ti accogliamo per nome all\'aeroporto o alla stazione ferroviaria e ti accompagniamo al tuo alloggio.',
      sections: [
        {
          title: 'Cosa Include Questo Servizio?',
          type: 'list',
          items: [
            'Accoglienza Personale con Cartello Nominativo all\'Aeroporto/Stazione Ferroviaria',
            'Trasferimento Sicuro al Tuo Alloggio con Auto Privata o Mezzi Pubblici (a Tua Scelta)',
            'Assistenza per l\'Acquisto e l\'Attivazione della Scheda SIM (Su Richiesta)',
            'Guida nel Processo di Acquisizione della Tessera dei Trasporti Pubblici (Abbonamento)',
            'Informazioni di Base per i Tuoi Primi Giorni in Città (Supermercato Più Vicino, Farmacia, Luoghi Chiave)',
            'Condivisione dei Contatti di Emergenza e Linea di Supporto'
          ]
        },
        {
          title: 'Come Funziona il Processo?',
          type: 'steps',
          items: [
            'Pianificazione del Viaggio: Condividi con noi la data e l\'ora di arrivo e i dettagli del volo/treno.',
            'Accoglienza: Un rappresentante del nostro team ti attenderà al punto di arrivo (ad esempio, dopo il ritiro bagagli) con un cartello con il tuo nome.',
            'Trasferimento: Sarai trasportato comodamente con i tuoi bagagli all\'indirizzo del tuo alloggio precedentemente concordato.',
            'Briefing Iniziale: Al tuo arrivo, sarai assistito per necessità urgenti come schede SIM, tessere dei trasporti e per qualsiasi domanda iniziale sulla città.'
          ]
        },
        {
          title: 'Perché Scegliere il Nostro Servizio di Benvenuto?',
          type: 'paragraph',
          content: 'Arrivare in un paese straniero per la prima volta può essere stressante, specialmente con le barriere linguistiche e le incertezze. Il nostro servizio di benvenuto elimina questo caos iniziale, permettendoti di iniziare la tua avventura italiana in modo pacifico e positivo. Previene la perdita di tempo, garantisce la tua sicurezza e ti aiuta a sentirti più a tuo agio fin dal primo momento.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €200.',
      contactPrompt: 'Hai altre domande o richieste speciali riguardo al nostro servizio di benvenuto?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi'
    },
    'consulenza-alloggio': {
      slug: 'consulenza-alloggio',
      title: 'Dettagli Consulenza Ricerca Alloggio',
      pageSubtitle: 'Semplifichiamo il processo di ricerca della tua nuova casa in Italia.',
      mainImage: '/images/services/accommodation_banner.jpg',
      introduction: 'Trovare l\'alloggio giusto è uno dei passi più cruciali quando inizi i tuoi studi o la tua vita professionale in Italia. Offriamo servizi di consulenza personalizzati per aiutarti a trovare un luogo sicuro e confortevole che si adatti al tuo budget, alle tue preferenze e al tuo stile di vita.',
      sections: [
        {
          title: 'Il Nostro Supporto Include',
          type: 'list',
          items: [
            'Analisi delle Esigenze: Definizione dei tuoi criteri come budget, preferenze di posizione (vicinanza a scuola/lavoro), tipo di appartamento (monolocale, condiviso, ecc.).',
            'Presentazione di un Portafoglio Personalizzato: Scansione degli annunci di affitto attuali corrispondenti ai tuoi criteri e creazione di un portafoglio personalizzato.',
            'Organizzazione di Visite agli Immobili: Pianificazione di appuntamenti per i luoghi che ti piacciono, accompagnamento durante le visite o organizzazione di tour virtuali.',
            'Revisione del Contratto e Supporto alla Negoziazione: Traduzione dei contratti di affitto dall\'italiano, comprensione dei termini e assistenza nelle negoziazioni se necessario.',
            'Informazioni su Depositi e Primi Pagamenti dell\'Affitto.',
            'Consigli sul Processo di Trasloco e Informazioni Locali.'
          ]
        },
        {
          title: 'Fasi del Processo',
          type: 'steps',
          items: [
            'Richiesta di Consulenza: Inizi la tua ricerca di alloggio contattandoci.',
            'Valutazione delle Esigenze: Chiarifichiamo le tue aspettative e i tuoi criteri attraverso una discussione dettagliata.',
            'Portafoglio e Selezione: Identifichi le case potenziali tra le opzioni presentate.',
            'Visita e Valutazione: Visiti (o fai un tour virtuale) e valuti le case selezionate.',
            'Contratto e Trasloco: Una volta trovata una casa adatta, ti assistiamo con le procedure contrattuali e il processo di trasloco.'
          ]
        },
        {
          title: 'Perché Noi?',
          type: 'paragraph',
          content: 'Il mercato immobiliare italiano e i processi di affitto possono essere complessi. Con la nostra conoscenza locale e la nostra vasta rete, ti aiutiamo a evitare truffe, risparmiare tempo e affittare in sicurezza la casa che meglio si adatta alle tue esigenze. Siamo con te in ogni fase del processo.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €300.',
      contactPrompt: 'Desideri un supporto professionale nel processo di ricerca del tuo alloggio?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi'
    },
    'permesso-soggiorno-residenza': {
      slug: 'permesso-soggiorno-residenza',
      title: 'Dettagli Consulenza Permesso di Soggiorno e Residenza',
      pageSubtitle: 'Completa senza intoppi le tue procedure legali in Italia.',
      mainImage: '/images/services/permit_banner.jpg',
      introduction: 'Per studenti e professionisti che pianificano un soggiorno a lungo termine in Italia, ottenere un permesso di soggiorno e registrare la residenza è un requisito legale. Ti guidiamo passo dopo passo attraverso questi complessi e lunghi processi burocratici.',
      sections: [
        {
          title: 'Ambito della Consulenza per il Permesso di Soggiorno',
          type: 'list',
          items: [
            'Determinazione del Tipo di Permesso Appropriato in Base alla Tua Situazione Personale (Studente, Lavoratore, Ricongiungimento Familiare, ecc.).',
            'Preparazione Completa e Accurata dei Documenti Richiesti (Modulo di Domanda, Assicurazione, Prova di Reddito, Documento di Alloggio, ecc.).',
            'Supporto nella Compilazione del Kit Postale (Kit Permesso) e nella Prenotazione di un Appuntamento all\'Ufficio Postale.',
            'Prenotazione e Monitoraggio dell\'Appuntamento in Questura.',
            'Follow-up del Processo Post-Domanda e Assistenza per Eventuali Richieste di Documenti Aggiuntivi.'
          ]
        },
        {
          title: 'Ambito della Consulenza per la Residenza',
          type: 'list',
          items: [
            'Informazioni sui Requisiti e sui Documenti per la Registrazione della Residenza.',
            'Processo di Domanda e Prenotazione dell\'Appuntamento presso il Comune.',
            'Compilazione dei Moduli di Domanda.',
            'Preparazione per il Processo di Controllo della Polizia (Vigili Urbani).',
            'Informazioni Preliminari per la Richiesta della Tessera Sanitaria (passaggio successivo alla Residenza).'
          ]
        },
        {
          title: 'Perché Dovresti Usufruire di Questo Servizio?',
          type: 'paragraph',
          content: 'La burocrazia italiana può essere scoraggiante, soprattutto a causa delle barriere linguistiche e della scarsa familiarità con il sistema. Domande errate o incomplete possono portare a significative perdite di tempo e persino al rigetto della domanda. Con la nostra consulenza professionale, ti assicuriamo di completare questi processi in modo corretto, rapido e senza stress.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €200.',
      contactPrompt: 'Hai bisogno di un supporto esperto per le tue procedure di permesso di soggiorno e residenza?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi'
    },
    'domanda-borsa-studio': {
      slug: 'domanda-borsa-studio',
      title: 'Dettagli Consulenza Domanda Borsa di Studio',
      pageSubtitle: 'Sostieni i tuoi sogni di studio in Italia con le borse di studio.',
      mainImage: '/images/services/scholarship_banner.jpg',
      introduction: 'L\'Italia è un paese che offre varie opportunità di borse di studio agli studenti internazionali. Tuttavia, trovare la borsa di studio giusta, comprendere i requisiti di ammissione e preparare un dossier di candidatura efficace può richiedere competenze specifiche. Con il nostro servizio di consulenza per la domanda di borsa di studio, ti aiutiamo ad aumentare le tue possibilità di ricevere una borsa di studio riflettendo al meglio il tuo potenziale.',
      sections: [
        {
          title: 'Contenuto del Nostro Servizio di Consulenza',
          type: 'list',
          items: [
            'Analisi del Profilo e Identificazione delle Borse di Studio Idonee (Statali, Regionali, Universitarie e di Fondazioni Private).',
            'Creazione di Calendari di Candidatura e Monitoraggio delle Scadenze.',
            'Elenco dei Documenti Richiesti e Guida nel Processo di Preparazione (CV, Lettera di Motivazione, Lettere di Referenza, Dichiarazioni dei Redditi, ISEE, ecc.).',
            'Supporto Strategico nella Stesura e Revisione della Lettera di Motivazione.',
            'Compilazione Corretta e Completa dei Moduli di Domanda.',
            'Invio e Monitoraggio delle Candidature tramite Portali Online.',
            'Consigli per la Preparazione a Eventuali Colloqui.'
          ]
        },
        {
          title: 'Informazioni Generali sui Tipi di Borse di Studio',
          type: 'paragraph',
          content: 'In Italia esistono generalmente due tipi principali di borse di studio: quelle basate sul bisogno (come le borse regionali DSU) e quelle basate sul merito (offerte da università o istituzioni private). Ogni borsa di studio ha i propri criteri specifici e processi di candidatura. Siamo qui per identificare quelle più adatte a te e gestire il tuo processo di candidatura.'
        },
        {
          title: 'Aumenta le Tue Possibilità di Successo',
          type: 'paragraph',
          content: 'Un dossier di candidatura solido influisce significativamente sulla probabilità di ricevere una borsa di studio. I nostri consulenti esperti esaminano attentamente ogni dettaglio della tua candidatura, aiutandoti a presentarti in modo da distinguerti dagli altri candidati. Cogli questa opportunità per alleggerire il tuo investimento formativo.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €200.',
      contactPrompt: 'Stai cercando un compagno professionale nel processo di richiesta della borsa di studio?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi'
    },
    'patente-guida': {
      slug: 'patente-guida',
      title: 'Dettagli Consulenza Ottenimento Patente di Guida',
      pageSubtitle: 'Il tuo primo passo per guidare in sicurezza sulle strade italiane.',
      mainImage: '/images/services/license_banner.jpg',
      introduction: 'Se hai intenzione di guidare in Italia, devi essere in possesso di una patente di guida valida. Offriamo una consulenza completa su quanto tempo è valida la tua patente attuale in Italia, come convertirla in una patente italiana o come ottenere una patente italiana da zero.',
      sections: [
        {
          title: 'Ambito del Nostro Servizio',
          type: 'list',
          items: [
            'Informazioni sulla Validità della Tua Patente Attuale e sui Requisiti di Traduzione.',
            'Documenti Richiesti e Passaggi per la Conversione di una Patente Straniera in una Patente Italiana.',
            'Processo per Ottenere una Patente Italiana da Zero: Esami Teorici e Pratici, Scelta dell\'Autoscuola.',
            'Guida sui Certificati Medici Richiesti e Altre Procedure Burocratiche.',
            'Appuntamenti e Procedure presso la Motorizzazione Civile.',
            'Informazioni sul Permesso di Guida Internazionale (IDP).'
          ]
        },
        {
          title: 'Chi Può Beneficiare di Questo Servizio?',
          type: 'paragraph',
          content: 'Chiunque si sia recentemente trasferito in Italia e voglia guidare, voglia convertire la propria patente straniera esistente in una italiana, o stia ottenendo una patente per la prima volta in Italia può beneficiare di questo servizio. I processi di conversione e di ottenimento di una nuova patente possono variare, specialmente per i cittadini di paesi non UE.'
        },
        {
          title: 'Semplifica il Processo',
          type: 'paragraph',
          content: 'Il processo di ottenimento o conversione della patente può sembrare complicato poiché coinvolge molti documenti e procedure diverse. Con il nostro servizio di consulenza, puoi ottenere la tua patente in modo più rapido e semplice compiendo i passi giusti ed evitando ritardi e spese inutili.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €200.',
      contactPrompt: 'Hai bisogno di aiuto con le procedure per la tua patente di guida italiana?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi'
    }
  }
};

const getServiceDetails = (slug: string, lang: string): ServiceDetail | undefined => {
  return allServiceDetails[lang]?.[slug] || allServiceDetails['en']?.[slug]; // Fallback to English if lang/slug not found
};

interface ServicePageParams {
  slug: string;
}

export default function ServiceDetailPage({ params }: { params: ServicePageParams }) {
  const { language } = useLanguage();
  const service = getServiceDetails(params.slug, language);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-brand-bg-primary pt-20 flex flex-col items-center justify-center text-center px-6">
          <FaQuestionCircle className="text-brand-gold text-6xl mb-4" />
          <h1 className="text-4xl font-bold text-brand-blue mb-4">
            {language === 'tr' ? 'Hizmet Bulunamadı' : language === 'it' ? 'Servizio Non Trovato' : 'Service Not Found'}
          </h1>
          <p className="text-xl text-brand-text-secondary mb-8">
            {language === 'tr' ? 'Aradığınız hizmet detay sayfası mevcut değil veya taşınmış olabilir.' : 
             language === 'it' ? 'La pagina dei dettagli del servizio che stai cercando non esiste o potrebbe essere stata spostata.' :
             'The service detail page you are looking for does not exist or may have been moved.'}
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center px-6 py-3 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg"
          >
            <FaChevronLeft className="mr-2" />
            {language === 'tr' ? 'Tüm Fiyatlara Geri Dön' : language === 'it' ? 'Torna a Tutti i Prezzi' : 'Back to All Pricing'}
          </Link>
        </div>
      </>
    );
  }

  const renderSectionIcon = (type: string) => {
    switch (type) {
      case 'list': return <FaListUl className="text-brand-blue text-2xl mr-3 flex-shrink-0" />;
      case 'steps': return <FaRegFileAlt className="text-brand-blue text-2xl mr-3 flex-shrink-0" />;
      case 'paragraph': return <FaInfoCircle className="text-brand-blue text-2xl mr-3 flex-shrink-0" />;
      default: return null;
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-bg-primary pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Back to pricing link */}
          <div className="mb-8">
            <Link 
              href="/pricing"
              className="inline-flex items-center text-brand-blue hover:text-brand-gold transition-colors duration-300 group"
            >
              <FaChevronLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" /> 
              {service.goBackText}
            </Link>
          </div>

          <div className="bg-brand-bg-surface shadow-xl rounded-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-3">{service.title}</h1>
              <p className="text-xl text-brand-text-secondary">{service.pageSubtitle}</p>
            </div>

            {service.mainImage && (
              <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
                <img src={service.mainImage} alt={service.title} className="w-full h-auto object-cover max-h-[400px]" />
              </div>
            )}

            <div className="prose prose-lg max-w-none text-brand-text-primary mx-auto mb-10">
              <p>{service.introduction}</p>
            </div>

            {service.sections.map((section, index) => (
              <div key={index} className="mb-8 p-6 bg-brand-bg-primary rounded-lg shadow">
                <div className="flex items-start mb-3">
                  {renderSectionIcon(section.type)}
                  <h2 className="text-2xl font-semibold text-brand-blue">{section.title}</h2>
                </div>
                {section.type === 'list' && section.items && (
                  <ul className="list-disc list-inside space-y-2 pl-5 text-brand-text-secondary">
                    {section.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}
                {section.type === 'steps' && section.items && (
                  <ol className="list-decimal list-inside space-y-3 pl-5 text-brand-text-secondary">
                    {section.items.map((item, i) => <li key={i} className="mb-1">{item}</li>)}
                  </ol>
                )}
                {section.type === 'paragraph' && section.content && (
                  <p className="text-brand-text-secondary whitespace-pre-line">{section.content}</p>
                )}
              </div> 
            ))}

            {service.priceDisplay && (
              <div className="my-10 text-center p-6 bg-brand-gold/10 rounded-lg">
                <p className="text-xl font-semibold text-brand-blue">{service.priceDisplay}</p>
              </div>
            )}

            <div className="mt-12 text-center">
              <p className="text-lg text-brand-text-secondary mb-4">{service.contactPrompt}</p>
              <Link
                href="/#contact" // Assuming your contact section is on the homepage
                className="inline-block px-10 py-4 bg-brand-gold text-white rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg text-lg font-semibold"
              >
                {service.contactButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 