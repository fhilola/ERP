import { Button } from "../../utils"
import {connect, useSelector} from 'react-redux'
import register from "../../redux/actions/auth-action"
import { useState } from "react"

const Register = props => {
  const data = useSelector(state => state)
  console.log(data);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const registerNewUser = (e) => {
    e.preventDefault()
    props.register({name, email, password})
  }
  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='auth-form' onSubmit={registerNewUser}>
        <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button text={'Register'} isloading={false} type={'submit'} appearence={'success'}/>
      </form>
    </div>
  )
}

export default connect(null, {register})(Register)