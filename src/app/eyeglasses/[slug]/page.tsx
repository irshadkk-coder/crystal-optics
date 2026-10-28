import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MessageSquare, Phone, Sparkles, Check, ArrowLeft, ShieldCheck, HelpCircle, Crosshair } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    return {
      title: 'Product Not Found | Crystal Optics Kannur',
      description: 'The requested eyewear model was not found at Crystal Optics in Talap, Kannur.',
    };
  }

  const title = `${product.name} | Crystal Optics`;
  const description =
    product.metaDescription ||
    `${product.name} optical frame crafted from ${product.material}. Available at Crystal Optics in Talap, Kannur.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/eyeglasses/${product.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/eyeglasses/${product.id}`,
      type: 'website',
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: `${product.name} optical frame at Crystal Optics Kannur`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const pageUrl = `${siteUrl}/eyeglasses/${product.id}`;
  const whatsappMessage = encodeURIComponent(
    `Hello Crystal Optics! I am inquiring about the ${product.name} frame (${pageUrl}). Could you please share the current retail price and frame availability at your Talap, Kannur store? Thank you.`
  );
  const whatsappUrl = `https://wa.me/919846999966?text=${whatsappMessage}`;

  // Server-rendered Product schema
  // Rule: Offers only if a real INR price exists. Since real prices are unknown and marked with TODO, we do not emit an offers block.
  // TODO: Add offers block with priceCurrency: 'INR' and price once the owner confirms exact retail price in INR.
  // TODO: Add brand field once confirmed whether the frames are Crystal Optics own brand or third-party brands.
  const productSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    // TODO: Replace placeholder image URLs with real product photos hosted on the site.
    image: [product.image],
    category: product.category,
    material: product.material,
  };

  if (typeof product.priceInr === 'number' && !isNaN(product.priceInr)) {
    productSchema.offers = {
      '@type': 'Offer',
      price: product.priceInr,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/eyeglasses/${product.id}`,
    };
  }

  // Breadcrumb schema
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
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `${siteUrl}/eyeglasses/${product.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-8 px-6 max-w-7xl mx-auto">
        {/* Visible Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500 font-mono">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/eyeglasses" className="hover:text-slate-900 transition-colors">
                Eyeglasses
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-semibold" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/eyeglasses"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-semibold"
          >
            <ArrowLeft size={14} /> Back to Eyeglasses
          </Link>
        </div>

        {/* Main Product Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-200 pb-16">
          
          {/* Left Column: Image Display */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 flex flex-col items-center justify-center relative shadow-sm">
            <div className="relative w-full aspect-square max-h-[480px]">
              <Image
                src={product.image}
                alt={`${product.name} frame - ${product.description}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain p-6"
              />
            </div>

            {/* Virtual Try-On link */}
            <div className="mt-6 flex justify-center w-full">
              <Link
                href="/virtual-try-on"
                className="inline-flex items-center gap-2 bg-[#131b2e] hover:bg-slate-800 text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all shadow-md"
              >
                <Sparkles size={14} className="text-[#acedff]" />
                Try {product.name} in Virtual Studio
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative & Action Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {product.badge && (
                <span className="bg-[#00687a] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded inline-block mb-3">
                  {product.badge}
                </span>
              )}
              {/* Exactly one H1 per page */}
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
                {product.name}
              </h1>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-mono mt-1 capitalize">
                {product.style} Style • {product.material} Construction
              </p>
            </div>

            {/* Price display / Notice */}
            <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
              <span className="text-xs uppercase font-mono text-slate-500 font-bold block mb-1">
                Pricing
              </span>
              {typeof product.priceInr === 'number' ? (
                <p className="text-lg font-bold text-[#00687a]">
                  ₹{product.priceInr.toLocaleString('en-IN')}
                </p>
              ) : (
                <p className="text-sm font-semibold text-slate-800">
                  {/* TODO: owner to confirm exact retail INR price for {product.name} */}
                  Price available on enquiry. Contact our Talap store for custom pricing and lens quotes.
                </p>
              )}
              <p className="text-[11px] text-slate-500 mt-1">
                {/* TODO: owner to confirm available lens brands and coating tiers */}
                Prices vary based on prescription power, lens type, and selected coating options.
              </p>
            </div>

            {/* Description */}
            <div className="text-slate-700 text-sm leading-relaxed space-y-3">
              <p>{product.description}</p>
              <p className="text-xs text-slate-500">
                Available at Crystal Optics dispensary in Talap, Kannur. Lens customization and optical center alignment conducted on-site.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md"
              >
                <MessageSquare size={16} />
                Enquire on WhatsApp
              </a>

              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={15} />
                Call now
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Check size={14} className="text-[#00687a]" />
                <span>Zero-Error Lens Edging</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={14} className="text-[#00687a]" />
                <span>Adjustable Silicone Pads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={14} className="text-[#00687a]" />
                <span>Authentic Materials</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={14} className="text-[#00687a]" />
                <span>Kannur Showroom Fitting</span>
              </div>
            </div>

          </div>

        </div>

        {/* Technical Specifications Table */}
        <section className="py-16 max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
              Optical Dimensions & Engineering
            </span>
            <h2 className="font-display text-2xl font-bold text-[#131b2e] mt-1">
              Technical Specifications for {product.name}
            </h2>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold w-1/3">Frame Model</th>
                  <td className="py-3.5 px-6 text-slate-900 font-semibold">{product.name}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold">Frame Material</th>
                  <td className="py-3.5 px-6 text-slate-900 capitalize">{product.material} alloy</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold">Lens Width</th>
                  <td className="py-3.5 px-6 text-slate-900">{product.lensWidth || 'Standard fit'}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold">Bridge Width</th>
                  <td className="py-3.5 px-6 text-slate-900">{product.bridgeWidth || '19-21 mm standard'}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold">Temple Length</th>
                  <td className="py-3.5 px-6 text-slate-900">{product.templeLength || '140-145 mm'}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold">Approximate Weight</th>
                  <td className="py-3.5 px-6 text-slate-900">{product.weight || 'Ultra-lightweight'}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold">Lens Compatibility</th>
                  <td className="py-3.5 px-6 text-slate-900">{product.lensType || 'Single-Vision, Bifocal, Progressive'}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold">Hinge Mechanism</th>
                  <td className="py-3.5 px-6 text-slate-900">{product.hingeSystem || 'Reinforced Multi-Barrel'}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 px-6 font-mono text-xs text-slate-500 uppercase font-semibold">Recommended Face Shape</th>
                  <td className="py-3.5 px-6 text-slate-900 capitalize">{product.faceShape} and versatile contours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
