import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
function Viewprofile() {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
<Grid item xl={12}>
  <div className="headerportion">
  </div>
</Grid>
<Grid item xl={5}>
  <div className="profileimage">
  <img class="ui medium circular image" src="https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/c0c51ace157998d466f0e07fb3fcd935-rs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20220827%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220827T073114Z&X-Amz-Expires=18000&X-Amz-Signature=a788e20d9e1590f5cd87cb84acff0c65f6acd667d65c77d8c13a8b5413f72cf9&X-Amz-SignedHeaders=host"/>
  </div>
</Grid>
<Grid item xl={7}>
  <div className="userdetail">
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className="inputs" type="text" name="firstname" placeholder="First Name"  variant="outlined" />
      <TextField className="inputs" type="text" name="lastname" placeholder="Last Name"  variant="outlined" />
      <br/>
      <TextField className="inputs" type="text" name="email" placeholder="Email"  variant="outlined" />
      <TextField className="inputs" type="text" name="phonenumber" placeholder="Phone Number"  variant="outlined" />
</Box>
  </div>
</Grid>
        </Grid>
        </Box>
    </div>
  )
}
export default Viewprofile




















