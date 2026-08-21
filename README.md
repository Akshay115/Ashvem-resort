# Anahata Retreat

Multi-page website for Anahata Retreat, a beachfront resort on Ashwem Beach in North Goa.

## Pages

- Home
- Stay, Cottages and Bungalows
- L'Atelier Dining
- Yoga & Wellness
- Retreats
- The Anahata Experience
- Gallery
- Contact & Location

## Development

```bash
npm install
npm run dev
```

## Production Checks

```bash
npm run lint
npm run build
```

The application uses React Router and requires the included SPA fallback configuration when deployed. Resort content is maintained in `src/data/siteData.js`; route pages live in `src/pages`.
