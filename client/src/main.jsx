import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ToastContainer } from 'react-toastify';
import customFetch from './utils/customFetch.js';

const data = await customFetch.get('/test')


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer position='top-center'></ToastContainer>
  </React.StrictMode>
);