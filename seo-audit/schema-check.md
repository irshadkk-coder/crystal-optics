# Schema Markup (JSON-LD Structured Data) Audit Report

**Project:** Crystal Optics  
**Location:** Talap, Kannur, Kerala 670002, India  
**Date:** October 28, 2026  
**Audit Type:** Verified Server-Rendered JSON-LD Schema Markup & FAQ Consistency  
**Status:** All Verification Checks Passed on Production Build (`http://localhost:3000`)

---

## 1. Summary of Updates & Fixes Applied

1. **Optician Schema Address Realignment:**
   * Updated `addressLocality` to `"Kannur"`.
   * Preserved `streetAddress` as `"Talap"`.
   * Ensured consistent `"Talap, Kannur"` wording across visible store address text and key store summaries.

2. **`sameAs` Deprecation:**
   * Removed `sameAs` array (`wa.me` chat link and Google Maps query link) from both `Optician` schemas (`src/app/page.tsx` and `src/app/contact/page.tsx`).
   * Added clear code `// TODO:` comment specifying addition of verified Google Business Profile, Facebook, and Instagram URLs once supplied by the owner.

3. **FAQ & Hours Text Normalization:**
   * Removed `"(TODO: owner to confirm)"` text from all visible FAQ items, Key Facts blocks, and `FAQPage` JSON-LD schemas.
   * Standardized operating hours copy across all visible sections:
     > *"Monday to Saturday 10:00 to 19:30. Sunday closed."*
   * Retained `// TODO: owner to confirm Sunday operating hours` strictly as internal code comments.

4. **Pruning of Unverified "Please contact the store." FAQs:**
   * Removed all unverified FAQ items returning *"Please contact the store."* (eyewear prices, brand catalogs, customer parking, complimentary eye test eligibility, diagnostic equipment) from both the visible HTML and matching `FAQPage` JSON-LD schemas.
   * Preserved `// TODO:` comments listing all removed questions in code for future re-addition upon owner confirmation:
     * Home: prices, brand authorizations
     * Contact: parking arrangements
     * Eye-Test: complimentary eligibility, diagnostic equipment

5. **Product Schema Cleanup:**
   * Removed `brand` property from the server-rendered `Product` schema (`src/app/eyeglasses/[slug]/page.tsx`) until confirmed whether frames are Crystal Optics' house brand. Added a `// TODO:` comment.
   * Added `// TODO:` comments next to product image URLs in both `src/app/eyeglasses/[slug]/page.tsx` and `src/data.ts` indicating replacement with site-hosted product photography.

---

## 2. Route-by-Route Structured Data Table

*Audited directly against raw HTML responses over HTTP on the production build (`http://localhost:3000`).*

| Route | Number of JSON-LD blocks | @type of each block | JSON parses without error |
| :--- | :---: | :--- | :---: |
| `/` | 2 | `Optician`, `FAQPage` | **yes** |
| `/eyeglasses` | 1 | `BreadcrumbList` | **yes** |
| `/eyeglasses/crystal-one` | 2 | `Product`, `BreadcrumbList` | **yes** |
| `/sunglasses` | 1 | `BreadcrumbList` | **yes** |
| `/blue-light-glasses` | 1 | `BreadcrumbList` | **yes** |
| `/eye-test` | 2 | `FAQPage`, `BreadcrumbList` | **yes** |
| `/virtual-try-on` | 1 | `BreadcrumbList` | **yes** |
| `/about` | 1 | `BreadcrumbList` | **yes** |
| `/contact` | 3 | `Optician`, `FAQPage`, `BreadcrumbList` | **yes** |
| `/guides/choose-frame-for-face-shape` | 1 | `BreadcrumbList` | **yes** |
| `/guides/titanium-vs-acetate-frames` | 1 | `BreadcrumbList` | **yes** |

---

## 3. Full Pretty-Printed JSON-LD for Target Pages

### 3.1 Home Page (`/`)

#### Block 1 (`Optician`):
```json
{
  "@context": "https://schema.org",
  "@type": "Optician",
  "@id": "https://crystal-optics.vercel.app/#optician",
  "name": "Crystal Optics",
  "url": "https://crystal-optics.vercel.app",
  "telephone": "+919846999966",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Talap",
    "addressLocality": "Kannur",
    "addressRegion": "Kerala",
    "postalCode": "670002",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:30"
    }
  ]
}
```

