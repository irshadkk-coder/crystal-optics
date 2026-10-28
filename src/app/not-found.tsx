import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search, Phone } from 'lucide-react';
import { STORE_INFO } from '@/data';

export const metadata = {
  title: 'Page Not Found (404) | Crystal Optics Kannur',
  description: 'The requested page could not be found. Explore eyeglasses, sunglasses, and optical services in Talap, Kannur at Crystal Optics.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="py-24 px-6 max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
      <div className="inline-block p-4 bg-slate-100 rounded-full text-slate-800 font-mono text-sm uppercase tracking-wider font-bold">
        Error 404 • Page Not Found
      </div>
      
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#131b2e] tracking-tight">
        Looking for Crystal Optics in Kannur?
      </h1>
      
      <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto">
        The link you followed may have moved or been updated. You can browse our collection of eyeglasses, sunglasses, and frames in Talap, Kannur, or contact us directly.
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#131b2e] hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md"
        >
          <Home size={15} />
          Go to Home
        </Link>
        <Link
          href="/eyeglasses"
          className="inline-flex items-center gap-2 bg-[#00687a] hover:bg-cyan-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md"
        >
          <Search size={15} />
          View Eyeglasses
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
        >
          <Phone size={15} />
          Store Contact
        </Link>
      </div>

      <div className="pt-8 border-t border-slate-200 text-xs text-slate-500">
        <p>Crystal Optics • Talap, Kannur, Kerala 670002 • Phone: {STORE_INFO.phoneDisplay}</p>
      </div>
    </div>
  );
}
