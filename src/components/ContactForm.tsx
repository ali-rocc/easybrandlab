'use client';

import { useState, FormEvent } from 'react';
import { Button } from './Button';
import { trackFormSubmission, trackConversion, trackError } from '@/lib/analytics';
import { ui, type Locale } from '@/lib/i18n/content';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm({ locale = 'en' }: { locale?: Locale }) {
  const copy = ui[locale].contactForm;
  const isArabic = locale === 'ar';
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(copy.required);
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(copy.invalidEmail);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send');
      }

      setSuccess(true);
      // Track only confirmed successful submissions as lead events.
      trackFormSubmission('contact_form');
      trackConversion('contact_form_submission', 100);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      trackError('contact_form_submission_failed', '/contact');
      setError(copy.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form dir={isArabic ? 'rtl' : 'ltr'} onSubmit={handleSubmit} className="space-y-4 text-start">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          {copy.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={copy.namePlaceholder}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-start focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          {copy.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={copy.emailPlaceholder}
          dir="ltr"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-start focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          {copy.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={copy.messagePlaceholder}
          rows={5}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-start focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && (
        <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
          {copy.success}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? copy.sending : copy.submit}
      </Button>
    </form>
  );
}
