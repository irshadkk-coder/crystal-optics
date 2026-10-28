import { Product, StoreInfo } from './types';

export const STORE_INFO: StoreInfo = {
  name: 'Crystal Optics',
  tagline: 'Precision Eyewear & Optical Dispensary in Talap, Kannur',
  address: 'Talap, Kannur, Kerala 670002, India',
  street: 'Talap',
  locality: 'Kannur',
  city: 'Kannur',
  state: 'Kerala',
  postalCode: '670002',
  country: 'India',
  phone: '098469 99966',
  phoneDisplay: '098469 99966',
  phoneInternational: '+919846999966',
  whatsappUrl: 'https://wa.me/919846999966',
  // TODO: owner to confirm exact opening hours and whether store opens on Sundays
  hoursDisplay: 'Monday to Saturday 10:00 to 19:30. Sunday closed.',
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:30',
    },
  ],
  plusCode: 'V9PC+8W Kannur, Kerala',
  googleMapsQueryUrl: 'https://maps.google.com/?q=Crystal+Optics+Talap+Kannur+Kerala+670002',
  // Responsive embed URL for Talap, Kannur location
  googleMapsEmbedQuery: 'https://maps.google.com/maps?q=Talap,+Kannur,+Kerala+670002&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

// TODO: Link authentic Google Business Profile reviews once verified Google Review API or URL is supplied.
// Fake reviews and NYC locations have been completely removed.

