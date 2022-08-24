import React from 'react'
import { Link } from 'react-router-dom';
import Singuppage from './Singuppage';
function SingUp() {
  return (
    <div>
      SignUp
      <Singuppage/>
      <Link to="/userprofile" >userprofile</Link>
    </div>
  )
}

export default SingUp
