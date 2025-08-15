import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NotesProvider } from './context/NotesContext';
import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
      <Toaster position="top-right" />
    </NotesProvider>
  </React.StrictMode>
);

reportWebVitals();
