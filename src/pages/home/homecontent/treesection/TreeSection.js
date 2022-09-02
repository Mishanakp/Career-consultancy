import React from 'react'
import './TreeSection.css'
import {Grid} from '@mui/material'
import treeImage from '../../../../Assets/homeImages/treegreen.jpeg'
const TreeSection = () => {
  return (
    <div className='treeSection'> 
    <h1 className='treeHead'>Make The Right Choice</h1>
    <Grid container>
      <Grid item xs={12}>
        <div className='orig'>
      <div className='line1'><div className='post1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="200">
          <h1 className='lineHead'>Business</h1></div></div>
        <div className='line11'></div>
        <div className='line2'><div className='post1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="400">
          <h1 className='lineHead'>Technology</h1></div></div>
        <div className='line21'></div>
        <div className='line3'><div className='post1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="600">
        <h1 className='lineHead'>Arts</h1></div></div>
        <div className='line31'></div>
        <div className='line4'><div className='post1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="200">
        <h1 className='lineHead'>Aviation</h1></div></div>
        <div className='line41'></div>
        <div className='line5'><div className='post1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="400">
        <h1 className='lineHead'>Media</h1></div></div>
        <div className='line51'></div>
        <div className='line6'><div className='post1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="600">
        <h1 className='lineHead'>Medical</h1></div></div>
        <div className='line61'></div>
        <img src={treeImage} alt="treeImage" className='treeImage' /> 
        </div>
        <div className='dup'>
      <div className='line1'> 
          <h1 className='lineHead'>Business</h1></div> 
        <div className='line11'></div>
        <div className='line2'> 
          <h1 className='lineHead'>Technology</h1></div> 
        <div className='line21'></div>
        <div className='line3'> 
        <h1 className='lineHead'>Arts</h1></div> 
        <div className='line31'></div>
        <div className='line4'> 
        <h1 className='lineHead'>Aviation</h1></div> 
        <div className='line41'></div>
        <div className='line5'> 
        <h1 className='lineHead'>Media</h1></div> 
        <div className='line51'></div>
        <div className='line6'> 
        <h1 className='lineHead'>Medical</h1></div> 
        <div className='line61'></div>
        <img src={treeImage} alt="treeImage" className='treeImage' /> 
        </div>
      </Grid>
    </Grid>
   
    </div> 
  )
}

export default TreeSection
