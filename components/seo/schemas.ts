import { siteConfig } from '@/lib/site-config';

/**
 * Schema.org structured data builders.
 * All functions return plain JSON-LD objects suitable for <JsonLd data={...} />.
 *
 * Reference: https://schema.org/MedicalClinic
 */

const dayToSchema: Record<string, string> = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
};

export function localBusinessSchema() {
  const openingHoursSpec = siteConfig.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${dayToSchema[h.day]}`,
      opens: h.open,
      closes: h.close,
    }));

  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'MedicalClinic', 'LocalBusiness'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-default.png`,
    logo: `${siteConfig.url}/logo.png`,
    priceRange: '$$',
    medicalSpecialty: 'Chiropractic',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: openingHoursSpec,
    sameAs: Object.values(siteConfig.social),
    areaServed: siteConfig.areaServed.map((a) => ({
      '@type': 'City',
      name: a,
    })),
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(
      siteConfig.address.full,
    )}`,
    availableService: siteConfig.services.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s.name,
      description: s.summary,
      url: `${siteConfig.url}/services#${s.slug}`,
    })),
    // Accessibility features (https://schema.org/Accommodation#amenityFeature)
    amenityFeature: [
      siteConfig.accessibility.wheelchairEntrance && {
        '@type': 'LocationFeatureSpecification',
        name: 'Wheelchair accessible entrance',
        value: true,
      },
      siteConfig.accessibility.wheelchairParking && {
        '@type': 'LocationFeatureSpecification',
        name: 'Wheelchair accessible parking',
        value: true,
      },
      siteConfig.accessibility.wheelchairRestroom && {
        '@type': 'LocationFeatureSpecification',
        name: 'Wheelchair accessible restroom',
        value: true,
      },
    ].filter(Boolean),
    isAccessibleForFree: false,
  };
}

export function doctorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${siteConfig.url}/about#doctor`,
    name: siteConfig.doctor.fullName,
    honorificSuffix: siteConfig.doctor.credential,
    jobTitle: siteConfig.doctor.title,
    medicalSpecialty: 'Chiropractic',
    worksFor: {
      '@id': `${siteConfig.url}/#business`,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: siteConfig.doctor.education,
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: siteConfig.doctor.license,
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: siteConfig.doctor.boardCertified,
      },
    ],
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'NPI',
      value: siteConfig.doctor.npi,
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#business`,
    },
    inLanguage: 'en-US',
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image ?? `${siteConfig.url}/og-default.png`,
    datePublished: opts.date,
    dateModified: opts.updated ?? opts.date,
    author: {
      '@type': 'Person',
      name: siteConfig.doctor.fullName,
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${opts.slug}`,
    },
  };
}
