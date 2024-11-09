// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; // import RouterProvider
import router from './routes.jsx'; // import your router config

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Wrap App in RouterProvider */}
  </StrictMode>
);
