import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Eye, Phone, MapPin, Clock, ArrowRight, Sparkles, Navigation, Layers, Store } from 'lucide-react';
import { STORE_INFO, PRODUCTS } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

// TODO: Verify founding year before claiming established; verify brand authorizations before claiming branded.
export const metadata: Metadata = {
  title: 'Opticals in Kannur | Crystal Optics, Talap',
  description:
    'Crystal Optics is an optical store in Talap, Kannur, offering quality prescription eyeglasses, sunglasses, blue-light frames, and lens fitting.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Opticals in Kannur | Crystal Optics, Talap',
    description:
      'Prescription eyeglasses, frames, lenses, and sunglasses at Crystal Optics in Talap, Kannur, Kerala.',
    url: siteUrl,
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzGdUVF-typ2rgLY5lRqixONQ-qU1cD3tdFCj6wYF9_OPofv-DZTSSSDhLRZWzvyLECpSmclNCdLuilkamVm0YTpH1iJpZ8FLbxXaH_flerrHiIlsuIrZ8LIQuQDbGo--sC2Xj71u1LbnJ-ulHxXsFFjEnTxavACaQ_QYONq1OGA5XVcsqhO2x0UturHtY4aA7PyeRO7tTxsO4HADXih4-XPAFAiXR8prUvaQdOZpPCMqXUr06AUOG-29Zg8ZW7iM8afl91R3py7U',
        width: 1200,
        height: 800,
        alt: 'Crystal Optics showroom display and optical frames in Talap Kannur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opticals in Kannur | Crystal Optics, Talap',
    description:
      'Prescription eyeglasses, frames, lenses, and sunglasses at Crystal Optics in Talap, Kannur, Kerala.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzGdUVF-typ2rgLY5lRqixONQ-qU1cD3tdFCj6wYF9_OPofv-DZTSSSDhLRZWzvyLECpSmclNCdLuilkamVm0YTpH1iJpZ8FLbxXaH_flerrHiIlsuIrZ8LIQuQDbGo--sC2Xj71u1LbnJ-ulHxXsFFjEnTxavACaQ_QYONq1OGA5XVcsqhO2x0UturHtY4aA7PyeRO7tTxsO4HADXih4-XPAFAiXR8prUvaQdOZpPCMqXUr06AUOG-29Zg8ZW7iM8afl91R3py7U',
    ],
  },
};

