import { Product, Review } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'crystal-one',
    name: 'Crystal One',
    price: 425, // Equivalent to about ₹12,500 in INR context but mapped cleanly
    description: 'Engineered for the modern visionary. Handcrafted from aerospace-grade titanium and Italian-sourced bio-acetate, the CRYSTAL ONE represents our pinnacle of optical engineering.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD56m1xa5-yYx5RVJ4uF598Qdr9k7OrKZxbgY4CBv65HJL-5UAisCB1sTkIZBOcRFAxZT9WpbQU87scz0lWhA1u6OB-8o8T3SS0brR7dY2_TBOjgsfhLbDOWlZB5tYxsHLqoPNCSlrw1N7EXBN_B7AOiP0g1eCOm_ib3wFohFIXIWIo82J6LOFJlGicC9wjScvHO4dzTt-laToGg6PH7ZLwo6SwcY-R4qWwhURURzFPuMRt66ru6WRBuDGsmvj6A_yCGCT_m8t9ioY',
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
    rating: 5.0,
    tryOnAsset: '/frames/crystal-one.png'
  },
  {
    id: 'aero-titanium-x',
    name: 'Aero-Titanium X',
    price: 425,
    description: 'Ultra-light aerospace titanium alloy with precision-milled matte finish.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjfGkch5g9RyN4UsHlP1HUowi1e4ed56s_-603xQox_JuSuczmJGYw5j2uMRSqSfZ9SQrSOVXjbCF3rkhk3-olZ0iQrFbYm7D-cbk0GxwlkQjSwLrO4v7PgwjvdkZrKw16Iq2NBaammsWBBEg8kuK4vG1pnP6s-JsIlP4WMUq2XtoxaQdTGyY4ic8c_1fXRKQHfvCoCb7_qj49CxE7UDFNqquJJYEByl8hCH-4lB5XMBYlLv51uEaDoWbSqjzF_Y26QoXsaMHF6c4',
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
    rating: 4.8,
    tryOnAsset: '/frames/aero-titanium-x.png'
  },
  {
    id: 'crystalline-01',
    name: 'Crystalline 01',
    price: 380,
    description: 'Hand-polished Japanese acetate in a translucent prismatic finish.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrQLhOzDOazx6JGi2Rb88mRlDCUd7NTNwLRjIOT5eSaKdUfB5didqjvwvBSFJhNP8WIOSXwWYWNYDT8KblSU3oGCDiEMvpvjAatsac2-GmpyKVVZV2QQaBcieO82auWgmH-c7xGYb5lahBuHV8DYGnvnIHFywoQlkqsB6yruttg8iUpJXCcTIbxWk2PVHHhTLsBydlgV_2XdtC91L49YLkL8bkkb5M4fSwssx6s1tiFKlMTGEVxYAaMS67ImEkGU1SLIwoV4y8r2o',
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
    rating: 4.9
  },
  {
    id: 'helix-gold',
    name: 'Helix Gold',
    price: 550,
    description: '24k Gold-plated structural wire frame with flexible memory-bridge technology.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTNigoTEYfWN8miawsGyV-QU6lQfnlh8dFC8zkliNCKihzgelfJFVCfWsel9jxdXfwhtNW3lHfBWMRqcj9c5xKM7H1JrDcX-wORW0oLS21mfwNse5m0z8ZKcgnANLlXRLRF8-hBqnskuybmxcTcIeZSjJWyfRSSOZ9hIlJlIPPdgwcRHVtpttG8unX0ROHDAc5kyq6tUg_zfFeTcpzTfEoSYjzB4SeY7BHfMSEtZ-PeKmlhAM03K3QB3izSpdo2Ym2H1DWH6sFf1o',
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
    rating: 4.9,
    tryOnAsset: '/frames/helix-gold.png'
  },
  {
    id: 'nocturne-04',
    name: 'Nocturne 04',
    price: 410,
    description: 'Oversized geometric sculpture in midnight black recycled composite.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJWSox1p4nzxVE16hsa8J1lvQw5IbJzpqRgOnhHs2MO-e6KEdpqzsY3F8h076fFSVXgkIAUJnUZ5g731DUklxVpUKJ38nZp4WjOv8JYI1WRcFh1nNiROinsPihza-BBOccoNtCJxEmrHks_i-2e2y9JXsGkPlLQkBz-s1h74CZ2JJqBf-NnmuB58XmBul0jYRbNtqrrTDbVUdAEQSiz3fwNRjHjBRAcCk4nQJuNudz2aexd4JCyKw06yMxf32sPIZ6UYfn5qozFaQ',
    style: 'avant-garde',
    material: 'carbon-fiber',
    faceShape: 'square',
    badge: 'Architectural',
    badgeType: 'new',
    weight: '15g',
    lensWidth: '51mm',
    bridgeWidth: '23mm',
    templeLength: '150mm',
    lensType: 'Polarized Scratch-Shield',
    hingeSystem: 'Screwless Dual Friction',
    rating: 4.7
  },
  {
    id: 'void-silver',
    name: 'Void Silver',
    price: 395,
    description: 'Weightless titanium construction with surgical-grade silicone pads.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbExBFkbzCTHSpLcLS3mq-ld-xOyktBninxWaeKlWHOkNZG0HME_MwwGem0jwTM_NUh6G39U3a2blFGqXOJZKxC5g6MVsSottYVYa7SgNEsFARpeBp2rENna7Fg_9_8AgfnTVBFroZ3vHh9U3bHNhkmRPK6T02Y6VKnMhwv2ShaAofLQbpyWO1GorIJ__k39JrJJE62C0v42fvDxI7nPGsmC0M7iLX--NK2qYlYUrkDL7VMagjRI9qwE8t821aoXq_50fiZSd3dko',
    style: 'minimalist',
    material: 'titanium',
    faceShape: 'round',
    weight: '9g',
    lensWidth: '47mm',
    bridgeWidth: '19mm',
    templeLength: '140mm',
    lensType: 'Super Hydrophobic Pro',
    hingeSystem: 'Seamless Laser-Weld',
    rating: 4.8,
    tryOnAsset: '/frames/void-silver.png'
  },
  {
    id: 'amber-ridge',
    name: 'Amber Ridge',
    price: 365,
    description: 'Classic profile reimagined with ultra-thin hand-polished organic acetate.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZl-LavYMZ0doaQphWXpyY4UO63wzrDZksOQCOCD_ax8OB_29dpq9-zC7TY9fbc3QkMCoGJh6-7lLb7OvxkD24yYD6SAFIpu-8ixDQPNaDyvz688VXNQwRXpk6w_fxX6LSdxjRr-e5_dXlplhByXIYMqBM1r8HS-dTvQN_v-QkTiBeG7SQC3XYElwkxOxNdvjzxIEe9uq-8-gIngrPRE2Md-6bPwjomcYlmJxJrZpLKJxt1peYHL3dUF-fqm9QzSUghNqqn9_aQNE',
    style: 'classic',
    material: 'acetate',
    faceShape: 'oval',
    weight: '14g',
    lensWidth: '48mm',
    bridgeWidth: '20mm',
    templeLength: '145mm',
    lensType: 'UV400 Organic Resin',
    hingeSystem: 'Custom Riveted Hinge',
    rating: 4.9,
    tryOnAsset: '/frames/amber-ridge.png'
  }
];

