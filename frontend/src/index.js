import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import Login from './components/personAdd';

const root = ReactDOM.createRoot(document.getElementById('root')); //render the components under the root id in the index.html
root.render( //render to web browser
  <Login />
);

