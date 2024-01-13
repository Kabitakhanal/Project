import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='Username'/>
        <input required type="password" placeholder='Password'/>
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't have an account yet? <Link to="/register">Register</Link>
        </span>
        <span>Go back to Home page <Link to ="/">Home</Link>

        </span>
      </form>
      </div>
  )
}

export default Login
