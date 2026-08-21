import Image from 'next/image';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';

/**
 * Office gallery. Photos are from the practice's own Google Business Profile.
 *
 * The grid is built around each photo's real orientation: the two landscape
 * shots and the one portrait shot get frames that match, so nothing is
 * badly cropped and the two rows land at roughly equal heights.
 *
 * Captions sit under each frame rather than appearing on hover, which keeps
 * them readable on touch devices where there is no hover state at all.
 */

type Photo = {
  src: string;
  alt: string;
  caption: string;
  span: string;
  aspect: string;
};

const photos: Photo[] = [
  {
    src: '/images/office/exam-room.jpg',
    alt: 'Chiropractic exam room with adjustment table at BioSpine Health and Wellness',
    caption: 'Exam and treatment room',
    span: 'lg:col-span-8',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/office/rehab-equipment.jpg',
    alt: 'Resistance bands and rehabilitation equipment at BioSpine Health and Wellness',
    caption: 'Rehab and recovery tools',
    span: 'lg:col-span-4',
    aspect: 'aspect-[2/3]',
  },
  {
    src: '/images/office/waiting-room.jpg',
    alt: 'Waiting area at BioSpine Health and Wellness in Lake City, SC',
    caption: 'The waiting area',
    span: 'lg:col-span-6',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/office/outdoor-sign.jpg',
    alt: 'BioSpine Health and Wellness sign at 111 N Matthews Rd, Lake City, SC',
    caption: 'Off N Matthews Rd, easy to find',
    span: 'lg:col-span-6',
    aspect: 'aspect-[4/3]',
  },
];

export function OfficeGallery() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Inside the office"
        title="A small practice, kept the way you would want it"
        description="Clean, comfortable, and set up for everything from adjustments to rehab."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        {photos.map((photo) => (
          <figure key={photo.src} className={photo.span}>
            <div
              className={`relative ${photo.aspect} overflow-hidden rounded-sm bg-brand-sand ring-1 ring-brand-ink/10`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 border-t border-brand-ink/12 pt-2.5 text-sm text-slate-500">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12">
        <LinkButton href="/contact" variant="secondary">
          Plan your visit
        </LinkButton>
      </div>
    </Section>
  );
}
