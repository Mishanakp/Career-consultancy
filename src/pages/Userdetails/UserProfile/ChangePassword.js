import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './Userprofile.css'
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
import pass from '../../../Assets/userprofile/pass.jpg'
import {Grid} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';

const Transitionpass = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function ChangePassword() {
    const initialValues = { oldpassword:"", password: "",password2: ""};
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
    
  return (
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
  )
}
export default ChangePassword