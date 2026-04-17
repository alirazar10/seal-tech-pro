import Link from "next/link";
import { Droplets, ShieldCheck, ScanSearch, Wrench, Home, Building2, ArrowRight, Check, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data/services";
import Button from "@/components/ui/Button";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  ShieldCheck,
  ScanSearch,
  Wrench,
  Home,
  Building2,
};

export default function ServicesOverview() {
  return (
    <section className="bg-background py-20 md:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-900 mb-4">
            Our Shower Repair Services
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            From simple leaks to full wet-area waterproofing — we handle every
            repair without the mess and cost of removing tiles.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative bg-white rounded-2xl border border-secondary-100 p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 mb-5 group-hover:bg-primary-900 group-hover:text-white transition-colors duration-200">
                {(() => { const Icon = iconMap[service.icon]; return Icon ? <Icon className="h-6 w-6" /> : null; })()}
              </div>

              <h3 className="text-lg font-bold text-primary-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-secondary-500 leading-relaxed mb-4">
                {service.shortDescription}
              </p>

              {/* Feature list */}
              <ul className="space-y-1.5 mb-5">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-accent-500 mt-0.5 shrink-0" />
                    <span className="text-xs text-secondary-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/services#${service.slug}`}
                className="text-sm font-semibold text-primary-700 hover:text-accent-600 transition-colors inline-flex items-center gap-1"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button href="/services" variant="outlined" color="primary" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
