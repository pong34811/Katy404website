# Context: Katy404 Website — Vite + React

## Project Structure

```
katy404/
├── public/
│   └── Gemini_Generated_Image_fojbo3fojbo3fojb.png
├── src/
│   ├── components/
│   │   ├── Navbar/             # Navbar.jsx + Navbar.module.css
│   │   ├── Hero/               # Hero.jsx + Hero.module.css
│   │   └── ConnectFooter/      # ConnectFooter.jsx + ConnectFooter.module.css
│   ├── hooks/
│   │   └── useParticleEffect.js
│   ├── App.jsx
│   ├── index.css               # CSS variables, global, fonts
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## Stack

- **Framework**: React 19 + Vite 8
- **Styling**: CSS Modules (CSS custom properties for theming)
- **Animation**: Framer Motion
- **Icons**: Font Awesome 6 (CDN)
- **Fonts**: Mitr (TH) + Orbitron (EN) via Google Fonts

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build

## Design Decisions

- ใช้ CSS Modules แทน Tailwind (ตามที่ user เลือก)
- Framer Motion แทนที่ CSS animations บางส่วน (float, glitch)
- Particle effect เก็บเป็น custom hook
- Component structure แยกตาม section (Navbar, Hero, ConnectFooter)
- สีหลัก: ดำเข้ม (#0a0a0c), ม่วงลาเวนเดอร์ (#d1c4e9), เหลืองทอง (#fdd835)
- ฟอนต์หลัก: Mitr, ฟอนต์ตกแต่ง: Orbitron
