import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Check } from "lucide-react";
import { locations, getLocationBySlug } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/sections/CallToAction";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold text-accent-400 uppercase tracking-widest mb-3">
                Shower Repair — {location.state}
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Leaking Shower Repair in {location.city}
              </h1>
              <p className="text-lg text-white/60 mb-8">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="contained" color="accent" size="lg">
                  Get Free Quote
                </Button>
                <a
                  href="tel:1300888123"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-lg font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent-400" />
                  1300 888 123
                </a>
              </div>
            </div>

            {/* Trust chips */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "Same Day", label: "Bookings Available" },
                { value: "10yr", label: "Product Warranty" },
                { value: "Licensed", label: "& Fully Insured" },
                { value: "No Tiles", label: "Removed" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white/10 border border-white/20 p-4 text-center"
                >
                  <p className="text-2xl font-extrabold text-white mb-0.5">
                    {item.value}
                  </p>
                  <p className="text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs & services */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* About local service */}
              <div>
                <h2 className="text-2xl font-extrabold text-primary-900 mb-4">
                  Shower Repairs Across {location.region}
                </h2>
                <p className="text-secondary-500 leading-relaxed mb-4">
                  Seal Tech Pro provides expert shower and bathroom leak repairs
                  throughout {location.city} and the surrounding {location.region}{" "}
                  area. Our certified technicians carry all required licences and
                  insurances for work in {location.state}.
                </p>
                <p className="text-secondary-500 leading-relaxed">
                  Every repair is performed using our proprietary Diamond Seal
                  Technology — a fast, clean, no-tile-removal system that
                  permanently eliminates leaks and is backed by a 10-year product
                  warranty.
                </p>
              </div>

              {/* Suburbs we cover */}
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-4">
                  Areas We Service in {location.city}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.suburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="rounded-full bg-primary-50 border border-primary-100 px-4 py-1.5 text-sm font-medium text-primary-800"
                    >
                      {suburb}
                    </span>
                  ))}
                  <span className="rounded-full bg-secondary-100 px-4 py-1.5 text-sm text-secondary-500">
                    + all surrounding suburbs
                  </span>
                </div>
              </div>

              {/* Services available */}
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-4">
                  Services Available in {location.city}:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div
                      key={service.slug}
                      className="flex items-start gap-3 rounded-xl bg-white border border-secondary-100 p-4"
                    >
                      <Check className="h-4 w-4 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-secondary-700">
                        {service.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar – CTA */}
            <aside className="space-y-5">
              <div className="rounded-2xl bg-primary-900 p-6 text-white">
                <h3 className="text-lg font-bold mb-2">
                  Book a Repair in {location.city}
                </h3>
                <p className="text-sm text-primary-300 mb-5">
                  Call us or submit an enquiry. We&apos;ll be in touch within 2
                  hours to confirm your booking.
                </p>
                <div className="space-y-3">
                  <Button
                    href="/contact"
                    variant="contained"
                    color="accent"
                    size="md"
                    fullWidth
                  >
                    Get Free Quote
                  </Button>
                  <a
                    href="tel:1300888123"
                    className="flex items-center justify-center gap-2 w-full rounded-lg border border-white/30 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-accent-400" />
                    Call 1300 888 123
                  </a>
                </div>
              </div>

              {/* Other locations */}
              <div className="rounded-2xl bg-white border border-secondary-100 p-5">
                <h4 className="text-sm font-bold text-primary-900 mb-3">
                  Other Service Areas:
                </h4>
                <ul className="space-y-1">
                  {locations
                    .filter((l) => l.slug !== location.slug)
                    .map((l) => (
                      <li key={l.slug}>
                        <a
                          href={`/locations/${l.slug}`}
                          className="text-sm text-primary-700 hover:text-accent-600 hover:underline transition-colors"
                        >
                          {l.city}, {l.state}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
