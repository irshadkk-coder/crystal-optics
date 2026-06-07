import React, { useState } from 'react';
import { Product, Appointment, Inquiry } from '../types';
import { Calendar, Layers, MessageCircle, Eye, ShieldCheck, CheckCircle2, TrendingUp, Users, PackageSearch } from 'lucide-react';
import { motion } from 'motion/react';

interface AdminDashboardViewProps {
  products: Product[];
  appointments: Appointment[];
  inquiries: Inquiry[];
}

export default function AdminDashboardView({
  products,
  appointments,
  inquiries,
}: AdminDashboardViewProps) {
  const [activeTab, setActiveTab] = useState<'products' | 'appointments' | 'inquiries'>('products');

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
    <div className="py-8 max-w-7xl mx-auto px-6 font-sans">
      
      {/* Demo Badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-full font-label-technical text-[10px] uppercase tracking-wider font-bold shadow-sm">
          <Eye size={12} />
          Portfolio Demo • Read-Only
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-full font-label-technical text-[10px] uppercase tracking-wider font-bold shadow-sm">
          <ShieldCheck size={12} />
          Sample Business Data
        </div>
      </div>

      {/* Header */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 dark:border-gray-800 pb-8">
        <div>
          <span className="font-label-technical text-xs text-[#00687a] dark:text-[#acedff] uppercase tracking-widest font-bold">
            Business Management Dashboard
          </span>
          <h1 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#131b2e] dark:text-[#dae2fd] mt-2 mb-2 tracking-tight">
            Business Operations Overview
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-body-md max-w-xl leading-relaxed">
            A comprehensive overview of product inventory, client appointments, and wholesale operations. All displayed records are demonstration data for portfolio presentation purposes.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-gray-100 dark:bg-[#131b2e]/50 p-1.5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-inner">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
              activeTab === 'products' ? 'bg-white dark:bg-slate-800 text-[#131b2e] dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
            }`}
          >
            Products
          </button>
          
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
              activeTab === 'appointments' ? 'bg-white dark:bg-slate-800 text-[#131b2e] dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
            }`}
          >
            Appointments
          </button>
          
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
              activeTab === 'inquiries' ? 'bg-white dark:bg-slate-800 text-[#131b2e] dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
            }`}
          >
            Wholesale
          </button>
        </div>
      </header>

      {/* Analytics Cards Dashboard Row */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        <div className="bg-white dark:bg-[#1e2638] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <span className="font-label-technical text-[10px] text-gray-400 uppercase tracking-wider font-bold">Product Catalog</span>
            <p className="text-3xl font-bold text-[#131b2e] dark:text-white mt-1">{products.length}</p>
            <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1"><TrendingUp size={12}/> +12% this month</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl text-[#131b2e] dark:text-white">
            <Layers size={24} />
          </div>
        </div>

        <div className="bg-white dark:bg-[#1e2638] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <span className="font-label-technical text-[10px] text-gray-400 uppercase tracking-wider font-bold">Patient Sessions</span>
            <p className="text-3xl font-bold text-[#131b2e] dark:text-white mt-1">{appointments.length}</p>
            <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1"><TrendingUp size={12}/> High engagement</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl text-[#131b2e] dark:text-white">
            <Calendar size={24} />
          </div>
        </div>

        <div className="bg-white dark:bg-[#1e2638] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <span className="font-label-technical text-[10px] text-gray-400 uppercase tracking-wider font-bold">Wholesale Deals</span>
            <p className="text-3xl font-bold text-[#131b2e] dark:text-white mt-1">{inquiries.length}</p>
            <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1"><TrendingUp size={12}/> Active pipelines</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl text-[#131b2e] dark:text-white">
            <MessageCircle size={24} />
          </div>
        </div>

        {/* Appointment Distribution Chart */}
        <div className="bg-white dark:bg-[#1e2638] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4 flex flex-col justify-center">
          <span className="font-label-technical text-[10px] text-gray-400 uppercase tracking-wider font-bold">Appointment Distribution</span>
          <div className="space-y-2.5">
            {getBoutiqueAppointmentStats().map((bt) => (
              <div key={bt.id} className="space-y-1">
                <div className="flex justify-between items-center text-[10px] font-label-technical uppercase tracking-wide">
                  <span className="truncate text-gray-600 dark:text-gray-300">{bt.name}</span>
                  <strong className="text-[#131b2e] dark:text-white">{bt.count}</strong>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#131b2e] dark:bg-white h-full rounded-full transition-all duration-1000" style={{ width: `${bt.count === 0 ? 0 : Math.max(5, bt.percent)}%` }}></div>
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
          
          {/* Table of active products (8 columns) */}
          <div className="lg:col-span-8 bg-white dark:bg-[#1e2638] border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-slate-900/50">
              <h3 className="font-display-lg text-lg font-bold text-[#131b2e] dark:text-white tracking-tight">
                Business Records
              </h3>
              <span className="font-label-technical text-[10px] text-gray-500 uppercase font-bold tracking-wider bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm">
                {products.length} Active Items
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-body-md text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1e2638] text-[10px] font-label-technical uppercase tracking-widest text-gray-400">
                    <th className="p-5 font-bold">Product Name</th>
                    <th className="p-5 font-bold">Style</th>
                    <th className="p-5 font-bold">Material</th>
                    <th className="p-5 font-bold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-5 flex items-center gap-4">
                        <div className="h-12 w-12 bg-gray-50 dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 border border-gray-100 dark:border-gray-800">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="max-h-full max-w-full object-contain" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <strong className="text-[#131b2e] dark:text-white font-bold block">{p.name}</strong>
                          <p className="text-xs text-gray-500 mt-1 truncate max-w-[200px]">{p.description}</p>
                        </div>
                      </td>
                      <td className="p-5">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-[10px] tracking-widest uppercase font-bold rounded-full">
                          {p.style}
                        </span>
                      </td>
                      <td className="p-5 capitalize text-gray-700 dark:text-gray-300 text-sm">{p.material}</td>
                      <td className="p-5 text-[#131b2e] dark:text-white font-bold">${p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Portfolio Case Study & Features Section (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Features List */}
            <div className="bg-[#131b2e] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-10 -mt-10"></div>
              <h3 className="font-display-lg text-xl font-bold mb-6 flex items-center gap-2">
                <PackageSearch size={20} className="text-[#acedff]" />
                Features Demonstrated
              </h3>
              <ul className="space-y-4">
                {[
                  'Product Catalog Management',
                  'Appointment Scheduling System',
                  'Wholesale Inquiry Tracking',
                  'Inventory Management',
                  'Customer Relationship Management',
                  'Analytics Dashboard'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#acedff] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Study Highlights */}
            <div className="bg-white dark:bg-[#1e2638] border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-sm">
              <h3 className="font-display-lg text-lg font-bold text-[#131b2e] dark:text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                Project Highlights
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                  <strong className="text-[#131b2e] dark:text-white text-sm block mb-1">Modern React Architecture</strong>
                  <p className="text-xs text-gray-500 leading-relaxed">Built with functional components, precise state management, and optimized rendering.</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                  <strong className="text-[#131b2e] dark:text-white text-sm block mb-1">Enterprise Interface</strong>
                  <p className="text-xs text-gray-500 leading-relaxed">Clean, responsive data tables with executive-level data visualization.</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                  <strong className="text-[#131b2e] dark:text-white text-sm block mb-1">Secure Read-Only Flow</strong>
                  <p className="text-xs text-gray-500 leading-relaxed">Demonstrating access control and secure data presentation for portfolio purposes.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB B: Clinical Appointment ledger statuses */}
      {activeTab === 'appointments' && (
        <div className="space-y-6 animate-fade-in">
          
          {appointments.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-[#1e2638] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="font-display-lg text-lg text-gray-500">No Appointments Scheduled</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map((appt) => (
                <div 
                  key={appt.id}
                  className="bg-white dark:bg-[#1e2638] border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <span className={`absolute top-6 right-6 text-[10px] font-label-technical px-3 py-1.5 uppercase tracking-widest rounded-full font-bold ${
                    appt.status === 'pending'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : appt.status === 'approved' || appt.status === 'confirmed'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    {appt.status}
                  </span>

                  <div className="space-y-6">
                    <div>
                      <span className="font-label-technical text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Patient Details</span>
                      <strong className="text-[#131b2e] dark:text-white font-bold text-xl block">{appt.fullName}</strong>
                    </div>

                    <div className="space-y-3 font-body-md text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-500 text-xs">Location</span> 
                        <span className="font-bold text-[#131b2e] dark:text-white uppercase text-xs">{appt.storeName}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-500 text-xs">Schedule</span> 
                        <span className="font-bold text-[#00687a] dark:text-[#acedff] text-xs">{appt.date} ({appt.time})</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-500 text-xs">Contact</span> 
                        <span className="font-semibold text-gray-900 dark:text-gray-300 text-xs">{appt.phone}</span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-gray-500 text-xs">Reason</span> 
                        <span className="font-semibold text-gray-900 dark:text-gray-300 text-xs text-right max-w-[140px] truncate" title={appt.reason}>{appt.reason || 'General'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      )}

      {/* TAB C: Wholesale client requests */}
      {activeTab === 'inquiries' && (
        <div className="space-y-6 animate-fade-in">
          
          {inquiries.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-[#1e2638] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <MessageCircle className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="font-display-lg text-lg text-gray-500">No Wholesale Inquiries</p>
            </div>
          ) : (
            <div className="space-y-4">
              {inquiries.map((inq) => (
                <div 
                  key={inq.id}
                  className="bg-white dark:bg-[#1e2638] border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gray-50 dark:bg-slate-800 rounded-full border border-gray-200 dark:border-gray-700">
                    <Users size={24} className="text-gray-400" />
                  </div>

                  <div className="flex-grow space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-[#131b2e] dark:text-white flex items-center gap-2">
                        {inq.fullName}
                        <span className="text-xs font-normal text-gray-500 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-wider font-label-technical">
                          {inq.type}
                        </span>
                      </h4>
                      <p className="text-sm text-[#00687a] dark:text-[#acedff] font-semibold mt-1">{inq.clinicName || 'Independent Retailer'}</p>
                    </div>

                    <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 relative">
                      <span className="absolute -top-2 left-4 bg-white dark:bg-slate-900 px-2 text-[10px] uppercase font-bold text-gray-400 tracking-wider">Inquiry Message</span>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">"{inq.message}"</p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <PackageSearch size={16} />
                        <strong>Product:</strong> {inq.productName}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Layers size={16} />
                        <strong>Quantity:</strong> <span className="text-emerald-600 font-bold">{inq.quantityRequested} units</span>
                      </div>
                    </div>
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
