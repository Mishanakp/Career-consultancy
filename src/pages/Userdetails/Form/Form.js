import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import './Form.css'
import { Button } from '@mui/material';
function Form() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [age, setAge] = React.useState('');

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  
  return (
    <div>

<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={4}> 
      <Grid item xl={3} lg={3}></Grid>

<Grid item xl={6} lg={6}>
  <div className="submission">
  <div class="uk-card uk-card-default uk-card-body">
  <TextField className="fieldarea" type="text" name="firstname" placeholder="First Name"  variant="outlined" />
  &nbsp;
  &nbsp;

      <TextField className="fieldarea" type="text" name="lastname" placeholder="Last Name"  variant="outlined" />
      <br/>
      <br/>
      <TextField className="fieldarea" type="text" name="email" placeholder="Email"  variant="outlined" />
      &nbsp;
      &nbsp;

      <TextField className="fieldarea" type="text" name="phonenumber" placeholder="Phone Number"  variant="outlined" />
<br/>
<br/>
<TextField className="fieldarea" type="text" name="State" placeholder="State"  variant="outlined" />
&nbsp;
      &nbsp;
<TextField className="fieldarea" type="text" name="City" placeholder="City"  variant="outlined" />



<Box className="messagebox" component="form" sx={{
        '& .MuiTextField-root': { m: 1, },}}noValidate autoComplete="off">
 <TextField
          id="outlined-textarea"
          label="Address"
          placeholder=""
          multiline
        />
        </Box>
<br/>
<div className="radio">
<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        

      </RadioGroup>
    </FormControl>
    <br/>
    <div className="date">

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date Of Birth"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
 </Stack>
    </LocalizationProvider>

</div>
<br/>
<div className="selector">
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Qualification</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Qualification"
          onChange={handleChange1}
        >
          <MenuItem value={10}>Tenth</MenuItem>
          <MenuItem value={20}>Under Graduate</MenuItem>
          <MenuItem value={30}>Graduate</MenuItem>
          <MenuItem value={30}>Post Graduate</MenuItem>
          <MenuItem value={30}>Graduate</MenuItem>

        </Select>
      </FormControl>
    </Box>
</div>
<br/>
<button class="button1"><span>Upload Resume</span> </button>

</div>

        </div>    
      




      
      
</div>


</Grid>


<Grid item xl={3} lg={3}>

</Grid>


       <Link to="/payment" >payment</Link>
     
       </Grid>

</Box>

    </div>
  )
}

export default Form