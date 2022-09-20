import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Userprofile.css'
import EventIcon from '@mui/icons-material/Event';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LogoutIcon from '@mui/icons-material/Logout';
import swal from 'sweetalert';

import {Grid} from '@mui/material'
import session from '../../../Assets/userprofile/session.jpg'

import './Userprofile.css'
import Booksession from '../../Ourconsultans/Booksession/Booksession'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import CelebrationIcon from '@mui/icons-material/Celebration';


import './Userprofile.css';

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
import del from '../../../Assets/userprofile/delete.jpg'

import Viewprofile from './Profile';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {  ListItemIcon} from '@mui/material'
import { useState, useEffect  } from 'react';

import Modal from '@mui/material/Modal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

import pass from '../../../Assets/userprofile/pass.jpg'




import MenuIcon from '@mui/icons-material/Menu';



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function TabPanels(props) {
  const { children, value, index, ...other } = props;

  return (
   
     
    
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanels.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
   //*****************************verticaltab code ************************ //
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const[openDrawer,setopenDrawer]=useState(true);
  const [open,setOpen] = useState(true)


  //*****************************mysession code ************************ //
  const [sessionvalue, setSessionvalue] = useState('sessiontrue');
  let [value1session,setValue1session]=useState(true)
  const handleChangesession = (event) => {
    setSessionvalue(event.target.value);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#23BDB8',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "#F5FFFA",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
   //*****************************delete code ************************ //
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
  const [valuedelete, setValuedelete] = React.useState('cost');
 BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  const handleChangedelete = (event) => {
    setValuedelete(event.target.value);
  };
  const [open1delete, setOpen1delete] = React.useState(false);

  const handleClickOpen1delete = () => {
    setOpen1delete(true);
  };
  const handleClose1delete = () => {
    setOpen1delete(false);
  };
  const [opendelete, setOpendelete] = React.useState(false);

  const handleClickOpendelete = () => {
    setOpendelete(true);
  };
  const handleClosedelete = () => {
    setOpendelete(false);
  };
    const handleClickShowPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Transitionpass = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
      const initialValues = { oldpassword:"", password: "",password2: "", showPassword: false,};
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
      const handleChangepass = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.oldpassword){
          errors.oldpassword = "enter old password ";
        }
        if (!values.password) {
          errors.password = "Password is required ";
      } else if ((values.password.length < 8) ){
        errors.password = "password must contain atleast 8 charater"
      }
      else if(  (!/\d/.test(values.password)))
      {errors.password =" password must contain atleast 1 number";
      }
      else if (!/[!@#$%&?]/g.test(values.password))
      {errors.password ="Password must contain atleast 1 special character";
      }
      else if (!/[A-Z]/g.test(values.password))
      {
        errors.password ="Password must contain atleast 1 capital letter";
      }
        if (!values.password2) {
          errors.password2 = 'Password is required';
        } else if (values.password2 !== values.password) {
          errors.password2 = 'Passwords do not match';
        }
        return errors;
      };
    
      const [openpass, setOpenpass] = React.useState(false);
      const handleClickOpenpass = () => {
        setOpenpass(true);
      };
      const handleClosepass = () => {
        setOpenpass(false);
      };
     
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
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  return (
    <div className='userpro'>
    <Box className='box'
      sx={{  display: 'flex', height: 720 }}
    >
       <Grid container>
       <Grid lg={2}md={1.3}>
      <Tabs
        TabIndicatorProps={{ style: { background: "#23BDB8 "  } }}
         orientation="vertical"
         className='alltabs'
         id="tabs"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor:'divider' , bgcolor: 'background.paper' ,
        "& button":{color:"#4a6f8a !important"},
        "& button:focus":{color:"#23BDB8 !important"},
        "& button:active":{color:"#23BDB8 !important"}, 
        "& button.Mui-selected":{color:"#23BDB8 !important"},}}
        

      >
       
        <Tab  className='tab1' icon={<EventIcon style={{color:'#23BDB8'}} />} iconPosition="start" label="MY SESSIONS" {...a11yProps(0)} />
        <Tab  className='tab2' icon={< PersonIcon  style={{color:'#23BDB8'}} />} iconPosition="start" label="MY PROFILE" {...a11yProps(1)} />
        <Tab className='tab3c'icon={<LockIcon style={{color:'#23BDB8'}}/>} iconPosition="start" label="CHANGE PASSWORD" {...a11yProps(2)} />
        <Tab className='tab4c' icon={<DeleteForeverIcon  style={{color:'#23BDB8'}} />} iconPosition="start"label="DELETE ACCOUNT" {...a11yProps(3)} />
      <button className='tab5'>< LogoutIcon style={{color:'#23BDB8'}} /> LOGOUT </button>
       
      </Tabs>
      </Grid>
      <Grid lg={10} md={10.7}>
      <TabPanels value={value} index={0}>
    
<div className='ramisession'>
   <div className='radio'>
       <FormControl>
    
        <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
        value={sessionvalue}
       onChange={handleChangesession}
     >
       <FormControlLabel className='radiosession' value="sessiontrue" control={<Radio  style={{color:'#0e314C'}}/>} label="Upcoming Session" />
       <FormControlLabel  className='radiosession' value="sessionfalse" control={<Radio  style={{color:'#0e314C'}}/>} label="Completed Session" />
      
     </RadioGroup>
   </FormControl></div>{value1session?   
 (sessionvalue === 'sessiontrue')?<div className="session2"><div className='sessionwrap3'>
  <h2 className='sessionhead2'>Session booked!</h2>
  <Grid container>
  <Grid xl={1} lg={1}></Grid>
    <Grid xl={4} lg={4}>
      <img src={session} alt="" />
    </Grid>
    <Grid xl={6} lg=
    {6}>
   <div className='tablesess'>
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

  
      </Grid>
      <Grid xl={1} lg={1}></Grid>
      <Grid xl={12} lg={12}><button className='resessionbutton'><Link to="/rescheduleappoinment"  className='sessionbuttonlink'>Reshedule Session</Link></button> </Grid>
  </Grid>
  </div>
 </div> :  <div className='session1'>
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
 (sessionvalue === 'sessiontrue')?<div className='session' >
 
 <div className='sessionwrap' id="sessionwrap">
  <Grid container>
  <Grid xl={7} lg={7} md={7} sm={12}><div className='sessioncontent'>
 
  <h1 className='sessionhead1'>You have 0 upcoming sessions</h1>
  
 </div>
 </Grid>
   <Grid xl={5} lg={5} md={5} sm={12}>
   <div className='imgsession'> <img className='imgpassword'  alt="" /></div>
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
      </TabPanels>
      <TabPanels value={value} index={1}>
     
      </TabPanels>
      <TabPanels value={value} index={2}>
      <div className='pass'>


     
{Object.keys(formErrors).length === 0 && isSubmit ? (
<div>
<Dialog
  open={openpass}
  TransitionComponent={Transitionpass}
  keepMounted
  onClose={handleClosepass}
  aria-describedby="alert-dialog-slide-description"
 
>
 
  <DialogContent>
    <DialogContentText id="alert-dialog-slide-description">
  Password Updated Successfully
    </DialogContentText>
  </DialogContent>
  <DialogActions>
  <Link to="/userprofile" >
    <Button onClick={handleClosepass} style={{color:' #23BDB8 '}}>Ok</Button>
     </Link>
  </DialogActions>
</Dialog>
</div>
) : (
<div></div>
)}
<div className='passwrap'>
 <Grid container>
  <Grid xl={5} lg={5} md={5} sm={12}>
  <div className='imgpass'> <img className='imgpassword' src={pass} alt="" /></div>
  </Grid> <Grid xl={7} lg={7} md={7} sm={12}><div className='passcontent'>

<h1 className='passhead'>Change Password</h1>
<form onSubmit={handleSubmit}>
  {/*********************/}
 
    
       <p className='required1'>{formErrors.email}</p>
        {/*********password************/}
        <TextField  className='password' type="password"
    name="oldpassword"
   
    placeholder="Old Password"
    
    value={formValues.oldpassword}
    onChange={handleChangepass}
  
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon style={{color:' #23BDB8 '}}/>
        </InputAdornment>
      ),
    }}></TextField>
     <p className='required1'>{formErrors.oldpassword}</p>
       <TextField className='password'  type="password"
    name="password"
    placeholder=" New Password"
  
    value={formValues.password}
    onChange={handleChangepass}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon style={{color:' #23BDB8 '}}/>
        </InputAdornment>
      ),
    }}
    variant="outlined"
    />
    <p className='required1'>{formErrors.password}</p>
                {/*******confirmpassword**************/}
       <TextField className='password'  type="password"
    name="password2"
  
    placeholder="Confirm Password"
    value={formValues.password2}
    onChange={handleChangepass}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon style={{color:' #23BDB8 '}}/>
        </InputAdornment>
        
      ),
    }}
   
    variant="outlined"
    />
       <p className='required1'>{formErrors.password2}</p>
        {/*********************/}
    <button className="passbutton"onClick={handleClickOpenpass} >Save</button>
  
