/**
 * Single source of truth for all business information.
 * Update values here to propagate across the entire site (Header, Footer, SEO,
 * JSON-LD schemas, contact page, sitemap, etc.).
 *
 * TODO before launch: confirm the "TODO: confirm with client" items below.
 */

export const siteConfig = {
  name: 'BioSpine Health and Wellness',
  legalName: 'BioSpine Health and Wellness, LLC',
  shortName: 'BioSpine',
  tagline: 'Chiropractic Care in Lake City, SC',
  description:
    'Dr. Chucky S. Jordan, D.C. provides chiropractic care for back pain, headaches, sports injuries, arthritis, and overall wellness in Lake City, South Carolina.',

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
    'https://biospinehealth.com',

  // Contact
  phone: '843-713-0669',
  phoneE164: '+18437130669',
  email: 'Biospinehealthandwellness@gmail.com',

  // Address
  address: {
    street: '263 Kelley St, Ste 100',
    city: 'Lake City',
    state: 'SC',
    zip: '29560',
    country: 'US',
    full: '263 Kelley St, Ste 100, Lake City, SC 29560',
  },

  // Geo (approximate centroid for Lake City, SC — refine with Google Place ID if available)
  geo: {
    latitude: 33.8718,
    longitude: -79.7548,
  },

  // Hours — TODO: confirm with client
  hours: [
    { day: 'Monday', open: '08:00', close: '17:00' },
    { day: 'Tuesday', open: '08:00', close: '17:00' },
    { day: 'Wednesday', open: '08:00', close: '17:00' },
    { day: 'Thursday', open: '08:00', close: '17:00' },
    { day: 'Friday', open: '08:00', close: '17:00' },
    { day: 'Saturday', open: null, close: null },
    { day: 'Sunday', open: null, close: null },
  ] as const,

  // Doctor — sourced from CMS NPPES registry + Logan College public records
  doctor: {
    name: 'Dr. Chucky S. Jordan',
    fullName: 'Dr. Chucky Sentell Jordan',
    credential: 'D.C.',
    title: 'Doctor of Chiropractic',
    npi: '1841656527',
    license: 'South Carolina #4099',
    education: 'Logan College of Chiropractic',
    graduationYear: 2015,
    boardCertified: 'National Board of Chiropractic Examiners',
  },

  // Social & external profiles
  social: {
    facebook: 'https://www.facebook.com/BiospineHealth/',
    rateMDs:
      'https://www.ratemds.com/clinic/us-sc-lake-city-biospine-health-and-wellness/',
  },

  // Services offered — used for Services page and MedicalProcedure schema
  services: [
    {
      slug: 'chiropractic-adjustments',
      name: 'Chiropractic Adjustments',
      summary:
        'Gentle, precise spinal adjustments to restore joint motion, reduce pain, and support nervous-system function.',
    },
    {
      slug: 'back-and-neck-pain',
      name: 'Back & Neck Pain Treatment',
      summary:
        'Targeted care for acute and chronic low back pain, neck pain, and sciatica using evidence-informed chiropractic techniques.',
    },
    {
      slug: 'headache-migraine-care',
      name: 'Headache & Migraine Care',
      summary:
        'Relief for tension headaches, cervicogenic headaches, and migraines through spinal care and postural correction.',
    },
    {
      slug: 'sports-injury-care',
      name: 'Sports Injury Rehabilitation',
      summary:
        'Return-to-play care for athletes of every level — from weekend warriors to student athletes in the Pee Dee region.',
    },
    {
      slug: 'arthritis-relief',
      name: 'Arthritis Relief',
      summary:
        'Conservative, non-surgical care to manage arthritis-related stiffness and joint pain and improve quality of life.',
    },
    {
      slug: 'wellness-and-weight-loss',
      name: 'Wellness & Weight Loss Consultations',
      summary:
        'Lifestyle and wellness guidance — including weight-loss consultations — to help you feel and move better every day.',
    },
  ],

  // Conditions treated — used on /conditions for long-tail SEO
  conditions: [
    'Low back pain',
    'Neck pain',
    'Sciatica',
    'Headaches',
    'Migraines',
    'Sports injuries',
    'Arthritis',
    'Joint pain',
    'Whiplash',
    'Postural problems',
    'Muscle tension',
    'Work-related injuries',
  ],

  // Accepted insurance — TODO: confirm additional insurers with client
  insurance: {
    confirmed: ['Medicare'],
    note: 'Contact our office to confirm coverage for your specific plan.',
  },

  // Primary navigation
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/conditions', label: 'Conditions' },
    { href: '/new-patients', label: 'New Patients' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],

  // Area served — for LocalBusiness schema
  areaServed: [
    'Lake City, SC',
    'Florence, SC',
    'Kingstree, SC',
    'Hemingway, SC',
    'Timmonsville, SC',
    'Pamplico, SC',
    'Scranton, SC',
    'Coward, SC',
    'Johnsonville, SC',
    'Pee Dee region',
  ],
} as const;

export type SiteConfig = typeof siteConfig;

// Helper: formatted phone for display
export const displayPhone = (phone: string = siteConfig.phone) => phone;

// Helper: Google Maps directions URL
export const directionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    siteConfig.address.full,
  )}`;

// Helper: Google Maps embed URL (keyless — uses standard embed)
export const mapEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.full,
  )}&output=embed`;

// Helper: formatted hours for display
export const formatHours = () => {
  return siteConfig.hours.map((h) => ({
    day: h.day,
    display:
      h.open && h.close
        ? `${format12Hour(h.open)} – ${format12Hour(h.close)}`
        : 'Closed',
    isClosed: !h.open,
  }));
};

function format12Hour(time24: string): string {
  const [hStr, mStr] = time24.split(':');
  const h = parseInt(hStr, 10);
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${mStr} ${period}`;
}
