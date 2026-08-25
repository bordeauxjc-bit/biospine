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
    '@type': 'MedicalClinic',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/logo.svg`,
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
    sameAs: [
      ...Object.values(siteConfig.social),
      ...Object.values(siteConfig.reviews),
    ],
    areaServed: [...siteConfig.areaServed],
    hasMap: siteConfig.reviews.google,
    availableService: siteConfig.services.map((s) => ({
      '@type': 'Service',
      name: s.name,
      description: s.summary,
      url: `${siteConfig.url}${s.href}`,
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
  };
}

export function doctorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/about#doctor`,
    name: siteConfig.doctor.fullName,
    honorificSuffix: siteConfig.doctor.credential,
    jobTitle: siteConfig.doctor.title,
    url: `${siteConfig.url}/about`,
    worksFor: {
      '@id': `${siteConfig.url}/#business`,
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: siteConfig.doctor.education,
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Keiser University',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: siteConfig.doctor.advancedEducation,
      },
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
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'FMCSA National Registry of Certified Medical Examiners',
        identifier: siteConfig.doctor.fmcsaNationalRegistryNumber,
        dateCreated: siteConfig.doctor.fmcsaCertificationDate,
      },
    ],
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'NPI',
      value: siteConfig.doctor.npi,
    },
  };
}

/** Service markup for an offered service that is not a therapy. */
export function serviceSchema(opts: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: {
      '@id': `${siteConfig.url}/#business`,
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
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

export function locationPageSchema() {
  const url = `${siteConfig.url}/locations/lake-city`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: `BioSpine Lake City Office | ${siteConfig.name}`,
    description: `Visit ${siteConfig.name} at ${siteConfig.address.full} for chiropractic care and DOT physicals.`,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#business`,
    },
    mainEntity: {
      '@id': `${siteConfig.url}/#business`,
    },
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

export function faqSchema(
  faqs: readonly { question: string; answer: string }[],
) {
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
    image: opts.image ?? `${siteConfig.url}/opengraph-image`,
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
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${opts.slug}`,
    },
  };
}

/**
 * MedicalTherapy for a treatment the clinic performs. Lets search engines
 * connect the procedure to the practice rather than treating the page as a
 * generic article.
 */
export function medicalTherapySchema(opts: {
  name: string;
  alternateName?: string;
  description: string;
  url: string;
  indications: string[];
  contraindication?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: opts.name,
    ...(opts.alternateName ? { alternateName: opts.alternateName } : {}),
    description: opts.description,
    url: opts.url,
    medicineSystem: 'https://schema.org/Chiropractic',
    relevantSpecialty: 'https://schema.org/Chiropractic',
    ...(opts.contraindication
      ? { contraindication: opts.contraindication }
      : {}),
    indication: opts.indications.map((name) => ({
      '@type': 'MedicalIndication',
      name,
    })),
    performerOfProcedure: {
      '@type': 'MedicalClinic',
      name: siteConfig.legalName,
      telephone: siteConfig.phoneE164,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
    },
  };
}

/**
 * MedicalCondition markup for patient education pages. This describes the
 * topic without implying that a page diagnoses the reader.
 */
export function medicalConditionSchema(opts: {
  name: string;
  description: string;
  url: string;
  symptoms: string[];
  possibleTreatment: string;
  treatmentUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    signOrSymptom: opts.symptoms.map((name) => ({
      '@type': 'MedicalSignOrSymptom',
      name,
    })),
    possibleTreatment: {
      '@type': 'MedicalTherapy',
      name: opts.possibleTreatment,
      url: opts.treatmentUrl,
    },
    relevantSpecialty: 'https://schema.org/Chiropractic',
  };
}
