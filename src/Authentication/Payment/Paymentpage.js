import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './Payment.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Netbanking from './Netbanking';
import Paymentresponsive from './Paymentresponsive';



import { Divider } from '@mui/material';

import CreditandDebit from './CreditandDebit';
import Wallet from './Wallet';
import Upi from './Upi';






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


 function Paymentpage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (<div>
    <div className='paymentlapview'>
    <div id='paymerntgid'>
    <div className='paymentcard'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        
        <Grid xs={12}>
          <Item >
         
          <Box id='boxpayment'
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
 
 <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className='verticaltabspayment'
      >
 <Tab icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id='creditanddebitimg'><path  fill="#23BDB8" d="M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z"></path></svg>} iconPosition="start"  label="QR Code"{...a11yProps(0)} id='icon' />
     <Divider/>
        <Tab icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id='creditanddebitimg'><path  fill="#23BDB8" d="M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z"></path></svg>} iconPosition="start"  label="Credit/Debit card"{...a11yProps(2)} id='icon' />
     <Divider/>
        <Tab icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id='netbankingimageicon'><path  fill="#23BDB8" d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z"></path></svg>} iconPosition="start"  label="Netbanking"{...a11yProps(4)} id='icon'/>
        <Divider/>
        <Tab icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id='walletimageicon'><path d="M0 0h24v24H0z" fill="none" ></path><path  fill="#23BDB8" d="M21 18v1l-2 2H5l-2-2V5l2-2h14l2 2v1h-9l-2 2v8l2 2h9zm-9-2h10V8H12v8zm4-2a1 1 0 1 1 0-3 1 1 0 0 1 0 3z"></path></svg>} iconPosition="start"  label="Wallet"{...a11yProps(6)} id='icon'/>
        <Divider/>
        <Tab icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" id='upiimagicon'><path fill-rule="evenodd" fill="#23BDB8" d="M0 1.3C0 .6.6 0 1.3 0h27.4c.7 0 1.3.6 1.3 1.3v17.4c0 .7-.6 1.3-1.3 1.3H1.3C.6 20 0 19.4 0 18.7V1.3zM8 13c1.9 0 2.8-1 2.8-2.6V7H9.2v3.6c0 .7-.4 1.2-1.3 1.2-.8 0-1.3-.5-1.3-1.2V6.9H5v3.6c0 1.5 1 2.6 3 2.6zm5.5 0V11H15c1.4 0 2.1-1 2.1-2 0-1.2-.7-2.1-2.1-2.1h-3.1V13h1.6zm1.2-3.5h-1.2V8.3h1.2c.5 0 .8.2.8.6 0 .4-.3.7-.8.7zm4.7 3.4V7h-1.6V13h1.6zm5.6-3l-1.2-2.5-.3 1.2.6 1.3-1.3 1.3-.3 1.2L25 10zm-1.8-1.3l-.6-1.2-1.4 5 1.3-1.2 1.3-1.3-.6-1.3z"></path></svg>} iconPosition="start"  label="UPI"{...a11yProps(8)} id='icon'/>
        <Divider/>
      </Tabs>
      <TabPanel value={value} index={2}>
      

      </TabPanel>
      <TabPanel value={value} index={4}>
<CreditandDebit/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Netbanking/>
      </TabPanel>
      <TabPanel value={value} index={8}>
   <Wallet/>
      </TabPanel>
      <TabPanel value={value} index={10}>
    <Upi/>
      </TabPanel>
    </Box>
















   
          </Item>
        </Grid>

      </Grid>
    </Box>
    </div>
    </div>
    </div>
<div className='payment769'>
<Paymentresponsive/>

</div>



    </div>
  );
}
export default Paymentpage;

