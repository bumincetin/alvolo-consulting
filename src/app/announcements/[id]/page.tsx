'use client';

export const runtime = 'edge';

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const getAnnouncementDetails = (lang: string, id: string) => {
  const announcements = {
    tr: {
      backToAnnouncements: "Duyurulara Geri Dön",
      featured: "Öne Çıkan",
      share: "Paylaş",
      relatedAnnouncements: "İlgili Duyurular",
      announcements: {
        "1": {
          id: "1",
          date: "15 Aralık 2024",
          title: "Yeni Ofis Açılışı - Milano",
          excerpt: "Milano'da yeni ofisimizi açtık. Artık daha geniş bir hizmet ağı ile yanınızdayız.",
          category: "Şirket Haberleri",
          featured: true,
          content: `
            <p>Değerli müşterilerimiz ve iş ortaklarımız,</p>
            
            <p>Alvolo Consulting olarak, hizmet kalitemizi artırmak ve daha geniş bir müşteri kitlesine ulaşmak amacıyla Milano'da yeni ofisimizi açtığımızı duyurmaktan büyük mutluluk duyuyoruz.</p>
            
            <h3>Yeni Ofisimizin Özellikleri</h3>
            <ul>
              <li><strong>Konum:</strong> Milano'nun iş merkezinde, ulaşımı kolay bir bölgede</li>
              <li><strong>Kapasite:</strong> Daha geniş toplantı salonları ve çalışma alanları</li>
              <li><strong>Teknoloji:</strong> En son teknolojik altyapı ile donatılmış</li>
              <li><strong>Erişilebilirlik:</strong> Engelli erişimine uygun tasarım</li>
            </ul>
            
            <h3>Yeni Hizmetlerimiz</h3>
            <p>Yeni ofisimizle birlikte aşağıdaki hizmetlerimizi de genişletiyoruz:</p>
            <ul>
              <li>Yüz yüze danışmanlık seansları</li>
              <li>Seminer ve eğitim programları</li>
              <li>Networking etkinlikleri</li>
              <li>İş geliştirme toplantıları</li>
            </ul>
            
            <h3>İletişim Bilgileri</h3>
            <p><strong>Adres:</strong> Via Valsugana 6, 20139 Milan, Italy</p>
            <p><strong>Telefon:</strong> +39 02 1234 5678</p>
            <p><strong>E-posta:</strong> info@alvoloconsulting.com</p>
            
            <p>Yeni ofisimizde sizleri ağırlamaktan mutluluk duyacağız. Randevu almak için bizimle iletişime geçebilirsiniz.</p>
            
            <p>Saygılarımızla,<br>
            Alvolo Consulting Ekibi</p>
          `
        },
        "2": {
          id: "2",
          date: "5 Aralık 2024",
          title: "Yeni Finansal Danışmanlık Paketleri",
          excerpt: "Küçük ve orta ölçekli işletmeler için özel olarak tasarlanmış yeni finansal danışmanlık paketlerimizi tanıtıyoruz.",
          category: "Finansal Hizmetler",
          featured: false,
          content: `
            <p>İtalya'da iş yapmanın finansal zorluklarını anlayarak, küçük ve orta ölçekli işletmeler için özel olarak tasarlanmış yeni finansal danışmanlık paketlerimizi tanıtmaktan mutluluk duyuyoruz.</p>
            
            <h3>Yeni Paketlerimiz</h3>
            
            <h4>1. Başlangıç Paketi</h4>
            <p>Yeni işletmeler için temel finansal danışmanlık hizmetleri:</p>
            <ul>
              <li>Şirket kurulumu ve yasal süreçler</li>
              <li>Finansal planlama ve bütçe yönetimi</li>
              <li>Vergi planlaması ve uyumluluk</li>
              <li>Banka hesabı açılışı ve finansal sistemler</li>
              <li>İlk yıl finansal danışmanlık</li>
            </ul>
            
            <h4>2. Genişleme Paketi</h4>
            <p>Büyüyen işletmeler için kapsamlı finansal çözümler:</p>
            <ul>
              <li>Pazar analizi ve stratejik planlama</li>
              <li>Yatırım danışmanlığı ve fon yönetimi</li>
              <li>Uluslararası ticaret ve finans</li>
              <li>Risk yönetimi ve sigorta planlaması</li>
              <li>Sürekli finansal danışmanlık ve destek</li>
            </ul>
            
            <h4>3. Premium Paketi</h4>
            <p>Kurumsal müşteriler için özel hizmetler:</p>
            <ul>
              <li>Özel finansal strateji geliştirme</li>
              <li>Uluslararası vergi planlaması</li>
              <li>Mergers & Acquisitions danışmanlığı</li>
              <li>Kurumsal yönetişim danışmanlığı</li>
              <li>7/24 öncelikli destek</li>
            </ul>
            
            <h3>Paket Avantajları</h3>
            <ul>
              <li>Sabit fiyat garantisi</li>
              <li>Şeffaf maliyet yapısı</li>
              <li>Esnek ödeme seçenekleri</li>
              <li>Deneyimli uzman ekibi</li>
              <li>Kişiselleştirilmiş yaklaşım</li>
            </ul>
            
            <h3>Nasıl Başlarız?</h3>
            <ol>
              <li>Ücretsiz ilk görüşme</li>
              <li>İhtiyaç analizi</li>
              <li>Uygun paket seçimi</li>
              <li>Hizmet başlangıcı</li>
              <li>Sürekli destek ve takip</li>
            </ol>
            
            <p>Bu yeni paketlerimiz hakkında detaylı bilgi almak ve ücretsiz danışmanlık randevusu için bizimle iletişime geçebilirsiniz.</p>
          `
        },
        "3": {
          id: "3",
          date: "1 Aralık 2024",
          title: "Üniversite Başvuru Dönemi Başladı",
          excerpt: "2025-2026 akademik yılı için İtalyan üniversitelerine başvuru süreci başladı. Erken başvuru avantajlarından yararlanın.",
          category: "Eğitim",
          featured: false,
          content: `
            <p>2025-2026 akademik yılı için İtalyan üniversitelerine başvuru süreci resmi olarak başlamıştır. Bu önemli süreçte size yardımcı olmak için kapsamlı hizmetlerimizi sunuyoruz.</p>
            
            <h3>Başvuru Takvimi</h3>
            <ul>
              <li><strong>1 Aralık 2024:</strong> Başvuru sürecinin başlangıcı</li>
              <li><strong>15 Ocak 2025:</strong> İlk başvuru dönemi sonu</li>
              <li><strong>1 Şubat 2025:</strong> İkinci başvuru dönemi</li>
              <li><strong>15 Mart 2025:</strong> Son başvuru tarihi</li>
            </ul>
            
            <h3>Popüler Üniversiteler ve Programlar</h3>
            
            <h4>Bocconi Üniversitesi (Milano)</h4>
            <ul>
              <li>İşletme Yönetimi</li>
              <li>Ekonomi ve Finans</li>
              <li>Uluslararası İşletme</li>
              <li>Pazarlama Yönetimi</li>
            </ul>
            
            <h4>Politecnico di Milano</h4>
            <ul>
              <li>Mimarlık</li>
              <li>Endüstri Mühendisliği</li>
              <li>Bilgisayar Mühendisliği</li>
              <li>Tasarım</li>
            </ul>
            
            <h4>Universita degli Studi di Milano</h4>
            <ul>
              <li>Hukuk</li>
              <li>Tıp</li>
              <li>Psikoloji</li>
              <li>Dil ve Edebiyat</li>
            </ul>
            
            <h3>Başvuru Gereksinimleri</h3>
            <ul>
              <li>Lise diploması (Apostilli)</li>
              <li>Transkript</li>
              <li>Dil yeterlilik belgesi (İtalyanca/İngilizce)</li>
              <li>Motivasyon mektubu</li>
              <li>Referans mektupları</li>
              <li>CV</li>
            </ul>
            
            <h3>Hizmetlerimiz</h3>
            <p>Alvolo Consulting olarak aşağıdaki hizmetleri sunuyoruz:</p>
            <ul>
              <li>Üniversite ve program seçimi danışmanlığı</li>
              <li>Başvuru dosyası hazırlama</li>
              <li>Belge çeviri ve apostil işlemleri</li>
              <li>Motivasyon mektubu yazımı</li>
              <li>CV hazırlama ve düzenleme</li>
              <li>Başvuru takibi</li>
              <li>Vize başvuru desteği</li>
            </ul>
            
            <h3>Erken Başvuru Avantajları</h3>
            <ul>
              <li>Daha fazla program seçeneği</li>
              <li>Burs imkanları</li>
              <li>Konaklama garantisi</li>
              <li>Vize sürecinde zaman avantajı</li>
              <li>Oryantasyon programlarına katılım</li>
            </ul>
            
            <p>Başvuru sürecinizde size yardımcı olmak için hemen bizimle iletişime geçin.</p>
          `
        },
        "4": {
          id: "4",
          date: "10 Aralık 2024",
          title: "2025 İtalya Vize Politikalarında Değişiklikler",
          excerpt: "2025 yılında İtalya'da vize başvuru süreçlerinde yapılacak değişiklikler hakkında bilgilendirme.",
          category: "Vize & İzinler",
          featured: false,
          content: `
            <p>İtalya'da vize başvuru süreçlerinde 2025 yılında yapılacak önemli değişiklikler hakkında sizleri bilgilendirmek istiyoruz.</p>
            
            <h3>Yeni Vize Politikaları</h3>
            <p>İtalyan hükümeti, 2025 yılından itibaren vize başvuru süreçlerinde aşağıdaki değişiklikleri uygulamaya koyacaktır:</p>
            
            <h4>1. Dijital Başvuru Sistemi</h4>
            <ul>
              <li>Tüm vize başvuruları artık dijital platform üzerinden yapılacak</li>
              <li>Belge yükleme sistemi daha kullanıcı dostu hale getirildi</li>
              <li>Başvuru takibi online olarak yapılabilecek</li>
            </ul>
            
            <h4>2. Yeni Belge Gereksinimleri</h4>
            <ul>
              <li>Sağlık sigortası belgesi zorunlu hale getirildi</li>
              <li>Finansal yeterlilik kanıtı için minimum bakiye şartı güncellendi</li>
              <li>Konaklama kanıtı için daha detaylı belgeler isteniyor</li>
            </ul>
            
            <h4>3. İşlem Süreleri</h4>
            <ul>
              <li>Öğrenci vizesi başvuruları: 15-20 iş günü</li>
              <li>Çalışma vizesi başvuruları: 20-25 iş günü</li>
              <li>Aile birleşimi vizesi: 25-30 iş günü</li>
            </ul>
            
            <h3>Önerilerimiz</h3>
            <p>Bu değişiklikler ışığında aşağıdaki önerilerde bulunuyoruz:</p>
            <ul>
              <li>Başvurularınızı en az 2 ay önceden hazırlayın</li>
              <li>Tüm belgelerinizi güncel tutun</li>
              <li>Profesyonel danışmanlık hizmeti alın</li>
              <li>Alternatif planlarınızı hazırlayın</li>
            </ul>
            
            <h3>Hizmetlerimiz</h3>
            <p>Alvolo Consulting olarak, bu yeni süreçlerde size yardımcı olmak için kapsamlı vize danışmanlık hizmetlerimizi sunuyoruz:</p>
            <ul>
              <li>Başvuru dosyası hazırlama</li>
              <li>Belge kontrolü ve düzenleme</li>
              <li>Randevu alma ve takip</li>
              <li>Süreç boyunca destek</li>
            </ul>
            
            <p>Detaylı bilgi için bizimle iletişime geçebilirsiniz.</p>
          `
        },
        "5": {
          id: "5",
          date: "20 Kasım 2024",
          title: "Konaklama Bulma Hizmetimizde İyileştirmeler",
          excerpt: "Konaklama bulma hizmetimizi geliştirdik. Artık daha hızlı ve güvenilir ev bulma süreci.",
          category: "Konaklama",
          featured: false,
          content: `
            <p>Müşterilerimizin konaklama ihtiyaçlarını daha iyi karşılamak amacıyla, konaklama bulma hizmetimizi önemli ölçüde geliştirdik ve iyileştirdik.</p>
            
            <h3>Yeni Özelliklerimiz</h3>
            
            <h4>1. Gelişmiş Arama Sistemi</h4>
            <ul>
              <li>Detaylı filtreleme seçenekleri</li>
              <li>Bütçe aralığı belirleme</li>
              <li>Mahalle bazlı arama</li>
              <li>Ulaşım kolaylığı filtreleri</li>
              <li>Özel gereksinimler (evcil hayvan, engelli erişimi vb.)</li>
            </ul>
            
            <h4>2. Sanal Tur İmkanı</h4>
            <ul>
              <li>360° sanal ev turları</li>
              <li>Video görüşmeler</li>
              <li>Detaylı fotoğraf galerileri</li>
              <li>Mahalle tanıtım videoları</li>
            </ul>
            
            <h4>3. Hızlı İşlem Süreci</h4>
            <ul>
              <li>24 saat içinde ilk öneriler</li>
              <li>Hızlı randevu alma</li>
              <li>Ekspres sözleşme hazırlama</li>
              <li>Hızlı taşınma desteği</li>
            </ul>
            
            <h3>Hizmet Kapsamımız</h3>
            
            <h4>Öğrenci Konaklaması</h4>
            <ul>
              <li>Öğrenci yurtları</li>
              <li>Paylaşımlı evler</li>
              <li>Stüdyo daireler</li>
              <li>Aile yanı konaklama</li>
            </ul>
            
            <h4>Profesyonel Konaklama</h4>
            <ul>
              <li>Lüks daireler</li>
              <li>İş merkezi yakını konaklama</li>
              <li>Kısa dönem kiralama</li>
              <li>Servisli daireler</li>
            </ul>
            
            <h4>Aile Konaklaması</h4>
            <ul>
              <li>Geniş aile daireleri</li>
              <li>Bahçeli evler</li>
              <li>Okul yakını konaklama</li>
              <li>Güvenli mahalleler</li>
            </ul>
            
            <h3>Ek Hizmetlerimiz</h3>
            <ul>
              <li>Sigorta danışmanlığı</li>
              <li>Mobilya kiralama</li>
              <li>Taşınma hizmetleri</li>
              <li>Ev açılış işlemleri</li>
              <li>Yasal süreç desteği</li>
            </ul>
            
            <h3>Garantilerimiz</h3>
            <ul>
              <li>%100 güvenli işlem</li>
              <li>Para iade garantisi</li>
              <li>7/24 destek hattı</li>
              <li>3 ay boyunca ücretsiz destek</li>
            </ul>
            
            <h3>Nasıl Çalışır?</h3>
            <ol>
              <li>İhtiyaç analizi ve bütçe belirleme</li>
              <li>Uygun seçeneklerin sunulması</li>
              <li>Sanal tur ve görüşmeler</li>
              <li>Seçim ve sözleşme süreci</li>
              <li>Taşınma ve yerleşim desteği</li>
            </ol>
            
            <p>Geliştirilmiş konaklama hizmetlerimizden yararlanmak için hemen bizimle iletişime geçin.</p>
          `
        },
        "6": {
          id: "6",
          date: "18 Kasım 2024",
          title: "İtalya'da Start-up Kurulumu İçin Yeni Teşvikler",
          excerpt: "İtalyan hükümetinin 2025 yılı için start-up'lara yönelik yeni teşvik paketini duyurdu. Yatırımcılar için büyük fırsatlar.",
          category: "İş Dünyası",
          featured: true,
          content: `
            <p>İtalyan hükümeti, yenilikçi girişimleri desteklemek amacıyla 2025 yılı için yeni bir teşvik paketi açıkladı. Bu paket, İtalya'da start-up kurmak isteyen yerli ve yabancı girişimciler için önemli fırsatlar sunuyor.</p>
            
            <h3>Yeni Teşvik Paketinin Detayları</h3>
            
            <h4>1. Vergi Avantajları</h4>
            <ul>
              <li>İlk 5 yıl için %50'ye varan vergi indirimi</li>
              <li>Ar-Ge harcamaları için ek vergi muafiyetleri</li>
              <li>Yatırımcılar için sermaye kazancı vergisi istisnaları</li>
            </ul>
            
            <h4>2. Finansal Destekler</h4>
            <ul>
              <li>€100,000'ya kadar faizsiz kredi imkanı</li>
              <li>"Smart&Start Italia" programı kapsamında hibe destekleri</li>
              <li>Melek yatırımcı ağlarına erişim kolaylığı</li>
            </ul>

            <h4>3. Bürokrasi ve Vize Kolaylıkları</h4>
            <ul>
              <li>Hızlandırılmış şirket kurulum süreci (24 saat içinde)</li>
              <li>Yabancı girişimciler için "Italia Startup Visa" programı</li>
              <li>Dijital kamu hizmetleri ve online başvuru imkanları</li>
            </ul>

            <h3>Kimler Başvurabilir?</h3>
            <p>Aşağıdaki alanlarda faaliyet gösteren yenilikçi start-up'lar başvurabilir:</p>
            <ul>
              <li>Teknoloji ve Bilişim</li>
              <li>Yeşil Ekonomi ve Sürdürülebilirlik</li>
              <li>Tasarım ve Moda</li>
              <li>Turizm ve Kültürel Miras</li>
              <li>Gıda ve Tarım Teknolojileri</li>
            </ul>

            <h3>Alvolo Consulting Olarak Nasıl Yardımcı Oluyoruz?</h3>
            <p>Start-up'ınızın İtalya'daki yolculuğunda size kapsamlı destek sunuyoruz:</p>
            <ul>
              <li>İş planı hazırlama ve strateji geliştirme</li>
              <li>Teşvik programlarına başvuru ve takip</li>
              <li>Hukuki ve mali danışmanlık</li>
              <li>Yatırımcı ve ortak bulma</li>
            </ul>
            
            <p>Bu fırsatlardan yararlanmak ve İtalya'da başarılı bir başlangıç yapmak için bizimle iletişime geçin.</p>
          `
        },
        "7": {
          id: "7",
          date: "15 Kasım 2024",
          title: "2025 Yaz Dönemi İtalyanca Dil Kursları",
          excerpt: "Milano, Roma ve Floransa'daki anlaşmalı dil okullarımızda 2025 yaz dönemi için kayıtlar başladı. Erken kayıtta %15 indirim!",
          category: "Eğitim",
          featured: false,
          content: `
            <p>İtalyanca öğrenmek ve İtalyan kültürünü yakından tanımak için harika bir fırsat! 2025 yaz dönemi için anlaşmalı dil okullarımızda İtalyanca dil kursu kayıtları başladı.</p>
            
            <h3>Kurs Seçenekleri</h3>
            
            <h4>1. Yoğunlaştırılmış Yaz Kursu (4 Hafta)</h4>
            <ul>
              <li>Haftada 20 saat ders</li>
              <li>Başlangıç, orta ve ileri seviye sınıflar</li>
              <li>Konuşma pratiği ağırlıklı</li>
              <li>Kültürel aktiviteler ve şehir turları dahil</li>
            </ul>

            <h4>2. Akademik İtalyanca Kursu (8 Hafta)</h4>
            <ul>
              <li>Üniversite eğitimi için hazırlık</li>
              <li>Akademik yazma ve sunum becerileri</li>
              <li>CILS ve CELI sınavlarına hazırlık</li>
              <li>Haftada 25 saat ders</li>
            </ul>

            <h4>3. İş İtalyancası Kursu (2 Hafta)</h4>
            <ul>
              <li>Profesyoneller ve iş insanları için özel program</li>
              <li>Sektörel terminoloji ve iş görüşmesi pratikleri</li>
              <li>Networking imkanları</li>
              <li>Haftada 15 saat ders</li>
            </ul>

            <h3>Anlaşmalı Dil Okullarımız</h3>
            <ul>
              <li><strong>Milano:</strong> Scuola Leonardo da Vinci</li>
              <li><strong>Roma:</strong> Dilit International House</li>
              <li><strong>Floransa:</strong> Centro Fiorenza</li>
            </ul>

            <h3>Erken Kayıt Avantajı</h3>
            <p><strong>31 Ocak 2025</strong> tarihine kadar kayıt yaptıran herkese tüm kurs paketlerinde <strong>%15 indirim</strong> uygulanacaktır.</p>

            <h3>Paketlerimize Neler Dahil?</h3>
            <ul>
              <li>Kurs ücreti</li>
              <li>Ders materyalleri</li>
              <li>Konaklama (aile yanı veya öğrenci yurdu)</li>
              <li>Havaalanı transferi</li>
              <li>Vize danışmanlığı</li>
              <li>Alvolo Consulting özel destek hattı</li>
            </ul>
            
            <p>Hayallerinizdeki İtalya deneyimini yaşamak için kontenjanlar dolmadan yerinizi ayırtın!</p>
          `
        },
        "8": {
          id: "8",
          date: "12 Kasım 2024",
          title: "İtalya'da 'Startup Innovativa' Kurulum Süreci ve Avantajları",
          excerpt: "İtalya'da 'Startup Innovativa' statüsü kazanarak teknoloji ve inovasyon odaklı girişiminiz için vergi avantajları ve bürokratik kolaylıklardan yararlanın.",
          category: "İş Dünyası",
          featured: false,
          content: `
            <p>İtalya, teknoloji ve inovasyon odaklı girişimleri desteklemek için 'Startup Innovativa' (Yenilikçi Start-up) programını sunmaktadır. Bu statü, girişimcilere önemli avantajlar sağlamaktadır.</p>
            
            <h3>'Startup Innovativa' Nedir?</h3>
            <p>'Startup Innovativa', teknolojik ve yenilikçi ürün veya hizmetler geliştiren, belirli yasal kriterleri karşılayan genç şirketlere verilen özel bir statüdür.</p>

            <h3>Kimler Başvurabilir?</h3>
            <p>Aşağıdaki kriterlerden en az birini karşılayan şirketler başvurabilir:</p>
            <ul>
              <li>Ar-Ge harcamalarının, toplam maliyetin veya cironun en az %15'ini oluşturması.</li>
              <li>İş gücünün en az 1/3'ünün doktora veya yüksek lisans derecesine sahip olması veya 2/3'ünün yüksek lisans derecesine sahip olması.</li>
              <li>Şirketin, endüstriyel veya ticari bir patentin sahibi veya lisans sahibi olması.</li>
            </ul>

            <h3>'Startup Innovativa' Olmanın Avantajları</h3>
            <ul>
              <li><strong>Vergi Teşvikleri:</strong> Kurumlar ve gelir vergilerinde önemli indirimler.</li>
              <li><strong>Yatırımcı Teşvikleri:</strong> Start-up'a yatırım yapanlar için vergi indirimleri.</li>
              <li><strong>Esnek İş Hukuku:</strong> Daha esnek istihdam sözleşmeleri.</li>
              <li><strong>Bürokratik Kolaylıklar:</strong> Şirket kurulum ve yönetiminde basitleştirilmiş prosedürler.</li>
              <li><strong>Vize Kolaylığı:</strong> AB dışından gelen kurucular için 'Startup Vizesi' imkanı.</li>
              <li><strong>Ücretsiz ve Hızlı Erişim:</strong> Ticaret Odası'na ücretsiz kayıt ve hızlı işlemler.</li>
            </ul>

            <h3>Alvolo Consulting Olarak Süreçteki Rolümüz</h3>
            <p>Bu süreçte size yol göstermek için buradayız:</p>
            <ul>
              <li>Şirketinizin 'Startup Innovativa' kriterlerine uygunluğunun değerlendirilmesi.</li>
              <li>Gerekli belgelerin hazırlanması ve başvuru sürecinin yönetimi.</li>
              <li>İş planınızın İtalyan pazarına uygun şekilde optimize edilmesi.</li>
              <li>Hukuki ve finansal danışmanlık sağlanması.</li>
            </ul>
            
            <p>Girişiminizi İtalya'da bir sonraki seviyeye taşımak için 'Startup Innovativa' fırsatlarını bizimle keşfedin.</p>
          `
        }
      }
    },
    en: {
      backToAnnouncements: "Back to Announcements",
      featured: "Featured",
      share: "Share",
      relatedAnnouncements: "Related Announcements",
      announcements: {
        "1": {
          id: "1",
          date: "December 15, 2024",
          title: "New Office Opening - Milan",
          excerpt: "We have opened our new office in Milan. Now we are here for you with a wider service network.",
          category: "Company News",
          featured: true,
          content: `
            <p>Dear valued clients and business partners,</p>
            
            <p>We are pleased to announce that Alvolo Consulting has opened its new office in Milan to improve our service quality and reach a wider customer base.</p>
            
            <h3>Features of Our New Office</h3>
            <ul>
              <li><strong>Location:</strong> In Milan's business district, easily accessible</li>
              <li><strong>Capacity:</strong> Larger meeting rooms and workspace</li>
              <li><strong>Technology:</strong> Equipped with latest technological infrastructure</li>
              <li><strong>Accessibility:</strong> Disability-friendly design</li>
            </ul>
            
            <h3>Our New Services</h3>
            <p>Along with our new office, we are expanding the following services:</p>
            <ul>
              <li>Face-to-face consultation sessions</li>
              <li>Seminar and training programs</li>
              <li>Networking events</li>
              <li>Business development meetings</li>
            </ul>
            
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> Via Valsugana 6, 20139 Milan, Italy</p>
            <p><strong>Phone:</strong> +39 02 1234 5678</p>
            <p><strong>Email:</strong> info@alvoloconsulting.com</p>
            
            <p>We would be happy to welcome you at our new office. You can contact us to make an appointment.</p>
            
            <p>Best regards,<br>
            Alvolo Consulting Team</p>
          `
        },
        "2": {
          id: "2",
          date: "December 5, 2024",
          title: "New Financial Consulting Packages",
          excerpt: "Introducing our new financial consulting packages specially designed for small and medium-sized enterprises.",
          category: "Financial Services",
          featured: false,
          content: `
            <p>Understanding the financial challenges of doing business in Italy, we are pleased to introduce our new financial consulting packages specially designed for small and medium-sized enterprises.</p>
            
            <h3>Our New Packages</h3>
            
            <h4>1. Starter Package</h4>
            <p>Basic financial consulting services for new businesses:</p>
            <ul>
              <li>Company formation and legal processes</li>
              <li>Financial planning and budget management</li>
              <li>Tax planning and compliance</li>
              <li>Bank account opening and financial systems</li>
              <li>First-year financial consulting</li>
            </ul>
            
            <h4>2. Expansion Package</h4>
            <p>Comprehensive financial solutions for growing businesses:</p>
            <ul>
              <li>Market analysis and strategic planning</li>
              <li>Investment consulting and fund management</li>
              <li>International trade and finance</li>
              <li>Risk management and insurance planning</li>
              <li>Ongoing financial consulting and support</li>
            </ul>
            
            <h4>3. Premium Package</h4>
            <p>Specialized services for corporate clients:</p>
            <ul>
              <li>Custom financial strategy development</li>
              <li>International tax planning</li>
              <li>Mergers & Acquisitions consulting</li>
              <li>Corporate governance consulting</li>
              <li>24/7 priority support</li>
            </ul>
            
            <h3>Package Advantages</h3>
            <ul>
              <li>Fixed price guarantee</li>
              <li>Transparent cost structure</li>
              <li>Flexible payment options</li>
              <li>Experienced expert team</li>
              <li>Personalized approach</li>
            </ul>
            
            <h3>How to Get Started?</h3>
            <ol>
              <li>Free initial consultation</li>
              <li>Needs analysis</li>
              <li>Selection of the appropriate package</li>
              <li>Service commencement</li>
              <li>Continuous support and follow-up</li>
            </ol>
            
            <p>Contact us for detailed information about our new packages and to schedule a free consultation appointment.</p>
          `
        },
        "3": {
          id: "3",
          date: "December 1, 2024",
          title: "University Application Period Has Started",
          excerpt: "The application period for Italian universities for the 2025-2026 academic year has begun. Take advantage of early application benefits.",
          category: "Education",
          featured: false,
          content: `
            <p>The application period for Italian universities for the 2025-2026 academic year has officially started. We offer our comprehensive services to assist you in this important process.</p>
            
            <h3>Application Calendar</h3>
            <ul>
              <li><strong>December 1, 2024:</strong> Start of the application period</li>
              <li><strong>January 15, 2025:</strong> End of the first application period</li>
              <li><strong>February 1, 2025:</strong> Second application period</li>
              <li><strong>March 15, 2025:</strong> Final application deadline</li>
            </ul>
            
            <h3>Popular Universities and Programs</h3>
            
            <h4>Bocconi University (Milan)</h4>
            <ul>
              <li>Business Administration</li>
              <li>Economics and Finance</li>
              <li>International Business</li>
              <li>Marketing Management</li>
            </ul>
            
            <h4>Politecnico di Milano</h4>
            <ul>
              <li>Architecture</li>
              <li>Industrial Engineering</li>
              <li>Computer Engineering</li>
              <li>Design</li>
            </ul>
            
            <h4>Università degli Studi di Milano</h4>
            <ul>
              <li>Law</li>
              <li>Medicine</li>
              <li>Psychology</li>
              <li>Languages and Literature</li>
            </ul>
            
            <h3>Application Requirements</h3>
            <ul>
              <li>High school diploma (with Apostille)</li>
              <li>Transcript</li>
              <li>Language proficiency certificate (Italian/English)</li>
              <li>Motivation letter</li>
              <li>Reference letters</li>
              <li>CV</li>
            </ul>
            
            <h3>Our Services</h3>
            <p>As Alvolo Consulting, we offer the following services:</p>
            <ul>
              <li>University and program selection consulting</li>
              <li>Application file preparation</li>
              <li>Document translation and apostille services</li>
              <li>Motivation letter writing</li>
              <li>CV preparation and editing</li>
              <li>Application tracking</li>
              <li>Visa application support</li>
            </ul>
            
            <h3>Early Application Advantages</h3>
            <ul>
              <li>More program options</li>
              <li>Scholarship opportunities</li>
              <li>Accommodation guarantee</li>
              <li>Time advantage in the visa process</li>
              <li>Participation in orientation programs</li>
            </ul>
            
            <p>Contact us now to get help with your application process.</p>
          `
        },
        "4": {
          id: "4",
          date: "December 10, 2024",
          title: "Changes in 2025 Italy Visa Policies",
          excerpt: "Information about the changes to be made in the visa application processes in Italy in 2025.",
          category: "Visas & Permits",
          featured: false,
          content: `
            <p>We would like to inform you about the important changes to be made in the visa application processes in Italy in 2025.</p>
            <h3>New Visa Policies</h3>
            <p>The Italian government will implement the following changes in visa application processes starting from 2025:</p>
            <h4>1. Digital Application System</h4>
            <ul>
              <li>All visa applications will now be made through a digital platform</li>
              <li>The document upload system has been made more user-friendly</li>
              <li>Application tracking will be available online</li>
            </ul>
            <h4>2. New Document Requirements</h4>
            <ul>
              <li>Health insurance certificate is now mandatory</li>
              <li>The minimum balance requirement for proof of financial sufficiency has been updated</li>
              <li>More detailed documents are required for proof of accommodation</li>
            </ul>
            <h4>3. Processing Times</h4>
            <ul>
              <li>Student visa applications: 15-20 business days</li>
              <li>Work visa applications: 20-25 business days</li>
              <li>Family reunification visa: 25-30 business days</li>
            </ul>
            <h3>Our Recommendations</h3>
            <p>In light of these changes, we make the following recommendations:</p>
            <ul>
              <li>Prepare your applications at least 2 months in advance</li>
              <li>Keep all your documents up to date</li>
              <li>Get professional consulting services</li>
              <li>Prepare your alternative plans</li>
            </ul>
            <h3>Our Services</h3>
            <p>As Alvolo Consulting, we offer our comprehensive visa consulting services to help you in these new processes:</p>
            <ul>
              <li>Application file preparation</li>
              <li>Document review and arrangement</li>
              <li>Appointment scheduling and follow-up</li>
              <li>Support throughout the process</li>
            </ul>
            <p>You can contact us for detailed information.</p>
          `
        },
        "5": {
          id: "5",
          date: "November 20, 2024",
          title: "Improvements in Our Accommodation Finding Service",
          excerpt: "We have improved our accommodation finding service. Now a faster and more reliable home finding process.",
          category: "Accommodation",
          featured: false,
          content: `
            <p>To better meet our clients' accommodation needs, we have significantly developed and improved our accommodation finding service.</p>
            
            <h3>Our New Features</h3>
            
            <h4>1. Advanced Search System</h4>
            <ul>
              <li>Detailed filtering options</li>
              <li>Budget range setting</li>
              <li>Neighborhood-based search</li>
              <li>Transportation convenience filters</li>
              <li>Special requirements (pets, disabled access, etc.)</li>
            </ul>
            
            <h4>2. Virtual Tour Option</h4>
            <ul>
              <li>360° virtual home tours</li>
              <li>Video calls</li>
              <li>Detailed photo galleries</li>
              <li>Neighborhood introduction videos</li>
            </ul>
            
            <h4>3. Fast Process</h4>
            <ul>
              <li>First suggestions within 24 hours</li>
              <li>Quick appointment scheduling</li>
              <li>Express contract preparation</li>
              <li>Fast move-in support</li>
            </ul>
            
            <h3>Our Service Scope</h3>
            
            <h4>Student Accommodation</h4>
            <ul>
              <li>Student dormitories</li>
              <li>Shared houses</li>
              <li>Studio apartments</li>
              <li>Homestay</li>
            </ul>
            
            <h4>Professional Accommodation</h4>
            <ul>
              <li>Luxury apartments</li>
              <li>Accommodation near business centers</li>
              <li>Short-term rentals</li>
              <li>Serviced apartments</li>
            </ul>
            
            <h4>Family Accommodation</h4>
            <ul>
              <li>Large family apartments</li>
              <li>Houses with gardens</li>
              <li>Accommodation near schools</li>
              <li>Safe neighborhoods</li>
            </ul>
            
            <h3>Additional Services</h3>
            <ul>
              <li>Insurance consulting</li>
              <li>Furniture rental</li>
              <li>Moving services</li>
              <li>Ev setup services</li>
              <li>Legal process support</li>
            </ul>
            
            <h3>Our Guarantees</h3>
            <ul>
              <li>100% secure transaction</li>
              <li>Money-back guarantee</li>
              <li>24/7 support line</li>
              <li>3 months of free support</li>
            </ul>
            
            <h3>How It Works</h3>
            <ol>
              <li>Needs analysis and budget determination</li>
              <li>Presentation of suitable options</li>
              <li>Virtual tours and viewings</li>
              <li>Selection and contract process</li>
              <li>Move-in and settlement support</li>
            </ol>
            
            <p>Contact us now to benefit from our improved accommodation services.</p>
          `
        },
        "6": {
          id: "6",
          date: "18 November 2024",
          title: "New Incentives for Start-up Establishment in Italy",
          excerpt: "The Italian government has announced a new incentive package for start-ups for 2025. Great opportunities for investors.",
          category: "Business",
          featured: true,
          content: `
            <p>The Italian government has announced a new incentive package for 2025 to support innovative ventures. This package offers significant opportunities for local and foreign entrepreneurs wanting to establish a start-up in Italy.</p>
            
            <h3>Details of the New Incentive Package</h3>
            
            <h4>1. Tax Advantages</h4>
            <ul>
              <li>Up to 50% tax reduction for the first 5 years</li>
              <li>Additional tax exemptions for R&D expenses</li>
              <li>Capital gains tax exemptions for investors</li>
            </ul>
            
            <h4>2. Financial Support</h4>
            <ul>
              <li>Interest-free loans up to €100,000</li>
              <li>Grant support under the "Smart&Start Italia" program</li>
              <li>Easy access to angel investor networks</li>
            </ul>

            <h4>3. Bureaucracy and Visa Facilities</h4>
            <ul>
              <li>Accelerated company formation process (within 24 hours)</li>
              <li>"Italia Startup Visa" program for foreign entrepreneurs</li>
              <li>Digital public services and online application options</li>
            </ul>

            <h3>Who Can Apply?</h3>
            <p>Innovative start-ups operating in the following fields can apply:</p>
            <ul>
              <li>Technology and IT</li>
              <li>Green Economy and Sustainability</li>
              <li>Design and Fashion</li>
              <li>Tourism and Cultural Heritage</li>
              <li>Food and Agricultural Technologies</li>
            </ul>

            <h3>How Alvolo Consulting Helps</h3>
            <p>We offer comprehensive support for your start-up's journey in Italy:</p>
            <ul>
              <li>Business plan preparation and strategy development</li>
              <li>Application and follow-up for incentive programs</li>
              <li>Legal and financial consulting</li>
              <li>Finding investors and partners</li>
            </ul>
            
            <p>Contact us to take advantage of these opportunities and make a successful start in Italy.</p>
          `
        },
        "7": {
          id: "7",
          date: "15 November 2024",
          title: "2025 Summer Italian Language Courses",
          excerpt: "Sono aperte le iscrizioni per i nostri corsi estivi di lingua 2025 presso le nostre scuole partner a Milano, Roma e Firenze. Sconto del 15% per le iscrizioni anticipate!",
          category: "Formazione",
          featured: false,
          content: `
            <p>Un'opportunità fantastica per imparare l'italiano e vivere da vicino la cultura italiana! Sono aperte le iscrizioni per i corsi estivi di lingua italiana del 2025 presso le nostre scuole di lingua partner.</p>
            
            <h3>Opzioni dei Corsi</h3>
            <h4>1. Corso Estivo Intensivo (4 Settimane)</h4>
            <ul>
              <li>20 ore di lezione a settimana</li>
              <li>Classi di livello principiante, intermedio e avanzato</li>
              <li>Enfasi sulla pratica della conversazione</li>
              <li>Include attività culturali e tour della città</li>
            </ul>

            <h4>2. Corso di Italiano Accademico (8 Settimane)</h4>
            <ul>
              <li>Preparazione per gli studi universitari</li>
              <li>Competenze di scrittura e presentazione accademica</li>
              <li>Preparazione agli esami CILS e CELI</li>
              <li>25 ore di lezione a settimana</li>
            </ul>

            <h4>3. Corso di Italiano Commerciale (2 Settimane)</h4>
            <ul>
              <li>Programma speciale per professionisti e uomini d'affari</li>
              <li>Terminologia settoriale e pratica di colloqui di lavoro</li>
              <li>Networking opportunities</li>
              <li>15 ore di lezione a settimana</li>
            </ul>

            <h3>Le Nostre Scuole di Lingua Partner</h3>
            <ul>
              <li><strong>Milano:</strong> Scuola Leonardo da Vinci</li>
              <li><strong>Roma:</strong> Dilit International House</li>
              <li><strong>Firenze:</strong> Centro Fiorenza</li>
            </ul>

            <h3>Sconto per Iscrizioni Anticipate</h3>
            <p>Uno <strong>sconto del 15%</strong> sarà applicato a tutti i pacchetti di corsi per le iscrizioni effettuate entro il <strong>31 Gennaio 2025</strong>.</p>

            <h3>Cosa è Incluso nei Nostri Pacchetti?</h3>
            <ul>
              <li>Costo del corso</li>
              <li>Materiale didattico</li>
              <li>Alloggio (in famiglia o residenza per studenti)</li>
              <li>Trasferimento dall'aeroporto</li>
              <li>Consulenza per il visto</li>
              <li>Linea di supporto speciale Alvolo Consulting</li>
            </ul>
            
            <p>Prenota il tuo posto prima che le classi si esauriscano per vivere l'esperienza italiana dei tuoi sogni!</p>
          `
        },
        "8": {
          id: "8",
          date: "12 Novembre 2024",
          title: "'Startup Innovativa' Setup Process and Advantages in Italy",
          excerpt: "Benefit from tax advantages and bureaucratic facilities for your technology and innovation-focused venture by obtaining 'Startup Innovativa' status in Italy.",
          category: "Business",
          featured: false,
          content: `
            <p>Italy offers the 'Startup Innovativa' (Innovative Start-up) program to support technology and innovation-focused ventures. This status provides significant advantages to entrepreneurs.</p>
            
            <h3>What is a 'Startup Innovativa'?</h3>
            <p>A 'Startup Innovativa' is a special status given to young companies that develop technological and innovative products or services and meet specific legal criteria.</p>

            <h3>Who Can Apply?</h3>
            <p>Companies that meet at least one of the following criteria can apply:</p>
            <ul>
              <li>R&D expenses constitute at least 15% of the total cost or turnover.</li>
              <li>At least 1/3 of the workforce holds a PhD or a master's degree, or 2/3 hold a master's degree.</li>
              <li>The company is the owner or licensee of an industrial or commercial patent.</li>
            </ul>

            <h3>Advantages of Being a 'Startup Innovativa'</h3>
            <ul>
              <li><strong>Tax Incentives:</strong> Significant reductions in corporate and income taxes.</li>
              <li><strong>Investor Incentives:</strong> Tax deductions for those who invest in the start-up.</li>
              <li><strong>Flexible Labor Law:</strong> More flexible employment contracts.</li>
              <li><strong>Bureaucratic Easing:</strong> Simplified procedures for company formation and management.</li>
              <li><strong>Visa Facility:</strong> 'Startup Visa' opportunity for founders from outside the EU.</li>
              <li><strong>Free and Fast Access:</strong> Free registration and fast-track procedures at the Chamber of Commerce.</li>
            </ul>

            <h3>Our Role as Alvolo Consulting in the Process</h3>
            <p>We are here to guide you through this process:</p>
            <ul>
              <li>Assessing your company's eligibility for 'Startup Innovativa' criteria.</li>
              <li>Preparing the necessary documents and managing the application process.</li>
              <li>Optimizing your business plan for the Italian market.</li>
              <li>Providing legal and financial consulting.</li>
            </ul>
            
            <p>Discover the 'Startup Innovativa' opportunities with us to take your venture to the next level in Italy.</p>
          `
        }
      }
    },
    it: {
      backToAnnouncements: "Torna agli Annunci",
      featured: "In Evidenza",
      share: "Condividi",
      relatedAnnouncements: "Annunci Correlati",
      announcements: {
        "1": {
          id: "1",
          date: "15 Dicembre 2024",
          title: "Nuova Apertura Ufficio - Milano",
          excerpt: "Abbiamo aperto il nostro nuovo ufficio a Milano. Ora siamo qui per te con una rete di servizi più ampia.",
          category: "Notizie Aziendali",
          featured: true,
          content: `
            <p>Cari clienti e partner commerciali,</p>
            
            <p>Siamo lieti di annunciare che Alvolo Consulting ha aperto il suo nuovo ufficio a Milano per migliorare la qualità del nostro servizio e raggiungere una base di clienti più ampia.</p>
            
            <h3>Caratteristiche del Nostro Nuovo Ufficio</h3>
            <ul>
              <li><strong>Posizione:</strong> Nel distretto commerciale di Milano, facilmente accessibile</li>
              <li><strong>Capacità:</strong> Sale riunioni e spazi di lavoro più grandi</li>
              <li><strong>Tecnologia:</strong> Dotato di infrastruttura tecnologica all'avanguardia</li>
              <li><strong>Accessibilità:</strong> Design accessibile ai disabili</li>
            </ul>
            
            <h3>I Nostri Nuovi Servizi</h3>
            <p>Insieme al nostro nuovo ufficio, stiamo espandendo i seguenti servizi:</p>
            <ul>
              <li>Sessioni di consulenza faccia a faccia</li>
              <li>Programmi di seminari e formazione</li>
              <li>Eventi di networking</li>
              <li>Riunioni di sviluppo aziendale</li>
            </ul>
            
            <h3>Informazioni di Contatto</h3>
            <p><strong>Indirizzo:</strong> Via Valsugana 6, 20139 Milan, Italy</p>
            <p><strong>Telefono:</strong> +39 02 1234 5678</p>
            <p><strong>Email:</strong> info@alvoloconsulting.com</p>
            
            <p>Saremo felici di accogliervi nel nostro nuovo ufficio. Potete contattarci per fissare un appuntamento.</p>
            
            <p>Cordiali saluti,<br>
            Team Alvolo Consulting</p>
          `
        },
        "2": {
          id: "2",
          date: "5 Dicembre 2024",
          title: "Nuovi Pacchetti di Consulenza Finanziaria",
          excerpt: "Presentiamo i nostri nuovi pacchetti di consulenza finanziaria pensati appositamente per le piccole e medie imprese.",
          category: "Servizi Finanziari",
          featured: false,
          content: `
            <p>Comprendendo le sfide finanziarie del fare impresa in Italia, siamo lieti di presentare i nostri nuovi pacchetti di consulenza finanziaria pensati appositamente per le piccole e medie imprese.</p>
            
            <h3>I Nostri Nuovi Pacchetti</h3>
            <h4>1. Pacchetto Base</h4>
            <p>Servizi di consulenza finanziaria di base per nuove imprese:</p>
            <ul>
              <li>Costituzione della società e procedure legali</li>
              <li>Pianificazione finanziaria e gestione del budget</li>
              <li>Pianificazione fiscale e conformità</li>
              <li>Apertura di conti bancari e sistemi finanziari</li>
              <li>Consulenza finanziaria per il primo anno</li>
            </ul>
            
            <h4>2. Pacchetto Espansione</h4>
            <p>Soluzioni finanziarie complete per aziende in crescita:</p>
            <ul>
              <li>Analisi di mercato e pianificazione strategica</li>
              <li>Consulenza per gli investimenti e gestione dei fondi</li>
              <li>Commercio e finanza internazionale</li>
              <li>Gestione del rischio e pianificazione assicurativa</li>
              <li>Consulenza e supporto finanziario continuo</li>
            </ul>
            
            <h4>3. Pacchetto Premium</h4>
            <p>Servizi specializzati per clienti aziendali:</p>
            <ul>
              <li>Sviluppo di strategie finanziarie personalizzate</li>
              <li>Pianificazione fiscale internazionale</li>
              <li>Consulenza su fusioni e acquisizioni</li>
              <li>Consulenza sulla governance aziendale</li>
              <li>Supporto prioritario 24/7</li>
            </ul>
            
            <h3>Vantaggi dei Pacchetti</h3>
            <ul>
              <li>Garanzia di prezzo fisso</li>
              <li>Struttura dei costi trasparente</li>
              <li>Opzioni di pagamento flessibili</li>
              <li>Team di esperti con esperienza</li>
              <li>Approccio personalizzato</li>
            </ul>
            
            <h3>Come Iniziare?</h3>
            <ol>
              <li>Prima consulenza gratuita</li>
              <li>Analisi delle esigenze</li>
              <li>Selezione del pacchetto appropriato</li>
              <li>Inizio del servizio</li>
              <li>Supporto e follow-up continui</li>
            </ol>
            
            <p>Contattaci per informazioni dettagliate sui nostri nuovi pacchetti e per fissare un appuntamento di consulenza gratuito.</p>
          `
        },
        "3": {
          id: "3",
          date: "1 Dicembre 2024",
          title: "Periodo di Iscrizione all'Università Iniziato",
          excerpt: "È iniziato il periodo di iscrizione alle università italiane per l'anno accademico 2025-2026. Approfitta dei vantaggi dell'iscrizione anticipata.",
          category: "Formazione",
          featured: false,
          content: `
            <p>Il periodo di iscrizione alle università italiane per l'anno accademico 2025-2026 è ufficialmente iniziato. Offriamo i nostri servizi completi per assisterti in questo importante processo.</p>
            
            <h3>Calendario Iscrizioni</h3>
            <ul>
              <li><strong>1 Dicembre 2024:</strong> Inizio del periodo di iscrizione</li>
              <li><strong>15 Gennaio 2025:</strong> Fine del primo periodo di iscrizione</li>
              <li><strong>1 Febbraio 2025:</strong> Secondo periodo di iscrizione</li>
              <li><strong>15 Marzo 2025:</strong> Scadenza finale per le iscrizioni</li>
            </ul>
            
            <h3>Università e Programmi Popolari</h3>
            
            <h4>Università Bocconi (Milano)</h4>
            <ul>
              <li>Amministrazione Aziendale</li>
              <li>Economia e Finanza</li>
              <li>Business Internazionale</li>
              <li>Marketing Management</li>
            </ul>
            
            <h4>Politecnico di Milano</h4>
            <ul>
              <li>Architettura</li>
              <li>Ingegneria Industriale</li>
              <li>Ingegneria Informatica</li>
              <li>Design</li>
            </ul>
            
            <h4>Università degli Studi di Milano</h4>
            <ul>
              <li>Giurisprudenza</li>
              <li>Medicina</li>
              <li>Psicologia</li>
              <li>Lingue e Letterature</li>
            </ul>
            
            <h3>Requisiti di Ammissione</h3>
            <ul>
              <li>Diploma di scuola superiore (con Apostille)</li>
              <li>Certificato degli esami</li>
              <li>Certificato di competenza linguistica (italiano/inglese)</li>
              <li>Lettera di motivazione</li>
              <li>Lettere di referenza</li>
              <li>CV</li>
            </ul>
            
            <h3>I Nostri Servizi</h3>
            <p>Come Alvolo Consulting, offriamo i seguenti servizi:</p>
            <ul>
              <li>Consulenza sulla scelta di università e programmi</li>
              <li>Preparazione del fascicolo di iscrizione</li>
              <li>Traduzione di documenti e servizi di apostille</li>
              <li>Redazione della lettera di motivazione</li>
              <li>Preparazione e revisione del CV</li>
              <li>Monitoraggio della domanda</li>
              <li>Supporto per la domanda di visto</li>
            </ul>
            
            <h3>Vantaggi dell'Iscrizione Anticipata</h3>
            <ul>
              <li>Più opzioni di programma</li>
              <li>Opportunità di borse di studio</li>
              <li>Garanzia di alloggio</li>
              <li>Vantaggio di tempo nel processo di visto</li>
              <li>Partecipazione a programmi di orientamento</li>
            </ul>
            
            <p>Contattaci ora per ricevere aiuto con il tuo processo di iscrizione.</p>
          `
        },
        "4": {
          id: "4",
          date: "10 Dicembre 2024",
          title: "Modifiche alle Politiche dei Visti per l'Italia nel 2025",
          excerpt: "Informazioni sulle modifiche che verranno apportate alle procedure di richiesta del visto in Italia nel 2025.",
          category: "Visti e Permessi",
          featured: false,
          content: `
            <p>Desideriamo informarvi sulle importanti modifiche che verranno apportate alle procedure di richiesta del visto in Italia nel 2025.</p>
            <h3>Nuove Politiche sui Visti</h3>
            <p>Il governo italiano attuerà le seguenti modifiche nelle procedure di richiesta del visto a partire dal 2025:</p>
            <h4>1. Sistema di Domanda Digitale</h4>
            <ul>
              <li>Tutte le richieste di visto saranno ora effettuate tramite una piattaforma digitale</li>
              <li>Il sistema di caricamento dei documenti è stato reso più user-friendly</li>
              <li>Il tracciamento della domanda sarà disponibile online</li>
            </ul>
            <h4>2. Nuovi Requisiti Documentali</h4>
            <ul>
              <li>Il certificato di assicurazione sanitaria è ora obbligatorio</li>
              <li>Il requisito di saldo minimo per la prova di sufficienza finanziaria è stato aggiornato</li>
              <li>Sono richiesti documenti più dettagliati per la prova di alloggio</li>
            </ul>
            <h4>3. Tempi di Elaborazione</h4>
            <ul>
              <li>Domande di visto per studenti: 15-20 giorni lavorativi</li>
              <li>Domande di visto per lavoro: 20-25 giorni lavorativi</li>
              <li>Visto per ricongiungimento familiare: 25-30 giorni lavorativi</li>
            </ul>
            <h3>Le Nostre Raccomandazioni</h3>
            <p>Alla luce di queste modifiche, facciamo le seguenti raccomandazioni:</p>
            <ul>
              <li>Preparate le vostre domande con almeno 2 mesi di anticipo</li>
              <li>Mantenete tutti i vostri documenti aggiornati</li>
              <li>Richiedete servizi di consulenza professionale</li>
              <li>Preparate i vostri piani alternativi</li>
            </ul>
            <h3>I Nostri Servizi</h3>
            <p>Come Alvolo Consulting, offriamo i nostri servizi completi di consulenza per i visti per aiutarvi in queste nuove procedure:</p>
            <ul>
              <li>Preparazione del fascicolo di domanda</li>
              <li>Revisione e sistemazione dei documenti</li>
              <li>Fissazione e follow-up degli appuntamenti</li>
              <li>Supporto durante tutto il processo</li>
            </ul>
            <p>Potete contattarci per informazioni dettagliate.</p>
          `
        },
        "5": {
          id: "5",
          date: "20 Novembre 2024",
          title: "Miglioramenti nel Nostro Servizio di Ricerca Alloggi",
          excerpt: "Abbiamo migliorato il nostro servizio di ricerca alloggi. Ora un processo di ricerca casa più rapido e affidabile.",
          category: "Alloggi",
          featured: false,
          content: `
            <p>Per soddisfare al meglio le esigenze abitative dei nostri clienti, abbiamo notevolmente sviluppato e migliorato il nostro servizio di ricerca alloggi.</p>
            
            <h3>Le Nostre Nuove Funzionalità</h3>
            
            <h4>1. Sistema di Ricerca Avanzato</h4>
            <ul>
              <li>Opzioni di filtro dettagliate</li>
              <li>Impostazione del budget</li>
              <li>Ricerca per quartiere</li>
              <li>Filtri per la comodità dei trasporti</li>
              <li>Requisiti speciali (animali domestici, accesso per disabili, ecc.)</li>
            </ul>
            
            <h4>2. Opzione Tour Virtuale</h4>
            <ul>
              <li>Tour virtuali a 360° delle case</li>
              <li>Videochiamate</li>
              <li>Gallerie fotografiche dettagliate</li>
              <li>Video di presentazione del quartiere</li>
            </ul>
            
            <h4>3. Processo Rapido</h4>
            <ul>
              <li>Prime proposte entro 24 ore</li>
              <li>Fissazione rapida degli appuntamenti</li>
              <li>Preparazione del contratto express</li>
              <li>Supporto rapido per il trasloco</li>
            </ul>
            
            <h3>Ambito del Nostro Servizio</h3>
            
            <h4>Alloggi per Studenti</h4>
            <ul>
              <li>Dormitori per studenti</li>
              <li>Case condivise</li>
              <li>Monolocali</li>
              <li>Alloggio in famiglia</li>
            </ul>
            
            <h4>Alloggi per Professionisti</h4>
            <ul>
              <li>Appartamenti di lusso</li>
              <li>Alloggi vicino ai centri direzionali</li>
              <li>Affitti a breve termine</li>
              <li>Appartamenti con servizi</li>
            </ul>
            
            <h4>Alloggi per Famiglie</h4>
            <ul>
              <li>Grandi appartamenti per famiglie</li>
              <li>Case con giardino</li>
              <li>Alloggi vicino alle scuole</li>
              <li>Quartieri sicuri</li>
            </ul>
            
            <h3>Servizi Aggiuntivi</h3>
            <ul>
              <li>Consulenza assicurativa</li>
              <li>Noleggio mobili</li>
              <li>Servizi di trasloco</li>
              <li>Servizi di attivazione utenze</li>
              <li>Supporto legale</li>
            </ul>
            
            <h3>Le Nostre Garanzie</h3>
            <ul>
              <li>Transazione sicura al 100%</li>
              <li>Garanzia di rimborso</li>
              <li>Linea di supporto 24/7</li>
              <li>3 mesi di supporto gratuito</li>
            </ul>
            
            <h3>Come Funziona</h3>
            <ol>
              <li>Analisi delle esigenze e definizione del budget</li>
              <li>Presentazione delle opzioni adatte</li>
              <li>Tour virtuali e visite</li>
              <li>Processo di selezione e contratto</li>
              <li>Supporto per il trasloco e l'insediamento</li>
            </ol>
            
            <p>Contattaci ora per usufruire dei nostri servizi di alloggio migliorati.</p>
          `
        },
        "6": {
          id: "6",
          date: "18 Novembre 2024",
          title: "Nuovi Incentivi per la Costituzione di Start-up in Italia",
          excerpt: "Il governo italiano ha annunciato un nuovo pacchetto di incentivi per le start-up per il 2025. Grandi opportunità per gli investitori.",
          category: "Business",
          featured: true,
          content: `
            <p>Il governo italiano ha annunciato un nuovo pacchetto di incentivi per il 2025 per sostenere le iniziative imprenditoriali innovative. Questo pacchetto offre significative opportunità per gli imprenditori locali e stranieri che desiderano avviare una start-up in Italia.</p>
            
            <h3>Dettagli del Nuovo Pacchetto di Incentivi</h3>
            
            <h4>1. Vantaggi Fiscali</h4>
            <ul>
              <li>Riduzione fiscale fino al 50% per i primi 5 anni</li>
              <li>Esenzioni fiscali aggiuntive per le spese di R&S</li>
              <li>Esenzioni dall'imposta sulle plusvalenze per gli investitori</li>
            </ul>
            
            <h4>2. Sostegno Finanziario</h4>
            <ul>
              <li>Prestiti a tasso zero fino a 100.000 €</li>
              <li>Contributi a fondo perduto nell'ambito del programma "Smart&Start Italia"</li>
              <li>Facile accesso alle reti di angel investor</li>
            </ul>

            <h4>3. Semplificazioni Burocratiche e Visti</h4>
            <ul>
              <li>Processo di costituzione aziendale accelerato (entro 24 ore)</li>
              <li>Programma "Italia Startup Visa" per imprenditori stranieri</li>
              <li>Servizi pubblici digitali e opzioni di domanda online</li>
            </ul>

            <h3>Kimler Başvurabilir?</h3>
            <p>Possono candidarsi start-up innovative che operano nei seguenti settori:</p>
            <ul>
              <li>Tecnologia e Informatica</li>
              <li>Economia Verde e Sostenibilità</li>
              <li>Design e Moda</li>
              <li>Turismo e Patrimonio Culturale</li>
              <li>Tecnologie Alimentari e Agricole</li>
            </ul>

            <h3>How Alvolo Consulting Helps</h3>
            <p>We offer comprehensive support for your start-up's journey in Italy:</p>
            <ul>
              <li>Business plan preparation and strategy development</li>
              <li>Application and follow-up for incentive programs</li>
              <li>Legal and financial consulting</li>
              <li>Finding investors and partners</li>
            </ul>
            
            <p>Contact us to take advantage of these opportunities and make a successful start in Italy.</p>
          `
        },
        "7": {
          id: "7",
          date: "15 Novembre 2024",
          title: "Corsi Estivi di Lingua Italiana 2025",
          excerpt: "Sono aperte le iscrizioni per i nostri corsi estivi di lingua 2025 presso le nostre scuole partner a Milano, Roma e Firenze. Sconto del 15% per le iscrizioni anticipate!",
          category: "Formazione",
          featured: false,
          content: `
            <p>Un'opportunità fantastica per imparare l'italiano e vivere da vicino la cultura italiana! Sono aperte le iscrizioni per i corsi estivi di lingua italiana del 2025 presso le nostre scuole di lingua partner.</p>
            
            <h3>Opzioni dei Corsi</h3>
            <h4>1. Corso Estivo Intensivo (4 Settimane)</h4>
            <ul>
              <li>20 ore di lezione a settimana</li>
              <li>Classi di livello principiante, intermedio e avanzato</li>
              <li>Enfasi sulla pratica della conversazione</li>
              <li>Include attività culturali e tour della città</li>
            </ul>

            <h4>2. Corso di Italiano Accademico (8 Settimane)</h4>
            <ul>
              <li>Preparazione per gli studi universitari</li>
              <li>Competenze di scrittura e presentazione accademica</li>
              <li>Preparazione agli esami CILS e CELI</li>
              <li>25 ore di lezione a settimana</li>
            </ul>

            <h4>3. Corso di Italiano Commerciale (2 Settimane)</h4>
            <ul>
              <li>Programma speciale per professionisti e uomini d'affari</li>
              <li>Terminologia settoriale e pratica di colloqui di lavoro</li>
              <li>Networking opportunities</li>
              <li>15 ore di lezione a settimana</li>
            </ul>

            <h3>Le Nostre Scuole di Lingua Partner</h3>
            <ul>
              <li><strong>Milano:</strong> Scuola Leonardo da Vinci</li>
              <li><strong>Roma:</strong> Dilit International House</li>
              <li><strong>Firenze:</strong> Centro Fiorenza</li>
            </ul>

            <h3>Sconto per Iscrizioni Anticipate</h3>
            <p>Uno <strong>sconto del 15%</strong> sarà applicato a tutti i pacchetti di corsi per le iscrizioni effettuate entro il <strong>31 Gennaio 2025</strong>.</p>

            <h3>Cosa è Incluso nei Nostri Pacchetti?</h3>
            <ul>
              <li>Costo del corso</li>
              <li>Materiale didattico</li>
              <li>Alloggio (in famiglia o residenza per studenti)</li>
              <li>Trasferimento dall'aeroporto</li>
              <li>Consulenza per il visto</li>
              <li>Linea di supporto speciale Alvolo Consulting</li>
            </ul>
            
            <p>Prenota il tuo posto prima che le classi si esauriscano per vivere l'esperienza italiana dei tuoi sogni!</p>
          `
        },
        "8": {
          id: "8",
          date: "12 Novembre 2024",
          title: "Processo di Costituzione e Vantaggi della 'Startup Innovativa' in Italia",
          excerpt: "Ottieni lo status di 'Startup Innovativa' in Italia e beneficia di vantaggi fiscali e semplificazioni burocratiche per la tua impresa tecnologica e innovativa.",
          category: "Business",
          featured: false,
          content: `
            <p>L'Italia offre il programma 'Startup Innovativa' per sostenere le imprese incentrate sulla tecnologia e l'innovazione. Questo status offre vantaggi significativi agli imprenditori.</p>
            
            <h3>Cos'è una 'Startup Innovativa'?</h3>
            <p>Una 'Startup Innovativa' è uno status speciale concesso a giovani aziende che sviluppano prodotti o servizi tecnologici e innovativi e che soddisfano specifici criteri legali.</p>

            <h3>Kimler Başvurabilir?</h3>
            <p>Possono candidarsi le aziende che soddisfano almeno uno dei seguenti criteri:</p>
            <ul>
              <li>Le spese di R&S costituiscono almeno il 15% del costo totale o del fatturato.</li>
              <li>Almeno 1/3 della forza lavoro ha un dottorato o un master, o 2/3 hanno un master.</li>
              <li>L'azienda è proprietaria o licenziataria di un brevetto industriale o commerciale.</li>
            </ul>

            <h3>Vantaggi di Essere una 'Startup Innovativa'</h3>
            <ul>
              <li><strong>Incentivi Fiscali:</strong> Riduzioni significative delle imposte sulle società e sul reddito.</li>
              <li><strong>Incentivi per gli Investitori:</strong> Detrazioni fiscali per coloro che investono nella start-up.</li>
              <li><strong>Diritto del Lavoro Flessibile:</strong> Contratti di lavoro più flessibili.</li>
              <li><strong>Semplificazioni Burocratiche:</strong> Procedure semplificate per la costituzione e la gestione dell'azienda.</li>
              <li><strong>Facilità di Visto:</strong> Opportunità di 'Startup Visa' per i fondatori extra-UE.</li>
              <li><strong>Accesso Gratuito e Rapido:</strong> Iscrizione gratuita e procedure accelerate presso la Camera di Commercio.</li>
            </ul>

            <h3>Il Nostro Ruolo come Alvolo Consulting nel Processo</h3>
            <p>Siamo qui per guidarti attraverso questo processo:</p>
            <ul>
              <li>Valutazione dell'idoneità della tua azienda ai criteri di 'Startup Innovativa'.</li>
              <li>Preparazione dei documenti necessari e gestione del processo di candidatura.</li>
              <li>Ottimizzazione del tuo business plan for il mercato italiano.</li>
              <li>Fornitura di consulenza legale e finanziaria.</li>
            </ul>
            
            <p>Scopri con noi le opportunità della 'Startup Innovativa' per portare la tua impresa al livello successivo in Italia.</p>
          `
        }
      }
    }
  };

  const content = announcements[lang as keyof typeof announcements] || announcements.en;
  const announcement = content.announcements[id as keyof typeof content.announcements];
  
  return {
    ...content,
    announcement
  };
};

const AnnouncementDetailPage = () => {
  const { language } = useLanguage();
  const params = useParams();
  const id = params.id as string;
  const c = getAnnouncementDetails(language, id);

  if (!c.announcement) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Duyuru Bulunamadı</h1>
              <p className="text-gray-600 mb-8">Aradığınız duyuru mevcut değil.</p>
              <Link href="/announcements" className="text-brand-blue hover:text-brand-blue-dark">
                ← Duyurulara Geri Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-6">
            <Link 
              href="/announcements" 
              className="inline-flex items-center text-brand-blue hover:text-brand-blue-dark transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              {c.backToAnnouncements}
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
                    {c.announcement.date}
                  </div>
                  {c.announcement.featured && (
                    <span className="bg-brand-blue text-white text-xs px-2 py-1 rounded-full">
                      {c.featured}
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {c.announcement.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {c.announcement.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  {c.announcement.excerpt}
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: c.announcement.content }}
                />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AnnouncementDetailPage; 