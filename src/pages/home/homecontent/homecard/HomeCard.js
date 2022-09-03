import React,{useEffect} from 'react'
import './HomeCard.css';
import {Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';


const HomeCard = () => {
  useEffect(() =>{
    Aos.init({});
},[]);
  return (
    <div className='prihomeCard'>
      <img className='background' src="https://www.bostondynamics.com/themes/custom/isovera/images/fading-grid-background-top.png" alt="" />
         <h1 className='pricardMainHead'>Sessions With Our Experts</h1>
         {/* ............................... */}
    <div className='pricards1'>
      <Grid container>
       <Grid item lg={3} md={6} >
       <div className='pripost1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="1000">
        <Card className='pricard1'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/pitch-meeting-concept-illustration_114360-6000.jpg?size=626&ext=jpg&ga=GA1.2.1405503288.1661585887"
          alt="person"
        />
        <CardContent className='pricardContent1'>
          
          <Typography variant="body2" > 
          <p  className='pricardPara1'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
   </div>
        </Grid>
        <Grid item lg={3} md={6} >
        <div className='pripost1' data-aos="fade-up" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="500">
        <Card  className='pricard2'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/employer-meeting-job-applicant-pre-employment-assessment-employee-evaluation-assessment-form-report-performance-review-concept-illustration_335657-2058.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
          alt="green iguana"
        />
        <CardContent className='pricardContent2'>
          
          <Typography variant="body2"  >
          <p  className='pricardPara2'>
          In the gig economy, increasingly  bespoke analytical research. Our career test evaluates fitment to specific roles across industries, providing the much needed decision support for enhancing role wise tenures, satisfaction and productivity.
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
   </div>
        </Grid>
        <Grid item lg={3} md={6}>
        <div className='pripost1' data-aos="fade-up" data-aos-duration="1000"  data-aos-mirror="true" data-aos-delay="500">
      <Card   className='pricard3'>
    <CardActionArea>
      <CardMedia
        component="img" 
        image="https://img.freepik.com/premium-vector/resume-concept-man-makes-resume-vector-illustration-flat_186332-1030.jpg?w=996"
        alt="green iguana"
      />
      <CardContent className='pricardContent3'> 
       
        <Typography variant="body2">
        <p  className='pricardPara3'>In the gig economy,   and bespoke analytical research. Our career test evaluates fitment to specific roles across industries, providing the much needed decision support for enhancing role wise tenures, satisfaction and productivity.
        </p>
        </Typography>
      </CardContent>
    </CardActionArea>
    
  </Card>
 </div>
      </Grid>
        <Grid item lg={3} md={6} >
        <div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="1000">
      <Card   className='pricard4'>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/businessman-sets-goals-runs-up-graph-columns-success-time-self-management-self-regulation-learning-self-organization-course-concept-illustration_335657-2070.jpg?w=996&t=st=1661594736~exp=1661595336~hmac=3c4dc46786cefd933b4d3487e31ab5b7c1def97600ad8220e90a35af597afaa5"
        alt="green iguana"
      />
      <CardContent className='pricardContent4'> 
       
        <Typography variant="body2">
        <p  className='pricardPara4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque velit iure ratione laborum culpa pariatur eaque voluptatum minima ullam.
        </p>
        </Typography>
      </CardContent>
    </CardActionArea>
     
  </Card>
 </div>
      </Grid>
        
      </Grid>
      </div>

    {/* .................................... */}

    <div className='cards2'>
      <Grid container>
       <Grid item lg={3} sm={6} xs={12} >
       <div className='pripost1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="500">
        <Card className='pricard1'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/pitch-meeting-concept-illustration_114360-6000.jpg?size=626&ext=jpg&ga=GA1.2.1405503288.1661585887"
          alt="person"
        />
        <CardContent className='pricardContent1'>
          
          <Typography variant="body2" >
          <p  className='pricardPara1'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
   </div>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} >
        <div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="500">
        <Card  className='pricard2'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/employer-meeting-job-applicant-pre-employment-assessment-employee-evaluation-assessment-form-report-performance-review-concept-illustration_335657-2058.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
          alt="green iguana"
        />
        <CardContent className='pricardContent2'>
          
          <Typography variant="body2"  >
          <p  className='pricardPara2'>
          In the gig economy, increasingly  bespoke analytical research. Our career test evaluates fitment to specific roles across industries, providing the much needed decision support for enhancing role wise tenures, satisfaction and productivity.
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
   </div>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
        <div className='pripost1' data-aos="fade-right" data-aos-duration="1000"  data-aos-mirror="true" data-aos-delay="500">
      <Card   className='pricard3'>
    <CardActionArea>
      <CardMedia
        component="img" 
        image="https://img.freepik.com/premium-vector/resume-concept-man-makes-resume-vector-illustration-flat_186332-1030.jpg?w=996"
        alt="green iguana"
      />
      <CardContent className='pricardContent3'> 
       
        <Typography variant="body2">
        <p  className='pricardPara3'>In the gig economy,   and bespoke analytical research. Our career test evaluates fitment to specific roles across industries, providing the much needed decision support for enhancing role wise tenures, satisfaction and productivity.
        </p>
        </Typography>
      </CardContent>
    </CardActionArea>
     
  </Card>
 </div>
      </Grid>
        <Grid item lg={3} sm={6} xs={12}>
        <div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="500">
      <Card   className='pricard4'>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/businessman-sets-goals-runs-up-graph-columns-success-time-self-management-self-regulation-learning-self-organization-course-concept-illustration_335657-2070.jpg?w=996&t=st=1661594736~exp=1661595336~hmac=3c4dc46786cefd933b4d3487e31ab5b7c1def97600ad8220e90a35af597afaa5"
        alt="green iguana"
      />
      <CardContent className='pricardContent4'> 
       
        <Typography variant="body2">
        <p  className='pricardPara4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque velit iure ratione laborum culpa pariatur eaque voluptatum minima ullam.
        </p>
        </Typography>
      </CardContent>
    </CardActionArea>
     
  </Card>
 </div>
      </Grid>
        
      </Grid>
      </div>

    </div>
  )
}

export default HomeCard