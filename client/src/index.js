import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import actionCable from 'actioncable'

const root = ReactDOM.createRoot(document.getElementById('root'));

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App cable={CableApp.cable}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
