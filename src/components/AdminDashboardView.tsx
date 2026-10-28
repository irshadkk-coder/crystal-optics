'use client';

import React, { useState } from 'react';
import { Product, Appointment, Inquiry } from '../types';
import { Trash2, Edit3, PlusCircle, CheckCircle, Calendar, RefreshCw, Layers, Sparkles, Filter, ExternalLink, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface AdminDashboardViewProps {
  products: Product[];
  appointments: Appointment[];
  inquiries: Inquiry[];
  onAddProduct: (product: Omit<Product, 'id'>) => void;
  onDeleteProduct: (id: string) => void;
  onUpdateAppointmentStatus: (id: string, status: Appointment['status']) => void;
  onDeleteAppointment: (id: string) => void;
  onAddInquiry?: (inq: Omit<Inquiry, 'id'>) => void;
}

export default function AdminDashboardView({
  products,
  appointments,
  inquiries,
  onAddProduct,
  onDeleteProduct,
  onUpdateAppointmentStatus,
  onDeleteAppointment,
  onAddInquiry
}: AdminDashboardViewProps) {
  const [activeTab, setActiveTab] = useState<'products' | 'appointments' | 'inquiries'>('products');

  // Input states to add product
  const [newProdName, setNewProdName] = useState('');
  const [newProdPrice, setNewProdPrice] = useState<number>(350);
  const [newProdImage, setNewProdImage] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuD56m1xa5-yYx5RVJ4uF598Qdr9k7OrKZxbgY4CBv65HJL-5UAisCB1sTkIZBOcRFAxZT9WpbQU87scz0lWhA1u6OB-8o8T3SS0brR7dY2_TBOjgsfhLbDOWlZB5tYxsHLqoPNCSlrw1N7EXBN_B7AOiP0g1eCOm_ib3wFohFIXIWIo82J6LOFJlGicC9wjScvHO4dzTt-laToGg6PH7ZLwo6SwcY-R4qWwhURURzFPuMRt66ru6WRBuDGsmvj6A_yCGCT_m8t9ioY');
  const [newProdStyle, setNewProdStyle] = useState<'classic' | 'minimalist' | 'avant-garde'>('classic');
  const [newProdMaterial, setNewProdMaterial] = useState<'acetate' | 'titanium' | 'carbon-fiber'>('titanium');
  const [newProdFaceShape, setNewProdFaceShape] = useState<'oval' | 'square' | 'round'>('oval');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Submit new product
  const handleCreateProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName || !newProdDesc) {
      alert("Please fill out product name and descriptive tags.");
      return;
    }

    onAddProduct({
      name: newProdName,
      price: Number(newProdPrice) || undefined,
      priceDisplay: newProdPrice ? `₹ ${newProdPrice}` : '₹ Price on request',
      category: 'eyeglasses',
      image: newProdImage,
      style: newProdStyle,
      material: newProdMaterial,
      faceShape: newProdFaceShape,
      description: newProdDesc,
      rating: 5.0
    });

    setSuccessMsg('Product Catalog record registered successfully!');
    setNewProdName('');
    setNewProdDesc('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleCustomerWhatsAppReply = (inq: Inquiry) => {
    const textMsg = encodeURIComponent(
      `Hello ${inq.fullName}! This is Crystal Optics. We received your inquiry for frame model "${inq.productName || ''}". How can we assist you today? Thank you!`
    );
    window.open(`https://wa.me/${(inq.phone || '').replace(/\s+/g, '')}?text=${textMsg}`, '_blank');
  };

  // SVG customized bars plotting appointment load per showroom
  const getBoutiqueAppointmentStats = () => {
    const sohoCount = appointments.filter(a => a.storeName === 'soho').length;
    const villageCount = appointments.filter(a => a.storeName === 'west-village').length;
    const kannurCount = appointments.filter(a => a.storeName === 'kannur').length;
    const total = appointments.length || 1;

    return [
      { id: 'kannur', name: 'Kannur Showroom', count: kannurCount, percent: (kannurCount / total) * 100 },
      { id: 'soho', name: 'SoHo Flagship', count: sohoCount, percent: (sohoCount / total) * 100 },
      { id: 'west-village', name: 'West Village', count: villageCount, percent: (villageCount / total) * 100 },
    ];
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-6">
      
      {/* Header */}
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
        <div>
          <span className="font-label-technical text-label-technical text-[#00687a] dark:text-[#acedff] uppercase tracking-widest font-bold">
            Staff Analytics & Registry Console
          </span>
          <h1 className="font-display-lg text-3xl font-bold text-[#131b2e] dark:text-[#dae2fd] mt-1">
            Crystal Optics Dashboard
          </h1>
          <p className="text-sm text-[#45464d] dark:text-gray-300 font-body-md mt-1">
            Back-office operations logs to manage products catalog, eye test sessions, and customer inquiries.
          </p>
        </div>

        {/* Curation Tabs Switchers */}
        <div className="flex bg-gray-100 dark:bg-[#131b2e] p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2.5 text-xs font-label-technical uppercase tracking-wider rounded-md cursor-pointer transition-all ${
              activeTab === 'products' ? 'bg-[#131b2e] text-white font-bold shadow-sm' : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            Products ({products.length})
          </button>
          
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2.5 text-xs font-label-technical uppercase tracking-wider rounded-md cursor-pointer transition-all ${
              activeTab === 'appointments' ? 'bg-[#131b2e] text-white font-bold shadow-sm' : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            Appointments ({appointments.length})
          </button>
          
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2.5 text-xs font-label-technical uppercase tracking-wider rounded-md cursor-pointer transition-all ${
              activeTab === 'inquiries' ? 'bg-[#131b2e] text-white font-bold shadow-sm' : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            Customer Inquiries ({inquiries.length})
          </button>
        </div>
      </header>

      {/* Analytics Cards Dashboard Row */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        {/* Card 1: Active Frames */}
        <div className="bg-white dark:bg-[#1e2638] p-5 rounded-lg border border-[#c6c6cd]/25 flex items-center justify-between shadow-sm">
          <div>
            <span className="font-label-technical text-[10px] text-gray-400 uppercase">Product Catalog</span>
            <p className="text-3xl font-bold text-[#131b2e] dark:text-white mt-1">{products.length}</p>
            <p className="text-[10px] text-cyan-600 uppercase font-semibold mt-1">Preloaded designs online</p>
          </div>
          <div className="p-3 bg-cyan-100/40 rounded-full text-cyan-700">
            <Layers size={20} />
          </div>
        </div>

        {/* Card 2: Appointments Enrolled */}
        <div className="bg-white dark:bg-[#1e2638] p-5 rounded-lg border border-[#c6c6cd]/25 flex items-center justify-between shadow-sm">
          <div>
            <span className="font-label-technical text-[10px] text-gray-400 uppercase">Patient Sessions</span>
            <p className="text-3xl font-bold text-[#131b2e] dark:text-white mt-1">{appointments.length}</p>
            <p className="text-[10px] text-yellow-600 uppercase font-semibold mt-1">
              Pending: {appointments.filter(a => a.status === 'pending').length} checkups
            </p>
          </div>
          <div className="p-3 bg-yellow-100/40 rounded-full text-yellow-700">
            <Calendar size={20} />
          </div>
        </div>

        {/* Card 3: Customer Leads */}
        <div className="bg-white dark:bg-[#1e2638] p-5 rounded-lg border border-[#c6c6cd]/25 flex items-center justify-between shadow-sm">
          <div>
            <span className="font-label-technical text-[10px] text-gray-400 uppercase">Customer Leads</span>
            <p className="text-3xl font-bold text-[#131b2e] dark:text-white mt-1">{inquiries.length}</p>
            <p className="text-[10px] text-emerald-600 uppercase font-semibold mt-1">Retail customer inquiries</p>
          </div>
          <div className="p-3 bg-emerald-100/40 rounded-full text-emerald-700">
            <MessageCircle size={20} />
          </div>
        </div>

        {/* Custom Diagnostic Appointment Chart Container */}
        <div className="bg-white dark:bg-[#1e2638] p-5 rounded-lg border border-[#c6c6cd]/25 shadow-sm space-y-3">
          <span className="font-label-technical text-[10px] text-gray-400 uppercase">Session load breakdown</span>
          <div className="space-y-1.5">
            {getBoutiqueAppointmentStats().map((bt) => (
              <div key={bt.id} className="space-y-0.5">
                <div className="flex justify-between items-center text-[10px] font-label-technical">
                  <span className="truncate text-gray-650 dark:text-gray-300">{bt.name}</span>
                  <strong>{bt.count}</strong>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-[#00687a] h-full" style={{ width: `${bt.count === 0 ? 0 : Math.max(5, bt.percent)}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* CORE ACTIVE PANEL VIEW */}

      {/* TAB A: Product catalog registry controls */}
      {activeTab === 'products' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
          
          {/* Table of active products (7 columns) */}
          <div className="lg:col-span-8 bg-white dark:bg-[#131b2e]/30 border border-[#c6c6cd]/25 rounded-xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[#c6c6cd]/10 flex justify-between items-center">
              <h3 className="font-headline-lg text-base font-bold text-[#131b2e] dark:text-white uppercase tracking-wider">
                Registry Records list
              </h3>
              <span className="font-label-technical text-[11px] text-gray-400 uppercase">
                Showing {products.length} catalog items
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-body-md text-sm">
                <thead>
                  <tr className="border-b border-[#c6c6cd]/20 bg-gray-50 dark:bg-slate-900 text-xs font-label-technical uppercase text-gray-400">
                    <th className="p-4">Visual Name</th>
                    <th className="p-4">Style</th>
                    <th className="p-4">Material</th>
                    <th className="p-4">Price</th>
                    <th className="p-4 text-right">Registry Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50/50 transition">
                      <td className="p-4 flex items-center gap-3">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="h-10 w-10 object-contain bg-gray-50 border border-gray-100 rounded" 
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <strong className="text-[#131b2e] dark:text-white font-bold">{p.name}</strong>
                          <p className="text-[10px] text-gray-400 uppercase tracking-tighter truncate max-w-[150px]">{p.description}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] tracking-wide uppercase font-label-technical rounded">
                          {p.style}
                        </span>
                      </td>
                      <td className="p-4 capitalize text-xs">{p.material}</td>
                      <td className="p-4 text-cyan-600 font-bold font-label-technical text-xs">{p.priceDisplay || '₹ On request'}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => onDeleteProduct(p.id)}
                          className="text-red-500 hover:text-red-700 hover:scale-105 p-1 transition cursor-pointer"
                          title="Delete Segment Record"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Form to insert custom product (4 columns) */}
          <div className="lg:col-span-4 bg-white dark:bg-[#131b2e]/45 border border-[#c6c6cd]/25 p-6 rounded-xl shadow-sm">
            <h3 className="font-headline-lg text-base font-bold text-[#131b2e] dark:text-white mb-6 uppercase tracking-wider flex items-center gap-2 border-b border-[#c6c6cd]/10 pb-3">
              <PlusCircle size={18} className="text-[#00687a]" />
              ADD CATALOG ITEM
            </h3>

            {successMsg && (
              <div className="bg-green-50 text-green-700 py-3 px-4 rounded border border-green-200 text-xs font-label-technical uppercase tracking-wider text-center mb-6">
                {successMsg}
              </div>
            )}

            <form onSubmit={handleCreateProductSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                  Frame Branding name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Aero-Titanium Gold"
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 dark:border-gray-800 rounded p-2.5 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                  Base Catalog Price ($)
                </label>
                <input
                  type="number"
                  required
                  min="50"
                  max="1200"
                  value={newProdPrice}
                  onChange={(e) => setNewProdPrice(Number(e.target.value))}
                  className="w-full bg-gray-50 border border-gray-200 dark:border-gray-800 rounded p-2.5 text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                    Segment
                  </label>
                  <select
                    value={newProdStyle}
                    onChange={(e: any) => setNewProdStyle(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 dark:border-gray-800 rounded p-2 text-xs focus:outline-none"
                  >
                    <option value="classic">Classic</option>
                    <option value="minimalist">Minimalist</option>
                    <option value="avant-garde">Avant-Garde</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                    Material Base
                  </label>
                  <select
                    value={newProdMaterial}
                    onChange={(e: any) => setNewProdMaterial(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 dark:border-gray-800 rounded p-2 text-xs focus:outline-none"
                  >
                    <option value="acetate">Acetate</option>
                    <option value="titanium">Titanium</option>
                    <option value="carbon-fiber">Carbon Fiber</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                  Perfect Hotlink Image URL
                </label>
                <input
                  type="url"
                  required
                  value={newProdImage}
                  onChange={(e) => setNewProdImage(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 dark:border-gray-800 rounded p-2.5 text-xs text-gray-550 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                  Description tags
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Aerospace grade construction with custom anti-wear pivot hinges..."
                  value={newProdDesc}
                  onChange={(e) => setNewProdDesc(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 dark:border-gray-800 rounded p-2.5 text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#131b2e] hover:bg-slate-700 text-white py-3.5 font-label-technical uppercase text-xs tracking-widest font-extrabold rounded cursor-pointer"
              >
                Register design Record
              </button>
            </form>
          </div>

        </div>
      )}

      {/* TAB B: Appointment ledger statuses */}
      {activeTab === 'appointments' && (
        <div className="space-y-6 animate-fade-in">
          
          <div className="bg-white dark:bg-[#131b2e]/30 border border-[#c6c6cd]/25 rounded-md p-5 flex justify-between items-center flex-wrap gap-4">
            <h3 className="font-headline-lg text-base font-bold text-[#131b2e] dark:text-white uppercase tracking-wider">
              Assigned Diagnostic Sessions Logs
            </h3>
            <span className="font-label-technical text-xs text-gray-400 uppercase tracking-widest">
              Encrypted State tracking
            </span>
          </div>

          {appointments.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl font-headline-lg-mobile text-gray-400 uppercase tracking-wider border border-dashed border-gray-300">
              No Appointments scheduled in records databases.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map((appt) => (
                <div 
                  key={appt.id}
                  className="bg-white dark:bg-[#1e2638] border border-[#c6c6cd]/25 p-6 rounded-lg flex flex-col justify-between shadow-sm relative overflow-hidden"
                >
                  {/* Status Tag indicator top right */}
                  <span className={`absolute top-4 right-4 text-[10px] font-label-technical px-2.5 py-1 uppercase tracking-wide rounded-sm font-bold ${
                    appt.status === 'pending'
                      ? 'bg-amber-100 text-[#543b00] border border-amber-200'
                      : appt.status === 'approved' || appt.status === 'confirmed'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {appt.status}
                  </span>

                  <div className="space-y-4">
                    <div>
                      <span className="font-label-technical text-[10px] text-gray-400 uppercase block">Reserved checkup</span>
                      <strong className="text-[#131b2e] dark:text-white font-bold text-base sm:text-lg block mt-0.5">{appt.fullName}</strong>
                    </div>

                    <div className="space-y-2 font-body-md text-xs sm:text-sm text-[#45464d] dark:text-gray-300">
                      <p><span className="text-gray-400 mr-2 uppercase text-[10px] font-label-technical">Boutique:</span> <span className="font-semibold">{appt.storeName?.toUpperCase() || ''}</span></p>
                      <p><span className="text-gray-400 mr-2 uppercase text-[10px] font-label-technical">Schedule:</span> <span className="font-bold text-[#00687a] dark:text-[#acedff]">{appt.date} ({appt.time})</span></p>
                      <p><span className="text-gray-400 mr-2 uppercase text-[10px] font-label-technical">Contact:</span> <span className="font-semibold">{appt.phone}</span></p>
                      <p><span className="text-gray-400 mr-2 uppercase text-[10px] font-label-technical">Reason:</span> <span className="font-semibold">{appt.reason || 'General session'}</span></p>
                    </div>
                  </div>

                  {/* Actions status controls */}
                  <div className="border-t border-gray-150 pt-4 mt-6 flex justify-between gap-3 items-center">
                    <button
                      onClick={() => onDeleteAppointment(appt.id)}
                      className="text-red-500 hover:text-red-700 hover:underline text-xs font-label-technical uppercase cursor-pointer"
                    >
                      Evict appointment
                    </button>

                    <div className="flex gap-2">
                      {appt.status === 'pending' && (
                        <button
                          onClick={() => onUpdateAppointmentStatus(appt.id, 'confirmed')}
                          className="px-3 py-1 bg-blue-600 text-white text-[10px] font-label-technical uppercase font-bold tracking-wide rounded cursor-pointer hover:bg-blue-700"
                        >
                          Approve Slot
                        </button>
                      )}
                      
                      {(appt.status === 'approved' || appt.status === 'confirmed') && (
                        <button
                          onClick={() => onUpdateAppointmentStatus(appt.id, 'completed')}
                          className="px-3 py-1 bg-green-600 text-white text-[10px] font-label-technical uppercase font-bold tracking-wide rounded cursor-pointer hover:bg-green-700"
                        >
                          Mark Done
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      )}

      {/* TAB C: Customer inquiries */}
      {activeTab === 'inquiries' && (
        <div className="space-y-6 animate-fade-in">
          
          <div className="bg-white dark:bg-[#131b2e]/30 border border-[#c6c6cd]/25 p-5 rounded-md flex justify-between items-center">
            <h3 className="font-headline-lg text-base font-bold text-[#131b2e] dark:text-white uppercase tracking-wider">
              Customer Inquiries List
            </h3>
            <span className="font-label-technical text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Retail Optical Inquiries
            </span>
          </div>

          {inquiries.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl font-headline-lg-mobile text-gray-400 uppercase tracking-wider border border-dashed border-gray-300">
              No Client Inquiries reported in databases yet.
            </div>
          ) : (
            <div className="space-y-4">
              {inquiries.map((inq) => (
                <div 
                  key={inq.id}
                  className="bg-white dark:bg-[#1e2638] border border-[#c6c6cd]/25 p-6 rounded-lg flex flex-col sm:flex-row justify-between gap-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="space-y-3 flex-grow">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <strong className="text-[#131b2e] dark:text-white font-bold text-base sm:text-lg">{inq.fullName}</strong>
                      <span className="text-xs text-gray-400 italic">({inq.clinicName || 'Retail Optician'})</span>
                    </div>

                    <p className="font-body-md text-xs sm:text-sm text-[#45464d] dark:text-gray-300">
                      Representative inquiry statement: <strong className="text-gray-900 dark:text-white">"{inq.message}"</strong>
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-body-md text-xs pt-2">
                      <div className="p-2 border border-slate-100 rounded">
                        <span className="text-gray-400 block uppercase text-[9px] font-label-technical">Client Type</span>
                        <strong className="capitalize mt-0.5 block">{inq.type} Account</strong>
                      </div>
                      <div className="p-2 border border-slate-100 rounded">
                        <span className="text-gray-400 block uppercase text-[9px] font-label-technical">Model Target</span>
                        <strong className="mt-0.5 block truncate">{inq.productName}</strong>
                      </div>
                      <div className="p-2 border border-slate-100 rounded">
                        <span className="text-gray-400 block uppercase text-[9px] font-label-technical">Bulk Quantity</span>
                        <strong className="mt-0.5 block text-cyan-600 font-label-technical">{inq.quantityRequested} unites</strong>
                      </div>
                      <div className="p-2 border border-slate-100 rounded">
                        <span className="text-gray-400 block uppercase text-[9px] font-label-technical">Direct Contact</span>
                        <strong className="mt-0.5 block truncate">{inq.phone}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Primary reply action block */}
                  <div className="flex flex-col justify-center sm:border-l sm:border-gray-100 sm:pl-8 sm:min-w-[150px] gap-2">
                    <button
                      onClick={() => handleCustomerWhatsAppReply(inq)}
                      className="bg-[#25D366] hover:opacity-90 text-white font-label-technical text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-3 rounded flex items-center justify-center gap-1.5 cursor-pointer shadow"
                    >
                      <ExternalLink size={12} />
                      WhatsApp Setup
                    </button>
                    <a
                      href={`mailto:${inq.email}`}
                      className="border border-gray-300 dark:border-gray-700 text-center text-[#131b2e] dark:text-white hover:bg-gray-50 text-[10px] sm:text-xs font-label-technical uppercase tracking-wider py-2.5 rounded cursor-pointer"
                    >
                      Email Inquiry
                    </a>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
