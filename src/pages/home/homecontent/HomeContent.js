import React,{useEffect} from 'react'
import './HomeContent.css'
import HomeSlider from './homeslider/HomeSlider'
import {Grid} from '@mui/material'
import HomeCard from './homecard/HomeCard'
import Aos from 'aos';
import 'aos/dist/aos.css';  
import TreeSection from './treesection/TreeSection'
import StepSection from './stepsection/StepSection'
// import Animation from './animations/Animation'

const HomeContent = () => {
  useEffect(() =>{
    Aos.init({});
},[]);
  return (
    <div className='homeContent'>
      <HomeSlider />
      <Grid container>
        <Grid item md={7} sm={9} xs={12} className='sliderContent'>
            <h1 className='sliderHead'>Make Your Career With Us</h1>
            <p className='sliderPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi volup sit amet consectetur adipisicing elit. Nam modi voluptatibus expedita qui? Quis aspernatur unde perspiciatis dolorem odit doloremque!</p>
            <button className='sliderButton'> <span>Book Now</span> </button>
        </Grid>
      </Grid>
      <HomeCard />  
        {/* <Animation /> */}
     <TreeSection />
     <StepSection />
    </div>
  )
}

export default HomeContent
