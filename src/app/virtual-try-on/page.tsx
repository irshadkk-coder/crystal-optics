import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Camera, Shield, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import VirtualTryOnClient from './VirtualTryOnClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

export const metadata: Metadata = {
  title: 'Virtual Eyewear Try-On | Crystal Optics',
  description:
    'Try on eyeglasses and sunglasses online using real-time AI face tracking at Crystal Optics in Talap, Kannur. Preview frame widths, colors, and styles.',
  alternates: {
    canonical: `${siteUrl}/virtual-try-on`,
  },
  openGraph: {
    title: 'Virtual Try-On Eyewear Studio | Crystal Optics Kannur',
    description:
      'Real-time AI augmented reality frame fitting tool by Crystal Optics, Talap, Kannur.',
    url: `${siteUrl}/virtual-try-on`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Try-On Eyewear Studio | Crystal Optics Kannur',
    description:
      'Real-time AI augmented reality frame fitting tool by Crystal Optics, Talap, Kannur.',
  },
};

export default function VirtualTryOnPage() {
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
        name: 'Virtual Try-On',
        item: `${siteUrl}/virtual-try-on`,
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
              Virtual Try-On
            </li>
          </ol>
        </nav>

        {/* Page Header (SSR Crawlable HTML) */}
        <header className="mb-10 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block flex items-center gap-1.5">
            <Sparkles size={14} /> Augmented Reality Eyewear Fitting
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            Optics AI Virtual Try-On Studio
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experience real-time augmented reality eyewear fitting directly in your web browser. Powered by MediaPipe 468-point face mesh tracking, our virtual try-on studio enables shoppers across Kannur and Kerala to test frame shapes, sizes, and colors on their own faces or preloaded models before ordering.
          </p>
        </header>

        {/* Client-Side AR Try-On Studio */}
        <div className="mb-16">
          <VirtualTryOnClient />
        </div>

        {/* Instructions & Technology Guide (Crawlable Rich Text) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00687a]/10 text-[#00687a] flex items-center justify-center">
              <Camera size={20} />
            </div>
            <h2 className="font-display text-lg font-bold text-[#131b2e]">
              Live Webcam or Photo Upload
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enable your device camera for real-time head-motion tracking or upload a clear front-facing portrait to see frames rendered instantaneously.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00687a]/10 text-[#00687a] flex items-center justify-center">
              <SlidersHorizontal size={20} />
            </div>
            <h2 className="font-display text-lg font-bold text-[#131b2e]">
              Automated Pupil Calibration
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              MediaPipe algorithms detect interpupillary distance and temple inclination angles to scale glasses realistically to your facial dimensions.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00687a]/10 text-[#00687a] flex items-center justify-center">
              <Shield size={20} />
            </div>
            <h2 className="font-display text-lg font-bold text-[#131b2e]">
              Privacy-First Processing
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              All facial landmark recognition and image processing occur strictly locally on your device hardware; zero camera video streams are ever stored or uploaded.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
