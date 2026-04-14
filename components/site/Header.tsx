'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '@/lib/site-config';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center focus-visible:rounded-md"
          aria-label={`${siteConfig.name} — home`}
        >
          <Logo />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-green transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-dark transition-colors focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{siteConfig.phone}</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="sm:hidden inline-flex items-center justify-center rounded-full bg-brand-green p-2.5 text-white"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-ink hover:bg-slate-100"
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
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white z-40 transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <nav
          className="container py-8 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-xl font-medium text-brand-ink border-b border-slate-100 hover:text-brand-green transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 text-base font-semibold text-white"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
