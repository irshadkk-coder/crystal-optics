import React, { useState } from 'react';
import { Product } from '../types';
import { Search, SlidersHorizontal, Heart, Sparkles, Filter, X } from 'lucide-react';
import { motion } from 'motion/react';

interface CatalogViewProps {
  products: Product[];
  setView: (v: string) => void;
  setSelectedProductId: (id: string) => void;
  filterPreset: { style?: string; material?: string; faceShape?: string };
  setFilterPreset: (preset: { style?: string; material?: string; faceShape?: string }) => void;
  onToggleFavorite: (id: string) => void;
  favorites: string[];
}

export default function CatalogView({
  products,
  setView,
  setSelectedProductId,
  filterPreset,
  setFilterPreset,
  onToggleFavorite,
  favorites
}: CatalogViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>(filterPreset.style || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>(filterPreset.material || 'all');
  const [selectedFaceShape, setSelectedFaceShape] = useState<string>(filterPreset.faceShape || 'all');

  // Trigger viewing a product detail
  const handleViewDetails = (id: string) => {
    setSelectedProductId(id);
    setView('product-detail');
  };

  // Safe checks for empty values
  const currentStyleStr = selectedStyle === 'all' ? '' : selectedStyle;
  const currentMaterialStr = selectedMaterial === 'all' ? '' : selectedMaterial;
  const currentFaceShapeStr = selectedFaceShape === 'all' ? '' : selectedFaceShape;

  // Filter items
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStyle = !currentStyleStr || product.style.toLowerCase() === currentStyleStr.toLowerCase();
    const matchesMaterial = !currentMaterialStr || product.material.toLowerCase() === currentMaterialStr.toLowerCase();
    const matchesFaceShape = !currentFaceShapeStr || product.faceShape.toLowerCase() === currentFaceShapeStr.toLowerCase();

    return matchesSearch && matchesStyle && matchesMaterial && matchesFaceShape;
  });

  const clearAllFilters = () => {
    setSelectedStyle('all');
    setSelectedMaterial('all');
    setSelectedFaceShape('all');
    setSearchTerm('');
    setFilterPreset({});
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-6">
      
      {/* Catalog Header */}
      <header className="mb-12">
        <span className="font-label-technical text-label-technical text-[#00687a] dark:text-[#acedff] uppercase tracking-widest font-bold">
          Precision Frames Collection
        </span>
        <h1 className="font-display-lg text-4xl font-bold text-[#131b2e] dark:text-[#dae2fd] mt-2 mb-4">
          Precision Frames
        </h1>
        <p className="font-body-md text-sm sm:text-base text-[#45464d] dark:text-gray-300 max-w-2xl leading-relaxed">
          Discover eyewear engineered for uncompromising clarity and high-fashion aesthetics. From clinical excellence to visionary design.
        </p>
      </header>

      {/* Filter and Search Bar Section */}
      <section className="mb-12 bg-white dark:bg-[#131b2e]/40 p-6 rounded-xl border border-[#c6c6cd]/20 shadow-sm">
        
        {/* Search input bar */}
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search precision frames, aerospace alloys, crystalline resin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#131b2e] border border-gray-200 dark:border-gray-850 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#00687a] focus:border-[#00687a]"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black cursor-pointer"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Categories toggles matching pixel-perfect filters layout */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-y-6 gap-x-4 border-b border-[#c6c6cd]/20 pb-6 overflow-x-auto hide-scrollbar">
            
            {/* Style Filters */}
            <div className="flex flex-col gap-2 min-w-[240px]">
              <span className="font-label-technical text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                Style Segment
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Styles' },
                  { id: 'minimalist', label: 'Minimalist' },
                  { id: 'avant-garde', label: 'Avant-Garde' },
                  { id: 'classic', label: 'Classic' }
                ].map((style) => {
                  const isActive = selectedStyle === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`px-4 py-1.5 border rounded-lg font-label-technical text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#131b2e] border-[#131b2e] text-white font-bold'
                          : 'border-gray-300 text-gray-700 hover:border-black dark:text-gray-300 dark:border-gray-700 dark:hover:border-white'
                      }`}
                    >
                      {style.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-px h-10 bg-[#c6c6cd]/30 hidden lg:block mx-2"></div>

            {/* Material Filters */}
            <div className="flex flex-col gap-2 min-w-[240px]">
              <span className="font-label-technical text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                Material Base
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Materials' },
                  { id: 'acetate', label: 'Acetate' },
                  { id: 'titanium', label: 'Titanium' },
                  { id: 'carbon-fiber', label: 'Carbon Fiber' }
                ].map((material) => {
                  const isActive = selectedMaterial === material.id;
                  return (
                    <button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      className={`px-4 py-1.5 border rounded-lg font-label-technical text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#131b2e] border-[#131b2e] text-white font-bold'
                          : 'border-gray-300 text-gray-700 hover:border-black dark:text-gray-300 dark:border-gray-700 dark:hover:border-white'
                      }`}
                    >
                      {material.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-px h-10 bg-[#c6c6cd]/30 hidden lg:block mx-2"></div>

            {/* Face Shape Filters */}
            <div className="flex flex-col gap-2 min-w-[200px]">
              <span className="font-label-technical text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                By Face Shape
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Shapes' },
                  { id: 'oval', label: 'Oval' },
                  { id: 'square', label: 'Square' },
                  { id: 'round', label: 'Round' }
                ].map((shape) => {
                  const isActive = selectedFaceShape === shape.id;
                  return (
                    <button
                      key={shape.id}
                      onClick={() => setSelectedFaceShape(shape.id)}
                      className={`px-4 py-1.5 border rounded-lg font-label-technical text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#131b2e] border-[#131b2e] text-white font-bold'
                          : 'border-gray-300 text-gray-700 hover:border-black dark:text-gray-300 dark:border-gray-700 dark:hover:border-white'
                      }`}
                    >
                      {shape.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Active stats details & reset triggers */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-label-technical">
            <span>
              Showing <strong className="text-black dark:text-white">{filteredProducts.length}</strong> of {products.length} precision models
            </span>
            {(selectedStyle !== 'all' || selectedMaterial !== 'all' || selectedFaceShape !== 'all' || searchTerm !== '') && (
              <button
                onClick={clearAllFilters}
                className="text-[#00687a] dark:text-[#acedff] hover:underline cursor-pointer uppercase font-semibold"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

      </section>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <p className="font-headline-lg-mobile text-gray-400">No matching frames found.</p>
          <p className="text-xs text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
          <button
            onClick={clearAllFilters}
            className="mt-6 px-6 py-2.5 bg-[#131b2e] text-white font-label-technical text-xs tracking-wider rounded"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isFav = favorites.includes(product.id);
            return (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative flex flex-col bg-white dark:bg-[#131b2e]/30 border border-[#c6c6cd]/25 overflow-hidden transition-all duration-300 hover:shadow-xl rounded-lg"
              >
                {/* Photo aspect wrapper */}
                <div className="relative aspect-square bg-[#eceef0] dark:bg-[#1e2638] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={product.description}
                    referrerPolicy="no-referrer"
                    src={product.image}
                  />

                  {/* Hot Tags Badges */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className={`font-label-technical text-[9px] px-2 py-1 uppercase tracking-tighter rounded-sm ${
                        product.badgeType === 'new' 
                          ? 'bg-[#00687a] text-white' 
                          : 'bg-[#cba72f] text-[#241a00] font-bold'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Virtual Try-on Floating Action */}
                  <button
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setView('try-on');
                    }}
                    className="absolute top-4 right-4 bg-white/80 dark:bg-black/60 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-[#131b2e] dark:text-white shadow-md cursor-pointer"
                    title="Virtual Try-On"
                  >
                    <SlidersHorizontal size={16} />
                  </button>
                </div>

                {/* Details Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="font-headline-lg-mobile text-base sm:text-lg font-bold text-[#131b2e] dark:text-white">
                      {product.name}
                    </h3>
                    <span className="font-label-technical text-[#00687a] dark:text-[#acedff] font-bold text-sm">
                      ${product.price}
                    </span>
                  </div>
                  
                  <p className="font-body-md text-xs sm:text-sm text-[#45464d] dark:text-gray-400 mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Action row at bottom */}
                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => handleViewDetails(product.id)}
                      className="flex-grow bg-[#131b2e] hover:bg-[#3f465c] text-white py-2.5 font-label-technical text-[10px] sm:text-xs uppercase tracking-widest transition-colors text-center font-bold cursor-pointer"
                    >
                      View Details
                    </button>
                    
                    <button
                      onClick={() => onToggleFavorite(product.id)}
                      className={`aspect-square px-3 border border-[#c6c6cd]/30 dark:border-gray-700 transition-all cursor-pointer ${
                        isFav 
                          ? 'bg-rose-50 border-rose-300 text-rose-500' 
                          : 'bg-[#e6e8ea] hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 hover:text-rose-500'
                      }`}
                      title={isFav ? "Remove Favorite" : "Favorite Model"}
                    >
                      <Heart size={14} fill={isFav ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      )}

      {/* Featured Bento Row */}
      <section className="mt-16 relative flex flex-col md:flex-row bg-white dark:bg-[#131b2e]/30 border border-[#c6c6cd]/25 overflow-hidden group rounded-xl">
        <div className="md:w-3/5 aspect-video md:aspect-auto overflow-hidden relative min-h-[250px]">
          <img
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            alt="Artistic high-fashion photograph of optical store interior"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD0breAYC7GBlmiVRIeI3n8OIa40SW3ZuuXS5uhl9tadgSpHjKHjXYmvbS35Pj770vconvgiTaBLH07ROyLrk9tymFuhwZdcgshlTJ7K7B8Tz6krEN4VDN8jQd_wuhDp5TpZJJhAacFQ699pRws8rp4rn0toXZEfK5nOkOK_KJ70DPLVjyydgw7HwaLENOnuEXXh24O1jUdednoXKpmpK7y4cOySl3ewgpDQbJD9-EV9iMVR47sNgO-J8gLV678-Ats5xXhfzdMDw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-[#131b2e] dark:via-[#131b2e]/60"></div>
        </div>
        <div className="md:w-2/5 p-8 flex flex-col justify-center relative z-10">
          <span className="font-label-technical text-label-technical text-[#00687a] dark:text-[#acedff] mb-4 uppercase tracking-[0.2em] font-bold">
            Limited Edition
          </span>
          <h2 className="font-headline-lg text-2xl font-bold text-[#131b2e] dark:text-[#dae2fd] mb-4">
            The Prism Series
          </h2>
          <p className="font-body-md text-sm text-[#45464d] dark:text-gray-300 mb-8 leading-relaxed">
            A conceptual collaboration exploring the refraction of light through multi-faceted crystalline acetate. Available only in offline boutiques of SoHo and Kannur Talap.
          </p>
          <button 
            onClick={() => handleViewDetails('crystalline-01')}
            className="inline-flex items-center gap-2 font-label-technical text-xs font-bold text-[#131b2e] dark:text-[#acedff] group-hover:gap-4 transition-all uppercase tracking-widest text-left"
          >
            Explore Prisms &rarr;
          </button>
        </div>
      </section>

    </div>
  );
}
