
import React from 'react'
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import classes from './Viewprofile.module.css';
import education from '../../../Assets/booksession/education.png';
import tick from '../../../Assets/booksession/tick.png';
import language from '../../../Assets/booksession/language.png';



function Viewprofile() {
  
  return (
    <div>
<<<<<<< HEAD
     
     
=======
      <Box sx={{ flexGrow: 1 }} >
      <Grid  container spacing={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className={classes.top}>
            </div>
          </Grid>
          <Grid item  lg={3.4} md={3} sm={12} xs={12}>
          <img className={classes.profileimgn} src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
          
            <br/>
            <ul className={classes.ulnamen}>
          <p ><b>PUJA ROY</b></p>
                <p className={classes.guide}>Career Guide</p></ul>
         
          </Grid>


          <Grid item xl={6} lg={8.5} md={9} sm={12} xs={12}>
  <div className={classes.email}>
    <ul>
      <li>
    <p2 ><img src={education} alt="edu" id={classes.iconimg}  /> QUALIFICATION</p2>
    <li className={classes.sublistq}>Masters in Business Administration</li>
</li>
<li>
  <p2 ><img src={language} alt="edu" id={classes.iconimg}  /> LANGUAGES SPOKEN</p2>
  <li className={classes.sublistq}>English, Malayalam, Hindi</li>
  </li>
  <li>
    <p2 id={classes.nxt}> <img src={tick} alt="edu" id={classes.iconimg}   /> NEXT AVAILABLE AT</p2>
    <li className={classes.sublistq}>Aug 26, 2022 2:00 PM</li>
  </li>
  </ul>
</div>
<br/>

</Grid>
         

          <Grid item xl={4} lg={7.5} md={7.7} sm={10.7} xs={10.3} className={classes.aboutcounsellor}>
          <h3 style={{color:'#0e314c'}}><b>About</b></h3>
                <p >
              Have been conducting career guidance workshops in 30 schools in Mumbai, Pune, 
                Panchgani, Nasik and Goa for the past 5 years Have engaged with approx. 3,000 students both 
                collectively in groups as well as individually for various programs Deep knowledge of various
                 career options available and the course details Handled more than 5000
                 career queries on email over the last 5 years Commerce Graduate and an MBA in Finance from IIM Indore.</p>
                 </Grid>

                 <Grid item lg={3} md={3.2} sm={3.5} xs={11} className={classes.counsellorbutton}>
              <button className={classes.probutton}>
               
                <Link to="/booksession" > <span style={{color:'white'}}>Book Session</span></Link>
                </button>
                </Grid>
            
               
            

      </Grid>
      </Box>
>>>>>>> 2a93fcf31e737620dd89d0fef3faa8b5fd056949
    </div>
  )
}

export default Viewprofile
