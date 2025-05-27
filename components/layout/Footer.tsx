'use client'

import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin, // Using Linkedin as a placeholder for Whatsapp for now, or you can find a dedicated Whatsapp icon
  Github, // Example, replace with actual social links
} from 'lucide-react'

// Re-using NavItem interface and navItems from Navbar for consistency, or define separately
// For simplicity, let's assume navItems could be imported or redefined here if needed for footer links
const footerNavSections = [
  {
    title: 'Site Map',
    links: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Hizmetlerimiz', href: '/hizmetler' },
      { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
      { label: 'İletişim', href: '/iletisim' },
    ],
  },
  {
    title: 'Kaynaklar',
    links: [
      { label: 'Bilgi Bankası', href: '/bilgi-bankasi' },
      { label: 'Blog', href: '/blog' },
      // Add other resource links like FAQ, Terms, Privacy etc.
    ],
  },
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/yourprofile' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/yourprofile' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com/yourprofile' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/yourchannel' },
  { name: 'WhatsApp', icon: Linkedin, href: 'https://wa.me/yourphonenumber' }, // Placeholder icon
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="section-padding py-12"> {/* Uses .section-padding from globals.css */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Company Info (Optional) */}
          <div className="mb-6 md:mb-0 md:col-span-1 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold font-serif text-primary mb-2 block">
              Cetin Aslan
            </Link>
            <p className="text-sm">
              İtalya'da eğitim hayallerinizi gerçeğe dönüştürmek için buradayız.
            </p>
            {/* Add address or other info if needed */}
          </div>

          {/* Navigation Links */}
          {footerNavSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Cetin Aslan Danismanlik. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 