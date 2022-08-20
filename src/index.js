import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
