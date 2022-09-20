import React,{useEffect} from 'react'
import './Home.css' 
import {Grid} from '@mui/material'
import Aos from 'aos';
import 'aos/dist/aos.css';   
import Slider from "react-slick"; 
import homeImage1 from '../../Assets/homeImages/ques.png'
import homeImage2 from '../../Assets/homeImages/final.png';
import homeImage3 from '../../Assets/homeImages/slide.jpeg'; 
import {Link} from 'react-router-dom'   
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'; 
import treeImage from '../../Assets/homeImages/treegreen.jpeg'   
import quotes from '../../Assets/homeImages/quotes1.jpeg'
 

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "fff",zIndex:"1"  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "fff",zIndex:"1" }}
      onClick={onClick}
    />
  );
}

function Home() {

  useEffect(() =>{
    Aos.init({});
},[]);
React.useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const settings = {
  dots:false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  className: 'slides',
  // autoplay:true
};
const settings2 = {
  dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
arrows:false, 
};
  return (
    <div className='homePage'>
      
       {/* <HomeContent /> */}

       <div className='prihomeContent'>
       <div className='homeSlider'>
    <Slider {...settings}>
      <div>
        <img className='homeImage' src={homeImage2} alt="image" />
      </div>
      <div>
      <img className='homeImage' src={homeImage1} alt="image" />
      </div>
      <div>
      <img className='homeImage' src={homeImage3} alt="image" /> 
      </div>
    </Slider>
  </div>
  <Grid container>
        <Grid item md={7} sm={9} xs={12} className='prisliderContent'>
            <h1 className='prisliderHead'>Make Your Career With Us</h1>
            <p className='prisliderPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi volup sit amet consectetur adipisicing elit. Nam modi voluptatibus expedita qui? Quis aspernatur unde perspiciatis dolorem odit doloremque!</p>
            <Link to="signup"><button className='prisliderButton'> <span>Book Now</span> </button></Link>
             
            <div class="priloop-wrapper">
  <div class="primountain"></div>
  <div class="prihill"></div>
  <div class="pritree"></div>
  <div class="pritree"></div>
  <div class="pritree"></div>
  <div class="prirock"></div>
  <div class="pritruck"></div>
  <div class="priwheels"></div>
</div> 
        </Grid>
      </Grid>
       </div>
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

    <div className='pricards2'>
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
    <div className='pritreeSection'> 
    <h1 className='pritreeHead'>Make The Right Choice</h1>
    <Grid container>
      <Grid item xs={12}>
        <div className='priorig'>
      <div className='priline1'><div className='pripost1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="200">
          <h1 className='prilineHead'>Business</h1></div></div>
        <div className='priline11'></div>
        <div className='priline2'><div className='pripost1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="400">
          <h1 className='prilineHead'>Technology</h1></div></div>
        <div className='priline21'></div>
        <div className='priline3'><div className='pripost1' data-aos="fade-right" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="600">
        <h1 className='prilineHead'>Arts</h1></div></div>
        <div className='priline31'></div>
        <div className='priline4'><div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="200">
        <h1 className='prilineHead'>Aviation</h1></div></div>
        <div className='priline41'></div>
        <div className='priline5'><div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="400">
        <h1 className='prilineHead'>Media</h1></div></div>
        <div className='priline51'></div>
        <div className='priline6'><div className='pripost1' data-aos="fade-left" data-aos-duration="800"  data-aos-mirror="true" data-aos-delay="600">
        <h1 className='prilineHead'>Medical</h1></div></div>
        <div className='priline61'></div>
        <img src={treeImage} alt="treeImage" className='pritreeImage' /> 
        </div>
        <div className='pridup'>
      <div className='priline1'> 
          <h1 className='prilineHead'>Business</h1></div> 
        <div className='priline11'></div>
        <div className='priline2'> 
          <h1 className='prilineHead'>Technology</h1></div> 
        <div className='priline21'></div>
        <div className='priline3'> 
        <h1 className='prilineHead'>Arts</h1></div> 
        <div className='priline31'></div>
        <div className='priline4'> 
        <h1 className='prilineHead'>Aviation</h1></div> 
        <div className='priline41'></div>
        <div className='priline5'> 
        <h1 className='prilineHead'>Media</h1></div> 
        <div className='priline51'></div>
        <div className='priline6'> 
        <h1 className='prilineHead'>Medical</h1></div> 
        <div className='priline61'></div>
        <img src={treeImage} alt="treeImage" className='pritreeImage' /> 
        </div>
      </Grid>
    </Grid>
   
    </div> 
    <div className='pristepSection'>
      <h1 className='prihowIt'>How It Works</h1> 
      <div className="prihow">
      <Grid container>
        <Grid item sx={12} sm={2.5} className="pristep1"> 
            <span uk-icon="icon:  thumbnails; ratio: 3" className='priicon1'></span>
            <h5 className='prifirstSubhead'>STEP 1</h5>
            <h1 className='prifirstHead'>Choose a Service</h1>
            <p className='prifirstPara'>Find the best coaching option to help you to tackle(and overcome) your current career obstacle.</p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='priicon2'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='priicon2dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="pristep2"> 
            <span uk-icon="icon:  users; ratio: 3" className='priicon1'></span>
            <h5 className='prifirstSubhead2'>STEP 2</h5>
            <h1 className='prifirstHead2'>Book a Career Coach</h1>
            <p className='prifirstPara2'>Explore our roster of top-notch career coaches who provide the service you need. Check out reviews from other customers to help you pick the right one. </p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='priicon3'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='priicon3dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="pristep3"> 
            <span uk-icon="icon:  calendar; ratio: 3" className='priicon1'></span>
            <h5 className='prifirstSubhead3'>STEP 3</h5>
            <h1 className='prifirstHead3'>Book On a Time</h1>
            <p className='prifirstPara3'>Your career coach will reach out to you within one business day to schedule your first appointment.</p>
        </Grid>
        <Grid item   sm={.5}> 
        <span uk-icon="icon:   arrow-right; ratio: 2" className='priicon4'></span>
        <span uk-icon="icon:   arrow-down; ratio: 2.5" className='priicon4dup'></span>
        </Grid>
        <Grid item sx={12} sm={2.5} className="pristep4"> 
            <span uk-icon="icon: check; ratio: 3" className='priicon1'></span>
            <h5 className='prifirstSubhead4'>STEP 4</h5>
            <h1 className='prifirstHead4'>Get Started!!</h1>
            <p className='prifirstPara4'>Meet with your career coach for a session by video_and kick your career into gear.</p>
        </Grid> 
       
    </Grid> 
      </div> 
    </div>
    <div className='prihomeCateg'>
      <h1 className='pricategHead'>Career Guidance Services</h1>
      <div className='pricategs'>
      <Grid container>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg1'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/college-students-sitting-desks-classroom-listening-teacher_74855-10516.jpg?w=996&t=st=1661856215~exp=1661856815~hmac=93528792d22e296876ae9e6fd38cbf475d2315763cd10b499d7f6328328e0df2"
          alt="person"
        />
        <CardContent className='pricategContent1'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead1'>Students</h2>
          <p  className='pricategPara1'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg2'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?w=996&t=st=1661856293~exp=1661856893~hmac=c70ef939b5f1dada0d9d4596059fe0119bb5b5d522ddcd62980d27c61aa91fcc"
          alt="person"
        />
        <CardContent className='pricategContent2'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead2'>Career Change</h2>
          <p  className='pricategPara2'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg3'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/volunteers-helping-disabled-friends-outdoor-walking_74855-7933.jpg?w=1060&t=st=1661856362~exp=1661856962~hmac=d76547f4dd96689dfaab984d6e972f07e3eb860830fbafd443f015d388b5bbfb"
          alt="person"
        />
        <CardContent className='pricategContent3'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead3'>Special Needs</h2>
          <p  className='pricategPara3'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg4'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/pensive-businessman-making-decision_74855-5283.jpg?w=1380&t=st=1661857036~exp=1661857636~hmac=81c56c3faa623de085acf4b062ac162a2dfe2af45c801655dd61455da91cad8a"
          alt="person"
        />
        <CardContent className='pricategContent4'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead4'>Career Break</h2>
          <p  className='pricategPara4'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg5'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg?w=1060&t=st=1661856797~exp=1661857397~hmac=d8e5c735735d06a29eefb549149bafd6ab66e2179d87cb9064ed0b4532cfa3f6"
          alt="person"
        />
        <CardContent className='pricategContent5'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead5'>Freshers</h2>
          <p  className='pricategPara5'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg6'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/employees-giving-hands-helping-colleagues-walk-upstairs_74855-5236.jpg?w=1060&t=st=1661856882~exp=1661857482~hmac=3358319b8705c0d9ff64d7fa20cf9eacc79319ae2e3a321e254d898959f24f72"
          alt="person"
        />
        <CardContent className='pricategContent6'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead6'>Career Energize</h2>
          <p  className='pricategPara6'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
      </Grid>
      </div>
     
    </div>
    <div className='pritestimonials'>
      <h1 className='pritestHead'>Testimonials</h1>
      <Slider {...settings2} className='priorig'>
           <Grid container>
            <Grid item xs={12}>
            <div className='pricard1Container  '>
                <Grid container>
                    <Grid item xs={6}>
                    <img className='priquote' src={quotes} alt="" />
                    <div className="uk-card uk-card-default uk-width-1-2@m pricard1Feed">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                                </div>
                                <div className="uk-width-expand priFeed1Cont">
                                    <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
                                    <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
                                </div>
                            </div>
                        </div>
                    <div className="uk-card-body">
                        <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    </div>
                    </Grid>
                <Grid item xs={6}>
                    <img className='priquote' src={quotes} alt="" />
                    <div className="uk-card uk-card-default uk-width-1-2@m pricard2Feed">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                                    </div>
                                    <div className="uk-width-expand priFeed1Cont">
                                        <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
</Grid>
                </Grid>
          
            </div>
            
            </Grid>
           </Grid>
         
         
           <Grid container>
            <Grid item xs={12}>
            <div className='pricard1Container'>
                <Grid container>
                    <Grid item xs={6}>
                    <img className='priquote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m pricard1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
               
                    <Grid item xs={6}>
                    <img className='priquote' src={quotes} alt="" />
<div className="uk-card uk-card-default uk-width-1-2@m pricard2Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
</Grid>
                </Grid>
          
            </div>
            
            </Grid>
           </Grid>
           <Grid container>
            <Grid item xs={12}>
            <div className='pricard1Container'>
                <Grid container>
                    <Grid item xs={6}>
                    <img className='priquote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m pricard1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
               
                    <Grid item xs={6}>
                    <img className='priquote' src={quotes} alt="" />
<div className="uk-card uk-card-default uk-width-1-2@m pricard2Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
</Grid>
                </Grid>
          
            </div>
            
            </Grid>
           </Grid>
           <Grid container>
            <Grid item xs={12}>
            <div className='pricard1Container'>
                <Grid container>
                    <Grid item xs={6}>
                    <img className='priquote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m pricard1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
               
                    <Grid item xs={6}>
                    <img className='priquote' src={quotes} alt="" />
<div className="uk-card uk-card-default uk-width-1-2@m pricard2Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
</Grid>
                </Grid>
          
            </div> 
            </Grid>
           </Grid>
        </Slider>


        {/* ...................................... */}


        <Slider {...settings} className='dup'>
           <Grid container>
            <Grid item xs={12}>
            <div className='card2Container  '>
                <Grid container>
                    <Grid item xs={12}>
                    <img className='priquote' src={quotes} alt="" />
                    <div className="uk-card uk-card-default uk-width-1-2@m pricard1Feed">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                                </div>
                                <div className="uk-width-expand priFeed1Cont">
                                    <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
                                    <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
                                </div>
                            </div>
                        </div>
                    <div className="uk-card-body">
                        <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    </div>
                    </Grid>
                 
                </Grid>
          
            </div>
            
            </Grid>
           </Grid>
         
         
           <Grid container>
            <Grid item xs={12}>
            <div className='card2Container'>
                <Grid container>
                    <Grid item xs={12}>
                    <img className='priquote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m pricard1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
               
                        </Grid>
          
            </div>
            
            </Grid>
           </Grid>
           <Grid container>
            <Grid item xs={12}>
            <div className='card2Container'>
                <Grid container>
                    <Grid item xs={12}>
                    <img className='priquote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m pricard1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
                
                </Grid>
          
            </div>
            
            </Grid>
           </Grid>
           <Grid container>
            <Grid item xs={12}>
            <div className='card2Container'>
                <Grid container>
                    <Grid item xs={12}>
                    <img className='priquote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m pricard1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand priFeed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom prifeed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top prifeed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='prifeed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
                
                </Grid>
          
            </div>



            {/* ................................. */}
 
            
            </Grid>
           </Grid>
        </Slider>
    </div>
    </div>
  )
}

export default Home