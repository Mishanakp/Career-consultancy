import React from 'react'
import './TreeSection.css'
import {Grid} from '@mui/material'
import treeImage from '../../../../Assets/homeImages/treegreen.jpeg'
const TreeSection = () => {
  return (
    <div className='pritreeSection'> 
    <h1 className='pritreeHead'>Make The Right Choice</h1>
    <Grid container>
      <Grid item xs={12}>
        <div className='priorig'>
      <div className='priline1'><div className='pripost1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="200">
          <h1 className='prilineHead'>Business</h1></div></div>
        <div className='priline11'></div>
        <div className='priline2'><div className='pripost1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="400">
          <h1 className='prilineHead'>Technology</h1></div></div>
        <div className='priline21'></div>
        <div className='priline3'><div className='pripost1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="600">
        <h1 className='prilineHead'>Arts</h1></div></div>
        <div className='priline31'></div>
        <div className='priline4'><div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="200">
        <h1 className='prilineHead'>Aviation</h1></div></div>
        <div className='priline41'></div>
        <div className='priline5'><div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="400">
        <h1 className='prilineHead'>Media</h1></div></div>
        <div className='priline51'></div>
        <div className='priline6'><div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="600">
        <h1 className='prilineHead'>Medical</h1></div></div>
        <div className='priline61'></div>
        <img src={treeImage} alt="treeImage" className='pritreeImage' /> 
        </div>
        <div className='pridup'>
      <div className='priline1'> 
          <h1 className='prilineHead'>Business</h1></div> 
        <div className='priline11'></div>
        <div className='priline2'> 
          <h1 className='prilineHead'>Technology</h1></div> 
        <div className='priline21'></div>
        <div className='priline3'> 
        <h1 className='prilineHead'>Arts</h1></div> 
        <div className='priline31'></div>
        <div className='priline4'> 
        <h1 className='prilineHead'>Aviation</h1></div> 
        <div className='priline41'></div>
        <div className='priline5'> 
        <h1 className='prilineHead'>Media</h1></div> 
        <div className='priline51'></div>
        <div className='priline6'> 
        <h1 className='prilineHead'>Medical</h1></div> 
        <div className='priline61'></div>
        <img src={treeImage} alt="treeImage" className='pritreeImage' /> 
        </div>
      </Grid>
    </Grid>
   
    </div> 
  )
}

export default TreeSection
