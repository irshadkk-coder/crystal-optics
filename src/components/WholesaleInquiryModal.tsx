import React, { useState } from 'react';
import { Product, Inquiry } from '../types';
import { X, Send, Store, HelpCircle, PhoneCall, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface WholesaleInquiryModalProps {
  products: Product[];
  activeProduct?: Product;
  onClose: () => void;
  onAddInquiry: (inq: Omit<Inquiry, 'id'>) => void;
}

export default function WholesaleInquiryModal({
  products,
  activeProduct,
  onClose,
  onAddInquiry
}: WholesaleInquiryModalProps) {
  const [clinicName, setClinicName] = useState('');
  const [contactName, setContactName] = useState('');
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedFrame, setSelectedFrame] = useState(activeProduct ? activeProduct.name : products[0].name);
  const [bulkQuantity, setBulkQuantity] = useState(50);
  const [specialMessage, setSpecialMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !whatsappPhone || !emailAddress) {
      alert("Please fill out full contact name, email, and wholesale business particulars.");
      return;
    }

    onAddInquiry({
      fullName: contactName,
      email: emailAddress,
      message: specialMessage || `Requesting details on premium shipment criteria for the ${selectedFrame} frame.`,
      productName: selectedFrame,
      status: 'unread',
      createdAt: new Date().toISOString().split('T')[0],
      clinicName: clinicName || 'Optometric Clinic Agent',
      phone: whatsappPhone,
      quantityRequested: Number(bulkQuantity),
      type: 'wholesale'
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-lg bg-white dark:bg-[#1e2638] border border-[#c6c6cd]/30 dark:border-gray-800 p-8 rounded-xl shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-450 hover:text-black cursor-pointer p-1"
        >
          <X size={18} />
        </button>

        {/* Modal headers */}
        <div className="space-y-2 mb-6 text-center">
          <div className="w-12 h-12 bg-[#00687a]/15 text-[#00687a] rounded-full flex items-center justify-center mx-auto">
            <Store size={22} />
          </div>
          <h2 className="font-display-lg text-xl font-bold tracking-tight text-[#131b2e] dark:text-white uppercase">
            Wholesale bulk Inquiry
          </h2>
          <p className="font-body-md text-xs text-gray-400">
            Establish direct account calibration setup with Crystal Wholesale distribution. Minimum volume: 20 units.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-green-50 dark:bg-green-950/25 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-900 p-8 rounded-lg text-center space-y-3">
            <Check className="mx-auto" size={24} />
            <p className="font-label-technical text-xs tracking-wider uppercase font-extrabold">Inquiry Lodged Vouched</p>
            <p className="text-xs text-gray-500">Staff will confirm allocation via Whatsapp dispatch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmitInquiry} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text:[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1">
                  Clinic/Business Name
                </label>
                <input
                  type="text"
                  placeholder="Kerala Opticians Ltd"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#00687a] rounded p-2.5 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text:[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1">
                  Representative Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Irshad Rahman"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#00687a] rounded p-2.5 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text:[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                  WhatsApp contact
                </label>
                <input
                  type="tel"
                  required
                  placeholder="098469 99966"
                  value={whatsappPhone}
                  onChange={(e) => setWhatsappPhone(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#00687a] rounded p-2.5 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text:[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                  Business E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="distributor@example.com"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#00687a] rounded p-2.5 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text:[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                  Frame Interest Curation
                </label>
                <select
                  value={selectedFrame}
                  onChange={(e) => setSelectedFrame(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#00687a] rounded p-2.5 text-xs focus:outline-none"
                >
                  {products.map(pr => (
                    <option key={pr.id} value={pr.name}>{pr.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text:[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold flex justify-between">
                  <span>Quantity Units</span>
                  <span className="text-[#00687a] font-bold">{bulkQuantity}</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="5"
                  value={bulkQuantity}
                  onChange={(e) => setBulkQuantity(parseInt(e.target.value))}
                  className="w-full accent-[#00687a] mt-2.5"
                />
              </div>
            </div>

            <div>
              <label className="block text:[10px] font-label-technical uppercase text-gray-400 tracking-wider mb-1">
                Allocations & requirements specifics
              </label>
              <textarea
                rows={2}
                placeholder="Requesting matte series batch with customized branding engravings..."
                value={specialMessage}
                onChange={(e) => setSpecialMessage(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 focus:border-[#00687a] rounded p-2.5 text-sm focus:outline-none"
              />
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 border border-gray-300 rounded font-label-technical text-xs uppercase font-extrabold tracking-wider transition hover:bg-gray-50 cursor-pointer"
              >
                Abort
              </button>
              <button
                type="submit"
                className="flex-grow bg-[#131b2e] hover:bg-slate-700 text-white font-label-technical uppercase text-xs tracking-widest py-3.5 rounded font-extrabold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={12} />
                Lodge Wholesale request
              </button>
            </div>

          </form>
        )}

      </motion.div>
    </div>
  );
}
