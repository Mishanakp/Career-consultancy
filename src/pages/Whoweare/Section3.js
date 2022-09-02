import React,{useEffect} from 'react'
import './Section3.css';
import {Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Section3 = () => {
  return (
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
  )
}
export default Section3






