import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CounterProvider } from './hooks/counter-context.tsx';
import { SessionProvider } from './hooks/session-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <SessionProvider>
        <App />
      </SessionProvider>
    </CounterProvider>
  </React.StrictMode>
);
