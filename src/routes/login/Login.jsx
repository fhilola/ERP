import { Button } from '../../utils'

const Login = () => {
  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='auth-form'>
        <input type="email" placeholder='Your Email' />
        <input type="password" placeholder='Your Password' />
        <Button text={'Login'} isloading={false} type={'submit'} appearence={'success'}/>
      </form>
    </div>
  )
}

export default Login