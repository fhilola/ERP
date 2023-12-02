import React from 'react'

const Login = () => {
  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='auth-form'>
        <input type="email" placeholder='Your Email' />
        <input type="password" placeholder='Your Password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login