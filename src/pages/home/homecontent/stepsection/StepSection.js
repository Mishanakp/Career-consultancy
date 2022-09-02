import React from 'react'
import {Grid} from '@mui/material'
import './StepSection.css'  

const StepSection = () => {
  return (
    <div className='stepSection'>
      <h1 className='howIt'>How It Works</h1> 
      <div className="how">
      <Grid container>
        <Grid item sx={12} sm={2.5} className="step1"> 
            <span uk-icon="icon:  thumbnails; ratio: 3" className='icon1'></span>
            <h5 className='firstSubhead'>STEP 1</h5>
            <h1 className='firstHead'>Choose a Service</h1>
            <p className='firstPara'>Find the best coaching option to help you to tackle(and overcome) your current career obstacle.</p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='icon2'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='icon2dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="step2"> 
            <span uk-icon="icon:  users; ratio: 3" className='icon1'></span>
            <h5 className='firstSubhead2'>STEP 2</h5>
            <h1 className='firstHead2'>Book a Career Coach</h1>
            <p className='firstPara2'>Explore our roster of top-notch career coaches who provide the service you need. Check out reviews from other customers to help you pick the right one. </p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='icon3'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='icon3dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="step3"> 
            <span uk-icon="icon:  calendar; ratio: 3" className='icon1'></span>
            <h5 className='firstSubhead3'>STEP 3</h5>
            <h1 className='firstHead3'>Book On a Time</h1>
            <p className='firstPara3'>Your career coach will reach out to you within one business day to schedule your first appointment.</p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='icon4'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='icon4dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="step4"> 
            <span uk-icon="icon: check; ratio: 3" className='icon1'></span>
            <h5 className='firstSubhead4'>STEP 4</h5>
            <h1 className='firstHead4'>Get Started!!</h1>
            <p className='firstPara4'>Meet with your career coach for a session by video_and kick your career into gear.</p>
        </Grid> 
       
    </Grid> 
      </div> 
    </div>
  )
}

export default StepSection
