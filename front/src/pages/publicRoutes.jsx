import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Error, Layout, Login, Admin } from '@pages/import.jsx'


function PublicRoutes () {

    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/admin' element={<Admin />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>  

    )
}

export default PublicRoutes