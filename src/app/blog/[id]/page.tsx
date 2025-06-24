'use client';

export const runtime = 'edge';

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import { FaCalendarAlt, FaUser, FaBookOpen, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const getBlogPostDetails = (lang: string, id: string) => {
  const blogPosts = {
    tr: {
      backToBlog: "Blog'a Geri Dön",
      readTime: "dakika okuma",
      share: "Paylaş",
      relatedPosts: "İlgili Yazılar",
      author: "Yazar",
      category: "Kategori",
      posts: {
        "1": {
          id: "1",
          title: "İtalya'da Şirket Kurmanın 10 Adımı",
          excerpt: "İtalya'da şirket kurma sürecini adım adım açıklıyoruz. Hangi belgeler gerekli, süreç nasıl işliyor ve nelere dikkat etmelisiniz?",
          author: "Bumin Kağan Çetin",
          date: "20 Aralık 2024",
          readTime: 8,
          category: "İş Kurma",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>İtalya'da şirket kurmak, yabancı yatırımcılar için hem fırsatlar hem de zorluklar sunan bir süreçtir. Bu rehberde, İtalya'da şirket kurmanın 10 temel adımını detaylı olarak açıklayacağız.</p>
            
            <h2>1. Şirket Türünü Belirleme</h2>
            <p>İtalya'da kurulabilecek başlıca şirket türleri şunlardır:</p>
            <ul>
              <li><strong>S.r.l. (Società a responsabilità limitata):</strong> Limited şirket, minimum €10,000 sermaye</li>
              <li><strong>S.p.A. (Società per azioni):</strong> Anonim şirket, minimum €50,000 sermaye</li>
              <li><strong>S.n.c. (Società in nome collettivo):</strong> Kolektif şirket</li>
              <li><strong>S.a.s. (Società in accomandita semplice):</strong> Komandit şirket</li>
            </ul>
            
            <h2>2. Şirket Adı Seçimi ve Kontrolü</h2>
            <p>Seçtiğiniz şirket adının:</p>
            <ul>
              <li>İtalya'da benzersiz olması gerekir</li>
              <li>Yasal gerekliliklere uygun olması gerekir</li>
              <li>Marka tescili kontrolü yapılmalıdır</li>
            </ul>
            
            <h2>3. Gerekli Belgelerin Hazırlanması</h2>
            <p>Şirket kurulumu için gerekli belgeler:</p>
            <ul>
              <li>Kimlik belgesi (pasaport veya kimlik kartı)</li>
              <li>Adres kanıtı</li>
              <li>Sabıka kaydı</li>
              <li>İş planı</li>
              <li>Sermaye kanıtı</li>
              <li>Yabancı belgeler için apostil onayı</li>
            </ul>
            
            <h2>4. Noter İşlemleri</h2>
            <p>Şirket kurulum sözleşmesi noter huzurunda imzalanmalıdır:</p>
            <ul>
              <li>Şirket sözleşmesi hazırlanır</li>
              <li>Ortaklar noter huzurunda imzalar</li>
              <li>Noter onayı alınır</li>
            </ul>
            
            <h2>5. Ticaret Sicili Kaydı</h2>
            <p>Şirket, yerel Ticaret Sicili'ne kaydedilmelidir:</p>
            <ul>
              <li>Kayıt başvurusu yapılır</li>
              <li>Gerekli belgeler sunulur</li>
              <li>Kayıt onayı alınır</li>
            </ul>
            
            <h2>6. Vergi Numarası Alma</h2>
            <p>Şirket için Codice Fiscale alınmalıdır:</p>
            <ul>
              <li>Vergi dairesine başvuru</li>
              <li>Vergi numarası tahsisi</li>
              <li>Vergi kaydı tamamlanması</li>
            </ul>
            
            <h2>7. Banka Hesabı Açılışı</h2>
            <p>Şirket için banka hesabı açılmalıdır:</p>
            <ul>
              <li>Banka seçimi</li>
              <li>Hesap açılış başvurusu</li>
              <li>Sermaye yatırımı</li>
              <li>Hesap aktivasyonu</li>
            </ul>
            
            <h2>8. Sosyal Güvenlik Kaydı</h2>
            <p>Çalışan istihdam edilecekse:</p>
            <ul>
              <li>INPS kaydı</li>
              <li>INAIL kaydı</li>
              <li>Çalışan kayıt işlemleri</li>
            </ul>
            
            <h2>9. Muhasebe Sistemi Kurulumu</h2>
            <p>Muhasebe ve finansal sistemler:</p>
            <ul>
              <li>Muhasebe yazılımı seçimi</li>
              <li>Muhasebeci atanması</li>
              <li>Finansal sistem kurulumu</li>
            </ul>
            
            <h2>10. İş Lisansı ve İzinler</h2>
            <p>Faaliyet türüne göre gerekli izinler:</p>
            <ul>
              <li>İş lisansı başvurusu</li>
              <li>Özel izinler (gerekirse)</li>
              <li>Mesleki lisanslar</li>
            </ul>
            
            <h3>Önemli Notlar</h3>
            <ul>
              <li>Süreç genellikle 2-4 hafta sürer</li>
              <li>Profesyonel danışmanlık önerilir</li>
              <li>Yasal gereklilikler sürekli değişebilir</li>
              <li>Dil bariyeri için çeviri desteği gerekebilir</li>
            </ul>
            
            <h3>Alvolo Consulting Hizmetleri</h3>
            <p>Şirket kurulum sürecinizde size yardımcı olmak için kapsamlı hizmetlerimizi sunuyoruz:</p>
            <ul>
              <li>Şirket türü seçimi danışmanlığı</li>
              <li>Belge hazırlama ve çeviri</li>
              <li>Noter işlemleri takibi</li>
              <li>Banka hesabı açılış desteği</li>
              <li>Muhasebe sistemi kurulumu</li>
              <li>Sürekli danışmanlık desteği</li>
            </ul>
            
            <p>İtalya'da şirket kurulumu hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
          `
        },
        "2": {
          id: "2",
          title: "2025 İtalya Vize Başvuru Rehberi",
          excerpt: "2025 yılında İtalya'ya vize başvurusu yaparken bilmeniz gereken tüm detaylar. Hangi vize türü size uygun?",
          author: "Ece Melisa Özgüner",
          date: "18 Aralık 2024",
          readTime: 12,
          category: "Vize & İzinler",
          featured: false,
          image: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          content: `
            <p>İtalya'ya vize başvurusu yaparken doğru bilgilere sahip olmak ve süreci doğru yönetmek çok önemlidir. Bu rehberde 2025 yılında geçerli olan vize türlerini ve başvuru süreçlerini detaylı olarak açıklayacağız.</p>
            
            <h2>Vize Türleri</h2>
            
            <h3>1. Öğrenci Vizesi (Visto per Studio)</h3>
            <p>İtalya'da eğitim almak isteyen öğrenciler için:</p>
            <ul>
              <li><strong>Süre:</strong> Eğitim süresince (maksimum 1 yıl)</li>
              <li><strong>Gereksinimler:</strong></li>
              <ul>
                <li>Kabul mektubu</li>
                <li>Finansal yeterlilik kanıtı</li>
                <li>Sağlık sigortası</li>
                <li>Konaklama kanıtı</li>
              </ul>
            </ul>
            
            <h3>2. Çalışma Vizesi (Visto per Lavoro)</h3>
            <p>İtalya'da çalışmak isteyenler için:</p>
            <ul>
              <li><strong>Süre:</strong> İş sözleşmesi süresince</li>
              <li><strong>Gereksinimler:</strong></li>
              <ul>
                <li>İş teklifi</li>
                <li>İşveren sponsorluğu</li>
                <li>Mesleki yeterlilik belgesi</li>
                <li>Dil yeterliliği</li>
              </ul>
            </ul>
            
            <h3>3. Aile Birleşimi Vizesi (Visto per Ricongiungimento Familiare)</h3>
            <p>Aile üyelerini İtalya'ya getirmek isteyenler için:</p>
            <ul>
              <li><strong>Süre:</strong> Kalıcı</li>
              <li><strong>Gereksinimler:</strong></li>
              <ul>
                <li>Akrabalık kanıtı</li>
                <li>Finansal yeterlilik</li>
                <li>Konaklama kanıtı</li>
                <li>Sağlık sigortası</li>
              </ul>
            </ul>
            
            <h2>Başvuru Süreci</h2>
            
            <h3>1. Belge Hazırlama</h3>
            <ul>
              <li>Pasaport (en az 3 ay geçerli)</li>
              <li>Vize başvuru formu</li>
              <li>Fotoğraf (son 6 ay içinde)</li>
              <li>Vize ücreti ödeme kanıtı</li>
              <li>Diğer gerekli belgeler</li>
            </ul>
            
            <h3>2. Randevu Alma</h3>
            <ul>
              <li>İtalyan konsolosluğu ile iletişim</li>
              <li>Online randevu sistemi</li>
              <li>Randevu tarihi belirleme</li>
            </ul>
            
            <h3>3. Başvuru Sunumu</h3>
            <ul>
              <li>Belgelerin kontrolü</li>
              <li>Mülakat</li>
              <li>Parmak izi alma</li>
              <li>Başvuru takip numarası alma</li>
            </ul>
            
            <h3>4. Sonuç Takibi</h3>
            <ul>
              <li>Online takip sistemi</li>
              <li>Konsolosluk ile iletişim</li>
              <li>Vize teslimi</li>
            </ul>
            
            <h2>2025 Yılı Değişiklikleri</h2>
            <ul>
              <li>Dijital başvuru sistemi zorunlu hale geldi</li>
              <li>Sağlık sigortası zorunluluğu arttı</li>
              <li>Finansal yeterlilik şartları güncellendi</li>
              <li>İşlem süreleri kısaldı</li>
            </ul>
            
            <h2>Öneriler</h2>
            <ul>
              <li>Başvuruyu en az 2 ay önceden hazırlayın</li>
              <li>Tüm belgelerinizi güncel tutun</li>
              <li>Profesyonel danışmanlık alın</li>
              <li>Alternatif planlarınızı hazırlayın</li>
            </ul>
            
            <h3>Alvolo Consulting Hizmetleri</h3>
            <p>Vize başvuru sürecinizde size yardımcı olmak için:</p>
            <ul>
              <li>Vize türü seçimi danışmanlığı</li>
              <li>Belge hazırlama ve kontrolü</li>
              <li>Randevu alma ve takip</li>
              <li>Mülakat hazırlığı</li>
              <li>Süreç boyunca destek</li>
            </ul>
            
            <p>Vize başvuru sürecinizde size yardımcı olmak için bizimle iletişime geçebilirsiniz.</p>
          `
        }
      }
    },
    en: {
      backToBlog: "Back to Blog",
      readTime: "min read",
      share: "Share",
      relatedPosts: "Related Posts",
      author: "Author",
      category: "Category",
      posts: {
        "1": {
          id: "1",
          title: "10 Steps to Setting Up a Company in Italy",
          excerpt: "We explain the company formation process in Italy step by step. What documents are needed, how does the process work, and what should you pay attention to?",
          author: "Bumin Kağan Çetin",
          date: "December 20, 2024",
          readTime: 8,
          category: "Business Setup",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>Setting up a company in Italy offers both opportunities and challenges for foreign investors. In this guide, we will explain the 10 fundamental steps of setting up a company in Italy in detail.</p>
            
            <h2>1. Determine Company Type</h2>
            <p>The main types of companies that can be established in Italy are:</p>
            <ul>
              <li><strong>S.r.l. (Società a responsabilità limitata):</strong> Limited company, minimum €10,000 capital</li>
              <li><strong>S.p.A. (Società per azioni):</strong> Joint-stock company, minimum €50,000 capital</li>
              <li><strong>S.n.c. (Società in nome collettivo):</strong> General partnership</li>
              <li><strong>S.a.s. (Società in accomandita semplice):</strong> Limited partnership</li>
            </ul>
            
            <h2>2. Company Name Selection and Verification</h2>
            <p>Your chosen company name must:</p>
            <ul>
              <li>Be unique in Italy</li>
              <li>Comply with legal requirements</li>
              <li>Undergo trademark registration check</li>
            </ul>
            
            <h2>3. Preparation of Required Documents</h2>
            <p>Documents required for company formation:</p>
            <ul>
              <li>Identity document (passport or ID card)</li>
              <li>Proof of address</li>
              <li>Criminal record certificate</li>
              <li>Business plan</li>
              <li>Proof of capital</li>
              <li>Apostille for foreign documents</li>
            </ul>
            
            <h2>4. Notary Procedures</h2>
            <p>The company formation agreement must be signed before a notary:</p>
            <ul>
              <li>Company agreement is prepared</li>
              <li>Partners sign before notary</li>
              <li>Notary approval is obtained</li>
            </ul>
            
            <h2>5. Trade Registry Registration</h2>
            <p>The company must be registered with the local Trade Registry:</p>
            <ul>
              <li>Registration application is made</li>
              <li>Required documents are submitted</li>
              <li>Registration approval is obtained</li>
            </ul>
            
            <h2>6. Obtaining Tax Number</h2>
            <p>A Codice Fiscale must be obtained for the company:</p>
            <ul>
              <li>Application to tax office</li>
              <li>Tax number assignment</li>
              <li>Tax registration completion</li>
            </ul>
            
            <h2>7. Opening Bank Account</h2>
            <p>A bank account must be opened for the company:</p>
            <ul>
              <li>Bank selection</li>
              <li>Account opening application</li>
              <li>Capital deposit</li>
              <li>Account activation</li>
            </ul>
            
            <h2>8. Social Security Registration</h2>
            <p>If employees will be hired:</p>
            <ul>
              <li>INPS registration</li>
              <li>INAIL registration</li>
              <li>Employee registration procedures</li>
            </ul>
            
            <h2>9. Setting Up Accounting System</h2>
            <p>Accounting and financial systems:</p>
            <ul>
              <li>Accounting software selection</li>
              <li>Accountant assignment</li>
              <li>Financial system setup</li>
            </ul>
            
            <h2>10. Business License and Permits</h2>
            <p>Required permits according to activity type:</p>
            <ul>
              <li>Business license application</li>
              <li>Special permits (if required)</li>
              <li>Professional licenses</li>
            </ul>
            
            <h3>Important Notes</h3>
            <ul>
              <li>The process usually takes 2-4 weeks</li>
              <li>Professional consulting is recommended</li>
              <li>Legal requirements may change continuously</li>
              <li>Translation support may be needed due to language barrier</li>
            </ul>
            
            <h3>Alvolo Consulting Services</h3>
            <p>We offer comprehensive services to help you in your company formation process:</p>
            <ul>
              <li>Company type selection consulting</li>
              <li>Document preparation and translation</li>
              <li>Notary procedures tracking</li>
              <li>Bank account opening support</li>
              <li>Accounting system setup</li>
              <li>Continuous consulting support</li>
            </ul>
            
            <p>Contact us for detailed information about setting up a company in Italy.</p>
          `
        }
      }
    },
    it: {
      backToBlog: "Torna al Blog",
      readTime: "min di lettura",
      share: "Condividi",
      relatedPosts: "Post Correlati",
      author: "Autore",
      category: "Categoria",
      posts: {
        "1": {
          id: "1",
          title: "10 Passi per Costituire un'Azienda in Italia",
          excerpt: "Spieghiamo il processo di costituzione aziendale in Italia passo dopo passo. Quali documenti servono, come funziona il processo e a cosa prestare attenzione?",
          author: "Bumin Kağan Çetin",
          date: "20 Dicembre 2024",
          readTime: 8,
          category: "Costituzione Aziendale",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>Costituire un'azienda in Italia offre sia opportunità che sfide per gli investitori stranieri. In questa guida, spiegheremo i 10 passi fondamentali per costituire un'azienda in Italia in dettaglio.</p>
            
            <h2>1. Determinare il Tipo di Azienda</h2>
            <p>I principali tipi di aziende che possono essere costituite in Italia sono:</p>
            <ul>
              <li><strong>S.r.l. (Società a responsabilità limitata):</strong> Società a responsabilità limitata, capitale minimo €10.000</li>
              <li><strong>S.p.A. (Società per azioni):</strong> Società per azioni, capitale minimo €50.000</li>
              <li><strong>S.n.c. (Società in nome collettivo):</strong> Società in nome collettivo</li>
              <li><strong>S.a.s. (Società in accomandita semplice):</strong> Società in accomandita semplice</li>
            </ul>
            
            <h2>2. Selezione e Verifica del Nome dell'Azienda</h2>
            <p>Il nome dell'azienda scelto deve:</p>
            <ul>
              <li>Essere unico in Italia</li>
              <li>Rispettare i requisiti legali</li>
              <li>Sottoporsi al controllo della registrazione del marchio</li>
            </ul>
            
            <h2>3. Preparazione dei Documenti Richiesti</h2>
            <p>Documenti richiesti per la costituzione dell'azienda:</p>
            <ul>
              <li>Documento d'identità (passaporto o carta d'identità)</li>
              <li>Prova di residenza</li>
              <li>Certificato del casellario giudiziale</li>
              <li>Piano aziendale</li>
              <li>Prova del capitale</li>
              <li>Apostille per documenti stranieri</li>
            </ul>
            
            <h2>4. Procedure Notarili</h2>
            <p>L'accordo di costituzione dell'azienda deve essere firmato davanti a un notaio:</p>
            <ul>
              <li>L'accordo aziendale è preparato</li>
              <li>I partner firmano davanti al notaio</li>
              <li>Si ottiene l'approvazione del notaio</li>
            </ul>
            
            <h2>5. Registrazione al Registro delle Imprese</h2>
            <p>L'azienda deve essere registrata presso il Registro delle Imprese locale:</p>
            <ul>
              <li>Viene presentata la domanda di registrazione</li>
              <li>Vengono presentati i documenti richiesti</li>
              <li>Si ottiene l'approvazione della registrazione</li>
            </ul>
            
            <h2>6. Ottenimento del Numero Fiscale</h2>
            <p>Deve essere ottenuto un Codice Fiscale per l'azienda:</p>
            <ul>
              <li>Domanda all'ufficio delle imposte</li>
              <li>Assegnazione del numero fiscale</li>
              <li>Completamento della registrazione fiscale</li>
            </ul>
            
            <h2>7. Apertura del Conto Bancario</h2>
            <p>Deve essere aperto un conto bancario per l'azienda:</p>
            <ul>
              <li>Selezione della banca</li>
              <li>Domanda di apertura conto</li>
              <li>Deposito del capitale</li>
              <li>Attivazione del conto</li>
            </ul>
            
            <h2>8. Registrazione alla Previdenza Sociale</h2>
            <p>Se verranno assunti dipendenti:</p>
            <ul>
              <li>Registrazione INPS</li>
              <li>Registrazione INAIL</li>
              <li>Procedure di registrazione dei dipendenti</li>
            </ul>
            
            <h2>9. Configurazione del Sistema Contabile</h2>
            <p>Sistemi contabili e finanziari:</p>
            <ul>
              <li>Selezione del software contabile</li>
              <li>Assegnazione del commercialista</li>
              <li>Configurazione del sistema finanziario</li>
            </ul>
            
            <h2>10. Licenza Commerciale e Permessi</h2>
            <p>Permessi richiesti secondo il tipo di attività:</p>
            <ul>
              <li>Domanda di licenza commerciale</li>
              <li>Permessi speciali (se richiesti)</li>
              <li>Licenze professionali</li>
            </ul>
            
            <h3>Note Importanti</h3>
            <ul>
              <li>Il processo di solito richiede 2-4 settimane</li>
              <li>Si raccomanda la consulenza professionale</li>
              <li>I requisiti legali possono cambiare continuamente</li>
              <li>Può essere necessario il supporto per la traduzione a causa della barriera linguistica</li>
            </ul>
            
            <h3>Servizi di Alvolo Consulting</h3>
            <p>Offriamo servizi completi per aiutarti nel processo di costituzione dell'azienda:</p>
            <ul>
              <li>Consulenza per la selezione del tipo di azienda</li>
              <li>Preparazione e traduzione dei documenti</li>
              <li>Monitoraggio delle procedure notarili</li>
              <li>Supporto per l'apertura del conto bancario</li>
              <li>Configurazione del sistema contabile</li>
              <li>Supporto di consulenza continuo</li>
            </ul>
            
            <p>Contattaci per informazioni dettagliate sulla costituzione di un'azienda in Italia.</p>
          `
        }
      }
    }
  };

  const content = blogPosts[lang as keyof typeof blogPosts] || blogPosts.en;
  const post = content.posts[id as keyof typeof content.posts];
  
  return {
    ...content,
    post
  };
};

const BlogPostDetailPage = () => {
  const { language } = useLanguage();
  const params = useParams();
  const id = params.id as string;
  const c = getBlogPostDetails(language, id);

  if (!c.post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-brand-blue hover:text-brand-blue-dark transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              {c.backToBlog}
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-2" />
                    {c.post.date}
                    <span className="mx-2">•</span>
                    <FaUser className="mr-2" />
                    {c.post.author}
                    <span className="mx-2">•</span>
                    <FaBookOpen className="mr-1" />
                    {c.post.readTime} {c.readTime}
                  </div>
                  {c.post.featured && (
                    <span className="bg-brand-blue text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-brand-blue text-white text-xs px-2 py-1 rounded">
                    {c.post.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {c.post.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  {c.post.excerpt}
                </p>
              </div>

              {/* Featured Image */}
              <div className="w-full h-64 md:h-96">
                <Image 
                  src={c.post.image} 
                  alt={c.post.title}
                  className="w-full h-full object-cover"
                  width={1280}
                  height={720}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: c.post.content }}
                />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPostDetailPage; 