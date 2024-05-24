import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import { Provider } from 'react-redux';


const store = configureStore({
  reducer:{
    cart : cartSlice
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
