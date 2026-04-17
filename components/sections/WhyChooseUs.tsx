import { Wrench, Clock, ShieldCheck, Banknote, Users, Star } from "lucide-react";

const reasons = [
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "No Tile Removal — Ever",
    description:
      "Our exclusive Diamond Seal Technology fixes the leak at the source without disturbing a single tile. Zero demolition, zero mess.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Fast, Single-Visit Repairs",
    description:
      "Most shower repairs are completed in a single 2-3 hour visit. We respect your time and minimise disruption to your daily routine.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "10-Year Product Warranty",
    description:
      "We stand by our work with a 10-year product warranty on all treatments. We are also fully licensed and carry comprehensive insurance.",
  },
  {
    icon: <Banknote className="h-6 w-6" />,
    title: "Save Thousands vs. Retiling",
    description:
      "Traditional tile removal and replacement can cost $3,000-$15,000. Our repair typically costs a fraction of that — with better long-term results.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "25+ Years of Experience",
    description:
      "With more than 25 years in the industry and 50,000+ successful repairs, our technicians are the most experienced in Australia.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Award-Winning Service",
    description:
      "Multiple-time finalist and winner of the Australian Small Business Champion Awards. Our quality speaks for itself.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-3">
            Why Seal Tech Pro
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-900 mb-4">
            The Smarter Way to Fix a Leaking Shower
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            We solve the root cause of your shower leak without the disruption,
            cost, and wait of traditional retiling.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              {/* Icon bubble */}
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-primary-900 mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-secondary-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-2xl bg-primary-50 p-8">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "50K+", label: "Showers Repaired" },
            { value: "10yr", label: "Warranty" },
            { value: "5 Stars", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary-900 leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-secondary-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
