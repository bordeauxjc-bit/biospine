import { Phone, MapPin, Star } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig, directionsUrl } from '@/lib/site-config';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-ink text-white isolate"
      aria-labelledby="hero-heading"
    >
      {/* Layered background: gradient glow + speckle */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-ink-soft to-brand-ink pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-speckle-light opacity-60 pointer-events-none"
        aria-hidden
      />

      {/* Radial accent glow, brand green, top-right */}
      <div
        className="absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full blur-[140px] opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.45) 0%, rgba(16,185,129,0) 70%)',
        }}
        aria-hidden
      />
      {/* Secondary glow, bottom-left, subtle */}
      <div
        className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(52,211,153,0.5) 0%, rgba(52,211,153,0) 70%)',
        }}
        aria-hidden
      />

      {/* Animated decorative spine silhouette */}
      <div
        className="absolute inset-y-0 right-0 w-[40%] opacity-10 pointer-events-none hidden lg:block"
        aria-hidden
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <path
            d="M250 60 C 130 180, 130 320, 250 400 C 370 480, 370 620, 250 740"
            stroke="#10B981"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {Array.from({ length: 30 }).map((_, i) => {
            const t = i / 29;
            const cy = 60 + t * 680;
            const cx = 250 - Math.sin(t * Math.PI * 2) * 50;
            return <circle key={i} cx={cx} cy={cy} r={6} fill="#10B981" />;
          })}
        </svg>
      </div>

      <div className="container relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-brand-green-light border border-brand-green/20">
            <Star className="h-4 w-4 fill-current" aria-hidden />
            <span>Now accepting new patients in Lake City, SC</span>
          </div>

          <h1
            id="hero-heading"
            className="mt-8 text-balance text-white font-display tracking-tight"
          >
            Get back to what you love.{' '}
            <span className="text-gradient-brand">Pain-free.</span>
          </h1>

          <p className="mt-7 text-xl sm:text-2xl text-slate-300 text-pretty max-w-2xl leading-relaxed">
            Personalized chiropractic care from {siteConfig.doctor.name}, 
            helping families across the Pee Dee region feel better, move
            better, and live better.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <LinkButton
              href={`tel:${siteConfig.phoneE164}`}
              variant="primary"
              size="lg"
              className="shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-200"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {siteConfig.phone}
            </LinkButton>
            <LinkButton
              href={directionsUrl()}
              external
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white hover:!text-brand-ink backdrop-blur-sm"
            >
              <MapPin className="h-5 w-5" aria-hidden />
              Get Directions
            </LinkButton>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 sm:gap-14 max-w-lg">
            <div className="border-l-2 border-brand-green/50 pl-5">
              <dd className="text-4xl sm:text-5xl font-display font-bold text-white">
                10<span className="text-brand-green-light">+</span>
              </dd>
              <dt className="mt-1 text-sm text-slate-400">
                Years of experience
              </dt>
            </div>
            <div className="border-l-2 border-brand-green/50 pl-5">
              <dd className="text-4xl sm:text-5xl font-display font-bold text-white inline-flex items-baseline gap-1">
                5.0
                <Star className="h-6 w-6 fill-brand-green-light text-brand-green-light" aria-hidden />
              </dd>
              <dt className="mt-1 text-sm text-slate-400">
                Patient rating
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
