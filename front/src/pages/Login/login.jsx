import React, { useState } from 'react'
import ApiCaller from '@services/apiCaller'
import './login.scss'

function Login () {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const response = await ApiCaller.login({ email: username, password })
      
      if (response.access_token) {

        // Stocker le token dans le local storage
        localStorage.setItem('token', response.access_token)

        // Rediriger l'utilisateur vers la page admin
        window.location.href = '/admin'

      } else {

        throw new Error('No token received')

      }
    } 
    
    catch (error) {

      setErrorMessage('Email ou mot de passe incorrect')

    }

  }

  return (
    <div className="sign-in">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </div>
  )
}

export default Login
