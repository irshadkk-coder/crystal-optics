export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  style: 'minimalist' | 'avant-garde' | 'classic';
  material: 'acetate' | 'titanium' | 'carbon-fiber';
  faceShape: 'oval' | 'square' | 'round';
  badge?: string;
  badgeType?: 'new' | 'premium';
  rating?: number;
  weight?: string;
  lensWidth?: string;
  bridgeWidth?: string;
  templeLength?: string;
  lensType?: string;
  hingeSystem?: string;
  tryOnAsset?: string;
}

export interface Appointment {
  id: string;
  storeName: string;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'approved' | 'completed';
  createdAt: string;
  reason?: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  message: string;
  productName?: string;
  status: 'unread' | 'read' | 'replied';
  replyMessage?: string;
  createdAt: string;
  // Optional distributor attributes
  clinicName?: string;
  phone?: string;
  quantityRequested?: number;
  type?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
