import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'edge';
export const alt = `${siteConfig.name}, ${siteConfig.tagline}`;
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
          background: '#101614',
          color: 'white',
        }}
      >
        {/* Spine mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <svg width="104" height="130" viewBox="8 2 78 132" fill="none">
            <path
              d="M 70 14 C 20 34, 24 62, 50 74 C 76 86, 80 112, 34 126"
              stroke="#34A738"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <g stroke="#34A738" strokeLinecap="round">
            <line x1="70.7" y1="15.9" x2="68.0" y2="8.9" strokeWidth="2.0" />
            <line x1="60.3" y1="21.4" x2="54.9" y2="10.8" strokeWidth="2.6" />
            <line x1="51.7" y1="26.8" x2="44.1" y2="15.0" strokeWidth="2.9" />
            <line x1="45.1" y1="32.1" x2="34.9" y2="20.3" strokeWidth="3.2" />
            <line x1="40.4" y1="37.2" x2="27.4" y2="26.5" strokeWidth="3.3" />
            <line x1="37.3" y1="42.1" x2="21.4" y2="33.7" strokeWidth="3.5" />
            <line x1="35.7" y1="46.7" x2="17.4" y2="42.1" strokeWidth="3.6" />
            <line x1="35.3" y1="50.8" x2="15.7" y2="51.2" strokeWidth="3.7" />
            <line x1="36.1" y1="54.7" x2="16.6" y2="60.5" strokeWidth="3.8" />
            <line x1="37.8" y1="58.5" x2="19.9" y2="69.0" strokeWidth="3.9" />
            <line x1="40.6" y1="62.1" x2="25.0" y2="76.3" strokeWidth="3.9" />
            <line x1="44.4" y1="65.5" x2="31.4" y2="82.4" strokeWidth="4.0" />
            <line x1="49.1" y1="68.5" x2="38.8" y2="87.4" strokeWidth="4.0" />
            <line x1="55.2" y1="71.5" x2="44.9" y2="90.4" strokeWidth="4.0" />
            <line x1="61.0" y1="75.3" x2="48.3" y2="92.5" strokeWidth="4.0" />
            <line x1="65.9" y1="79.6" x2="50.8" y2="94.3" strokeWidth="3.9" />
            <line x1="69.7" y1="84.4" x2="52.3" y2="95.7" strokeWidth="3.9" />
            <line x1="72.3" y1="89.8" x2="53.1" y2="96.5" strokeWidth="3.8" />
            <line x1="73.3" y1="95.5" x2="53.7" y2="96.7" strokeWidth="3.7" />
            <line x1="72.7" y1="101.3" x2="54.3" y2="97.1" strokeWidth="3.6" />
            <line x1="70.4" y1="106.9" x2="54.6" y2="98.4" strokeWidth="3.5" />
            <line x1="66.5" y1="112.2" x2="53.8" y2="101.0" strokeWidth="3.3" />
            <line x1="61.0" y1="116.9" x2="51.4" y2="104.6" strokeWidth="3.2" />
            <line x1="53.9" y1="121.2" x2="47.1" y2="109.0" strokeWidth="2.9" />
            <line x1="45.2" y1="125.0" x2="40.6" y2="113.9" strokeWidth="2.6" />
            <line x1="34.6" y1="127.9" x2="32.4" y2="120.7" strokeWidth="2.0" />
            </g>
          </svg>
          <div
            style={{
              fontSize: '40px',
              fontWeight: 600,
              color: '#93B2CB',
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
          <span style={{ color: '#6BBF6E' }}>in Lake City, SC</span>
        </div>

        <div
          style={{
            fontSize: '28px',
            color: '#CBC7BD',
            marginTop: '32px',
            display: 'flex',
          }}
        >
          {siteConfig.doctor.name}, {siteConfig.doctor.credential}
        </div>

        <div
          style={{
            fontSize: '22px',
            color: '#A19C90',
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
