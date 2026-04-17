import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="bg-accent-500 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Ready to Fix That Leak?
            </h2>
            <p className="text-lg text-accent-100 max-w-xl">
              Get a free, no-obligation quote today. Our team typically responds
              within 2 hours during business hours.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button
              href="/contact"
              variant="contained"
              color="primary"
              size="lg"
            >
              Get Free Quote
            </Button>
            <a
              href="tel:1300888123"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-white/60 px-7 py-3.5 text-lg font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              1300 888 123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
