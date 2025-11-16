# Startup Weekend Jaipur

A retro arcade-themed website for Startup Weekend Jaipur 2026, built with React and Vite.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📦 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the Vite configuration and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository or upload the project folder
4. Vercel will automatically configure the build settings based on `vercel.json`

## 🎮 Features

- Retro arcade-themed UI
- Interactive registration form
- Organizer profiles
- Sponsor showcase
- Animated pixel background
- Score and coin system

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## 📁 Project Structure

```
.
├── public/          # Static assets
├── src/
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # React entry point
│   └── arcade-styles.css  # Custom styles
├── index.html       # HTML entry point
├── package.json     # Dependencies
├── vite.config.ts   # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── vercel.json      # Vercel deployment configuration
```

## 📝 Notes

- All images should be placed in the `public/` directory
- Image paths in the code should start with `/` (e.g., `/google.png`)
- The build output will be in the `dist/` directory

