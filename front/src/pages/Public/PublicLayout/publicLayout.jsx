import './publicLayout.scss'
import { Outlet } from 'react-router'
import { Header, Footer } from '@components/import.jsx'


function PublicLayout  ()  {

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

export default PublicLayout