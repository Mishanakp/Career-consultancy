import React from 'react'
import { Link } from 'react-router-dom';
function Userprofile() {
  return (
    <div>
      userprofile
      <Link to="/changepassword" >changepassword</Link>
      <Link to="/rescheduleappoinment" >rescheduleappoinment</Link>
    
    </div>
  )
}

export default Userprofile
