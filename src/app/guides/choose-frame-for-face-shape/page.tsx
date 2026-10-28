import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Compass, CheckCircle2, Ruler, Eye } from 'lucide-react';
import { STORE_INFO } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crystal-optics.vercel.app';

export const metadata: Metadata = {
  title: 'Guide to Choosing Frames for Face Shape | Crystal Optics',
  description:
    'Optical frame selection guide by facial geometry, bridge sizing, and optical centering at Crystal Optics in Talap, Kannur.',
  alternates: {
    canonical: `${siteUrl}/guides/choose-frame-for-face-shape`,
  },
  openGraph: {
    title: 'Guide to Choosing Frames for Face Shape | Crystal Optics',
    description:
      'Optical frame selection guide by facial geometry, bridge sizing, and optical centering at Crystal Optics in Talap, Kannur.',
    url: `${siteUrl}/guides/choose-frame-for-face-shape`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide to Choosing Frames for Face Shape | Crystal Optics',
    description:
      'Optical frame selection guide by facial geometry, bridge sizing, and optical centering at Crystal Optics in Talap, Kannur.',
  },
};

export default function FaceShapeGuidePage() {
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
        item: `${siteUrl}/guides/choose-frame-for-face-shape`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Frame Selection for Face Shape',
        item: `${siteUrl}/guides/choose-frame-for-face-shape`,
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
              Frame Selection for Face Shape
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00687a] font-bold block">
            Optical Dispensing Guide
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
            How to Choose Eyeglass Frames for Your Face Shape
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Selecting spectacles involves balancing optical precision, anatomical comfort, and geometric proportion. This guide covers how facial dimensions interact with frame structure, bridge construction, and lens centering.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              1. The Principle of Geometric Contrast
            </h2>
            <p>
              In optical dispensing, the traditional method for selecting frame shapes relies on visual opposition. The natural contour of the human face generally displays either curved or angular characteristics. Introducing an opposing silhouette creates structural balance across your facial features.
            </p>
            <p>
              For example, faces characterized by rounded jawlines and equal width-to-height proportions benefit from structured, rectangular, or geometric frame shapes that introduce horizontal definition. Conversely, faces with angular jawlines, square chins, or prominent cheekbones often pair well with round, oval, or softened panto silhouettes that balance strong lines.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              2. Frame Recommendations Across Common Face Shapes
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-display text-lg font-bold text-[#131b2e]">
                  Oval Face Shapes
                </h3>
                <p className="text-sm text-slate-600">
                  Oval faces exhibit balanced proportions with cheekbones slightly wider than the forehead and a gently curved jawline. Most geometric silhouettes work harmoniously on oval faces. The primary consideration is frame width: ensure the outer edge of the frame matches or slightly exceeds the widest part of your cheekbones to maintain natural proportion.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-display text-lg font-bold text-[#131b2e]">
                  Round Face Shapes
                </h3>
                <p className="text-sm text-slate-600">
                  Round faces display similar width and length dimensions with full cheeks and curved jaw contours. Rectangular frames, wayfarer profiles, and angular geometric shapes add vertical definition and lengthen the visual appearance of the face. Thin metal wireframes or bold acetate angles both work effectively when proportioned correctly.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-display text-lg font-bold text-[#131b2e]">
                  Square Face Shapes
                </h3>
                <p className="text-sm text-slate-600">
                  Square faces feature a strong jawline, broad forehead, and straight sides. Rounded and oval spectacle frames, including classic panto shapes, soften linear edges. Frames with a slightly thinner profile or neutral wire rims keep attention focused on the eyes without exaggerating jaw width.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-display text-lg font-bold text-[#131b2e]">
                  Heart and Diamond Face Shapes
                </h3>
                <p className="text-sm text-slate-600">
                  Heart-shaped faces have a wider forehead narrowing toward a pointed chin, while diamond faces have dramatic cheekbones with narrower forehead and jaw lines. Rimless designs, light titanium wireframes, and frames with wider bottom lines balance the upper facial width and bring visual weight lower on the face.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              3. Critical Measurements: Bridge, Pupillary Distance, and Temples
            </h2>
            <p>
              While face shape directs aesthetic balance, structural measurements determine optical performance and physical comfort. Eyewear dimensions are typically printed inside the temple arm in three numbers (for example, 49-21-145 representing lens width, bridge width, and temple length in millimeters).
            </p>
            <ul className="space-y-2 text-sm text-slate-600 pl-4 list-disc">
              <li>
                <strong>Bridge Width (16mm to 23mm):</strong> A frame must rest securely on the nasal bridge without pinching or sliding down. People with shallow or low bridges often achieve better stability with adjustable silicone nose pads on metal frames or specialized keyhole bridges on acetate frames.
              </li>
              <li>
                <strong>Pupillary Distance (PD) Centering:</strong> Your pupil should ideally align with the horizontal center and slightly above the vertical centerline of each lens opening. If the frame is too wide, your eyes appear positioned inward toward the nasal edge, which can cause prismatic distortion in stronger corrective prescriptions.
              </li>
              <li>
                <strong>Temple Length (135mm to 150mm):</strong> The temple arms must extend straight over the ears and bend at roughly a 45-degree angle behind the earlobe without exerting undue lateral pressure on the temples.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              4. Considering Your Lens Prescription Strength
            </h2>
            <p>
              Your corrective prescription directly influences which frame styles are practical. Strong negative prescriptions (high minus for myopia) produce lenses that are thin in the center and thicker at the outer edges. Selecting smaller, rounder, or oval frames reduces the diameter of the lens blank, minimizing edge thickness and optical distortion.
            </p>
            <p>
              Conversely, strong positive prescriptions (high plus for hyperopia) create lenses that are thicker in the optical center. Acetate frames provide a deeper rim groove that naturally hides lens thickness, whereas ultra-thin metal wireframes may expose edge bevels if lens index is not optimized.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#131b2e]">
              5. Testing Frame Fit in Kannur
            </h2>
            <p>
              Nothing substitutes for trying frames on your face. At Crystal Optics in Talap, Kannur, our dispensary staff assist you in evaluating bridge fit, eye centering, and temple tension. Before visiting our showroom, you can also preview frame styles online using our interactive AI face tracking tool.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/virtual-try-on"
                className="inline-flex items-center gap-2 bg-[#131b2e] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all"
              >
                <Sparkles size={14} className="text-[#acedff]" />
                Try Frames Virtually
              </Link>
              <Link
                href="/eyeglasses"
                className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all"
              >
                Browse Eyeglasses Collection
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
