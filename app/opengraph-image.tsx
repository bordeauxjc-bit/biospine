import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'edge';
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0B1220 0%, #1E293B 60%, #0B1220 100%)',
          color: 'white',
        }}
      >
        {/* Spine mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <svg width="96" height="96" viewBox="0 0 100 120" fill="none">
            <path
              d="M 70 18 C 38 22, 30 44, 50 58 C 70 72, 62 94, 30 102"
              stroke="#10B981"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div
            style={{
              fontSize: '40px',
              fontWeight: 600,
              color: '#BCE3EB',
              display: 'flex',
            }}
          >
            BioSpine
          </div>
        </div>

        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: '48px',
            maxWidth: '900px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Chiropractic Care</span>
          <span style={{ color: '#34D399' }}>in Lake City, SC</span>
        </div>

        <div
          style={{
            fontSize: '28px',
            color: '#CBD5E1',
            marginTop: '32px',
            display: 'flex',
          }}
        >
          {siteConfig.doctor.name}, {siteConfig.doctor.credential}
        </div>

        <div
          style={{
            fontSize: '22px',
            color: '#94A3B8',
            marginTop: '48px',
            display: 'flex',
            gap: '32px',
          }}
        >
          <span>{siteConfig.phone}</span>
          <span>•</span>
          <span>{siteConfig.address.full}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
