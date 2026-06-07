import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Crosshair, Award, ArrowRight, Activity, Smile } from 'lucide-react';

interface HomeViewProps {
  setView: (v: string) => void;
  onFilterPreset?: (preset: { style?: string; material?: string; faceShape?: string }) => void;
}

export default function HomeView({ setView, onFilterPreset }: HomeViewProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsfeedSubscribed, setNewsfeedSubscribed] = useState(false);

  const handlePresetSelect = (preset: { style?: string; material?: string; faceShape?: string }) => {
    if (onFilterPreset) {
      onFilterPreset(preset);
    }
    setView('catalog');
  };

  const handleNewsfeedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsfeedSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsfeedSubscribed(false), 5000);
  };

  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-[#131b2e]">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-85 scale-105 filter brightness-95" 
            alt="Editorial portrait of model wearing elegant, minimalist black optical frames." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzGdUVF-typ2rgLY5lRqixONQ-qU1cD3tdFCj6wYF9_OPofv-DZTSSSDhLRZWzvyLECpSmclNCdLuilkamVm0YTpH1iJpZ8FLbxXaH_flerrHiIlsuIrZ8LIQuQDbGo--sC2Xj71u1LbnJ-ulHxXsFFjEnTxavACaQ_QYONq1OGA5XVcsqhO2x0UturHtY4aA7PyeRO7tTxsO4HADXih4-XPAFAiXR8prUvaQdOZpPCMqXUr06AUOG-29Zg8ZW7iM8afl91R3py7U"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131b2e]/90 via-[#131b2e]/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white"
          >
            <span className="font-label-technical text-label-technical uppercase tracking-[0.2em] mb-4 block text-[#acedff]">
              Innovation in Sight
            </span>
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-none text-white">
              VISION <br />REIMAGINED
            </h1>
            <p className="font-body-md text-sm sm:text-base mb-8 text-[#e0e3e5] max-w-md leading-relaxed">
              Our proprietary Crystal-Lens technology features ultra-thin coatings that eliminate 99.9% of reflections while maintaining 100% color accuracy.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setView('catalog')}
                className="bg-white text-[#131b2e] px-8 py-3.5 rounded-full font-label-technical text-xs tracking-widest hover:bg-gray-100 transition-colors uppercase font-bold text-center"
              >
                Shop New Arrivals
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setView('try-on')}
                className="bg-transparent text-white px-8 py-3.5 rounded-full font-label-technical text-xs tracking-widest border border-white hover:bg-white hover:text-black transition-all uppercase text-center"
              >
                Virtual Try-On
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Top Categories (Bento Grid) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-headline-lg text-3xl font-semibold text-[#131b2e] tracking-tight">
              CORE COLLECTIONS
            </h2>
            <p className="text-[#45464d] dark:text-gray-400 mt-2 font-body-md">
              Precision engineered for every perspective.
            </p>
          </div>
          <button 
            onClick={() => handlePresetSelect({})}
            className="font-label-technical text-xs text-[#00687a] dark:text-[#acedff] border-b border-[#00687a] dark:border-[#acedff] pb-1 hover:opacity-75 tracking-wider transition-opacity uppercase font-bold"
          >
            VIEW ALL COLLECTIONS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Men Category Card */}
          <div 
            onClick={() => handlePresetSelect({ style: 'classic' })}
            className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-lg min-h-[300px]"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Titanium frames on distinguished man"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHdWZR_Mlg4uVDnWiIyM6j9LapLFh6cXyE773mrHOppEfELXI-ayuvE88X7ZB8I7gOeGP5VV6VHay6YYy2F0lWfqJaGBHiKlhS57xd9KgdBu_cu8_zwqkBKeyQt-Oq_35xOdkbBm1MArFmyp8YeQITqbzFCFGExaAdSm3opWbzEkchTdHZaxAtgHmmBYq3hQ1UeqcDQt8oYzZFcB63X5nyoJ1t_2niqsZJJYt5XEOsd-0vOMvAZ1ghCZ0AinFMOHUufQ7RV3lczy4"
            />
            <div className="absolute inset-0 bg-[#131b2e]/30 group-hover:bg-[#131b2e]/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-headline-lg text-2xl font-bold tracking-wider">MEN</h3>
              <span className="font-label-technical text-xs opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 block mt-2 uppercase tracking-widest text-[#acedff]">
                Explore Frames &rarr;
              </span>
            </div>
          </div>

          {/* Women Category Card */}
          <div 
            onClick={() => handlePresetSelect({ style: 'minimalist' })}
            className="md:col-span-2 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-lg min-h-[180px]"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Model demonstrating modern transparent frames"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcFzYWqIlOAdCAJ4Ak-0bFZTMbH2xcrFeEpLSwa7i2vY-9gebeWOZh0s-8JdRwkocXglZ87rBUL6cG_WZ_cz4cbJ5j_JQlz2s3h4Pvu5xMfy9DeuO-Z2_murfUTIgL34xm1cl7FzQZk9Hld4KxjRll0q-CrZVAktsBNY5otorIjVbnHJlUBodjY0UzEpLzyHlGmnoYnpIWh1rb2MTvuh1pO3EK2j-gr-jXzROa1U9D6Vu-RG8V3bpiHfaJh5Ia3pftIL4i0PJZfiM"
            />
            <div className="absolute inset-0 bg-[#131b2e]/30 group-hover:bg-[#131b2e]/20 transition-colors"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-headline-lg text-xl sm:text-2xl font-bold tracking-wider">WOMEN</h3>
              <span className="font-label-technical text-xs opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 block mt-1 uppercase tracking-widest text-[#acedff]">
                View Collection &rarr;
              </span>
            </div>
          </div>

          {/* Sunglasses Category Card */}
          <div 
            onClick={() => handlePresetSelect({ style: 'avant-garde' })}
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-lg min-h-[180px]"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Polarized premium sunglasses at golden hour"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb6XvWV7N-l-_7IPt5lVqkGhYUh41t2ObhAzVN4dOhxBB8NUjosEKl1qmAdyHHNGWfz75XVpBgF4v-i7AaQeCDVJgDdkb4tkfmJT6p0wjr7-cGNf0uWGUlQ4lOVl6zyQMz1-rF7eiIUksRkDY-3aYxe7fES9I9JnPYFL_jvtxF87evCfyNCab3nwgjxfQDVedBwcheXTuvnOXZTsVSfYXpeJ5eaJxgb_Gk72Ay4t0cFrhjke77JbcnjjU9pIu6uZZJp70wKwj1B6Q"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="font-headline-lg-mobile text-lg font-bold tracking-wider">SUNGLASSES</h3>
            </div>
          </div>

          {/* Blue Light Category Card */}
          <div 
            onClick={() => handlePresetSelect({ material: 'titanium' })}
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-lg min-h-[180px]"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Specs blocking blue light on technical workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgNycVGFhKPb7uqUapvew6sW77nRc66jYizVuF4kGtGfZ67NzlBrcAhxxXPCWu2erfe7W8XXaUz9C2CzoTIWaBYLX7MfGbMLnBHSHFbyjqhRvD25VmBM6sZx1bFl2fkpuzcz_-o6MjFg4vG9gRXAbJ_YPaQNnN5DTDkAHSvDbFxqxr3iNjf8R4_lj2urp_JYlv94sTpllNaK-lUZAeZNaAu9bXDCEKs4igPSQbVxY70gOP_gm0wvHVfzlNaERy6pI1X2wM7LV54Hk"
            />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="font-headline-lg-mobile text-lg font-bold tracking-wider">BLUE LIGHT</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clarity & Features Section */}
      <section className="bg-[#131b2e] py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <span className="text-[#acedff] font-label-technical text-xs uppercase tracking-widest block font-bold">
              Optical Excellence
            </span>
            <h2 className="font-display-lg text-4xl font-bold tracking-tight mb-6 leading-tight">
              CRYSTAL CLARITY, <br />WITHOUT COMPROMISE
            </h2>
            <p className="text-gray-300 font-body-md text-sm sm:text-base leading-relaxed max-w-lg">
              Our products are characterized by a level of meticulous craftsmanship that satisfies the highest industry benchmarks, matched with an aesthetic direction drawn from high-fashion contexts. Uncompromising vision meets weightless comfort.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#00687a]/35 p-3 rounded-lg text-[#acedff] border border-cyan-800/50">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">Advanced Lens Coatings</h4>
                  <p className="text-gray-400 text-sm leading-normal">
                    Anti-reflective, scratch-resistant, hydrophobic, and carbon-guarded properties are embedded as standard.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#00687a]/35 p-3 rounded-lg text-[#acedff] border border-cyan-800/50">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">Precision Lab Testing & Fit</h4>
                  <p className="text-gray-400 text-sm leading-normal">
                    Designed with mathematically aligned hinges and dual-spring support, providing a continuous, fatigue-free wearing experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Round display frame */}
            <div className="aspect-square relative rounded-full overflow-hidden border-8 border-white/5 shadow-2xl">
              <img 
                className="w-full h-full object-cover filter saturate-75 brightness-95" 
                alt="Lens repel water illustration with state-of-the-art coatings." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBohhNoyKwTsmLhKTSi5NnBe1mLmvpBCVToj8TUS7SMbPV6smeeKEf5YqnfAUvFFyd6U7yrPlBlSfJwNtENpsNygkupnKVxeOkNKW4n9qaPUj4Mk6AiiqOqOHvgA4QzQoDDi56XYjF6iOFJ5ROA7C1LthOPRb6bdDjHwlWnRllygGwZCC8Y0KG9YwY2bnoDc9OwzGp6hsjDMexkUNf-riHtakR9AfJcpPOCmemm5-jGlN0aEYRxNt4nGmlHHhFeThM_uv98D5y_-yU"
              />
            </div>
            
            {/* Glass floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hidden sm:block max-w-[280px] shadow-2xl">
              <p className="font-label-technical text-xs text-[#acedff] mb-2 tracking-widest font-bold">
                PREMIUM OPTICS
              </p>
              <p className="text-2xl font-bold text-white tracking-tight">20/20 PERFORMANCE</p>
              <div className="w-full bg-white/20 h-1.5 mt-4 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="bg-[#acedff] h-full"
                ></motion.div>
              </div>
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider text-right">
                99.9% anti-glare active
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Lifestyle / Bento Column Spotlights */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-white/50 rounded-2xl my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-xl aspect-[4/3] md:aspect-video shadow-lg">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Bespoke luxury eyewear display and lounge"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD0breAYC7GBlmiVRIeI3n8OIa40SW3ZuuXS5uhl9tadgSpHjKHjXYmvbS35Pj770vconvgiTaBLH07ROyLrk9tymFuhwZdcgshlTJ7K7B8Tz6krEN4VDN8jQd_wuhDp5TpZJJhAacFQ699pRws8rp4rn0toXZEfK5nOkOK_KJ70DPLVjyydgw7HwaLENOnuEXXh24O1jUdednoXKpmpK7y4cOySl3ewgpDQbJD9-EV9iMVR47sNgO-J8gLV678-Ats5xXhfzdMDw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="font-label-technical text-xs text-[#acedff] tracking-widest block uppercase font-bold mb-1">Limited Edition Series</span>
              <h4 className="text-lg font-bold">The Prism Collaborative Edition</h4>
            </div>
          </div>

          <div className="space-y-6">
            <span className="font-label-technical text-xs text-[#00687a] tracking-[0.2em] uppercase font-bold">
              Global Standards, Local Curation
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-semibold text-[#131b2e] tracking-tight leading-snug">
              WHOLESALE MAJESTY MEETS METICULOUS INDIVIDUAL CUSTOMS
            </h3>
            <p className="text-[#45464d] font-body-md text-sm sm:text-base leading-relaxed">
              Wholly sourced from medical grade raw polymers and aero-titanium alloys, Crystal Optics services elite ophthalmic retailers and provides direct-to-patient custom design, complete with digital try-on accuracy and clinical support.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setView('store-details')}
                className="inline-flex items-center gap-2 font-label-technical text-[#131b2e] hover:text-[#00687a] font-bold text-xs uppercase tracking-wider border-b border-black pb-1 hover:pb-2 transition-all"
              >
                Find talap, Kannur Boutique &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Subscriber Form */}
      <section className="py-20 bg-gray-50 border-t border-[#c6c6cd]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-semibold text-[#131b2e] mb-4 uppercase tracking-wider">
            SEE THE FUTURE FIRST
          </h2>
          <p className="text-[#45464d] text-sm sm:text-base mb-10 max-w-xl mx-auto font-body-md">
            Join our private circle for elite invitations, bespoke glasses custom alerts, and visionary optical science releases.
          </p>
          
          {newsfeedSubscribed ? (
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-[#dae2fd] text-[#131b2e] p-6 rounded-lg font-bold uppercase font-label-technical text-xs tracking-wider border border-[#bec6e0] max-w-md mx-auto"
            >
              Subscription Registered. Early Acces Pending.
            </motion.div>
          ) : (
            <form onSubmit={handleNewsfeedSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-grow bg-white border-0 border-b-2 border-[#76777d] focus:border-[#00687a] focus:ring-0 font-label-technical text-xs py-4 px-4 uppercase tracking-widest text-center focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-[#131b2e] text-white px-10 py-4 font-label-technical text-xs tracking-widest hover:bg-[#3f465c] transition-all uppercase font-bold"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
