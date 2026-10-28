'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PRODUCTS } from '@/data';
import { Product, Appointment, Inquiry } from '@/types';

const AdminDashboardView = dynamic(() => import('@/components/AdminDashboardView'), {
  ssr: false,
  loading: () => (
    <div className="py-16 text-center text-xs font-mono text-slate-500">
      Loading Admin Console...
    </div>
  ),
});

export default function AdminClient() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 'appt-1',
      fullName: 'Patient Consult',
      phone: '098469 99966',
      email: 'patient@example.com',
      date: '2026-11-01',
      time: '11:00 AM',
      reason: 'Bespoke Frame Fitting',
      status: 'approved',
      createdAt: '2026-10-27',
    },
  ]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  return (
    <AdminDashboardView
      products={products}
      appointments={appointments}
      inquiries={inquiries}
      onAddProduct={(p) => setProducts((prev) => [{ id: `prod-${Date.now()}`, ...p }, ...prev])}
      onDeleteProduct={(id) => setProducts((prev) => prev.filter((p) => p.id !== id))}
      onUpdateAppointmentStatus={(id, status) =>
        setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)))
      }
      onDeleteAppointment={(id) => setAppointments((prev) => prev.filter((a) => a.id !== id))}
      onAddInquiry={(inq) => setInquiries((prev) => [{ id: `inq-${Date.now()}`, ...inq }, ...prev])}
    />
  );
}
