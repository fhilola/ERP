import React from 'react'
import { Outlet } from 'react-router-dom'
import './Auth.scss'

const Auth = () => {
  return (
    <div className='auth'>
      <div className="auth-form__wrapper">
        <nav>
          <ul>
            <li>
              <NavLink>
                
              </NavLink>
            </li>
            <li>
              <NavLink>

              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    </div>
  )
}

export default Auth