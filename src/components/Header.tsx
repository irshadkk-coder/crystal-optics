'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '@/data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/eyeglasses', label: 'Eyeglasses' },
    { href: '/sunglasses', label: 'Sunglasses' },
    { href: '/blue-light-glasses', label: 'Blue-Light' },
    { href: '/virtual-try-on', label: 'Virtual Try-On' },
    { href: '/eye-test', label: 'Eye Test' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top micro-bar with quick contact info */}
      <div className="bg-[#131b2e] text-slate-300 text-[11px] py-1.5 px-6 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={12} className="text-[#acedff]" />
              {STORE_INFO.address}
            </span>
            <span className="text-slate-500">|</span>
            {/* TODO: owner to confirm exact opening hours */}
            <span className="text-slate-300">
              Hours: Mon–Sat 10:00–19:30
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="text-slate-200 hover:text-[#acedff] transition-colors flex items-center gap-1"
            >
              <Phone size={12} />
              Call: {STORE_INFO.phoneDisplay}
            </a>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#acedff] hover:underline"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          {/* Logo and Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-900 p-1.5 cursor-pointer hover:bg-slate-100 rounded"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link
              href="/"
              className="flex flex-col select-none group"
            >
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#131b2e] group-hover:text-[#00687a] transition-colors">
                CRYSTAL OPTICS
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold -mt-1">
                Talap • Kannur
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-[#00687a] border-[#00687a]'
                      : 'text-slate-600 hover:text-slate-950 border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/virtual-try-on"
              className="inline-flex items-center gap-1.5 bg-[#00687a] hover:bg-cyan-800 text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded-full transition-all shadow-sm"
            >
              <Sparkles size={13} />
              <span>Try-On</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg animate-fade-in">
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm uppercase tracking-wider font-semibold py-2 px-3 rounded ${
                      isActive
                        ? 'bg-slate-100 text-[#00687a]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-xs text-slate-700 font-semibold py-1.5 flex items-center gap-2"
                >
                  <Phone size={14} className="text-[#00687a]" />
                  Call: {STORE_INFO.phoneDisplay}
                </a>
                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-green-700 font-semibold py-1.5 flex items-center gap-2"
                >
                  WhatsApp: +91 98469 99966
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
