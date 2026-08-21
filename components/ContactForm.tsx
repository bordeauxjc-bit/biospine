/**
 * Netlify Forms-compatible contact form.
 *
 * If deployed to Netlify, the form submission is automatically captured and
 * emailed to the configured notification address. The `data-netlify="true"`
 * attribute + hidden `form-name` field are what Netlify's build plugin looks
 * for. No JavaScript required, graceful degradation to standard HTML POST.
 *
 * If deployed elsewhere (Vercel), this form will POST to /contact which will
 * 405. See README for Vercel-compatible API route alternative.
 */
export function ContactForm() {
  return (
    <form
      name="biospine-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/contact/thanks"
      className="space-y-5"
    >
      {/* Netlify form name */}
      <input type="hidden" name="form-name" value="biospine-contact" />
      {/* Honeypot for spam bots */}
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human:{' '}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="First name"
          name="firstName"
          type="text"
          required
          autoComplete="given-name"
        />
        <Field
          label="Last name"
          name="lastName"
          type="text"
          required
          autoComplete="family-name"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </div>

      <div>
        <label
          htmlFor="reason"
          className="mb-2 block text-sm font-medium text-brand-ink"
        >
          Reason for visit
        </label>
        <select
          id="reason"
          name="reason"
          className="w-full rounded border border-slate-300 bg-white px-4 py-3 text-brand-ink transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
          defaultValue=""
        >
          <option value="" disabled>
            Select a reason…
          </option>
          <option>New patient consultation</option>
          <option>Back or neck pain</option>
          <option>Headaches or migraines</option>
          <option>Sports injury</option>
          <option>Arthritis or joint pain</option>
          <option>General wellness</option>
          <option>Other / not sure</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-brand-ink"
        >
          How can we help? <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded border border-slate-300 bg-white px-4 py-3 text-brand-ink transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-y"
          placeholder="Briefly describe what’s going on…"
        />
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        By submitting this form, you consent to being contacted by phone or
        email about your inquiry. We never share your information. Please do
        not include sensitive health information in this form.
      </p>

      <button
        type="submit"
        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded bg-brand-green px-7 py-3.5 font-medium text-white transition-colors hover:bg-brand-green-dark focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
      >
        Send message
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
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-brand-ink"
      >
        {label}
        {required && <span className="text-brand-green ml-0.5">*</span>}
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
