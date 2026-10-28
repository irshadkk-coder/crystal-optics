export interface Product {
  id: string; // slug identifier for routing
  name: string;
  // TODO: owner to confirm exact retail INR price for this model.
  priceInr?: number;
  price?: number; // legacy optional field
  priceDisplay: string;
  description: string;
  metaDescription?: string;
  image: string;
  category: 'eyeglasses' | 'sunglasses' | 'blue-light-glasses';
  isBlueLight?: boolean;
  isSunglasses?: boolean;
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

export interface StoreInfo {
  name: string;
  tagline: string;
  address: string;
  street: string;
  locality: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  phoneInternational: string;
  whatsappUrl: string;
  hoursDisplay: string;
  openingHours: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  plusCode: string;
  googleMapsQueryUrl: string;
  googleMapsEmbedQuery: string;
}

export interface Appointment {
  id: string;
  fullName: string;
  patientName?: string; // legacy support
  storeName?: string;   // legacy support
  email: string;
  phone: string;
  date: string;
  time: string;
  reason?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'approved' | 'completed';
  createdAt: string;
}

export interface CustomerInquiry {
  id: string;
  fullName: string;
  name?: string;             // legacy support
  clinicOrBusinessName?: string;
  clinicName?: string;       // legacy support
  email: string;
  phone: string;
  productInterest?: string;
  productName?: string;      // legacy support
  frameInterest?: string;    // legacy support
  quantityRequested?: number;
  message: string;
  type?: string;             // legacy support
  status: 'unread' | 'read' | 'replied';
  createdAt: string;
}

export type Inquiry = CustomerInquiry;

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
