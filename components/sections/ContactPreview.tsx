import { Phone, Mail, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

const contactDetails = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "1300 888 123",
    href: "tel:1300888123",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "info@sealtechpro.com.au",
    href: "mailto:info@sealtechpro.com.au",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Hours",
    value: "Mon–Fri 8am–6:30pm, Sat 9am–3pm",
    href: null,
  },
];

export default function ContactPreview() {
  return (
    <section className="bg-background py-20 md:py-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – copy + contact info */}
          <div>
            <p className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-900 mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg text-secondary-500 leading-relaxed mb-8">
              Not sure if you need a repair? Contact us anyway. Our team can
              assess your situation over the phone and advise you on the best
              course of action — completely free.
            </p>

            <div className="space-y-5 mb-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary-400 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-primary-900 hover:text-accent-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-primary-900">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button href="/contact" variant="contained" color="accent" size="lg">
              Open Contact Form
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
          </div>

          {/* Right – trust signals */}
          <div className="bg-white rounded-2xl border border-secondary-100 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-primary-900 mb-6">
              Why thousands of Australians trust us:
            </h3>
            {[
              "Free, no-obligation quote with every enquiry",
              "Licensed and insured technicians in all states",
              "No tiles removed — no mess, no disruption",
              "10-year warranty on all products and workmanship",
              "Same-day and next-day bookings available",
              "Transparent pricing before we start any work",
              "Service across 6 major Australian cities",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 mb-3 last:mb-0">
                <svg
                  className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span className="text-sm text-secondary-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
