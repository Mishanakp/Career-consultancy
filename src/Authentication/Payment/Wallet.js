import React from 'react'
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Button from '@mui/material/Button';


function Wallet() {
    const [value, setValue] = React.useState('female');

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
  <RadioGroup name="people" overlay defaultValue="person" >
      <List 
        sx={(theme) => ({
          
          '--List-gap': '0.5rem',
          '--List-item-paddingY': '1rem',
          '--List-item-radius': '8px',
          '--List-decorator-size': '32px',
          [`& .${radioClasses.root}`]: {
            flexGrow: 1,
            flexDirection: 'row-reverse',
            [`&.${radioClasses.checked}`]: {
              [`& .${radioClasses.action}`]: {
                inset: -1,
                border: '2px solid',
                borderColor: theme.vars.palette.primary[500],
              },
            },
          },
        })}
      >
        <ListItem variant="outlined" id='walletselection'>
          <ListItemDecorator>
          <img src='https://cdn.razorpay.com/wallet-sq/freecharge.png' alt='' className='walletimg'/>          
           
          </ListItemDecorator>
          <Radio value="Freecharge" label="Freecharge" />
        </ListItem>
        <ListItem variant="outlined" id='walletselection'>
          <ListItemDecorator>
            <img src='https://cdn.razorpay.com/wallet-sq/mobikwik.png' alt='' className='walletimg'/>          
          </ListItemDecorator>
          <Radio value="Mobikwik" label="Mobikwik" />
        </ListItem>
        <ListItem variant="outlined" id='walletselection'>
          <ListItemDecorator>
          <img src='https://cdn.razorpay.com/wallet-sq/airtelmoney.png' alt='' className='walletimg'/>  
          </ListItemDecorator>
          <Radio value="AirtelMoney" label="Airtel Money" />
        </ListItem>
        <ListItem variant="outlined" id='walletselection'>
          <ListItemDecorator>
          <img src='https://cdn.razorpay.com/wallet-sq/jiomoney.png' alt='' className='walletimg'/>  
          </ListItemDecorator>
          <Radio value="JioMoney" label="JioMoney" />
        </ListItem>
        <ListItem variant="outlined" id='walletselection'>
          <ListItemDecorator>
          <img src='https://cdn.razorpay.com/wallet-sq/phonepe.png' alt='' className='walletimg'/>  
          </ListItemDecorator>
          <Radio value="PhonePe" label="PhonePe" />
        </ListItem>
      </List>
    </RadioGroup>

    <Button         
         
                 id='paynow2'
             
                 >
                   PAY NOW</Button>
    </div>

    










    </div>
  )
}

export default Wallet