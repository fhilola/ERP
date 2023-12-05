import Home from '../pages/home/Home'
import { Navigate } from 'react-router-dom'
import { validateToken } from './validate-token'
import { useSelector } from 'react-redux'

const Private = () => {
  const profile = useSelector(state => state.auth)
  return profile.user && profile.user.token && validateToken(profile.user.token) ? <Home/> : <Navigate to={'auth/login'}/>
}

export default Private  