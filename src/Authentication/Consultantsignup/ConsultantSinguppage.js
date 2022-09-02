
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
import Consult from '../../Assets/Consultlogin.jpeg'
import ed from '../../Assets/Consultlogin769.jpeg'


import './ConsultantSingUp.css'

import Checkbox from '@mui/material/Checkbox';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ConsultantSinguppage() {
    const initialValues = { username: "", email: "", password: "",password2: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
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
     
  
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
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
          <DialogTitle>{"Sing in"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            successfully signed in 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Link to="/userprofile" >
            <Button onClick={handleClose} style={{color:' #23BDB8 '}}>Ok</Button>
             </Link>
          </DialogActions>
        </Dialog>
    </div>
      ) : (
        <div></div>
      )}
      




     
         <div className='singin'>
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid=""  id='singin22con'>
                   <div class="uk-card-media-left uk-cover-container uk-first-column ">
                                       

                          <img src={Consult} alt="" className='singinimg'  />
                                                  
                     </div>                    
                                                    

                            
                   <div class="uk-card-body" id='cardpaddingsign'>

        <form onSubmit={handleSubmit}>
          {/*********************/}
          
          <TextField type="text"
            name="username"
            placeholder="Username"
            id='input-with-icon-textfield1'
            value={formValues.username}
            onChange={handleChange} 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined" />
            
            <p className='required'>{formErrors.username}</p>

               {/*********************/}
             
               <TextField type="text"
            name="email"
            id='input-with-icon-textfield1'
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
               <p className='required'>{formErrors.email}</p>
                {/*********password************/}
  
               <TextField  type="password"
            name="password"
            placeholder="Password"
            id='input-with-icon-textfield1'
           
            value={formValues.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined" 
            />
            <p className='required'>{formErrors.password}</p>
 
          
                        {/*******confirmpassword**************/}

               <TextField  type="password"
            name="password2"
            id='input-with-icon-textfield1'
            placeholder="Confirm Password"
            value={formValues.password2}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined" 
            />
               <p className='required'>{formErrors.password2}</p>
    
   
                {/*********************/}
            <button className="signupbtn"  onClick={handleClickOpen}>Submit</button>
            <br/>
            <p className='loginlink'>Already have an account ? &nbsp;&nbsp;&nbsp;<Link to='/login' style={{color:'#23BDB8',fontSize:'1.2rem',fontWeight:600}}>Log In </Link>   </p> 
            <p className='loginlink1'> <Checkbox {...label} defaultChecked />  By signing up, you agree to our Terms Of Service and acknowledge that you have read our Privacy Policy </p>
          

               

        </form>

         </div>

                       
                           

                

                

           </div>
          </div>
          

        
                        
                       
    {/********container***/}

  <div className="singincard769">

    <div class="uk-child-width-1-1@m" uk-grid id="signuptab769">
           <div class="uk-card uk-card-default"  id="consultantsignup">
                   <div class="uk-card-media-top" id="singuptop">
                               <img src={ed}  alt=""  className="signupimg769co"/>
                    </div>
              <div class="uk-card-body" id="consultantsingnup769">
              <form onSubmit={handleSubmit}>
          {/*********************/}
          
          <TextField type="text"
            name="username"
            placeholder="Username"
            id='input-with-icon-textfield1'
            value={formValues.username}
            onChange={handleChange} 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined" />
            
            <p className='required'>{formErrors.username}</p>

               {/*********Email************/}
             
               <TextField type="text"
            name="email"
            id='input-with-icon-textfield1'
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
               <p className='required'>{formErrors.email}</p>
                {/*********password************/}
  
               <TextField  type="password"
            name="password"
            placeholder="Password"
            id='input-with-icon-textfield1'
           
            value={formValues.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined" 
            />
            <p className='required'>{formErrors.password}</p>
 
          
                        {/*******confirmpassword**************/}

               <TextField  type="password"
            name="password2"
            id='input-with-icon-textfield1'
            placeholder="Confirm Password"
            value={formValues.password2}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined" 
            />
               <p className='required'>{formErrors.password2}</p>
    
   
                {/*********************/}
            <button className="signupbtn"  onClick={handleClickOpen}>Submit</button>
            <br/>
            <p className='loginlink'>Already have an account ? &nbsp;&nbsp;&nbsp;<Link to='/login' style={{color:'#23BDB8',fontSize:'1.2rem',fontWeight:600}}>Log In </Link>   </p> 
            <p className='loginlink1'> <Checkbox {...label} defaultChecked />  By signing up, you agree to our Terms Of Service and acknowledge that you have read our Privacy Policy </p>
          

               

        </form>
      
              </div>
            </div>
    </div>
  </div>











          
         
          

                
        























{/*********************** */}





  
    </div>

 
  )
}

export default ConsultantSinguppage