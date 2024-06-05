import { Outlet } from 'react-router'
import { Header, Footer } from '@components/import.jsx'


function Layout  ()  {

    return (

        <div className='layout'>
            <Header />
            <Outlet />
            <Footer />
        </div>

    )

}

export default Layout