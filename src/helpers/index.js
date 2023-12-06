import { Navigate, Outlet } from 'react-router-dom'
import { validateToken } from './validate-token'
import { useSelector } from 'react-redux'
import Admin from '../pages/admin/Admin'
import usePriorFetch from '../hooks/usePriorFetch'

const Private = () => {
  const [profileData, isloading, error] = usePriorFetch('/users/profile')
  const profile = useSelector(state => state.auth)
  return profile.user && profile.user.token && validateToken(profile.user.token) ? <Outlet context={[profileData, isloading, error]}/> : <Navigate to={'/auth/login'}/>
}

export default Private  