# Kamruzzaman Khandakar Portfolio

Interactive dark-mode portfolio for Kamruzzaman Khandakar, built as a game-like isometric apartment map. Each room represents a portfolio section, with clickable room zones, keyboard navigation, animated avatar movement, progress tracking, and drawer-based details powered by typed portfolio data.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

## Build

```bash
npm run type-check
npm run lint
npm run build
```

## Editing Portfolio Data

The site content is typed in:

```text
src/data/portfolio.ts
```

Shared TypeScript interfaces live in:

```text
src/types/portfolio.ts
```

Room positions, labels, section IDs, mini-map nodes, and avatar target coordinates live in:

```text
src/lib/room-config.ts
```

## Main Structure

- `src/app/page.tsx` - homepage state, keyboard navigation, drawer control
- `src/components/layout/Header.tsx` - top navigation and contact actions
- `src/components/hero/ProfileCard.tsx` - left profile panel
- `src/components/map/PortfolioMap.tsx` - isometric map shell
- `src/components/map/RoomZone.tsx` - clickable room blocks
- `src/components/map/Avatar.tsx` - animated avatar
- `src/components/map/MiniMap.tsx` - map progress navigation
- `src/components/map/GameControls.tsx` - game control hints
- `src/components/sections/SectionDrawer.tsx` - detail drawer
- `src/components/sections/*Section.tsx` - real portfolio section content

## Interaction Model

- Hover a room to highlight it and update the preview card.
- Click a room to move the avatar, open the drawer, and mark it visited.
- Use `WASD` or arrow keys to cycle rooms.
- Press `Enter` or `E` to open the active room.
- Press `Escape` to close the drawer.
- On mobile, the map becomes a vertical room-card explorer.

## Deployment

Deploy on Vercel:

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Use the default Next.js settings.
4. Build command: `npm run build`
5. Output: Next.js managed output.

## Notes

The current implementation uses CSS, HTML, and Framer Motion for the isometric illusion instead of React Three Fiber. This keeps the first production version fast, responsive, and maintainable while preserving the game-map concept.
