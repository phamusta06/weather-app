import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TargetProvider from './context/TrgetContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TargetProvider>
       <App />
    </TargetProvider>
   
  </React.StrictMode>
)
