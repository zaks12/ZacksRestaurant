# Zacks Restaurant — Restaurant Website Template

A modern, responsive restaurant website template built with React, TypeScript, and Vite. Designed for Nigerian restaurants but easily adapted to any cuisine. All brand identity, menu content, and contact details are centralized in data files for quick customization.

> **Developer credit:** This website demo was designed and developed by **Zarkode Digital Solutions**. For website enquiries, contact Zarkode Digital Solutions at 08106589619, 07038764507, zakariyaisah@gmail.com, or info@zarkode.com.ng.

> **Demo content notice:** Zacks Restaurant is a fictional brand. All menu items, prices, testimonials, contact details, and business information are sample data for demonstration purposes. Replace them with your client's real information before deployment.

## Tech Stack

- **React 19** with TypeScript
- **Vite 8** for build tooling
- **React Router 6** for navigation
- **Tailwind CSS 4** for styling
- **Lucide React** for icons
- **Oxlint** for linting

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server starts automatically. Open the URL shown in your terminal.

### Production Build

```bash
npm run build
```

The output is placed in the `dist/` directory. Preview it locally with:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Customization Guide

### 1. Brand Identity

Edit **`src/data/config.ts`** to change the restaurant's brand:

| Field | Purpose |
|-------|---------|
| `name` | Restaurant name shown in header, footer, and page titles |
| `tagline` | Short slogan shown on hero and footer |
| `description` | Longer description used for SEO meta tags |
| `wordmark` / `logoText` | Text-based logo |
| `brandColors` | Primary, secondary, and accent hex values (for reference; visual colors live in `src/index.css` via Tailwind theme) |

### 2. Contact Details & Social Links

In **`src/data/config.ts`**, update the `contact`, `address`, and `social` sections:

```ts
contact: {
  phone: "+234 801 234 5678",
  phoneHref: "tel:+2348012345678",
  email: "hello@yourrestaurant.com",
  whatsapp: "2348012345678",        // digits only, country code prefix
  whatsappNumber: "+234 801 234 5678",
},
```

- **WhatsApp**: Set `whatsapp` to digits only (country code + number, no `+` or spaces). If left empty, WhatsApp buttons and links are automatically hidden and the UI shows a fallback message.
- **Phone**: Set both `phone` (display) and `phoneHref` (the `tel:` link with no spaces).
- **Email**: Any valid email address. The `mailto:` link is generated automatically.
- **Social links**: Add or remove entries in the `social` array. Each entry needs a `label`, `url`, and `icon` (one of: `instagram`, `facebook`, `twitter`, `youtube`, `linkedin`, `globe`). Leave the array empty `[]` to hide the social section entirely.
- **Address**: Update `line1`, `line2`, `city`, `region`, `country`, and `mapUrl` (a Google Maps link). The demo uses Wuse 2, Abuja, FCT as an illustrative location — replace with the actual restaurant address before launch.

### 3. Opening Hours

In **`src/data/config.ts`**, edit the `openingHours` array. Set `hours` to `"Closed"` for any day the restaurant is not open — the UI styles closed days differently.

### 4. Menu Items

Edit **`src/data/menu.ts`** to manage the menu:

- **`menuCategories`**: Add or rename categories. These drive the filter buttons on the menu page.
- **`menuItems`**: Each item has:
  - `id` and `slug`: Unique identifiers
  - `name`, `description`, `price`: Display content
  - `category`: Must match one of the `menuCategories` entries
  - `image`: URL to a photo (optional — omit to show a placeholder icon instead)
  - `dietary`: Array of dietary labels (`vegetarian`, `vegan`, `spicy`, `halal`, `gluten-free`, `nut-free`)
  - `availability`: `"available"`, `"limited"`, or `"unavailable"` — shown as a colored dot
  - `featured`: Set to `true` to display the item in the "Signature Dishes" section on both the home page and menu page

Prices are formatted automatically using the `currency` settings in `config.ts` (symbol, locale). All prices in this demo are in Nigerian Naira (₦).

### 5. Gallery Images

In **`src/data/menu.ts`**, edit the `galleryImages` array. Each entry needs an `id`, `src` (image URL), `alt` (descriptive text for accessibility), `category` (`dishes`, `preparation`, `atmosphere`, `interior`, `grills`), and `width`/`height` dimensions.

### 6. Testimonials

