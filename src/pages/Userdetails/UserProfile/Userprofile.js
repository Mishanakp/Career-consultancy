import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Userprofile.css'
import EventIcon from '@mui/icons-material/Event';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LogoutIcon from '@mui/icons-material/Logout';
import ChangePassword from './ChangePassword';
import {Grid} from '@mui/material'
import AccountSettings from'./AccountSettings'
import Drawe from './Notification'
import Viewprofile from './Profile';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {  ListItemIcon} from '@mui/material'
import { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import DeleteAccount from './DeleteAccount';

function TabPanel(props) {
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
        <Box sx={{ p: 10 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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
  const[openDrawer,setopenDrawer]=useState(false);
  const [open,setOpen] = useState(false)
  return (
    <div>
    <Box className='box'
      sx={{  display: 'flex', height: 720 }}
    >
       <Grid container>
       <Grid lg={1.5}md={1.5}>
      <Tabs
        orientation="vertical"
      className='alltabs'
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor:'divider' , bgcolor: 'background.paper',width:250 }}
      >
       
        <Tab  className='tab1' icon={<EventIcon style={{color:'#23BDB8'}} />} iconPosition="start" label="My Sessions" {...a11yProps(0)} />
        <Tab  className='tab2' icon={< PersonIcon  style={{color:'#23BDB8'}} />} iconPosition="start" label="My Profile" {...a11yProps(1)} />
        <Tab className='tab3'icon={<LockIcon style={{color:'#23BDB8'}}/>} iconPosition="start" label="Change Password" {...a11yProps(2)} />
        <Tab className='tab4' icon={<DeleteForeverIcon  style={{color:'#23BDB8'}} />} iconPosition="start"label="Deactivate Account" {...a11yProps(3)} />
      <button className='tab5'>< LogoutIcon style={{color:'#23BDB8'}} /> Logout </button>
        <Tab></Tab>
        <Tab></Tab>
        

<Tab></Tab>
<Tab></Tab>

<Tab></Tab>
      </Tabs>
      </Grid>
      <Grid lg={9} md={9}>
      <TabPanel value={value} index={0}>
   
      </TabPanel>
      <TabPanel value={value} index={1}>
     <Viewprofile/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ChangePassword/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <DeleteAccount/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      </Grid>
      </Grid>
    </Box>
    <div className='mobiletab'>
    <Drawer open={open} onClose={()=>{setOpen(false)}}>
    
    
        <List >
        <ListItemButton>
        <ListItem>
            <Link to="/changepassword" className='text1'><EventIcon className='icon' style={{color:'#23BDB8'}} />MY SESSION</Link>
        </ListItem>
        </ListItemButton>
        </List>
        <List >
        <ListItemButton>
        <ListItem>
            <Link to="/changepassword" className='text'>< PersonIcon className='icon' style={{color:'#23BDB8'}} />MY PROFILE</Link>
        </ListItem>
        </ListItemButton>
        </List>
        <List >
        <ListItemButton>
        <ListItem>
            <Link to="/changepassword" className='text' ><LockIcon className='icon' style={{color:'#23BDB8'}}/>CHANGE PASSWORD</Link>
        </ListItem>
        </ListItemButton>
        </List>
        
        <List >
        <ListItemButton>
        <ListItem>
            <Link to="/deleteaccount" className='text'><DeleteForeverIcon className='icon'  style={{color:'#23BDB8'}} />DEACTIVATE ACCOUNT</Link>
        </ListItem>
        </ListItemButton>
        </List>
        <List >
        <ListItemButton>
        <ListItem>
            <Link to="/changepassword" className='text'>< LogoutIcon style={{color:'#23BDB8'}} className='icon'/>LOGOUT</Link>
        </ListItem>
        </ListItemButton>
        </List>
        
    </Drawer>
       

            <IconButton onClick={()=>setOpen(!open)}>
                <MenuIcon id='menu' ></MenuIcon>
            </IconButton>
            
       
       
    </div>
    </div>
  );
}
