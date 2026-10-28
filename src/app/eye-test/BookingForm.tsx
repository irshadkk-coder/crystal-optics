'use client';

import React, { useState } from 'react';
import { Clock, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '@/data';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('Prescription Update');
  const [confirmed, setConfirmed] = useState(false);

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
  ];

  const handleNext = () => {
    if (!selectedDate || !selectedSlot) {
      alert('Please select an appointment date and preferred time slot.');
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phone) return;

    // Send confirmation to WhatsApp for seamless follow-up
    const text = encodeURIComponent(
      `Hello Crystal Optics! I would like to book an eye test session at your Talap, Kannur store. Patient: ${patientName}, Phone: ${phone}, Date: ${selectedDate}, Slot: ${selectedSlot}, Purpose: ${reason}. Thank you.`
    );
    window.open(`https://wa.me/919846999966?text=${text}`, '_blank');

    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-950 p-8 rounded-xl text-center space-y-4 animate-fade-in">
        <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={30} />
        </div>
        <h3 className="font-display text-2xl font-bold text-green-900">
          Session Request Registered
        </h3>
        <p className="text-xs sm:text-sm text-green-800 leading-relaxed max-w-md mx-auto">
          Thank you, {patientName}. Your eye test request for <strong>{selectedDate} at {selectedSlot}</strong> has been received. Our Talap, Kannur dispensary team will confirm your slot via WhatsApp or telephone call.
        </p>
        <button
          type="button"
          onClick={() => {
            setConfirmed(false);
            setStep(1);
          }}
          className="text-xs font-bold uppercase tracking-wider text-green-800 underline cursor-pointer pt-2"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-xs">
      {/* Progress Indicators */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
            step === 1 ? 'bg-[#131b2e] text-white' : 'bg-green-600 text-white'
          }`}>
            {step > 1 ? '✓' : '1'}
          </span>
          <span className="font-mono uppercase font-bold text-slate-700">Choose Date & Time</span>
        </div>
        <div className="flex-grow h-0.5 bg-slate-200 mx-2" />
        <div className="flex items-center gap-2">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
            step === 2 ? 'bg-[#131b2e] text-white' : 'bg-slate-200 text-slate-500'
          }`}>
            2
          </span>
          <span className="font-mono uppercase font-bold text-slate-700">Patient Details</span>
        </div>
      </div>

      {step === 1 ? (
        <div className="space-y-6">
          <div>
            <label className="block uppercase font-mono text-slate-500 font-bold mb-1">
              Select Appointment Date *
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#00687a]"
            />
          </div>

          <div>
            <label className="block uppercase font-mono text-slate-500 font-bold mb-2">
              Available Daily Slots (Talap Store) *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {timeSlots.map((slot) => {
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3 text-center rounded-lg border font-mono text-xs cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#131b2e] text-white border-[#131b2e] font-bold shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <Clock size={12} className="inline mr-1 -mt-0.5" /> {slot}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-[#131b2e] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              Continue to Patient Information <ArrowRight size={14} />
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block uppercase font-mono text-slate-500 font-bold mb-1">
                Patient Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#00687a]"
              />
            </div>

            <div>
              <label className="block uppercase font-mono text-slate-500 font-bold mb-1">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g., 098469 99966"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#00687a]"
              />
            </div>
          </div>

          <div>
            <label className="block uppercase font-mono text-slate-500 font-bold mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="patient@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#00687a]"
            />
          </div>

          <div>
            <label className="block uppercase font-mono text-slate-500 font-bold mb-1">
              Primary Purpose of Visit
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#00687a]"
            >
              <option value="Prescription Update">Prescription Power Update</option>
              <option value="Bespoke Frame Fitting">New Spectacle Frame Selection & Fitting</option>
              <option value="Digital Eye Strain">Computer Eye Strain Evaluation</option>
              <option value="Progressive Lens Consultation">Progressive / Bifocal Lens Consultation</option>
            </select>
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-3.5 border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-grow bg-[#131b2e] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Confirm Appointment on WhatsApp
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
