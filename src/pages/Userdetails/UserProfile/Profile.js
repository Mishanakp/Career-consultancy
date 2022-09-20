import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Userprofile.css"
import TextField from '@mui/material/TextField';

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import penicon from '../../../Assets/userprofile/penicon.png' 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function Myprofile() {
  const [data,setData]=useState();
  console.log(data)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);


  return (
    <div className='boxprofile'>
     
     <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={0}>
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
    <img className='profileImageuser' src="https://img.freepik.com/premium-vector/male-avatar-flat-icon-design-vector-illustration_549488-103.jpg?size=338&ext=jpg&ga=GA1.2.531248554.1663503756" alt="" />
  <input id="imgs" type="file"  onChange={(e)=>setData(e.target.files)}/>

  <label htmlFor="imgs"><CameraAltIcon className="additioncamera" sx={{ color:'#23BDB8',fontSize:'55px' }}/></label>
<h2>POOJA ROY</h2>
<h3>Fresher</h3>
  </div>
</Grid>
<Grid item xl={7} lg={7} md={6} sm={7} xs={11}>
  <div className="email">
    <ul>
      <li>
    <p2 ><EmailIcon sx={{ color:'#23BDB8'}}/> poojaroy@gmail.com  </p2>
      
</li>
<li>
  <p2 ><LocalPhoneIcon sx={{ color:'#23BDB8' }}/> +7673 89994 </p2>
 
  </li>
  <li>
    <p2><AddLocationIcon sx={{ color:'#23BDB8' }}/> Kochi, Kerala </p2>
  </li>
  
  </ul>
</div>
<br/>
<div className="about">
  <h2>ABOUT</h2>
<p3> 5 years of experience as a Salesman. Motivated, personable business professional with a talent for quickly identifying and resolving problems. Very flexible, versatile, and results-oriented with the ability to build productive relationships.</p3>
</div>
</Grid>
<Grid item xl={1} lg={1} md={2} sm={1} xs={1}>
<div className="editprofile">
<img src={penicon} className="editicon" alt=""   onClick={handleOpen} />
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description3" 
      >
        <Box sx={style} className="userModalEdit">
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'left'}}>
         <div className="userdetailsedit">
         <ul>  
         <li>
          <p2>Email</p2><br/>
          <TextField className="editbox" type="text" name="Email" placeholder="Email "  variant="outlined" />
          </li>
          <br/>
          <li>
          <p2>Contact Number</p2><br/>

          <TextField className="editbox" type="text" name="Contact Number" placeholder="Contact Number"  variant="outlined" />
 
 </li>
          <br/>
          <li>
          <p2>Location</p2><br/>

  <TextField className="editbox" type="text" name="Location" placeholder="Location"  variant="outlined" />        </li>
       <br/>
         <li>
       <p2>About</p2>
          <Box className="messagebox" component="form" sx={{
        '& .MuiTextField-root': { m: 0, width:'300px',},}}noValidate autoComplete="off">
 <TextField
         className="editabout"
          label="About"
          placeholder="About"
          multiline
          rows={4}
         />
        </Box>
        </li>
                <br/>
                <div className='editbutton'>
        <button class="buttonedit" onClick={handleOpen2}><span>Save Changes</span> </button>
        <Modal
  open={open2}
  onClose={handleClose2}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="updateModal">
    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead'>
     Updated successfully!!!
    </Typography>
    <CheckCircleOutlineIcon  className='checkIconUser'/>
  </Box>
</Modal>
  
        </div>
        </ul>

        </div>

          </Typography>
          
        </Box>
      </Modal>
      </div>
</Grid>
        </Grid>
        </Box>
    </div>
  )
}
export default Myprofile




















