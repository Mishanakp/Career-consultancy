import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Userprofile.css"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
  <input id="imgs" type="file"  onChange={(e)=>setData(e.target.files)}/>

  <label htmlFor="imgs"><CameraAltIcon className="additioncamera" sx={{ color:'#23BDB8',fontSize:'55px' }}/></label>
<h2>POOJA ROY</h2>
<h3>Fresher</h3>
  </div>
</Grid>
<Grid item xl={7} lg={6} md={7} sm={7} xs={12}>
  <div className="email">
    <ul>
      <li>
    <p2 ><EmailIcon sx={{ color:'#23BDB8'}}/> poojaroy@gmail.com <EditIcon onClick={handleOpen}/> </p2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title1"
        aria-describedby="modal-modal-description1"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title1" >
          poojaroy@gmail.com
                    </Typography>
          <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
</li>
<li>
  <p2 ><LocalPhoneIcon sx={{ color:'#23BDB8' }}/> +7673 89994 <EditIcon onClick={handleOpen}/></p2>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          +7673 89994        
            </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
  </li>
  <li>
    <p2><AddLocationIcon sx={{ color:'#23BDB8' }}/> Kochi, Kerala <EditIcon onClick={handleOpen}/></p2>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description3"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
  </li>
  </ul>
</div>
<br/>
<div className="about">
  <h2>ABOUT</h2>
<p3> 5 years of experience as a Salesman. Motivated, personable business professional with a talent for quickly identifying and resolving problems. Very flexible, versatile, and results-oriented with the ability to build productive relationships.</p3>
</div>
</Grid>
<Grid item xl={1} lg={2} md={1} sm={1}>
</Grid>
        </Grid>
        </Box>
    </div>
  )
}
export default Myprofile




















