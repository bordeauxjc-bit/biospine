import type { ComponentProps } from 'react';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export type BookingPlacement =
  | 'header'
  | 'mobile-menu'
  | 'hero'
  | 'page-header'
  | 'service'
  | 'condition'
  | 'blog'
  | 'contact'
  | 'new-patients'
  | 'location'
  | 'footer'
  | 'home-cta';

type Props = Omit<ComponentProps<typeof LinkButton>, 'href' | 'external' | 'children'> & {
  placement: BookingPlacement;
  patientType?: 'new' | 'existing';
  children?: React.ReactNode;
};

export function BookingButton({
  placement,
  patientType = 'new',
  children = 'Book on Zocdoc',
  ...props
}: Props) {
  return (
    <LinkButton
      {...props}
      href={patientType === 'existing' ? siteConfig.returningPatientAppointmentUrl : siteConfig.appointmentUrl}
      external
      data-booking-placement={placement}
      aria-label={props['aria-label'] ?? `Book ${patientType === 'existing' ? 'a return visit' : 'an appointment'} on Zocdoc (opens in a new tab)`}
    >
      {children}
    </LinkButton>
  );
}
