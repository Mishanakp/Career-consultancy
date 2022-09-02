import React from 'react'
import './Rescheduleappoinment.css'

import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


function Rescheduleappi() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <div>
        <div className='backgroundresherdule'>
            <div className='reschedulemain'>
        <Box sx={{ flexGrow: 1 ,background:'white'}} id='boxre' >
        <Grid container spacing={2}>
        <Grid item  lg={12} md={12} sm={12}>
        <h1 className="contenthead1">Reschedule Appointment</h1>
        </Grid>
        {/*************************************8 */}
        <Grid item lg={2} md={2} sm={1}></Grid>
        
         <Grid item  lg={8} md={8} sm={10}>
        <p className='appoiment'>Appointment Details</p>
          </Grid>
          <Grid item lg={2} md={2} sm={1}></Grid>
{/*********************************** */}
          <Grid item lg={2} md={2} sm={1}></Grid>
          
        
        <Grid item  lg={3} md={3} sm={4}>
        <p className='date'>Counselor</p>
            <p className='date'>Specialization</p>
            <p className='date'>Date:</p>
            <p className='date'>Time:</p>

         </Grid>
         <Grid item  lg={5} md={5} sm={6}>
         <p className='date1'>Pooja Roy</p>
            <p className='date1'>Anxiety, Depression,</p>
            <p className='date1'>3/09/2022</p>
            <p className='date1'>12.00PM</p>
            
         </Grid>
         <Grid item lg={2} md={2} sm={1}></Grid>
          
       
{/**********************************************/}

         <Grid item lg={2} md={2} sm={1}></Grid>
        
        <Grid item  lg={8} md={8} sm={10}>
       <p className='appoiment'>Reason </p>
         </Grid>
         <Grid item lg={2} md={2} sm={1}></Grid>
         {/*********************** */}

         <Grid item lg={2} md={2} sm={1}></Grid>
       
       <Grid item  lg={3} md={3} sm={4}>
       <p className='date2'>Reschedule Reason</p>
        </Grid>
        <Grid item  lg={5} md={5} sm={6}>
        <FormControl sx={{ m: 1, minWidth: 200 }} >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          id='select'
        >
          <MenuItem value="">
          
          </MenuItem>
          <MenuItem value={10}>Health issue</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
        </Grid>
        <Grid item lg={2} md={2} sm={1}></Grid>
        {/********************************** */}
        <Grid item lg={2} md={2} sm={1}></Grid>
       
       <Grid item  lg={3} md={3} sm={4}>
       <p className='date2'>Explanation</p>
        </Grid>
        <Grid item  lg={5} md={5} sm={6}>
        <TextareaAutosize
      aria-label="minimum height"
      minRows={5}
      id='textarea'
      style={{ width: 200 }}
    />
        </Grid>
        <Grid item lg={2} md={2} sm={1}></Grid>
        {/****************************************** */}

        <Grid item lg={2} md={2} sm={1}></Grid>
       
       <Grid item  lg={3} md={3} sm={4}>
       <p className='date'>Select Time</p>
        </Grid>
        <Grid item  lg={5} md={5} sm={6}>

        <div uk-slideshow="animation: push" >

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" >

    <ul class="uk-slideshow-items" id='slideshowtime'>
        <li>
        
        <h6 className='mngslot'>Morning Sessions:</h6>

        <Button variant="outlined" id='out'>9:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out'>9:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out1'>10:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out'>10:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out'>11:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out1'>11:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out'>12:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out1'>12:30 AM</Button></span> 
<br/>
<br/>
        </li>
        <li>
        <h6 className='mngslot'>Afternoon Sessions:</h6>


<Button variant="outlined" id='out'>9:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out'>9:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out1'>10:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out'>10:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out'>11:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out1'>11:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out'>11:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out1'>11:30 AM</Button></span> 
<br/>
<br/>
        </li>
        
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

<ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>

         
      
        </Grid>
        <Grid item lg={2} md={2} sm={1}></Grid>
       {/********************************************* */}  
       <Grid item lg={12} md={12} sm={12}>
       <Button
              variant="contained"
              id="buttonresh"
             
              
              
          
              >
                Reschedule Appointment</Button>
                <Button
              variant="contained"
              id="buttonresh1"
             
              
              
          
              >
                Cancel Reschedule Request</Button>

       </Grid>
        
   
         {/*********************** */}
   <Grid item lg={12} md={12} sm={12}>
    <div className='reshedulepadding'></div>
   </Grid>

     </Grid>
      </Box>
      
   
    </div>
