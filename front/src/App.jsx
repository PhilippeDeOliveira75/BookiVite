import './app.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRouter } from '@pages/Public/import'
import { AdminRouter } from '@pages/Admin/import'
import { AuthRouter } from '@pages/Auth/import'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter>

        <Routes>

          <Route path="/*" element= {<PublicRouter />}/>

          <Route path="/admin/*" element= {<AdminRouter />}/>

          <Route path="/auth/*" element= {<AuthRouter/>}/>
          
        </Routes>

    </BrowserRouter>

  </React.StrictMode>,
  
)