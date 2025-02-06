import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import 'modern-normalize';
import './styles/global.css';
import './styles/reset.css';
import './styles/variables.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
  </StrictMode>,
);
