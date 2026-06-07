import React, { useState } from 'react';
import { STORES } from '../data';
import { Star, MapPin, Phone, Clock, Compass, ExternalLink, Bookmark, Navigation, Share2, Send, Check } from 'lucide-react';
import { Review } from '../types';

interface StoreDetailsViewProps {
  initialReviews: Review[];
  onBookTest: () => void;
}

export default function StoreDetailsView({ initialReviews, onBookTest }: StoreDetailsViewProps) {
  const [activeStore, setActiveStore] = useState(STORES[2]); // Default is Kannur
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [savedStatus, setSavedStatus] = useState<Record<string, boolean>>({});

  // Review fields input
  const [reviewerName, setReviewerName] = useState('');
  const [ratingInput, setRatingInput] = useState(5);
  const [commentInput, setCommentInput] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const handleToggleSave = (storeId: string) => {
    setSavedStatus(prev => ({
      ...prev,
      [storeId]: !prev[storeId]
    }));
  };

  const handleStoreSelect = (storeId: string) => {
    const store = STORES.find(s => s.id === storeId);
    if (store) setActiveStore(store);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName || !commentInput) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: reviewerName,
      rating: ratingInput,
      comment: commentInput,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReview, ...reviews]);
    setReviewerName('');
    setCommentInput('');
    setRatingInput(5);
    setReviewSuccess(true);
    setTimeout(() => setReviewSuccess(false), 3000);
  };

  const calculateAverageRating = () => {
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  return (
    <div className="py-4">
      
      {/* Hero Visual Banner showing the customized physical store */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-slate-900">
        <img
          className="w-full h-full object-cover opacity-85 filter brightness-95"
          alt="Sleek white shelving showcasing designer optical collections inside luxury showroom."
          referrerPolicy="no-referrer"
          src={activeStore.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] dark:from-[#131b2e] via-transparent to-transparent"></div>
        
        {/* Title Badge Overlays */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:px-12 pb-6">
          <div className="bg-white/80 dark:bg-black/60 shadow-xl backdrop-blur-md p-6 rounded-lg inline-block border border-white/20">
            <span className="text-[#00687a] dark:text-[#acedff] font-label-technical tracking-widest uppercase text-[10px] md:text-xs mb-1.5 block font-bold">
              Boutiques Segment
            </span>
            <h1 className="font-display-lg text-2xl md:text-3xl text-[#131b2e] dark:text-gray-100 font-bold leading-tight">
              {activeStore.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="font-label-technical text-xs text-gray-500 uppercase tracking-widest font-semibold">
                {calculateAverageRating()} ({reviews.length} Reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique selector switches */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex items-center gap-3 border-b border-[#c6c6cd]/25 pb-4 overflow-x-auto">
          <span className="font-label-technical text-[#76777d] uppercase tracking-wider text-xs mr-4">
            Select Boutique:
          </span>
          {STORES.map((st) => {
            const isSelected = activeStore.id === st.id;
            return (
              <button
                key={st.id}
                onClick={() => handleStoreSelect(st.id)}
                className={`py-2 px-4 rounded font-label-technical tracking-wider text-xs uppercase cursor-pointer transition-all ${
                  isSelected 
                    ? 'bg-[#131b2e] text-white font-bold' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {st.id === 'kannur' ? 'Kannur, Talap' : st.id === 'soho' ? 'SoHo NYC' : 'West Village'}
              </button>
            );
          })}
        </div>
      </section>

      {/* Core Details and Info grid */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Col: Primary details and overview text (7 cols) */}
        <div className="md:col-span-7 space-y-8">
          
          {/* Quick interactive utility action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#131b2e] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-md font-label-technical text-xs uppercase tracking-wider font-bold cursor-pointer"
            >
              <Navigation size={13} fill="currentColor" />
              Directions
            </a>

            <button
              onClick={() => handleToggleSave(activeStore.id)}
              className="border border-[#131b2e] text-[#131b2e] dark:border-white/90 dark:text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#131b2e]/5 transition-all active:scale-[0.98] font-label-technical text-xs uppercase tracking-wider cursor-pointer"
            >
              <Bookmark size={13} fill={savedStatus[activeStore.id] ? "currentColor" : "none"} />
              {savedStatus[activeStore.id] ? 'Saved' : 'Save'}
            </button>

            <a
              href={`tel:${activeStore.phone.replace(/\s+/g, '')}`}
              className="border border-[#131b2e] text-[#131b2e] dark:border-white/90 dark:text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#131b2e]/5 transition-all active:scale-[0.98] font-label-technical text-xs uppercase tracking-wider cursor-pointer text-center"
            >
              <Phone size={13} />
              Call Setup
            </a>

            <button
              onClick={onBookTest}
              className="bg-[#00687a] hover:bg-cyan-800 text-white px-6 py-3 rounded-full flex items-center gap-1.5 transition-all active:scale-[0.98] font-label-technical text-xs uppercase tracking-wider font-bold cursor-pointer"
            >
              Book Test Here
            </button>
          </div>

          {/* Overview text section */}
          <div className="space-y-4">
            <h2 className="font-headline-lg text-xl font-bold text-[#131b2e] dark:text-white border-b border-gray-250 pb-2">
              Store Overview
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#45464d] dark:text-gray-300 leading-relaxed">
              {activeStore.description}
            </p>

            {/* Structured specs detail list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              <div className="flex items-start gap-3">
                <MapPin className="text-[#00687a] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-semibold text-[#131b2e] dark:text-gray-200 text-sm">Address</p>
                  <p className="text-gray-500 text-xs mt-0.5">{activeStore.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-[#00687a] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-semibold text-[#131b2e] dark:text-gray-200 text-sm">Working Hours</p>
                  <p className="text-[#ba1a1a] dark:text-red-400 text-xs font-semibold mt-0.5">{activeStore.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-[#00687a] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-semibold text-[#131b2e] dark:text-gray-200 text-sm">Direct Phone Inquiry</p>
                  <p className="text-gray-500 text-xs mt-0.5">{activeStore.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="text-[#00687a] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-semibold text-[#131b2e] dark:text-gray-200 text-sm">Geo Coordinates</p>
                  <p className="text-gray-500 text-xs mt-0.5">{activeStore.coordinates}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Col: Map visualization preview (5 cols) */}
        <div className="md:col-span-5">
          <div className="bg-white dark:bg-[#1e2638] border border-[#c6c6cd]/25 rounded-xl overflow-hidden shadow-md flex flex-col h-full min-h-[350px]">
            <div className="relative flex-grow leading-none overflow-hidden min-h-[250px]">
              <iframe
                src="https://maps.google.com/maps?q=11.8857966,75.3723666&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            <a
              href="https://www.google.com/maps/place/Crystal+optics/@11.8857966,75.3723666"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-[#1e2638] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex justify-between items-center border-t border-[#c6c6cd]/10 cursor-pointer"
            >
              <div>
                <p className="font-label-technical text-[#76777d] text-[10px] uppercase tracking-wider mb-0.5">
                  Local Navigation Setup
                </p>
                <h3 className="font-semibold text-xs sm:text-sm text-[#131b2e] dark:text-white">
                  Get Directions
                </h3>
              </div>
              <ExternalLink className="text-[#00687a]" size={16} />
            </a>
          </div>
        </div>

      </section>

      {/* Gallery Bento Grid of Ophthalmic Showrooms */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="font-label-technical uppercase tracking-widest text-xs text-gray-400 font-bold text-center sm:text-left mb-6">
          BOUTIQUE DESIGN STANDARD GALLERY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[450px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group min-h-[220px]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgMP3KRexZCM0ut71CvvNUnS0gl7hkBG2m_RyoTnlagngNlwFGX9wBicTRiWm8o0WqJJfFbLd0c0-sOT5jl8MaDw5Nlje4Fp9TEG2QiBqww1OamgbjyWWSqu7TAHH_DHyyWj9UXdMVr7W6H5rtTFNA4Obi4Tf8MhofDOuJQ7LTfCAhrwTlneJ9fEG2yKSLFL_cXn17UomHgQ2cWC_WSEQuv7A-NVmOR4K2vks9_5wYknG7EkqIcizJ36ituXqa5GcXVpo1GAiJlR0" 
              alt="Polished frames on display shelves"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group min-h-[150px]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD1jrMt-pChSV0-V8Y8a5FYzQMSDgNXPT9IB1r9GXlrqllDSIJpFelkWPVTTriPhOnLWBD7qb14rhcTzMWFRdyAJy4X3sLMMOj9ZaI6ETvA_82dC18PDG4qzk9w4Vm1MpB1YMF-mLRaqpAM7EfIVeTOL1eK5Qa-bDN8Tvm9f8wpOs9-NDNLA8rNzyykU4E9obJWJMscesi3uCdAPsySTrQh2MyqF-WFg63fHoeqYjwXjrccG3jpBiVpkzSZWN_wH8zaUX2MiohK1M" 
              alt="Premium eye examination suite"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group min-h-[150px]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-DnJRXtnZmakPraj3FOP1_FU3_8Mueeivwtt5FlDzTO38KPRu7CGUl3vXJd0_5dnSPsIdgHe5_BtM7WrJOUV3WoTRx1HPOlDn0lOBkdL8Rst7swKQNLAVSdf3P-URHCpRbre0JeTR5vozeNHYIyRsCaAaZ-UmyikycKFoo2JOrvZISJtzFdrezXl4aPXgNQWPRFu_bzCucBbRng5kvVPGhvZoJalqJngnbkXui-p3vaxRRCzfY41jPuf_dl7bv_wjuq_jbBxSRIY" 
              alt="Luxurious visual modeling"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-2 relative rounded-xl overflow-hidden group min-h-[180px]">
            <div className="absolute inset-0 bg-black/40 z-10 p-6 flex flex-col justify-end text-white">
              <span className="font-label-technical text-xs text-[#acedff] tracking-widest font-bold uppercase mb-1">Wholesale Segment</span>
              <span className="font-headline-lg text-lg font-bold">Partnerships & Logistics</span>
              <p className="text-gray-300 text-xs mt-1">Connecting global custom brands securely into Kerala & NYC showrooms.</p>
            </div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5Psql_cqbpTeAsL2QiAdq0-g9xyy-W99Y5XxbqBhfRSROs4dsOq3Aoy68wFqxQcSvGl_dtgtz3zf9Ob5QqH_Z1x4vg7q1TWl9Bu0V-GkiPVGj8_FKFOHX3AV7kZM1kbZlDGqjvvDK-Y7qsPQYCtoAC_5cO31uHwSSJqCrjAsj8ObQIlGXWwjIrA_mCOsXgVqTyEokv94XI2aEKN_dnHDLguLj_BbKcR2yaJpkftAIVxK5oxikIJKJaVKH2TeKEMsNFPVGZmyqOg" 
              alt="Transaction room"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Customer Verification Reviews Segment */}
      <section className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#c6c6cd]/25">
        
        {/* Col 1: Reviews List */}
        <div className="space-y-6">
          <h3 className="font-headline-lg text-lg font-bold text-[#131b2e] dark:text-white uppercase tracking-wider">
            Verified Reviews
          </h3>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white dark:bg-[#1e2638] p-5 rounded-lg border border-[#c6c6cd]/10 shadow-sm space-y-2">
                <div className="flex justify-between items-center">
                  <strong className="text-xs sm:text-sm text-[#131b2e] dark:text-gray-200">{r.author}</strong>
                  <span className="text-[10px] text-gray-400 font-label-technical">{r.date}</span>
                </div>
                <div className="flex text-yellow-500">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#45464d] dark:text-gray-300 leading-relaxed font-body-md pl-1">
                  "{r.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Leave a Review */}
        <div className="bg-gray-50 dark:bg-[#1e2638]/40 p-6 rounded-xl border border-[#c6c6cd]/20">
          <h3 className="font-headline-lg text-lg font-bold text-[#131b2e] dark:text-white mb-4 uppercase tracking-wider">
            Post an Experience
          </h3>
          {reviewSuccess ? (
            <div className="bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-900 p-6 rounded-lg text-center space-y-2">
              <Check className="mx-auto" size={24} />
              <p className="font-label-technical text-xs tracking-wider uppercase">Review Submitted Successfully.</p>
              <p className="text-xs text-gray-500">Thank you for sharing your premium optical experience.</p>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Irshad Rahman"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  className="w-full bg-white dark:bg-[#131b2e] border-0 border-b border-gray-300 focus:border-[#00687a] focus:ring-0 text-sm py-2 px-1 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-2">
                  Rating Stars
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRatingInput(s)}
                      className="cursor-pointer transition-transform hover:scale-110"
                    >
                      <Star
                        size={18}
                        className={s <= ratingInput ? 'text-yellow-500' : 'text-gray-300'}
                        fill={s <= ratingInput ? 'currentColor' : 'none'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-1">
                  Experience & Review
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share details on precision hinges/optics clarity..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="w-full bg-white dark:bg-[#131b2e] border border-gray-200 focus:border-[#00687a] rounded-lg p-3 text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#131b2e] hover:bg-slate-700 text-white font-label-technical text-xs px-4 py-3 uppercase tracking-widest font-bold rounded cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>

      </section>

    </div>
  );
}
