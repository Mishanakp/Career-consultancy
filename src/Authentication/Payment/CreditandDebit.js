import React from 'react'
import './Payment.css'
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function CreditandDebit() {
  const [value, setValue] = React.useState(dayjs());
  return (
    
    <div>
<div className='amountheading'>

      <div id='amounttx1'>Amount payable is</div>
          < div className='amount'>₹270</div>
    
        <div class="text-underline"></div>
        <p className='header'>Pay with Credit/Debit Card</p>
      
        <p class="cardnumber" id="use">Card Number</p>
        <TextField
               
                variant="outlined"
                
                 margin="normal"
                 required
                 type="text"
               id='textfieldpayment'
               
               />



<Grid container spacing={2} >
          <Grid item xs={4.5}>
          <Item id='paybg'>
          <p className='exprirdate'>Expire Date</p>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Stack  >
          <DesktopDatePicker
          views={['year', 'month']}
       id='anu'
          minDate={dayjs('2012-03-01')}
          maxDate={dayjs('2023-06-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          
          renderInput={(params) => <TextField {...params} sx={{
            svg: { color: ' #23BDB8',marginRight:'10px',display: 'fixed'}}}
          helperText={null} />}
         
        />
        
        </Stack>
        </LocalizationProvider>
          </Item>
        </Grid>
        <Grid item xs={4.5}>
          <Item id='paybg'>
          <p className='exprirdate'>CVV</p>
          <TextField
           id='cvvwidthpayment'
             variant="outlined"
              placeholder="***"
              margin="normal"
              required
              type="password"
              
          
            />
          </Item>
        </Grid>
        </Grid>
       <p class="cardnumber" id='cardholder'>Cardholder's Name</p> 
       <TextField
               
               variant="outlined"
               
                margin="normal"
                required
                type="text"
              id='textfieldpayment'
              
              />
              <br/>
              <br/>

                 <Button         
         
                 id='paynow'
             
                 >
                   PAY NOW</Button>    




  
</div>
    </div>

  )
}

