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
        },
        "3": {
          id: "3",
          title: "İtalya'da Vergi Sistemi: Şirketler İçin Kapsamlı Rehber",
          excerpt: "İtalya'da şirket sahibi olarak bilmeniz gereken vergi türleri, oranları ve avantajları. Vergi optimizasyonu stratejileri.",
          author: "Bumin Kağan Çetin",
          date: "15 Aralık 2024",
          readTime: 15,
          category: "Vergi & Finans",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>İtalya'da şirket işletmek, karmaşık bir vergi sistemi ile karşılaşmak anlamına gelir. Bu rehberde, İtalyan vergi sisteminin ana unsurlarını ve şirketler için stratejik yaklaşımları ele alacağız.</p>
            
            <h2>Temel Vergi Türleri</h2>
            
            <h3>1. Kurumlar Vergisi (IRES)</h3>
            <ul>
              <li><strong>Oran:</strong> %24</li>
              <li><strong>Kapsam:</strong> Tüm kazançlar</li>
              <li><strong>Muafiyetler:</strong> Belirli yatırımlar için indirimler</li>
            </ul>
            
            <h3>2. Bölgesel Üretim Vergisi (IRAP)</h3>
            <ul>
              <li><strong>Oran:</strong> %3.9 (bölgeye göre değişir)</li>
              <li><strong>Hesaplama:</strong> Net değer üzerinden</li>
              <li><strong>İstisnalar:</strong> Küçük işletmeler için düşük oran</li>
            </ul>
            
            <h3>3. Katma Değer Vergisi (IVA)</h3>
            <ul>
              <li><strong>Standart Oran:</strong> %22</li>
              <li><strong>İndirilmiş Oran:</strong> %10, %5, %4</li>
              <li><strong>Muafiyet:</strong> Belirli hizmetler</li>
            </ul>
            
            <h2>Vergi Avantajları</h2>
            
            <h3>Patent Box Rejimi</h3>
            <p>Fikri mülkiyet gelirlerinde %50 vergi indirimi:</p>
            <ul>
              <li>Patentler</li>
              <li>Telif hakları</li>
              <li>Yazılım</li>
              <li>Marka hakları</li>
            </ul>
            
            <h3>Araştırma ve Geliştirme Teşvikleri</h3>
            <ul>
              <li>AR-GE harcamaları için %100 indirim</li>
              <li>Yenilik faaliyetleri için ek teşvikler</li>
              <li>Personel maliyetleri indirimi</li>
            </ul>
            
            <h3>Yeni Şirketler İçin Teşvikler</h3>
            <ul>
              <li>İlk üç yılda kurumlar vergisinde indirim</li>
              <li>IRAP muafiyeti</li>
              <li>Sosyal güvenlik primleri desteği</li>
            </ul>
            
            <h2>Bölgesel Farklılıklar</h2>
            
            <h3>Kuzey İtalya</h3>
            <ul>
              <li>Yüksek IRAP oranları</li>
              <li>Gelişmiş altyapı</li>
              <li>Yüksek işgücü maliyeti</li>
            </ul>
            
            <h3>Güney İtalya</h3>
            <ul>
              <li>Özel teşvik programları</li>
              <li>Düşük IRAP oranları</li>
              <li>EU fonları desteği</li>
            </ul>
            
            <h2>Vergi Beyannamesi ve Uyum</h2>
            
            <h3>Önemli Tarihler</h3>
            <ul>
              <li><strong>IRES Beyannamesi:</strong> 30 Eylül</li>
              <li><strong>IVA Beyannamesi:</strong> Aylık/Üç aylık</li>
              <li><strong>IRAP Beyannamesi:</strong> 30 Eylül</li>
            </ul>
            
            <h3>Gerekli Belgeler</h3>
            <ul>
              <li>Muhasebe defterleri</li>
              <li>Fatura kayıtları</li>
              <li>Bordro belgeleri</li>
              <li>Banka ekstreleri</li>
            </ul>
            
            <h2>Vergi Optimizasyonu Stratejileri</h2>
            
            <h3>1. Holding Yapısı</h3>
            <ul>
              <li>Grup şirketleri arası vergi konsolidasyonu</li>
              <li>Zarar mahsup avantajları</li>
              <li>Temettü muafiyeti</li>
            </ul>
            
            <h3>2. Uluslararası Planlama</h3>
            <ul>
              <li>Çifte vergilendirme anlaşmaları</li>
              <li>Transfer fiyatlandırması</li>
              <li>EU direktifleri avantajları</li>
            </ul>
            
            <h3>3. Zaman Planlaması</h3>
            <ul>
              <li>Gelir ve gider zamanlaması</li>
              <li>Yatırım teşviklerinden yararlanma</li>
              <li>Yıl sonu planlaması</li>
            </ul>
            
            <h2>Sık Karşılaşılan Sorunlar</h2>
            
            <h3>1. Uyum Sorunları</h3>
            <ul>
              <li>Geç beyanname verme cezaları</li>
              <li>Eksik belgelendirme</li>
              <li>Yanlış hesaplamalar</li>
            </ul>
            
            <h3>2. Denetim Riskleri</h3>
            <ul>
              <li>Rastgele denetimler</li>
              <li>Sektörel kontrollar</li>
              <li>Uluslararası transfer denetimleri</li>
            </ul>
            
            <h2>2025 Yılı Değişiklikleri</h2>
            <ul>
              <li>Dijital hizmetler vergisi güncellemeleri</li>
              <li>Çevre vergisi düzenlemeleri</li>
              <li>Küçük işletmeler için yeni teşvikler</li>
              <li>E-fatura zorunluluğu genişletilmesi</li>
            </ul>
            
            <h3>Alvolo Consulting Hizmetleri</h3>
            <p>Vergi danışmanlığı hizmetlerimiz:</p>
            <ul>
              <li>Vergi planlaması ve optimizasyonu</li>
              <li>Beyanname hazırlama ve verme</li>
              <li>Vergi denetimi desteği</li>
              <li>Uluslararası vergi planlama</li>
              <li>Teşvik başvuruları</li>
              <li>Vergi uyum kontrolü</li>
            </ul>
            
            <p>İtalya'da vergi yükümlülüklerinizi optimize etmek için uzman ekibimizle iletişime geçin.</p>
          `
        },
        "4": {
          id: "4",
          title: "İtalya'da Emlak Yatırımı: 2025 Rehberi",
          excerpt: "İtalya emlak piyasasında yatırım fırsatları, bölgesel analiz ve yasal süreçler. Yabancılar için emlak satın alma rehberi.",
          author: "Selma Zeynep Esra",
          date: "12 Aralık 2024",
          readTime: 18,
          category: "Emlak & Yatırım",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>İtalya emlak piyasası, yabancı yatırımcılar için cazip fırsatlar sunmaktadır. Bu kapsamlı rehberde, 2025 yılında İtalya'da emlak yatırımı yapmanın tüm yönlerini ele alacağız.</p>
            
            <h2>Piyasa Genel Durumu</h2>
            
            <h3>2024 Sonları İtibariyle Durum</h3>
            <ul>
              <li><strong>Ortalama Fiyat Artışı:</strong> %3.2 (yıllık)</li>
              <li><strong>Satışlar:</strong> %5.8 artış</li>
              <li><strong>Kira Getirileri:</strong> %4-7 arası</li>
              <li><strong>Yabancı Alım Oranı:</strong> %12 artış</li>
            </ul>
            
            <h3>2025 Tahminleri</h3>
            <ul>
              <li>Fiyatlarda %2-4 artış beklentisi</li>
              <li>Lüks segment güçlü büyüme</li>
              <li>Sürdürülebilir yapılar talebi artışı</li>
              <li>Dijital pazarlama önem kazanacak</li>
            </ul>
            
            <h2>Bölgesel Analiz</h2>
            
            <h3>Kuzey İtalya</h3>
            <h4>Milano</h4>
            <ul>
              <li><strong>Ortalama m² Fiyatı:</strong> €6,500</li>
              <li><strong>Kira Getirisi:</strong> %3.5-4.5</li>
              <li><strong>Avantajlar:</strong> İş merkezi, güçlü altyapı</li>
              <li><strong>Hedef Kitle:</strong> İş dünyası, genç profesyoneller</li>
            </ul>
            
            <h4>Venedik</h4>
            <ul>
              <li><strong>Ortalama m² Fiyatı:</strong> €4,800</li>
              <li><strong>Kira Getirisi:</strong> %5-7 (turizm)</li>
              <li><strong>Avantajlar:</strong> Turizm potansiyeli, kültürel değer</li>
              <li><strong>Hedef Kitle:</strong> Turistler, kısa dönem kiralama</li>
            </ul>
            
            <h3>Orta İtalya</h3>
            <h4>Roma</h4>
            <ul>
              <li><strong>Ortalama m² Fiyatı:</strong> €4,200</li>
              <li><strong>Kira Getirisi:</strong> %4-6</li>
              <li><strong>Avantajlar:</strong> Başkent avantajı, istikrarlı talep</li>
              <li><strong>Hedef Kitle:</strong> Kamu çalışanları, diplomatlar</li>
            </ul>
            
            <h4>Floransa</h4>
            <ul>
              <li><strong>Ortalama m² Fiyatı:</strong> €3,900</li>
              <li><strong>Kira Getirisi:</strong> %4.5-6.5</li>
              <li><strong>Avantajlar:</strong> Sanat merkezi, turizm</li>
              <li><strong>Hedef Kitle:</strong> Öğrenciler, sanat severler</li>
            </ul>
            
            <h3>Güney İtalya</h3>
            <h4>Napoli</h4>
            <ul>
              <li><strong>Ortalama m² Fiyatı:</strong> €2,800</li>
              <li><strong>Kira Getirisi:</strong> %5-8</li>
              <li><strong>Avantajlar:</strong> Uygun fiyatlar, büyüme potansiyeli</li>
              <li><strong>Hedef Kitle:</strong> Yerel kiracılar, bütçe seyahati</li>
            </ul>
            
            <h2>Yatırım Türleri</h2>
            
            <h3>1. Konut Yatırımı</h3>
            <ul>
              <li><strong>Apartman Dairesi:</strong> En yaygın seçenek</li>
              <li><strong>Villa:</strong> Lüks segment, yüksek getiri</li>
              <li><strong>Tarihi Yapı:</strong> Restorasyon potansiyeli</li>
            </ul>
            
            <h3>2. Ticari Gayrimenkul</h3>
            <ul>
              <li><strong>Ofis:</strong> İş merkezlerinde stabil gelir</li>
              <li><strong>Mağaza:</strong> Turizm bölgelerinde avantajlı</li>
              <li><strong>Depo:</strong> Lojistik sektörü büyümesi</li>
            </ul>
            
            <h3>3. Turizm Amaçlı</h3>
            <ul>
              <li><strong>Otel:</strong> Profesyonel yönetim gerekli</li>
              <li><strong>Airbnb:</strong> Kısa dönem kiralama</li>
              <li><strong>Tatil Köyü:</strong> Büyük ölçekli yatırım</li>
            </ul>
            
            <h2>Satın Alma Süreci</h2>
            
            <h3>1. Ön Hazırlık</h3>
            <ul>
              <li>Bütçe belirleme</li>
              <li>Finansman seçenekleri araştırma</li>
              <li>Hukuki destek sağlama</li>
              <li>Vergi danışmanı bulma</li>
            </ul>
            
            <h3>2. Emlak Arama</h3>
            <ul>
              <li>Online platformlar</li>
              <li>Yerel emlak acenteleri</li>
              <li>Ağ oluşturma</li>
              <li>Saha ziyaretleri</li>
            </ul>
            
            <h3>3. Teknik İnceleme</h3>
            <ul>
              <li>Yapısal durum kontrolü</li>
              <li>Yasal durumu inceleme</li>
              <li>Değerleme raporu</li>
              <li>Sigorta seçenekleri</li>
            </ul>
            
            <h3>4. Satın Alma</h3>
            <ul>
              <li>Önkontrat (Preliminare)</li>
              <li>Noterde kesin satış</li>
              <li>Tapuya tescil</li>
              <li>Sigorta ve vergi işlemleri</li>
            </ul>
            
            <h2>Yasal Süreçler</h2>
            
            <h3>Gerekli Belgeler</h3>
            <ul>
              <li>Codice Fiscale (vergi numarası)</li>
              <li>Kimlik belgesi</li>
              <li>Gelir kanıtı</li>
              <li>Banka referansları</li>
              <li>Sigorta poliçesi</li>
            </ul>
            
            <h3>Vergi Yükümlülükleri</h3>
            <ul>
              <li><strong>Emlak Transfer Vergisi:</strong> %2-9</li>
              <li><strong>Noter Ücreti:</strong> ~€2,000</li>
              <li><strong>Emlak Vergisi (IMU):</strong> Yıllık %0.76</li>
              <li><strong>Çöp Vergisi (TARI):</strong> Belediyeye göre</li>
            </ul>
            
            <h2>Finansman Seçenekleri</h2>
            
            <h3>İtalyan Bankaları</h3>
            <ul>
              <li><strong>Kredi Oranı:</strong> %2.5-4.5</li>
              <li><strong>Vade:</strong> 10-25 yıl</li>
              <li><strong>Peşinat:</strong> %20-30</li>
              <li><strong>Gelir Şartı:</strong> Aylık taksit/gelir %35</li>
            </ul>
            
            <h3>Alternatif Finansman</h3>
            <ul>
              <li>Yurt dışı bankalar</li>
              <li>Özel finansman şirketleri</li>
              <li>Satıcı finansmanı</li>
              <li>Ortaklık modelleri</li>
            </ul>
            
            <h2>Riskler ve Çözümler</h2>
            
            <h3>Yasal Riskler</h3>
            <ul>
              <li><strong>Risk:</strong> Karmaşık bürokrasi</li>
              <li><strong>Çözüm:</strong> Profesyonel hukuki destek</li>
            </ul>
            
            <h3>Finansal Riskler</h3>
            <ul>
              <li><strong>Risk:</strong> Döviz kuru dalgalanmaları</li>
              <li><strong>Çözüm:</strong> Hedge stratejileri</li>
            </ul>
            
            <h3>Piyasa Riskleri</h3>
            <ul>
              <li><strong>Risk:</strong> Bölgesel değer kaybı</li>
              <li><strong>Çözüm:</strong> Detaylı piyasa araştırması</li>
            </ul>
            
            <h2>Yönetim ve Bakım</h2>
            
            <h3>Profesyonel Yönetim</h3>
            <ul>
              <li>Emlak yönetim şirketleri</li>
              <li>Kiracı bulma hizmetleri</li>
              <li>Bakım ve onarım</li>
              <li>Mali işler takibi</li>
            </ul>
            
            <h3>Kendi Yönetimi</h3>
            <ul>
              <li>Dil öğrenme gerekliliği</li>
              <li>Yerel ağ kurma</li>
              <li>Düzenli ziyaretler</li>
              <li>Acil durum planlaması</li>
            </ul>
            
            <h3>Alvolo Consulting Hizmetleri</h3>
            <p>Emlak yatırımı sürecinizde size sunduğumuz hizmetler:</p>
            <ul>
              <li>Piyasa araştırması ve analizi</li>
              <li>Emlak arama ve seçimi</li>
              <li>Hukuki süreç yönetimi</li>
              <li>Finansman danışmanlığı</li>
              <li>Vergi planlaması</li>
              <li>Yatırım sonrası yönetim</li>
              <li>Satış ve çıkış stratejileri</li>
            </ul>
            
            <p>İtalya emlak piyasasında güvenli ve karlı yatırımlar yapmak için deneyimli ekibimizle iletişime geçin.</p>
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
        },
        "2": {
          id: "2",
          title: "2025 Italy Visa Application Guide",
          excerpt: "All the details you need to know when applying for an Italian visa in 2025. Which visa type is right for you?",
          author: "Ece Melisa Özgüner",
          date: "December 18, 2024",
          readTime: 12,
          category: "Visa & Permits",
          featured: false,
          image: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          content: `
            <p>Having the right information and managing the process correctly is very important when applying for an Italian visa. In this guide, we will explain in detail the visa types and application processes valid in 2025.</p>
            
            <h2>Visa Types</h2>
            
            <h3>1. Student Visa (Visto per Studio)</h3>
            <p>For students who want to study in Italy:</p>
            <ul>
              <li><strong>Duration:</strong> Throughout education period (maximum 1 year)</li>
              <li><strong>Requirements:</strong></li>
              <ul>
                <li>Acceptance letter</li>
                <li>Proof of financial sufficiency</li>
                <li>Health insurance</li>
                <li>Proof of accommodation</li>
              </ul>
            </ul>
            
            <h3>2. Work Visa (Visto per Lavoro)</h3>
            <p>For those who want to work in Italy:</p>
            <ul>
              <li><strong>Duration:</strong> Duration of employment contract</li>
              <li><strong>Requirements:</strong></li>
              <ul>
                <li>Job offer</li>
                <li>Employer sponsorship</li>
                <li>Professional qualification certificate</li>
                <li>Language proficiency</li>
              </ul>
            </ul>
            
            <h3>3. Family Reunification Visa (Visto per Ricongiungimento Familiare)</h3>
            <p>For those who want to bring family members to Italy:</p>
            <ul>
              <li><strong>Duration:</strong> Permanent</li>
              <li><strong>Requirements:</strong></li>
              <ul>
                <li>Proof of kinship</li>
                <li>Financial sufficiency</li>
                <li>Proof of accommodation</li>
                <li>Health insurance</li>
              </ul>
            </ul>
            
            <h2>Application Process</h2>
            
            <h3>1. Document Preparation</h3>
            <ul>
              <li>Passport (valid for at least 3 months)</li>
              <li>Visa application form</li>
              <li>Photo (within last 6 months)</li>
              <li>Visa fee payment proof</li>
              <li>Other required documents</li>
            </ul>
            
            <h3>2. Appointment Scheduling</h3>
            <ul>
              <li>Contact with Italian consulate</li>
              <li>Online appointment system</li>
              <li>Appointment date scheduling</li>
            </ul>
            
            <h3>3. Application Submission</h3>
            <ul>
              <li>Document review</li>
              <li>Interview</li>
              <li>Fingerprinting</li>
              <li>Application tracking number</li>
            </ul>
            
            <h3>4. Result Tracking</h3>
            <ul>
              <li>Online tracking system</li>
              <li>Contact with consulate</li>
              <li>Visa collection</li>
            </ul>
            
            <h2>2025 Changes</h2>
            <ul>
              <li>Digital application system became mandatory</li>
              <li>Health insurance requirement increased</li>
              <li>Financial sufficiency conditions updated</li>
              <li>Processing times shortened</li>
            </ul>
            
            <h2>Recommendations</h2>
            <ul>
              <li>Prepare application at least 2 months in advance</li>
              <li>Keep all documents current</li>
              <li>Get professional consultation</li>
              <li>Prepare alternative plans</li>
            </ul>
            
            <h3>Alvolo Consulting Services</h3>
            <p>To help you in your visa application process:</p>
            <ul>
              <li>Visa type selection consultation</li>
              <li>Document preparation and review</li>
              <li>Appointment scheduling and tracking</li>
              <li>Interview preparation</li>
              <li>Support throughout the process</li>
            </ul>
            
            <p>Contact us to help you with your visa application process.</p>
          `
        },
        "3": {
          id: "3",
          title: "Italian Tax System: Comprehensive Guide for Companies",
          excerpt: "Tax types, rates and advantages you need to know as a company owner in Italy. Tax optimization strategies.",
          author: "Bumin Kağan Çetin",
          date: "December 15, 2024",
          readTime: 15,
          category: "Tax & Finance",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>Operating a company in Italy means dealing with a complex tax system. In this guide, we will cover the main elements of the Italian tax system and strategic approaches for companies.</p>
            
            <h2>Main Tax Types</h2>
            
            <h3>1. Corporate Income Tax (IRES)</h3>
            <ul>
              <li><strong>Rate:</strong> 24%</li>
              <li><strong>Scope:</strong> All profits</li>
              <li><strong>Exemptions:</strong> Deductions for certain investments</li>
            </ul>
            
            <h3>2. Regional Production Tax (IRAP)</h3>
            <ul>
              <li><strong>Rate:</strong> 3.9% (varies by region)</li>
              <li><strong>Calculation:</strong> On net value</li>
              <li><strong>Exceptions:</strong> Lower rate for small businesses</li>
            </ul>
            
            <h3>3. Value Added Tax (IVA)</h3>
            <ul>
              <li><strong>Standard Rate:</strong> 22%</li>
              <li><strong>Reduced Rate:</strong> 10%, 5%, 4%</li>
              <li><strong>Exemption:</strong> Certain services</li>
            </ul>
            
            <h2>Tax Advantages</h2>
            
            <h3>Patent Box Regime</h3>
            <p>50% tax reduction on intellectual property income:</p>
            <ul>
              <li>Patents</li>
              <li>Copyrights</li>
              <li>Software</li>
              <li>Trademark rights</li>
            </ul>
            
            <h3>Research and Development Incentives</h3>
            <ul>
              <li>100% deduction for R&D expenses</li>
              <li>Additional incentives for innovation activities</li>
              <li>Personnel cost deductions</li>
            </ul>
            
            <h3>Incentives for New Companies</h3>
            <ul>
              <li>Corporate tax reduction in first three years</li>
              <li>IRAP exemption</li>
              <li>Social security contribution support</li>
            </ul>
            
            <h2>Regional Differences</h2>
            
            <h3>Northern Italy</h3>
            <ul>
              <li>Higher IRAP rates</li>
              <li>Advanced infrastructure</li>
              <li>Higher labor costs</li>
            </ul>
            
            <h3>Southern Italy</h3>
            <ul>
              <li>Special incentive programs</li>
              <li>Lower IRAP rates</li>
              <li>EU fund support</li>
            </ul>
            
            <h2>Tax Returns and Compliance</h2>
            
            <h3>Important Dates</h3>
            <ul>
              <li><strong>IRES Return:</strong> September 30</li>
              <li><strong>IVA Return:</strong> Monthly/Quarterly</li>
              <li><strong>IRAP Return:</strong> September 30</li>
            </ul>
            
            <h3>Required Documents</h3>
            <ul>
              <li>Accounting books</li>
              <li>Invoice records</li>
              <li>Payroll documents</li>
              <li>Bank statements</li>
            </ul>
            
            <h2>Tax Optimization Strategies</h2>
            
            <h3>1. Holding Structure</h3>
            <ul>
              <li>Tax consolidation between group companies</li>
              <li>Loss offset advantages</li>
              <li>Dividend exemption</li>
            </ul>
            
            <h3>2. International Planning</h3>
            <ul>
              <li>Double taxation treaties</li>
              <li>Transfer pricing</li>
              <li>EU directive advantages</li>
            </ul>
            
            <h3>3. Timing Planning</h3>
            <ul>
              <li>Income and expense timing</li>
              <li>Utilizing investment incentives</li>
              <li>Year-end planning</li>
            </ul>
            
            <h2>Common Issues</h2>
            
            <h3>1. Compliance Issues</h3>
            <ul>
              <li>Late filing penalties</li>
              <li>Insufficient documentation</li>
              <li>Incorrect calculations</li>
            </ul>
            
            <h3>2. Audit Risks</h3>
            <ul>
              <li>Random audits</li>
              <li>Sector-specific controls</li>
              <li>International transfer audits</li>
            </ul>
            
            <h2>2025 Changes</h2>
            <ul>
              <li>Digital services tax updates</li>
              <li>Environmental tax regulations</li>
              <li>New incentives for small businesses</li>
              <li>E-invoice requirement expansion</li>
            </ul>
            
            <h3>Alvolo Consulting Services</h3>
            <p>Our tax consulting services:</p>
            <ul>
              <li>Tax planning and optimization</li>
              <li>Tax return preparation and filing</li>
              <li>Tax audit support</li>
              <li>International tax planning</li>
              <li>Incentive applications</li>
              <li>Tax compliance control</li>
            </ul>
            
            <p>Contact our expert team to optimize your tax obligations in Italy.</p>
          `
        },
        "4": {
          id: "4",
          title: "Real Estate Investment in Italy: 2025 Guide",
          excerpt: "Investment opportunities in the Italian real estate market, regional analysis and legal processes. Property purchase guide for foreigners.",
          author: "Selma Zeynep Esra",
          date: "December 12, 2024",
          readTime: 18,
          category: "Real Estate & Investment",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>The Italian real estate market offers attractive opportunities for foreign investors. In this comprehensive guide, we will cover all aspects of real estate investment in Italy in 2025.</p>
            
            <h2>Market Overview</h2>
            
            <h3>End of 2024 Status</h3>
            <ul>
              <li><strong>Average Price Increase:</strong> 3.2% (annual)</li>
              <li><strong>Sales:</strong> 5.8% increase</li>
              <li><strong>Rental Yields:</strong> 4-7% range</li>
              <li><strong>Foreign Purchase Rate:</strong> 12% increase</li>
            </ul>
            
            <h3>2025 Predictions</h3>
            <ul>
              <li>2-4% price increase expected</li>
              <li>Strong growth in luxury segment</li>
              <li>Increased demand for sustainable buildings</li>
              <li>Digital marketing will gain importance</li>
            </ul>
            
            <h2>Regional Analysis</h2>
            
            <h3>Northern Italy</h3>
            <h4>Milan</h4>
            <ul>
              <li><strong>Average Price per m²:</strong> €6,500</li>
              <li><strong>Rental Yield:</strong> 3.5-4.5%</li>
              <li><strong>Advantages:</strong> Business center, strong infrastructure</li>
              <li><strong>Target Audience:</strong> Business world, young professionals</li>
            </ul>
            
            <h4>Venice</h4>
            <ul>
              <li><strong>Average Price per m²:</strong> €4,800</li>
              <li><strong>Rental Yield:</strong> 5-7% (tourism)</li>
              <li><strong>Advantages:</strong> Tourism potential, cultural value</li>
              <li><strong>Target Audience:</strong> Tourists, short-term rentals</li>
            </ul>
            
            <h3>Central Italy</h3>
            <h4>Rome</h4>
            <ul>
              <li><strong>Average Price per m²:</strong> €4,200</li>
              <li><strong>Rental Yield:</strong> 4-6%</li>
              <li><strong>Advantages:</strong> Capital advantage, stable demand</li>
              <li><strong>Target Audience:</strong> Public employees, diplomats</li>
            </ul>
            
            <h4>Florence</h4>
            <ul>
              <li><strong>Average Price per m²:</strong> €3,900</li>
              <li><strong>Rental Yield:</strong> 4.5-6.5%</li>
              <li><strong>Advantages:</strong> Art center, tourism</li>
              <li><strong>Target Audience:</strong> Students, art lovers</li>
            </ul>
            
            <h3>Southern Italy</h3>
            <h4>Naples</h4>
            <ul>
              <li><strong>Average Price per m²:</strong> €2,800</li>
              <li><strong>Rental Yield:</strong> 5-8%</li>
              <li><strong>Advantages:</strong> Affordable prices, growth potential</li>
              <li><strong>Target Audience:</strong> Local tenants, budget travel</li>
            </ul>
            
            <h2>Investment Types</h2>
            
            <h3>1. Residential Investment</h3>
            <ul>
              <li><strong>Apartment:</strong> Most common option</li>
              <li><strong>Villa:</strong> Luxury segment, high return</li>
              <li><strong>Historic Building:</strong> Restoration potential</li>
            </ul>
            
            <h3>2. Commercial Real Estate</h3>
            <ul>
              <li><strong>Office:</strong> Stable income in business centers</li>
              <li><strong>Shop:</strong> Advantageous in tourism areas</li>
              <li><strong>Warehouse:</strong> Logistics sector growth</li>
            </ul>
            
            <h3>3. Tourism Purpose</h3>
            <ul>
              <li><strong>Hotel:</strong> Professional management required</li>
              <li><strong>Airbnb:</strong> Short-term rentals</li>
              <li><strong>Holiday Village:</strong> Large-scale investment</li>
            </ul>
            
            <h2>Purchase Process</h2>
            
            <h3>1. Preparation</h3>
            <ul>
              <li>Budget determination</li>
              <li>Financing options research</li>
              <li>Legal support provision</li>
              <li>Finding tax advisor</li>
            </ul>
            
            <h3>2. Property Search</h3>
            <ul>
              <li>Online platforms</li>
              <li>Local real estate agents</li>
              <li>Networking</li>
              <li>Site visits</li>
            </ul>
            
            <h3>3. Technical Inspection</h3>
            <ul>
              <li>Structural condition check</li>
              <li>Legal status review</li>
              <li>Valuation report</li>
              <li>Insurance options</li>
            </ul>
            
            <h3>4. Purchase</h3>
            <ul>
              <li>Preliminary contract (Preliminare)</li>
              <li>Final sale at notary</li>
              <li>Property registry</li>
              <li>Insurance and tax procedures</li>
            </ul>
            
            <h2>Legal Processes</h2>
            
            <h3>Required Documents</h3>
            <ul>
              <li>Codice Fiscale (tax number)</li>
              <li>Identity document</li>
              <li>Proof of income</li>
              <li>Bank references</li>
              <li>Insurance policy</li>
            </ul>
            
            <h3>Tax Obligations</h3>
            <ul>
              <li><strong>Property Transfer Tax:</strong> 2-9%</li>
              <li><strong>Notary Fee:</strong> ~€2,000</li>
              <li><strong>Property Tax (IMU):</strong> Annual 0.76%</li>
              <li><strong>Waste Tax (TARI):</strong> According to municipality</li>
            </ul>
            
            <h2>Financing Options</h2>
            
            <h3>Italian Banks</h3>
            <ul>
              <li><strong>Interest Rate:</strong> 2.5-4.5%</li>
              <li><strong>Term:</strong> 10-25 years</li>
              <li><strong>Down Payment:</strong> 20-30%</li>
              <li><strong>Income Requirement:</strong> Monthly installment/income 35%</li>
            </ul>
            
            <h3>Alternative Financing</h3>
            <ul>
              <li>Foreign banks</li>
              <li>Private financing companies</li>
              <li>Seller financing</li>
              <li>Partnership models</li>
            </ul>
            
            <h2>Risks and Solutions</h2>
            
            <h3>Legal Risks</h3>
            <ul>
              <li><strong>Risk:</strong> Complex bureaucracy</li>
              <li><strong>Solution:</strong> Professional legal support</li>
            </ul>
            
            <h3>Financial Risks</h3>
            <ul>
              <li><strong>Risk:</strong> Currency exchange fluctuations</li>
              <li><strong>Solution:</strong> Hedge strategies</li>
            </ul>
            
            <h3>Market Risks</h3>
            <ul>
              <li><strong>Risk:</strong> Regional value loss</li>
              <li><strong>Solution:</strong> Detailed market research</li>
            </ul>
            
            <h3>Alvolo Consulting Services</h3>
            <p>Services we offer in your real estate investment process:</p>
            <ul>
              <li>Market research and analysis</li>
              <li>Property search and selection</li>
              <li>Legal process management</li>
              <li>Financing consultation</li>
              <li>Tax planning</li>
              <li>Post-investment management</li>
              <li>Sale and exit strategies</li>
            </ul>
            
            <p>Contact our experienced team to make safe and profitable investments in the Italian real estate market.</p>
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
        },
        "2": {
          id: "2",
          title: "Guida alle Domande di Visto per l'Italia 2025",
          excerpt: "Tutti i dettagli che devi sapere quando fai domanda per un visto italiano nel 2025. Quale tipo di visto è giusto per te?",
          author: "Ece Melisa Özgüner",
          date: "18 Dicembre 2024",
          readTime: 12,
          category: "Visti e Permessi",
          featured: false,
          image: "https://www.dropbox.com/scl/fi/bh5lnxwkq7nrwy0hh2tiq/burs2.png?rlkey=pvmywttrdg94m4nwhpyflt38q&st=b4xhc5us&dl=1",
          content: `
            <p>Avere le informazioni corrette e gestire il processo correttamente è molto importante quando si fa domanda per un visto italiano. In questa guida, spiegheremo in dettaglio i tipi di visto e i processi di domanda validi nel 2025.</p>
            
            <h2>Tipi di Visto</h2>
            
            <h3>1. Visto per Studio</h3>
            <p>Per studenti che vogliono studiare in Italia:</p>
            <ul>
              <li><strong>Durata:</strong> Durante il periodo di studi (massimo 1 anno)</li>
              <li><strong>Requisiti:</strong></li>
              <ul>
                <li>Lettera di accettazione</li>
                <li>Prova di sufficienza finanziaria</li>
                <li>Assicurazione sanitaria</li>
                <li>Prova di alloggio</li>
              </ul>
            </ul>
            
            <h3>2. Visto per Lavoro</h3>
            <p>Per coloro che vogliono lavorare in Italia:</p>
            <ul>
              <li><strong>Durata:</strong> Durata del contratto di lavoro</li>
              <li><strong>Requisiti:</strong></li>
              <ul>
                <li>Offerta di lavoro</li>
                <li>Sponsorizzazione del datore di lavoro</li>
                <li>Certificato di qualifica professionale</li>
                <li>Competenza linguistica</li>
              </ul>
            </ul>
            
            <h3>3. Visto per Ricongiungimento Familiare</h3>
            <p>Per coloro che vogliono portare i membri della famiglia in Italia:</p>
            <ul>
              <li><strong>Durata:</strong> Permanente</li>
              <li><strong>Requisiti:</strong></li>
              <ul>
                <li>Prova di parentela</li>
                <li>Sufficienza finanziaria</li>
                <li>Prova di alloggio</li>
                <li>Assicurazione sanitaria</li>
              </ul>
            </ul>
            
            <h2>Processo di Domanda</h2>
            
            <h3>1. Preparazione dei Documenti</h3>
            <ul>
              <li>Passaporto (valido per almeno 3 mesi)</li>
              <li>Modulo di domanda di visto</li>
              <li>Foto (negli ultimi 6 mesi)</li>
              <li>Prova di pagamento della tassa del visto</li>
              <li>Altri documenti richiesti</li>
            </ul>
            
            <h3>2. Programmazione dell'Appuntamento</h3>
            <ul>
              <li>Contatto con il consolato italiano</li>
              <li>Sistema di appuntamenti online</li>
              <li>Programmazione della data dell'appuntamento</li>
            </ul>
            
            <h3>3. Presentazione della Domanda</h3>
            <ul>
              <li>Revisione dei documenti</li>
              <li>Colloquio</li>
              <li>Presa delle impronte digitali</li>
              <li>Numero di tracciamento della domanda</li>
            </ul>
            
            <h3>4. Tracciamento del Risultato</h3>
            <ul>
              <li>Sistema di tracciamento online</li>
              <li>Contatto con il consolato</li>
              <li>Ritiro del visto</li>
            </ul>
            
            <h2>Cambiamenti del 2025</h2>
            <ul>
              <li>Il sistema di domanda digitale è diventato obbligatorio</li>
              <li>Aumento dei requisiti di assicurazione sanitaria</li>
              <li>Aggiornamento delle condizioni di sufficienza finanziaria</li>
              <li>Riduzione dei tempi di elaborazione</li>
            </ul>
            
            <h2>Raccomandazioni</h2>
            <ul>
              <li>Preparare la domanda con almeno 2 mesi di anticipo</li>
              <li>Mantenere tutti i documenti aggiornati</li>
              <li>Ottenere consulenza professionale</li>
              <li>Preparare piani alternativi</li>
            </ul>
            
            <h3>Servizi di Alvolo Consulting</h3>
            <p>Per aiutarti nel processo di domanda di visto:</p>
            <ul>
              <li>Consulenza per la selezione del tipo di visto</li>
              <li>Preparazione e revisione dei documenti</li>
              <li>Programmazione e tracciamento degli appuntamenti</li>
              <li>Preparazione al colloquio</li>
              <li>Supporto durante tutto il processo</li>
            </ul>
            
            <p>Contattaci per aiutarti con il tuo processo di domanda di visto.</p>
          `
        },
        "3": {
          id: "3",
          title: "Sistema Fiscale Italiano: Guida Completa per le Aziende",
          excerpt: "Tipi di tasse, aliquote e vantaggi che devi conoscere come proprietario di un'azienda in Italia. Strategie di ottimizzazione fiscale.",
          author: "Bumin Kağan Çetin",
          date: "15 Dicembre 2024",
          readTime: 15,
          category: "Fisco e Finanze",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>Gestire un'azienda in Italia significa affrontare un sistema fiscale complesso. In questa guida, copriremo gli elementi principali del sistema fiscale italiano e gli approcci strategici per le aziende.</p>
            
            <h2>Principali Tipi di Tasse</h2>
            
            <h3>1. Imposta sul Reddito delle Società (IRES)</h3>
            <ul>
              <li><strong>Aliquota:</strong> 24%</li>
              <li><strong>Ambito:</strong> Tutti i profitti</li>
              <li><strong>Esenzioni:</strong> Deduzioni per determinati investimenti</li>
            </ul>
            
            <h3>2. Imposta Regionale sulle Attività Produttive (IRAP)</h3>
            <ul>
              <li><strong>Aliquota:</strong> 3,9% (varia per regione)</li>
              <li><strong>Calcolo:</strong> Sul valore netto</li>
              <li><strong>Eccezioni:</strong> Aliquota inferiore per piccole imprese</li>
            </ul>
            
            <h3>3. Imposta sul Valore Aggiunto (IVA)</h3>
            <ul>
              <li><strong>Aliquota Standard:</strong> 22%</li>
              <li><strong>Aliquota Ridotta:</strong> 10%, 5%, 4%</li>
              <li><strong>Esenzione:</strong> Determinati servizi</li>
            </ul>
            
            <h2>Vantaggi Fiscali</h2>
            
            <h3>Regime Patent Box</h3>
            <p>Riduzione fiscale del 50% sui redditi da proprietà intellettuale:</p>
            <ul>
              <li>Brevetti</li>
              <li>Diritti d'autore</li>
              <li>Software</li>
              <li>Diritti di marchio</li>
            </ul>
            
            <h3>Incentivi per Ricerca e Sviluppo</h3>
            <ul>
              <li>Deduzione del 100% per spese R&S</li>
              <li>Incentivi aggiuntivi per attività innovative</li>
              <li>Deduzioni sui costi del personale</li>
            </ul>
            
            <h3>Incentivi per Nuove Aziende</h3>
            <ul>
              <li>Riduzione dell'imposta societaria nei primi tre anni</li>
              <li>Esenzione IRAP</li>
              <li>Supporto ai contributi previdenziali</li>
            </ul>
            
            <h2>Differenze Regionali</h2>
            
            <h3>Italia del Nord</h3>
            <ul>
              <li>Aliquote IRAP più elevate</li>
              <li>Infrastrutture avanzate</li>
              <li>Costi del lavoro più elevati</li>
            </ul>
            
            <h3>Italia del Sud</h3>
            <ul>
              <li>Programmi di incentivi speciali</li>
              <li>Aliquote IRAP più basse</li>
              <li>Supporto dai fondi UE</li>
            </ul>
            
            <h2>Dichiarazioni Fiscali e Conformità</h2>
            
            <h3>Date Importanti</h3>
            <ul>
              <li><strong>Dichiarazione IRES:</strong> 30 Settembre</li>
              <li><strong>Dichiarazione IVA:</strong> Mensile/Trimestrale</li>
              <li><strong>Dichiarazione IRAP:</strong> 30 Settembre</li>
            </ul>
            
            <h3>Documenti Richiesti</h3>
            <ul>
              <li>Libri contabili</li>
              <li>Registri delle fatture</li>
              <li>Documenti di busta paga</li>
              <li>Estratti bancari</li>
            </ul>
            
            <h2>Strategie di Ottimizzazione Fiscale</h2>
            
            <h3>1. Struttura Holding</h3>
            <ul>
              <li>Consolidamento fiscale tra società del gruppo</li>
              <li>Vantaggi di compensazione delle perdite</li>
              <li>Esenzione sui dividendi</li>
            </ul>
            
            <h3>2. Pianificazione Internazionale</h3>
            <ul>
              <li>Trattati contro la doppia imposizione</li>
              <li>Transfer pricing</li>
              <li>Vantaggi delle direttive UE</li>
            </ul>
            
            <h3>3. Pianificazione Temporale</h3>
            <ul>
              <li>Tempistica di entrate e spese</li>
              <li>Utilizzo degli incentivi agli investimenti</li>
              <li>Pianificazione di fine anno</li>
            </ul>
            
            <h2>Problemi Comuni</h2>
            
            <h3>1. Problemi di Conformità</h3>
            <ul>
              <li>Penali per dichiarazioni tardive</li>
              <li>Documentazione insufficiente</li>
              <li>Calcoli errati</li>
            </ul>
            
            <h3>2. Rischi di Controllo</h3>
            <ul>
              <li>Controlli casuali</li>
              <li>Controlli settoriali</li>
              <li>Controlli sui trasferimenti internazionali</li>
            </ul>
            
            <h2>Cambiamenti del 2025</h2>
            <ul>
              <li>Aggiornamenti dell'imposta sui servizi digitali</li>
              <li>Regolamentazioni fiscali ambientali</li>
              <li>Nuovi incentivi per piccole imprese</li>
              <li>Espansione del requisito di fatturazione elettronica</li>
            </ul>
            
            <h3>Servizi di Alvolo Consulting</h3>
            <p>I nostri servizi di consulenza fiscale:</p>
            <ul>
              <li>Pianificazione e ottimizzazione fiscale</li>
              <li>Preparazione e presentazione delle dichiarazioni fiscali</li>
              <li>Supporto durante i controlli fiscali</li>
              <li>Pianificazione fiscale internazionale</li>
              <li>Domande di incentivi</li>
              <li>Controllo della conformità fiscale</li>
            </ul>
            
            <p>Contatta il nostro team di esperti per ottimizzare i tuoi obblighi fiscali in Italia.</p>
          `
        },
        "4": {
          id: "4",
          title: "Investimenti Immobiliari in Italia: Guida 2025",
          excerpt: "Opportunità di investimento nel mercato immobiliare italiano, analisi regionale e processi legali. Guida all'acquisto di proprietà per stranieri.",
          author: "Selma Zeynep Esra",
          date: "12 Dicembre 2024",
          readTime: 18,
          category: "Immobiliare e Investimenti",
          featured: true,
          image: "https://www.dropbox.com/scl/fi/n8abtlx6olxbmtnwhgi4a/milano2.jpg?rlkey=imyqk3wlq0w9x3ohnmmfagco8&st=fgghxlun&dl=1",
          content: `
            <p>Il mercato immobiliare italiano offre opportunità attraenti per gli investitori stranieri. In questa guida completa, copriremo tutti gli aspetti degli investimenti immobiliari in Italia nel 2025.</p>
            
            <h2>Panoramica del Mercato</h2>
            
            <h3>Stato di Fine 2024</h3>
            <ul>
              <li><strong>Aumento Medio dei Prezzi:</strong> 3,2% (annuale)</li>
              <li><strong>Vendite:</strong> Aumento del 5,8%</li>
              <li><strong>Rendimenti Locativi:</strong> Gamma 4-7%</li>
              <li><strong>Tasso di Acquisto Straniero:</strong> Aumento del 12%</li>
            </ul>
            
            <h3>Previsioni 2025</h3>
            <ul>
              <li>Aumento dei prezzi del 2-4% previsto</li>
              <li>Forte crescita nel segmento luxury</li>
              <li>Aumento della domanda per edifici sostenibili</li>
              <li>Il marketing digitale acquisirà importanza</li>
            </ul>
            
            <h2>Analisi Regionale</h2>
            
            <h3>Italia del Nord</h3>
            <h4>Milano</h4>
            <ul>
              <li><strong>Prezzo Medio per m²:</strong> €6.500</li>
              <li><strong>Rendimento Locativo:</strong> 3,5-4,5%</li>
              <li><strong>Vantaggi:</strong> Centro business, infrastrutture forti</li>
              <li><strong>Pubblico Target:</strong> Mondo degli affari, giovani professionisti</li>
            </ul>
            
            <h4>Venezia</h4>
            <ul>
              <li><strong>Prezzo Medio per m²:</strong> €4.800</li>
              <li><strong>Rendimento Locativo:</strong> 5-7% (turismo)</li>
              <li><strong>Vantaggi:</strong> Potenziale turistico, valore culturale</li>
              <li><strong>Pubblico Target:</strong> Turisti, affitti a breve termine</li>
            </ul>
            
            <h3>Italia Centrale</h3>
            <h4>Roma</h4>
            <ul>
              <li><strong>Prezzo Medio per m²:</strong> €4.200</li>
              <li><strong>Rendimento Locativo:</strong> 4-6%</li>
              <li><strong>Vantaggi:</strong> Vantaggio della capitale, domanda stabile</li>
              <li><strong>Pubblico Target:</strong> Dipendenti pubblici, diplomatici</li>
            </ul>
            
            <h4>Firenze</h4>
            <ul>
              <li><strong>Prezzo Medio per m²:</strong> €3.900</li>
              <li><strong>Rendimento Locativo:</strong> 4,5-6,5%</li>
              <li><strong>Vantaggi:</strong> Centro d'arte, turismo</li>
              <li><strong>Pubblico Target:</strong> Studenti, amanti dell'arte</li>
            </ul>
            
            <h3>Italia del Sud</h3>
            <h4>Napoli</h4>
            <ul>
              <li><strong>Prezzo Medio per m²:</strong> €2.800</li>
              <li><strong>Rendimento Locativo:</strong> 5-8%</li>
              <li><strong>Vantaggi:</strong> Prezzi accessibili, potenziale di crescita</li>
              <li><strong>Pubblico Target:</strong> Inquilini locali, viaggi economici</li>
            </ul>
            
            <h2>Tipi di Investimento</h2>
            
            <h3>1. Investimento Residenziale</h3>
            <ul>
              <li><strong>Appartamento:</strong> Opzione più comune</li>
              <li><strong>Villa:</strong> Segmento luxury, alto rendimento</li>
              <li><strong>Edificio Storico:</strong> Potenziale di restauro</li>
            </ul>
            
            <h3>2. Immobiliare Commerciale</h3>
            <ul>
              <li><strong>Ufficio:</strong> Reddito stabile nei centri business</li>
              <li><strong>Negozio:</strong> Vantaggioso nelle aree turistiche</li>
              <li><strong>Magazzino:</strong> Crescita del settore logistico</li>
            </ul>
            
            <h3>3. Scopo Turistico</h3>
            <ul>
              <li><strong>Hotel:</strong> Gestione professionale richiesta</li>
              <li><strong>Airbnb:</strong> Affitti a breve termine</li>
              <li><strong>Villaggio Vacanze:</strong> Investimento su larga scala</li>
            </ul>
            
            <h2>Processo di Acquisto</h2>
            
            <h3>1. Preparazione</h3>
            <ul>
              <li>Determinazione del budget</li>
              <li>Ricerca delle opzioni di finanziamento</li>
              <li>Supporto legale</li>
              <li>Trovare consulente fiscale</li>
            </ul>
            
            <h3>2. Ricerca Immobiliare</h3>
            <ul>
              <li>Piattaforme online</li>
              <li>Agenti immobiliari locali</li>
              <li>Networking</li>
              <li>Visite in loco</li>
            </ul>
            
            <h3>3. Ispezione Tecnica</h3>
            <ul>
              <li>Controllo delle condizioni strutturali</li>
              <li>Revisione dello status legale</li>
              <li>Rapporto di valutazione</li>
              <li>Opzioni assicurative</li>
            </ul>
            
            <h3>4. Acquisto</h3>
            <ul>
              <li>Contratto preliminare (Preliminare)</li>
              <li>Vendita finale dal notaio</li>
              <li>Registrazione della proprietà</li>
              <li>Procedure assicurative e fiscali</li>
            </ul>
            
            <h2>Processi Legali</h2>
            
            <h3>Documenti Richiesti</h3>
            <ul>
              <li>Codice Fiscale</li>
              <li>Documento d'identità</li>
              <li>Prova di reddito</li>
              <li>Referenze bancarie</li>
              <li>Polizza assicurativa</li>
            </ul>
            
            <h3>Obblighi Fiscali</h3>
            <ul>
              <li><strong>Imposta di Trasferimento Immobiliare:</strong> 2-9%</li>
              <li><strong>Spese Notarili:</strong> ~€2.000</li>
              <li><strong>Imposta Immobiliare (IMU):</strong> Annuale 0,76%</li>
              <li><strong>Tassa sui Rifiuti (TARI):</strong> Secondo il comune</li>
            </ul>
            
            <h3>Servizi di Alvolo Consulting</h3>
            <p>Servizi che offriamo nel tuo processo di investimento immobiliare:</p>
            <ul>
              <li>Ricerca e analisi di mercato</li>
              <li>Ricerca e selezione immobiliare</li>
              <li>Gestione del processo legale</li>
              <li>Consulenza per il finanziamento</li>
              <li>Pianificazione fiscale</li>
              <li>Gestione post-investimento</li>
              <li>Strategie di vendita e uscita</li>
            </ul>
            
            <p>Contatta il nostro team esperto per fare investimenti sicuri e redditizi nel mercato immobiliare italiano.</p>
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