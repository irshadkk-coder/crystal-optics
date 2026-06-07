import React from 'react';
import { ShieldCheck, X, LogIn, Briefcase, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

interface AdminLoginModalProps {
  onClose: () => void;
  onSuccessLogin: () => void;
}

export default function AdminLoginModal({ onClose, onSuccessLogin }: AdminLoginModalProps) {
  const handleShowcaseAccess = () => {
    onSuccessLogin();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-md bg-white dark:bg-[#1e2638] border border-[#c6c6cd]/30 dark:border-gray-800 p-8 rounded-2xl shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#131b2e] dark:hover:text-white cursor-pointer p-1 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal headers */}
        <div className="text-center space-y-4 mb-8 pt-4">
          <div className="w-16 h-16 bg-[#131b2e]/5 dark:bg-white/5 text-[#131b2e] dark:text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
            <LayoutDashboard size={32} />
          </div>
          <h2 className="font-display-lg text-2xl font-bold tracking-tight text-[#131b2e] dark:text-white uppercase">
            Admin Dashboard Demo
          </h2>
          <p className="font-body-md text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[280px] mx-auto">
            Explore the premium business management interface designed for handling products, appointments, and inquiries.
          </p>
        </div>

        <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 rounded-xl flex items-start gap-3 mb-8">
          <ShieldCheck className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed font-body-md">
            This is a read-only portfolio demonstration. No credentials are required and no destructive actions will be permitted.
          </p>
        </div>

        <button
          onClick={handleShowcaseAccess}
          className="w-full bg-[#131b2e] hover:bg-slate-800 dark:bg-white dark:text-[#131b2e] dark:hover:bg-gray-100 text-white font-label-technical uppercase text-xs tracking-widest py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <Briefcase size={16} />
          View Dashboard Showcase
        </button>

      </motion.div>
    </div>
  );
}