// TODO: Replace placeholder image URLs with real product photos hosted on the site.
export const PRODUCTS: Product[] = [
  {
    id: 'crystal-one',
    name: 'Crystal One',
    // TODO: owner to confirm exact retail INR price for Crystal One
    priceInr: undefined,
    priceDisplay: 'Price on enquiry',
    description: 'Handcrafted from aerospace-grade titanium and Italian-sourced bio-acetate with integrated blue-light filtering lenses.',
    metaDescription: 'Crystal One titanium frame with blue-light filtering lenses. Available at Crystal Optics in Talap, Kannur. Enquire for prices.',
    // TODO: Replace placeholder image URLs with real product photos hosted on the site.
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD56m1xa5-yYx5RVJ4uF598Qdr9k7OrKZxbgY4CBv65HJL-5UAisCB1sTkIZBOcRFAxZT9WpbQU87scz0lWhA1u6OB-8o8T3SS0brR7dY2_TBOjgsfhLbDOWlZB5tYxsHLqoPNCSlrw1N7EXBN_B7AOiP0g1eCOm_ib3wFohFIXIWIo82J6LOFJlGicC9wjScvHO4dzTt-laToGg6PH7ZLwo6SwcY-R4qWwhURURzFPuMRt66ru6WRBuDGsmvj6A_yCGCT_m8t9ioY',
    category: 'eyeglasses',
    isBlueLight: true,
    style: 'classic',
    material: 'titanium',
    faceShape: 'oval',
    badge: 'Signature Series',
    badgeType: 'premium',
    weight: '12g',
    lensWidth: '48mm',
    bridgeWidth: '21mm',
    templeLength: '145mm',
    lensType: 'Blue-Light Blocking',
    hingeSystem: 'Dual-Action Spring',
    tryOnAsset: '/frames/crystal-one.png',
  },
  {
    id: 'aero-titanium-x',
    name: 'Aero-Titanium X',
    // TODO: owner to confirm exact retail INR price for Aero-Titanium X
    priceInr: undefined,
    priceDisplay: 'Price on enquiry',
    description: 'Ultra-light aerospace titanium alloy frame engineered with a precision-milled matte finish for all-day comfort.',
    metaDescription: 'Aero-Titanium X ultra-light titanium frame with a matte finish. Available at Crystal Optics in Talap, Kannur. Enquire for pricing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjfGkch5g9RyN4UsHlP1HUowi1e4ed56s_-603xQox_JuSuczmJGYw5j2uMRSqSfZ9SQrSOVXjbCF3rkhk3-olZ0iQrFbYm7D-cbk0GxwlkQjSwLrO4v7PgwjvdkZrKw16Iq2NBaammsWBBEg8kuK4vG1pnP6s-JsIlP4WMUq2XtoxaQdTGyY4ic8c_1fXRKQHfvCoCb7_qj49CxE7UDFNqquJJYEByl8hCH-4lB5XMBYlLv51uEaDoWbSqjzF_Y26QoXsaMHF6c4',
    category: 'eyeglasses',
    style: 'minimalist',
    material: 'titanium',
    faceShape: 'oval',
    badge: 'New Arrival',
    badgeType: 'new',
    weight: '10g',
    lensWidth: '46mm',
    bridgeWidth: '20mm',
    templeLength: '140mm',
    lensType: 'Custom-Lens Reflective',
    hingeSystem: 'Monoblock Pivot',
    tryOnAsset: '/frames/aero-titanium-x.png',
  },
  {
    id: 'crystalline-01',
    name: 'Crystalline 01',
    // TODO: owner to confirm exact retail INR price for Crystalline 01
    priceInr: undefined,
    priceDisplay: 'Price on enquiry',
    description: 'Hand-polished Japanese bio-acetate in a translucent prismatic finish, balancing timeless silhouette with modern optics.',
    metaDescription: 'Crystalline 01 hand-polished translucent bio-acetate optical frame. Available at Crystal Optics in Talap, Kannur. Enquire today.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrQLhOzDOazx6JGi2Rb88mRlDCUd7NTNwLRjIOT5eSaKdUfB5didqjvwvBSFJhNP8WIOSXwWYWNYDT8KblSU3oGCDiEMvpvjAatsac2-GmpyKVVZV2QQaBcieO82auWgmH-c7xGYb5lahBuHV8DYGnvnIHFywoQlkqsB6yruttg8iUpJXCcTIbxWk2PVHHhTLsBydlgV_2XdtC91L49YLkL8bkkb5M4fSwssx6s1tiFKlMTGEVxYAaMS67ImEkGU1SLIwoV4y8r2o',
    category: 'eyeglasses',
    style: 'classic',
    material: 'acetate',
    faceShape: 'square',
    badge: 'Premium Tier',
    badgeType: 'premium',
    weight: '16g',
    lensWidth: '50mm',
    bridgeWidth: '22mm',
    templeLength: '145mm',
    lensType: 'Optical Polycarbonate',
    hingeSystem: 'Five-Barrel Reinforced',
  },
  {
    id: 'helix-gold',
    name: 'Helix Gold',
    // TODO: owner to confirm exact retail INR price for Helix Gold
    priceInr: undefined,
    priceDisplay: 'Price on enquiry',
    description: 'Gold-plated structural wire frame with flexible memory-bridge technology, built for resilience and lightweight wear.',
    metaDescription: 'Helix Gold lightweight structural wire frame with flexible bridge. Available at Crystal Optics in Talap, Kannur. Enquire for details.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTNigoTEYfWN8miawsGyV-QU6lQfnlh8dFC8zkliNCKihzgelfJFVCfWsel9jxdXfwhtNW3lHfBWMRqcj9c5xKM7H1JrDcX-wORW0oLS21mfwNse5m0z8ZKcgnANLlXRLRF8-hBqnskuybmxcTcIeZSjJWyfRSSOZ9hIlJlIPPdgwcRHVtpttG8unX0ROHDAc5kyq6tUg_zfFeTcpzTfEoSYjzB4SeY7BHfMSEtZ-PeKmlhAM03K3QB3izSpdo2Ym2H1DWH6sFf1o',
    category: 'eyeglasses',
    style: 'avant-garde',
    material: 'titanium',
    faceShape: 'round',
    badge: 'Exclusive',
    badgeType: 'premium',
    weight: '11g',
    lensWidth: '49mm',
    bridgeWidth: '21mm',
    templeLength: '145mm',
    lensType: 'Crystal Anti-Reflective',
    hingeSystem: 'Flex-Tech Joint',
    tryOnAsset: '/frames/helix-gold.png',
  },
  {
    id: 'nocturne-04',
    name: 'Nocturne 04',
    // TODO: owner to confirm exact retail INR price for Nocturne 04
    // TODO: owner to confirm whether Nocturne 04 uses polarized lenses or standard tinted sun lenses
    priceInr: undefined,
    priceDisplay: 'Price on enquiry',
    description: 'Geometric sunglasses in midnight black recycled composite featuring scratch-resistant tinted sun lenses for bright daylight and driving.',
    metaDescription: 'Nocturne 04 geometric sunglasses with tinted sun lenses. Available at Crystal Optics in Talap, Kannur. Enquire for price and fitting.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJWSox1p4nzxVE16hsa8J1lvQw5IbJzpqRgOnhHs2MO-e6KEdpqzsY3F8h076fFSVXgkIAUJnUZ5g731DUklxVpUKJ38nZp4WjOv8JYI1WRcFh1nNiROinsPihza-BBOccoNtCJxEmrHks_i-2e2y9JXsGkPlLQkBz-s1h74CZ2JJqBf-NnmuB58XmBul0jYRbNtqrrTDbVUdAEQSiz3fwNRjHjBRAcCk4nQJuNudz2aexd4JCyKw06yMxf32sPIZ6UYfn5qozFaQ',
    category: 'sunglasses',
    isSunglasses: true,
    style: 'avant-garde',
    material: 'carbon-fiber',
    faceShape: 'square',
    badge: 'Architectural',
    badgeType: 'new',
    weight: '15g',
    lensWidth: '51mm',
    bridgeWidth: '23mm',
    templeLength: '150mm',
    lensType: 'Tinted Sun Lens',
    hingeSystem: 'Screwless Dual Friction',
  },
  {
    id: 'void-silver',
    name: 'Void Silver',
    // TODO: owner to confirm exact retail INR price for Void Silver
    priceInr: undefined,
    priceDisplay: 'Price on enquiry',
    description: 'Weightless titanium construction with surgical-grade silicone pads and super hydrophobic anti-reflective coatings.',
    metaDescription: 'Void Silver weightless titanium frame with silicone nose pads. Available at Crystal Optics in Talap, Kannur. Enquire for lens options.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbExBFkbzCTHSpLcLS3mq-ld-xOyktBninxWaeKlWHOkNZG0HME_MwwGem0jwTM_NUh6G39U3a2blFGqXOJZKxC5g6MVsSottYVYa7SgNEsFARpeBp2rENna7Fg_9_8AgfnTVBFroZ3vHh9U3bHNhkmRPK6T02Y6VKnMhwv2ShaAofLQbpyWO1GorIJ__k39JrJJE62C0v42fvDxI7nPGsmC0M7iLX--NK2qYlYUrkDL7VMagjRI9qwE8t821aoXq_50fiZSd3dko',
    category: 'eyeglasses',
    isBlueLight: true,
    style: 'minimalist',
    material: 'titanium',
    faceShape: 'round',
    weight: '9g',
    lensWidth: '47mm',
    bridgeWidth: '19mm',
    templeLength: '140mm',
    lensType: 'Super Hydrophobic Pro',
    hingeSystem: 'Seamless Laser-Weld',
    tryOnAsset: '/frames/void-silver.png',
  },
  {
    id: 'amber-ridge',
    name: 'Amber Ridge',
    // TODO: owner to confirm exact retail INR price for Amber Ridge
    // TODO: owner to confirm exact UV absorption rating (UV400) for Amber Ridge
    priceInr: undefined,
    priceDisplay: 'Price on enquiry',
    description: 'Classic amber silhouette crafted with thin hand-polished organic acetate and tinted sun-protective lenses.',
    metaDescription: 'Amber Ridge classic acetate sunglasses with protective sun lenses. Available at Crystal Optics in Talap, Kannur. Enquire for details.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZl-LavYMZ0doaQphWXpyY4UO63wzrDZksOQCOCD_ax8OB_29dpq9-zC7TY9fbc3QkMCoGJh6-7lLb7OvxkD24yYD6SAFIpu-8ixDQPNaDyvz688VXNQwRXpk6w_fxX6LSdxjRr-e5_dXlplhByXIYMqBM1r8HS-dTvQN_v-QkTiBeG7SQC3XYElwkxOxNdvjzxIEe9uq-8-gIngrPRE2Md-6bPwjomcYlmJxJrZpLKJxt1peYHL3dUF-fqm9QzSUghNqqn9_aQNE',
    category: 'sunglasses',
    isSunglasses: true,
    style: 'classic',
    material: 'acetate',
    faceShape: 'oval',
    weight: '14g',
    lensWidth: '48mm',
    bridgeWidth: '20mm',
    templeLength: '145mm',
    lensType: 'Tinted Sun Lens',
    hingeSystem: 'Custom Riveted Hinge',
    tryOnAsset: '/frames/amber-ridge.png',
  },
];