</form>
 </div>
 </Grid>
 </Grid>
   </div>
  


</div>
      </TabPanels>
      <TabPanels value={value} index={3}>
      <div className='delete1'>
      <Modal
  open={open3}
  onClose={handleClose3}
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
        value={valuedelete}
        onChange={handleChangedelete}
      >
        <FormControlLabel className='labelradio' value="cost" control={<Radio  style={{color:'#23BDB8'}} />} label="Its to costly" />
        <FormControlLabel className='labelradio' id="labelradio" value="another" control={<Radio  style={{color:'#23BDB8'}}/>} label="I found another product that fulfill my needs" />
        <FormControlLabel className='labelradio' value="enough" control={<Radio  style={{color:'#23BDB8'}}/>} label="I dont use it enough" />
        <FormControlLabel  className='labelradio' value="other" control={<Radio  style={{color:'#23BDB8'}}/>} label="Others" />

      </RadioGroup>
      
    </FormControl>
    
                   </div>
                   <button className='deletebutton' onClick={handleClickOpendelete}>Continue</button>
                   
      
        
       
                    </Grid>
                    <Grid xl={5} sm={12} md={5} lg={5}>
            <div className='deletimage'>
            <img src={del} alt="" />
            </div> 
            
            </Grid>
            
          
           </Grid>
           </div> </div>
      </TabPanels>
    
      </Grid>
      </Grid>
    </Box>










    <div className='mobiletab'>
   
            <div className="view">
              <Grid container>
                
                <Grid lg={12}>
              
           
      <Accordion >
        <AccordionSummary
        style={{bgcolor:'white'}}
         
          aria-controls="panel1a-content"
          className='accord'
        >
          <Typography style={{fontSize:'18px',color:'#23BDB8'}}><EventIcon className='icon' style={{color:'#23BDB8',fontSize:'25px'}} />MY SESSIONS</Typography>
        </AccordionSummary  >
        <AccordionDetails style={{bgcolor:'green'}}>
        <div className='ramisession'>
   
   <div className='radio'>