export const STORES = [
  {
    id: 'soho',
    name: 'Crystal Flagship - Soho',
    address: '42 Mercer Street, New York, NY 10013',
    phone: '098469 99966',
    distance: '0.4 MI',
    hours: 'Open until 7 PM',
    opensAt: '9:30 AM',
    coordinates: '40.7214° N, 74.0017° W',
    description: 'Our luxurious flagship situated in the heart of SoHo. Experience our entire collection with personal optometric curation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb6AwaSA-cIF8fcM2JNh5ZLg49CcG97KWVPYym-q64ETq4-uqtrKmDCKxBqA5uYF55Hovw-SpoDtk_Lg6egHi6zvh0Ex-2pjHoDN1qr2IVSoAOJsDIhxjm4FBlGbxZ07LMYMZkZ1HHztyqEv2OaajyUStwvBNXIo1ld9eREmZgr9q6pa6xzpf0u4DsqyGi9Fwr1-K9LieFkj3Hgj8O8rd8QWHjR-03xo75ER0HwMdZKMb-T2T-eYYeqan9WnoNe8Y5jiFOsTyOcd0',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzn_0DOxy32VK8rx3YxF9vI9nNq_pRP-NDrkShrwtekYRKO7yzTWMotzTBEgCbGTb4lIrWUIHDlE9ROEAhazdGOAU_2zvYLnvDkEY9AMyZD1q7dUdWHrbU9-6rg5XNeh8XjFJpPRZzFY473m1JPt0Khceb0EDwrrpfxdzToGEEhNrtaXHPo8oB-9fIeO_YX3c5jhZY7qLV3O3TvRLhmDdsUqk6HjYqFroGgsvrRErt6-9hLggOod6X_b9o8pNdws6O68CmV2m3gYI'
  },
  {
    id: 'west-village',
    name: 'Crystal West Village',
    address: '302 Bleecker St, New York, NY 10014',
    phone: '098469 99966',
    distance: '1.2 MI',
    hours: 'Open until 8 PM',
    opensAt: '10:00 AM',
    coordinates: '40.7323° N, 74.0044° W',
    description: 'An intimate, neighborhood boutique offering standard and advanced clinical services alongside handcrafted collections.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA5Psql_cqbpTeAsL2QiAdq0-g9xyy-W99Y5XxbqBhfRSROs4dsOq3Aoy68wFqxQcSvGl_dtgtz3zf9Ob5QqH_Z1x4vg7q1TWl9Bu0V-GkiPVGj8_FKFOHX3AV7kZM1kbZlDGqjvvDK-Y7qsPQYCtoAC_5cO31uHwSSJqCrjAsj8ObQIlGXWwjIrA_mCOsXgVqTyEokv94XI2aEKN_dnHDLguLj_BbKcR2yaJpkftAIVxK5oxikIJKJaVKH2TeKEMsNFPVGZmyqOg',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzn_0DOxy32VK8rx3YxF9vI9nNq_pRP-NDrkShrwtekYRKO7yzTWMotzTBEgCbGTb4lIrWUIHDlE9ROEAhazdGOAU_2zvYLnvDkEY9AMyZD1q7dUdWHrbU9-6rg5XNeh8XjFJpPRZzFY473m1JPt0Khceb0EDwrrpfxdzToGEEhNrtaXHPo8oB-9fIeO_YX3c5jhZY7qLV3O3TvRLhmDdsUqk6HjYqFroGgsvrRErt6-9hLggOod6X_b9o8pNdws6O68CmV2m3gYI'
  },
  {
    id: 'kannur',
    name: 'Crystal Optics - Kannur',
    address: 'Talap, Kannur, Kerala 670002',
    phone: '098469 99966',
    distance: 'Main Store',
    hours: 'Closed · Opens 9:30 am',
    opensAt: '9:30 AM',
    coordinates: 'V9PC+8W Kannur, Kerala',
    description: 'Crystal Optics stands as a beacon of optical excellence in Kannur. Specializing in high-precision wholesale distribution, we provide a curated selection of global eyewear brands to clinicians and retailers. Our commitment to uncompromising clarity and visionary style ensures that every piece in our collection meets the most rigorous standards of precision and craftsmanship.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb6AwaSA-cIF8fcM2JNh5ZLg49CcG97KWVPYym-q64ETq4-uqtrKmDCKxBqA5uYF55Hovw-SpoDtk_Lg6egHi6zvh0Ex-2pjHoDN1qr2IVSoAOJsDIhxjm4FBlGbxZ07LMYMZkZ1HHztyqEv2OaajyUStwvBNXIo1ld9eREmZgr9q6pa6xzpf0u4DsqyGi9Fwr1-K9LieFkj3Hgj8O8rd8QWHjR-03xo75ER0HwMdZKMb-T2T-eYYeqan9WnoNe8Y5jiFOsTyOcd0',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMkgWQrvG_oXRVJQfr__n_2ovVlS_ccYeIIVUXr3EQnrkoz4hYa2o0mQPYO2hdmtaeDLmCNLNVRtYQN_B80a6e5V9Dypcpm09AyaJKKxhmMhWPwnW8TZrJpucVzFXcDwkEofmuFf9YGCxlg500XxKxK3sXSmAurk2RYHOU1QPD-_aKZV7FHmQbUVmYc-V4Qriff2ol2LRyDH7FphQRNWieg3bIvRjVimi_JhRmv4GQ32uCkl9GC8wCI6haIQA-rDJFmPq3ZqZJKbM'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Irshad Rahman',
    rating: 5,
    comment: 'Exceptional collection and clinical care. The virtual try-on tool is highly accurate and made selecting Aero-Titanium X very straightforward.',
    date: '2026-05-12'
  },
  {
    id: 'rev-2',
    author: 'Meera Nair',
    rating: 5,
    comment: 'The highest standard of wholesale and retail frames in Kerala. The materials have absolute premium precision, and the service in Kannur Talap is stellar.',
    date: '2026-04-20'
  }
];

