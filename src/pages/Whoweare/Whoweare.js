

import animation from '../../Assets/about/animation.gif';
import cartoon from '../../Assets/about/cartoon.jpeg';
import React,{useEffect} from 'react'
import {Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

import './Whoweare.css';




function Whoweare() {
  return (
    <div>
      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid id="mishanafirstsection">
    <div class="uk-card-media-left uk-cover-container" id="mishanafirstt">
    <img className='vdo' src={animation}  loop muted playsinline uk-video="autoplay: inview"></img>
        <canvas width="300" height="100"></canvas>
    </div>
    <div>
        <div class="uk-card-body" id="mishanasecondd">
            <h3 class="uk-card-title" id="mishanathirdd">WHO WE ARE ?</h3>
            <p className='para-one'>Career development is more than just deciding on a major and what job you want to get when you graduate. 
                It really is a lifelong process, meaning that throughout your life you will change, situations will change,
                and you will continually have to make career and life decisions. The goal of Career Counseling is to not only
                help you make the decisions you need to make now, but to give you the knowledge and skills you need to make 
                future career and life decisions.</p>
            
        </div>
    </div>
</div>



<div className='mishsectionportion'> 
     <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid id="mishanasecondsection">
    <div class="uk-card-body1">
           <h3 class="uk-card-title2">WHY CHOOSE US ?</h3>
            <p className='para-two'>We have passed our path from the headwind and have covered the entire nation. Acquainted well with the nitty-gritty of this field we provide solutions keeping in mind the requirement of both job seekers as well as recruiters.
             Vast database of potential job seekers has assisted many organizations to choose the best from the pool of equals. Moreover, this platform also shows light to various job seekers to reach their perfect destination. This portal facilitates you to post resume,
              to contact the desired company. So, connect with our family to shape your dreams into reality.</p>
            
        </div>
    <div>
    <div class="uk-card-media-left uk-cover-container2">
    <img className='1mage-2' src={cartoon} ></img>
        <canvas width="300" height="100"></canvas>
    </div>
    </div>
  
    </div>
</div>




<div className='homeCard'>
         <h1 className='cardMainHead'>WHAT MAKE US SPECIAL</h1>
         {/* ............................... */}
    <div className='cards1'>
      <Grid container>
       <Grid item lg={3} sm={6} xs={12}>

        <Card className='card1'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/employees-giving-hands-helping-colleagues-walk-upstairs_74855-5236.jpg?w=826&t=st=1661437021~exp=1661437621~hmac=bdfdcc802d93d586fa38d6ffac090481dac122735b22a84a6e08a4fdc00771c7"
          alt="person"
        />
        <CardContent className='cardContent1'>
          <Typography variant="body2" >
          <h3 className='card1head'>Highly Qualified Team</h3>
          <p  className='cardPara1'>
          We have a highly qualified team to help our customers to meet their expectations and requirments.
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
        <Card  className='card2'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/team-programmers-working-program-code-with-laptops-teamwork-male-female-professional-testers-coders-flat-vector-illustration-software-development-programming-lesson-concept_74855-22051.jpg?size=626&ext=jpg&ga=GA1.2.968221939.1661161723"
          alt="green iguana"
        />
        <CardContent className='cardContent2'>
          <Typography variant="body2"  >
          <h3 className='card2head'>Technology Consultation</h3>
          <p  className='cardPara2'>
          We are providing technology consultation for choosing the right technology for a particular requirment.
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
              <Card   className='card3'>
    <CardActionArea>
      <CardMedia
        component="img"
        image="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?size=626&ext=jpg&ga=GA1.2.968221939.1661161723"
        alt="green iguana"
      />
      <CardContent className='cardContent3'>
        <Typography variant="body2">
        <h3 className='card3head'>Customer Support</h3>
        <p  className='cardPara3'>We are providing dedicated and easily accessible 24/7 customer support to all clients.
        </p>
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>
 
      </Grid>
        <Grid item lg={3} sm={6} xs={12}>
              <Card   className='card4'>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/security-analysts-protect-internet-connected-systems-with-shield-cyber-security-data-protection-cyberattacks-concept_335657-1827.jpg?size=626&ext=jpg&ga=GA1.2.1405503288.1661585887"
        alt="green iguana"
      />
      <CardContent className='cardContent4'>
        <Typography variant="body2">
        <h3 className='card4head'>Safe and Secure</h3>
        <p  className='cardPara4'>We are providing highly safe and secure products to all our clients
        </p>
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>

      </Grid>
      </Grid>
      </div>
    
    </div>



    <div className='gridsection'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, sm: 2, lg: 2}} columns={{ xs: 12, sm: 8, md: 12 }}>
        
          <Grid item lg={2} xs={12} sm={2} md={4}>
            
              <h3 className='gridhead1'>OUR HISTORY</h3>
              <p className='gridpara1'>To be client-centric, technology-driven, adaptive,
               innovative and creative in our approach for attaining excellence and promoting 
               profitability for our clients and ourselves by delivering best IT solutions and
                its successful implementation</p>
          
          </Grid>
          <Grid item lg={2} xs={12} sm={2} md={4}>
           
              <h3 className='gridhead2'>OUR MISSION</h3>
              <p className='gridpara2'>To be admired as an organization with integrity ,
               ethical in its conduct, professional in its approach, complete dedication and providing 
               cost effective, surpassing their expectations,enhancing their revenues at the same time</p>
            
          </Grid>
          <Grid item lg={2} xs={12} sm={2} md={4}>
            
              <h3 className='gridhead3'>OUR VISION</h3>
              <p className='gridpara3'>To be client-centric, technology-driven, adaptive, innovative and 
              creative in our approach for attaining excellence and promoting profitability for our clients 
              and ourselves by delivering best IT solutions and its successful implementation</p>
            
          </Grid>
      
      </Grid>
    </Box>
    </div>
     


    <div className="section5">
   
   <span> <h3 className='section5head'>Have any question about us?</h3>
       <p className='section5para'>Don't hesitate to contact us</p>
       <button class="button1">CONTACT US </button>
   </span>
  
   </div>
    </div>



  )
}

export default Whoweare
