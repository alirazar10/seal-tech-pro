import { ArrowDown } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Book a Free Assessment",
    description:
      "Call us or fill out our online form. A friendly team member will confirm your booking and give you a ballpark estimate over the phone.",
  },
  {
    step: "02",
    title: "Technician Inspects the Leak",
    description:
      "Our certified technician arrives at your property, conducts a thorough inspection, and pinpoints the exact source of the leak.",
  },
  {
    step: "03",
    title: "Sealing & Waterproofing",
    description:
      "We remove deteriorated sealant, apply our Diamond Seal compound to all junctions and grout lines, then coat the entire wet area with our waterproofing system.",
  },
  {
    step: "04",
    title: "Quality Check & Sign-Off",
    description:
      "A final pressure test confirms the leak is fully resolved. You receive a completion certificate and our 10-year product warranty.",
  },
];

export default function Process() {
  return (
    <section className="bg-primary-900 py-20 md:py-24" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-accent-400 uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our 4-Step Repair Process
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Transparent, efficient, and proven. From first contact to a
            waterproof shower in as little as one day.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Step circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-white font-extrabold text-xl mb-5 shadow-lg shadow-accent-900/30">
                  {step.step}
                  {/* Arrow between steps on mobile */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden absolute -bottom-6 left-1/2 -translate-x-1/2">
                      <ArrowDown className="h-5 w-5 text-white/30" />
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-white mb-2 text-lg">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