// Preconfigured faces for Try On
export const VIRTUAL_TRY_ON_FACES = [
  {
    id: 'model-male-1',
    name: 'Male Model (Slate)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHdWZR_Mlg4uVDnWiIyM6j9LapLFh6cXyE773mrHOppEfELXI-ayuvE88X7ZB8I7gOeGP5VV6VHay6YYy2F0lWfqJaGBHiKlhS57xd9KgdBu_cu8_zwqkBKeyQt-Oq_35xOdkbBm1MArFmyp8YeQITqbzFCFGExaAdSm3opWbzEkchTdHZaxAtgHmmBYq3hQ1UeqcDQt8oYzZFcB63X5nyoJ1t_2niqsZJJYt5XEOsd-0vOMvAZ1ghCZ0AinFMOHUufQ7RV3lczy4'
  },
  {
    id: 'model-female-1',
    name: 'Female Model (Prism)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcFzYWqIlOAdCAJ4Ak-0bFZTMbH2xcrFeEpLSwa7i2vY-9gebeWOZh0s-8JdRwkocXglZ87rBUL6cG_WZ_cz4cbJ5j_JQlz2s3h4Pvu5xMfy9DeuO-Z2_murfUTIgL34xm1cl7FzQZk9Hld4KxjRll0q-CrZVAktsBNY5otorIjVbnHJlUBodjY0UzEpLzyHlGmnoYnpIWh1rb2MTvuh1pO3EK2j-gr-jXzROa1U9D6Vu-RG8V3bpiHfaJh5Ia3pftIL4i0PJZfiM'
  },
  {
    id: 'model-general-editorial',
    name: 'Editorial Portrait',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzGdUVF-typ2rgLY5lRqixONQ-qU1cD3tdFCj6wYF9_OPofv-DZTSSSDhLRZWzvyLECpSmclNCdLuilkamVm0YTpH1iJpZ8FLbxXaH_flerrHiIlsuIrZ8LIQuQDbGo--sC2Xj71u1LbnJ-ulHxXsFFjEnTxavACaQ_QYONq1OGA5XVcsqhO2x0UturHtY4aA7PyeRO7tTxsO4HADXih4-XPAFAiXR8prUvaQdOZpPCMqXUr06AUOG-29Zg8ZW7iM8afl91R3py7U'
  }
];
