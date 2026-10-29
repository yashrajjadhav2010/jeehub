# 🚀 JEE TAPASYA

> **A modern, high-performance question practice, mock test, and AI doubt-solving platform engineered for JEE Mains & Advanced aspirants.**

Created with passion by **Yashraj Jadhav**.

---

## 🌟 Overview

**JEE TAPASYA** is an all-in-one preparation ecosystem built specifically to address the intense demands of JEE (Joint Entrance Examination) Mains and Advanced. It combines high-yield practice problem sets, full-syllabus timed mock simulations, a 3D molecular visualizer, and an AI-driven doubt solver into a single, lightning-fast application.

---

## ✨ Key Features

### 1. 📚 Subject Mastery & Topic Practice
- **Physics, Chemistry & Mathematics**: Curated question banks covering Class 11 & Class 12 syllabi.
- **Ranker Problem Sets & PYQs**: High-difficulty problems alongside authentic Previous Year Questions (including recent JEE Main 2025 shift papers).
- **DPP Builder (Daily Practice Problems)**: Custom problem set generator based on chosen topics, difficulty levels, and target count.

### 2. ⚡ AI Doubt Solver
- **Step-by-Step Solutions**: Formats complex calculations, derivations, and explanations clearly.
- **KaTeX Math Rendering**: Crisp, beautiful typesetting for mathematical formulas and chemical equations.
- **Multi-engine Resilience**: Automated latency management and smart fallback mechanisms.

### 3. 🎯 Full-Length Mock Tests & Analytics
- Authentic Computer-Based Test (CBT) interface resembling the actual NTA JEE exam environment.
- Sectional timers, negative marking (-1 for incorrect, +4 for correct), and question status tracking (Answered, Marked for Review, Unvisited).
- Deep performance analytics: Subject-wise accuracy breakdown, time spent per question, and rank projections.

### 4. 🔬 Interactive Scientific Tools
- **3D Molecular Visualizer**: Interactive Three.js/WebGL 3D ball-and-stick rendering for organic and inorganic molecules with orbital rotation and zoom.
- **Interactive Periodic Table**: Color-coded chemical families, atomic properties, electron configurations, and trend indicators.

### 5. 🧠 Smart Revision & Gamification
- **Formula Vault**: Quick-reference formula sheets categorized by chapter and topic.
- **Spaced Repetition Flashcards**: Active recall decks for high-weightage formulas and reaction mechanisms.
- **Focus Protocol Timer**: Dedicated Pomodoro-style deep work timer designed for extended study blocks.
- **Reward Store & Streaks**: Earn XP for consistent daily practice and unlock study milestones.

### 6. 📱 Progressive Web App (PWA)
- Installable on Android, iOS, Windows, and macOS.
- Offline capabilities and cached assets for uninterrupted revision.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide React Icons
- **Math Rendering**: KaTeX
- **3D Graphics**: Three.js / Canvas
- **Backend / API**: Node.js, Express, tsx
- **Database & Auth**: Firebase Firestore & Firebase Authentication
- **AI Integrations**: Server-side proxy handling high-concurrency requests with intelligent fallbacks

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed on your machine
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yashrajart1999/jee-tapasya.git
   cd jee-tapasya
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the example environment configuration:
   ```bash
   cp .env.example .env
   ```
   Add your Firebase and AI API keys if running locally.

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
├── public/                 # Static assets, logos, and PWA service workers
├── src/
│   ├── components/         # Reusable UI widgets, timers, 3D canvas, mascots
│   ├── data/               # Chemical elements, molecules, and formula data
│   ├── lib/                # Firebase, Supabase, utilities, and sync logic
│   ├── pages/              # Main route views (Home, Quiz, DoubtSolver, etc.)
│   ├── questions/          # Subject question banks and PYQ collections
│   ├── services/           # AI service and calculation helpers
│   ├── App.tsx             # Main routing and navigation shell
│   ├── index.css           # Global Tailwind and font styles
│   └── main.tsx            # React application entry point
├── server.ts               # Express server with Vite middleware & API proxy
├── metadata.json           # Platform metadata & permissions configuration
└── package.json            # Project dependencies and npm scripts
```

---

## 🛡️ License & Credits

- **Author**: [Yashraj Jadhav](https://github.com/yashrajart1999)
- Built for students aiming for IIT JEE Main & Advanced.
- All rights reserved © 2026 JEE TAPASYA.
