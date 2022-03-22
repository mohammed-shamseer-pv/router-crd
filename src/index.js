import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{AuthProvider} from './Hooks/useAuth'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <AuthProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

