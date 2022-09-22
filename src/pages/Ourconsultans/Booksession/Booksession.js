import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './Booksession.css';
//import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import SignUp from '../../../Authentication/SignUp/SingUp';

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



function Booksession() {

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(dayjs());

  return (
    <div className='backgrounddiv'>
    <div className='bgwhite'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '10ch',height:'6ch' },
      }}
      
      noValidate
      autoComplete="off"
    >
    <div >
  

  <Box sx={{ flexGrow: 1 }} className="first">
  <Grid container spacing={2}> 
          <Grid item xl={2} lg={3} md={1} sm={1} ></Grid>

   <Grid item xl={12} lg={6} md={12} sm={12} > 
    <h1 className="titlebooksession">Book a Session</h1> 
   </Grid>
   <Grid item xl={2.2} lg={3} md={0.1} ></Grid>


    <Grid item xl={3} lg={2.5}md={4.8} sm={12} className='dateitem'>

      <LocalizationProvider dateAdapter={AdapterDayjs} >
    
        <Grid item lg={9} md={4.5} >
          <h5 className='dateselection'> Select Date</h5>
          <StaticDatePicker
          className='bookingcalender'
        displayStaticWrapperAs="desktop"
        disablePast='true'
        minDate={dayjs('2022-08-01')}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
             />
    
        </Grid>
      </LocalizationProvider>
      
      

    </Grid>
    
    <Grid item xl={0.2} lg={2.2} md={0.1} sm={2}></Grid>
  <Grid item xl={3.3} lg={5.4} md={5.5} sm={8.4} >
      <h5 className='selecttime'>Select Time </h5>
      <br></br>
      <div uk-slideshow="animation: none" className='timeslider'>
      <div class="uk-position-relative uk-visible-toggle uk-light " tabindex="-1">

        <ul class="uk-slideshow-items">
          <li className='slotslist'>  
            <h6 className='mngslot'>Morning Sessions:</h6>
              <TextField
                id="outlined-read-only-input"
              className='textboxtime'
                defaultValue="09.00 AM"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                className='textboxtime'
                defaultValue="09.30 AM"
                InputProps={{
                  readOnly: true,
                }}
              />
            <TextField
              id="outlined-read-only-input"
              className='textboxtime'
              defaultValue="10.00 AM"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="10.30 AM"
              className='textboxtime'
            />

            <TextField
              id="outlined-read-only-input"
              className='textboxtime'
              defaultValue="11.00 AM"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
              className='textboxtime'
              defaultValue="11.30 AM"
              InputProps={{
                readOnly: true,
              }}
            />
        
        <TextField
          id="outlined-read-only-input"
          className='textboxtime'
          defaultValue="12.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          disabled
          id="outlined-disabled"
          className='textboxtime'
          defaultValue="12.30 PM"
          
        />
    </li>

    <li className='slotslist'>
        <h6 className='mngslot'>Afternoon Sessions:</h6>

        <TextField
          id="outlined-read-only-input"
          className='textboxtime'
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          className='textboxtime'
          defaultValue="02.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        
        <TextField
          id="outlined-read-only-input"
          className='textboxtime'
          defaultValue="02.30 PM"
          InputProps={{
            readOnly: true,
          }}
        />
         <TextField
          id="outlined-read-only-input"
          className='textboxtime'
          defaultValue="03.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          disabled
          id="outlined-disabled"
          className='textboxtime'
          defaultValue="03.30 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        
        <TextField
          id="outlined-read-only-input"
          className='textboxtime'
          defaultValue="04.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          className='textboxtime'
          defaultValue="04.30 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          className='textboxtime'
          defaultValue="05.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        </li>
    </ul>

    <a  class="uk-position-center-left uk-position-small uk-hidden-hover uk-dark " href="#" uk-slidenav-previous uk-slideshow-item="previous" ></a>
    <a  class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
    <br/>
    {/* <Link to="/SignUp" ></Link>  */}
    <button className="booksessionpagebutton" onClick={handleOpen}>   
        <span style={{color:'white'}}>Book Now</span>
    </button>
    
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="updatebookingModal">
    <Typography id="modal-modal-title" variant="h6" component="h2" className='bookmodalupdatehead'>
     Consultant name: Pooja Roy
     <br/> <br/> 
     Booking date: 03/10/2022
     <br/> <br/> 
     Booking Time: 2.00 PM
    </Typography>
    <br/> <br/>
    &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp;
    <Link to="./Booksession.js" >
    <span style={{color:'red'}}>Cancel</span>
    </Link>
   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
    <Link to="/SignUp" >
    <span sx={{color:'#23BDB8',fontSize:'122px'}} >Confirm</span>
    </Link>
  </Box>
</Modal>  
    <br/><br/><br/>  
</Grid>





    
</Grid>
</Box>

    </div>
    </Box>
    </div>
    </div>
  )
}

export default Booksession
