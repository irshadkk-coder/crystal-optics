import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Views
import HomeView from './components/HomeView';
import CatalogView from './components/CatalogView';
import ProductDetailView from './components/ProductDetailView';
import VirtualTryOnView from './components/VirtualTryOnView';
import StoreDetailsView from './components/StoreDetailsView';
import EyeTestBookingView from './components/EyeTestBookingView';
import AdminDashboardView from './components/AdminDashboardView';
import PortfolioView from './components/PortfolioView';

// Modals
import AdminLoginModal from './components/AdminLoginModal';
import WholesaleInquiryModal from './components/WholesaleInquiryModal';

// Static / Types
import { INITIAL_PRODUCTS, REVIEWS } from './data';
import { Product, Appointment, Inquiry } from './types';
import { Store, ShoppingBag, ArrowRight, Layers, LogOut, Check, Sparkles } from 'lucide-react';

export default function App() {
  // Navigation State
  const [currentView, setView] = useState<string>('home');

  // Core collections data state (supports Admin additions/deletions)
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  // Appointments ledger state
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 'appt-1',
      patientName: 'Irshad Rahman',
      phone: '098469 99966',
      email: 'irshad@example.com',
      storeId: 'kannur',
      date: '2026-06-15',
      time: '11:00 AM',
      reason: 'Bespoke Frame Fitting',
      status: 'approved'
    },
    {
      id: 'appt-2',
      patientName: 'Meera Nair',
      phone: '098469 99966',
      email: 'meera@example.com',
      storeId: 'soho',
      date: '2026-06-18',
      time: '03:00 PM',
      reason: 'Ophthalmic Strain Diagnostic',
      status: 'pending'
    }
  ]);

  // Wholesale bulk inquiry requests
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: 'inq-1',
      name: 'Dr. Hari Lal',
      clinicName: 'Ananthapuri Eye Clinic',
      phone: '098469 99966',
      email: 'harilal@ananthapuri.org',
      frameInterest: 'Aero-Titanium X',
      quantityRequested: 150,
      message: 'Requesting wholesale pricing quote for 150 units of Aero-Titanium X frames under clinical dispatch tier terms.',
      type: 'wholesale'
    }
  ]);

  // Selected item contexts
  const [selectedProductId, setSelectedProductId] = useState<string>('crystal-one');
  const [selectedTryOnProduct, setSelectedTryOnProduct] = useState<Product | undefined>(undefined);

  // Miscellaneous preferences
  const [favorites, setFavorites] = useState<string[]>(['crystal-one', 'helix-gold']);
  const [cartCount, setCartCount] = useState<number>(0);
  const [filterPreset, setFilterPreset] = useState<{ style?: string; material?: string; faceShape?: string }>({});

  // Administration State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [showAdminLogin, setShowAdminLogin] = useState<boolean>(false);
  const [showWholesaleModal, setShowWholesaleModal] = useState<boolean>(false);

  // Auto-scroll to top on navigation turns
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView, selectedProductId]);

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product: Product) => {
    setCartCount(prev => prev + 1);
  };

  const handleAddAppointment = (apptData: Omit<Appointment, 'id' | 'status'>) => {
    const newAppt: Appointment = {
      id: `appt-${Date.now()}`,
      status: 'pending',
      ...apptData
    };
    setAppointments(prev => [newAppt, ...prev]);
  };

  const handleAddProduct = (prodData: Omit<Product, 'id'>) => {
    const newProd: Product = {
      id: `prod-${Date.now()}`,
      ...prodData
    };
    setProducts(prev => [newProd, ...prev]);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleUpdateAppointmentStatus = (id: string, status: Appointment['status']) => {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  const handleDeleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  const handleAddInquiry = (inqData: Omit<Inquiry, 'id'>) => {
    const newInq: Inquiry = {
      id: `inq-${Date.now()}`,
      ...inqData
    };
    setInquiries(prev => [newInq, ...prev]);
  };

  const activeProductObj = products.find(p => p.id === selectedProductId) || products[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#acedff]/30">

      {/* Common Header Navigation */}
      <Header 
        currentView={currentView}
        setView={setView}
        cartCount={cartCount}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={() => setIsAdminLoggedIn(false)}
        onRequestAdminLogin={() => setShowAdminLogin(true)}
      />

      {/* Main Sandbox Frame with padding relative to Header */}
      <main className="flex-grow pt-16">
        
        {currentView === 'home' && (
          <HomeView 
            setView={setView}
            onFilterPreset={(preset) => {
              setFilterPreset(preset);
            }}
          />
        )}

        {currentView === 'catalog' && (
          <CatalogView 
            products={products}
            setView={setView}
            setSelectedProductId={setSelectedProductId}
            filterPreset={filterPreset}
            setFilterPreset={setFilterPreset}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        )}

        {currentView === 'product-detail' && (
          <ProductDetailView 
            product={activeProductObj}
            setView={setView}
            onAddToCart={handleAddToCart}
            onBookTest={() => setView('book-test')}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        )}

        {currentView === 'try-on' && (
          <VirtualTryOnView 
            products={products}
            selectedProduct={selectedTryOnProduct}
            setSelectedProduct={setSelectedTryOnProduct}
            setView={setView}
          />
        )}

        {currentView === 'store-details' && (
          <StoreDetailsView 
            initialReviews={REVIEWS}
            onBookTest={() => setView('book-test')}
          />
        )}

        {currentView === 'book-test' && (
          <EyeTestBookingView 
            onAddAppointment={handleAddAppointment}
            setView={setView}
          />
        )}

        {currentView === 'portfolio' && (
          <PortfolioView 
            setView={setView}
          />
        )}

        {currentView === 'admin' && (
          isAdminLoggedIn ? (
            <AdminDashboardView 
              products={products}
              appointments={appointments}
              inquiries={inquiries}
            />
          ) : (
            <div className="max-w-md mx-auto text-center py-20 px-6 space-y-6">
              <span className="font-label-technical text-xs tracking-widest text-red-500 font-bold uppercase block">
                Access Prohibited
              </span>
              <h2 className="font-display-lg text-2xl font-bold">Admin Crate Locked</h2>
              <p className="font-body-md text-sm text-gray-400">
                Authorized clinicians require an active session check to examine logs.
              </p>
              <button
                onClick={() => setShowAdminLogin(true)}
                className="bg-[#131b2e] hover:bg-slate-700 text-white font-label-technical text-xs uppercase tracking-widest py-3 px-6 rounded font-extrabold cursor-pointer"
              >
                Sign In Credentials
              </button>
            </div>
          )
        )}

      </main>

      {/* Sticky Floating Action Button: Wholesale Bulk Order request trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowWholesaleModal(true)}
          className="bg-[#00687a] hover:bg-cyan-800 text-white shadow-xl px-5 py-3.5 rounded-full flex items-center gap-2 hover:-translate-y-1 active:translate-y-0 transition-all font-label-technical text-xs uppercase tracking-wider font-extrabold cursor-pointer"
          title="Wholesale Distributor Quote"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          Wholesale Quote
        </button>
      </div>

      {/* Common Footer Layout */}
      <Footer 
        setView={setView} 
        onRequestAdminLogin={() => setShowAdminLogin(true)}
      />

      {/* MODAL ALIGNMENTS */}

      {/* 1. Admin Login challenge popup */}
      {showAdminLogin && (
        <AdminLoginModal 
          onClose={() => setShowAdminLogin(false)}
          onSuccessLogin={() => {
            setIsAdminLoggedIn(true);
            setView('admin');
          }}
        />
      )}

      {/* 2. Global Wholesale Inquiry popup */}
      {showWholesaleModal && (
        <WholesaleInquiryModal 
          products={products}
          activeProduct={activeProductObj}
          onClose={() => setShowWholesaleModal(false)}
          onAddInquiry={handleAddInquiry}
        />
      )}

    </div>
  );
}
