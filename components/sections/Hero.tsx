import { Phone, ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";

const trustBadges = [
  { label: "No Tiles Removed" },
  { label: "10-Year Warranty" },
  { label: "Fully Licensed & Insured" },
  { label: "Same-Day Bookings" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-900 via-primary-800 to-primary-700 opacity-90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/20 border border-accent-500/30 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-sm font-semibold text-accent-300 tracking-wide">
                Australia&apos;s #1 Shower Repair Specialists
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Stop Your Shower Leak.{" "}
              <span className="text-accent-400">No Tiles Removed.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
              Fast, clean, and affordable shower repair using our exclusive
              Diamond Seal Technology. Backed by 25+ years of expertise and a
              10-year product warranty.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button
                href="/contact"
                variant="contained"
                color="accent"
                size="lg"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <a
                href="tel:1300888123"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-white/30 px-7 py-3.5 text-lg font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5 text-accent-400" />
                1300 888 123
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5"
                >
                  <Check className="h-3.5 w-3.5 text-accent-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-white/80">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - stats card */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8">
              <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6">
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "25+", label: "Years in Business" },
                  { value: "50,000+", label: "Showers Repaired" },
                  { value: "10yr", label: "Product Warranty" },
                  { value: "5★", label: "Customer Rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-extrabold text-white leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="rounded-2xl bg-accent-500/20 border border-accent-500/30 p-6">
              <p className="text-sm italic text-white/65 leading-relaxed mb-3">
                &ldquo;The technician was professional, on time, and the leak
                was fixed in just 2 hours. The shower looks brand new and I
                didn&apos;t have to live through a retiling job.&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold text-white">
                  S
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Sarah M.
                  </p>
                  <p className="text-xs text-white/50">Sydney, NSW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 27.5C840 35 960 40 1080 37.5C1200 35 1320 25 1380 20L1440 15V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#F8F7F4"
          />
        </svg>
      </div>
    </section>
  );
}
