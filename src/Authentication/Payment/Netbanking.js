

import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Netbanking() {
  const [bankname, setBankname] = React.useState('');

  const handleChange = (event) => {
    setBankname(event.target.value);
  };
  return (

  



<div>
<div className='choosebank'>

<div id='amounttx1'>Amount payable is</div>
    < div className='amount'>₹270</div>

  <div class="text-underline"></div>
  <p className='header'>Pay using Netbanking</p>
        <FormControl id='netselection'>
  <InputLabel id="demo-simple-select-autowidth-label">select bank</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bankname}
      label="select bank"
          onChange={handleChange}
        >
          <MenuItem value="AUBL">AU Small Finance Bank</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      
        </Select>
        </FormControl>

                 <Button         
         
                 id='paynow1'
             
                 >
                   PAY NOW</Button>    
                
  
</div>








    </div>





























  )
}



