import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Monitor, Eye, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

// TODO: Verify with store owner whether non-prescription blue-light frames are stocked or prescription only.
export const metadata: Metadata = {
  title: 'Blue-Light Glasses | Crystal Optics Kannur',
  description:
    'Protect your eyes from digital screen strain with blue-light filtering glasses at Crystal Optics in Talap, Kannur. Lens customization available.',
  alternates: {
    canonical: `${siteUrl}/blue-light-glasses`,
  },
  openGraph: {
    title: 'Blue-Light Glasses in Kannur | Crystal Optics',
    description:
      'Computer screen and digital protection glasses at Crystal Optics in Talap, Kannur, Kerala.',
    url: `${siteUrl}/blue-light-glasses`,
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgNycVGFhKPb7uqUapvew6sW77nRc66jYizVuF4kGtGfZ67NzlBrcAhxxXPCWu2erfe7W8XXaUz9C2CzoTIWaBYLX7MfGbMLnBHSHFbyjqhRvD25VmBM6sZx1bFl2fkpuzcz_-o6MjFg4vG9gRXAbJ_YPaQNnN5DTDkAHSvDbFxqxr3iNjf8R4_lj2urp_JYlv94sTpllNaK-lUZAeZNaAu9bXDCEKs4igPSQbVxY70gOP_gm0wvHVfzlNaERy6pI1X2wM7LV54Hk',
        width: 1200,
        height: 800,
        alt: 'Blue light filtering computer glasses in Talap Kannur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue-Light Glasses in Kannur | Crystal Optics',
    description:
      'Computer screen and digital protection glasses at Crystal Optics in Talap, Kannur, Kerala.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgNycVGFhKPb7uqUapvew6sW77nRc66jYizVuF4kGtGfZ67NzlBrcAhxxXPCWu2erfe7W8XXaUz9C2CzoTIWaBYLX7MfGbMLnBHSHFbyjqhRvD25VmBM6sZx1bFl2fkpuzcz_-o6MjFg4vG9gRXAbJ_YPaQNnN5DTDkAHSvDbFxqxr3iNjf8R4_lj2urp_JYlv94sTpllNaK-lUZAeZNaAu9bXDCEKs4igPSQbVxY70gOP_gm0wvHVfzlNaERy6pI1X2wM7LV54Hk',
    ],
  },
};

export default function BlueLightGlassesPage() {
  const blueLightProducts = PRODUCTS.filter((p) => p.isBlueLight || p.lensType?.toLowerCase().includes('blue-light'));

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
        name: 'Blue-Light Glasses',
        item: `${siteUrl}/blue-light-glasses`,
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
              Blue-Light Glasses
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Digital Eye Strain Protection
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            Blue-Light Glasses in Kannur
          </h1>

          {/* 100+ words unique intro text */}
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pt-1">
            <p>
              With professionals, students, and educators in Kannur spending extended hours in front of laptops, tablets, and smartphones, digital eye strain has become an everyday concern. Symptoms including dry eyes, blurred vision, headache discomfort, and disrupted sleep cycles often stem from high-energy visible (HEV) blue light emitted by modern LED displays. At Crystal Optics in Talap, Kannur, we provide purpose-built blue-light filtering eyewear designed to alleviate ocular fatigue during long working sessions.
            </p>
            <p>
              Our blue-light filtering lenses integrate targeted optical absorbers into the lens substrate alongside anti-reflective multi-coatings. Unlike basic amber-tinted computer glasses, our lenses retain 99% color neutrality, ensuring designers and office professionals perceive true-to-life colors on screen. {/* TODO: Verify with store owner whether non-prescription lenses are sold alongside prescription lenses */}These lenses can be fitted to your specific vision and screen-use requirements. Explore our blue-light models below or consult our optometrists in Talap for personalized advice.
            </p>
          </div>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blueLightProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-square bg-slate-50 p-4">
                <Image
                  src={product.image}
                  alt={`${product.name} blue light glasses available at Crystal Optics Kannur`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-cyan-900 text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <Monitor size={10} /> Blue-Filter
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
                    {product.material} alloy • {product.lensType}
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

        {/* Benefits List */}
        <div className="mt-16 bg-slate-100 rounded-xl p-8 border border-slate-200 max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-xl font-bold text-[#131b2e]">
            Key Advantages of Blue-Light Lenses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="text-[#00687a] flex-shrink-0 mt-0.5" size={16} />
              <span>Reduces digital eye strain and dry-eye symptoms during screen work.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="text-[#00687a] flex-shrink-0 mt-0.5" size={16} />
              <span>Minimizes screen glare with anti-reflective vacuum coatings.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="text-[#00687a] flex-shrink-0 mt-0.5" size={16} />
              {/* TODO: Verify non-prescription availability with store owner */}
              <span>Customized blue-light filtering options for daily visual comfort.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="text-[#00687a] flex-shrink-0 mt-0.5" size={16} />
              <span>Preserves natural sleep rhythms by reducing late-night blue exposure.</span>
            </div>
          </div>
        </div>

        {/* Optical Guides Section */}
        <div className="mt-12 bg-white rounded-xl p-8 border border-slate-200 shadow-sm max-w-3xl mx-auto space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-mono font-bold uppercase text-[#00687a]">Optical Advice</span>
            <h2 className="font-display text-xl font-bold text-[#131b2e] mt-1">
              Helpful Guides for Frame Fitting
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold text-[#131b2e]">
                Frame Selection by Face Shape
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose comfortable computer frame dimensions that match your facial geometry and desk posture.
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
                Titanium vs. Acetate Frames
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compare ultra-lightweight titanium vs. bio-acetate for all-day computer glasses wear.
              </p>
              <Link
                href="/guides/titanium-vs-acetate-frames"
                className="text-xs font-bold text-[#00687a] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Read Material Comparison <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
