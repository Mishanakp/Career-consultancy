import React,{useEffect} from 'react'
import {Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom';
import Banner from './Banner';
import './Category.css';

function Category() {
  return (
    <div>
      <Banner/>



      <div className='homeCateg'>
      <h1 className='careerhead'>Career Guidence Categories</h1>
      <div className='categs'>
      <Grid container spacing={{ xs: 5, sm: 2, md:2}}>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ1'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/artists-creating-artworks-flat-illustration_74855-5218.jpg?size=626&ext=jpg&ga=GA1.2.632710716.1661852746"
          alt="person"
        />
        <CardContent className='categContent1'>
          <Typography variant="body2" >
          <h2 className='categHead1'>Arts</h2>
          <p  className='categPara1'>
          art, also called (distinguish from other art forms) visual art, a visual object or experience consciously created through an expression of skill or imagination.
          </p>
          <Link to="/ourconsultans"><button class="button-1">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ2'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg?size=626&ext=jpg&ga=GA1.2.632710716.1661852746"
          alt="person"
        />
        <CardContent className='categContent2'>
          <Typography variant="body2" >
          <h2 className='categHead2'>Business</h2>
          <p  className='categPara2'>
          Business refers to an enterprising entity or organization that carries out professional activities. They can be commercial, industrial, or others.**************
          </p>
          <Link to="/ourconsultans"><button class="button-2">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ3'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/tiny-pharmacists-with-rx-prescription-drugs_74855-7882.jpg?size=626&ext=jpg&ga=GA1.2.632710716.1661852746"
          alt="person"
        />
        <CardContent className='categContent3'>
          <Typography variant="body2" >
          <h2 className='categHead3'>Medical</h2>
          <p  className='categPara3'>
          The medical industry is an integral part of the delivery of medical care. They provide us with diagnostic tools, treatments and intervention tools.********
          </p>
          <Link to="/ourconsultans"><button class="button-3">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ4'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/female-journalist-with-microphone-interviewing-man_74855-7350.jpg?size=626&ext=jpg&ga=GA1.2.632710716.1661852746"
          alt="person"
        />
        <CardContent className='categContent4'>
          <Typography variant="body2" >
          <h2 className='categHead4'>Media</h2>
          <p  className='categPara4'>
          Media refers to the communication channels through which we disseminate news, music, movies, education, promotional messages and other data.********

          </p>
          <Link to="/ourconsultans"><button class="button-4">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ5'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/tiny-programmers-upgrading-operation-system-computer-isolated-flat-illustration_74855-11138.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
          alt="person"
        />
        <CardContent className='categContent5'>
          <Typography variant="body2" >
          <h2 className='categHead5'>Service Industries</h2>
          <p  className='categPara5'>
          service industry, an industry in that part of the economy that creates services rather than tangible objects. Economists divide all economic.*********
          </p>
          <Link to="/ourconsultans"><button class="button-5">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ6'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/female-attorney-standing-front-judge-talking-isolated-flat-illustration_74855-10653.jpg?size=626&ext=jpg&ga=GA1.2.632710716.1661852746"
          alt="person"
        />
        <CardContent className='categContent6'>
          <Typography variant="body2" >
          <h2 className='categHead6'>Low enforcement</h2>
          <p  className='categPara6'>
          Law enforcement describes the agencies and employees responsible for enforcing laws, maintaining public order, and managing public safety.*********** 
          </p>
          <Link to="/ourconsultans"><button class="button-6">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ7'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/plane-service-isolated-flat-vector-illustration-cartoon-mechanics-repairing-airplane-before-flight-adding-fuel-aircraft-maintenance-aviation-concept_74855-10134.jpg?size=626&ext=jpg&ga=GA1.2.632710716.1661852746"
          alt="person"
        />
        <CardContent className='categContent7'>
          <Typography variant="body2" >
          <h2 className='categHead7'>Aviation</h2>
          <p  className='categPara7'>
          Aviation comes from the Latin avis meaning "bird," an appropriate translation given that aviation deals with travel by air, specifically in a plane.***********
          </p>
          <Link to="/ourconsultans"><button class="button-7">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ8'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.jpg?size=626&ext=jpg&ga=GA1.2.632710716.1661852746"
          alt="person"
        />
        <CardContent className='categContent8'>
          <Typography variant="body2" >
          <h2 className='categHead8'>Education</h2>
          <p  className='categPara8'>
          Education is a purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits.****************
          </p>
          <Link to="/ourconsultans"><button class="button-8">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
        <Card className='categ9'>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://img.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg?size=626&ext=jpg&ga=GA1.2.632710716.1661852746"
          alt="person"
        />
        <CardContent className='categContent9'>
          <Typography variant="body2" >
          <h2 className='categHead9'>Tehnology</h2>
          <p  className='categPara9'>
          Technology is the result of accumulated knowledge and application of skills, methods, and processes used in industrial production and scientific research.
          </p>
          <Link to="/ourconsultans"><button class="button-9">BOOK NOW </button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
      </div>
    </div>
    </div>
  )
}

export default Category
