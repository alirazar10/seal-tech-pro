export interface Location {
  city: string;
  slug: string;
  state: string;
  region: string;
  description: string;
  suburbs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const locations: Location[] = [
  {
    city: "Sydney",
    slug: "sydney",
    state: "NSW",
    region: "Greater Sydney",
    description:
      "Serving all Sydney suburbs from the CBD to the outer west, north shore, and southern beaches. Fast response times across the entire metro area.",
    suburbs: [
      "Bondi",
      "Parramatta",
      "Chatswood",
      "Sutherland",
      "Penrith",
      "Liverpool",
      "Manly",
      "Cronulla",
    ],
    metaTitle: "Shower Repair Sydney | Seal Tech Pro",
    metaDescription:
      "Expert leaking shower repair in Sydney. No tiles removed. Fast, affordable, fully licensed. Call Seal Tech Pro for a free quote today.",
  },
  {
    city: "Brisbane",
    slug: "brisbane",
    state: "QLD",
    region: "Greater Brisbane",
    description:
      "Covering all Brisbane suburbs including the inner city, north side, south side, and western corridors. Same-day bookings available.",
    suburbs: [
      "Fortitude Valley",
      "South Brisbane",
      "Chermside",
      "Carindale",
      "Ipswich",
      "Redcliffe",
      "Wynnum",
      "Moggill",
    ],
    metaTitle: "Shower Repair Brisbane | Seal Tech Pro",
    metaDescription:
      "Expert leaking shower repair in Brisbane. No tiles removed. Fast, affordable, fully licensed. Call Seal Tech Pro for a free quote today.",
  },
  {
    city: "Gold Coast",
    slug: "gold-coast",
    state: "QLD",
    region: "Gold Coast",
    description:
      "Specialist shower repairs across the entire Gold Coast strip from Beenleigh to Tweed Heads. Ideal for holiday homes, rental properties, and strata complexes.",
    suburbs: [
      "Surfers Paradise",
      "Coolangatta",
      "Broadbeach",
      "Robina",
      "Nerang",
      "Bundall",
      "Southport",
      "Coomera",
    ],
    metaTitle: "Shower Repair Gold Coast | Seal Tech Pro",
    metaDescription:
      "Expert leaking shower repair on the Gold Coast. No tiles removed. Ideal for holiday homes and strata. Call Seal Tech Pro for a free quote.",
  },
  {
    city: "Melbourne",
    slug: "melbourne",
    state: "VIC",
    region: "Greater Melbourne",
    description:
      "Serving Melbourne's inner suburbs through to the outer ring. Rapid dispatch across the entire metro area with fully certified technicians.",
    suburbs: [
      "St Kilda",
      "Fitzroy",
      "Richmond",
      "Dandenong",
      "Frankston",
      "Essendon",
      "Werribee",
      "Knox",
    ],
    metaTitle: "Shower Repair Melbourne | Seal Tech Pro",
    metaDescription:
      "Expert leaking shower repair in Melbourne. No tiles removed. Fast, affordable, fully licensed. Call Seal Tech Pro for a free quote today.",
  },
  {
    city: "Newcastle",
    slug: "newcastle",
    state: "NSW",
    region: "Hunter Region",
    description:
      "Covering Newcastle and the Hunter Valley region including Lake Macquarie, Maitland, and Cessnock. Local technicians, fast turnaround.",
    suburbs: [
      "Hamilton",
      "Mayfield",
      "Charlestown",
      "Jesmond",
      "Maitland",
      "Lake Macquarie",
      "Cessnock",
      "Singleton",
    ],
    metaTitle: "Shower Repair Newcastle | Seal Tech Pro",
    metaDescription:
      "Expert leaking shower repair in Newcastle and the Hunter Region. No tiles removed. Call Seal Tech Pro for a free quote today.",
  },
  {
    city: "Sunshine Coast",
    slug: "sunshine-coast",
    state: "QLD",
    region: "Sunshine Coast",
    description:
      "Specialist shower repairs across the Sunshine Coast from Caloundra to Noosa. Perfect for holiday rentals, new homes, and established properties.",
    suburbs: [
      "Noosa",
      "Caloundra",
      "Maroochydore",
      "Buderim",
      "Nambour",
      "Coolum Beach",
      "Kawana",
      "Mooloolaba",
    ],
    metaTitle: "Shower Repair Sunshine Coast | Seal Tech Pro",
    metaDescription:
      "Expert leaking shower repair on the Sunshine Coast. No tiles removed. Call Seal Tech Pro for a free quote today.",
  },
];

export const getLocationBySlug = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
