export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "shower-sealing",
    title: "Shower Sealing",
    shortDescription:
      "Stop leaks at the source using our advanced polymer compound — no tile removal, no mess.",
    description:
      "Our shower sealing service goes straight to where water escapes: wall-to-floor junctions, internal corners, and failing silicone lines. We strip the old material, prepare the substrate, and apply our ProSeal™ compound for a bond that flexes with the building and never cracks.",
    features: [
      "No tile removal required",
      "Permanent seal on all junctions",
      "Flexible, crack-resistant formula",
      "Completed in a single visit",
    ],
    icon: "Droplets",
  },
  {
    slug: "waterproofing",
    title: "Bathroom Waterproofing",
    shortDescription:
      "Full wet-area membrane applied directly over existing tiles — lasting protection without retiling.",
    description:
      "We coat your entire shower or bathroom wet area with a multi-layer waterproofing membrane that bonds to existing tiles, grout, and substrate. The result is a continuous barrier that eliminates water ingress without any demolition work.",
    features: [
      "Full membrane application",
      "Covers entire wet area",
      "Meets AS 3740 waterproofing standard",
      "10-year product warranty",
    ],
    icon: "ShieldCheck",
  },
  {
    slug: "leak-detection",
    title: "Leak Detection",
    shortDescription:
      "Pinpoint the source of your bathroom leak before water damage spreads further.",
    description:
      "A slow drip behind tiles can cause serious structural damage over time. Our technicians use pressure testing and moisture profiling equipment to identify exactly where water is entering — quickly and without breaking anything open.",
    features: [
      "Non-invasive testing methods",
      "Moisture profiling equipment",
      "Written inspection report",
      "Same-day assessment available",
    ],
    icon: "ScanSearch",
  },
  {
    slug: "grout-restoration",
    title: "Grout Restoration",
    shortDescription:
      "Failing grout lets water in behind your tiles — we remove it and restore full protection.",
    description:
      "Grout is porous and degrades over time, allowing water to pass freely behind tiles and into the wall cavity. We remove all compromised grout, treat for mould, and replace it with a waterproof, anti-fungal compound colour-matched to your tiles.",
    features: [
      "Full grout replacement service",
      "Waterproof anti-fungal compound",
      "Colour-matched to existing tiles",
      "Mould treatment included",
    ],
    icon: "Wrench",
  },
  {
    slug: "wet-area-repairs",
    title: "Wet Area Repairs",
    shortDescription:
      "Comprehensive repairs for bathtub surrounds, balconies, laundries, and ensuites.",
    description:
      "Water ingress is not limited to showers. We repair and waterproof all wet areas including bathtub surrounds, balconies, laundry troughs, and ensuites — applying the same no-demolition system used in our shower repairs.",
    features: [
      "Balconies and outdoor areas",
      "Bathtub surrounds",
      "Laundry and utility areas",
      "Ensuite bathrooms",
    ],
    icon: "Home",
  },
  {
    slug: "commercial-repairs",
    title: "Commercial Repairs",
    shortDescription:
      "Volume shower repairs for property managers, hotels, and strata complexes.",
    description:
      "We work efficiently at scale. Our commercial programme is designed for property managers, hotels, and strata committees who need fast, reliable repairs with pre-agreed pricing and minimal disruption to tenants or guests.",
    features: [
      "Strata and body corporate",
      "Hotels and short-stay properties",
      "Property management firms",
      "Volume pricing available",
    ],
    icon: "Building2",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
