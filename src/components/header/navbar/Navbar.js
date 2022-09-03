import React, { useState } from 'react'  
import './Navbar.css' 
import AppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button'; 
import InputBase from '@mui/material/InputBase'; 
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid'; 
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi" 
import {Link} from 'react-router-dom'
 
 
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down('lg')]:{
      paddingLeft:'10px',
     },
    //  [theme.breakpoints.down('xl')]:{
    //   paddingLeft:'-20px',
    //  },
    marginLeft: '0',
    width: '100%',
    [theme.breakpoints.down('md')]:{
      paddingLeft:'0px',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    }, 
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'40px',
      marginLeft:'-30px', 
    }, 
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    cursor:'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:' #4a6f8a',
    backgroundColor:' white', 
    border :'1px solid #4a6f8a',
    borderRadius:'5px 0 0 5px', 
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'10px',
      borderRadius:'0',
      borderTop:'none',
      borderLeft:'none',
      borderRight:'none'
      
    },
   
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({ 
    marginLeft:'30px',
    backgroundColor: ' white',
    borderRadius:'0 5px 5px 0',
    color: '#4a6f8a',
    border :'1px solid #4a6f8a',
    borderLeft:'none',
    // [theme.breakpoints.down('xl')]:{
    //   paddingLeft:'0px',
    //   width: '25ch',
    //   marginLeft:'36px'
      
    //  },
    [theme.breakpoints.down('lg')]:{
     paddingLeft:'0px',
     width: '50ch',
     marginLeft:'-100px'
     
    },
    [theme.breakpoints.down('md')]:{
      marginLeft:'-25px',
      width: '40ch',
    },
    [theme.breakpoints.down('sm')]:{
      marginLeft:'39px',
      width: '22.5ch',
      borderTop:'none',
      borderRight:'none',
      borderRadius:'0'
    },
     
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        width: '32ch',
         
      }, 
    },
  }));
 
  
 
  
const Button1 = styled(Button)(({ theme })=>({
    color:'#4a6f8a',  
    paddingRight:'20px' ,
    fontSize:'14px',
    '&:hover':{ 
      color:'#23BDB8'
      },
}))
const Button2 = styled(Button)(({ theme })=>({
    marginLeft:'-50px', 
    color:'white', 
    marginTop:'0px', 
    // borderColor:'#23BDB8',
    fontSize:'13px',
    backgroundColor:'#23BDB8',
    '&:hover':{
    backgroundColor:'#2e9a96',
    color:'white'
    },
    // [theme.breakpoints.down('xl')]:{
    //   marginLeft:'20px',
    //   marginTop:'0px'
    // },
    [theme.breakpoints.down('lg')]:{
      marginLeft:'850px',
      marginTop:'-170px'
    }
     
}))
const Button3 = styled(Button)(({ theme })=>({
  marginLeft:'-50px', 
  color:'white',   
  // borderColor:'#23BDB8',
  fontSize:'13px',
  backgroundColor:'#23BDB8',
  '&:hover':{
  backgroundColor:'#2e9a96',
  color:'white'
  },
  [theme.breakpoints.down('lg')]:{
    marginLeft:'180px',
    marginTop:'-60px'
  }
   
}))
const Grid1 = styled(Grid)(({theme})=>({
    marginLeft:'-20px',
    [theme.breakpoints.up('sm')]:{
        paddingLeft:'70px'
    },
    [theme.breakpoints.down('lg')]:{
      marginTop:'20px',
      marginLeft:'25px'
    }

}))
const Grid2 = styled(Grid)(({theme})=>({
    marginLeft:'20px',
    
}))
 
