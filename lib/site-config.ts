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
    'Dr. Chucky S. Jordan, D.C. provides chiropractic care and DOT physicals for Lake City, Florence County, and South Carolina’s Pee Dee region.',

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
    'https://biospinemovedifferently.com',

  // Contact
  phone: '843-713-0669',
  phoneE164: '+18437130669',
  email: 'Biospinehealthandwellness@gmail.com',

  // Address (current location, confirmed by client Aug 2026)
  address: {
    street: '214 John St',
    city: 'Lake City',
    state: 'SC',
    zip: '29560',
    country: 'US',
    full: '214 John St, Lake City, SC 29560',
  },

  // Geo for 214 John St, geocoded to an exact house-number match in OSM.
  geo: {
    latitude: 33.8746,
    longitude: -79.7586,
  },

  // Hours (confirmed: usually 9 AM to 5 PM)
  hours: [
    { day: 'Monday', open: '09:00', close: '17:00' },
    { day: 'Tuesday', open: '09:00', close: '17:00' },
    { day: 'Wednesday', open: '09:00', close: '17:00' },
    { day: 'Thursday', open: '09:00', close: '17:00' },
    { day: 'Friday', open: '09:00', close: '17:00' },
    { day: 'Saturday', open: null, close: null },
    { day: 'Sunday', open: null, close: null },
  ] as const,

  // Accessibility features (confirmed by client)
  accessibility: {
    wheelchairEntrance: true,
    wheelchairParking: true,
    wheelchairRestroom: true,
  },

  // Doctor, sourced from CMS NPPES registry + Logan College public records
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
    fmcsaNationalRegistryNumber: '8852422617',
    fmcsaCertificationDate: '2021-11-22',
  },

  // Social & external profiles
  social: {
    facebook: 'https://www.facebook.com/BiospineHealth/',
  },
  reviews: {
    google: 'https://www.google.com/maps?cid=3657180964230355155',
    zocdoc:
      'https://www.zocdoc.com/practice/biospine-health-and-wellness-75878',
  },

  // Public scheduling profile. Keep this separate from social profiles so it
  // can be used consistently by every appointment CTA.
  appointmentUrl: '/contact#appointment-form',

  // Services offered, used for Services page and MedicalProcedure schema
  services: [
    {
      slug: 'chiropractic-adjustments',
      name: 'Chiropractic Adjustments',
      summary:
        'Hands-on or lower-force techniques selected after Dr. Jordan examines the painful or restricted area.',
      href: '/services/chiropractic-adjustments',
    },
    {
      slug: 'dot-physicals',
      name: 'DOT Physicals',
      summary:
        'FMCSA physical qualification exams for commercial drivers, performed by a certified Medical Examiner listed on the National Registry.',
      href: '/services/dot-physicals',
    },
    {
      slug: 'shockwave-therapy',
      name: 'Shockwave Therapy',
      summary:
        'Focused acoustic pulse therapy for stubborn tendon and soft-tissue pain that has not settled with rest or standard care.',
      href: '/services/shockwave-therapy',
    },
    {
      slug: 'back-and-neck-pain',
      name: 'Back & Neck Pain Treatment',
      summary:
        'An examination for back pain, neck pain, or sciatica followed by treatment when the findings support chiropractic care.',
      href: '/services/back-neck-pain',
    },
    {
      slug: 'headache-migraine-care',
      name: 'Headache & Migraine Care',
      summary:
        'Evaluation of headache patterns that travel with neck stiffness or tension, with medical referral when the pattern calls for it.',
      href: '/services/headache-migraine-care',
    },
    {
      slug: 'sports-injury-care',
      name: 'Sports Injury Care',
      summary:
        'Assessment of joint, muscle, and overuse pain to decide what can be treated here and what needs imaging or rehabilitation.',
      href: '/services/sports-injury-care',
    },
    {
      slug: 'auto-accident-injury',
      name: 'Auto Accident Injury Care',
      summary:
        'Evaluation and treatment for whiplash, back, neck, and shoulder pain after a collision, with documentation for your claim.',
      href: '/services/auto-accident-injury',
    },
    {
      slug: 'arthritis-relief',
      name: 'Arthritis Relief',
      summary:
        'Gentle joint and movement care for arthritis-related stiffness, adapted to bone health, medications, and prior procedures.',
      href: '/services/arthritis-relief',
    },
  ],

  // Conditions treated, used on /conditions for long-tail SEO
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
    'Plantar fasciitis',
    'Tennis elbow',
    'Rotator cuff pain',
    'Achilles tendinitis',
    'Postural problems',
    'Muscle tension',
    'Work-related injuries',
  ],

  // Accepted insurance. TODO: confirm additional insurers with client
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

  // Area served, for LocalBusiness schema
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

// Helper: Google Maps embed URL (keyless, uses standard embed)
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
