import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Eye, MapPin, Phone, Layers, Award, CheckCircle } from 'lucide-react';
import { STORE_INFO } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

// TODO: Verify establishment year and regional scope beyond Talap, Kannur with store owner.
export const metadata: Metadata = {
  title: 'About Crystal Optics | Talap, Kannur Store',
  description:
    'Learn about Crystal Optics in Talap, Kannur. Dedicated to optical dispensing, lightweight spectacle frames, and personalized vision care in Kerala.',
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: 'About Crystal Optics | Optical Store in Kannur',
    description:
      'Optical dispensary and eyewear retailer in Talap, Kannur, Kerala.',
    url: `${siteUrl}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Crystal Optics | Optical Store in Kannur',
    description:
      'Optical dispensary and eyewear retailer in Talap, Kannur, Kerala.',
  },
};

export default function AboutPage() {
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
        name: 'About',
        item: `${siteUrl}/about`,
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
              About Us
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Optical Care & Craftsmanship
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            About Crystal Optics – Optical Dispensary in Talap, Kannur
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {/* TODO: Verify founding date before claiming established */}
            Crystal Optics is a retail optical store in Talap, Kannur selling eyeglasses, frames, lenses, sunglasses and blue-light glasses, with eye tests.
          </p>
        </header>

        {/* Narrative Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            {/* TODO: Verify regional scope beyond Kannur with store owner */}
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              Precision Optical Standards in Kannur
            </h2>
            <p>
              Located in Talap, Kannur, Crystal Optics provides accurate optical dispensing, quality spectacle frames, and durable vision care products. Eyewear should sit comfortably on the nasal bridge, maintain balanced temple tension, and deliver optical clarity across every viewing angle.
            </p>
            <p>
              We source materials meeting rigorous mechanical standards: Grade 5 aerospace titanium alloys for ultra-lightweight strength, and organic Japanese bio-acetate cured for deep translucent finishes. From single-vision reading glasses to complex progressive and bifocal configurations, each lens is calibrated and edged to match the patient’s optical center.
            </p>
            <p>
              Our retail store assists individuals and families with custom frame selection, precision lens fitting, and vision check appointments in Talap, Kannur.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD0breAYC7GBlmiVRIeI3n8OIa40SW3ZuuXS5uhl9tadgSpHjKHjXYmvbS35Pj770vconvgiTaBLH07ROyLrk9tymFuhwZdcgshlTJ7K7B8Tz6krEN4VDN8jQd_wuhDp5TpZJJhAacFQ699pRws8rp4rn0toXZEfK5nOkOK_KJ70DPLVjyydgw7HwaLENOnuEXXh24O1jUdednoXKpmpK7y4cOySl3ewgpDQbJD9-EV9iMVR47sNgO-J8gLV678-Ats5xXhfzdMDw"
              alt="Optical dispensary showroom at Crystal Optics in Talap Kannur"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-t border-slate-200">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00687a]/10 text-[#00687a] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-display text-lg font-bold text-[#131b2e]">Physical Store in Kannur</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We operate exclusively from our registered store in Talap, Kannur, with personal fitting and post-purchase adjustments.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00687a]/10 text-[#00687a] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-display text-lg font-bold text-[#131b2e]">Digital Try-On Tools</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our website features real-time AI face-tracking so you can evaluate frame shapes from home before ordering in store.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00687a]/10 text-[#00687a] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-display text-lg font-bold text-[#131b2e]">Customer Support</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Direct access to our team via WhatsApp and phone for prescription clarifications, frame sizing, and eye test bookings.
            </p>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="mt-12 bg-white rounded-xl p-8 border border-slate-200 text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-display text-xl font-bold text-[#131b2e]">
            Visit Us in Talap, Kannur
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Address: {STORE_INFO.address} • Phone: {STORE_INFO.phoneDisplay}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#131b2e] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all"
            >
              Get Directions
            </Link>
            <Link
              href="/eyeglasses"
              className="border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all"
            >
              Explore Eyeglasses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
