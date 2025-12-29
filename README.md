# 🐱 Pomeow - Pomodoro Timer

A cute cat-themed Pomodoro timer built with React and Vite. Feed the cat by completing your focus sessions!

![Pomeow Screenshot](https://github.com/user-attachments/assets/d62e7fcb-88fe-47ac-b23d-73fdb1d8b8f0)


## Features

-  **Pomodoro Timer** - 25-minute focus sessions with automatic breaks
- **Breaks** - Alternates between short (5 min) and long breaks (15 min)
- **Animated Cat** - Lottie animation that watches you work
- **Fish Counter** - Earn fish by completing Pomodoro sessions
- **Messages** - Dynamic messages based on current mode
- **Sound Notifications** - Cat meow when timer completes
- **Responsive Design** - Works on desktop, tablet, and mobile

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Lottie React** - Animations
- **CSS3** - Styling with media queries

## Project Structure

```
src/
├── components/
│   ├── BackgroundDecorations/
│   ├── Cat/
│   ├── FishCounter/
│   ├── Header/
│   └── MotivationalSign/
├── features/
│   └── Timer/
│       ├── ControlButtons/
│       ├── ModeSelector/
│       ├── ProgressBar/
│       ├── TimeDisplay/
│       └── TimerCard/
├── hooks/
│   ├── usePomodoro.js
│   └── useSound.js
└── assets/
    ├── animations/
    ├── decorations/
    ├── icons/
    └── sounds/
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Purple | `#231924` | Background |
| Pink | `#FEBFFF` | Cards |
| Purple | `#7F1E87` | Text, buttons |
| Yellow | `#FFD215` | Accents, fish |
| Off-white | `#FAF9F6` | Light elements |

## 📝 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Author

**Ana Rodrigues**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/analumoreirar)


---
