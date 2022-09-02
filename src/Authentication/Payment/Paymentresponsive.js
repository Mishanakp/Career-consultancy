import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Payment.css'


import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';







import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));













export default function BasicGrid() {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [bankname, setBankname] = React.useState('');

  const handleChange1 = (event) => {
    setBankname(event.target.value);
  };
    
  return (<div> 
    <div id='paymerntgid769'>
    <div className='paymentresponsivecard'>
    
    <Grid container  id=''>
        <Grid item xs={5}>
          <Item id='paygrid769'>
            <p className='payment769tx1'>Payment Account</p>
            <div className='underline'></div>
          </Item>
        </Grid>
        <Grid item xs={7}>
        <Item id='paygrid769'>
          <p className='payment769tx2'>₹400</p>
          <div className='underline1'></div>
      
        </Item>
        </Grid>
        
        <Grid xs={12}>
    <Item id='paygrid769'>
      <div id='paygrid7691'></div>
    <div className='underline3'></div>
    <p className='header1'>Select Payment Method</p>
    </Item>
  </Grid>








        <Grid item xs={12}>
        <Item id='paygrid769'>
         <div className='accordianmain76'> 
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography  id='accordianpay769'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  fill="#23BDB8" d="M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z"></path></svg>
          <span className='credit769'> Credit/Debit card</span> 
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails id='accordiondetails769'>
          <Typography>
          <p className='header'>Pay with Credit/Debit Card</p>
          <p class="cardnumber" id="use">Card Number</p>
        <TextField
               
                variant="outlined"
                
                 margin="normal"
                 required
                 type="text"
               id='textfieldpayment'
               
               />



<Grid container spacing={2}>
        <Grid item xs={4.5}>
          <Item id='paybg'>
          <p className='exprirdate'>Expire Date</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack >
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




          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
         <Typography  id='accordianpay769'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  fill="#23BDB8" d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z"></path></svg>
          <span className='credit769'> Netbanking</span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails id='accordiondetails7692'>
          <Typography>
          <p className='header'>Pay using Netbanking</p>
        <FormControl id='netselection'>
  <InputLabel id="demo-simple-select-autowidth-label">select bank</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bankname}
      label="select bank"
          onChange={handleChange1}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography id='accordianpay769'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 0h24v24H0z" fill="none"></path><path  fill="#23BDB8" d="M21 18v1l-2 2H5l-2-2V5l2-2h14l2 2v1h-9l-2 2v8l2 2h9zm-9-2h10V8H12v8zm4-2a1 1 0 1 1 0-3 1 1 0 0 1 0 3z"></path></svg>
          <span className='credit769'> Wallet</span> 
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails id='accordiondetails7692'>
          <Typography>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
       

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography id='accordianpay769'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20"><path fill-rule="evenodd" fill="#23BDB8" d="M0 1.3C0 .6.6 0 1.3 0h27.4c.7 0 1.3.6 1.3 1.3v17.4c0 .7-.6 1.3-1.3 1.3H1.3C.6 20 0 19.4 0 18.7V1.3zM8 13c1.9 0 2.8-1 2.8-2.6V7H9.2v3.6c0 .7-.4 1.2-1.3 1.2-.8 0-1.3-.5-1.3-1.2V6.9H5v3.6c0 1.5 1 2.6 3 2.6zm5.5 0V11H15c1.4 0 2.1-1 2.1-2 0-1.2-.7-2.1-2.1-2.1h-3.1V13h1.6zm1.2-3.5h-1.2V8.3h1.2c.5 0 .8.2.8.6 0 .4-.3.7-.8.7zm4.7 3.4V7h-1.6V13h1.6zm5.6-3l-1.2-2.5-.3 1.2.6 1.3-1.3 1.3-.3 1.2L25 10zm-1.8-1.3l-.6-1.2-1.4 5 1.3-1.2 1.3-1.3-.6-1.3z"></path></svg>
          <span className='credit769'> UPI</span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails id='accordiondetails7692'>
          <Typography>
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
</Typography>
        </AccordionDetails>
      </Accordion>


</div>














          </Item>
        </Grid>
       
      </Grid>
















        


   
         
    </div>
    </div>

</div>
    
  );
}
