import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
)
