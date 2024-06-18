import './adminLayout.scss'
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components/import'


function AdminLayout () {
    
    return (

        <div className='layout'>

             <div className="main-content">

                <Header />
                <Outlet />

            </div>

            <Footer />
            
        </div>

    )

}

export default AdminLayout