export type PublishedReview = {
  text: string;
  author: string;
  detail: string;
  platform: 'Google' | 'Zocdoc';
  url: string;
};

export type PublicGoogleReview = {
  author: string;
  rating: 5;
  summary?: string;
  context?: string;
};

export const reviewSources = {
  google: {
    name: 'Google',
    rating: '5.0',
    count: 12,
    url: 'https://www.google.com/maps?cid=3657180964230355155',
    verification:
      'Public Google reviews. Google does not verify that a reviewer received treatment.',
  },
  zocdoc: {
    name: 'Zocdoc',
    rating: '5.00',
    count: 6,
    url: 'https://www.zocdoc.com/practice/biospine-health-and-wellness-75878',
    verification:
      'Zocdoc says these reviews were submitted after patients interacted with the practice.',
  },
} as const;

export const publishedReviews: PublishedReview[] = [
  {
    text: 'Very good doctor.',
    author: 'Jewell R.',
    detail: 'Verified Zocdoc patient · October 2025',
    platform: 'Zocdoc',
    url: reviewSources.zocdoc.url,
  },
  {
    text: 'I’ve been able to have relief from my constant back pain.',
    author: 'S.T.',
    detail: 'Verified Zocdoc patient',
    platform: 'Zocdoc',
    url: reviewSources.zocdoc.url,
  },
  {
    text: 'Dr. Jordan is super knowledgeable, friendly and has great adjusting skills!',
    author: 'Luis R.',
    detail: 'Public Google review',
    platform: 'Google',
    url: reviewSources.google.url,
  },
  {
    text: 'Great guy, even better chiropractor.',
    author: 'Corey W.',
    detail: 'Public Google review',
    platform: 'Google',
    url: reviewSources.google.url,
  },
];

/**
 * All 12 ratings currently shown on BioSpine's public Google Business Profile.
 * Written comments are summarized so the page can represent every rating
 * without republishing a third-party review feed verbatim. Google does not
 * verify whether a reviewer received care.
 */
export const googlePublicReviews: PublicGoogleReview[] = [
  {
    author: 'Christina Dame',
    rating: 5,
    summary:
      'Praised the compassionate, caring staff and reported meaningful improvement in longstanding back and neck discomfort.',
  },
  {
    author: 'Ebony Jordan',
    rating: 5,
    summary:
      'Reported feeling better after an adjustment following soreness from a minor vehicle collision.',
  },
  {
    author: 'Luis Ramos',
    rating: 5,
    summary:
      'Highlighted Dr. Jordan’s knowledge, friendliness, and adjusting skill and recommended the practice to Lake City residents.',
  },
  {
    author: 'BlackMoneyMobbCarolina',
    rating: 5,
    summary:
      'Praised a clinician named Dr. Tyrone for professionalism, knowledge, and attention to rehabilitation.',
    context:
      'This public comment names another clinician; that context is retained rather than attributing the statement to Dr. Jordan.',
  },
  {
    author: 'Mark Chesser',
    rating: 5,
    summary:
      'Described being seen promptly during a severe back-pain episode and praised Dr. Chucky’s kindness and effort to provide relief.',
  },
  {
    author: 'Emily Connell',
    rating: 5,
    summary:
      'Said she and her husband received helpful back care and described the chiropractor as friendly and respectful.',
  },
  {
    author: 'Randy Orr',
    rating: 5,
    summary: 'Described Dr. Chuck as a kind, class-act professional.',
  },
  {
    author: 'Corey Williams',
    rating: 5,
    summary: 'Recommended the practice and praised both the chiropractor and the care.',
  },
  {
    author: 'Daniel Baird',
    rating: 5,
    summary: 'Praised the care and Dr. Jordan’s respectful manner.',
  },
  {
    author: 'Ms. Be Honest Williams',
    rating: 5,
    summary: 'Described the BioSpine team as very nice.',
  },
  {
    author: 'Tashauna Cooper',
    rating: 5,
  },
  {
    author: 'Sherry Gainey',
    rating: 5,
  },
];
