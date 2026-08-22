export type PublishedReview = {
  text: string;
  author: string;
  detail: string;
  platform: 'Google' | 'Zocdoc';
  url: string;
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
