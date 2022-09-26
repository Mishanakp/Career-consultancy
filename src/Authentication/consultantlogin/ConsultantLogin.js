
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





class ConsultantLogin extends Component{



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
      if (this.state.username === "samdoe@email.com" && this.state.password === "password") {
       
        window.open("/consultantdetails", "_self");
        
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
         <div className='loginconsultant'>
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid login2consultant" uk-grid=""  >
                   <div class="uk-card-media-left uk-cover-container uk-first-column consultantloginleftcolr">
                         
                    <img src={Consult} alt="" className='loginimgconsultant'  />
                                                  
                     </div>                    
                                                    

                            
                   <div class="uk-card-body" className='cardpaddingconsultant'>
                           
           
                           
                            <p className="usernameconsultant" id="useconsultant">Email
               </p>
             
               <TextField  // pass down to FormLabel as children
 
            
 name="Email"
 placeholder= 'jonhn@gmail.com'

              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}

             className='textfieldloginconsultant'
      
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle style={{color:' #23BDB8 '}}/>
                  </InputAdornment>
                ),
              }}
              variant="outlined"



              
            />
            
           <p className="usernameconsultant" id="useconsultant">Password
               </p> 
             <TextField
           className='textfieldloginconsultant'
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
              className="buttonloginconsultant"
             
              onClick={() => {
                this.signIn();
              }}
           
              
          
              >
                Login</Button>
                  <br/>
                <br/>

                <p className='popconsultant'>Don't have an account?&nbsp;&nbsp;&nbsp;<Link to="/signup"style={{color:'#23BDB8',fontWeight:'600'}}>Sign Up </Link>   </p>

                


           {/***************************************/}
           <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
           >
            <DialogTitle id="alert-dialog-titlealert-dialog-title" style={{color:'#23BDB8'}}>Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" id="consultantbutton" style={{backgroundColor:'#23BDB8',color:'#F5FFFA'}}>
                Okay
              </Button>
            </DialogActions>
           </Dialog>
  
           {/***************************************/}

          </div>
          
                
        </div>
                      
                       
</div>
  
   


    <div className="logincard769consultant">
       

    <div class="uk-child-width-1-1@m logintab769consultant" uk-grid >
       <div class="uk-card uk-card-default backgroungshadowinloginconsultant"  >
                           <div class="uk-card-media-top" id="logtop">
                               <img src={ed}  alt=""  className="logimg769consultant"/>
                           </div>
                           <div class="uk-card-body cardpaddingconsultant" >
                           <p className="usernameconsultant" id="useconsultant">Email
                  </p>
                
                  <TextField  // pass down to FormLabel as children
    
            
                 className='textfieldloginconsultant'
            
                 name="Email"
                 placeholder= 'jonhn@gmail.com'
                
                              margin="normal"
                 
                 required
                 onChange={this.setUsername}
                 value={this.state.username}
   
         
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                       <AccountCircle style={{color:' #23BDB8 '}}/>
                     </InputAdornment>
                   ),
                 }}
                 variant="outlined"
   
   
   
                 
               />
               
               <p className="usernameconsultant" id="useconsultant">Password
                  </p> 
                <TextField
                      className='textfieldloginconsultant'
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
                 className="buttonloginconsultant"
                
                 onClick={() => {
                   this.signIn();
                 }}
              
                 
             
                 >
                   Login</Button>
                     <br/>
                   <br/>
   
                   <p className='popconsultant'>Don't have an account?&nbsp;&nbsp;&nbsp;<Link to="/signup" style={{color:'#23BDB8',fontWeight:'600'}}>Sign Up </Link>   </p>
                           </div>
                           </div>
        </div>

</div>

{/*********************/}
</div>

    );
}
}


export default ConsultantLogin