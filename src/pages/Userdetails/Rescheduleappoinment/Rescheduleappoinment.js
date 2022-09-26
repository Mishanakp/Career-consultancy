import React from 'react'
import { useState } from 'react';
import './Rescheduleappoinment.css'
import { Link } from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Typography from '@mui/material/Typography';


function Rescheduleappoinment() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
        bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
    const [age, setAge] = React.useState('');
 
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open21, setOpen21] = React.useState(false);
    const handleOpen21 = () =>setOpen21(true);
    const handleClose21 = () => setOpen21(false);
  

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div>
        <div className='backgroundresherdule'>
            <div className='reschedulemain'>
        <Box    component="form"
        sx={{ flexGrow: 1 ,background:'white','& .MuiTextField-root': { m: 1, width: '10ch',height:'5ch' },}} className='boxre'  noValidate
      autoComplete="off">
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

        
        {/********************************** */}
        <Grid item lg={2} md={2} sm={1}></Grid>
       
       <Grid item  lg={3} md={3} sm={4}>
       <p className='date2'>Reason</p>
        </Grid>
        <Grid item  lg={5} md={5} sm={6}>
        <TextareaAutosize
      aria-label="minimum height"
      minRows={5}
      className='textarea'
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

        <div uk-slideshow="animation: none" >

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" >

    <ul class="uk-slideshow-items slideshowtime">
        <li>
        
        <h6 className='mngslot'>Morning Sessions:</h6>

        <TextField
          id="outlined-read-only-input"
         
          defaultValue="9:00 AM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="9.30 AM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
              disabled
              id="outlined-disabled"
              defaultValue="10.00 AM"
            /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="10.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="11.00 AM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="11.00 AM"
            /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="11.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="12.00 AM"
            /></span> 

<br/>


        </li>
        <li>
        <h6 className='mngslot'>Afternoon Sessions:</h6>

        <TextField
          id="outlined-read-only-input"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-disabled"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

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
              className="buttonresh"
             
              
              onClick={handleOpen2}
              
          
              >
                Reschedule Appointment</Button>


                <Modal
  open={open2}
  onClose={handleClose2}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="updateModal">
    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead'>
   
     Updated successfully!!!
    </Typography>
    <CheckCircleOutlineIcon  className='checkIconUser' sx={{color:'#23BDB8'}}/>
    <Link to="/userprofile"><Button style={{backgroundColor:'#23BDB8',color:'#F5FFFA'}}>Okay</Button></Link>
  </Box>
</Modal>
                <Button
              variant="contained"
              className="buttonresh1"
             
              onClick={handleOpen21}
              
          
              >
                Cancel Reschedule Request</Button>


                <Modal
  open={open21}
  onClose={handleClose21}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style2} className="updateModal">
    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead1'>
     Cancel Rescheduleappoinment
    </Typography>
    <CheckCircleOutlineIcon  className='checkIconUser' sx={{color:'#d64242'}}/>
 
    <Link to="/userprofile"><Button style={{backgroundColor:'#d64242',color:'#F5FFFA'}}>Okay</Button></Link>
  </Box>
</Modal>

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
        <Box component="form"
        sx={{ flexGrow: 1 ,background:'white','& .MuiTextField-root': { m: 1, width: '10ch',height:'5ch' },}} className='boxre'  noValidate
      autoComplete="off" id='boxre' >
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

        
        {/********************************** */}
        <Grid item xs={.5} sm={.5}></Grid>
       
        <Grid item  xs={11.5} sm={11.5}>
       <p className='date2'>Reson</p>
        </Grid>
        <Grid item xs={4} sm={4}></Grid>
        <Grid item  xs={6}>
        <TextareaAutosize
      aria-label="minimum height"
      minRows={5}
      className='textarea'
      
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

        <div uk-slideshow="animation: none" >

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" >

    <ul class="uk-slideshow-items slideshowtime">
        <li>
        
        <h6 className='mngslot'>Morning Sessions:</h6>

        <TextField
          id="outlined-read-only-input"
         
          defaultValue="9:00 AM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="9.30 AM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
              disabled
              id="outlined-disabled"
              defaultValue="10.00 AM"
            /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="10.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="11.00 AM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="11.00 AM"
            /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="11.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="12.00 AM"
            /></span> 

