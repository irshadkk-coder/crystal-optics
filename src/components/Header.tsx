import React, { useState } from 'react';
import { Menu, X, ShieldAlert, ShoppingBag, Search, Eye, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  isAdminLoggedIn: boolean;
  onAdminLogout: () => void;
  onRequestAdminLogin: () => void;
  cartCount: number;
}

export default function Header({
  currentView,
  setView,
  isAdminLoggedIn,
  onAdminLogout,
  onRequestAdminLogin,
  cartCount
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'Shop' },
    { id: 'try-on', label: 'Bespoke Try-On' },
    { id: 'store-details', label: 'Boutiques' },
    { id: 'book-test', label: 'Book Eye Test' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  const handleNavigate = (viewId: string) => {
    setView(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav id="top-app-bar" className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-16 bg-white/80 dark:bg-[#131b2e]/85 backdrop-blur-md border-b border-[#c6c6cd]/30 shadow-sm transition-all">
        {/* Left Elements: Logo and Burger */}
        <div className="flex items-center gap-4">
          <button 
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#131b2e] dark:text-[#dae2fd] p-1 cursor-pointer hover:opacity-80"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          
          <span 
            onClick={() => handleNavigate('home')}
            className="font-headline-lg-mobile text-headline-lg-mobile tracking-widest text-[#131b2e] dark:text-[#dae2fd] cursor-pointer select-none hover:opacity-90"
          >
            CRYSTAL
          </span>
        </div>

        {/* Center Elements: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`font-label-technical text-label-technical tracking-widest uppercase transition-all duration-200 cursor-pointer border-b pb-1 ${
                  isActive 
                    ? 'text-[#00687a] dark:text-[#acedff] font-bold border-[#00687a] dark:border-[#acedff]' 
                    : 'text-[#45464d] dark:text-[#c6c6cd] hover:text-black dark:hover:text-white border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Elements: Quick Actions */}
        <div className="flex items-center gap-4">


          <button 
            onClick={() => handleNavigate('catalog')}
            className="text-[#131b2e] dark:text-[#dae2fd] hover:opacity-80 transition-opacity cursor-pointer relative"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#00687a] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Slide-out Mobile Navigation drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white dark:bg-[#131b2e] flex flex-col md:hidden p-6 border-b border-[#c6c6cd]/30 animate-fade-in">
          <div className="flex flex-col gap-6 py-4">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left font-label-technical text-sm tracking-widest uppercase py-1 border-l-2 pl-4 transition-all ${
                    isActive 
                      ? 'text-[#00687a] dark:text-[#acedff] font-bold border-[#00687a]' 
                      : 'text-[#45464d] dark:text-[#c6c6cd] border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            

          </div>
        </div>
      )}
    </>
  );
}
