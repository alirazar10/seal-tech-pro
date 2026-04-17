import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Seal Tech Pro",
  description:
    "Get a free, no-obligation quote for your shower repair. We respond within 2 hours on business days.",
};

const contactInfo = [
  {
    label: "Phone",
    value: "1300 888 123",
    href: "tel:1300888123",
    sub: "Mon–Fri 8am–6:30pm, Sat 9am–3pm",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    label: "Email",
    value: "info@sealtechpro.com.au",
    href: "mailto:info@sealtechpro.com.au",
    sub: "We reply within 2 business hours",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "Service Areas",
    value: "Sydney, Brisbane, Melbourne & more",
    href: null,
    sub: "Nationwide coverage",
    icon: <MapPin className="h-5 w-5" />,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-accent-400 uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Tell us about your leak. We&apos;ll assess your situation and provide
            a transparent, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar – contact info */}
            <aside className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-primary-900 mb-1">
                  Let&apos;s Talk
                </h2>
                <p className="text-secondary-500">
                  Prefer to call? Our team is ready to help during business hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl bg-white border border-secondary-100 p-4"
                  >
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary-400 uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-primary-900 hover:text-accent-600 transition-colors block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-primary-900">{item.value}</p>
                      )}
                      <p className="text-xs text-secondary-400 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust points */}
              <div className="rounded-xl bg-primary-50 border border-primary-100 p-5">
                <h3 className="font-bold text-primary-900 mb-3 text-sm">
                  What happens next?
                </h3>
                <ol className="space-y-2 list-none">
                  {[
                    "We receive your enquiry",
                    "A team member calls you within 2 hours",
                    "We provide a clear, upfront quote",
                    "Book your repair at a time that suits you",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-white text-[10px] font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-secondary-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-secondary-100 p-6 sm:p-10 shadow-sm">
              <h2 className="text-xl font-extrabold text-primary-900 mb-6">
                Send Us an Enquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