const Navbar = ({ placeholder, data }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
   
 
  return (
    <div  className='navbar'>
        <AppBar sx={{
            backgroundColor:'white',
            paddingTop:'20px',
            color:' #4a6f8a',
            paddingBottom:'15px'
        }}>
            <Toolbar>
                <Grid container>
                    <Grid item lg={2} sm={3} xs={1} sx={{
                      paddingTop:'5px',
                      cursor:'pointer'
                    }}  >
                        <item>
                        <Typography>
                             Logo
                        </Typography>
                        </item>
                    </Grid>
                 
                <Grid2 item lg={2} sm={7} xs={2} >
                <item>
            
          
        
              <Search className='search' >
            <SearchIconWrapper className='searchIcon'>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
             className='searchbar'
            />
             
          </Search>
          </item>
          </Grid2>
          <Grid1 item lg={7} className="buttons1" >
            <item>
            <Link to="/"><Button1  >Home </Button1></Link> 
            <Link to="/whoweare"> <Button1 >Who we are</Button1></Link>
            <Link to="/bookappoinments"><Button1 >Book appointemnts</Button1></Link>
            <Link to="/ourconsultans"><Button1 >Our consultants</Button1></Link>
            <Link to="/contact"><Button1 >Contact us</Button1></Link>
            </item>
            </Grid1>
          <Grid item lg={1}   className="button2">
          <item >
          <div class="uk-inline">
          <Button2  className='button2' variant='outlined' >Login </Button2>
          <div uk-dropdown="mode: click"> 
          <ul className='loginList'>
            <li className='loginListitem'>For Users</li>
            <li className='loginListitem'>For Consultants</li>
          </ul>
          </div>
          </div>
           
           
          </item>
          </Grid>
          <Grid item sm={1} xs={1} className="res_nav">
            <item>
                    
      <button className="uk-button uk-button-default open__button" type="button" uk-toggle="target: #offcanvas-flip"
        onClick={handleToggle}>{navbarOpen ? 
          (
            <MdClose style={{ color: "#4a6f8a", width: "40px", height: "40px" }} />
          ) 
          : (
            <FiMenu style={{ color: "#4a6f8a", width: "40px", height: "40px" }} />
          )
      
   

           } </button>
           
<div id="offcanvas-flip"  uk-offcanvas="flip: true; overlay: true" className='off__canvas'>
    <div className="uk-offcanvas-bar off__canvasbody" >  
    <div class="uk-inline">
    <Button3  className='button2 dropbtn' variant='outlined' >Login</Button3> 
    <div uk-dropdown="mode: click"> 
          <ul className='loginList'>
            <li className='loginListitem'>For Users</li>
            <li className='loginListitem'>For Consultants</li>
          </ul>
          </div>
     </div>
   
    <ul className='listNav'>
          <li className='listItemNav'> 
          <Search className='search2' >
            <SearchIconWrapper className='searchIcon2'>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
             className="searchBar2"
            />
             
          </Search>
        </li> 
           <hr className='lineNav'></hr>
            <li className='listItemNav'><Link to="/home"> <span uk-icon="home" className='whiteClr' ></span> &nbsp;&nbsp; <span className='whiteClr'>HOME </span> <span uk-icon="chevron-double-right" className='iconNavHome whiteClr'></span></Link> </li>  
           <hr className='lineNav'></hr>
           <li className='listItemNav'><Link to="/whoweare"> <span uk-icon="question" className='whiteClr'></span> &nbsp;&nbsp; <span className='whiteClr'>WHO WE ARE</span> <span uk-icon="chevron-double-right"  className='iconNavWho whiteClr'></span></Link> </li>   
            <hr className='lineNav'></hr>
             <li className='listItemNav'><Link to="/bookappoinments"><span uk-icon="calendar"className='whiteClr'></span> &nbsp;&nbsp; <span className='whiteClr'> BOOK APPOINTMENTS</span><span uk-icon="chevron-double-right"  className='iconNavBook whiteClr' ></span></Link> </li>     
           <hr className='lineNav'></hr>
            <li className='listItemNav'><Link to="/ourconsultans"><span uk-icon="users" className='whiteClr'></span> &nbsp;&nbsp; <span className='whiteClr'> OUR CONSULTANTS</span><span uk-icon="chevron-double-right" className='iconNavCon whiteClr' ></span></Link> </li>   
            <hr className='lineNav'></hr>
            <li className='listItemNav'><Link to="/contact"><span uk-icon="receiver" className='whiteClr'></span> &nbsp;&nbsp;  <span className='whiteClr'>CONTACT US</span><span uk-icon="chevron-double-right"  className='iconNavUs whiteClr'></span></Link> </li>    
            <hr className='lineNav'></hr>
      </ul>
      
    </div>
    </div>
            </item>
          </Grid>

          </Grid>
            </Toolbar>
        </AppBar>
       
      
    </div>
  )
}

export default Navbar

