import {React,useState} from 'react'
import session from '../../../Assets/userprofile/session.jpg'
import {Grid} from '@mui/material'
import './Userprofile.css'
import Booksession from '../../Ourconsultans/Booksession/Booksession'
import {Link} from 'react-router-dom'
import EventIcon from '@mui/icons-material/Event';
import CelebrationIcon from '@mui/icons-material/Celebration';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function Mysessions() {
  const [value, setValue] = useState('sessiontrue');
let [value1,setValue1]=useState(false)
const handleChange = (event) => {
  setValue(event.target.value);
};
  return (<div className='ramisession'>
   
    <div className='radio'>
<FormControl>
     
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
         value={value}
        onChange={handleChange}
      >
        <FormControlLabel className='radiosession' value="sessiontrue" control={<Radio  style={{color:'#0e314C'}}/>} label="Upcoming Session" />
        <FormControlLabel  className='radiosession' value="sessionfalse" control={<Radio  style={{color:'#0e314C'}}/>} label="Completed Session" />
       
      </RadioGroup>
    </FormControl></div>{value1?   
  (value === 'sessiontrue')?  <div className='session1'>
  <Grid container>
    <Grid lg={2.7}> </Grid>
    <Grid xl={7}> 
    <div className='navsession'>
    
    <h6 className='sessionhead3'><EventIcon/>Upcoming Sessions</h6>
    </div>
    <div className='sessionwrap1'>
   <div><CelebrationIcon className="svg_icons" style={{color:'#23BDB8'}} />
   <h2 className='sessionhead2'>Session Booked!</h2> 
   <div className='sessiontable'>
   <table class="uk-table">
  
  
  <tbody className='table'>
      <tr>
          <td><span className='tdleft'>Consultant</span></td>
          <td><h6 className='tdright'>Puja Roy</h6></td>
          
      </tr>
      <tr>
      <td><span className='tdleft'>Date</span></td>
          <td><h6 className='tdright'>24 Septemper 2022</h6></td>
      </tr>
      <tr>
      <td><span className='tdleft'>Time</span></td>
          <td><h6 className='tdright'>11 00</h6></td>
      </tr>
      <tr>
      <td><span className='tdleft'>Duration</span></td>
          <td><h6 className='tdright'>Deep dive(1 hour)</h6></td>
      </tr>
  </tbody>
</table>
   </div>
  
   </div>
<button className='resessionbutton'><Link to="/rescheduleappoinment"  className='sessionbuttonlink'>Reshedule Session</Link></button>
      </div></Grid>
    
    <Grid xl={2.5}> </Grid>
 
    </Grid>

</div>:  <div className='session1'>
  <Grid container>
    <Grid lg={2.7}> </Grid>
    <Grid xl={7}> 
    <div className='navsession'>
    
    <h6 className='sessionhead3'><EventIcon/>Completed Sessions</h6>
    </div>
    <div className='sessionwrap1'>
   <div>
  
   <div className='sessiontable1'>
   <table class="uk-table">
  <caption></caption>
  <thead>
        <tr>
            <th><h1 className='tablesessionhead'>Consultant</h1></th>
            <th><h1 className='tablesessionhead'>Date</h1></th>
            <th><h1 className='tablesessionhead2'>Time</h1></th>
        </tr>
    </thead>
  <tbody className='table'>
      <tr>
          <td><span className='tdleft1'>Puja Roy</span></td>
          <td><span className='tdleft1'>24 August 2022</span></td>
          <td><span className='tdleft2'>11 30</span></td>
          
      </tr>
      <tr>
      <td><span className='tdleft1'>Pranav Bhatya</span></td>
          <td><span className='tdleft1'>20 July 2022</span></td>
          <td><span className='tdleft2'>12 00</span></td>
      </tr>
      <tr>
      <td><span className='tdleft1'>Leena Joseph</span></td>
          <td><span className='tdleft1'>8 July 2022</span></td>
          <td><span className='tdleft2'> 02 00</span></td>
      </tr>
      <tr>
      <td><span className='tdleft1'>Zakaria</span></td>
          <td><span className='tdleft1'>20 June 2022</span></td>
          <td><span className='tdleft2'>01 30</span></td>
      </tr>
  </tbody>
</table>
   </div>
  
   </div>

      </div></Grid>
    
    <Grid xl={2}> </Grid>
 
    </Grid>

</div>

  
  
  
  
  
  
  
  
  
  
  : 
  (value === 'sessiontrue')?<div className='session' >
  
  <div className='sessionwrap' id="sessionwrap">
   <Grid container>
   <Grid xl={7} lg={7} md={7} sm={12}><div className='sessioncontent'>
  
   <h1 className='sessionhead1'>You have 0 upcoming sessions</h1>
   
  </div>
  </Grid>
    <Grid xl={5} lg={5} md={5} sm={12}>
    <div className='imgsession'> <img className='imgpassword' src={session} alt="" /></div>
    </Grid> 
    <Grid xl={12} lg={12} md={12} sm={12}>
    <button className='sessionbutton' onClick={<Booksession/>}>  <Link to="/booksession"  className='sessionbuttonlink'>BOOK SESSION</Link></button>
    </Grid>
   </Grid>
     </div>
    

  </div>:<div className='session' >
 
  <div className='sessionwrap' id="sessionwrap">
   <Grid container>
   <Grid xl={7} lg={7} md={7} sm={12}><div className='sessioncontent'>
  
   <h1 className='sessionhead4'>0 sessions completed so far</h1>
   
  </div>
  </Grid>
    <Grid xl={5} lg={5} md={5} sm={12}>
    <div className='imgsession'> <img className='imgpassword' src={session} alt="" /></div>
    </Grid> 
    
   </Grid>
     </div>
   

  </div>
  
   }
  
    </div>
      
  )
}

export default Mysessions