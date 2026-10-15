'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { CalendarDays, Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { BookingButton } from '@/components/BookingButton';
import { siteConfig } from '@/lib/site-config';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';

    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        isScrolled
          ? 'border-brand-ink/10 bg-brand-cream/95 lg:backdrop-blur-md'
          : 'border-transparent bg-brand-cream'
      }`}
    >
      <div className="container flex h-[4.5rem] sm:h-20 items-center justify-between gap-2 sm:gap-6">
        <Link
          href="/"
          className="flex items-center focus-visible:rounded"
        >
          <Logo />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Primary navigation"
        >
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-[0.9375rem] transition-colors ${
                  isActive
                    ? 'text-brand-ink font-medium'
                    : 'text-slate-600 hover:text-brand-ink'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-brand-green"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2.5">
          <BookingButton
            placement="header"
            className="!min-h-11 !px-3 !py-2 sm:!px-5"
            aria-label="Book an appointment on Zocdoc (opens in a new tab)"
          >
            <CalendarDays className="hidden h-4 w-4 sm:block" aria-hidden />
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book on Zocdoc</span>
          </BookingButton>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded text-brand-ink hover:bg-brand-ink/5 focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-brand-cream sm:top-20 lg:hidden ${
          isOpen
            ? 'block'
            : 'hidden'
        }`}
        aria-hidden={!isOpen}
      >
        <nav
          className="container py-6 flex flex-col"
          aria-label="Mobile navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? undefined : -1}
              className="border-b border-brand-ink/12 py-4 font-display text-2xl text-brand-ink hover:text-brand-green-dark transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <BookingButton
            placement="mobile-menu"
            tabIndex={isOpen ? undefined : -1}
            onClick={() => setIsOpen(false)}
            className="mt-6"
            size="lg"
          >
            <CalendarDays className="h-5 w-5" aria-hidden />
            Book on Zocdoc
          </BookingButton>
          <a
            href={`tel:${siteConfig.phoneE164}`}
            tabIndex={isOpen ? undefined : -1}
            className="mt-3 inline-flex items-center justify-center gap-2.5 rounded border border-brand-ink/20 px-6 py-4 font-medium text-brand-ink"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
