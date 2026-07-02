import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx';
import './index.css';

// Prevent right click and some keyboard shortcuts
if (typeof document !== 'undefined') {
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+S, Ctrl+P
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p')) {
      e.preventDefault();
    }
    // Prevent PrintScreen if possible (limited effectiveness on modern OS)
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('');
    }
  });
}

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  createRoot(document.getElementById('root')!).render(
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>Clerk Publishable Key Missing</h2>
      <p>Please add <code>VITE_CLERK_PUBLISHABLE_KEY</code> to your Environment Variables via the Settings menu.</p>
    </div>
  );
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HelmetProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <App />
        </ClerkProvider>
      </HelmetProvider>
    </StrictMode>,
  );
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.log('SW registration failed: ', err);
    });
  });
}
