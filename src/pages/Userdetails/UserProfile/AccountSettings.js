import React, { useState } from 'react';
import {Grid} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
function App() {

  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  return (
    <div className='pass'>
      <Grid container>
    <Grid lg={1}></Grid>
    <Grid lg={8}>
    <div className='passwrap'>
        <div className='passcontent'>
        <h1 className='passhead'>Change Password</h1>
      <form>

      <TextField  className='password' type="password"
            name="password2"
            id='input-with-icon-textfield1'
            placeholder="Old Password"
         
          
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            />
        {error.username && <span className='err'>{error.username}</span>}
        <TextField className='password'  type="password"
          name="password"
          placeholder='Enter Password'
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
           
           
          
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            />
        
        {error.password && <span className='err'>{error.password}</span>}
        <TextField className='password'  type="password"
           
            name="confirmPassword"
            placeholder='Enter Confirm Password'
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
          
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{color:' #23BDB8 '}}/>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            />
       
        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}

        <button>Submit</button>
      </form>
      </div>
      </div>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;