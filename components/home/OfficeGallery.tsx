import Image from 'next/image';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

/**
 * Office gallery, shot at the current John Street location.
 *
 * All four photographs are portrait, so they get matching 3:4 frames and run
 * as an even four-up spread; cropping them to landscape would throw away
 * most of each room. They are ordered as a patient walks the space: door,
 * waiting room, front desk, treatment floor.
 *
 * Captions sit under each frame rather than appearing on hover, which keeps
 * them readable on touch devices where there is no hover state at all.
 */

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

const photos: Photo[] = [
  {
    src: '/images/office/front-door.jpg',
    alt: `Front entrance of ${siteConfig.name} at ${siteConfig.address.full}, with the logo on the glass door and an open sign`,
    caption: 'The door on John Street',
  },
  {
    src: '/images/office/waiting-room.jpg',
    alt: `Waiting room at ${siteConfig.name} with armchairs, a coffee table, and a water cooler`,
    caption: 'The waiting room',
  },
  {
    src: '/images/office/front-desk.jpg',
    alt: `Reception desk and check-in area at ${siteConfig.name} in Lake City, SC`,
    caption: 'Check in at the front desk',
  },
  {
    src: '/images/office/treatment-floor.jpg',
    alt: `Open treatment floor at ${siteConfig.name} with adjustment tables, massage chairs, and rehabilitation equipment`,
    caption: 'The open treatment floor',
  },
];

export function OfficeGallery() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Inside the office"
        title="See the John Street office before you arrive"
        description="The front door, waiting room, check-in desk, and treatment floor shown here are the same spaces you will use at your appointment."
      />

      <ul
        role="list"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {photos.map((photo) => (
          <li key={photo.src}>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand ring-1 ring-brand-ink/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 23vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 border-t border-brand-ink/12 pt-2.5 text-sm text-slate-600">
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <LinkButton href="/contact" variant="secondary">
          Plan your visit
        </LinkButton>
      </div>
    </Section>
  );
}
