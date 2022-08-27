import React from 'react'
import {Grid} from '@mui/material'
import './StepSection.css' 
const StepSection = () => {
  return (
    <div className='stepSection'>
      <h1 className='howIt'>How It Works</h1>
      <Grid container>
        <Grid item sx={12}>
        <img className='stepImage' src="https://i.pinimg.com/originals/37/cb/7c/37cb7cabd085c5b6b57a8de629b540a6.jpg" alt="" />
        </Grid>
      </Grid>
    </div>
  )
}

export default StepSection
