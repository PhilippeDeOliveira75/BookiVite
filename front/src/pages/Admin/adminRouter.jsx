import { Routes, Route } from "react-router-dom"
import { AdminLayout, Dashboard, LodgingDashboard } from '@pages/Admin/import'
import { Error } from '@utils/import'

function AdminRouter () {

    return (

        <Routes>

            <Route element={<AdminLayout/>}>

                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="lodgingDashboard/:id" element={<LodgingDashboard/>}/>
                <Route path="*" element={<Error/>}/>

            </Route>

        </Routes>

    )

}

export default AdminRouter