<FormControl>
    
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
        value={sessionvalue}
       onChange={handleChangesession}
     >
       <FormControlLabel className='radiosession' value="sessiontrue" control={<Radio  style={{color:'#0e314C'}}/>} label="Upcoming Session" />
       <FormControlLabel  className='radiosession' value="sessionfalse" control={<Radio  style={{color:'#0e314C'}}/>} label="Completed Session" />
      
     </RadioGroup>
   </FormControl></div>{value1session?   
 (sessionvalue === 'sessiontrue')? 
<div className="session2"><div className='sessionwrap3'>
  <h2 className='sessionhead2'>Session booked!</h2>
  <Grid container>
  <Grid xl={1} md={1} sm={12}></Grid>
    <Grid xl={4} md={4} sm={12}>
      <img src={session} className="sessionimage2"alt="" />
    </Grid>
    <Grid xl={6} md={6} sm={12}>
   <div className='tablesess'>
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

  
      </Grid>
      <Grid xl={1} md={1} sm={12}></Grid>
      <Grid xl={12} md={12} sm={12}><button className='resessionbutton'><Link to="/rescheduleappoinment"  className='sessionbuttonlink'>Reshedule Session</Link></button> </Grid>
  </Grid>
  </div>
 </div> :  <div className='session1'>
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
        </AccordionDetails >
      </Accordion>
      <Accordion >
        <AccordionSummary
      style={{bgcolor:'white'}}
          
          aria-controls="panel1a-content"
          className='accord'
        >
          <Typography style={{fontSize:'18px',color:'#23BDB8'}}><PersonIcon className='icon' style={{color:'#23BDB8',fontSize:'25px'}} />MY PROFILE</Typography>
        </AccordionSummary >
        <AccordionDetails>
      
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
        style={{bgcolor:'white'}}
        
          aria-controls="panel1a-content"
          className='accord'
        >
          <Typography style={{fontSize:'18px',color:'#23BDB8'}}><LockIcon className='icon' style={{color:'#23BDB8',fontSize:'25px'}} />CHANGE PASSWORD</Typography>
        </AccordionSummary > 
        <AccordionDetails>
        <div className='pass'>


     
{Object.keys(formErrors).length === 0 && isSubmit ? (
<div className='diol'>
<Dialog
  open={openpass}
  TransitionComponent={Transitionpass}
  keepMounted
  onClose={handleClosepass}
  aria-describedby="alert-dialog-slide-description"

>
 
  <DialogContent>
    <DialogContentText id="alert-dialog-slide-description">
  Password Updated Successfully
    </DialogContentText>
  </DialogContent>
  <DialogActions>
  <Link to="/userprofile" >
    <Button onClick={handleClosepass} style={{color:' #23BDB8 '}}>Ok</Button>
     </Link>
  </DialogActions>
</Dialog>
</div>
) : (
<div></div>
)}
<div className='passwrap'>
 <Grid container>
  <Grid xl={5} lg={5} md={5} sm={12}>
  <div className='imgpass'> <img className='imgpassword' src={pass} alt="" /></div>
  </Grid> <Grid xl={7} lg={7} md={7} sm={12}><div className='passcontent'>

<h1 className='passhead'>Change Password</h1>
<form onSubmit={handleSubmit}>
  {/*********************/}
 
    
       <p className='required1'>{formErrors.email}</p>
        {/*********password************/}
        <TextField  className='password' type="password"
    name="oldpassword"
   
    placeholder="Old Password"
    
    value={formValues.oldpassword}
    onChange={handleChangepass}
  
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon style={{color:' #23BDB8 '}}/>
        </InputAdornment>
      ),
    }}></TextField>
     <p className='required1'>{formErrors.oldpassword}</p>
       <TextField className='password'  type="password"
    name="password"
    placeholder=" New Password"
  
    value={formValues.password}
    onChange={handleChangepass}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon style={{color:' #23BDB8 '}}/>
        </InputAdornment>
      ),
    }}
    variant="outlined"
    />
    <p className='required1'>{formErrors.password}</p>
                {/*******confirmpassword**************/}
       <TextField className='password'  type="password"
    name="password2"
  
    placeholder="Confirm Password"
    value={formValues.password2}
    onChange={handleChangepass}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon style={{color:' #23BDB8 '}}/>
        </InputAdornment>
      ),
    }}
    variant="outlined"
    />
       <p className='required1'>{formErrors.password2}</p>
        {/*********************/}
    <button className="passbutton"onClick={handleClickOpenpass} >Save</button>
  
