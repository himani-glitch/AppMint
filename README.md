# AppMint — Robotics & AI Technology Website

### 🌐 [Live Demo →](https://app-mint-gamma.vercel.app/)

A modern, dark-themed portfolio website for **AppMint**, a robotics and AI-driven technology company building intelligent drone systems, IoT solutions, and autonomous software platforms.

---

## Requirements

No build tools, frameworks, or package manager needed. Just a browser and a way to serve static files.

| Requirement | Details |
|---|---|
| **Python 3** | For running the local dev server (comes pre-installed on most systems) |
| **A modern browser** | Chrome, Firefox, Edge, or Safari (latest) |
| **Internet connection** | Google Fonts are loaded from CDN on first load |

---

## How to Run

### Option 1 — Python (recommended)

```bash
cd /home/himani/Portfolio
python3 -m http.server 3000
```

Then open your browser and go to:

```
http://localhost:3000
```

### Option 2 — Any other local server

You can use any static file server. Examples:

```bash
# Node.js (npx)
npx serve .

# PHP
php -S localhost:3000

# VS Code — install the "Live Server" extension and click "Go Live"
```

---

## Project Structure

```
Portfolio/
├── index.html    # Main HTML — all 5 sections (Hero, About, Projects, Services, Contact)
├── style.css     # All styles — dark theme, animations, responsive layout
├── script.js     # Interactivity — modal, nav tracking, stars, form, fade-in
└── image/        # Reference screenshots used during design
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | "Hello, we're AppMint." intro with CTA buttons and animated star field |
| **About** | Company overview, tech stack tags, and 3 stat counters |
| **Projects** | 6 project cards (3-column grid), each opens a detailed modal |
| **Services** | 6 service cards with icons — Drone, AI, Firmware, Full-Stack, IoT, Debugging |
| **Contact** | Contact info, social links, and a message form |

---

## Features

- Fully **responsive** (mobile, tablet, desktop)
- Smooth **scroll-snap** between sections
- **Animated star field** with parallax on mouse move
- **Project modals** with Challenge / Solution / Outcome details
- **Active nav** auto-highlights current section on scroll
- **Contact form** with character counter and success state
- Fade-in **scroll animations** throughout
