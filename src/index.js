import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

import './styles/layout.css';
import './styles/site.css';
import './styles/home.css';
import './styles/misc.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