</form>
 </div>
 </Grid>
 </Grid>
   </div>
  


</div>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
  style={{bgcolor:'white'}}
      
          aria-controls="panel1a-content"
          className='accord'
        >
          <Typography style={{fontSize:'18px',color:'#23BDB8'}}><DeleteForeverIcon className='icon' style={{color:'#23BDB8',fontSize:'25px'}} />DELETE ACCOUNT</Typography>
        </AccordionSummary >
        <AccordionDetails>
        <div className='delete1'>
       <Dialog
          open={open1delete}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose1delete}
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
            <Button onClick={handleClose1delete} style={{color:' #23BDB8 '}}>Ok</Button>
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
        value={valuedelete}
        onChange={handleChangedelete}
      >
        <FormControlLabel className='labelradio' value="cost" control={<Radio  style={{color:'#23BDB8'}} />} label="Its to costly" />
        <FormControlLabel className='labelradio' id="labelradio" value="another" control={<Radio  style={{color:'#23BDB8'}}/>} label="I found another product that fulfill my needs" />
        <FormControlLabel className='labelradio' value="enough" control={<Radio  style={{color:'#23BDB8'}}/>} label="I dont use it enough" />
        <FormControlLabel  className='labelradio' value="other" control={<Radio  style={{color:'#23BDB8'}}/>} label="Others" />

      </RadioGroup>
      
    </FormControl>
    
                   </div>
                   <button className='deletebutton' onClick={handleClickOpendelete}>Continue</button>
                   <BootstrapDialog
        onClose={handleClosedelete}
        aria-labelledby="customized-dialog-title"
        open={opendelete}
        className="dialog1"
        
      >
        <BootstrapDialogTitle onClose={handleClosedelete} className="delete2head">
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
          <button className='deletebutton1' onClick={handleClosedelete}>Cancel</button>
        <button className='deletebutton2' onClick={()=>{swal({
      text: "Account does not exist any more ",
      type:"success",
     
    }).then(function() {
      window.location = "/";
  });}}>confirm</button>
        </div>
        </DialogActions>
      </BootstrapDialog>
                    </Grid>
                    <Grid xl={5} sm={12} md={5} lg={5}>
            <div className='deletimage'>
            <img src={del} alt="" />
            </div> 
            
            </Grid>
            
          
           </Grid>
           </div> </div>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
  style={{bgcolor:'white'}}
      
          aria-controls="panel1a-content"
          className='accord'
        >
          <Typography style={{fontSize:'18px',color:'#23BDB8'}}><LogoutIcon className='icon' style={{color:'#23BDB8',fontSize:'25px'}} />LOGOUT</Typography>
        </AccordionSummary >
       
      </Accordion>
      
     
      </Grid>
      </Grid>
            </div>
       
       
    </div>
    </div>
  );
}
