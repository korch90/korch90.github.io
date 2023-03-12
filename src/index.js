import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { HashRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

{/* <meta http-equiv="Permissions-Policy" content="interest-cohort=()"> </meta> */}

root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);

reportWebVitals();
