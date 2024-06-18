import './authLayout.scss'
import { Outlet } from 'react-router'
import { Header, Footer } from '@components/import.jsx'


function AuthLayout () {

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

export default AuthLayout