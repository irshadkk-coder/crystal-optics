'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { PRODUCTS } from '@/data';

const VirtualTryOnView = dynamic(() => import('@/components/VirtualTryOnView'), {
  ssr: false,
  loading: () => (
    <div className="py-20 text-center bg-white rounded-2xl border border-slate-200">
      <div className="w-10 h-10 border-4 border-[#00687a] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-xs uppercase font-mono text-slate-600 font-bold tracking-wider">
        Initializing MediaPipe Face Landmarker & Vision Canvas...
      </p>
      <p className="text-[11px] text-slate-400 mt-1">
        Supports webcam live tracking and curated portrait models.
      </p>
    </div>
  ),
});

export default function VirtualTryOnClient() {
  return <VirtualTryOnView products={PRODUCTS} />;
}
