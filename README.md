# Mighty Estates - Nigeria Real Estate Platform

A modern real estate platform for buying, renting, and selling properties across Nigeria.

## Features

- **Property Search** - Search by city, property type, and price range
- **Property Listings** - Houses, apartments, commercial spaces, and land
- **Agent Directory** - Find trusted real estate agents across Nigeria
- **Contact Form** - Get in touch for property inquiries
- **Responsive Design** - Works on desktop and mobile devices

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Featured properties showcase |
| Buy | `/buy` | Buy residential properties |
| Rent | `/rent` | Rent properties |
| Commercial | `/commercial` | Commercial properties |
| New Listings | `/new-listings` | Latest property additions |
| Agents | `/agents` | Our real estate agents |
| Search | `/search` | Advanced property search |
| Contact | `/contact` | Contact form and office info |
| Property Details | `/listing/[id]` | Individual property page |

## Nigerian Locations

Properties available in the following cities and regions:

### Lagos State
- Lekki
- Victoria Island
- Ikoyi
- Banana Island
- Ikeja
- Surulere
- Lagos Island
- Sangotedo

### Abuja (FCT)
- Maitama
- Asokoro
- Gwarinpa

### Other States
- Port Harcourt (Rivers)
- Ibadan (Oyo)
- Enugu
- Kano (Karaye)

## Property Types

- **Houses** - Detached, semi-detached, bungalows, duplexes
- **Apartments** - Flats, serviced apartments, penthouses
- **Commercial** - Office spaces, warehouses, shops
- **Land** - Plots for sale or development

## Price Ranges

- Under ₦25M
- ₦25M - ₦50M
- ₦50M - ₦80M
- ₦80M - ₦120M
- ₦120M+

## Our Agents

| Agent | Location | Specialties |
|-------|----------|--------------|
| Adaeze Okonkwo | Lagos | Luxury Homes, Lekki, Victoria Island, Banana Island |
| Chukwuemeka Nnamdi | Abuja | Commercial, Office Space, Maitama |
| Folake Adebayo | Lagos | Apartments, Ikeja, Ikoyi, Rentals |
| Oluwaseun Oladipo | Ogun | Land, Vacation Homes, Sangotedo |
| Emeka Okafor | Port Harcourt | Oil & Gas Housing, Warehouses |

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Project Structure

```
mighty-estates/
├── components/           # React components
│   ├── AgentCard.tsx     # Agent profile card
│   ├── Button.tsx        # Reusable button
│   ├── CategoryCard.tsx  # Property category card
│   ├── CategoryShowcase.tsx
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Navigation header
│   ├── ListingCard.tsx   # Property card
│   └── SearchCard.tsx    # Search result card
├── lib/                  # Data and utilities
│   ├── agentData.ts      # Agent information (Nigerian agents)
│   └── sampleData.ts     # Property listings (Nigerian locations)
├── pages/                # Next.js pages
│   ├── _app.tsx          # App wrapper
│   ├── agents.tsx        # Agents directory
│   ├── buy.tsx           # Buy properties
│   ├── commercial.tsx    # Commercial properties
│   ├── contact.tsx       # Contact page
│   ├── index.tsx         # Homepage
│   ├── listing/[id].tsx  # Property details
│   ├── new-listings.tsx  # New listings
│   ├── rent.tsx          # Rent properties
│   └── search.tsx        # Search page
├── types/                # TypeScript types
│   ├── agent.ts
│   └── listing.ts
├── public/               # Static assets
├── styles/               # CSS files
├── tailwind.config.cjs   # Tailwind configuration
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tailwind CSS Development

```bash
# Watch mode for development
npx tailwindcss -i ./styles/globals.css -o ./styles/tailwind.css --watch
```

## Data

The project currently uses static sample data stored in:
- `lib/sampleData.ts` - Property listings
- `lib/agentData.ts` - Agent information

For a production deployment, connect to a database or CMS to manage:
- Properties and listings
- Agent profiles
- User inquiries
- Saved properties

## Currency

All prices are displayed in Nigerian Naira (₦).

## Contact

For inquiries:
- Phone: +234 800 ME ESTATES (+234 800 633 7827)
- Email: info@mightyestates.com
- Office: Victoria Island, Lagos, Nigeria