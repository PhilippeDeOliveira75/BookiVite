import { Routes, Route } from 'react-router-dom'
import { AuthLayout, Login } from '@pages/Auth/import'
import { Error } from '@utils/import'

function AuthRouter () {

    return (

        <Routes>

            <Route element={<AuthLayout />}>

                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Error/>}/>

            </Route>

        </Routes>

    )
    
}

export default AuthRouter