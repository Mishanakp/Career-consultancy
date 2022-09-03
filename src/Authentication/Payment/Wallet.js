import React from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';



function Wallet() {
  const [value, setValue] = React.useState('Freecharge');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        

        <div className='wallet'>

<div id='amounttx1'>Amount payable is</div>
    < div className='amount'>₹570</div>

  <p className='header'>Pay using wallet</p>
  <p class="cardnumber" id="use">Choose a wallet</p>
  


 
  <FormControl component="fieldset">
     
      <RadioGroup aria-label="wallet" name="wallet1" value={value} onChange={handleChange}>
        <FormControlLabel value="Freecharge" control={<Radio />} label="Freecharge"  />
        <FormControlLabel value="Mobikwik" control={<Radio />} label="Mobikwik" />
        <FormControlLabel value="Airtel Money" control={<Radio />} label="Airtel Money" />
        <FormControlLabel value="JioMoney" control={<Radio />} label="JioMoney" />
        <FormControlLabel value="PhonePe" control={<Radio />} label="PhonePe" />
       
      </RadioGroup>
    </FormControl>


 
  
    <Button         
         
                 id='paynow2'
             
                 >
                   PAY NOW</Button>
    </div>

    {/****************************** */}
    
    


{/****************************** */}
    </div>
  )
}

export default Wallet