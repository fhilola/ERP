import Home from '../pages/home/Home'
import { Navigate } from 'react-router-dom'
import { validateToken } from './validate-token'

const Private = () => {
  const token = localStorage.getItem('access_token')
  return token && validateToken(token) ? <Home/> : <Navigate to={'auth/login'}/>
}

export default Private