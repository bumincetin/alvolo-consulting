'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu as MenuIcon, X as XIcon } from 'lucide-react' // Icons for mobile menu

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Import SheetClose for closing the sheet
} from '@/components/ui/sheet'

// Placeholder for LanguageSwitcher
const LanguageSwitcherPlaceholder = () => {
  return <div className="px-2 py-1 text-sm border rounded hover:bg-accent">Lang</div>
}

interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  {
    label: 'Hizmetlerimiz',
    children: [
      // These will be populated from Contentlayer or defined structure
      { label: 'Üniversite Başvuru', href: '/hizmetler/universite-basvuru' },
      { label: 'Vize Danışmanlığı', href: '/hizmetler/vize-danismanligi' },
      { label: 'Burs Başvurusu', href: '/hizmetler/burs-basvurusu' },
      { label: 'Karşılama Hizmeti', href: '/hizmetler/karsilama-hizmeti' },
      { label: 'Oturum İzni', href: '/hizmetler/oturum-izni' },
      { label: 'Depolama Hizmeti', href: '/hizmetler/depolama-hizmeti' },
      { label: 'Ev Bulma', href: '/hizmetler/ev-bulma' },
      { label: 'İtalyanca Kursu', href: '/hizmetler/italyanca-kursu' },
      { label: 'Tüm Hizmetler', href: '/hizmetler' },
    ],
  },
  {
    label: 'Bilgi Bankası',
    children: [
      // These will be populated from Contentlayer or defined structure
      { label: 'İtalya'daki Bürokrasi', href: '/bilgi-bankasi/kategori/burokrasi' },
      { label: 'İtalya'daki Burslar', href: '/bilgi-bankasi/kategori/burslar' },
      { label: 'İtalya'daki Bölümler', href: '/bilgi-bankasi/kategori/bolumler' },
      { label: 'İtalya'daki Üniversiteler', href: '/bilgi-bankasi/kategori/universiteler' },
      { label: 'Tüm Yazılar', href: '/bilgi-bankasi' },
    ],
  },
  { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
  {
    label: 'Blog',
    children: [
      // These will be populated from Contentlayer or defined structure
      { label: 'Bizden Haberler', href: '/blog/kategori/bizden-haberler' },
      { label: 'İtalya'da Eğitim', href: '/blog/kategori/italyada-egitim' },
      { label: 'İtalya'da Hayat', href: '/blog/kategori/italyada-hayat' },
      { label: 'Tüm Yazılar', href: '/blog' },
    ],
  },
  { label: 'İletişim', href: '/iletisim' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold font-serif text-primary">
              {/* Replace with your actual logo component or img tag */}
              Cetin Aslan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                      {item.label} ▾
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link href={child.href || '#'}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || '#'}
                  className="text-sm font-medium text-foreground hover:text-primary px-3 py-2 rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
            <LanguageSwitcherPlaceholder />
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <LanguageSwitcherPlaceholder />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 sm:w-80">
                <SheetHeader className="mb-4">
                  <SheetTitle className="text-left">
                    <Link href="/" className="text-2xl font-bold font-serif text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        Cetin Aslan
                    </Link>
                  </SheetTitle>
                   <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <XIcon className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </SheetHeader>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) =>
                    item.children ? (
                      <div key={item.label} className="py-1">
                        <h4 className="px-3 text-sm font-semibold text-muted-foreground">
                          {item.label}
                        </h4>
                        <div className="flex flex-col space-y-1 mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || '#'}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm rounded-md hover:bg-accent"
                          >
                            {child.label}
                          </Link>
                        ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href || '#'}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 