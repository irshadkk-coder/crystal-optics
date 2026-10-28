import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

export const metadata: Metadata = {
  title: 'Eyeglasses in Kannur | Crystal Optics',
  description:
    'Browse prescription eyeglasses and optical frames at Crystal Optics in Talap, Kannur. Lightweight titanium and bio-acetate frames with custom lenses.',
  alternates: {
    canonical: `${siteUrl}/eyeglasses`,
  },
  openGraph: {
    title: 'Eyeglasses in Kannur | Crystal Optics',
    description:
      'Prescription eyeglasses and lightweight optical frames at Crystal Optics in Talap, Kannur, Kerala.',
    url: `${siteUrl}/eyeglasses`,
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHdWZR_Mlg4uVDnWiIyM6j9LapLFh6cXyE773mrHOppEfELXI-ayuvE88X7ZB8I7gOeGP5VV6VHay6YYy2F0lWfqJaGBHiKlhS57xd9KgdBu_cu8_zwqkBKeyQt-Oq_35xOdkbBm1MArFmyp8YeQITqbzFCFGExaAdSm3opWbzEkchTdHZaxAtgHmmBYq3hQ1UeqcDQt8oYzZFcB63X5nyoJ1t_2niqsZJJYt5XEOsd-0vOMvAZ1ghCZ0AinFMOHUufQ7RV3lczy4',
        width: 1200,
        height: 800,
        alt: 'Eyeglasses and optical frames collection in Talap Kannur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eyeglasses in Kannur | Crystal Optics',
    description:
      'Prescription eyeglasses and lightweight optical frames at Crystal Optics in Talap, Kannur, Kerala.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHdWZR_Mlg4uVDnWiIyM6j9LapLFh6cXyE773mrHOppEfELXI-ayuvE88X7ZB8I7gOeGP5VV6VHay6YYy2F0lWfqJaGBHiKlhS57xd9KgdBu_cu8_zwqkBKeyQt-Oq_35xOdkbBm1MArFmyp8YeQITqbzFCFGExaAdSm3opWbzEkchTdHZaxAtgHmmBYq3hQ1UeqcDQt8oYzZFcB63X5nyoJ1t_2niqsZJJYt5XEOsd-0vOMvAZ1ghCZ0AinFMOHUufQ7RV3lczy4',
    ],
  },
};

export default function EyeglassesPage() {
  const eyeglasses = PRODUCTS.filter((p) => p.category === 'eyeglasses');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Eyeglasses',
        item: `${siteUrl}/eyeglasses`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-10 px-6 max-w-7xl mx-auto">
        {/* Visible Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500 font-mono">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-semibold" aria-current="page">
              Eyeglasses
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Optical Frames & Lenses
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            Eyeglasses in Kannur
          </h1>

          {/* 100+ words unique intro text */}
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pt-1">
            <p>
              At Crystal Optics in Talap, Kannur, we dispense prescription eyeglasses engineered for optical accuracy, daily comfort, and structural durability. Our optical collection comprises frames made from aerospace-grade titanium, hypoallergenic Japanese bio-acetate, and resilient carbon-fiber composites. Whether you require single-vision lenses for reading, bifocal lenses, or progressive multifocal lenses for active daily work, our optical dispensary provides precise pupillary distance and optical center measurements to align each pair to your specific facial geometry.
            </p>
            <p>
              Each frame can be customized with high-index thin lenses, anti-reflective coatings, UV filters, or blue-light blocking options. You can explore our catalog of frames below, view detailed technical specifications for each model, or test how any design looks using our digital virtual try-on studio before visiting our showroom in Talap.
            </p>
          </div>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eyeglasses.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-square bg-slate-50 p-4">
                <Image
                  src={product.image}
                  alt={`${product.name} prescription eyeglasses frame available at Crystal Optics Kannur`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#131b2e] text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
                {product.isBlueLight && (
                  <span className="absolute bottom-3 left-3 bg-cyan-100 text-cyan-900 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    Blue-Light Filter
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
                <div>
                  <h2 className="font-display text-lg font-bold text-[#131b2e]">
                    {product.name}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 capitalize">
                    {product.material} alloy • {product.style} style
                  </p>
                  <p className="text-xs font-semibold text-[#00687a] mt-2">
                    {product.priceDisplay}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex gap-2">
                  <Link
                    href={`/eyeglasses/${product.id}`}
                    className="flex-grow bg-[#131b2e] hover:bg-slate-800 text-white text-center py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/virtual-try-on"
                    aria-label={`Virtual Try-On for ${product.name}`}
                    className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded transition-colors"
                    title="Try virtually"
                  >
                    <Sparkles size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optical Guides Section */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-mono font-bold uppercase text-[#00687a]">Optical Advice</span>
            <h2 className="font-display text-xl font-bold text-[#131b2e] mt-1">
              Helpful Guides for Choosing Eyeglasses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-[#131b2e]">
                Frame Selection by Face Shape
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn how facial proportions, nasal bridge measurements, and pupillary alignment guide spectacle frame choices.
              </p>
              <Link
                href="/guides/choose-frame-for-face-shape"
                className="text-xs font-bold text-[#00687a] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Read Frame Selection Guide <ArrowRight size={12} />
              </Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-[#131b2e]">
                Titanium vs. Acetate Frames
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compare weight, skin sensitivity, humidity resistance, and lens edge bevel concealment between materials.
              </p>
              <Link
                href="/guides/titanium-vs-acetate-frames"
                className="text-xs font-bold text-[#00687a] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Read Material Comparison Guide <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Localized assistance banner */}
        <div className="mt-12 bg-slate-100 rounded-xl p-8 border border-slate-200 text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-display text-xl font-bold text-[#131b2e]">
            Need Prescription Assistance in Kannur?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Visit our optical dispensary in Talap with your doctor's prescription or contact us on WhatsApp to discuss lens choices, high-index options, or frame sizing.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#131b2e] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-slate-800 transition"
            >
              Store Location & Hours
            </Link>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-green-600 transition"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
