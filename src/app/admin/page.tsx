import React from 'react';
import type { Metadata } from 'next';
import AdminClient from './AdminClient';

export const metadata: Metadata = {
  title: 'Staff Management Console | Crystal Optics Kannur',
  description: 'Internal operations console for Crystal Optics.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <div className="py-6">
      <h1 className="sr-only">Staff Management Console – Crystal Optics</h1>
      <AdminClient />
    </div>
  );
}
