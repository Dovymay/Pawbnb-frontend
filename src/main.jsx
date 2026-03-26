import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './contexts/AuthContext.jsx';
import { PetStayWrapper } from './contexts/PetStayContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthWrapper>
        <PetStayWrapper>
          <App />
        </PetStayWrapper>
      </AuthWrapper>
    </BrowserRouter>
  </StrictMode>
);
