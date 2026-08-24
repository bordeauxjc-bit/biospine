import { Section } from './Section';
import type { ClinicalSource } from '@/lib/clinical-sources';

export function ClinicalSources({ sources }: { sources: ClinicalSource[] }) {
  return (
    <Section tone="cream">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="label-muted">Evidence and safety</p>
          <h2 className="mt-3 !text-2xl">Clinical references</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            These sources explain general evidence, risks, and warning signs.
            They do not diagnose an individual reader or replace an examination.
          </p>
        </div>
        <ul role="list" className="lg:col-span-8">
          {sources.map((source) => (
            <li key={source.url} className="border-t border-brand-ink/15 py-4 first:border-t-2 first:border-brand-green">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-ink underline decoration-brand-green/35 underline-offset-4 hover:text-brand-green-dark hover:decoration-brand-green"
              >
                {source.name}
              </a>
              <p className="mt-1 text-sm text-slate-600">{source.publisher}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
