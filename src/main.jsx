import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

console.log('Starting application...');

const root = document.getElementById('root');
console.log('Root element:', root);

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
  console.log('Application rendered successfully');
} catch (error) {
  console.error('Error rendering application:', error);
}
