import { useLayoutEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { Button } from '../../utils'
import { login } from '../../redux/actions/auth-action'
import { useNavigate } from 'react-router-dom'
import { validateToken } from '../../helpers/validate-token'

const Login = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userinfo = useSelector(state => state.auth)
  console.log(userinfo);
  const handleLoginUser = (e) => {
    e.preventDefault()
    props.login({ email, password })
  }
  useLayoutEffect(()=>{
    if(userinfo.user && userinfo.user.token && validateToken(userinfo.user.token)){
      navigate('/')
    }
  },[userinfo])
  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='auth-form' onSubmit={handleLoginUser}>
        <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button text={'Login'} isloading={false} type={'submit'} appearence={'success'} />
      </form>
    </div>
  )
}

export default connect(null, { login })(Login)