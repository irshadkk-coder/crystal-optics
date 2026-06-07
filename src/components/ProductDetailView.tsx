import React, { useState } from 'react';
import { Product } from '../types';
import { HelpCircle, PhoneCall, Calendar, SlidersHorizontal, Heart, ShieldCheck, Check, Crosshair } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDetailViewProps {
  product: Product;
  setView: (v: string) => void;
  onAddToCart: (p: Product) => void;
  onBookTest: () => void;
  onToggleFavorite: (id: string) => void;
  favorites: string[];
}

export default function ProductDetailView({
  product,
  setView,
  onAddToCart,
  onBookTest,
  onToggleFavorite,
  favorites
}: ProductDetailViewProps) {
  const [selectedColor, setSelectedColor] = useState('Matte Black');
  const [addedNotice, setAddedNotice] = useState(false);
  const isFav = favorites.includes(product.id);

  const colors = [
    { label: 'Matte Black', value: '#1A1A1A' },
    { label: 'Silver Brushed', value: '#D1D5DB' },
    { label: 'Rose Gold Platina', value: '#E5C1B1' }
  ];

  const handleWhatsAppAction = () => {
    const textMsg = encodeURIComponent(
      `Hello Crystal Optics! I am interested in purchasing the product "${product.name}" in finish finish "${selectedColor}". Could you please guide me on diagnostic testing or availability? Thank you!`
    );
    window.open(`https://wa.me/9109846999966?text=${textMsg}`, '_blank');
  };

  const handleAddToCartAndTriggerNotice = () => {
    onAddToCart(product);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  return (
    <div className="py-4">
      {/* Product Detail Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] border-b border-gray-200/50">
        
        {/* Left Aspect: Image Spotlight Container */}
        <div className="md:col-span-7 relative h-[450px] md:h-[80vh] bg-[#f2f4f6] dark:bg-[#131b2e]/60 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full flex items-center justify-center p-8 transition-transform duration-700 hover:scale-103">
            <img
              className="object-contain w-full h-full max-h-[85%] transition-transform duration-700"
              alt={product.description}
              referrerPolicy="no-referrer"
              src={product.image}
            />
          </div>

          {/* Try On Floater Button */}
          <button
            onClick={() => setView('try-on')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/75 dark:bg-black/60 shadow-lg backdrop-blur-md border border-white/40 px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all text-black dark:text-white cursor-pointer group"
          >
            <SlidersHorizontal size={16} />
            <span className="font-label-technical text-label-technical tracking-widest uppercase text-xs font-bold">
              VIRTUAL TRY-ON
            </span>
          </button>
        </div>

        {/* Right Aspect: Narrative & Action Controls */}
        <div className="md:col-span-5 px-6 md:px-12 py-10 md:py-20 flex flex-col justify-center">
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <span className="font-label-technical text-label-technical text-[#00687a] dark:text-[#acedff] tracking-[0.2em] uppercase font-bold text-xs">
                {product.badge || 'Signature Series'}
              </span>
              <button 
                onClick={() => onToggleFavorite(product.id)}
                className={`p-2 rounded-full cursor-pointer transition-colors ${
                  isFav ? 'bg-rose-50 text-rose-500' : 'text-gray-400 hover:text-black'
                }`}
              >
                <Heart size={18} fill={isFav ? "currentColor" : "none"} />
              </button>
            </div>
            
            <h2 className="font-display-lg text-3xl md:text-4xl text-[#131b2e] dark:text-white leading-tight font-bold tracking-tight">
              {product.name}
            </h2>
            
            <p className="font-headline-lg text-lg sm:text-xl text-[#00687a] dark:text-[#acedff] font-bold">
              ${product.price} <span className="text-gray-400 font-light text-xs sm:text-sm">/ INR context (₹12,500 equivalent)</span>
            </p>
          </div>

          <p className="font-body-md text-sm sm:text-base text-[#45464d] dark:text-gray-300 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Color select swatches */}
          <div className="mb-8">
            <p className="font-label-technical text-[11px] text-[#131b2e] dark:text-gray-200 mb-3 tracking-widest uppercase font-bold">
              Select Finish: <span className="text-[#00687a] font-bold">{selectedColor}</span>
            </p>
            <div className="flex gap-3">
              {colors.map((color) => {
                const isSelected = selectedColor === color.label;
                return (
                  <button
                    key={color.label}
                    onClick={() => setSelectedColor(color.label)}
                    aria-label={color.label}
                    title={color.label}
                    className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center p-0.5`}
                    style={{ 
                      backgroundColor: color.value,
                      borderColor: isSelected ? '#131b2e' : 'transparent'
                    }}
                  >
                    {isSelected && <Check size={12} className="text-white mix-blend-difference" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA Primary Action Row */}
          <div className="flex flex-col gap-4">
            
            {/* WhatsApp Integration Button */}
            <button
              onClick={handleWhatsAppAction}
              className="w-full bg-[#25D366] text-white py-4 px-6 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all cursor-pointer font-bold uppercase tracking-wider text-xs shadow-md shadow-green-500/10"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.544.917 3.31 1.401 5.116 1.402h.005c5.452 0 9.889-4.437 9.892-9.891 0-2.646-1.03-5.132-2.9-7c-1.87-1.868-4.361-2.897-7.004-2.898-5.452 0-9.887 4.438-9.89 9.891-.001 1.902.541 3.756 1.564 5.342l-1.026 3.748 3.843-1.007zm11.248-5.415c-.301-.151-1.782-.879-2.057-.979-.275-.1-.475-.151-.675.151-.199.301-.775.979-.95 1.179-.175.199-.35.226-.651.075-.302-.151-1.272-.469-2.423-1.495-.896-.799-1.5-1.787-1.675-2.087-.175-.3-.019-.463.132-.612.135-.133.301-.351.451-.526.15-.175.199-.301.301-.501.101-.2.05-.376-.025-.526-.075-.151-.675-1.628-.925-2.228-.243-.584-.489-.505-.675-.514-.175-.008-.375-.01-.575-.01s-.526.075-.802.376c-.275.301-1.052 1.026-1.052 2.504 0 1.479 1.077 2.905 1.227 3.106.15.201 2.12 3.237 5.136 4.538.717.31 1.277.495 1.711.633.721.23 1.377.198 1.896.121.579-.085 1.782-.728 2.032-1.429.25-.7.25-1.295.175-1.427-.075-.131-.275-.208-.575-.359z" />
              </svg>
              Chat Segment on WhatsApp
            </button>

            {/* Book Eye Test CTA */}
            <button
              onClick={onBookTest}
              className="w-full border border-black/80 hover:bg-[#131b2e] dark:border-white/85 dark:text-white dark:hover:bg-white dark:hover:text-black hover:text-white py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer font-bold uppercase tracking-wider text-xs"
            >
              <Calendar size={15} />
              Book Professional Eye Test
            </button>

            {/* Order/Add to Cart support */}
            <button
              onClick={handleAddToCartAndTriggerNotice}
              className="w-full py-3 h-10 flex items-center justify-center text-xs text-slate-500 uppercase font-label-technical tracking-widest hover:text-black transition-colors"
            >
              {addedNotice ? 'Added to Boutique Cart ✓' : 'Add to Cart / Save Segment'}
            </button>

          </div>

        </div>

      </section>

      {/* Optical Precision Segment Bento Grid */}
      <section className="bg-[#f2f4f6] dark:bg-[#131b2e]/40 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
            <h3 className="font-headline-lg text-2xl font-bold text-[#131b2e] dark:text-white tracking-tight uppercase">
              OPTICAL PRECISION
            </h3>
            <p className="font-body-md text-sm text-[#45464d] dark:text-gray-300 max-w-sm">
              Every element of the {product.name} is optimized for 20/20 clarity and all-day comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Spec Feature 1 */}
            <div className="bg-white dark:bg-[#1e2638] p-8 rounded-xl border border-[#c6c6cd]/10 flex flex-col gap-6 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#57dffe]/20 flex items-center justify-center text-[#00687a] dark:text-[#acedff]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-headline-lg-mobile text-lg font-bold text-black dark:text-white mb-2">
                  Crystal-Lens Tech
                </h4>
                <p className="font-body-md text-xs sm:text-sm text-[#45464d] dark:text-gray-300 leading-relaxed">
                  Advanced blue-light filtration integrated directly into the lens monomer for permanent optical protection without the yellow glare tint.
                </p>
              </div>
              <img 
                className="rounded-lg object-cover h-36 w-full mt-4" 
                alt="Scanning lens visual" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9BUJRKx_a8fzY5pysTanpcnAcU5Ol1APoLXvAMC71vhJkBH4gT3TjqUHyk62Z3wOiXj1ix9JxCnf4z44XtCRstT-ktKeFs2sCepQmzcgXmbWrau0aZVkry_fkiSS2YjdCXjS_MyjmampRHYQCRHljQHrmcM8y-PtMdcJRZuDgNuxdnqkipxbYnr2f5Xj1yP1-IX1aUDNqGnEVkd6bCN6E-1Tyy1SgyYb9TQF-FGPx8Ct4Fa2Hlvpcd_iWlHS6yxGhEXSwwpFrTGQ"
              />
            </div>

            {/* Spec Feature 2 */}
            <div className="bg-white dark:bg-[#1e2638] p-8 rounded-xl border border-[#c6c6cd]/10 flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-transform">
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/40 flex items-center justify-center text-yellow-600 dark:text-[#e9c349]">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h4 className="font-headline-lg-mobile text-lg font-bold text-black dark:text-white mb-2">
                    Aerospace Alloys
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-[#45464d] dark:text-gray-300 leading-relaxed">
                    Grade 5 Titanium provides exceptional strength-to-weight ratio for frames that feel entirely weightless on the nose bridge.
                  </p>
                </div>
              </div>
              
              <div className="border border-dashed border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-[#131b2e] text-center">
                <span className="font-label-technical text-[10px] text-gray-500 block uppercase mb-1">Crystalline segment</span>
                <span className="font-body-md text-sm text-[#131b2e] dark:text-gray-200">Anti-scratch guard infused</span>
              </div>
            </div>

            {/* Spec Feature 3 */}
            <div className="bg-white dark:bg-[#1e2638] p-8 rounded-xl border border-[#c6c6cd]/10 flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-transform">
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-[#00687a]">
                  <Crosshair size={20} />
                </div>
                <div>
                  <h4 className="font-headline-lg-mobile text-lg font-bold text-black dark:text-white mb-2">
                    Precision Fit Dimensions
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-[#45464d] dark:text-gray-300 leading-relaxed">
                    Adjustable medical-grade silicone nose pads and robust temple tips ensure a custom fit for any face shape structure.
                  </p>
                </div>
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-750">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="font-label-technical text-[10px] text-gray-400 uppercase">Weight</p>
                    <p className="font-headline-lg-mobile text-base font-bold text-[#131b2e] dark:text-white">{product.weight || '12g'}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-label-technical text-[10px] text-gray-400 uppercase">Lens Width</p>
                    <p className="font-headline-lg-mobile text-base font-bold text-[#131b2e] dark:text-white">{product.lensWidth || '48mm'}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="font-headline-lg text-2xl font-bold text-[#131b2e] dark:text-white mb-10 text-center uppercase tracking-wider">
          TECHNICAL SPECIFICATIONS
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 border-t border-[#c6c6cd]/35 pt-10">
          
          <div className="flex justify-between items-center py-3 border-b border-gray-200/60 font-body-md text-sm">
            <span className="font-label-technical text-xs text-gray-400 uppercase">Frame Material</span>
            <span className="text-[#131b2e] dark:text-white font-bold capitalize">{product.material} alloy</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200/60 font-body-md text-sm">
            <span className="font-label-technical text-xs text-gray-400 uppercase">Lens Width</span>
            <span className="text-[#131b2e] dark:text-white font-bold">{product.lensWidth || '48 mm'}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200/60 font-body-md text-sm">
            <span className="font-label-technical text-xs text-gray-400 uppercase">Bridge Width</span>
            <span className="text-[#131b2e] dark:text-white font-bold">{product.bridgeWidth || '21 mm'}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200/60 font-body-md text-sm">
            <span className="font-label-technical text-xs text-gray-400 uppercase">Temple Length</span>
            <span className="text-[#131b2e] dark:text-white font-bold">{product.templeLength || '145 mm'}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200/60 font-body-md text-sm">
            <span className="font-label-technical text-xs text-gray-400 uppercase">Lens Category Type</span>
            <span className="text-[#131b2e] dark:text-white font-bold">{product.lensType || 'Blue-Light Blocking'}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200/60 font-body-md text-sm">
            <span className="font-label-technical text-xs text-gray-400 uppercase">Hinge System</span>
            <span className="text-[#131b2e] dark:text-white font-bold">{product.hingeSystem || 'Dual-Action Spring'}</span>
          </div>

        </div>
      </section>

    </div>
  );
}
