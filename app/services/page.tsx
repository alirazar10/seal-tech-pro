import type { Metadata } from "next";
import { Droplets, ShieldCheck, ScanSearch, Wrench, Home, Building2, Check, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data/services";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Shower Repair Services | Seal Tech Pro",
  description:
    "Explore our full range of shower repair and waterproofing services. No tiles removed. Backed by a 10-year warranty.",
};

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  ShieldCheck,
  ScanSearch,
  Wrench,
  Home,
  Building2,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-accent-400 uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Complete shower repair and waterproofing solutions — all without
            removing a single tile.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center bg-white rounded-2xl border border-secondary-100 overflow-hidden shadow-sm`}
              >
                {/* Icon panel */}
                <div className="flex-shrink-0 flex items-center justify-center bg-primary-50 lg:w-56 w-full py-12 lg:py-0 lg:self-stretch">
                  <div className="flex flex-col items-center gap-3 p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-900 text-white">
                      {(() => { const Icon = iconMap[service.icon]; return Icon ? <Icon className="h-8 w-8" /> : null; })()}
                    </div>
                    <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
                      Service
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:py-10 lg:pr-10">
                  <h2 className="text-2xl font-extrabold text-primary-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-secondary-500 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent-500 flex-shrink-0" />
                        <span className="text-sm text-secondary-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button href="/contact" variant="contained" color="accent" size="md">
                    Get a Quote for This Service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
