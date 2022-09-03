import React,{useEffect} from 'react'
import './HomeContent.css'
import HomeSlider from './homeslider/HomeSlider'
import {Grid} from '@mui/material'
import HomeCard from './homecard/HomeCard'
import Aos from 'aos';
import 'aos/dist/aos.css';  
import TreeSection from './treesection/TreeSection'
import StepSection from './stepsection/StepSection'
// import Animations2 from './animations2/Animations2'
import Animations3 from './animations3/Animations3'
import HomeCateg from './homeCateg/HomeCateg'
import Testimonials from './testimonials/Testimonials'
import {Link} from 'react-router-dom'
// import Animations4 from './animations4/Animations4'
 
// import Animation from './animations/Animation'

const HomeContent = () => {
  useEffect(() =>{
    Aos.init({});
},[]);
  return (
    <div className='prihomeContent'>
      <HomeSlider />
      
      <Grid container>
        <Grid item md={7} sm={9} xs={12} className='prisliderContent'>
            <h1 className='prisliderHead'>Make Your Career With Us</h1>
            <p className='prisliderPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi volup sit amet consectetur adipisicing elit. Nam modi voluptatibus expedita qui? Quis aspernatur unde perspiciatis dolorem odit doloremque!</p>
            <Link to="login"><button className='prisliderButton'> <span>Book Now</span> </button></Link>
            {/* <Animations2 /> */}
            <Animations3 />
        </Grid>
      </Grid>
      
      <HomeCard />  
        {/* <Animation /> */}
        {/* <Animations4 />   */}
     <TreeSection />
    
     <StepSection />
     <HomeCateg />
   
     <Testimonials />
     
     <img src="https://www.bostondynamics.com/themes/custom/isovera/images/fading-grid-background-bottom.png" className='netImage' alt="imageHome"></img>
    </div>
  )
}

export default HomeContent
