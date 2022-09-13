import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Userprofile.css"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
function Myprofile() {
  const [data,setData]=useState();
  console.log(data)
  return (
    <div className='boxprofile'>
     
     <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={4}>
<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
  <div className="headerportion1">
  <div className="profileimage">
  <img class="ui medium circular image" src="https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/c0c51ace157998d466f0e07fb3fcd935-rs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20220827%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220827T073114Z&X-Amz-Expires=18000&X-Amz-Signature=a788e20d9e1590f5cd87cb84acff0c65f6acd667d65c77d8c13a8b5413f72cf9&X-Amz-SignedHeaders=host" alt=""/>
  </div>
  </div>
</Grid>
<Grid item xl={4} lg={4} md={4}sm={4} xs={12}>
  <br/>
  <br/>
  <div className="userdetail">
  <label htmlFor="imgs"><CameraAltIcon className="addition" sx={{ color:'#23BDB8',fontSize:'55px' }}/></label>
<h2>POOJA ROY</h2>
<h3>Fresher</h3>
  </div>
</Grid>
<Grid item xl={6} lg={6} md={7} sm={7} xs={12}>
  <div className="email">
    <ul>
      <li>
    <p2 ><EmailIcon sx={{ color:'#23BDB8'}}/> poojaroy@gmail.com</p2>
</li>
<li>
  <p2 ><LocalPhoneIcon sx={{ color:'#23BDB8' }}/> +7673 89994</p2>
  </li>
  <li>
    <p2><AddLocationIcon sx={{ color:'#23BDB8' }}/> Kochi, Kerala</p2>
  </li>
  </ul>
</div>
<br/>
<div className="about">
  <h2>ABOUT</h2>
<p3> 5 years of experience as a Salesman. Motivated, personable business professional with a talent for quickly identifying and resolving problems. Very flexible, versatile, and results-oriented with the ability to build productive relationships.</p3>
</div>
</Grid>
<Grid item xl={2} lg={2} md={1} sm={1}>
<input id="imgs" type="file"  onChange={(e)=>setData(e.target.files)}/>
</Grid>
        </Grid>
        </Box>
    </div>
  )
}
export default Myprofile




















