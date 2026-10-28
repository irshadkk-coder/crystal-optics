import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, MessageSquare, Compass, Navigation, Car, Building2 } from 'lucide-react';
import { STORE_INFO } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

export const metadata: Metadata = {
  title: 'Contact & Directions | Crystal Optics, Talap, Kannur',
  description:
    'Visit Crystal Optics in Talap, Kannur, Kerala 670002. Store address, phone 098469 99966, operating hours, Google Maps directions, and WhatsApp support.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact & Directions | Crystal Optics, Talap, Kannur',
    description:
      'Store location, phone, directions, and hours for Crystal Optics in Talap, Kannur, Kerala.',
    url: `${siteUrl}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Directions | Crystal Optics, Talap, Kannur',
    description:
      'Store location, phone, directions, and hours for Crystal Optics in Talap, Kannur, Kerala.',
  },
};

export default function ContactPage() {
  // Server-rendered LocalBusiness JSON-LD schema
  // Rule: Do NOT include geo, priceRange, paymentAccepted, aggregateRating or review unless real verified values are given.
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Optician',
    '@id': `${siteUrl}/contact/#optician`,
    name: STORE_INFO.name,
    url: `${siteUrl}/contact`,
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

  const contactFaqs = [
    {
      question: 'What is the exact store address for Crystal Optics?',
      answer: 'Crystal Optics is located in Talap, Kannur, Kerala 670002.',
    },
    {
      question: 'How can I reach Crystal Optics by phone?',
      answer: 'You can reach the store by calling 098469 99966.',
    },
    {
      question: 'What are the weekly store hours?',
      // TODO: owner to confirm whether store opens on Sundays
      answer: 'Monday to Saturday 10:00 to 19:30. Sunday closed.',
    },
    {
      question: 'What optical services does Crystal Optics provide?',
      answer: 'Crystal Optics provides prescription eyewear dispensing, spectacle frame selection, and lens fitting.',
    },
    // TODO: Owner to confirm answer before re-adding this FAQ question:
    // - "Is customer parking available at the store?"
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: contactFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

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
        name: 'Contact & Directions',
        item: `${siteUrl}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
              Contact & Directions
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-12 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Visit Our Optical Dispensary
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            Contact & Directions – Crystal Optics, Talap, Kannur
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Crystal Optics is situated in Talap, Kannur, providing prescription eyewear dispensing, frame selection, and lens consultations. Reach out via phone or WhatsApp, or use the interactive map below for driving directions.
          </p>
        </header>

        {/* Main Grid: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left: Contact Info & Hours Table */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* NAP Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-5">
              <h2 className="font-display text-xl font-bold text-[#131b2e] border-b border-slate-100 pb-3">
                Store Details (NAP)
              </h2>

              <div className="flex items-start gap-3">
                <MapPin className="text-[#00687a] flex-shrink-0 mt-1" size={18} />
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 font-bold">Address</h3>
                  <address className="not-italic text-sm text-slate-900 font-medium mt-0.5 leading-relaxed">
                    <strong>{STORE_INFO.name}</strong><br />
                    {STORE_INFO.address}
                  </address>
                  <p className="text-xs text-slate-500 mt-1">Plus Code: {STORE_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-[#00687a] flex-shrink-0 mt-1" size={18} />
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 font-bold">Click-to-Call Phone</h3>
                  <p className="text-sm font-semibold mt-0.5">
                    <a
                      href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-[#00687a] hover:underline"
                    >
                      {STORE_INFO.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Call for frame availability or prescription consultations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 font-bold">WhatsApp Direct Message</h3>
                  <p className="text-sm font-semibold mt-0.5">
                    <a
                      href={STORE_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      +91 98469 99966
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Fast inquiries, quotes, and prescription uploads.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={STORE_INFO.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow inline-flex items-center justify-center gap-2 bg-[#131b2e] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full transition-all shadow-sm"
                >
                  <Navigation size={14} />
                  Get Directions on Maps
                </a>
                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full transition-all shadow-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="text-[#00687a]" size={18} />
                <h2 className="font-display text-lg font-bold text-[#131b2e]">
                  Weekly Operating Hours
                </h2>
              </div>

              <table className="w-full text-xs text-left">
                <tbody className="divide-y divide-slate-100">
                  <tr className="py-2">
                    <td className="py-2.5 font-medium text-slate-800">Monday</td>
                    <td className="py-2.5 text-right font-semibold text-slate-900">10:00 AM – 7:30 PM</td>
                  </tr>
                  <tr className="py-2">
                    <td className="py-2.5 font-medium text-slate-800">Tuesday</td>
                    <td className="py-2.5 text-right font-semibold text-slate-900">10:00 AM – 7:30 PM</td>
                  </tr>
                  <tr className="py-2">
                    <td className="py-2.5 font-medium text-slate-800">Wednesday</td>
                    <td className="py-2.5 text-right font-semibold text-slate-900">10:00 AM – 7:30 PM</td>
                  </tr>
                  <tr className="py-2">
                    <td className="py-2.5 font-medium text-slate-800">Thursday</td>
                    <td className="py-2.5 text-right font-semibold text-slate-900">10:00 AM – 7:30 PM</td>
                  </tr>
                  <tr className="py-2">
                    <td className="py-2.5 font-medium text-slate-800">Friday</td>
                    <td className="py-2.5 text-right font-semibold text-slate-900">10:00 AM – 7:30 PM</td>
                  </tr>
                  <tr className="py-2">
                    <td className="py-2.5 font-medium text-slate-800">Saturday</td>
                    <td className="py-2.5 text-right font-semibold text-slate-900">10:00 AM – 7:30 PM</td>
                  </tr>
                  <tr className="py-2 bg-slate-50">
                    <td className="py-2.5 font-medium text-slate-500">Sunday</td>
                    {/* TODO: owner to confirm whether store opens on Sundays */}
                    <td className="py-2.5 text-right font-semibold text-red-600">Closed</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Hours are subject to owner confirmation. Call before visiting during festival holidays.
              </p>
            </div>

          </div>

          {/* Right: Embedded Map */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm h-[580px] flex flex-col">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-xs">
              <span className="font-mono uppercase text-slate-600 font-bold">
                Location: Talap, Kannur, Kerala
              </span>
              <a
                href={STORE_INFO.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00687a] font-semibold hover:underline flex items-center gap-1"
              >
                Open in Google Maps App <Navigation size={12} />
              </a>
            </div>

            <div className="flex-grow w-full h-full relative">
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

        </div>

        {/* Key Facts at a Glance (Plain Text) */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 mb-16">
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

        {/* Frequently Asked Questions */}
        <section className="border-t border-slate-200 pt-12 mb-16">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
              Direct Answers
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Common questions regarding store visits, contact methods, and location details in Talap, Kannur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactFaqs.map((faq, idx) => (
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
      </div>
    </>
  );
}
