'use client';

import { useEffect } from 'react';

export function BookingAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[data-booking-placement]');
      if (!link || new URL(link.href).hostname !== 'www.zocdoc.com') return;

      const analyticsWindow = window as typeof window & {
        gtag?: (...args: unknown[]) => void;
      };

      // Record the button's position, never form contents, visit reasons,
      // patient details, or a claim that a booking was completed on Zocdoc.
      analyticsWindow.gtag?.('event', 'booking_click', {
        booking_provider: 'zocdoc',
        booking_placement: link.dataset.bookingPlacement,
        transport_type: 'beacon',
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
