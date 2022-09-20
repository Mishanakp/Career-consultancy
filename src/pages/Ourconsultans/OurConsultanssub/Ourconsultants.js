import * as React from 'react';
import './Ourconsultants.css'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow:'none',
  color: theme.palette.text.secondary,
}));


export default function  Ourconsultants()  {
  return (
    
<div >



<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={0}>
<Grid xl={.8} lg={0.75} md={1} sm={3.5} xs={.1} ></Grid>
<Grid xl={11} lg={11} md={10.5} sm={8} xs={11} >
<h2 className='title'>Career Counsellors</h2>
<br/>
</Grid>

<Grid xl={0.7} lg={0.65} md={1} sm={1.2} xs={2.5} ></Grid>
      <Grid xl={11} lg={11} md={11} sm={10.8} xs={9} container spacing={0} className='filter'>
      <Autocomplete
            className='filterofconsultants'
            id="filter-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search for a consultant" />}
          />
          &nbsp;     &nbsp;     &nbsp; 
          <Autocomplete
            className='filterofconsultants'
            id="filter-demo"
            options={category}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search for a category" />}
          />
      </Grid>
      <br/><br/><br/><br/><br/><br/>
      <Grid xl={3} lg={.7} md={1}  sm={.7} xs={1.5} className='margincard' ></Grid>
      <Grid xl={3.5} lg={3} md={4.5} sm={3.2} xs={9} container spacing={0} className='counselorlistcard' >
      <Grid xs={2} sm={2.7} md={2.8} lg={3.6} xl={3.6}></Grid>
        <Grid xs={8} sm={6} md={6} lg={4.5} xl={12}>
          <Item >
          <img  className='counselorcardimg' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
          </Item>
        </Grid>

          <Grid lg={12} md={12}sm={12} xs={12}>
            <Item >
             
              <Box >
                <p ><b><span className='name'>Puja Roy</span> </b></p>
                <p >Masters in Business Administration</p>
                <p >Exp:3 years</p>
              </Box>
            </Item>
            <Item  >
              <span > Next availabe at: 12/5/2022 1:00 PM</span>
            </Item>
          </Grid>
 
        <Grid xl={3} lg={3} md={4}  sm={12} xs={12}>
          <Item >

                <Link to="/Viewprofile">
                <button className="counselorcardbutton" >
                  <span>View Profile</span>
                  </button></Link>
          </Item>
        </Grid>
        <Grid xl={3} lg={4} md={3.6} xs={0} sm={0}></Grid>
        <Grid xl={3} lg={3} md={3} xs={12} sm={12} >    
          <Item  >
              <Link to="/Booksession">
              <span className='bookbutton'>
              <button className="counselorcardbutton">
             Book Session
                </button>
              </span>
                </Link>
          </Item>
        </Grid>
      </Grid>
      <Grid xl={1.5} lg={.2} md={0.5}  sm={0.3} xs={1.5}className='margincard'></Grid>
      <Grid xl={1.5} lg={.5} md={.5}  sm={.2} xs={1.5}className='margincard'></Grid>
      <Grid xl={3.5} lg={3} md={4.5} sm={3.2} xs={9} container spacing={0} className='counselorlistcard' >
      <Grid xs={2} sm={2.7} md={2.8} lg={3.6} xl={3.6}></Grid>
        <Grid xs={8} sm={6} md={6} lg={4.5} xl={12}>
          <Item >
          <img  className='counselorcardimg' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
          </Item>
        </Grid>

          <Grid lg={12} md={12}sm={12} xs={12}>
            <Item >
             
              <Box >
                <p ><b><span className='name'>Puja Roy</span> </b></p>
                <p >Masters in Business Administration</p>
                <p >Exp:3 years</p>
              </Box>
            </Item>
            <Item  >
              <span > Next availabe at: 12/5/2022 1:00 PM</span>
            </Item>
          </Grid>
 
        <Grid xl={3} lg={3} md={4}  sm={12} xs={12}>
          <Item >

                <Link to="/Viewprofile">
                <button className="counselorcardbutton" >
                  <span>View Profile</span>
                  </button></Link>
          </Item>
        </Grid>
        <Grid xl={3} lg={4} md={3.6} xs={0} sm={0}></Grid>
        <Grid xl={3} lg={3} md={3} xs={12} sm={12} >    
          <Item  >
              <Link to="/Booksession">
              <span className='bookbutton'>
              <button className="counselorcardbutton">
             Book Session
                </button>
              </span>
                </Link>
          </Item>
        </Grid>
      </Grid>
      <Grid xl={0} lg={0.1} md={0.5}  sm={0.2} xs={1.5}className='margincard'></Grid>
      <Grid xl={0} lg={0.1} md={.5}  sm={0.2} xs={0}className='margincard'></Grid>
      <Grid xl={3} lg={.6} md={1}  sm={0.1} xs={1.5}className='margincard'></Grid>
      <Grid xl={3.5} lg={3} md={4.5} sm={3.2} xs={9} container spacing={0} className='counselorlistcard' >
      <Grid xs={2} sm={2.7} md={2.8} lg={3.6} xl={3.6}></Grid>
        <Grid xs={8} sm={6} md={6} lg={4.5} xl={12}>
          <Item >
          <img  className='counselorcardimg' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
          </Item>
        </Grid>

          <Grid lg={12} md={12}sm={12} xs={12}>
            <Item >
             
              <Box >
                <p ><b><span className='name'>Puja Roy</span> </b></p>
                <p >Masters in Business Administration</p>
                <p >Exp:3 years</p>
              </Box>
            </Item>
            <Item  >
              <span > Next availabe at: 12/5/2022 1:00 PM</span>
            </Item>
          </Grid>
 
        <Grid xl={3} lg={3} md={4}  sm={12} xs={12}>
          <Item >

                <Link to="/Viewprofile">
                <button className="counselorcardbutton" >
                  <span>View Profile</span>
                  </button></Link>
          </Item>
        </Grid>
        <Grid xl={3} lg={4} md={3.6} xs={0} sm={0}></Grid>
        <Grid xl={3} lg={3} md={3} xs={12} sm={12} >    
          <Item  >
              <Link to="/Booksession">
              <span className='bookbutton'>
              <button className="counselorcardbutton">
             Book Session
                </button>
              </span>
                </Link>
          </Item>
        </Grid>
      </Grid>

      <Grid xl={0} lg={0} md={0.2}  sm={0.2} xs={1.5}className='margincard'></Grid>
      <Grid xl={0} lg={0} md={0.1} sm={.3} xs={0}className='margincard'></Grid>
      <Grid xl={3} lg={.7} md={0}  sm={.7} xs={1.5}className='margincard'></Grid>
      <Grid xl={3.5} lg={3} md={4.5} sm={3.2} xs={9} container spacing={0} className='counselorlistcard' >
      <Grid xs={2} sm={2.7} md={2.8} lg={3.6} xl={3.6}></Grid>
        <Grid xs={8} sm={6} md={6} lg={4.5} xl={12}>
          <Item >
          <img  className='counselorcardimg' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
          </Item>
        </Grid>

          <Grid lg={12} md={12}sm={12} xs={12}>
            <Item >
             
              <Box >
                <p ><b><span className='name'>Puja Roy</span> </b></p>
                <p >Masters in Business Administration</p>
                <p >Exp:3 years</p>
              </Box>
            </Item>
            <Item  >
              <span > Next availabe at: 12/5/2022 1:00 PM</span>
            </Item>
          </Grid>
 
        <Grid xl={3} lg={3} md={4}  sm={12} xs={12}>
          <Item >

                <Link to="/Viewprofile">
                <button className="counselorcardbutton" >
                  <span>View Profile</span>
                  </button></Link>
          </Item>
        </Grid>
        <Grid xl={3} lg={4} md={3.6} xs={0} sm={0}></Grid>
        <Grid xl={3} lg={3} md={3} xs={12} sm={12} >    
          <Item  >
              <Link to="/Booksession">
              <span className='bookbutton'>
              <button className="counselorcardbutton">
             Book Session
                </button>
              </span>
                </Link>
          </Item>
        </Grid>
      </Grid>

      <Grid xl={0} lg={0.52} md={1}  sm={0.2} xs={1.5}className='margincard'></Grid>
      <Grid xl={3} lg={.23} md={1} xs={1.5} sm={.3}className='margincard'></Grid>
      <Grid xl={3.5} lg={3} md={4.5} sm={3.2} xs={9} container spacing={0} className='counselorlistcard' >
      <Grid xs={2.5} sm={2.7} md={2.8} lg={3.6} xl={3.6}></Grid>
        <Grid xs={7} sm={6} md={6} lg={4.5} xl={12}>
          <Item >
          <img  className='counselorcardimg' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
          </Item>
        </Grid>

          <Grid xs={12} lg={12} md={12}sm={12}>
            <Item >
             
              <Box >
                <p ><b><span className='name'>Puja Roy</span> </b></p>
                <p >Masters in Business Administration</p>
                <p >Exp:3 years</p>
              </Box>
            </Item>
            <Item  >
              <span > Next availabe at: 12/5/2022 1:00 PM</span>
            </Item>
          </Grid>
 
          <Grid xl={3} lg={3} md={4}  sm={12} xs={12}>
          <Item >

                <Link to="/Viewprofile">
                <button className="counselorcardbutton" >
                  <span>View Profile</span>
                  </button></Link>
          </Item>
        </Grid>
        <Grid xl={3} lg={4} md={3.6} xs={0} sm={0}></Grid>
        <Grid xl={3} lg={3} md={3} xs={12} sm={12} >    
          <Item  >
              <Link to="/Booksession">
              <span className='bookbutton'>
              <button className="counselorcardbutton">
             Book Session
                </button>
              </span>
                </Link>
          </Item>
        </Grid>
      </Grid>

      <Grid xl={1.5} lg={0.4} md={0.5}  sm={0.2} xs={1.5}className='margincard'></Grid>
      <Grid xl={1.5} lg={.4} md={.5} xs={1.5} sm={.3}className='margincard'></Grid>
      <Grid xl={3.5} lg={3} md={4.5} sm={3.2} xs={9} container spacing={0} className='counselorlistcard' >
      <Grid xs={2.5} sm={2.7} md={2.8} lg={3.6} xl={3.6}></Grid>
        <Grid xs={7} sm={6} md={6} lg={4.5} xl={12}>
          <Item >
          <img  className='counselorcardimg' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
          </Item>
        </Grid>

          <Grid  lg={12} md={12}sm={12} xs={12}>
            <Item >
             
              <Box >
                <p ><b><span className='name'>Puja Roy</span> </b></p>
                <p >Masters in Business Administration</p>
                <p >Exp:3 years</p>
              </Box>
            </Item>
            <Item  >
              <span > Next availabe at: 12/5/2022 1:00 PM</span>
            </Item>
          </Grid>
 
          <Grid xl={3} lg={3} md={4}  sm={12} xs={12}>
          <Item >

                <Link to="/Viewprofile">
                <button className="counselorcardbutton" >
                  <span>View Profile</span>
                  </button></Link>
          </Item>
        </Grid>
        <Grid xl={3} lg={4} md={3.6} xs={0} sm={0}></Grid>
        <Grid xl={3} lg={3} md={3} xs={12} sm={12} >    
          <Item  >
              <Link to="/Booksession">
              <span className='bookbutton'>
              <button className="counselorcardbutton">
             Book Session
                </button>
              </span>
                </Link>
          </Item>
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