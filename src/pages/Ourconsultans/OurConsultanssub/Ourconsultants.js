import * as React from 'react';
//import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './Ourconsultants.css';
//import { ThemeProvider, createTheme } from '@mui/material/styles';
//import Viewprofile from '../Viewprofile/Viewprofile';
//import Profile2 from '../Viewprofile/Profile2';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function  Ourconsultants()  {
  return (
    
<div>

      <h2 className='title'>Career Counsellors</h2>

<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={0} columns={16}>
      <Grid lg={16} md={16} sx={12} container spacing={10} className='filter'>
      <Autocomplete
       className='catfilter'
            id="filter-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search for a consultant" />}
          />
          <Autocomplete
          className='catfilter'
            id="filter-demo"
            options={category}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search for a category" />}
          />
      </Grid>
      <br/><br/><br/><br/>

<Grid lg={3.5} sx={4} container spacing={0} className='cardsha' id='firstcard'>
        <Grid xs={12} md={5} lg={3.5}>
          <Item className='bg' id='imageitem'>
          <img  id='counselorimg' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
          </Item>
        </Grid>
        <Grid container xs={16} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={12} md={12}sm={10} >
            <Item className='bg'id='liitem'>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }} className='counsellorli'>
                <p id='name'className='nameand'><b>Puja Roy</b></p>
              
                <p id='list'className='nameand'>Masters in Business Administration</p>
                <p className='nameand'>Exp:3 years</p>
              </Box>
            </Item>
          </Grid>
         
        </Grid>
        <Grid
        
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}

        >
          
          <Grid  sx={{ order: { xs: 2, sm: 1 } }}>
            <Item className='bg' id='available'>Next availabe at: 12/5/2022 1:00 PM</Item><br/>
          </Grid>
          
          <Grid container columnSpacing={9} sx={{ order: { xs: 1, sm: 2 } }} >
            <Grid>
              <Item className='bg'>
              <button className="button1" >
                <span>View Profile</span>
                </button>
              </Item>
            </Grid>
            <Grid>
              <Item className='bg'>
              <button className="button1"id='bookbutton'>
                <span>Book Session</span>
                </button>
              </Item>
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>




      <Grid lg={3.5}  container spacing={0} className='cardsha'>
        <Grid xs={12} md={5} lg={3.5}>
          <Item className='bg'>
          <img  id='counselorimg' src='https://instantglamour.com/wp-content/uploads/photo-gallery/IMG_2002-pp-b.jpg' alt='counselor1'/>
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={12}>
            <Item className='bg' id='liitem'>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <p className='nameand' id='name'><b>Pranav Bhatia</b></p>
                <p className='nameand' id='list'>PGD in Hotel Management</p>
                <p className='nameand'>Exp:2 years</p>
              </Box>
            </Item>
          </Grid>
         
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}

        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item className='bg' id='available'>Next availabe at: 12/5/2022 1:00 PM</Item><br/>
          </Grid>
          
          <Grid container columnSpacing={9} sx={{ order: { xs: 1, sm: 2 } }} >
            <Grid>
              <Item className='bg'>
              <button className="button1" >
                <span>View Profile</span>
                </button>
              </Item>
            </Grid>
            <Grid>
              <Item className='bg'>
              <button className="button1"id='bookbutton'>
                <span>Book Session</span>
                </button>
              </Item>
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>



      
      <Grid lg={3.5}  container spacing={0} className='cardsha'>
        <Grid xs={12} md={5} lg={3.5}>
          <Item className='bg'>
          <img  id='counselorimg' src='https://content.thriveglobal.com/wp-content/uploads/2019/09/Devi-Pic-Passport-Size.jpg' alt='counselor1'/>
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={12}>
            <Item className='bg' id='liitem'>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <p className='nameand' id='name'><b>Jeena Albert</b></p>
                <p className='nameand' id='list'>PG Diploma in Management</p>
                <p className='nameand'>Exp:5 years</p>
              </Box>
            </Item>
          </Grid>
         
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}

        >
         <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item className='bg' id='available'>Next availabe at: 12/5/2022 1:00 PM</Item><br/>
          </Grid> 
          
          <Grid container columnSpacing={9} sx={{ order: { xs: 1, sm: 2 } }} >
            <Grid>
              <Item className='bg'>
              <button className="button1" >
                <span>View Profile</span>
                </button>
              </Item>
            </Grid>
            <Grid>
              <Item className='bg'>
              <button className="button1"id='bookbutton'>
                <span>Book Session</span>
                </button>
              </Item>
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>


      <Grid lg={3.5}  container spacing={0} className='cardsha'>
        <Grid xs={12} md={5} lg={3.5}>
          <Item className='bg'>
          <img  id='counselorimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qdR75o88kuYWDiL8vNqR_pmo33eay6W2Tg&usqp=CAU' alt='counselor1'/>
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={12}>
            <Item className='bg'id='liitem'>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <p className='nameand' id='name'> <b>Leena Joseph</b></p>
                <p className='nameand' id='list'>PG Diploma in Digital Marketing</p>
                <p className='nameand' >Exp:6 years</p>
              </Box>
            </Item>
          </Grid>
         
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}

        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item className='bg' id='available'>Next availabe at: 12/5/2022 1:00 PM</Item><br/>
          </Grid>
          
          <Grid container columnSpacing={9} sx={{ order: { xs: 1, sm: 2 } }} >
            <Grid>
              <Item className='bg'>
              <button className="button1" >
                <span>View Profile</span>
                </button>
              </Item>
            </Grid>
            <Grid>
              <Item className='bg'>
              <button className="button1"id='bookbutton'>
                <span>Book Session</span>
                </button>
              </Item>
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>




      <Grid lg={3.5}  container spacing={0} className='cardsha'>
        <Grid xs={12} md={5} lg={3.5}>
          <Item className='bg'>
          <img  id='counselorimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1d0DWK26lmj7VA0IxuwaoJR42XXMQ8JUcDg&usqp=CAU' alt='counselor1'/>
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={12}>
            <Item className='bg'id='liitem'>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <p className='nameand' id='name'><b>Adam Joan</b></p>
                <p className='nameand' id='list'>MTech in Mechanical Engineering</p>
                <p className='nameand'>Exp: 4 years</p>
              </Box>
            </Item>
          </Grid>
         
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}

        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item className='bg' id='available'>Next availabe at: 12/5/2022 1:00 PM</Item><br/>
          </Grid>
          
          <Grid container columnSpacing={10} sx={{ order: { xs: 1, sm: 2 } }} >
            <Grid>
              <Item className='bg'>
              <button className="button1" >
                <span>View Profile</span>
                </button>
              </Item>
            </Grid>
            <Grid>
              <Item className='bg'>
              <button className="button1" id='bookbutton'>
                <span>Book Session</span>
                </button>
              </Item>
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>




      <Grid lg={3.5}  container spacing={0} className='cardsha'>
        <Grid xs={12} md={5} lg={3.5}>
          <Item className='bg'>
          <img  id='counselorimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpriOvQqYcu8Qn1wMaYF4ckk96VMwl8DVQww&usqp=CAU' alt='counselor1'/>
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={12}>
            <Item className='bg' id='liitem'>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <p className='nameand' id='name'><b>Oscar Rafy</b></p>
                <p className='nameand' id='list'>M.ED in Mathematics</p>
                <p className='nameand'>Exp:8 years</p>
              </Box>
            </Item>
          </Grid>
         
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}

        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item className='bg' id='available'>Next availabe at: 12/5/2022 1:00 PM</Item><br/>
          </Grid>
          
          <Grid container columnSpacing={9} sx={{ order: { xs: 1, sm: 2 } }} >
            <Grid>
              <Item className='bg'>
              <button className="button1" >
                <span>View Profile</span>
                </button>
              </Item>
            </Grid>
            <Grid>
              <Item className='bg'>
              <button className="button1"id='bookbutton'>
                <span>Book Session</span>
                </button>
              </Item>
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>




      </Grid>
    </Box>

    </div>
  );
}




// Filter
const top100Films = [
  { title: 'Puja Roy'},
  { title: 'Pranav Bhatia', year: 1972 },
  { title: 'Jeena Albert', year: 1974 },
  { title: 'Leena Joseph', year: 2008 },
  { title: 'Adam Joan', year: 1957 },
  { title: "Oscar Rafy", year: 1993 }
];

const category = [
  { title: 'Business'},
  { title: 'Arts', year: 1972 },
  { title: 'Service industries', year: 1974 },
  { title: 'Technology', year: 2008 },
  { title: 'Medical', year: 1957 },
  { title: "Media", year: 1993 },
  { title: "Low enforcement"},
  { title:"Education"},
  { title:"Aviation"}
];

