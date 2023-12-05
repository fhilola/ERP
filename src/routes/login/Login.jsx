import { useState } from 'react'
import {connect, useSelector} from 'react-redux'
import { Button } from '../../utils'
import { login } from '../../redux/actions/auth-action'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLoginUser = (e) => {
    e.preventDefault()
    props.login({email, password})
    navigate('/')
  }
  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='auth-form' onSubmit={handleLoginUser}>
        <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button text={'Login'} isloading={false} type={'submit'} appearence={'success'}/>
      </form>
    </div>
  )
}

export default connect(null, {login}) (Login)