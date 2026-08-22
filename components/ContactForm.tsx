'use client';

import { FormEvent, useState } from 'react';
import { Loader2, Send } from 'lucide-react';

type SubmitState = 'idle' | 'submitting' | 'error';

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('submitting');
    setError('');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'We could not send your message.');
      }

      window.location.assign('/contact/thanks');
    } catch (submitError) {
      setSubmitState('error');
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'We could not send your message. Please call the office instead.',
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <input type="hidden" name="subject" value="New BioSpine website inquiry" />
      <p className="hidden" aria-hidden>
        <label>
          Leave this field empty
          <input name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" type="text" required autoComplete="given-name" />
        <Field label="Last name" name="lastName" type="text" required autoComplete="family-name" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>

      <div>
        <label htmlFor="reason" className="mb-2 block text-sm font-medium text-brand-ink">
          Reason for visit
        </label>
        <select
          id="reason"
          name="reason"
          className="w-full rounded border border-slate-300 bg-white px-4 py-3 text-brand-ink transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
          defaultValue=""
          required
        >
          <option value="" disabled>Select a reason…</option>
          <option>New patient consultation</option>
          <option>Back or neck pain</option>
          <option>Shockwave therapy</option>
          <option>Headaches or migraines</option>
          <option>Sports injury</option>
          <option>Auto accident injury</option>
          <option>Arthritis or joint pain</option>
          <option>General wellness</option>
          <option>Other / not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-ink">
          How can we help? <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full resize-y rounded border border-slate-300 bg-white px-4 py-3 text-brand-ink transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
          placeholder="Please keep this brief and avoid private medical details."
        />
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        By submitting this form, you consent to being contacted by phone or
        email about your inquiry. Do not include diagnoses, insurance numbers,
        or other sensitive health information.
      </p>

      {submitState === 'error' && (
        <p role="alert" className="border-l-2 border-red-600 pl-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded bg-brand-green px-7 py-3.5 font-medium text-white transition-colors hover:bg-brand-green-dark focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 sm:w-auto"
      >
        {submitState === 'submitting' ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        {submitState === 'submitting' ? 'Sending…' : 'Request an appointment'}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-brand-ink">
        {label}
        {required && <span className="ml-0.5 text-brand-green">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded border border-slate-300 bg-white px-4 py-3 text-brand-ink transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
      />
    </div>
  );
}
