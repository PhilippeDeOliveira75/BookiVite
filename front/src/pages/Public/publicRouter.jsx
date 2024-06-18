import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Lodging, Lodgings, Activities, PublicLayout } from '@pages/Public/import.jsx'
import { Error } from '@utils/import'

function PublicRouter () {

    return (

        <Routes>

            <Route element={<PublicLayout />}>

                <Route path="/" element={<Home />} />
                <Route path='/lodgings' element={<Lodgings/>} />
                <Route path='/lodging/:id' element={<Lodging />} />
                <Route path='/activities' element={<Activities/>} />

            </Route>

            <Route path="*" element={<Error />} />

        </Routes>
        
    )
}

export default PublicRouter
