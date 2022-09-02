
import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogActions } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';


import './Consultantlogin.css'
import ed from '../../Assets/Consultlogin769.jpeg'
import Consult from '../../Assets/Consultlogin.jpeg'










class ConsultantLoginsection extends Component{



    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        message: "",
        open: false
      };
    }
  
    setUsername = event => {
      this.setState({
        username: event.target.value
      });
    };
  
    setPassword = event => {
      this.setState({
        password: event.target.value
      });
    };
  
    signIn = () => {
      if (this.state.username === "websouladmin" && this.state.password === "password") {
       
        window.open("/userProfile", "_self");
        
      } else {
        this.setState({
          open: true,
          message: "Incorrect Username or Password!"
        });
      }
    };
  
    handleClose = () => {
      this.setState({
        open: false
      });
    };
  
  
  
  
  
  
  
    render() {
  return (
   <div>
         <div className='login'>
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid=""  id='login21'>
                   <div class="uk-card-media-left uk-cover-container uk-first-column ">
                         
                    

                          <img src={Consult} alt="" className='loginimg'  />
                                                  
                     </div>                    
                                                    

                            
                   <div class="uk-card-body" id='cardpadding'>
                           
           
                           
                            <p className="username" id="use">Username
               </p>
             
               <TextField  // pass down to FormLabel as children
 
              name="Username"
   
         
              placeholder= 'Username'
              margin="normal"
              
              required
              onChange={this.setUsername}
              value={this.state.username}

              id="input-with-icon-textfield"
      
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle style={{color:' #23BDB8 '}}/>
                  </InputAdornment>
                ),
              }}
              variant="outlined"



              
            />
            
           <p className="username" id="use">Password
               </p> 
             <TextField
             id="input-with-icon-textfield"
             variant="outlined"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <LockIcon style={{color:' #23BDB8 '}}/>
                  </InputAdornment>
                ),
              }}
            />
             <br/>
             <Button
              variant="contained"
              id="button"
             
              onClick={() => {
                this.signIn();
              }}
           
              
          
              >
                Login</Button>
                  <br/>
                <br/>

                <p className='pop'>Don't have an account?&nbsp;&nbsp;&nbsp;<Link to="/signup"style={{color:'#23BDB8',fontWeight:'600'}}>Sign Up </Link>   </p>

                


           {/***************************************/}
           <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
           >
            <DialogTitle id="alert-dialog-titlealert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" id="consultantbutton">
                Okay
              </Button>
            </DialogActions>
           </Dialog>
  
           {/***************************************/}

          </div>
          
                
        </div>
                      
                       
</div>
  
   


    <div className="logincard769">
       

    <div class="uk-child-width-1-1@m" uk-grid id="logintab769">
       <div class="uk-card uk-card-default"  id="consultantlogin">
                           <div class="uk-card-media-top" id="logtop">
                               <img src={ed}  alt=""  className="logimg769con"/>
                           </div>
                           <div class="uk-card-body" id="loginbody7691">
                           <p className="username" id="use">Username
                  </p>
                
                  <TextField  // pass down to FormLabel as children
    
                 name="Username"
      
            
                 placeholder= 'Username'
                 margin="normal"
                 
                 required
                 onChange={this.setUsername}
                 value={this.state.username}
   
                 id="input-with-icon-textfield"
         
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                       <AccountCircle style={{color:' #23BDB8 '}}/>
                     </InputAdornment>
                   ),
                 }}
                 variant="outlined"
   
   
   
                 
               />
               
              <p className="username" id="use">Password
                  </p> 
                <TextField
                id="input-with-icon-textfield"
                variant="outlined"
                 placeholder="Password"
                 margin="normal"
                 required
                 type="password"
                 onChange={this.setPassword}
                 value={this.state.password}
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                      <LockIcon style={{color:' #23BDB8 '}}/>
                     </InputAdornment>
                   ),
                 }}
               />
                <br/>
                <Button
                 variant="contained"
                 id="button"
                
                 onClick={() => {
                   this.signIn();
                 }}
              
                 
             
                 >
                   Login</Button>
                     <br/>
                   <br/>
   
                   <p className='pop'>Don't have an account?&nbsp;&nbsp;&nbsp;<Link to="/signup" style={{color:'#23BDB8',fontWeight:'600'}}>Sign Up </Link>   </p>
                           </div>
                           </div>
        </div>

</div>

{/*********************/}
</div>

    );
}
}
 export default ConsultantLoginsection ;