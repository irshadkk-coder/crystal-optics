import React, { useState } from 'react';
import { Appointment } from '../types';
import { STORES } from '../data';
import { Calendar as CalendarIcon, Clock, HeartHandshake, ShieldCheck, CheckCircle, ArrowRight, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

interface EyeTestBookingViewProps {
  onAddAppointment: (appointment: Omit<Appointment, 'id' | 'status'>) => void;
  setView: (v: string) => void;
}

export default function EyeTestBookingView({ onAddAppointment, setView }: EyeTestBookingViewProps) {
  // Appointment state fields
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedBoutique, setSelectedBoutique] = useState(STORES[2].id); // Defaults to Kannur
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [clinicalReason, setClinicalReason] = useState('Prescription Update');

  const [wizardStep, setWizardStep] = useState(1);
  const [successBooking, setSuccessBooking] = useState<Appointment | null>(null);

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '05:30 PM'
  ];

  const clinicalReasonsOptions = [
    'Prescription Update',
    'Bespoke Frame Fitting',
    'Comprehensive Eye Examination',
    'Direct Ophthalmologist Consultation'
  ];

  const handleNextStep = () => {
    if (wizardStep === 1) {
      if (!selectedDate || !selectedSlot) {
        alert("Please specify a valid date and choose a preferred time slot.");
        return;
      }
      setWizardStep(2);
    }
  };

  const handlePrevStep = () => {
    setWizardStep(1);
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phoneNumber || !emailAddress) {
      alert("Please enter patient name, email, and phone contact details.");
      return;
    }

    const newApptData = {
      fullName: patientName,
      phone: phoneNumber,
      email: emailAddress,
      storeName: selectedBoutique,
      date: selectedDate,
      time: selectedSlot,
      reason: clinicalReason,
      createdAt: new Date().toISOString().split('T')[0]
    };

    onAddAppointment(newApptData);

    // Set success indicator
    const mockAppt: Appointment = {
      id: `appt-${Date.now()}`,
      status: 'pending',
      ...newApptData
    };

    setSuccessBooking(mockAppt);
  };

  const activeStoreObj = STORES.find(st => st.id === selectedBoutique) || STORES[2];

  return (
    <div className="py-8 max-w-5xl mx-auto px-6">
      
      {/* Visual Header */}
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <span className="font-label-technical text-label-technical text-[#00687a] dark:text-[#acedff] uppercase tracking-widest font-bold">
          Premium Eye Examinations
        </span>
        <h1 className="font-display-lg text-3xl font-bold text-[#131b2e] dark:text-[#dae2fd] mt-2 mb-4">
          Book Your Eye Examination
        </h1>
        <p className="font-body-md text-sm text-[#45464d] dark:text-gray-300 leading-relaxed">
          Book an appointment with licensed clinicians at high-precision laboratories. Complimentary testing with eyewear orders.
        </p>
      </header>

      {successBooking ? (
        /* SUCCESS PANEL */
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-[#1e2638] border border-green-200 dark:border-green-950 p-8 sm:p-12 rounded-xl shadow-xl text-center space-y-6 max-w-xl mx-auto"
        >
          <div className="w-16 h-16 bg-green-50 dark:bg-green-950/40 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle size={32} />
          </div>

          <div className="space-y-2">
            <h2 className="font-display-lg text-2xl font-bold text-gray-900 dark:text-white">
              Appointment Reserved!
            </h2>
            <p className="text-sm text-gray-400 font-label-technical uppercase tracking-wider">
              ID: {successBooking.id} · Status: Pending Verification
            </p>
          </div>

          {/* Appointment detail receipt card */}
          <div className="bg-gray-50 dark:bg-[#131b2e] p-6 rounded-lg border border-gray-200 dark:border-gray-800 text-left space-y-3 font-body-md text-sm">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-400">Patient:</span>
              <strong className="text-[#131b2e] dark:text-gray-200">{successBooking.patientName}</strong>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-400">Boutique:</span>
              <strong className="text-[#131b2e] dark:text-gray-200">{activeStoreObj.name}</strong>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-400">Date/Time Slot:</span>
              <strong className="text-[#00687a] dark:text-[#acedff]">{successBooking.date} • {successBooking.time}</strong>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-400">Visit Reason:</span>
              <strong className="text-[#131b2e] dark:text-gray-200">{successBooking.reason}</strong>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => {
                setSuccessBooking(null);
                setWizardStep(1);
                // Clear fields
                setPatientName('');
                setPhoneNumber('');
                setEmailAddress('');
              }}
              className="flex-grow py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded font-label-technical text-xs uppercase font-extrabold tracking-wider hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              Book Another Test
            </button>
            <button
              onClick={() => setView('catalog')}
              className="flex-grow py-3 bg-[#131b2e] text-white rounded font-label-technical text-xs uppercase font-extrabold tracking-wider hover:bg-slate-700 transition"
            >
              Examine Eyewear catalog
            </button>
          </div>

        </motion.div>
      ) : (
        /* MULTI STEP WIZARD FORM */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form Area (8 columns) */}
          <div className="lg:col-span-8 bg-white dark:bg-[#131b2e]/40 p-6 sm:p-8 border border-[#c6c6cd]/25 rounded-xl shadow-sm">
            
            {/* Step markers progress bar */}
            <div className="flex justify-between items-center mb-10 border-b border-[#c6c6cd]/10 pb-4">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-label-technical ${
                  wizardStep === 1 ? 'bg-[#131b2e] text-white' : 'bg-green-600 text-white'
                }`}>
                  {wizardStep > 1 ? '✓' : '1'}
                </span>
                <span className={`font-label-technical text-xs tracking-wider uppercase font-bold ${
                  wizardStep === 1 ? 'text-black dark:text-white' : 'text-gray-400'
                }`}>Store & Slot</span>
              </div>
              
              <div className="flex-grow h-0.5 bg-gray-200 mx-4"></div>

              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-label-technical ${
                  wizardStep === 2 ? 'bg-[#131b2e] text-white' : 'bg-gray-250 text-gray-400'
                }`}>
                  2
                </span>
                <span className={`font-label-technical text-xs tracking-wider uppercase font-bold ${
                  wizardStep === 2 ? 'text-black dark:text-white' : 'text-gray-400'
                }`}>Patient Info</span>
              </div>
            </div>

            {/* STEP 1: Select Store, Date, and Time Slot */}
            {wizardStep === 1 && (
              <div className="space-y-6">
                
                {/* Store Option Select */}
                <div>
                  <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-2 font-extrabold">
                    Primary Showroom Boutique
                  </label>
                  <select
                    value={selectedBoutique}
                    onChange={(e) => setSelectedBoutique(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-[#131b2e] border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#00687a]"
                  >
                    {STORES.map(st => (
                      <option key={st.id} value={st.id}>
                        {st.name} ({st.id === 'kannur' ? 'Kerala' : 'NYC'})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Picker (supports native browser controls) */}
                <div>
                  <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-2 font-extrabold">
                    Examination Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#131b2e] border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#00687a]"
                    />
                  </div>
                </div>

                {/* Slot Selector Buttons */}
                <div>
                  <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-3 font-extrabold">
                    Preloaded Timelines Slots
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-3.5 px-2 text-center rounded border-2 transition-all font-label-technical text-xs cursor-pointer ${
                            isSelected
                              ? 'bg-[#131b2e] text-white border-[#131b2e] font-extrabold'
                              : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400 dark:border-gray-800 dark:text-gray-300'
                          }`}
                        >
                          <Clock size={12} className="inline mr-1.5 -mt-0.5" />
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleNextStep}
                    className="w-full bg-[#131b2e] hover:bg-slate-700 text-white font-label-technical uppercase text-xs tracking-widest py-4 px-6 rounded-lg font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Proceed with Patient Metadata
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 2: Clinical Reason and Patient Metadata */}
            {wizardStep === 2 && (
              <form onSubmit={handleCompleteBooking} className="space-y-6">
                
                {/* Grid inputs for metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Irshad Rahman"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#131b2e] border border-gray-200 rounded-lg p-3 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                      Direct Whatsapp Contact
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="098469 99966"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#131b2e] border border-gray-200 rounded-lg p-3 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-1 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="irshad@example.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-[#131b2e] border border-gray-200 rounded-lg p-3 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-label-technical uppercase text-gray-400 tracking-wider mb-2 font-bold">
                    Reason for Visit
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {clinicalReasonsOptions.map((opt) => {
                      const isSelected = clinicalReason === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setClinicalReason(opt)}
                          className={`py-3 px-2 text-left border rounded transition-all text-xs font-body-md cursor-pointer ${
                            isSelected
                              ? 'bg-[#131b2e]/5 border-[#131b2e] text-[#131b2e] font-bold dark:text-[#acedff]'
                              : 'border-gray-200 text-gray-600 dark:border-gray-800'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Safety & Compliance watermark */}
                <div className="p-4 bg-yellow-50/50 dark:bg-yellow-950/20 border border-yellow-200/50 rounded-lg flex items-start gap-3">
                  <ShieldCheck size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="font-body-md text-xs text-yellow-800 dark:text-yellow-300 leading-normal">
                    Secure clinical files. HIPAA & Indian Health Standards compliant encryption active. Your info is accessible exclusively by optic staff.
                  </p>
                </div>

                {/* Back / Custom submit action button wrappers */}
                <div className="flex gap-4 pt-4 border-t border-[#c6c6cd]/10">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-4 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-label-technical text-xs uppercase font-extrabold tracking-wider transition cursor-pointer"
                  >
                    Back Setup
                  </button>
                  <button
                    type="submit"
                    className="flex-grow bg-[#131b2e] hover:bg-slate-700 text-white font-label-technical uppercase text-xs tracking-widest py-4 rounded-lg font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Confirm Appointment
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Side Info Panel (4 columns) */}
          <div className="lg:col-span-4 bg-gray-50 dark:bg-[#131b2e]/30 border border-[#c6c6cd]/25 p-6 rounded-xl space-y-6">
            
            <div className="space-y-2 border-b border-[#c6c6cd]/15 pb-4">
              <span className="font-label-technical text-[10px] text-gray-400 uppercase tracking-widest">Selected Curation</span>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">Summary Review</h3>
            </div>

            <div className="space-y-4 font-body-md text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Boutique:</span>
                <span className="font-extrabold text-[#131b2e] dark:text-gray-300 truncate max-w-[200px]">{activeStoreObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date:</span>
                <span className="font-extrabold text-[#131b2e] dark:text-gray-300">{selectedDate || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Time Slot:</span>
                <span className="font-extrabold text-[#00687a] dark:text-[#acedff]">{selectedSlot || 'Not chosen'}</span>
              </div>
              <div className="flex justify-between border-t border-[#c6c6cd]/10 pt-4">
                <span className="text-gray-500">Examination Fee:</span>
                <span className="font-bold text-green-600 uppercase">Complimentary</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-normal uppercase">
                (Complimentary for active boutique orders)
              </p>
            </div>

            <div className="bg-[#131b2e] text-white p-6 rounded-lg space-y-3 shadow-md">
              <HeartHandshake className="text-[#acedff]" size={24} />
              <h4 className="font-label-technical text-xs tracking-widest uppercase font-bold text-white">Our Clinician Oath</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-body-md">
                Every eye examination is conducted with state-of-the-art optical equipment to ensure your prescription is perfectly tailored for your premium eyewear.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