export default function HomePage() {
  // Server-rendered LocalBusiness JSON-LD schema
  // Rule: Only include verified data. Do NOT include geo, priceRange, paymentAccepted, aggregateRating or review unless real verified values are given.
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Optician',
    '@id': `${siteUrl}/#optician`,
    name: STORE_INFO.name,
    url: siteUrl,
    telephone: STORE_INFO.phoneInternational,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Talap',
      addressLocality: 'Kannur',
      addressRegion: STORE_INFO.state,
      postalCode: STORE_INFO.postalCode,
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:30',
      },
    ],
    // TODO: Add sameAs array with verified Google Business Profile, Facebook, and Instagram URLs once supplied by store owner
  };

  const homeFaqs = [
    {
      question: 'Where is Crystal Optics located?',
      answer: 'Crystal Optics is located in Talap, Kannur, Kerala 670002.',
    },
    {
      question: 'What are the store opening hours?',
      // TODO: owner to confirm whether store opens on Sundays
      answer: 'Monday to Saturday 10:00 to 19:30. Sunday closed.',
    },
    {
      question: 'What is the phone number for Crystal Optics?',
      answer: 'The phone number is 098469 99966.',
    },
    {
      question: 'What optical products are available at the store?',
      answer: 'The store offers prescription eyeglasses, sunglasses, and blue-light filtering frames.',
    },
    // TODO: Owner to confirm answers before re-adding these FAQ questions:
    // - "What are the prices for eyeglass frames and lenses?"
    // - "Which eyewear brands do you carry?"
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const featuredFrames = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* Server-rendered JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] w-full flex items-center overflow-hidden bg-[#131b2e] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzGdUVF-typ2rgLY5lRqixONQ-qU1cD3tdFCj6wYF9_OPofv-DZTSSSDhLRZWzvyLECpSmclNCdLuilkamVm0YTpH1iJpZ8FLbxXaH_flerrHiIlsuIrZ8LIQuQDbGo--sC2Xj71u1LbnJ-ulHxXsFFjEnTxavACaQ_QYONq1OGA5XVcsqhO2x0UturHtY4aA7PyeRO7tTxsO4HADXih4-XPAFAiXR8prUvaQdOZpPCMqXUr06AUOG-29Zg8ZW7iM8afl91R3py7U"
            alt="Optical frames and precision eyewear display at Crystal Optics in Talap Kannur"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131b2e] via-[#131b2e]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#acedff] font-bold block">
              Optical Dispensary in Talap, Kannur
            </span>
            
            {/* Exactly one H1 on the page */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Crystal Optics – Optical Store in Kannur
            </h1>
            
            {/* TODO: Verify polarized and specialized lens options with store owner */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Serving individuals, families, and healthcare practices across Kannur with precision optical lenses, titanium and acetate spectacle frames, sunglasses, and protective computer eyewear.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/eyeglasses"
                className="bg-white hover:bg-slate-100 text-[#131b2e] px-7 py-3.5 rounded-full text-xs uppercase font-bold tracking-wider transition-all shadow-md"
              >
                Browse Eyeglasses
              </Link>
              <Link
                href="/virtual-try-on"
                className="bg-transparent hover:bg-white/10 text-white border border-white/80 px-7 py-3.5 rounded-full text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-2"
              >
                <Sparkles size={14} className="text-[#acedff]" />
                Virtual Try-On
              </Link>
              <Link
                href="/contact"
                className="bg-[#00687a] hover:bg-cyan-800 text-white px-7 py-3.5 rounded-full text-xs uppercase font-bold tracking-wider transition-all"
              >
                Visit Our Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Intro Paragraph (~150 words with internal links) */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            About Our Store in Talap
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#131b2e]">
            Your Destination for Eyewear and Optical Care in Kannur
          </h2>
          
          <div className="text-slate-700 text-base leading-relaxed space-y-4">
            <p>
              Crystal Optics is a retail optical store in Talap, Kannur selling eyeglasses, frames, lenses, sunglasses and blue-light glasses, with eye tests. We provide customers across Kannur with a comprehensive selection of vision care products, including prescription <Link href="/eyeglasses" className="text-[#00687a] font-semibold underline underline-offset-2">eyeglasses</Link>, durable lightweight frames, high-protection <Link href="/sunglasses" className="text-[#00687a] font-semibold underline underline-offset-2">sunglasses</Link>, and anti-reflective <Link href="/blue-light-glasses" className="text-[#00687a] font-semibold underline underline-offset-2">blue-light glasses</Link> engineered for digital display comfort. Whether you are updating an existing vision prescription or selecting everyday frames for work or study, our store offers carefully curated materials including titanium and bio-acetate. Customers can preview how frames fit their face using our interactive <Link href="/virtual-try-on" className="text-[#00687a] font-semibold underline underline-offset-2">AI virtual try-on tool</Link> before visiting. We also provide options to <Link href="/eye-test" className="text-[#00687a] font-semibold underline underline-offset-2">book an eye test</Link> consultation at our Talap showroom. Learn more <Link href="/about" className="text-[#00687a] font-semibold underline underline-offset-2">about our store</Link> or stop by for personalized fitting assistance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Eyewear Categories Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold block">
              Curated Eyewear Collections
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
              Explore Optical Styles Available in Kannur
            </h2>
          </div>
          <Link
            href="/eyeglasses"
            className="text-xs uppercase tracking-wider font-bold text-[#00687a] hover:underline flex items-center gap-1"
          >
            View All Frames <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Eyeglasses Card */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-56 bg-slate-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHdWZR_Mlg4uVDnWiIyM6j9LapLFh6cXyE773mrHOppEfELXI-ayuvE88X7ZB8I7gOeGP5VV6VHay6YYy2F0lWfqJaGBHiKlhS57xd9KgdBu_cu8_zwqkBKeyQt-Oq_35xOdkbBm1MArFmyp8YeQITqbzFCFGExaAdSm3opWbzEkchTdHZaxAtgHmmBYq3hQ1UeqcDQt8oYzZFcB63X5nyoJ1t_2niqsZJJYt5XEOsd-0vOMvAZ1ghCZ0AinFMOHUufQ7RV3lczy4"
                alt="Prescription eyeglasses and lightweight optical frames in Kannur"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-[#131b2e]">Prescription Eyeglasses</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Titanium, acetate, and minimalist frames fitted for single-vision, bifocal, and progressive lenses in Talap, Kannur.
                </p>
              </div>
              <Link
                href="/eyeglasses"
                className="text-xs uppercase tracking-wider font-bold text-[#00687a] hover:text-cyan-800 flex items-center gap-1"
              >
                Browse Eyeglasses <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Sunglasses Card */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-56 bg-slate-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb6XvWV7N-l-_7IPt5lVqkGhYUh41t2ObhAzVN4dOhxBB8NUjosEKl1qmAdyHHNGWfz75XVpBgF4v-i7AaQeCDVJgDdkb4tkfmJT6p0wjr7-cGNf0uWGUlQ4lOVl6zyQMz1-rF7eiIUksRkDY-3aYxe7fES9I9JnPYFL_jvtxF87evCfyNCab3nwgjxfQDVedBwcheXTuvnOXZTsVSfYXpeJ5eaJxgb_Gk72Ay4t0cFrhjke77JbcnjjU9pIu6uZZJp70wKwj1B6Q"
                alt="Sunglasses and sun protection shades in Kannur"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-[#131b2e]">Protective Sunglasses</h3>
                {/* TODO: Verify polarized and UV400 ratings with store owner */}
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Scratch-resistant sunglasses and tinted protective shades suited for sunny Kerala weather and driving.
                </p>
              </div>
              <Link
                href="/sunglasses"
                className="text-xs uppercase tracking-wider font-bold text-[#00687a] hover:text-cyan-800 flex items-center gap-1"
              >
                Browse Sunglasses <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Blue Light Card */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-56 bg-slate-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgNycVGFhKPb7uqUapvew6sW77nRc66jYizVuF4kGtGfZ67NzlBrcAhxxXPCWu2erfe7W8XXaUz9C2CzoTIWaBYLX7MfGbMLnBHSHFbyjqhRvD25VmBM6sZx1bFl2fkpuzcz_-o6MjFg4vG9gRXAbJ_YPaQNnN5DTDkAHSvDbFxqxr3iNjf8R4_lj2urp_JYlv94sTpllNaK-lUZAeZNaAu9bXDCEKs4igPSQbVxY70gOP_gm0wvHVfzlNaERy6pI1X2wM7LV54Hk"
                alt="Blue-light filtering glasses for computer screens in Talap Kannur"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-[#131b2e]">Blue-Light Filtering Glasses</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Specialized monomer coatings that reduce digital screen fatigue and glare without amber color distortion.
                </p>
              </div>
              <Link
                href="/blue-light-glasses"
                className="text-xs uppercase tracking-wider font-bold text-[#00687a] hover:text-cyan-800 flex items-center gap-1"
              >
                Browse Blue-Light <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Featured Frames with Product Links */}
      <section className="py-16 px-6 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
              Precision Engineering
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
              Featured Frame Models
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Explore individual frame specifications, materials, and dimension details available at our Talap showroom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFrames.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-square bg-slate-50 p-4">
                  <Image
                    src={product.image}
                    alt={`${product.name} optical frame available at Crystal Optics Kannur`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#131b2e] text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
                  <div>
                    <h3 className="font-display text-base font-bold text-[#131b2e]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 capitalize">
                      Material: {product.material} alloy
                    </p>
                    <p className="text-xs font-semibold text-[#00687a] mt-2">
                      {product.priceDisplay}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex gap-2">
                    <Link
                      href={`/eyeglasses/${product.id}`}
                      className="flex-grow bg-[#131b2e] hover:bg-slate-800 text-white text-center py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                    >
                      View Specs
                    </Link>
                    <Link
                      href="/virtual-try-on"
                      aria-label={`Virtual Try-On for ${product.name}`}
                      className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded transition-colors"
                      title="Try this frame virtually"
                    >
                      <Sparkles size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Address, Phone, Hours (Real Text) & Map Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details (Real Text NAP) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
                Find Us in Kannur
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
                Store Location & Hours
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                We are conveniently located in Talap, Kannur, with parking accessibility and optical fittings available Monday through Saturday.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#00687a] flex-shrink-0 mt-1" size={18} />
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 font-bold">Store Address</h3>
                  <address className="not-italic text-sm text-slate-800 font-medium mt-0.5">
                    <strong>{STORE_INFO.name}</strong><br />
                    {STORE_INFO.address}
                  </address>
                  <p className="text-xs text-slate-500 mt-1">Plus Code: {STORE_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-[#00687a] flex-shrink-0 mt-1" size={18} />
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 font-bold">Telephone & Inquiries</h3>
                  <p className="text-sm text-slate-800 font-medium mt-0.5">
                    <a
                      href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-[#00687a] hover:underline font-semibold"
                    >
                      {STORE_INFO.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-slate-500">Available during operating hours for prescription updates and orders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-[#00687a] flex-shrink-0 mt-1" size={18} />
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 font-bold">Operating Hours</h3>
                  <p className="text-sm text-slate-800 font-medium mt-0.5">
                    {STORE_INFO.hoursDisplay}
                  </p>
                  {/* TODO: Confirm if store provides Sunday hours or emergency optical replacements */}
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={STORE_INFO.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#131b2e] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all shadow-sm"
              >
                <Navigation size={14} />
                Get Directions
              </a>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all shadow-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm h-[400px]">
            <iframe
              title="Google Map showing Crystal Optics location in Talap Kannur Kerala"
              src={STORE_INFO.googleMapsEmbedQuery}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* 6. Key Facts at a Glance (Plain Text) */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block mb-2">
            Store Summary
          </span>
          <h2 className="font-display text-2xl font-bold text-[#131b2e] mb-4">
            Key Facts About Crystal Optics
          </h2>
          <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>Crystal Optics is an optical store located in Talap, Kannur, Kerala.</p>
            <p>The store address is Talap, Kannur, Kerala 670002, India.</p>
            <p>The store telephone number is 098469 99966.</p>
            {/* TODO: owner to confirm whether store opens on Sundays */}
            <p>Opening hours: Monday to Saturday 10:00 to 19:30. Sunday closed.</p>
            <p>Store services include prescription eyeglasses dispensing, spectacle frame fitting, precision lenses, sunglasses, blue-light protective glasses, and eye tests.</p>
          </div>
        </div>
      </section>

      {/* 7. Helpful Eyewear Guides */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="max-w-3xl mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Optical Advice & Education
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
            Eyewear Guides
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Read our guides on selecting frame geometries and comparing optical frame materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-[#00687a]">Frame Fitting</span>
              <h3 className="font-display text-xl font-bold text-[#131b2e]">
                How to Choose Eyeglass Frames for Your Face Shape
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn how facial geometry, bridge sizing, pupillary distance centering, and prescription power influence spectacle frame selection.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                href="/guides/choose-frame-for-face-shape"
                className="text-xs uppercase tracking-wider font-bold text-[#00687a] hover:underline flex items-center gap-1"
              >
                Read Frame Guide <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-[#00687a]">Material Comparison</span>
              <h3 className="font-display text-xl font-bold text-[#131b2e]">
                Titanium vs. Acetate Spectacle Frames: Material Comparison
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Compare weight, skin sensitivity, corrosion resistance, and lens edge concealment between pure titanium and cellulose bio-acetate.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                href="/guides/titanium-vs-acetate-frames"
                className="text-xs uppercase tracking-wider font-bold text-[#00687a] hover:underline flex items-center gap-1"
              >
                Read Material Guide <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="max-w-3xl mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Questions & Answers
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Clear, direct answers to common questions about Crystal Optics in Talap, Kannur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homeFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-2">
              <h3 className="font-display text-base font-bold text-[#131b2e]">
                {faq.question}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
