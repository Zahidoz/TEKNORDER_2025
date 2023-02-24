import React from 'react';
import ReactDOM from 'react-dom/client';
import Oculus from './Pages/OculusPage/Oculus';
import App from './Pages/MainPage/App';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