<br/>
        </li>
        <li>
        <h6 className='mngslot'>Afternoon Sessions:</h6>

        <TextField
          id="outlined-read-only-input"
         
          defaultValue="1:30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="2.00 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
              disabled
              id="outlined-disabled"
              defaultValue="10.00 AM"
            /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="2.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="3.00 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="3.30 PM"
            /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="11.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="12.00 AM"
            /></span> 

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
              className="buttonresh"
             
              
              onClick={handleOpen2}
              
          
              >
                Reschedule Appointment</Button>


                <Modal
  open={open2}
  onClose={handleClose2}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="updateModal">
    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead'>
   
     Updated successfully!!!
    </Typography>
    <CheckCircleOutlineIcon  className='checkIconUser' sx={{color:'#23BDB8'}}/>
    <Link to="/userprofile"><Button style={{backgroundColor:'#23BDB8',color:'#F5FFFA'}}>Okay</Button></Link>
  </Box>
</Modal>
                

       </Grid>
       <Grid item xs={12}>
       <Button
              variant="contained"
              className="buttonresh1"
             
              onClick={handleOpen21}
              
          
              >
                Cancel Reschedule Request</Button>
                              <Modal
  open={open21}
  onClose={handleClose21}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style2} className="updateModal">
    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead1'>
     Cancel Rescheduleappoinment
    </Typography>
    <CheckCircleOutlineIcon  className='checkIconUser' sx={{color:'#d64242'}}/>
 
    <Link to="/userprofile"><Button style={{backgroundColor:'#d64242',color:'#F5FFFA'}}>Okay</Button></Link>
  </Box>
</Modal>

                
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
{/******************************mobile280*********************************** */}
<div className='reschedulemain280'>
        <Box component="form"
        sx={{ flexGrow: 1 ,background:'white','& .MuiTextField-root': { m: 1, width: '10ch',height:'5ch' },}} className='boxre'  noValidate
      autoComplete="off" id='boxre' >
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
        <FormControl sx={{ m: 1,  }} className='select'>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='select'
        >
          <MenuItem value="">
          <em >None</em>

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
      className='textarea'
      
    />
        </Grid>
        <Grid item xs={2}></Grid>
        {/****************************************** */}

        <Grid item xs={.5}></Grid>
       
        <Grid item  xs={11.5}>
       <p className='date'>Select Time</p>
        </Grid>
        
        <Grid item  xs={12}>

        <div uk-slideshow="animation: none" >

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" >

    <ul class="uk-slideshow-items slideshowtime">
        <li>
        
        <h6 className='mngslot'>Morning Sessions:</h6>

        <TextField
          id="outlined-read-only-input"
         
          defaultValue="9:00 AM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="9.30 AM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
              disabled
              id="outlined-disabled"
              defaultValue="10.00 AM"
            /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="10.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="11.00 AM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="11.00 AM"
            /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="11.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="12.00 AM"
            /></span> 

<br/>
        </li>
        <li>
        <h6 className='mngslot'>Afternoon Sessions:</h6>

        <TextField
          id="outlined-read-only-input"
         
          defaultValue="1:30 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="2.00 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
              disabled
              id="outlined-disabled"
              defaultValue="10.00 AM"
            /><span className='timeslote'>
           <TextField
          id="outlined-read-only-input"
         
          defaultValue="2.30 PM"
          InputProps={{
            readOnly: true,
          }}
        /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="3.00 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="3.30 AM"
            /></span> 

<br/>
<TextField
          id="outlined-read-only-input"
         
          defaultValue="4.00 PM"
          InputProps={{
            readOnly: true,
          }}
        /><span className='timeslote'>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="4.30 PM"
            /></span> 

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
              className="buttonresh"
             
              onClick={handleOpen2}
              
          
              >
                Reschedule Appointment</Button>
                <Modal
  open={open2}
  onClose={handleClose2}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="updateModal">
    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead'>
     
    <p className='name'>Consultant name:pooja</p>

    <p className='name'>Booking Date:30/9/2022 </p>
    <p className='name'>Booking Time:12:00PM </p>
     Updated successfully!!!
   
    <CheckCircleOutlineIcon  className='checkIconUser' sx={{color:'#23BDB8'}}/>
    <Link to="/userprofile"><Button style={{backgroundColor:'#23BDB8',color:'#F5FFFA'}}>Okay</Button></Link>
  
    </Typography>
  </Box>
</Modal>
                

       </Grid>
       <Grid item xs={12}>
       <Button
              variant="contained"
              className="buttonresh1"
             
              onClick={handleOpen21}
              
          
              >
                Cancel Reschedule Request</Button>


                <Modal
  open={open21}
  onClose={handleClose21}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style2} className="updateModal">
    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead1'>
     Cancel Rescheduleappoinment
    <CheckCircleOutlineIcon  className='checkIconUser' sx={{color:'#d64242'}}/>
 
    <Link to="/userprofile"><Button style={{backgroundColor:'#d64242',color:'#F5FFFA'}}>Okay</Button></Link>
    </Typography>

</Box>
</Modal>
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













{/************************************************** */}
        </div>
    </div>
  )
}





export default Rescheduleappoinment
