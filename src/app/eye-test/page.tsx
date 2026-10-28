import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { STORE_INFO } from '@/data';
import BookingForm from './BookingForm';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

// TODO: Owner to confirm eye test equipment and whether computerized testing or refraction calibrations are offered.
// TODO: Owner to confirm whether eye tests are complimentary with eyewear orders or have an examination fee.
export const metadata: Metadata = {
  title: 'Book Eye Test in Kannur | Crystal Optics',
  description:
    'Book an eye test at Crystal Optics in Talap, Kannur. Schedule an appointment by calling 098469 99966 or messaging on WhatsApp.',
  alternates: {
    canonical: `${siteUrl}/eye-test`,
  },
  openGraph: {
    title: 'Book Eye Test in Kannur | Crystal Optics, Talap',
    description:
      'Eye test appointments at Crystal Optics in Talap, Kannur, Kerala.',
    url: `${siteUrl}/eye-test`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Eye Test in Kannur | Crystal Optics, Talap',
    description:
      'Eye test appointments at Crystal Optics in Talap, Kannur, Kerala.',
  },
};

export default function EyeTestPage() {
  const eyeTestFaqs = [
    {
      question: 'Where are eye tests conducted?',
      answer: 'Eye tests are conducted at Crystal Optics in Talap, Kannur, Kerala 670002.',
    },
    {
      question: 'How do I book an eye test appointment?',
      answer: 'You can schedule an appointment by calling 098469 99966, messaging on WhatsApp at +91 98469 99966, or using the online reservation form.',
    },
    {
      question: 'What are the available hours for eye check appointments?',
      // TODO: owner to confirm whether store opens on Sundays
      answer: 'Monday to Saturday 10:00 to 19:30. Sunday closed.',
    },
    // TODO: Owner to confirm answers before re-adding these FAQ questions:
    // - "Is an eye test complimentary with eyewear orders?"
    // - "What equipment is used for eye tests?"
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: eyeTestFaqs.map((faq) => ({
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
        name: 'Book Eye Test',
        item: `${siteUrl}/eye-test`,
      },
    ],
  };

  return (
    <>
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
              Book Eye Test
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Vision Care & Appointments
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            Eye Test at Crystal Optics, Talap, Kannur
          </h1>

          {/* TODO: Owner to confirm eye test equipment, optometrist credentials, and whether tests are complimentary with eyewear purchase */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eye tests are conducted at our optical store in Talap, Kannur. To schedule an appointment, call {STORE_INFO.phoneDisplay} or message us on WhatsApp at +91 98469 99966, or select your preferred date and time slot using the reservation form below.
          </p>
        </header>

        {/* Form and Guide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left: Form Wizard Client Component */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-[#131b2e] mb-2">
              Appointment Reservation
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Select your preferred date, session time, and visit details.
            </p>
            <BookingForm />
          </div>

          {/* Right: Helpful Context */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-100 rounded-xl border border-slate-200 p-6 space-y-4">
              <h3 className="font-display text-base font-bold text-[#131b2e]">
                What to Bring to Your Appointment
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#00687a] flex-shrink-0 mt-0.5" />
                  <span>Your current eyeglasses or contact lenses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#00687a] flex-shrink-0 mt-0.5" />
                  <span>Any recent doctor prescription details or slips.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#131b2e] text-white rounded-xl p-6 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#acedff] font-bold">
                Direct Appointment Booking
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Call or WhatsApp our Talap store directly to confirm an eye test slot:
              </p>
              <div className="space-y-1.5 pt-1">
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#acedff]"
                >
                  <Phone size={14} /> Call: {STORE_INFO.phoneDisplay}
                </a>
                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-green-400 hover:underline"
                >
                  WhatsApp: +91 98469 99966
                </a>
              </div>
            </div>
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
              Common questions about eye tests and scheduling at our Talap optical store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eyeTestFaqs.map((faq, idx) => (
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
