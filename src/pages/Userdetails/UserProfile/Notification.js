import React from 'react'
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { useState } from 'react';
import { IconButton } from '@mui/material';


import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

const Drawe=() => {
    const[openDrawer,setopenDrawer]=useState(false);

 
  return (
    <div>
        <React.Fragment >

        <Drawer anchor='top' open={openDrawer}
            Close={()=>setopenDrawer(false)}  >
             
                                          <List>
     

          <ListItemButton sx={{ pl: 4 }}>
          <List>
            <ListItem>
            <Link to="/changepassword" >Data Studio</Link>
            </ListItem>
            <ListItem>
            <Link to="/selfserve" >Self-serve api</Link>
            </ListItem>
            <ListItem>
            <Link to="/groundcontrol" >Ground Control</Link>
           </ListItem>
           <ListItem>
           <Link to="/edge" >Edge Case</Link>
           </ListItem>
           <ListItem>
           <Link to="/people" >People Platform</Link>
           </ListItem>
          </List>
          </ListItemButton>
        </List>
     
            </Drawer>
            <IconButton onClick={()=>setopenDrawer(!openDrawer)}><span class="menu-label"></span>
                <MenuIcon id='menu' ></MenuIcon>
            </IconButton>
        </React.Fragment>
    </div>
  )
}
export default Drawe


















