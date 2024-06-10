import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Lodging, Error, Layout, Login, Admin, LodgingDashboard } from '@pages/import.jsx'

function PublicRoutes() {

    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path='/lodging/:id' element={<Lodging />} />
                <Route path="/login" element={<Login />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/lodgingDashboard/:id' element={<LodgingDashboard />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
        
    )
}

export default PublicRoutes;
