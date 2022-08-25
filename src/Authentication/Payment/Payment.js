import { Slide } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
 import Paymentpage from './Paymentpage'
import PaymentRout from './PaymentRout';
import Sidebar from './Sidebar';
 import Slidebar from './Sidebar';

function Payment() {
  return (
    <div>Payment
       <Link to="/userprofile" >userprofile</Link>
      <Sidebar/>
    </div>
  )
}

export default Payment