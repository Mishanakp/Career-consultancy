import React from 'react'
import './Paysection.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Paysection() {
  return (
    <div className='paybox'>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xl={2} lg={2}></Grid>
        <Grid item xl={8} lg={8}>
        
               <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                      
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                        
                            <div className='bgcolor' alt="" uk-cover="" style={{height: "410px", width: "400px"}}>
                            <img className='payimage1' src="https://img.freepik.com/premium-vector/qr-code-black-color-isolated-background-mobile-payment-identity-city-transport-rental-ui_111651-755.jpg?size=338&ext=jpg&ga=GA1.2.1405503288.1661585887"></img> 
                            </div>
                            <canvas className='paycanvas' width="2000" height="1800"></canvas>
                        </div>
                        <div class="uk-first-column">
                            <div class="uk-card-body">
                                <img className='payimage2' src="https://img.freepik.com/free-vector/flat-man-with-mobile-phone-scanning-qr-code-online-payment-internet-shopping-characters-standing-near-big-smartphone-with-qr-symbol-device-screen-using-scanner-id-app-pay_88138-815.jpg?size=626&ext=jpg&ga=GA1.2.1405503288.1661585887"></img>
                                <button className='paybutton'></button>
                            </div>
                        </div>
                    </div>
                    </Grid>
                    <Grid item xl={2} lg={2}></Grid>
               </Grid>
               </Box>
    </div>
  )
}

export default Paysection;