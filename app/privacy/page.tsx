import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Website Privacy Notice',
  description:
    'How the BioSpine website handles appointment inquiries, email, phone calls, and anonymous website performance data.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Website information"
        title="Website privacy notice"
        description="This notice explains what this website collects, why it is used, and how to contact BioSpine with a privacy question."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy', href: '/privacy' },
        ]}
      />

      <Section tone="white">
        <div className="prose-biospine max-w-3xl">
          <p className="label-muted">Last updated August 25, 2026</p>

          <h2>Information you choose to send</h2>
          <p>
            If the online appointment form is available, it asks for your name,
            email address, phone number, reason for visiting, and an optional
            short message. BioSpine uses that information to respond to your
            scheduling inquiry. Your browser sends the form submission directly
            to Web3Forms, which delivers it to the practice by email.
          </p>
          <p>
            You may also contact the office by phone or email. Information you
            share through those channels is handled according to the purpose of
            your communication and the practice&rsquo;s applicable recordkeeping
            obligations.
          </p>

          <h2>Do not send private medical details through this website</h2>
          <p>
            The appointment form and ordinary email are not intended for medical
            records, diagnoses, insurance identification numbers, Social Security
            numbers, or urgent medical information. Call the office for guidance
            about sending records. For a medical emergency, call 911.
          </p>

          <h2>Website analytics and performance data</h2>
          <p>
            The site uses Vercel Web Analytics and Speed Insights to understand
            page visits and website performance. Vercel describes Web Analytics
            as cookie-free and based on anonymized data. BioSpine does not send
            names, contact details, appointment reasons, or message contents as
            analytics properties.
          </p>
          <ul>
            <li>
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel Web Analytics privacy information
              </a>
            </li>
            <li>
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web3Forms privacy policy
              </a>
            </li>
          </ul>

          <h2>Hosting and external links</h2>
          <p>
            Vercel hosts this website and may process routine technical request
            data needed to deliver and secure it. Links to Google Maps, Facebook,
            Zocdoc, FMCSA, SCDMV, and other outside websites are governed by those
            services&rsquo; own privacy practices after you leave this site.
          </p>

          <h2>Your choices and questions</h2>
          <p>
            You can schedule by phone instead of using the website form. To ask
            about information you previously sent through the site, contact
            BioSpine at{' '}
            <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a> or{' '}
            <a className="break-all" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>

          <h2>Changes to this notice</h2>
          <p>
            This page may be updated when the website&rsquo;s forms, analytics,
            hosting, or contact practices change. The revision date above shows
            the current published version.
          </p>
        </div>
      </Section>

      <JsonLd
        id="ld-privacy-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Privacy', url: `${siteConfig.url}/privacy` },
        ])}
      />
    </>
  );
}
