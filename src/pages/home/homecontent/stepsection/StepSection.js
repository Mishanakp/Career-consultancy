import React from 'react'
import {Grid} from '@mui/material'
import './StepSection.css'  

const StepSection = () => {
  return (
    <div className='pristepSection'>
      <h1 className='prihowIt'>How It Works</h1> 
      <div className="prihow">
      <Grid container>
        <Grid item sx={12} sm={2.5} className="pristep1"> 
            <span uk-icon="icon:  thumbnails; ratio: 3" className='priicon1'></span>
            <h5 className='prifirstSubhead'>STEP 1</h5>
            <h1 className='prifirstHead'>Choose a Service</h1>
            <p className='prifirstPara'>Find the best coaching option to help you to tackle(and overcome) your current career obstacle.</p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='priicon2'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='priicon2dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="pristep2"> 
            <span uk-icon="icon:  users; ratio: 3" className='priicon1'></span>
            <h5 className='prifirstSubhead2'>STEP 2</h5>
            <h1 className='prifirstHead2'>Book a Career Coach</h1>
            <p className='prifirstPara2'>Explore our roster of top-notch career coaches who provide the service you need. Check out reviews from other customers to help you pick the right one. </p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='priicon3'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='priicon3dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="pristep3"> 
            <span uk-icon="icon:  calendar; ratio: 3" className='priicon1'></span>
            <h5 className='prifirstSubhead3'>STEP 3</h5>
            <h1 className='prifirstHead3'>Book On a Time</h1>
            <p className='prifirstPara3'>Your career coach will reach out to you within one business day to schedule your first appointment.</p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='priicon4'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='priicon4dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="pristep4"> 
            <span uk-icon="icon: check; ratio: 3" className='priicon1'></span>
            <h5 className='prifirstSubhead4'>STEP 4</h5>
            <h1 className='prifirstHead4'>Get Started!!</h1>
            <p className='prifirstPara4'>Meet with your career coach for a session by video_and kick your career into gear.</p>
        </Grid> 
       
    </Grid> 
      </div> 
    </div>
  )
}

export default StepSection
