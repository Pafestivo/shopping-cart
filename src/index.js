import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RouteSwitch from './RouteSwitch';
import './styles/media-queries.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
