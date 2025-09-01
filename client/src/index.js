import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';

export const BACKEND_URL = 'http://72.60.96.189';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <RoleProvider>
          <App />
        </RoleProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