<div>
</div>
{/******************************mobile425*********************************** */}
<div className='reschedulemain425'>
        <Box sx={{ flexGrow: 1 ,background:'white'}} id='boxre' >
        <Grid container rowSpacing={2}>
        <Grid item   xs={12}>
        <h1 className="contenthead1">Reschedule Appointment</h1>
        </Grid>
        {/*************************************8 */}
        <Grid item sm={.5} xs={.5}></Grid>
        
         <Grid item sm={11} xs={11}>
        <p className='appoiment'>Appointment Details</p>
          </Grid>
          <Grid item xs={.5} sm={.5}></Grid>
{/*********************************** */}
          <Grid item xs={.5} sm={.5}></Grid>
          
        
        <Grid item  xs={5} sm={5}>
        <p className='date'>Counselor</p>
            <p className='date'>Specialization</p>
            <p className='date'>Date:</p>
            <p className='date'>Time:</p>

         </Grid>
         <Grid item sm={6}  xs={6}>
         <p className='date1'>Pooja Roy</p>
            <p className='date1'>Anxiety, Depression,</p>
            <p className='date1'>3/09/2022</p>
            <p className='date1'>12.00PM</p>
            
         </Grid>
         <Grid item xs={.5} sm={.5}></Grid>
          
       
{/**********************************************/}

         <Grid item xs={.5} sm={.5}></Grid>
        
        <Grid item  xs={11} sm={11}>
       <p className='appoiment'>Reason </p>
         </Grid>
         <Grid item xs={.5} sm={.5}></Grid>
         {/*********************** */}

         <Grid item xs={.5} sm={.5}></Grid>
       
       <Grid item  xs={11.5} sm={11.5}>
       <p className='date2'>Reschedule Reason</p>
        </Grid>
        <Grid item xs={4} sm={4}></Grid>
        <Grid item  xs={6} sm={6}>
        <FormControl sx={{ m: 1,  }} id='select'>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          id='select'
        >
          <MenuItem value="">
          
          </MenuItem>
          <MenuItem value={10}>Health issue</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
        </Grid>
        <Grid item xs={2} sm={2}></Grid>
        {/********************************** */}
        <Grid item xs={.5} sm={.5}></Grid>
       
        <Grid item  xs={11.5} sm={11.5}>
       <p className='date2'>Explanation</p>
        </Grid>
        <Grid item xs={4} sm={4}></Grid>
        <Grid item  xs={6}>
        <TextareaAutosize
      aria-label="minimum height"
      minRows={5}
      id='textarea'
      
    />
        </Grid>
        <Grid item xs={2}></Grid>
        {/****************************************** */}

        <Grid item xs={.5}></Grid>
       
        <Grid item  xs={11.5}>
       <p className='date'>Select Time</p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item  xs={10}>

        <div uk-slideshow="animation: push" >

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" >

    <ul class="uk-slideshow-items" id='slideshowtime'>
        <li>
        
        <h6 className='mngslot'>Morning Sessions:</h6>

        <Button variant="outlined" id='out'>9:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out'>9:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out1'>10:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out'>10:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out'>11:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out1'>11:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out'>12:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out1'>12:30 AM</Button></span> 
<br/>
<br/>
        </li>
        <li>
        <h6 className='mngslot'>Afternoon Sessions:</h6>


<Button variant="outlined" id='out'>9:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out'>9:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out1'>10:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out'>10:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out'>11:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out1'>11:30 AM</Button></span> 
<br/>
<br/>
<Button variant="outlined" id='out'>11:00 AM</Button><span className='timeslote'><Button variant="outlined" id='out1'>11:30 AM</Button></span> 
<br/>
<br/>
        </li>
        
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

<ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>

         
      
        </Grid>
    
       {/********************************************* */}  
       <Grid item xs={12}>
       <Button
              variant="contained"
              id="buttonresh"
             
              
              
          
              >
                Reschedule Appointment</Button>
                

       </Grid>
       <Grid item xs={12}>
       <Button
              variant="contained"
              id="buttonresh1"
             
              
              
          
              >
                Cancel Reschedule Request</Button>
                </Grid>
         {/*********************** */}
   <Grid item lg={12} md={12} sm={12}>
    <div className='reshedulepadding'></div>
   </Grid>

     </Grid>
      </Box>
      
   
    </div>
<div>
</div>










{/********************************* */}







        </div>
    </div>
  )
}


export default Rescheduleappi

