# Seal Tech Pro – Copilot Instructions & Design System (v2)

## 🎯 Project Goal

Build a modern, scalable, and maintainable website using Next.js 16 and Tailwind CSS v4+, following a clean design system and modular architecture.

---

# ⚠️ CORE RULES

## ❌ Avoid

* No heavy UI libraries (MUI, Chakra, etc.)
* No monolithic components
* No inline messy styles
* No "vibe coding"

## ✅ Follow

* Modular components
* Reusable UI system
* Consistent design tokens
* Tailwind v4 theme (CSS-based)

---

# 🎨 DESIGN SYSTEM (Tailwind v4 Approach)

## 📌 Theme Setup (globals.css)

Use Tailwind v4 CSS variables system:

```css
@theme {
  /* Primary (Navy) */
  --color-primary-50: #E8EEF1;
  --color-primary-100: #C5D3DA;
  --color-primary-200: #9FB6C2;
  --color-primary-300: #799AAA;
  --color-primary-400: #5C8396;
  --color-primary-500: #3E6C82;
  --color-primary-600: #2F5567;
  --color-primary-700: #213F4D;
  --color-primary-800: #162A34;
  --color-primary-900: #0F2A38;

  /* Secondary (Neutral Dark) */
  --color-secondary-50: #F4F5F6;
  --color-secondary-100: #E5E7EB;
  --color-secondary-200: #D1D5DB;
  --color-secondary-300: #9CA3AF;
  --color-secondary-400: #6B7280;
  --color-secondary-500: #4B5563;
  --color-secondary-600: #374151;
  --color-secondary-700: #1F2937;
  --color-secondary-800: #111827;
  --color-secondary-900: #030712;

  /* Accent (Orange) */
  --color-accent-50: #FFF2E8;
  --color-accent-100: #FFE0CC;
  --color-accent-200: #FFC199;
  --color-accent-300: #FFA366;
  --color-accent-400: #FF8A3D;
  --color-accent-500: #F97316;
  --color-accent-600: #D65F0F;
  --color-accent-700: #B44E0C;
  --color-accent-800: #8F3D09;
  --color-accent-900: #6B2D06;

  /* Semantic Colors */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Background */
  --color-background: #F8F7F4;
}
```

---

# 🎨 COLOR USAGE RULES

* **primary** → headings, navbar, strong elements
* **secondary** → body text
* **accent** → buttons, highlights
* **success/warning/error** → alerts, validation

---

# 🧩 CUSTOM UI SYSTEM

## 🎯 Variants to Support

Every UI component (Button, Badge, etc.) must support:

* `contained`
* `outlined`
* `soft`
* `text`

---

## 🎨 Color Props

Components must support:

* `primary`
* `secondary`
* `accent`
* `success`
* `warning`
* `error`
* `neutral`

---

# 🧱 Example: Button Component

```tsx
type Variant = "contained" | "outlined" | "soft" | "text";
type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "neutral";

interface ButtonProps {
  variant?: Variant;
  color?: Color;
  children: React.ReactNode;
}
```

---

## 🎨 Variant Styles (Tailwind v4)

```tsx
const styles = {
  contained: {
    primary: "bg-primary-900 text-white",
    accent: "bg-accent-500 text-white",
    error: "bg-error text-white",
  },
  outlined: {
    primary: "border border-primary-900 text-primary-900",
    accent: "border border-accent-500 text-accent-500",
  },
  soft: {
    primary: "bg-primary-50 text-primary-900",
    accent: "bg-accent-50 text-accent-600",
  },
  text: {
    primary: "text-primary-900",
    accent: "text-accent-500",
  },
};
```

---

# 📁 PROJECT STRUCTURE

```bash
components/
  ui/
    Button.tsx
    Input.tsx
    Badge.tsx

  sections/
    Hero.tsx
    Services.tsx
    Contact.tsx

  layout/
    Navbar.tsx
    Footer.tsx
```

---

# ⚙️ DEVELOPMENT RULES

* Components must be reusable
* No duplicated styles
* Use utility composition
* Extract logic when needed
* Keep components under control (not too large)

---

# 🚀 FUTURE READY

This system must support:

* Dark mode (later)
* Theming expansion
* Component scaling
* Design consistency across pages

---

# ✅ FINAL PRINCIPLE

👉 Build a **design system**, not just a page.
👉 Every component should feel consistent, predictable, and reusable.

---
# 📄 REQUIRED PAGES & STRUCTURE

## 🏠 1. Homepage (Main Landing Page)

Purpose: Convert visitors into leads

### Sections:

* Hero (headline + CTA + phone)
* Services overview
* Why choose us (trust signals)
* Process (how it works)
* Call-to-action (Get Quote)
* Contact preview

---

## 🛠 2. Services Page

Purpose: Explain services clearly

### Content:

* List of services (repair, sealing, etc.)
* Short descriptions
* Optional: individual service sections

---

## 📍 3. Locations Pages (SEO)

Dynamic or static routes:

```
/locations/sydney
/locations/brisbane
```

### Purpose:

* Rank on Google for local searches
* Capture location-based leads

---

## 📞 4. Contact Page

### Features:

* Contact form (Name, Phone, Message)
* Business contact info
* Call button (mobile-friendly)

---

## ℹ️ 5. About Section (Optional but Recommended)

### Content:

* Company overview
* Experience
* Trust-building content

---

# 🧩 PAGE COMPOSITION RULE

## ❌ Do NOT:

* Write full UI inside page files

## ✅ DO:

* Use section-based components

---

## Example

### page.tsx

```tsx
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
}
```

---

# 📁 ROUTING STRUCTURE (Next.js 16)

```bash
app/
  page.tsx
  services/
    page.tsx
  locations/
    [city]/
      page.tsx
  contact/
    page.tsx
```

---

# 🎯 FINAL NOTE

Pages should only:

* Arrange sections
* Handle layout

All UI must live in:

* `components/sections`
* `components/ui`

---


End goal: A clean, scalable UI system with Tailwind v4 — no heavy libraries, no messy code. Clean separation → scalable project → easy maintenance
