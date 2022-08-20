import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div> new user <Link to="/signup" >signup</Link>
     already account Login 
      <Link to="/form" >form</Link>
      <br></br>
      <Link to="/payment" >payment</Link>
    </div>
  )
}

export default Login
