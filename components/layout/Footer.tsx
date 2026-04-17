import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-200">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <div className="bg-white rounded-lg px-2.5 py-1">
                <Image
                  src="/assets/logo-transparent.png"
                  alt="Seal Tech Pro"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  unoptimized
                  priority
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              Trusted shower leak repair specialists serving major Australian
              cities. We fix leaks without removing tiles — backed by a 10-year
              warranty.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:1300888123"
                className="flex items-center gap-2 text-white font-semibold hover:text-accent-300 transition-colors"
              >
                <Phone className="h-4 w-4 text-accent-400" />
                1300 888 123
              </a>
              <a
                href="mailto:info@sealtechpro.com.au"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-accent-400" />
                info@sealtechpro.com.au
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.city}, {l.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + opening hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Opening Hours
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Mon – Fri: 8:00am – 6:30pm
              <br />
              Saturday: 9:00am – 3:00pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Seal Tech Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
