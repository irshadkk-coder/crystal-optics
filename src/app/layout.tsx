import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#131b2e',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Opticals in Kannur | Crystal Optics, Talap',
  description:
    'Crystal Optics is a retail optical store in Talap, Kannur offering prescription eyeglasses, spectacle frames, lenses, sunglasses, and blue-light glasses.',
  keywords: [
    'opticals in kannur',
    'optical store talap kannur',
    'eyeglasses in kannur',
    'sunglasses in kannur',
    'blue light glasses kannur',
    'crystal optics kannur',
    'eye test talap kannur',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Crystal Optics',
    title: 'Opticals in Kannur | Crystal Optics, Talap',
    description:
      'Prescription eyeglasses, frames, lenses, and sunglasses at Crystal Optics in Talap, Kannur, Kerala.',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Crystal Optics - Optical Store in Talap, Kannur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opticals in Kannur | Crystal Optics, Talap',
    description:
      'Prescription eyeglasses, frames, lenses, and sunglasses at Crystal Optics in Talap, Kannur, Kerala.',
    images: ['/favicon.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#acedff]/30 font-sans antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
