import Image from 'next/image';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';

/**
 * Office gallery section showcasing the BioSpine clinic in Lake City, SC.
 * Photos sourced from the business's Google Business Profile with permission.
 */

type Photo = {
  src: string;
  alt: string;
  caption: string;
  span?: 'wide' | 'tall';
};

const photos: Photo[] = [
  {
    src: '/images/office/exam-room.jpg',
    alt: 'Chiropractic exam room with adjustment table at BioSpine Health and Wellness',
    caption: 'Exam & treatment room',
    span: 'wide',
  },
  {
    src: '/images/office/waiting-room.jpg',
    alt: 'Welcoming waiting area at BioSpine Health and Wellness in Lake City, SC',
    caption: 'Welcoming waiting area',
  },
  {
    src: '/images/office/doctor-in-action.jpg',
    alt: 'Dr. Chucky S. Jordan with a spine model at BioSpine Health and Wellness',
    caption: 'Patient education, every visit',
  },
  {
    src: '/images/office/rehab-equipment.jpg',
    alt: 'Rehabilitation bands and equipment at BioSpine Health and Wellness',
    caption: 'Rehab & recovery tools',
  },
  {
    src: '/images/office/outdoor-sign.jpg',
    alt: 'BioSpine Health and Wellness outdoor sign at 111 N Matthews Rd, Lake City, SC',
    caption: 'Easy to find off N Matthews Rd',
    span: 'wide',
  },
];

export function OfficeGallery() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Inside the office"
        title="A welcoming space built for healing"
        description="Clean, comfortable, and equipped for everything from spinal adjustments to rehab and recovery."
        center
      />

      <ul
        role="list"
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px]"
      >
        {photos.map((photo, idx) => (
          <li
            key={photo.src}
            className={`group relative overflow-hidden rounded-2xl ring-1 ring-black/5 ${
              photo.span === 'wide' ? 'col-span-2 row-span-1' : ''
            } ${idx === 0 ? 'lg:row-span-2 lg:col-span-2' : ''}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-ink/80 via-brand-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <p className="absolute bottom-3 left-4 right-4 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {photo.caption}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <LinkButton href="/contact" variant="primary">
          Plan your visit
        </LinkButton>
      </div>
    </Section>
  );
}
