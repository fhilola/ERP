import { Navigate } from 'react-router-dom'
import { validateToken } from './validate-token'
import { useSelector } from 'react-redux'
import Admin from '../pages/admin/Admin'
import { useLayoutEffect } from 'react'
import axios from '../services/index'

const Private = () => {
  useLayoutEffect(()=>{
    axios('/users/profile')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  },[])
  const profile = useSelector(state => state.auth)
  return profile.user && profile.user.token && validateToken(profile.user.token) ? <Admin/> : <Navigate to={'auth/login'}/>
}

export default Private  