import './header.scss'
import { Link } from 'react-router-dom'
import Logo from '@assets/logo/Booki.png'
import Login from '@assets/logo/login.svg'
import LoginHover from '@assets/logo/loginHover.svg'
import { useState } from 'react'

function Header() {

  const [loginImage, setLoginImage] = useState(Login)

  return (

    <header>

      <div className="logo">

        <Link to="/">
          <img className="logo" src={Logo} alt="logo booki" />
        </Link>
        
      </div>

      <nav>

        <ul>
          
          <li>
            <Link to="/lodgings"> Hébergements </Link>
          </li>

          <li>
            <Link to="/Activities">Activités</Link>
          </li>

          <li>
            <Link to="/auth/login" onMouseEnter={() => setLoginImage(LoginHover)} onMouseLeave={() => setLoginImage(Login)}>
              <img src={loginImage} alt="Login" />
            </Link>
          </li>

        </ul>
        
      </nav>

    </header>

  )

}

export default Header