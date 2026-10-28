import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, MessageSquare, Compass } from 'lucide-react';
import { STORE_INFO } from '@/data';

export default function Footer() {
  return (
    <footer className="w-full bg-[#131b2e] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Store Bio & Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold tracking-tight text-white block">
                CRYSTAL OPTICS
              </span>
              <span className="text-xs uppercase tracking-widest text-[#acedff] font-semibold">
                Optical Store in Talap, Kannur
              </span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Crystal Optics provides prescription eyeglasses, handcrafted frames, precision optical lenses, blue-light protection glasses, and sunglasses in Talap, Kannur, Kerala.
            </p>
            {/* TODO: Link authentic Google Business Profile reviews once verified Google Review URL is provided */}
            <div className="pt-2 text-xs text-slate-400">
              <p>📍 Plus Code: {STORE_INFO.plusCode}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Eyewear & Collections
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/eyeglasses" className="hover:text-white transition-colors">
                  Eyeglasses in Kannur
                </Link>
              </li>
              <li>
                <Link href="/sunglasses" className="hover:text-white transition-colors">
                  Sunglasses in Kannur
                </Link>
              </li>
              <li>
                <Link href="/blue-light-glasses" className="hover:text-white transition-colors">
                  Blue-Light Glasses
                </Link>
              </li>
              <li>
                <Link href="/virtual-try-on" className="hover:text-[#acedff] transition-colors font-medium">
                  AI Virtual Try-On Studio
                </Link>
              </li>
              <li>
                <Link href="/eye-test" className="hover:text-white transition-colors">
                  Book an Eye Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Information */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Information & Guides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Crystal Optics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Store Location
                </Link>
              </li>
              <li>
                <Link href="/guides/choose-frame-for-face-shape" className="hover:text-white transition-colors">
                  Frame Selection for Face Shape
                </Link>
              </li>
              <li>
                <Link href="/guides/titanium-vs-acetate-frames" className="hover:text-white transition-colors">
                  Titanium vs Acetate Frames
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Full Verified NAP (Real Text) */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Store Location & Contact (NAP)
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#acedff] flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  <strong className="text-white block">{STORE_INFO.name}</strong>
                  {STORE_INFO.address}
                </address>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#acedff] flex-shrink-0" />
                <span>
                  Phone:{' '}
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-[#acedff] font-semibold underline underline-offset-2"
                  >
                    {STORE_INFO.phoneDisplay}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-green-400 flex-shrink-0" />
                <span>
                  WhatsApp:{' '}
                  <a
                    href={STORE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-300 hover:text-green-200 underline underline-offset-2"
                  >
                    +91 98469 99966
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#acedff] flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.hoursDisplay}</span>
              </div>

              <div className="flex items-center gap-2">
                <Compass size={14} className="text-[#acedff] flex-shrink-0" />
                <span>Plus Code: {STORE_INFO.plusCode}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Crystal Optics. Optical Store in Talap, Kannur, Kerala.</p>
          <div className="flex gap-4">
            <a
              href={STORE_INFO.googleMapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Directions on Google Maps
            </a>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Store Hours & Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
