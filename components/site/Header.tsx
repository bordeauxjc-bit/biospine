'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { CalendarDays, Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
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
          ? 'border-brand-ink/10 bg-brand-cream/92 backdrop-blur-md'
          : 'border-transparent bg-brand-cream'
      }`}
    >
      <div className="container flex h-[4.5rem] sm:h-20 items-center justify-between gap-6">
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

        <div className="flex items-center gap-2.5">
          <Link
            href={siteConfig.appointmentUrl}
            className="hidden items-center gap-2 rounded bg-brand-green px-5 py-2.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-brand-green-dark focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 sm:inline-flex"
          >
            <CalendarDays className="h-4 w-4" aria-hidden />
            <span>Request appointment</span>
          </Link>

          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded bg-brand-green text-white sm:hidden"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>

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
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 bg-brand-cream sm:top-20 lg:hidden ${
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
          <Link
            href={siteConfig.appointmentUrl}
            tabIndex={isOpen ? undefined : -1}
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded bg-brand-green px-6 py-4 font-medium text-white"
          >
            <CalendarDays className="h-5 w-5" aria-hidden />
            Request an appointment
          </Link>
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
