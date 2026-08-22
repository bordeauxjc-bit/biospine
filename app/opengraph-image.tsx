import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'edge';
export const alt = `${siteConfig.name}, ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  const vertebrae = [
    [37, 10, -18], [31, 16, -28], [27, 23, -18], [28, 30, 10],
    [33, 36, 24], [36, 43, 13], [33, 50, -15], [26, 56, -25],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 76px',
          background: '#F7F4EE',
          color: '#101614',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <svg width="78" height="78" viewBox="0 0 72 72">
            <path d="M29 7C16 11 8 22 8 35c0 13 8 24 21 30" fill="none" stroke="#55A95C" strokeWidth="4" strokeLinecap="round" />
            <path d="M43 7c13 4 21 15 21 28 0 13-8 24-21 30" fill="none" stroke="#55A95C" strokeWidth="4" strokeLinecap="round" />
            <g fill="#1F6528">
              {vertebrae.map(([x, y, rotation], index) => (
                <rect key={index} x={x} y={y} width="12" height="6" rx="3" transform={`rotate(${rotation} ${x + 6} ${y + 3})`} />
              ))}
            </g>
            <circle cx="36" cy="35" r="2.25" fill="#55A95C" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontFamily: 'Georgia', fontSize: '45px', fontWeight: 700, letterSpacing: '-1px' }}>
              <span style={{ color: '#1F6528' }}>Bio</span>
              <span style={{ color: '#2B8535' }}>Spine</span>
            </div>
            <div style={{ marginTop: '4px', color: '#5F5B52', fontSize: '12px', fontWeight: 700, letterSpacing: '3px' }}>
              HEALTH &amp; WELLNESS
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '970px' }}>
          <div style={{ fontFamily: 'Georgia', fontSize: '76px', lineHeight: 1.04, letterSpacing: '-2px' }}>
            Chiropractic care that starts with listening.
          </div>
          <div style={{ display: 'flex', marginTop: '28px', color: '#4A4740', fontSize: '27px' }}>
            {siteConfig.doctor.name}, {siteConfig.doctor.credential} · Lake City, South Carolina
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #D8D2C7', paddingTop: '20px', color: '#5F5B52', fontSize: '20px' }}>
          <span>{siteConfig.phone}</span>
          <span>{siteConfig.address.full}</span>
        </div>
      </div>
    ),
    size,
  );
}
