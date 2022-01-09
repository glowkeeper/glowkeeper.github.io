import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { App } from './components/App';

import './styles/typeface.css';
import './styles/layout.css';
import './styles/site.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/misc.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
