"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Send } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Prototype: no backend. Show success state.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50 mb-5">
          <CheckCircle className="h-8 w-8 text-success-600" />
        </div>
        <h2 className="text-2xl font-extrabold text-primary-900 mb-2">
          Thanks, {form.name}!
        </h2>
        <p className="text-secondary-500 max-w-sm">
          We&apos;ve received your enquiry and will be in touch within 2 business
          hours. If it&apos;s urgent, call us directly on{" "}
          <a href="tel:1300888123" className="font-semibold text-accent-600 hover:underline">
            1300 888 123
          </a>
          .
        </p>
        <Button
          onClick={() => { setSubmitted(false); setForm(initialState); }}
          variant="outlined"
          color="primary"
          size="md"
          className="mt-6"
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          name="name"
          id="name"
          placeholder="John Smith"
          required
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <Input
          label="Phone Number"
          name="phone"
          id="phone"
          type="tel"
          placeholder="0400 000 000"
          required
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>
      <Input
        label="Email Address"
        name="email"
        id="email"
        type="email"
        placeholder="john@example.com"
        value={form.email}
        onChange={handleChange}
        autoComplete="email"
      />
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="city"
          className="text-sm font-semibold text-secondary-700"
        >
          Your City
        </label>
        <select
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
          className="w-full rounded-lg border border-secondary-200 bg-white px-4 py-2.5 text-secondary-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:border-primary-400 focus:ring-primary-200 transition-colors duration-150"
        >
          <option value="">Select a city…</option>
          {["Sydney", "Brisbane", "Melbourne", "Gold Coast", "Newcastle", "Sunshine Coast"].map(
            (city) => (
              <option key={city} value={city}>
                {city}
              </option>
            )
          )}
          <option value="Other">Other</option>
        </select>
      </div>
      <Textarea
        label="Describe Your Issue"
        name="message"
        id="message"
        placeholder="Tell us about the leak — how long it's been happening, where it seems to be coming from, and any other details that might help."
        rows={5}
        required
        value={form.message}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="accent" size="lg" fullWidth>
        Send Enquiry
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </Button>
      <p className="text-xs text-center text-secondary-400">
        We typically respond within 2 business hours. Your information is kept
        private and never shared.
      </p>
    </form>
  );
}
