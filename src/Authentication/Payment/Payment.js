
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './Payment.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import InputLabel from '@mui/material/InputLabel';

import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import googlepay from '../../Assets/payment/gpay.png'
import payt from '../../Assets/payment/paytm.png'
import amazonepay from '../../Assets/payment/amazon.png'
import qrcodesymbol from '../../Assets/payment/qrcode.png';









  

function PaymentTabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

PaymentTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yPropspaymentvalue(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


function Payment() {

 
  const [paymentvalue, paymentsetValue] = React.useState(0);
  const [value, setValue] = React.useState(dayjs());

  const [bankname, setBankname] = React.useState('');
  const [walletvalue, walletsetValue] = React.useState('Freecharge');
  const [expanded, setExpanded] = React.useState(false);

  const wallethandleChange = (event) => {
    walletsetValue(event.target.value);
  };



  const bankhandleChange = (event) => {
    setBankname(event.target.value);
  };

  const paymenthandleChange = (event, newValue) => {
    paymentsetValue(newValue);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
{/*************************************************/}


  return (<div>
    <div className='paymentlapview'>
    <div className='paymerntgid'>
    <div className='paymentcard'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        
        <Grid xs={12} className='paymentpagegridcalculator'>
        
         
          <Box className='boxpayment'
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
 <Tabs
  
       TabIndicatorProps={{ style: { background: "#23BDB8" } }}
        orientation="vertical"
        variant="scrollable"
        value={paymentvalue}
        onChange={paymenthandleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',
        "& button":{color:"#4A6F8A"},
        "& button:focus":{color:"#23BDB8",backgroundColor:'#F5FFFA'},
        "& button:active":{color:"#23BDB8",backgroundColor:'#F5FFFA'},
        "& button.Mui-selected":{color:"#23BDB8",backgroundColor:'rgb(218, 210, 210)'},
}}
        className="verticaltabpayment"
      >

        <Tab  className="paymentverticaltab1" icon={<img src={qrcodesymbol} width="24px" height="24px"/>} iconPosition="start" label="QR Code" {...a11yPropspaymentvalue(0)}   sx={{ display: "flex", justifyContent: "flex-start" }}/>
        <Divider/>
        <Tab className="paymentverticaltab2" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path  fill="#23BDB8" d="M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z"></path></svg>} iconPosition="start" label="Credit/Debit card" {...a11yPropspaymentvalue(2)}   sx={{ display: "flex", justifyContent: "flex-start" }} />
        <Divider/>
        <Tab className="paymentverticaltab3" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path  fill="#23BDB8" d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z"></path></svg>} iconPosition="start" label="Netbanking" {...a11yPropspaymentvalue(4)}  sx={{ display: "flex", justifyContent: "flex-start" }} />
        <Divider/>
       <Tab className="paymentverticaltab4" icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" ><path d="M0 0h24v24H0z" fill="none" ></path><path  fill="#23BDB8" d="M21 18v1l-2 2H5l-2-2V5l2-2h14l2 2v1h-9l-2 2v8l2 2h9zm-9-2h10V8H12v8zm4-2a1 1 0 1 1 0-3 1 1 0 0 1 0 3z"></path></svg>} iconPosition="start" label="Wallet" {...a11yPropspaymentvalue(6)}  sx={{ display: "flex", justifyContent: "flex-start" }}/>
       <Divider/>
       <Tab  className='paymentverticaltab5' icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" ><path fill-rule="evenodd" fill="#23BDB8" d="M0 1.3C0 .6.6 0 1.3 0h27.4c.7 0 1.3.6 1.3 1.3v17.4c0 .7-.6 1.3-1.3 1.3H1.3C.6 20 0 19.4 0 18.7V1.3zM8 13c1.9 0 2.8-1 2.8-2.6V7H9.2v3.6c0 .7-.4 1.2-1.3 1.2-.8 0-1.3-.5-1.3-1.2V6.9H5v3.6c0 1.5 1 2.6 3 2.6zm5.5 0V11H15c1.4 0 2.1-1 2.1-2 0-1.2-.7-2.1-2.1-2.1h-3.1V13h1.6zm1.2-3.5h-1.2V8.3h1.2c.5 0 .8.2.8.6 0 .4-.3.7-.8.7zm4.7 3.4V7h-1.6V13h1.6zm5.6-3l-1.2-2.5-.3 1.2.6 1.3-1.3 1.3-.3 1.2L25 10zm-1.8-1.3l-.6-1.2-1.4 5 1.3-1.2 1.3-1.3-.6-1.3z"></path></svg>} iconPosition="start"  label="UPI" {...a11yPropspaymentvalue(8)} sx={{ display: "flex", justifyContent: "flex-start" }}/>
        <Divider/>
    
      </Tabs>
      <PaymentTabPanel  value={paymentvalue} index={0} className='verticalpayright'>
        {/************************QRCODE******************************/}
        <div className='paymentqr'>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
        <img className='qrimage1' src="https://img.freepik.com/premium-vector/qr-code-black-color-isolated-background-mobile-payment-identity-city-transport-rental-ui_111651-755.jpg?size=338&ext=jpg&ga=GA1.2.1405503288.1661585887"></img>
        <p className='rqscan'> Scan</p>
        </Grid>
        <Grid item xs={12} >
     <img src='https://cdn.razorpay.com/wallet-sq/phonepe.png' width="24px" className='qricon'/>
     <img src={googlepay} width="50px" className='qricon'/>
     <img src={payt} width="40px" className='qricon'/>
     <img src={amazonepay} width="50px" className='qricon'/>
        </Grid>
       
        <Grid item xs={12} >

       <div className='qralign'>
       <form action="uploadmultiple" enctype="multipart/form-data" method="POST">
       
                       
                        <label for="formFile" className='consLabel'>Upload screenshot</label>
                            <input type="file" class="form-control" name="images" id="formFile" className='inputfile'/>
                       
                       
                       
                                
                                <Button         
             variant="contained" 
         className='qrbutton'
     
         >
           Upload</Button>    


                    </form> 


          </div>



            {/************************QRCODE******************************/}
        </Grid>
</Grid>
      
    </Box>
</div>

      </PaymentTabPanel>
      <PaymentTabPanel  value={paymentvalue} index={2} className='verticalpayright'>
      <div className='amountheading'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <div className='amounttx1'>Amount payable is</div>
        < div className='amount'>₹270</div>
        <p className='header'>Pay with Credit/Debit Card</p>

        </Grid>
        <Grid item xs={12}>
        <p class="cardnumber" >Card Number</p>
        <TextField
                variant="outlined"
                 margin="normal"
                 required
                 type="text"
           className='textfieldpayment'
                              />

        </Grid>
        <Grid item xs={6}>
    
       
          <p className='exprirdate'>Expire Date</p>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Stack  >
          <DesktopDatePicker
          views={['year', 'month']}
       id='anu'
          minDate={dayjs('2022-09-01')}
          maxDate={dayjs('2050-09-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          
          renderInput={(params) => <TextField {...params} sx={{
            svg: { color: ' #23BDB8',marginRight:'15px',display: 'fixed'}}}
          helperText={null} />}
         
        />
        
        </Stack>
        </LocalizationProvider>
        
        </Grid>
        <Grid item xs={6}>
      
          <p className='CVV'>CVV</p>
          <TextField
           className='cvvwidthpayment'
             variant="outlined"
              placeholder="***"
              margin="normal"
              required
              type="password"
              
          
            />
        
        </Grid>
       
        <Grid item xs={12}>
        <p class="cardholder">Cardholder's Name</p> 
       <TextField
               
               variant="outlined"
               
                margin="normal"
                required
                type="text"
              className='textfieldpayment'
              
              />
         
        </Grid>
        <Grid xs={12}>
        <Button         
             variant="contained"
         className='paynow'
     
         >
           PAY NOW</Button>    


        </Grid>
      </Grid>
    </Box>


</div>













      </PaymentTabPanel>
      <PaymentTabPanel value={paymentvalue} index={4} className='verticalpayright'>
        
      <div className='choosebank'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <div className='amounttx1'>Amount payable is</div>
        </Grid>
        <Grid item xs={12}>
        < div className='amount'>₹270</div>
        <p className='header'>Pay using Netbanking</p>
        </Grid>
        <Grid item xs={12}>
        <FormControl className='netselection'>
  <InputLabel id="demo-simple-select-autowidth-label">select bank</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bankname}
      label="select bank"
          onChange={bankhandleChange}
        >
          <MenuItem value="AUBL">AU Small Finance Bank</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <Button         
            variant="contained"
         className='paynow1'
     
         >
           PAY NOW</Button>    
        </Grid>
      </Grid>
    </Box>
</div>
      </PaymentTabPanel>
      <PaymentTabPanel value={paymentvalue} index={6} className='verticalpayright'>
      <div className='wallet'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <div className='amounttx1'>Amount payable is</div>
        </Grid>
        <Grid item xs={12}>
        < div className='amount'>₹570</div>
        <p className='header'>Pay using wallet</p>

        </Grid>
        <Grid item xs={12}>
        <p class="cardnumber" >Choose a wallet</p>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset">
     
     <RadioGroup aria-label="wallet" name="wallet1" value={walletvalue} onChange={wallethandleChange}>
       <FormControlLabel value="Freecharge" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="Freecharge"  />
       <FormControlLabel value="Mobikwik" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="Mobikwik" />
       <FormControlLabel value="Airtel Money" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="Airtel Money" />
       <FormControlLabel value="JioMoney" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="JioMoney" />
       <FormControlLabel value="PhonePe" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="PhonePe" />
      
     </RadioGroup>
   </FormControl>


        </Grid>
        <Grid item xs={12}>
        <Button         
         variant="contained"
         className='paynow2'
     
         >
           PAY NOW</Button>
        </Grid>
      </Grid>
    </Box>
</div>


      </PaymentTabPanel>
      <PaymentTabPanel value={paymentvalue} index={8} className='verticalpayright'>
   
      <div className='upi'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <div className='amounttx1'>Amount payable is</div>
        </Grid>
        <Grid item xs={12}>
        < div className='amount'>₹270</div>
        <p className='header'>Pay using UPI</p>
        </Grid>
        <Grid item xs={12}>
    
        <p class="cardnumber" >Enter your VPA</p> 
        </Grid>
        <Grid item xs={12}>
        <TextField
           
           variant="outlined"
           
            margin="normal"
            required
            type="text"
            className='textupi'
            
        
          />
        </Grid>
        <Grid xs={12}>
        <Button      variant="contained" className='paynow3'>PAY NOW</Button>
        </Grid>
      </Grid>
    </Box>


        </div>







      </PaymentTabPanel>
    

    </Box>


       
        </Grid>

      </Grid>
    </Box>
    </div>
    </div>
    </div>
<div className='payment769'>
<div className='paymerntgid769'>
    <div className='paymentresponsivecard'>
    <Box sx={{ flexGrow: 1 ,background:'white'}} id='boxre' >
    <Grid container spacing={2}>
        <Grid item xs={6}>
      
            <p className='payment769tx1'>Payment Account</p>
            <div className='underline'></div>
         
        </Grid>
        <Grid item xs={6}>
    
          <p className='payment769tx2'>₹400</p>
          <div className='underline1'></div>
      
    
        </Grid>
        
        <Grid xs={12}>
  
      <div id='paygrid7691'></div>
    <div className='underline3'></div>
    <p className='header1'>Select Payment Method</p>
  
  </Grid>








        <Grid item xs={12}>
    
         <div className='accordianmain76'> 
         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography  className='accordianpay769'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  fill="#23BDB8" d="M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z"></path></svg>
          <span className='credit769'> QR Code</span> 
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails id='accordiondetails769'>
          <Typography>
                 {/************************QRCODE******************************/}
                 
                         {/************************QRCODE******************************/}




          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography  className='accordianpay769'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  fill="#23BDB8" d="M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z"></path></svg>
          <span className='credit769'> Credit/Debit card</span> 
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails id='accordiondetails769'>
          <Typography>
          <div className='amountheading'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12}>
        <p className='header'>Pay with Credit/Debit Card</p>
        <p class="cardnumber" >Card Number</p>
        <TextField
                variant="outlined"
                 margin="normal"
                 required
                 type="text"
           className='textfieldpayment'
                              />

        </Grid>
        
        <Grid item xs={4.5}>
    
       
          <p className='exprirdate'>Expire Date</p>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Stack  >
          <DesktopDatePicker
          views={['year', 'month']}
       id='anu'
          minDate={dayjs('2022-09-01')}
          maxDate={dayjs('2050-09-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          
          renderInput={(params) => <TextField {...params} sx={{
            svg: { color: ' #23BDB8',marginRight:'15px',display: 'fixed'}}}
          helperText={null} />}
         
        />
        
        </Stack>
        </LocalizationProvider>
        
        </Grid>
        <Grid item xs={6}>
      
          <p className='CVV'>CVV</p>
          <TextField
           className='cvvwidthpayment'
             variant="outlined"
              placeholder="***"
              margin="normal"
              required
              type="password"
              
          
            />
        
        </Grid>


        
        <Grid item xs={12}>
        <p class="cardholder">Cardholder's Name</p> 
       <TextField
               
               variant="outlined"
               
                margin="normal"
                required
                type="text"
              className='textfieldpayment'
              
              />
         
        </Grid>
      
        
        <Grid xs={12}>
        <Button         
             variant="contained"
         className='paynow'
     
         >
           PAY NOW</Button>    


        </Grid>
      </Grid>
    </Box>


</div>


<div className='amountheading672'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12}>
        <p className='header'>Pay with Credit/Debit Card</p>
        <p class="cardnumber" >Card Number</p>
        <TextField
                variant="outlined"
                 margin="normal"
                 required
                 type="text"
           className='textfieldpayment'
                              />

        </Grid>
        
        <Grid item xs={6}>
    
       
          <p className='exprirdate'>Expire Date</p>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Stack  >
          <DesktopDatePicker
          views={['year', 'month']}
       id='anu'
          minDate={dayjs('2022-09-01')}
          maxDate={dayjs('2050-09-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          
          renderInput={(params) => <TextField {...params} sx={{
            svg: { color: ' #23BDB8',marginRight:'15px',display: 'fixed'}}}
          helperText={null} />}
         
        />
        
        </Stack>
        </LocalizationProvider>
        
        </Grid>
        <Grid item xs={12}>
      
          <p className='CVV'>CVV</p>
          <TextField
           className='cvvwidthpayment'
             variant="outlined"
              placeholder="***"
              margin="normal"
              required
              type="password"
              
          
            />
        
        </Grid>


        
        <Grid item xs={12}>
        <p class="cardholder">Cardholder's Name</p> 
       <TextField
               
               variant="outlined"
               
                margin="normal"
                required
                type="text"
              className='textfieldpayment'
              
              />
         
        </Grid>
      
        
        <Grid xs={12}>
        <Button         
             variant="contained"
         className='paynow'
     
         >
           PAY NOW</Button>    


        </Grid>
      </Grid>
    </Box>


</div>


     
<div className='amountheading480'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12}>
        <p className='header'>Pay with Credit/Debit Card</p>
        <p class="cardnumber" >Card Number</p>
        <TextField
                variant="outlined"
                 margin="normal"
                 required
                 type="text"
           className='textfieldpayment'
                              />

        </Grid>
        
        <Grid item xs={11.25}>
    
       
          <p className='exprirdate'>Expire Date</p>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Stack  >
          <DesktopDatePicker
          views={['year', 'month']}
       id='anu'
          minDate={dayjs('2022-09-01')}
          maxDate={dayjs('2050-09-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          
          renderInput={(params) => <TextField {...params} sx={{
            svg: { color: ' #23BDB8',marginRight:'15px',display: 'fixed'}}}
          helperText={null} />}
         
        />
        
        </Stack>
        </LocalizationProvider>
        
        </Grid>
        <Grid item xs={12}>
      
          <p className='CVV'>CVV</p>
          <TextField
           className='cvvwidthpayment'
             variant="outlined"
              placeholder="***"
              margin="normal"
              required
              type="password"
              
          
            />
        
        </Grid>


        
        <Grid item xs={12}>
        <p class="cardholder">Cardholder's Name</p> 
       <TextField
               
               variant="outlined"
               
                margin="normal"
                required
                type="text"
              className='textfieldpayment'
              
              />
         
        </Grid>
      
        
        <Grid xs={12}>
        <Button         
             variant="contained"
         className='paynow'
     
         >
           PAY NOW</Button>    


        </Grid>
      </Grid>
    </Box>


</div>





          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
         <Typography  className='accordianpay769'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  fill="#23BDB8" d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z"></path></svg>
          <span className='credit769'> Netbanking</span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails id='accordiondetails7692'>
          <Typography>
          <div className='choosebank'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12}>
       
        <p className='header'>Pay using Netbanking</p>
        </Grid>
        <Grid item xs={12}>
        <FormControl className='netselection'>
  <InputLabel id="demo-simple-select-autowidth-label">select bank</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bankname}
      label="select bank"
          onChange={bankhandleChange}
        >
          <MenuItem value="AUBL">AU Small Finance Bank</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <Button         
            variant="contained"
         className='paynow1'
     
         >
           PAY NOW</Button>    
        </Grid>
      </Grid>
    </Box>
</div>   
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className='accordianpay769'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 0h24v24H0z" fill="none"></path><path  fill="#23BDB8" d="M21 18v1l-2 2H5l-2-2V5l2-2h14l2 2v1h-9l-2 2v8l2 2h9zm-9-2h10V8H12v8zm4-2a1 1 0 1 1 0-3 1 1 0 0 1 0 3z"></path></svg>
          <span className='credit769'> Wallet</span> 
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails id='accordiondetails7692'>
          <Typography>
          <div className='wallet'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      
        <Grid item xs={12}>
    
        <p className='header'>Pay using wallet</p>

        </Grid>
        <Grid item xs={12}>
        <p class="cardnumber" >Choose a wallet</p>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset">
     
     <RadioGroup aria-label="wallet" name="wallet1" value={walletvalue} onChange={wallethandleChange}>
       <FormControlLabel value="Freecharge" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="Freecharge"  />
       <FormControlLabel value="Mobikwik" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="Mobikwik" />
       <FormControlLabel value="Airtel Money" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="Airtel Money" />
       <FormControlLabel value="JioMoney" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="JioMoney" />
       <FormControlLabel value="PhonePe" control={<Radio   sx={{color: '#23BDB8','&.Mui-checked': {color:'#23BDB8',},}}/>} label="PhonePe" />
      
     </RadioGroup>
   </FormControl>


        </Grid>
        <Grid item xs={12}>
        <Button         
         variant="contained"
         className='paynow2'
     
         >
           PAY NOW</Button>
        </Grid>
      </Grid>
    </Box>
</div>


          </Typography>
        </AccordionDetails>
      </Accordion>
       

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} id='accordiancolor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className='accordianpay769'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20"><path fill-rule="evenodd" fill="#23BDB8" d="M0 1.3C0 .6.6 0 1.3 0h27.4c.7 0 1.3.6 1.3 1.3v17.4c0 .7-.6 1.3-1.3 1.3H1.3C.6 20 0 19.4 0 18.7V1.3zM8 13c1.9 0 2.8-1 2.8-2.6V7H9.2v3.6c0 .7-.4 1.2-1.3 1.2-.8 0-1.3-.5-1.3-1.2V6.9H5v3.6c0 1.5 1 2.6 3 2.6zm5.5 0V11H15c1.4 0 2.1-1 2.1-2 0-1.2-.7-2.1-2.1-2.1h-3.1V13h1.6zm1.2-3.5h-1.2V8.3h1.2c.5 0 .8.2.8.6 0 .4-.3.7-.8.7zm4.7 3.4V7h-1.6V13h1.6zm5.6-3l-1.2-2.5-.3 1.2.6 1.3-1.3 1.3-.3 1.2L25 10zm-1.8-1.3l-.6-1.2-1.4 5 1.3-1.2 1.3-1.3-.6-1.3z"></path></svg>
          <span className='credit769'> UPI</span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails id='accordiondetails7692'>
          <Typography>
        

          <div className='upi'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12}>
     
        <p className='header'>Pay using UPI</p>
        </Grid>
        <Grid item xs={12}>
    
        <p class="cardnumber" >Enter your VPA</p> 
        </Grid>
        <Grid item xs={12}>
        <TextField
           
           variant="outlined"
           
            margin="normal"
            required
            type="text"
            className='textupi'
            
        
          />
        </Grid>
        <Grid xs={12}>
        <Button      variant="contained" className='paynow3'>PAY NOW</Button>
        </Grid>
      </Grid>
    </Box>


        </div>
</Typography>
        </AccordionDetails>
      </Accordion>


</div>














        </Grid>
       
      </Grid>


      </Box  >

 
         
    </div>
    </div>

</div>



    </div>
  );
}
export default Payment;