import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { AuthRoleProvider } from './context/AuthRoleContext';
import { AppDataProvider } from './context/AppDataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <AuthRoleProvider>
          <AppDataProvider>
            <App />
          </AppDataProvider>
        </AuthRoleProvider>
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
);