// Preconfigured faces for Try On
export const VIRTUAL_TRY_ON_FACES = [
  {
    id: 'model-male-1',
    name: 'Male Model (Slate)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHdWZR_Mlg4uVDnWiIyM6j9LapLFh6cXyE773mrHOppEfELXI-ayuvE88X7ZB8I7gOeGP5VV6VHay6YYy2F0lWfqJaGBHiKlhS57xd9KgdBu_cu8_zwqkBKeyQt-Oq_35xOdkbBm1MArFmyp8YeQITqbzFCFGExaAdSm3opWbzEkchTdHZaxAtgHmmBYq3hQ1UeqcDQt8oYzZFcB63X5nyoJ1t_2niqsZJJYt5XEOsd-0vOMvAZ1ghCZ0AinFMOHUufQ7RV3lczy4',
  },
  {
    id: 'model-female-1',
    name: 'Female Model (Prism)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcFzYWqIlOAdCAJ4Ak-0bFZTMbH2xcrFeEpLSwa7i2vY-9gebeWOZh0s-8JdRwkocXglZ87rBUL6cG_WZ_cz4cbJ5j_JQlz2s3h4Pvu5xMfy9DeuO-Z2_murfUTIgL34xm1cl7FzQZk9Hld4KxjRll0q-CrZVAktsBNY5otorIjVbnHJlUBodjY0UzEpLzyHlGmnoYnpIWh1rb2MTvuh1pO3EK2j-gr-jXzROa1U9D6Vu-RG8V3bpiHfaJh5Ia3pftIL4i0PJZfiM',
  },
  {
    id: 'model-general-editorial',
    name: 'Editorial Portrait',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzGdUVF-typ2rgLY5lRqixONQ-qU1cD3tdFCj6wYF9_OPofv-DZTSSSDhLRZWzvyLECpSmclNCdLuilkamVm0YTpH1iJpZ8FLbxXaH_flerrHiIlsuIrZ8LIQuQDbGo--sC2Xj71u1LbnJ-ulHxXsFFjEnTxavACaQ_QYONq1OGA5XVcsqhO2x0UturHtY4aA7PyeRO7tTxsO4HADXih4-XPAFAiXR8prUvaQdOZpPCMqXUr06AUOG-29Zg8ZW7iM8afl91R3py7U',
  },
];

