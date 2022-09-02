import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Upi() {
  return (
    <div>
        <div className='upi'>
        <div id='amounttx1'>Amount payable is</div>
        < div className='amount'>₹270</div>
        <p className='header'>Pay using UPI</p>
        <p class="cardnumber" id='cardholder'>Enter your VPA</p> 
        <TextField
           
           variant="outlined"
           
            margin="normal"
            required
            type="text"
            id='textupi'
            
        
          />
          <Button  id='paynow3'>PAY NOW</Button>

        </div>
        </div>
  )
}

export default Upi