<<<<<<< HEAD
import React from 'react'
=======
 import React from 'react'
>>>>>>> d2c4b62c1079a54b1e4ca63c91dd008d2782657c
import {Grid} from '@mui/material'
import './Userprofile.css'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

function DeleteAccount() {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
 

  const [value, setValue] = React.useState('cost');
 BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    
   
    <div className='delete1'>
       <Dialog
          open={open1}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose1}
          aria-describedby="alert-dialog-slide-description"
          id='diadlogbox'
        >
          <DialogTitle>{"Sing in"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
          Password Updated Successfully
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Link to="/userprofile" >
            <Button onClick={handleClose1} style={{color:' #23BDB8 '}}>Ok</Button>
             </Link>
          </DialogActions>
        </Dialog>
                <div className='deletewrap'>
                <Grid container className='delete'>
            
               <h1 className='deletehead'>Sad to see you go.</h1>
          <Grid xl={7} sm={12} md={7} lg={7}>
                    <div className='deletecontent'>
                  <h6 id='radio-head'>What is the biggest reason to delete account?</h6>
                   <FormControl className='radiocontent'>

      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel className='labelradio' value="cost" control={<Radio  style={{color:'#23BDB8'}} />} label="Its to costly" />
        <FormControlLabel className='labelradio' id="labelradio" value="another" control={<Radio  style={{color:'#23BDB8'}}/>} label="I found another product that fulfill my needs" />
        <FormControlLabel className='labelradio' value="enough" control={<Radio  style={{color:'#23BDB8'}}/>} label="I dont use it enough" />
        <FormControlLabel  className='labelradio' value="other" control={<Radio  style={{color:'#23BDB8'}}/>} label="Others" />

      </RadioGroup>
      
    </FormControl>
    
                   </div>
                   <button className='deletebutton' onClick={handleClickOpen}>Continue</button>
                   <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="dialog1"
        
      >
        <BootstrapDialogTitle onClose={handleClose} className="delete2head">
        < DeleteIcon /> Delete Account
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom className='delete2text'>
           <HighlightOffIcon style={{color:' #23BDB8 '}}/> Log you out on all devices
          </Typography>
          <Typography gutterBottom className='delete2text'>
           <HighlightOffIcon style={{color:' #23BDB8 '}}/> you won't be able to access the account info or past reservations
          </Typography>
          <Typography gutterBottom className='delete2text'>
           <HighlightOffIcon style={{color:' #23BDB8 '}}/> The profile and listings assossiated with this  account will disappear
          </Typography>
        </DialogContent>
        <DialogActions>
          <div className='deletebuttons'>
          <button className='deletebutton1' onClick={handleClose}>Cancel</button>
        <button className='deletebutton2' onClick={handleClose}>Delete</button>
        </div>
        </DialogActions>
      </BootstrapDialog>
                    </Grid>
                    <Grid xl={5} sm={12} md={5} lg={5}>
            <div className='deletimage'>
            <img src="https://img.freepik.com/free-vector/oh-no-concept-illustration_114360-8813.jpg?size=338&ext=jpg&ga=GA1.2.274469041.1659110674" alt="" />
            </div> 
            
            </Grid>
            
          
           </Grid>
           </div> </div>
         
  )
}

export default DeleteAccount