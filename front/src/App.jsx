import React from 'react'
import ReactDOM from 'react-dom/client'
import './app.scss'
import { BrowserRouter } from 'react-router-dom'
import PublicRoutes from '@pages/publicRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter>
    
      <PublicRoutes />

    </BrowserRouter>

  </React.StrictMode>,
  
)