import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Scale, Shield, Feather, Sparkle } from 'lucide-react';
import { STORE_INFO } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

export const metadata: Metadata = {
  title: 'Titanium vs Acetate Eyewear Frames | Crystal Optics',
  description:
    'Compare titanium and acetate optical frames: weight, durability, skin sensitivity, and adjustments at Crystal Optics in Talap, Kannur.',
  alternates: {
    canonical: `${siteUrl}/guides/titanium-vs-acetate-frames`,
  },
  openGraph: {
    title: 'Titanium vs Acetate Eyewear Frames | Crystal Optics',
    description:
      'Compare titanium and acetate optical frames: weight, durability, skin sensitivity, and adjustments at Crystal Optics in Talap, Kannur.',
    url: `${siteUrl}/guides/titanium-vs-acetate-frames`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titanium vs Acetate Eyewear Frames | Crystal Optics',
    description:
      'Compare titanium and acetate optical frames: weight, durability, skin sensitivity, and adjustments at Crystal Optics in Talap, Kannur.',
  },
};

export default function TitaniumVsAcetateGuidePage() {
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
        name: 'Guides',
        item: `${siteUrl}/guides/titanium-vs-acetate-frames`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Titanium vs Acetate Frames',
        item: `${siteUrl}/guides/titanium-vs-acetate-frames`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-10 px-6 max-w-4xl mx-auto">
        {/* Visible Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500 font-mono">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-slate-500">Guides</span>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-semibold" aria-current="page">
              Titanium vs Acetate Frames
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Optical Material Comparison
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            Titanium vs. Acetate Spectacle Frames: Material Comparison
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Understanding the physical properties of titanium and cellulose acetate helps you choose spectacle frames suited for your prescription requirements, daily wear habits, and climate conditions in Kerala.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              1. Understanding Eyewear Frame Materials
            </h2>
            <p>
              Two of the most prevalent materials in contemporary optical dispensing are pure titanium (along with beta-titanium alloys) and cellulose acetate. While both offer longevity and comfort, their underlying material chemistry and physical characteristics differ significantly.
            </p>
            <p>
              Selecting the appropriate material involves evaluating weight tolerance, skin sensitivity, mechanical durability, and aesthetic preference. Neither material is universally superior for every individual; each serves distinct functional requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              2. Titanium Frames: Characteristics and Attributes
            </h2>
            <p>
              Titanium is an elemental metal recognized for its high strength-to-density ratio. In spectacle manufacturing, pure titanium is often used for front rims and bridges, while flexible beta-titanium (an alloy combining titanium with vanadium or aluminum) is utilized for temple arms.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 pl-4 list-disc">
              <li>
                <strong>Exceptional Lightweight Profile:</strong> Titanium frames typically weigh between 9 and 14 grams, making them noticeably lighter than standard metal alloys or dense plastics. For individuals sensitive to pressure on the nasal bridge or ears, this reduction in weight minimizes fatigue during extended wear.
              </li>
              <li>
                <strong>Corrosion Resistance in Humid Climates:</strong> Titanium naturally forms a passive titanium dioxide oxide layer that protects it from atmospheric moisture, perspiration, and salt air. In coastal and tropical regions such as Kannur and Kerala, titanium resists tarnishing and greenish oxidization common in lower-tier copper or nickel frames.
              </li>
              <li>
                <strong>Hypoallergenic Composition:</strong> Pure titanium contains no nickel, making it suitable for wearers who suffer from allergic contact dermatitis or skin irritation triggered by common metal alloys.
              </li>
              <li>
                <strong>Minimalist Aesthetics:</strong> Because titanium possesses high tensile strength, frames can be milled with ultra-thin wire rims or configured into rimless and semi-rimless mountings.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              3. Cellulose Acetate Frames: Characteristics and Attributes
            </h2>
            <p>
              Unlike petroleum-based molded plastics, optical acetate is derived from renewable plant cellulose (primarily cotton flakes and wood pulp). Sheets of acetate are aged, cut, hand-shaped, and tumbled for hours in polishing barrels to produce a smooth, lustrous surface.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 pl-4 list-disc">
              <li>
                <strong>Color Depth and Pattern Complexity:</strong> Acetate allows for intricate layering of pigments, enabling classic tortoiseshell patterns, gradient hues, and translucent crystal tones that maintain their visual richness throughout the depth of the material.
              </li>
              <li>
                <strong>Concealing Strong Lens Prescriptions:</strong> Acetate frames feature wider frame rims with deeper bevel channels. For individuals with moderate to high myopia (negative prescriptions), the frame rim conceals outer lens thickness more effectively than thin metal wires.
              </li>
              <li>
                <strong>Tactile Warmth and Comfort:</strong> Acetate has lower thermal conductivity than metal, meaning it does not feel cold against the skin when picked up and provides a comfortable tactile feel across the nasal bridge.
              </li>
              <li>
                <strong>Thermal Adjustability:</strong> An optician can heat acetate gently on a frame warmer to reshape temple curves, adjust pantoscopic tilt, or contour the bridge to fit unique facial curves precisely.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              4. Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-[#131b2e] font-display">
                  <tr>
                    <th className="p-3 text-left border-b border-slate-200">Attribute</th>
                    <th className="p-3 text-left border-b border-slate-200">Titanium Frames</th>
                    <th className="p-3 text-left border-b border-slate-200">Cellulose Acetate Frames</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Average Weight</td>
                    <td className="p-3 text-slate-700">9g – 14g (Ultra-lightweight)</td>
                    <td className="p-3 text-slate-700">14g – 24g (Substantial feel)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Skin Compatibility</td>
                    <td className="p-3 text-slate-700">100% Hypoallergenic (Nickel-free)</td>
                    <td className="p-3 text-slate-700">Skin-friendly natural bio-polymer</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Corrosion Resistance</td>
                    <td className="p-3 text-slate-700">Complete resistance to sweat and humidity</td>
                    <td className="p-3 text-slate-700">Resistant to moisture; requires cleaning</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Lens Edge Concealment</td>
                    <td className="p-3 text-slate-700">Narrow rims; better for low-to-moderate powers</td>
                    <td className="p-3 text-slate-700">Deep rims; conceals high prescription edges</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Bridge Design</td>
                    <td className="p-3 text-slate-700">Adjustable silicone nose pad arms</td>
                    <td className="p-3 text-slate-700">Fixed saddle or molded keyhole bridge</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              5. How to Decide for Your Needs
            </h2>
            <p>
              When deciding between titanium and acetate, consider your lifestyle and prescription:
            </p>
            <p>
              Choose <strong>titanium</strong> if you wear your spectacles continuously for long working hours, engage in outdoor activities where perspiration is common, prefer an understated minimalist look, or experience skin sensitivities to metal alloys.
            </p>
            <p>
              Choose <strong>acetate</strong> if you prefer bold facial styling, want frame colors that match wardrobe palettes, or have higher prescription powers where thicker lens edges benefit from frame rim concealment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              6. Experience Both Materials in Talap, Kannur
            </h2>
            <p>
              At Crystal Optics in Talap, Kannur, we stock both lightweight titanium models (such as Aero-Titanium X and Void Silver) and hand-polished bio-acetate frames (such as Crystalline 01). You can handle and compare both materials directly at our optical dispensary.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/eyeglasses"
                className="inline-flex items-center gap-2 bg-[#131b2e] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all"
              >
                Browse Frames by Material
              </Link>
              <Link
                href="/guides/choose-frame-for-face-shape"
                className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all"
              >
                Read Face Shape Guide
              </Link>
            </div>
          </section>

        </article>

        {/* Localized Footer Note */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500">
          <p>
            Published by <strong>Crystal Optics</strong>, Optical Store in Talap, Kannur, Kerala 670002. Telephone: {STORE_INFO.phoneDisplay}.
          </p>
        </div>
      </div>
    </>
  );
}
