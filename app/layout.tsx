import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bcontamhiep.com'),
  title: {
    default: 'BCONS Central Park Biên Hòa | Căn hộ BCONS Tam Hiệp',
    template: '%s | BCONS Central Park Biên Hòa',
  },
  description: 'Khám phá BCONS Central Park Biên Hòa tại phường Tam Hiệp: vị trí, tiện ích, mặt bằng căn hộ và thông tin tư vấn mới nhất.',
  keywords: ['BCONS Biên Hòa', 'BCONS Central Park', 'BCONS Tam Hiệp', 'căn hộ BCONS Biên Hòa', 'căn hộ Tam Hiệp'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://bcontamhiep.com/',
    siteName: 'BCONS Central Park Biên Hòa',
    title: 'BCONS Central Park Biên Hòa | Căn hộ BCONS Tam Hiệp',
    description: 'Khám phá vị trí, tiện ích, mặt bằng và không gian sống tại BCONS Central Park, Tam Hiệp, Biên Hòa.',
    images: [{ url: '/assets/banner.webp', width: 1600, height: 960, alt: 'Phối cảnh BCONS Central Park tại Biên Hòa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BCONS Central Park Biên Hòa | Căn hộ BCONS Tam Hiệp',
    description: 'Thông tin vị trí, tiện ích, mặt bằng và tư vấn BCONS Central Park Biên Hòa.',
    images: ['/assets/banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="min-h-full scroll-smooth overflow-y-scroll"><body className="m-0 min-h-full bg-[#e8e4dd] font-sans"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://bcontamhiep.com/#website',
          url: 'https://bcontamhiep.com/',
          name: 'BCONS Central Park Biên Hòa',
          inLanguage: 'vi-VN',
        },
        {
          '@type': 'ApartmentComplex',
          '@id': 'https://bcontamhiep.com/#project',
          name: 'BCONS Central Park',
          url: 'https://bcontamhiep.com/',
          description: 'Khu căn hộ BCONS Central Park tại phường Tam Hiệp, Biên Hòa.',
          image: 'https://bcontamhiep.com/assets/banner.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Đường Phan Trung, phường Tam Hiệp',
            addressLocality: 'Biên Hòa',
            addressCountry: 'VN',
          },
          telephone: '+84979083300',
          sameAs: [],
        },
        {
          '@type': 'Organization',
          '@id': 'https://bcontamhiep.com/#organization',
          name: 'BCONS Central Park',
          url: 'https://bcontamhiep.com/',
          logo: 'https://bcontamhiep.com/assets/logo.webp',
          telephone: '+84979083300',
        },
      ],
    }) }} />{process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" /> : null}{process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}</Script> : null}{children}</body></html>
  );
}
