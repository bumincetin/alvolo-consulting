// src/app/pricing/[slug]/serviceData.ts
export interface ServiceDetail {
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
    slugMap?: Record<string, string>; // Optional: slugMap for cross-language redirection
  }
  export const runtime = 'edge';
  
  export const allServiceDetails: Record<
  string,
  Record<string, ServiceDetail>
> = {
  tr: {
    'karsilama-hizmeti': {
      slug: 'karsilama-hizmeti',
      title: 'Karşılama Hizmeti Detayları',
      pageSubtitle: 'İtalya\'ya varışınızda sizi nelerin beklediğini ve sunduğumuz kolaylıkları keşfedin.',
      mainImage: '/karsilama2.png',
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
      goBackText: 'Tüm Fiyatlara Geri Dön',
      slugMap: { tr: 'karsilama-hizmeti', en: 'welcome-service', it: 'servizio-benvenuto' }
    },
    'konaklama-danismanligi': {
      slug: 'konaklama-danismanligi',
      title: 'Konaklama Bulma Danışmanlığı Detayları',
      pageSubtitle: 'İtalya\'daki yeni yuvanızı bulma sürecinizi kolaylaştırıyoruz.',
      mainImage: '/konaklama2.jpg',
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
      goBackText: 'Tüm Fiyatlara Geri Dön',
      slugMap: { tr: 'konaklama-danismanligi', en: 'accommodation-consultancy', it: 'consulenza-alloggio' }
    },
    'oturum-izni-ikametgah': {
      slug: 'oturum-izni-ikametgah',
      title: 'Oturum İzni (Permesso di Soggiorno) & İkametgah (Residenza) Danışmanlığı',
      pageSubtitle: 'İtalya\'daki yasal süreçlerinizi sorunsuz bir şekilde tamamlayın.',
      mainImage: '/bürokrasi.jpg',
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
      goBackText: 'Tüm Fiyatlara Geri Dön',
      slugMap: { tr: 'oturum-izni-ikametgah', en: 'residence-permit-residency', it: 'permesso-soggiorno-residenza' }
    },
    'burs-basvurusu': {
      slug: 'burs-basvurusu',
      title: 'Burs Başvurusu Danışmanlığı Detayları',
      pageSubtitle: 'İtalya\'daki eğitim hayallerinizi burslarla destekleyin.',
      mainImage: '/burs2.png',
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
      goBackText: 'Tüm Fiyatlara Geri Dön',
      slugMap: { tr: 'burs-basvurusu', en: 'scholarship-application', it: 'domanda-borsa-studio' }
    },
    'surucu-belgesi': {
      slug: 'surucu-belgesi',
      title: 'Sürücü Belgesi (Ehliyet) Alma Danışmanlığı Detayları',
      pageSubtitle: 'İtalya yollarında güvenle araç kullanmak için ilk adımınız.',
      mainImage: '/driver.jpg',
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
      goBackText: 'Tüm Fiyatlara Geri Dön',
      slugMap: { tr: 'surucu-belgesi', en: 'driving-license', it: 'patente-guida' }
    },
    'universite-kayit': {
      slug: 'universite-kayit',
      title: 'Üniversite Kayıt Danışmanlığı Detayları',
      pageSubtitle: 'İtalyan üniversitelerine kayıt sürecinizde profesyonel rehberlik.',
      mainImage: '/bocconi.jpg',
      introduction: 'İtalyan üniversitelerine kayıt süreci, karmaşık başvuru prosedürleri ve belge hazırlama süreçleri nedeniyle zorlayıcı olabilir. Üniversite kayıt danışmanlık hizmetimizle, başvuru sürecinizin her aşamasında size rehberlik ediyor ve başarılı bir kayıt süreci için gerekli tüm desteği sağlıyoruz.',
      sections: [
        {
          title: 'Danışmanlık Hizmetimizin İçeriği',
          type: 'list',
          items: [
            'Üniversite ve Bölüm Seçimi: Hedeflerinize ve akademik geçmişinize uygun üniversite ve bölüm seçimi.',
            'Başvuru Dosyası Hazırlama: Tüm gerekli belgelerin (diploma, transkript, dil sertifikası vb.) hazırlanması ve çevirisi.',
            'Dichiarazione di Valore (DV) İşlemleri: Diplomanızın İtalyan makamları tarafından tanınması için gerekli işlemler.',
            'Online Başvuru Süreci: Universitaly portalı üzerinden başvuru işlemlerinin yapılması.',
            'Sınav Hazırlığı: Gerekli durumlarda giriş sınavlarına hazırlık desteği.',
            'Kayıt Sonrası Destek: Üniversiteye kayıt ve oryantasyon sürecinde yardım.'
          ]
        },
        {
          title: 'Süreç Adımları',
          type: 'steps',
          items: [
            'İlk Görüşme: Hedefleriniz ve akademik geçmişiniz hakkında detaylı bilgi alışverişi.',
            'Üniversite ve Bölüm Seçimi: Size en uygun seçeneklerin belirlenmesi.',
            'Belge Hazırlığı: Gerekli tüm belgelerin hazırlanması ve çevirisi.',
            'Başvuru Süreci: Online başvuruların yapılması ve takibi.',
            'Sınav Hazırlığı: Gerekli durumlarda sınavlara hazırlık desteği.',
            'Kayıt: Üniversiteye kayıt işlemleri.'
          ]
        },
        {
          title: 'Neden Bu Hizmeti Almalısınız?',
          type: 'paragraph',
          content: 'İtalyan üniversitelerine kayıt süreci, karmaşık prosedürler ve belge gereksinimleri nedeniyle zorlayıcı olabilir. Yanlış veya eksik başvurular, zaman kaybına ve başvurunuzun reddedilmesine yol açabilir. Profesyonel danışmanlığımızla, sürecin her aşamasında doğru yönlendirme alarak başarılı bir kayıt süreci tamamlamanızı sağlıyoruz.'
        }
      ],
      priceDisplay: 'Bu hizmetin tekil fiyatı €800\'dür.',
      contactPrompt: 'İtalyan üniversitelerine kayıt sürecinizde profesyonel destek mi arıyorsunuz?',
      contactButtonText: 'Bize Ulaşın',
      goBackText: 'Tüm Fiyatlara Geri Dön',
      slugMap: { tr: 'universite-kayit', en: 'university-enrollment', it: 'iscrizione-universitaria' }
    },
    'ogrenci-vizesi': {
      slug: 'ogrenci-vizesi',
      title: 'Öğrenci Vizesi Danışmanlığı Detayları',
      pageSubtitle: 'İtalya\'da eğitim almak için gerekli vize başvuru süreçlerinde rehberlik.',
      mainImage: '/vize.jpg',
      introduction: 'İtalya\'da eğitim almak için öğrenci vizesi başvurusu yapmanız gerekmektedir. Bu süreç, doğru belgelerin hazırlanması ve başvurunun doğru şekilde yapılması açısından kritik öneme sahiptir. Öğrenci vizesi danışmanlık hizmetimizle, vize başvuru sürecinizin her aşamasında size rehberlik ediyoruz.',
      sections: [
        {
          title: 'Danışmanlık Hizmetimizin İçeriği',
          type: 'list',
          items: [
            'Vize Başvuru Süreci Analizi: Kişisel durumunuza göre uygun vize türünün belirlenmesi.',
            'Gerekli Belgelerin Hazırlanması: Başvuru formu, kabul mektubu, finansal belgeler, sigorta vb. belgelerin hazırlanması.',
            'Başvuru Formlarının Doldurulması: Tüm formların doğru ve eksiksiz doldurulması.',
            'Randevu Alma ve Takibi: İtalyan konsolosluğu veya vize merkezi randevularının alınması ve takibi.',
            'Mülakat Hazırlığı: Vize mülakatı için hazırlık ve rehberlik.',
            'Başvuru Sonrası Takip: Vize başvurunuzun durumunun takibi.'
          ]
        },
        {
          title: 'Süreç Adımları',
          type: 'steps',
          items: [
            'İlk Değerlendirme: Vize başvuru gereksinimlerinizin analizi.',
            'Belge Hazırlığı: Gerekli tüm belgelerin hazırlanması ve kontrolü.',
            'Başvuru Hazırlığı: Formların doldurulması ve başvuru dosyasının oluşturulması.',
            'Randevu ve Başvuru: Konsolosluk randevusunun alınması ve başvurunun yapılması.',
            'Mülakat ve Takip: Mülakat hazırlığı ve başvuru sonrası süreç takibi.'
          ]
        },
        {
          title: 'Neden Bu Hizmeti Almalısınız?',
          type: 'paragraph',
          content: 'Öğrenci vizesi başvuru süreci, doğru belgelerin hazırlanması ve başvurunun doğru şekilde yapılması açısından kritik öneme sahiptir. Yanlış veya eksik başvurular, vize reddine yol açabilir. Profesyonel danışmanlığımızla, vize başvuru sürecinizi doğru ve eksiksiz bir şekilde tamamlamanızı sağlıyoruz.'
        }
      ],
      priceDisplay: 'Bu hizmetin tekil fiyatı €200\'dür.',
      contactPrompt: 'İtalya\'da eğitim almak için vize başvuru sürecinizde profesyonel destek mi arıyorsunuz?',
      contactButtonText: 'Bize Ulaşın',
      goBackText: 'Tüm Fiyatlara Geri Dön',
      slugMap: { tr: 'ogrenci-vizesi', en: 'student-visa', it: 'visto-studentesco' }
    },
    'university-enrollment': {
      slug: 'university-enrollment',
      title: 'University Enrollment Consultancy Details',
      pageSubtitle: 'Professional guidance in your Italian university enrollment process.',
      mainImage: '/bocconi.jpg',
      introduction: 'The enrollment process for Italian universities can be challenging due to complex application procedures and document preparation processes. With our university enrollment consultancy service, we guide you through every stage of your application process and provide all the necessary support for a successful enrollment.',
      sections: [
        {
          title: 'Content of Our Consultancy Service',
          type: 'list',
          items: [
            'University and Program Selection: Selection of universities and programs suitable for your goals and academic background.',
            'Application File Preparation: Preparation and translation of all required documents (diploma, transcript, language certificate, etc.).',
            'Dichiarazione di Valore (DV) Procedures: Necessary procedures for the recognition of your diploma by Italian authorities.',
            'Online Application Process: Processing applications through the Universitaly portal.',
            'Exam Preparation: Support for entrance exam preparation when required.',
            'Post-Registration Support: Assistance with university registration and orientation process.'
          ]
        },
        {
          title: 'Process Steps',
          type: 'steps',
          items: [
            'Initial Consultation: Detailed information exchange about your goals and academic background.',
            'University and Program Selection: Determination of the most suitable options for you.',
            'Document Preparation: Preparation and translation of all required documents.',
            'Application Process: Submission and tracking of online applications.',
            'Exam Preparation: Support for exam preparation when required.',
            'Registration: University registration procedures.'
          ]
        },
        {
          title: 'Why Should You Get This Service?',
          type: 'paragraph',
          content: 'The enrollment process for Italian universities can be challenging due to complex procedures and document requirements. Incorrect or incomplete applications can lead to time loss and even rejection of your application. With our professional consultancy, we ensure you complete a successful enrollment process by receiving correct guidance at every stage.'
        }
      ],
      priceDisplay: 'The individual price for this service is €800.',
      contactPrompt: 'Are you looking for professional support in your Italian university enrollment process?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'universite-kayit', en: 'university-enrollment', it: 'iscrizione-universitaria' }
    },
    'student-visa': {
      slug: 'student-visa',
      title: 'Student Visa Consultancy Details',
      pageSubtitle: 'Guidance in visa application processes for studying in Italy.',
      mainImage: '/vize.jpg',
      introduction: 'To study in Italy, you need to apply for a student visa. This process is critical in terms of preparing the correct documents and making the application properly. With our student visa consultancy service, we guide you through every stage of your visa application process.',
      sections: [
        {
          title: 'Content of Our Consultancy Service',
          type: 'list',
          items: [
            'Visa Application Process Analysis: Determination of the appropriate visa type based on your personal situation.',
            'Preparation of Required Documents: Preparation of application form, acceptance letter, financial documents, insurance, etc.',
            'Filling Out Application Forms: Correct and complete filling of all forms.',
            'Appointment Scheduling and Tracking: Scheduling and tracking appointments at the Italian consulate or visa center.',
            'Interview Preparation: Preparation and guidance for the visa interview.',
            'Post-Application Follow-up: Tracking the status of your visa application.'
          ]
        },
        {
          title: 'Process Steps',
          type: 'steps',
          items: [
            'Initial Assessment: Analysis of your visa application requirements.',
            'Document Preparation: Preparation and checking of all required documents.',
            'Application Preparation: Filling out forms and creating the application file.',
            'Appointment and Application: Scheduling the consulate appointment and submitting the application.',
            'Interview and Follow-up: Interview preparation and post-application process tracking.'
          ]
        },
        {
          title: 'Why Should You Get This Service?',
          type: 'paragraph',
          content: 'The student visa application process is critical in terms of preparing the correct documents and making the application properly. Incorrect or incomplete applications can lead to visa rejection. With our professional consultancy, we ensure you complete your visa application process correctly and completely.'
        }
      ],
      priceDisplay: 'The individual price for this service is €200.',
      contactPrompt: 'Are you looking for professional support in your visa application process for studying in Italy?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'ogrenci-vizesi', en: 'student-visa', it: 'visto-studentesco' }
    },
    'iscrizione-universitaria': {
      slug: 'iscrizione-universitaria',
      title: 'Dettagli Consulenza Iscrizione Universitaria',
      pageSubtitle: 'Guida professionale nel processo di iscrizione alle università italiane.',
      mainImage: '/bocconi.jpg',
      introduction: 'Il processo di iscrizione alle università italiane può essere impegnativo a causa delle complesse procedure di candidatura e dei processi di preparazione dei documenti. Con il nostro servizio di consulenza per l\'iscrizione universitaria, ti guidiamo attraverso ogni fase del processo di candidatura e forniamo tutto il supporto necessario per un\'iscrizione di successo.',
      sections: [
        {
          title: 'Contenuto del Nostro Servizio di Consulenza',
          type: 'list',
          items: [
            'Selezione dell\'Università e del Programma: Selezione di università e programmi adatti ai tuoi obiettivi e background accademico.',
            'Preparazione del Dossier di Candidatura: Preparazione e traduzione di tutti i documenti richiesti (diploma, trascrizione, certificato linguistico, ecc.).',
            'Procedure Dichiarazione di Valore (DV): Procedure necessarie per il riconoscimento del tuo diploma dalle autorità italiane.',
            'Processo di Candidatura Online: Gestione delle candidature tramite il portale Universitaly.',
            'Preparazione agli Esami: Supporto per la preparazione agli esami di ammissione quando richiesto.',
            'Supporto Post-Registrazione: Assistenza nel processo di registrazione universitaria e orientamento.'
          ]
        },
        {
          title: 'Fasi del Processo',
          type: 'steps',
          items: [
            'Consulenza Iniziale: Scambio dettagliato di informazioni sui tuoi obiettivi e background accademico.',
            'Selezione dell\'Università e del Programma: Determinazione delle opzioni più adatte a te.',
            'Preparazione dei Documenti: Preparazione e traduzione di tutti i documenti richiesti.',
            'Processo di Candidatura: Invio e monitoraggio delle candidature online.',
            'Preparazione agli Esami: Supporto per la preparazione agli esami quando richiesto.',
            'Registrazione: Procedure di registrazione universitaria.'
          ]
        },
        {
          title: 'Perché Scegliere Questo Servizio?',
          type: 'paragraph',
          content: 'Il processo di iscrizione alle università italiane può essere impegnativo a causa delle procedure complesse e dei requisiti documentali. Candidature errate o incomplete possono portare a perdita di tempo e persino al rifiuto della tua domanda. Con la nostra consulenza professionale, garantiamo che tu completi con successo il processo di iscrizione ricevendo una guida corretta in ogni fase.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €800.',
      contactPrompt: 'Stai cercando un supporto professionale nel tuo processo di iscrizione alle università italiane?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'universite-kayit', en: 'university-enrollment', it: 'iscrizione-universitaria' }
    },
    'visto-studentesco': {
      slug: 'visto-studentesco',
      title: 'Dettagli Consulenza Visto Studentesco',
      pageSubtitle: 'Guida nei processi di richiesta del visto per studiare in Italia.',
      mainImage: '/bürokrasi.jpg',
      introduction: 'Per studiare in Italia, è necessario richiedere un visto studentesco. Questo processo è fondamentale in termini di preparazione dei documenti corretti e presentazione della domanda in modo appropriato. Con il nostro servizio di consulenza per il visto studentesco, ti guidiamo attraverso ogni fase del processo di richiesta del visto.',
      sections: [
        {
          title: 'Contenuto del Nostro Servizio di Consulenza',
          type: 'list',
          items: [
            'Analisi del Processo di Richiesta del Visto: Determinazione del tipo di visto appropriato in base alla tua situazione personale.',
            'Preparazione dei Documenti Richiesti: Preparazione del modulo di domanda, lettera di accettazione, documenti finanziari, assicurazione, ecc.',
            'Compilazione dei Moduli di Domanda: Compilazione corretta e completa di tutti i moduli.',
            'Prenotazione e Monitoraggio degli Appuntamenti: Prenotazione e monitoraggio degli appuntamenti presso il consolato italiano o il centro visti.',
            'Preparazione al Colloquio: Preparazione e guida per il colloquio per il visto.',
            'Follow-up Post-Domanda: Monitoraggio dello stato della tua domanda di visto.'
          ]
        },
        {
          title: 'Fasi del Processo',
          type: 'steps',
          items: [
            'Valutazione Iniziale: Analisi dei requisiti per la tua domanda di visto.',
            'Preparazione dei Documenti: Preparazione e verifica di tutti i documenti richiesti.',
            'Preparazione della Domanda: Compilazione dei moduli e creazione del fascicolo di domanda.',
            'Appuntamento e Domanda: Prenotazione dell\'appuntamento al consolato e presentazione della domanda.',
            'Colloquio e Follow-up: Preparazione al colloquio e monitoraggio del processo post-domanda.'
          ]
        },
        {
          title: 'Perché Scegliere Questo Servizio?',
          type: 'paragraph',
          content: 'Il processo di richiesta del visto studentesco è fondamentale in termini di preparazione dei documenti corretti e presentazione della domanda in modo appropriato. Domande errate o incomplete possono portare al rifiuto del visto. Con la nostra consulenza professionale, garantiamo che tu completi il processo di richiesta del visto in modo corretto e completo.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €200.',
      contactPrompt: 'Stai cercando un supporto professionale nel processo di richiesta del visto per studiare in Italia?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'ogrenci-vizesi', en: 'student-visa', it: 'visto-studentesco' }
    }
  },
  en: {
    'welcome-service': {
      slug: 'welcome-service',
      title: 'Welcome Service Details',
      pageSubtitle: 'Discover what awaits you upon your arrival in Italy and the conveniences we offer.',
      mainImage: '/karsilama2.png',
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
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'karsilama-hizmeti', en: 'welcome-service', it: 'servizio-benvenuto' }
    },
    'accommodation-consultancy': {
      slug: 'accommodation-consultancy',
      title: 'Accommodation Finding Consultancy Details',
      pageSubtitle: 'We simplify the process of finding your new home in Italy.',
      mainImage: '/konaklama2.jpg',
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
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'konaklama-danismanligi', en: 'accommodation-consultancy', it: 'consulenza-alloggio' }
    },
    'residence-permit-residency': {
      slug: 'residence-permit-residency',
      title: 'Residence Permit (Permesso di Soggiorno) & Residency (Residenza) Consultancy Details',
      pageSubtitle: 'Complete your legal processes in Italy smoothly.',
      mainImage: '//bürokrasi.jpg',
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
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'oturum-izni-ikametgah', en: 'residence-permit-residency', it: 'permesso-soggiorno-residenza' }
    },
    'scholarship-application': {
      slug: 'scholarship-application',
      title: 'Scholarship Application Consultancy Details',
      pageSubtitle: 'Support your educational dreams in Italy with scholarships.',
      mainImage: '//burs2.png',
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
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'burs-basvurusu', en: 'scholarship-application', it: 'domanda-borsa-studio' }
    },
    'driving-license': {
      slug: 'driving-license',
      title: 'Driving License Acquisition Consultancy Details',
      pageSubtitle: 'Your first step to driving safely on Italian roads.',
      mainImage: '/driver.jpg',
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
            'Motorizzazione Civile (Ulaştırma Bakanlığı) Randevuları ve İşlemleri.',
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
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'surucu-belgesi', en: 'driving-license', it: 'patente-guida' }
    },
    'university-enrollment': {
      slug: 'university-enrollment',
      title: 'University Enrollment Consultancy Details',
      pageSubtitle: 'Professional guidance in your Italian university enrollment process.',
      mainImage: '/bocconi.jpg',
      introduction: 'The enrollment process for Italian universities can be challenging due to complex application procedures and document preparation processes. With our university enrollment consultancy service, we guide you through every stage of your application process and provide all the necessary support for a successful enrollment.',
      sections: [
        {
          title: 'Content of Our Consultancy Service',
          type: 'list',
          items: [
            'University and Program Selection: Selection of universities and programs suitable for your goals and academic background.',
            'Application File Preparation: Preparation and translation of all required documents (diploma, transcript, language certificate, etc.).',
            'Dichiarazione di Valore (DV) Procedures: Necessary procedures for the recognition of your diploma by Italian authorities.',
            'Online Application Process: Processing applications through the Universitaly portal.',
            'Exam Preparation: Support for entrance exam preparation when required.',
            'Post-Registration Support: Assistance with university registration and orientation process.'
          ]
        },
        {
          title: 'Process Steps',
          type: 'steps',
          items: [
            'Initial Consultation: Detailed information exchange about your goals and academic background.',
            'University and Program Selection: Determination of the most suitable options for you.',
            'Document Preparation: Preparation and translation of all required documents.',
            'Application Process: Submission and tracking of online applications.',
            'Exam Preparation: Support for exam preparation when required.',
            'Registration: University registration procedures.'
          ]
        },
        {
          title: 'Why Should You Get This Service?',
          type: 'paragraph',
          content: 'The enrollment process for Italian universities can be challenging due to complex procedures and document requirements. Incorrect or incomplete applications can lead to time loss and even rejection of your application. With our professional consultancy, we ensure you complete a successful enrollment process by receiving correct guidance at every stage.'
        }
      ],
      priceDisplay: 'The individual price for this service is €800.',
      contactPrompt: 'Are you looking for professional support in your Italian university enrollment process?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'universite-kayit', en: 'university-enrollment', it: 'iscrizione-universitaria' }
    },
    'student-visa': {
      slug: 'student-visa',
      title: 'Student Visa Consultancy Details',
      pageSubtitle: 'Guidance in visa application processes for studying in Italy.',
      mainImage: '/bürokrasi.jpg',
      introduction: 'To study in Italy, you need to apply for a student visa. This process is critical in terms of preparing the correct documents and making the application properly. With our student visa consultancy service, we guide you through every stage of your visa application process.',
      sections: [
        {
          title: 'Content of Our Consultancy Service',
          type: 'list',
          items: [
            'Visa Application Process Analysis: Determination of the appropriate visa type based on your personal situation.',
            'Preparation of Required Documents: Preparation of application form, acceptance letter, financial documents, insurance, etc.',
            'Filling Out Application Forms: Correct and complete filling of all forms.',
            'Appointment Scheduling and Tracking: Scheduling and tracking appointments at the Italian consulate or visa center.',
            'Interview Preparation: Preparation and guidance for the visa interview.',
            'Post-Application Follow-up: Tracking the status of your visa application.'
          ]
        },
        {
          title: 'Process Steps',
          type: 'steps',
          items: [
            'Initial Assessment: Analysis of your visa application requirements.',
            'Document Preparation: Preparation and checking of all required documents.',
            'Application Preparation: Filling out forms and creating the application file.',
            'Appointment and Application: Scheduling the consulate appointment and submitting the application.',
            'Interview and Follow-up: Interview preparation and post-application process tracking.'
          ]
        },
        {
          title: 'Why Should You Get This Service?',
          type: 'paragraph',
          content: 'The student visa application process is critical in terms of preparing the correct documents and making the application properly. Incorrect or incomplete applications can lead to visa rejection. With our professional consultancy, we ensure you complete your visa application process correctly and completely.'
        }
      ],
      priceDisplay: 'The individual price for this service is €200.',
      contactPrompt: 'Are you looking for professional support in your visa application process for studying in Italy?',
      contactButtonText: 'Contact Us',
      goBackText: 'Back to All Pricing',
      slugMap: { tr: 'ogrenci-vizesi', en: 'student-visa', it: 'visto-studentesco' }
    },
    'visto-studentesco': {
      slug: 'visto-studentesco',
      title: 'Dettagli Consulenza Visto Studentesco',
      pageSubtitle: 'Guida nei processi di richiesta del visto per studiare in Italia.',
      mainImage: '/bürokrasi.jpg',
      introduction: 'Per studiare in Italia, è necessario richiedere un visto studentesco. Questo processo è fondamentale in termini di preparazione dei documenti corretti e presentazione della domanda in modo appropriato. Con il nostro servizio di consulenza per il visto studentesco, ti guidiamo attraverso ogni fase del processo di richiesta del visto.',
      sections: [
        {
          title: 'Contenuto del Nostro Servizio di Consulenza',
          type: 'list',
          items: [
            'Analisi del Processo di Richiesta del Visto: Determinazione del tipo di visto appropriato in base alla tua situazione personale.',
            'Preparazione dei Documenti Richiesti: Preparazione del modulo di domanda, lettera di accettazione, documenti finanziari, assicurazione, ecc.',
            'Compilazione dei Moduli di Domanda: Compilazione corretta e completa di tutti i moduli.',
            'Prenotazione e Monitoraggio degli Appuntamenti: Prenotazione e monitoraggio degli appuntamenti presso il consolato italiano o il centro visti.',
            'Preparazione al Colloquio: Preparazione e guida per il colloquio per il visto.',
            'Follow-up Post-Domanda: Monitoraggio dello stato della tua domanda di visto.'
          ]
        },
        {
          title: 'Fasi del Processo',
          type: 'steps',
          items: [
            'Valutazione Iniziale: Analisi dei requisiti per la tua domanda di visto.',
            'Preparazione dei Documenti: Preparazione e verifica di tutti i documenti richiesti.',
            'Preparazione della Domanda: Compilazione dei moduli e creazione del fascicolo di domanda.',
            'Appuntamento e Domanda: Prenotazione dell\'appuntamento al consolato e presentazione della domanda.',
            'Colloquio e Follow-up: Preparazione al colloquio e monitoraggio del processo post-domanda.'
          ]
        },
        {
          title: 'Perché Scegliere Questo Servizio?',
          type: 'paragraph',
          content: 'Il processo di richiesta del visto studentesco è fondamentale in termini di preparazione dei documenti corretti e presentazione della domanda in modo appropriato. Domande errate o incomplete possono portare al rifiuto del visto. Con la nostra consulenza professionale, garantiamo che tu completi il processo di richiesta del visto in modo corretto e completo.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €200.',
      contactPrompt: 'Stai cercando un supporto professionale nel processo di richiesta del visto per studiare in Italia?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'ogrenci-vizesi', en: 'student-visa', it: 'visto-studentesco' }
    }
  },
  it: {
    'servizio-benvenuto': {
      slug: 'servizio-benvenuto',
      title: 'Dettagli del Servizio di Benvenuto',
      pageSubtitle: 'Scopri cosa ti aspetta al tuo arrivo in Italia e le comodità che offriamo.',
      mainImage: '/karsilama2.png',
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
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'karsilama-hizmeti', en: 'welcome-service', it: 'servizio-benvenuto' }
    },
    'consulenza-alloggio': {
      slug: 'consulenza-alloggio',
      title: 'Dettagli Consulenza Ricerca Alloggio',
      pageSubtitle: 'Semplifichiamo il processo di ricerca della tua nuova casa in Italia.',
      mainImage: '/konaklama2.jpg',
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
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'konaklama-danismanligi', en: 'accommodation-consultancy', it: 'consulenza-alloggio' }
    },
    'permesso-soggiorno-residenza': {
      slug: 'permesso-soggiorno-residenza',
      title: 'Dettagli Consulenza Permesso di Soggiorno e Residenza',
      pageSubtitle: 'Completa senza intoppi le tue procedure legali in Italia.',
      mainImage: '//bürokrasi.jpg',
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
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'oturum-izni-ikametgah', en: 'residence-permit-residency', it: 'permesso-soggiorno-residenza' }
    },
    'domanda-borsa-studio': {
      slug: 'domanda-borsa-studio',
      title: 'Dettagli Consulenza Domanda Borsa di Studio',
      pageSubtitle: 'Sostieni i tuoi sogni di studio in Italia con le borse di studio.',
      mainImage: '/burs2.png',
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
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'burs-basvurusu', en: 'scholarship-application', it: 'domanda-borsa-studio' }
    },
    'patente-guida': {
      slug: 'patente-guida',
      title: 'Dettagli Consulenza Ottenimento Patente di Guida',
      pageSubtitle: 'Il tuo primo passo per guidare in sicurezza sulle strade italiane.',
      mainImage: '/driver.jpg',
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
      contactPrompt: 'İtalyan sürücü belgesi işlemleriniz için yardıma mı ihtiyacınız var?',
      contactButtonText: 'Bize Ulaşın',
      goBackText: 'Tüm Fiyatlara Geri Dön',
      slugMap: { tr: 'surucu-belgesi', en: 'driving-license', it: 'patente-guida' }
    },
    'iscrizione-universitaria': {
      slug: 'iscrizione-universitaria',
      title: 'Dettagli Consulenza Iscrizione Universitaria',
      pageSubtitle: 'Guida professionale nel processo di iscrizione alle università italiane.',
      mainImage: '/bocconi.jpg',
      introduction: 'Il processo di iscrizione alle università italiane può essere impegnativo a causa delle complesse procedure di candidatura e dei processi di preparazione dei documenti. Con il nostro servizio di consulenza per l\'iscrizione universitaria, ti guidiamo attraverso ogni fase del processo di candidatura e forniamo tutto il supporto necessario per un\'iscrizione di successo.',
      sections: [
        {
          title: 'Contenuto del Nostro Servizio di Consulenza',
          type: 'list',
          items: [
            'Selezione dell\'Università e del Programma: Selezione di università e programmi adatti ai tuoi obiettivi e background accademico.',
            'Preparazione del Dossier di Candidatura: Preparazione e traduzione di tutti i documenti richiesti (diploma, trascrizione, certificato linguistico, ecc.).',
            'Procedure Dichiarazione di Valore (DV): Procedure necessarie per il riconoscimento del tuo diploma dalle autorità italiane.',
            'Processo di Candidatura Online: Gestione delle candidature tramite il portale Universitaly.',
            'Preparazione agli Esami: Supporto per la preparazione agli esami di ammissione quando richiesto.',
            'Supporto Post-Registrazione: Assistenza nel processo di registrazione universitaria e orientamento.'
          ]
        },
        {
          title: 'Fasi del Processo',
          type: 'steps',
          items: [
            'Consulenza Iniziale: Scambio dettagliato di informazioni sui tuoi obiettivi e background accademico.',
            'Selezione dell\'Università e del Programma: Determinazione delle opzioni più adatte a te.',
            'Preparazione dei Documenti: Preparazione e traduzione di tutti i documenti richiesti.',
            'Processo di Candidatura: Invio e monitoraggio delle candidature online.',
            'Preparazione agli Esami: Supporto per la preparazione agli esami quando richiesto.',
            'Registrazione: Procedure di registrazione universitaria.'
          ]
        },
        {
          title: 'Perché Scegliere Questo Servizio?',
          type: 'paragraph',
          content: 'Il processo di iscrizione alle università italiane può essere impegnativo a causa delle procedure complesse e dei requisiti documentali. Candidature errate o incomplete possono portare a perdita di tempo e persino al rifiuto della tua domanda. Con la nostra consulenza professionale, garantiamo che tu completi con successo il processo di iscrizione ricevendo una guida corretta in ogni fase.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €800.',
      contactPrompt: 'Stai cercando un supporto professionale nel tuo processo di iscrizione alle università italiane?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'universite-kayit', en: 'university-enrollment', it: 'iscrizione-universitaria' }
    },
    'visto-studentesco': {
      slug: 'visto-studentesco',
      title: 'Dettagli Consulenza Visto Studentesco',
      pageSubtitle: 'Guida nei processi di richiesta del visto per studiare in Italia.',
      mainImage: '/bürokrasi.jpg',
      introduction: 'Per studiare in Italia, è necessario richiedere un visto studentesco. Questo processo è fondamentale in termini di preparazione dei documenti corretti e presentazione della domanda in modo appropriato. Con il nostro servizio di consulenza per il visto studentesco, ti guidiamo attraverso ogni fase del processo di richiesta del visto.',
      sections: [
        {
          title: 'Contenuto del Nostro Servizio di Consulenza',
          type: 'list',
          items: [
            'Analisi del Processo di Richiesta del Visto: Determinazione del tipo di visto appropriato in base alla tua situazione personale.',
            'Preparazione dei Documenti Richiesti: Preparazione del modulo di domanda, lettera di accettazione, documenti finanziari, assicurazione, ecc.',
            'Compilazione dei Moduli di Domanda: Compilazione corretta e completa di tutti i moduli.',
            'Prenotazione e Monitoraggio degli Appuntamenti: Prenotazione e monitoraggio degli appuntamenti presso il consolato italiano o il centro visti.',
            'Preparazione al Colloquio: Preparazione e guida per il colloquio per il visto.',
            'Follow-up Post-Domanda: Monitoraggio dello stato della tua domanda di visto.'
          ]
        },
        {
          title: 'Fasi del Processo',
          type: 'steps',
          items: [
            'Valutazione Iniziale: Analisi dei requisiti per la tua domanda di visto.',
            'Preparazione dei Documenti: Preparazione e verifica di tutti i documenti richiesti.',
            'Preparazione della Domanda: Compilazione dei moduli e creazione del fascicolo di domanda.',
            'Appuntamento e Domanda: Prenotazione dell\'appuntamento al consolato e presentazione della domanda.',
            'Colloquio e Follow-up: Preparazione al colloquio e monitoraggio del processo post-domanda.'
          ]
        },
        {
          title: 'Perché Scegliere Questo Servizio?',
          type: 'paragraph',
          content: 'Il processo di richiesta del visto studentesco è fondamentale in termini di preparazione dei documenti corretti e presentazione della domanda in modo appropriato. Domande errate o incomplete possono portare al rifiuto del visto. Con la nostra consulenza professionale, garantiamo che tu completi il processo di richiesta del visto in modo corretto e completo.'
        }
      ],
      priceDisplay: 'Il prezzo individuale per questo servizio è di €200.',
      contactPrompt: 'Stai cercando un supporto professionale nel processo di richiesta del visto per studiare in Italia?',
      contactButtonText: 'Contattaci',
      goBackText: 'Torna a Tutti i Prezzi',
      slugMap: { tr: 'ogrenci-vizesi', en: 'student-visa', it: 'visto-studentesco' }
    }
  }
};

export const getServiceDetails = (
  slug: string,
  lang: string
): ServiceDetail | undefined =>
  allServiceDetails[lang]?.[slug] ?? allServiceDetails.en?.[slug];