In **`src/data/menu.ts`**, edit the `testimonials` array. Each entry needs an `id`, `name`, `role`, `quote`, and `rating` (1–5 stars).

> **Important:** These are fictional testimonials for demo purposes. Replace with real customer reviews (with permission) or remove the testimonials section entirely for a client deployment.

### 7. Navigation

In **`src/data/config.ts`**, edit the `nav` array to change the navigation menu items. Each entry needs a `label` and `path` (matching a route defined in `src/App.tsx`).

### 8. SEO & Favicon

- **Page titles and meta descriptions**: Each page sets its own title and description via the `useDocumentMeta` hook. Update them in the individual page files or in the `seo` section of `config.ts` for the home page.
- **Favicon**: Replace `public/favicon.svg` with your client's logo. The current file is a simple SVG with the brand's first letter on a charcoal background.
- **Social sharing**: Open Graph and Twitter Card meta tags are set in `index.html` and updated dynamically per page. Update the default values in `index.html` for the home page.

### 9. Color Theme

The color palette is defined in **`src/index.css`** using Tailwind CSS theme variables. The key color families are:

- `charcoal`: Dark backgrounds (950, 900, 800, etc.)
- `ivory`: Light backgrounds and text on dark (50, 100, 200)
- `gold`: Accent color for highlights, buttons, and links (400, 500, 600, 700)
- `olive`: Secondary accent for WhatsApp-related elements
- `success`, `warning`, `error`: Status colors

To rebrand colors, update the CSS custom properties in `src/index.css`.

## Project Structure

```
src/
├── components/        # Reusable UI components (Button, Footer, Header, Section, SmartImage)
├── data/
│   ├── config.ts      # All brand, contact, and business configuration
│   ├── developer.ts   # Developer (Zarkode Digital Solutions) contact details
│   └── menu.ts        # Menu items, categories, gallery images, testimonials
├── hooks/
│   └── useDocumentMeta.ts  # Page-specific title and meta tag management
├── pages/             # One file per page (Home, Menu, About, Gallery, Contact, Reservations, 404)
├── types/
│   └── index.ts       # TypeScript interfaces for config and data shapes
├── utils/
│   └── format.ts      # Price formatting, WhatsApp link building, date formatting
├── App.tsx            # Routes and layout
├── main.tsx           # Entry point
└── index.css          # Tailwind theme and global styles
```

## Forms & Demonstrations

Both the **Contact form** and **Reservation form** are front-end only:

- Submissions are validated client-side and show a success confirmation, but no data is sent to a server, database, or email.
- The success screens clearly state the submission was not delivered.
- WhatsApp integration opens the WhatsApp app with a pre-filled message — it does not send anything automatically.
- If WhatsApp is not configured (empty number), WhatsApp buttons are hidden and fallback messaging is shown.

To make forms functional, you would need to add a backend service or integrate a form-handling provider. This template does not include one.

## Important Notes for Client Deployments

1. **Replace all demo content** — menu items, prices, testimonials, contact details, address, opening hours, social links, and images with the client's real information.
2. **Remove or replace testimonials** — the current testimonials are fictional. Use real reviews with permission or remove the section.
3. **Update images** — all food and venue photos are stock images from Pexels. Replace with the client's own photography.
4. **Verify contact details** — ensure phone numbers, email addresses, WhatsApp numbers, and map links are correct and functional.
5. **Social media links** — the demo social links point to generic platform homepages (`https://instagram.com`, etc.). Replace with the client's actual profile URLs.
6. **Review the announcement banner** — update or disable the `announcement` in `config.ts` as needed.
8. **Replace the demo location** — the address uses Wuse 2, Abuja, FCT as an illustrative demo location. Replace with the client's actual street address and map link.
9. **No secrets in frontend** — this template has no API keys, credentials, or private data embedded in the source. Do not add any.

## Developer Credit

This website demo was designed and developed by **Zarkode Digital Solutions**. The developer's contact details are centralized in `src/data/developer.ts` and displayed in the footer under a "Website by Zarkode Digital Solutions" section with a dedicated enquiry call-to-action.

- Phone: 08106589619, 07038764507
- Email: zakariyaisah@gmail.com, info@zarkode.com.ng

Developer contact details are kept separate from the restaurant's contact information. Do not mix or replace one with the other.

## License

This template is provided for client project use. All demo content is fictional and for demonstration purposes only.
