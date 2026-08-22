'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '@/lib/site-config';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    return () => {
      document.body.style.overflow = '';
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
          aria-label={`${siteConfig.name}, home`}
        >
          <Logo />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-9"
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
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="hidden sm:inline-flex items-center gap-2 rounded bg-brand-green px-5 py-2.5 text-[0.9375rem] font-medium text-white hover:bg-brand-green-dark transition-colors focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{siteConfig.phone}</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded bg-brand-green text-white sm:hidden"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded text-brand-ink hover:bg-brand-ink/5 lg:hidden"
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
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[4.5rem] sm:top-20 bottom-0 z-40 bg-brand-cream transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
          <a
            href={`tel:${siteConfig.phoneE164}`}
            tabIndex={isOpen ? undefined : -1}
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded bg-brand-green px-6 py-4 font-medium text-white"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
