import React, { useState } from 'react';
import { AppWindow, MoveRight, Globe, Share2, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setView: (v: string) => void;
  onNewsletterSignup?: (email: string) => void;
  onRequestAdminLogin?: () => void;
}

export default function Footer({ setView, onNewsletterSignup, onRequestAdminLogin }: FooterProps) {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (onNewsletterSignup) onNewsletterSignup(email);
    setSuccess(true);
    setEmail('');
    setTimeout(() => setSuccess(false), 4000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Crystal Optics Premium Eyewear',
        text: 'Precision Frames - Discover eyewear engineered for uncompromising clarity.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Copied URL to clipboard for sharing: ' + window.location.href);
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  return (
    <footer className="w-full px-6 py-16 bg-[#f7f9fb] dark:bg-[#131b2e] border-t border-[#c6c6cd]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Col 1: Brand Pitch */}
        <div className="md:col-span-1">
          <span 
            onClick={() => setView('home')}
            className="font-headline-lg-mobile text-headline-lg-mobile text-[#131b2e] dark:text-[#dae2fd] block mb-6 tracking-widest cursor-pointer hover:opacity-80"
          >
            CRYSTAL
          </span>
          <p className="font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] max-w-xs leading-relaxed">
            Precise vision. Uncompromising style. Engineered in the pursuit of 20/20 perfection. Visit our boutiques in SoHo or Kannur.
          </p>
        </div>

        {/* Col 2: Services Links */}
        <div className="flex flex-col gap-4">
          <span className="font-label-technical text-label-technical uppercase text-[#131b2e] dark:text-white tracking-widest font-semibold">
            Services
          </span>
          <button 
            onClick={() => setView('book-test')}
            className="text-left font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] dark:hover:text-[#acedff] transition-colors"
          >
            Book Eye Test
          </button>
          <a 
            href="https://wa.me/9109846999966"
            target="_blank"
            rel="noopener noreferrer"
            className="text-left font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] dark:hover:text-[#acedff] transition-colors"
          >
            WhatsApp Support
          </a>
          <button 
            onClick={() => setView('store-details')}
            className="text-left font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] dark:hover:text-[#acedff] transition-colors"
          >
            Find a Store
          </button>
        </div>

        {/* Col 3: Corporate */}
        <div className="flex flex-col gap-4">
          <span className="font-label-technical text-label-technical uppercase text-[#131b2e] dark:text-white tracking-widest font-semibold">
            Corporate
          </span>
          <button 
            onClick={() => setView('portfolio')}
            className="text-left font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] dark:hover:text-[#acedff] transition-colors"
          >
            Portfolio Showcase
          </button>
          <button 
            onClick={() => onRequestAdminLogin && onRequestAdminLogin()}
            className="text-left font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] dark:hover:text-[#acedff] transition-colors"
          >
            Business Management Dashboard
          </button>
          <button 
            onClick={() => alert('Our production standards utilize recycled Japanese acetates and low-impact titanium extraction.')}
            className="text-left font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] dark:hover:text-[#acedff] transition-colors"
          >
            Sustainability
          </button>
          <button 
            onClick={() => alert('Privacy policy is persistent, ensuring compliance with health regulations like HIPAA & GDPR.')}
            className="text-left font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] dark:hover:text-[#acedff] transition-colors"
          >
            Privacy
          </button>
          <button 
            onClick={() => alert('Interested in joining? Contact our recruitment at careers@crystaloptics.com')}
            className="text-left font-body-md text-sm text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] dark:hover:text-[#acedff] transition-colors"
          >
            Careers
          </button>
        </div>

        {/* Col 4: Newsletter */}
        <div className="flex flex-col gap-4">
          <span className="font-label-technical text-label-technical uppercase text-[#131b2e] dark:text-white tracking-widest font-semibold">
            Newsletter
          </span>
          {success ? (
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 py-2">
              <CheckCircle2 size={16} />
              <span className="font-label-technical text-xs uppercase tracking-wider">Access Granted</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex border-b border-[#45464d] py-2">
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Email Address" 
                required
                className="bg-transparent border-none focus:ring-0 focus:outline-none flex-grow text-[#45464d] dark:text-white font-body-md text-sm placeholder-gray-400"
              />
              <button 
                type="submit" 
                className="text-[#131b2e] dark:text-[#dae2fd] hover:translate-x-1 transition-transform cursor-pointer"
              >
                <MoveRight size={18} />
              </button>
            </form>
          )}
          <p className="text-[10px] uppercase tracking-widest text-[#76777d]">
            Exclusive early access to new drops.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#c6c6cd]/10">
        <span className="font-label-technical text-[11px] text-[#45464d] dark:text-[#c6c6cd] uppercase tracking-wider text-center md:text-left">
          © 2026 CRYSTAL OPTICS. PRECISION IN EVERY FRAME.
        </span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <button 
            onClick={() => alert('Supported language: English (US)')}
            className="text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] transition-colors"
            title="Language"
          >
            <Globe size={18} />
          </button>
          <button 
            onClick={handleShare}
            className="text-[#45464d] dark:text-[#c6c6cd] hover:text-[#00687a] transition-colors"
            title="Share App"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