#### Block 2 (`FAQPage`):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Crystal Optics located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crystal Optics is located in Talap, Kannur, Kerala 670002."
      }
    },
    {
      "@type": "Question",
      "name": "What are the store opening hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monday to Saturday 10:00 to 19:30. Sunday closed."
      }
    },
    {
      "@type": "Question",
      "name": "What is the phone number for Crystal Optics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The phone number is 098469 99966."
      }
    },
    {
      "@type": "Question",
      "name": "What optical products are available at the store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The store offers prescription eyeglasses, sunglasses, and blue-light filtering frames."
      }
    }
  ]
}
```

---

### 3.2 Contact Page (`/contact`)

#### Block 1 (`Optician`):
```json
{
  "@context": "https://schema.org",
  "@type": "Optician",
  "@id": "https://crystal-optics.vercel.app/contact/#optician",
  "name": "Crystal Optics",
  "url": "https://crystal-optics.vercel.app/contact",
  "telephone": "+919846999966",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Talap",
    "addressLocality": "Kannur",
    "addressRegion": "Kerala",
    "postalCode": "670002",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:30"
    }
  ]
}
```

#### Block 2 (`FAQPage`):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the exact store address for Crystal Optics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crystal Optics is located in Talap, Kannur, Kerala 670002."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reach Crystal Optics by phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach the store by calling 098469 99966."
      }
    },
    {
      "@type": "Question",
      "name": "What are the weekly store hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monday to Saturday 10:00 to 19:30. Sunday closed."
      }
    },
    {
      "@type": "Question",
      "name": "What optical services does Crystal Optics provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crystal Optics provides prescription eyewear dispensing, spectacle frame selection, and lens fitting."
      }
    }
  ]
}
```

#### Block 3 (`BreadcrumbList`):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://crystal-optics.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact & Directions",
      "item": "https://crystal-optics.vercel.app/contact"
    }
  ]
}
```

---

### 3.3 Eyeglasses Detail Page (`/eyeglasses/crystal-one`)

#### Block 1 (`Product`):
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Crystal One",
  "description": "Handcrafted from aerospace-grade titanium and Italian-sourced bio-acetate with integrated blue-light filtering lenses.",
  "image": [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD56m1xa5-yYx5RVJ4uF598Qdr9k7OrKZxbgY4CBv65HJL-5UAisCB1sTkIZBOcRFAxZT9WpbQU87scz0lWhA1u6OB-8o8T3SS0brR7dY2_TBOjgsfhLbDOWlZB5tYxsHLqoPNCSlrw1N7EXBN_B7AOiP0g1eCOm_ib3wFohFIXIWIo82J6LOFJlGicC9wjScvHO4dzTt-laToGg6PH7ZLwo6SwcY-R4qWwhURURzFPuMRt66ru6WRBuDGsmvj6A_yCGCT_m8t9ioY"
  ],
  "category": "eyeglasses",
  "material": "titanium"
}
```

#### Block 2 (`BreadcrumbList`):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://crystal-optics.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Eyeglasses",
      "item": "https://crystal-optics.vercel.app/eyeglasses"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Crystal One",
      "item": "https://crystal-optics.vercel.app/eyeglasses/crystal-one"
    }
  ]
}
```

---

### 3.4 Eye-Test Page (`/eye-test`)

#### Block 1 (`FAQPage`):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where are eye tests conducted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eye tests are conducted at Crystal Optics in Talap, Kannur, Kerala 670002."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book an eye test appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can schedule an appointment by calling 098469 99966, messaging on WhatsApp at +91 98469 99966, or using the online reservation form."
      }
    },
    {
      "@type": "Question",
      "name": "What are the available hours for eye check appointments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monday to Saturday 10:00 to 19:30. Sunday closed."
      }
    }
  ]
}
```

#### Block 2 (`BreadcrumbList`):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://crystal-optics.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Book Eye Test",
      "item": "https://crystal-optics.vercel.app/eye-test"
    }
  ]
}
```

---

## 4. Verification Checkpoint Confirmations

| Checkpoint | Target Requirement | Status | Verification Detail |
| :--- | :--- | :---: | :--- |
| **1. Locality & Street** | `addressLocality` = "Kannur", `streetAddress` = "Talap" | **CONFIRMED** | Extracted from raw JSON-LD on `/` and `/contact`. |
| **2. `sameAs` Removal** | `sameAs` array completely removed | **CONFIRMED** | Zero occurrences of `sameAs` across all JSON-LD blocks. |
| **3. No "TODO" in Public Text** | No "TODO" in JSON-LD or visible FAQs | **CONFIRMED** | Verified `hasTodo = false` across all JSON-LD blocks and visible FAQ DOM. |
| **4. Standardized Hours** | "Monday to Saturday 10:00 to 19:30. Sunday closed." | **CONFIRMED** | Exact string matched across all FAQ questions and answers. |
| **5. FAQ Schema = Visible Text** | 100% exact parity between schema and visible DOM | **CONFIRMED** | All 11 remaining Q&A pairs (4 on `/`, 4 on `/contact`, 3 on `/eye-test`) verified. |
| **6. Brand Removed in Product** | `brand` field removed from `Product` schema | **CONFIRMED** | Not found in `/eyeglasses/crystal-one` schema. |