// Compatibility exports
export const INITIAL_PRODUCTS = PRODUCTS;
export const STORES = [
  {
    id: 'kannur',
    name: STORE_INFO.name,
    address: STORE_INFO.address,
    phone: STORE_INFO.phoneDisplay,
    hours: STORE_INFO.hoursDisplay,
    coordinates: STORE_INFO.plusCode,
    description: 'Optical dispensary in Talap, Kannur, Kerala.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb6AwaSA-cIF8fcM2JNh5ZLg49CcG97KWVPYym-q64ETq4-uqtrKmDCKxBqA5uYF55Hovw-SpoDtk_Lg6egHi6zvh0Ex-2pjHoDN1qr2IVSoAOJsDIhxjm4FBlGbxZ07LMYMZkZ1HHztyqEv2OaajyUStwvBNXIo1ld9eREmZgr9q6pa6xzpf0u4DsqyGi9Fwr1-K9LieFkj3Hgj8O8rd8QWHjR-03xo75ER0HwMdZKMb-T2T-eYYeqan9WnoNe8Y5jiFOsTyOcd0',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMkgWQrvG_oXRVJQfr__n_2ovVlS_ccYeIIVUXr3EQnrkoz4hYa2o0mQPYO2hdmtaeDLmCNLNVRtYQN_B80a6e5V9Dypcpm09AyaJKKxhmMhWPwnW8TZrJpucVzFXcDwkEofmuFf9YGCxlg500XxKxK3sXSmAurk2RYHOU1QPD-_aKZV7FHmQbUVmYc-V4Qriff2ol2LRyDH7FphQRNWieg3bIvRjVimi_JhRmv4GQ32uCkl9GC8wCI6haIQA-rDJFmPq3ZqZJKbM',
  },
];
export const REVIEWS: any[] = [];

