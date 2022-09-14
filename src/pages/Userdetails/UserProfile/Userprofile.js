import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import './Userprofile.css'
import EventIcon from '@mui/icons-material/Event';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LogoutIcon from '@mui/icons-material/Logout';
import ChangePassword from './ChangePassword';
import {Grid} from '@mui/material'


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
import { useState } from 'react';





import MenuIcon from '@mui/icons-material/Menu';
import DeleteAccount from './DeleteAccount';
import Mysessions from './Mysessions';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Myprofile from './Profile';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const[openDrawer,setopenDrawer]=useState(true);
  const [open,setOpen] = useState(true)
  
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
        sx={{ borderRight: 1, borderColor:'divider' , bgcolor: 'background.paper' }}
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
  <Mysessions/>
      </TabPanels>
      <TabPanels value={value} index={1}>
     <Viewprofile/>
      </TabPanels>
      <TabPanels value={value} index={2}>
      <ChangePassword/>
      </TabPanels>
      <TabPanels value={value} index={3}>
       <DeleteAccount/>
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
       <Mysessions/>
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
       <Myprofile/>
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
       <ChangePassword/>
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
       <DeleteAccount/>
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
