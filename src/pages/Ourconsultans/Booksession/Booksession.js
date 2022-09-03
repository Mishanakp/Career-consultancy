import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './Booksession.css';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';




function Booksession() {
    
    
  const [date, setDate] = React.useState(dayjs());

  return (
    <div className='backgrounddiv'>
    <div className='bgwhite'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '10ch',height:'5ch' },
      }}
      
      noValidate
      autoComplete="off"
    >
    <div >
      {/*Booksession-
      
      <Link to="/login" >login</Link>
      already loagin 
  <Link to="/payment" >payment</Link>*/}
  

  <Box sx={{ flexGrow: 1 }} className="first">
  <Grid container spacing={2}>
          
          <Grid item xl={2} lg={3} md={1} sm={1}></Grid>

   <Grid item xl={12} lg={6} md={12} sm={12} > 
    <h1 className="shatitle">Book a Session</h1> 
   </Grid>
   <Grid item xl={2} lg={3} md={0.1} ></Grid>


    <Grid item lg={2.5}md={4.8} sm={12} className='dateitem'>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
    
        <Grid item lg={9} md={4.5}>
          <h5> Select Date</h5>
          <CalendarPicker date={date} 
          disablePast='true'
          onChange={(newDate) => setDate(newDate)} />
    
        </Grid>
      </LocalizationProvider>

    </Grid>
    
    <Grid item xl={2} lg={2.2} md={0.1} sm={2}></Grid>
  <Grid item xl={2} lg={5.4} md={5.5} sm={8.4} >
      <h5 className='selecttime'>Selct Time </h5>
      <br></br>
      <div uk-slideshow="animation: none" className='timeslider'>
      <div class="uk-position-relative uk-visible-toggle uk-light " tabindex="-1">

        <ul class="uk-slideshow-items">
          <li className='slotslist'>  
            <h6 className='mngslot'>Morning Sessions:</h6>
              <TextField
                id="outlined-read-only-input"
              
                defaultValue="09.00 AM"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
              
                defaultValue="09.30 AM"
                InputProps={{
                  readOnly: true,
                }}
              />
            <TextField
              id="outlined-read-only-input"
            
              defaultValue="10.00 AM"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="10.30 AM"
            />

            <TextField
              id="outlined-read-only-input"
            
              defaultValue="11.00 AM"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
            
              defaultValue="11.30 AM"
              InputProps={{
                readOnly: true,
              }}
            />
        
        <TextField
          id="outlined-read-only-input"
         
          defaultValue="12.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          disabled
          id="outlined-disabled"
         
          defaultValue="12.30 PM"
          
        />
    </li>

    <li className='slotslist'>
        <h6 className='mngslot'>Afternoon Sessions:</h6>

        <TextField
          id="outlined-read-only-input"
         
          defaultValue="01.30 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
         
          defaultValue="02.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        
        <TextField
          id="outlined-read-only-input"
         
          defaultValue="02.30 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-disabled"
         
          defaultValue="03.00 PM"
          
        />
        <TextField
          disabled
          id="outlined-disabled"
         
          defaultValue="03.30 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        
        <TextField
          id="outlined-read-only-input"
         
          defaultValue="04.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
         
          defaultValue="04.30 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
         
          defaultValue="05.00 PM"
          InputProps={{
            readOnly: true,
          }}
        />
        </li>
    </ul>

    <a id='asha' class="uk-position-center-left uk-position-small uk-hidden-hover uk-dark " href="#" uk-slidenav-previous uk-slideshow-item="previous" ></a>
    <a id='asha' class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
    <br/>
    <button className="shabutton" id='bookbutton'>   
        <Link to="/booksession" > <span style={{color:'white'}}>Book Now</span></Link>
    </button>
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
