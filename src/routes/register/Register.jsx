import { Button } from "../../utils"

const Register = () => {
  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='auth-form'>
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email' />
        <input type="password" placeholder='Your Password' />
        <Button text={'Register'} isloading={false} type={'submit'} appearence={'success'}/>
      </form>
    </div>
  )
}

export default Register