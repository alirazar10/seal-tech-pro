import Link from "next/link";
import { locations } from "@/lib/data/locations";
import Badge from "@/components/ui/Badge";

export default function Locations() {
  return (
    <section className="bg-white py-20 md:py-24" id="locations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-3">
            Service Areas
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-900 mb-4">
            We Come to You
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            Operating across 6 major Australian cities with fast response times
            and local technicians who know the area.
          </p>
        </div>

        {/* Locations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-secondary-100 bg-background p-6 hover:border-primary-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                    {location.city}
                  </h3>
                  <p className="text-sm text-secondary-400">{location.region}</p>
                </div>
                <Badge variant="soft" color="primary">
                  {location.state}
                </Badge>
              </div>
              <p className="text-sm text-secondary-500 leading-relaxed line-clamp-2">
                {location.description}
              </p>
              <div className="flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:text-accent-600 transition-colors mt-auto">
                View details
                <svg
                  className="h-4 w-4"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
