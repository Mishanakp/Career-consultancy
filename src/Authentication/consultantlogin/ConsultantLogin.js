

import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import './Consultantlogin.css'
import ed from '../../Assets/Consultlogin769.jpeg'
import Consult from '../../Assets/Consultlogin.jpeg'


// import { Login } from '@mui/icons-material';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function  ConsultantLogin() {
  const initialValues = {  email: "", password: "",showPassword: false};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }) ;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
{/**************eye************** */}
const handleClickShowPassword = () => {
  setFormValues({
    ...formValues,
    showPassword: !formValues.showPassword,
  });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

{/*************************** */}
const handleClickShowPassword2 = () => {
  setFormValues({
    ...formValues,
    showPassword: !formValues.showPassword,
  });
};

const handleMouseDownPassword2 = (event) => {
  event.preventDefault();
};
{/************************ */}









  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
    if (!values.password) {
      errors.password = "Password is required ";
  } 
  
  
    
  
  
  
  
      return errors;
    };
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
 <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
    <div>
       
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          id='diadlogbox'
        >
          <DialogTitle className='loginbox'>{"Login in"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" >
            successfully Login in 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Link to="/consultantdetails" >
            <Button onClick={handleClose}  style={{backgroundColor:'#23BDB8',color:'#F5FFFA'}}>Ok</Button>
             </Link>
          </DialogActions>
        </Dialog>
    </div>
      ) : (
        <div></div>
      )}
      
      <div className='loginconsultant'>
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid login2consultant" uk-grid=""  >
                   <div class="uk-card-media-left uk-cover-container uk-first-column consultantloginleftcolr">
                         
                    <img src={Consult} alt="" className='loginimgconsultant'  />
                                                  
                     </div>                    
                                                
                     <div class="uk-card-body" className='cardpaddingconsultant'>
                     <form onSubmit={handleSubmit}>
                     <p className="usernameconsultant" id="useconsultant">Email
               </p>
             
               <TextField type="text"
            name="email"
            className='textfieldloginconsultant'
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined" 
      
                            
            />
<p className='requiredco'>{formErrors.email}</p>

<p className="usernameconsultant" id="useconsultant">Password
               </p> 
             <TextField
       name="password"
       placeholder="Password"
       className='textfieldloginconsultant'
      
       value={formValues.password}
       onChange={handleChange}
          
           
            type={formValues.showPassword ? 'text' : 'password'}
            InputProps={{
            startAdornment:(<InputAdornment position="start"> <LockIcon style={{color:' #23BDB8 '}}/></InputAdornment>),
          endAdornment:(<InputAdornment position="end">
            <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{color:' #23BDB8 '}}
                  >
                    {formValues.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
          </InputAdornment>),
              
                 
        }}
             
            
              />
              <br/>
              <p className='requiredco'>{formErrors.password}</p>
      
    
   
                {/*********************/}
            <button    className="buttonloginconsultant" onClick={handleClickOpen}>Login</button>
            <br/>
            <br/>
            <p className='popconsultant'>Don't have an account?&nbsp;&nbsp;&nbsp;<Link to="/consultantsignup"style={{color:'#23BDB8',fontWeight:'600'}}>Sign Up </Link>   </p>


               

        </form>

         </div>

                       
                           

                

                

           </div>
          </div>
          

        
                        
                       
    {/********container***/}
    <div className="logincard769consultant">
    <div class="uk-child-width-1-1@m logintab769consultant" uk-grid >
       <div class="uk-card uk-card-default backgroungshadowinloginconsultant"  >
                           <div class="uk-card-media-top" id="logtop">
                               <img src={ed}  alt=""  className="logimg769consultant"/>
                           </div>
                           <div class="uk-card-body cardpaddingconsultant" >
              <form onSubmit={handleSubmit}>
          {/*********************/}
        

               {/*********Email************/}
               <p className="usernameconsultant" id="useconsultant">Email
                  </p>
                
               <TextField type="text"
            name="email"
            className='textfieldloginconsultant'
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined" 
      
                            
            />
<p className='requiredco'>{formErrors.email}</p>
               
                {/*********password************/}
  
                <p className="usernameconsultant" id="useconsultant">Password
                  </p> 
             <TextField
       name="password"
       placeholder="Password"
       className='textfieldloginconsultant'
      
       value={formValues.password}
       onChange={handleChange}
          
           
            type={formValues.showPassword ? 'text' : 'password'}
            InputProps={{
            startAdornment:(<InputAdornment position="start"> <LockIcon style={{color:' #23BDB8 '}}/></InputAdornment>),
          endAdornment:(<InputAdornment position="end">
            <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{color:' #23BDB8 '}}
                  >
                    {formValues.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
          </InputAdornment>),
              
                 
        }}
             
            
              />
              <br/>
              <p className='requiredco'>{formErrors.password}</p>
                        
   
                {/*********************/}
                <button     className="buttonloginconsultant"  onClick={handleClickOpen}>Login</button>
            <br/>
            <br/>
            <p className='popconsultant'>Don't have an account?&nbsp;&nbsp;&nbsp;<Link to="/consultantsignup" style={{color:'#23BDB8',fontWeight:'600'}}>Sign Up </Link>   </p>


               

        </form>
      
              </div>
            </div>
    </div>
  </div>

{/*********************** */}





  
    </div>

 
  )
}







export default ConsultantLogin