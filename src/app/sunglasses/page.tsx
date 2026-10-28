import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Sun, Shield } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

// TODO: Verify UV400 and polarization certifications with store owner before claiming.
export const metadata: Metadata = {
  title: 'Sunglasses in Kannur | Crystal Optics',
  description:
    'Explore sunglasses in Talap, Kannur at Crystal Optics. Anti-glare tinted lenses, durable frames, and sunwear options.',
  alternates: {
    canonical: `${siteUrl}/sunglasses`,
  },
  openGraph: {
    title: 'Sunglasses in Kannur | Crystal Optics',
    description:
      'Quality sunglasses and sun-protective shades at Crystal Optics in Talap, Kannur, Kerala.',
    url: `${siteUrl}/sunglasses`,
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb6XvWV7N-l-_7IPt5lVqkGhYUh41t2ObhAzVN4dOhxBB8NUjosEKl1qmAdyHHNGWfz75XVpBgF4v-i7AaQeCDVJgDdkb4tkfmJT6p0wjr7-cGNf0uWGUlQ4lOVl6zyQMz1-rF7eiIUksRkDY-3aYxe7fES9I9JnPYFL_jvtxF87evCfyNCab3nwgjxfQDVedBwcheXTuvnOXZTsVSfYXpeJ5eaJxgb_Gk72Ay4t0cFrhjke77JbcnjjU9pIu6uZZJp70wKwj1B6Q',
        width: 1200,
        height: 800,
        alt: 'Sunglasses collection in Talap Kannur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunglasses in Kannur | Crystal Optics',
    description:
      'Quality sunglasses and sun-protective shades at Crystal Optics in Talap, Kannur, Kerala.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCb6XvWV7N-l-_7IPt5lVqkGhYUh41t2ObhAzVN4dOhxBB8NUjosEKl1qmAdyHHNGWfz75XVpBgF4v-i7AaQeCDVJgDdkb4tkfmJT6p0wjr7-cGNf0uWGUlQ4lOVl6zyQMz1-rF7eiIUksRkDY-3aYxe7fES9I9JnPYFL_jvtxF87evCfyNCab3nwgjxfQDVedBwcheXTuvnOXZTsVSfYXpeJ5eaJxgb_Gk72Ay4t0cFrhjke77JbcnjjU9pIu6uZZJp70wKwj1B6Q',
    ],
  },
};

export default function SunglassesPage() {
  const sunglasses = PRODUCTS.filter((p) => p.isSunglasses || p.category === 'sunglasses');

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
        name: 'Sunglasses',
        item: `${siteUrl}/sunglasses`,
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
              Sunglasses
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 max-w-3xl space-y-4">
          {/* TODO: Verify UV ratings and polarization options with store owner */}
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Sunwear & Protective Eyewear
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            Sunglasses in Kannur
          </h1>

          {/* 100+ words unique intro text */}
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pt-1">
            {/* TODO: Verify UV400, polarization, and regional scope with store owner */}
            <p>
              Sunwear in coastal Kerala requires durable frames and comfortable optical protection. At Crystal Optics in Talap, Kannur, our sunglasses collection is assembled to shield eyes from bright solar glare, reflective outdoor surfaces, and daily sun exposure. Our sun lenses provide shade and eye comfort for driving and outdoor activities across Kannur.
            </p>
            <p>
              For motorists traveling the NH 66 corridor or daily commuters across Kannur, our sunglasses feature tinted filter options designed to reduce harsh glare from roads and windshields, improving visual contrast. We also provide prescription sunglasses options fitted to your specific diopter requirements so you enjoy clear eyesight and comfortable outdoor protection. Explore our featured sunglasses below or visit our Talap dispensary to try pairs in person.
            </p>
          </div>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sunglasses.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-square bg-slate-50 p-4">
                <Image
                  src={product.image}
                  alt={`${product.name} sunglasses available at Crystal Optics Kannur`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#131b2e] text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
                {/* TODO: Verify UV and polarization specifications with store owner */}
                <span className="absolute bottom-3 left-3 bg-amber-100 text-amber-900 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <Sun size={10} /> Sun Protection
                </span>
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
                    {product.material} alloy • {product.lensType || 'Sun Lens'}
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

        {/* Feature Highlight */}
        {/* TODO: Verify UV rating and polarization features with store owner */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Shield className="text-[#00687a]" size={22} />
            <h3 className="font-display text-base font-bold text-[#131b2e]">Sun Protection Lenses</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Protective tinted lenses that shield eyes from harsh sunlight, keeping your vision comfortable under Kerala sunshine.
            </p>
          </div>
          <div className="space-y-2">
            <Sun className="text-[#00687a]" size={22} />
            <h3 className="font-display text-base font-bold text-[#131b2e]">Anti-Glare Tinting</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tinted filters to help reduce reflective glare off vehicle surfaces, roads, and bright open surroundings around Kannur.
            </p>
          </div>
          <div className="space-y-2">
            <Sparkles className="text-[#00687a]" size={22} />
            <h3 className="font-display text-base font-bold text-[#131b2e]">Prescription Sunwear</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Custom prescription lenses can be calibrated and edged for almost any frame profile in our Talap dispensary.
            </p>
          </div>
        </div>

        {/* Optical Guides Callout */}
        <div className="mt-12 bg-slate-50 rounded-xl p-8 border border-slate-200 max-w-4xl mx-auto space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold uppercase text-[#00687a]">Eyewear Advice</span>
            <h2 className="font-display text-xl font-bold text-[#131b2e] mt-1">
              Selecting the Right Sunglasses Frame
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-[#131b2e]">
                Frame Proportions for Face Shapes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Understand how silhouette contrast and cheekbone coverage guide your sunglass frame choices.
              </p>
              <Link
                href="/guides/choose-frame-for-face-shape"
                className="text-xs font-bold text-[#00687a] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Read Face Shape Guide <ArrowRight size={12} />
              </Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-[#131b2e]">
                Titanium vs. Acetate Sunglasses
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compare lightweight titanium endurance against rich acetate coloration for sunwear.
              </p>
              <Link
                href="/guides/titanium-vs-acetate-frames"
                className="text-xs font-bold text-[#00687a] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Read Material Guide <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
