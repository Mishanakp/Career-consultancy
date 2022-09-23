import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './Contact.css'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {Typography} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import swal from 'sweetalert';

function Contact() {

  const [message, setMessage] = React.useState('');

  const handleChangeb = event => {
    setMessage(event.target.value);
  };


  


  const handleClick = event => {
    event.preventDefault();



 if (message.trim().length !== 0) {
     console.log('input value is NOT empty');
 
    swal({
   
      text: " message send sucessfully",
     type:"success",
      icon: "success",
       
     

    }).then(function() {
      window.location = "/";
  });
    
      
     } else {
     console.log('input value is empty');
     swal({
      text: "please filled the field",
      icon: "error",
      dangerMode: true,
     
    });
    } 
  }; 
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
   return (
    <div>
<Box sx={{ flexGrow: 1 }} className="salfirstbox">
      <Grid container spacing={2}>
   <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
    <div className="main">
      <div className="contenthead">
    <h1>Contact Us</h1>
    <p2>Feel free to get in touch with us</p2>
    </div>
    </div>
   </Grid>
   <Grid item xl={2} lg={2} md={1} sm={1} xs={1}>

   </Grid>
<Grid item xl={8} lg={8} md={10} sm={10} xs={10}>
<div class="ui three column grid">
  <div class="column">
    <div class="ui fluid card">
      <div class="content">
      <PlaceOutlinedIcon sx={{ fontSize: 45,color:'#23BDB8'}}/>
<h3>Zora@Halifax</h3>
<p2>5416 spring Garden Rd,</p2>   
   </div>
    </div>
  </div>
  <div class="column">
    <div class="ui fluid card">
      <div class="content">
      <PlaceOutlinedIcon sx={{ fontSize: 45,color:'#23BDB8'}}/>

      <h3>Zora@Halifax</h3>
<p2>5416 spring Garden Rd,</p2> 
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui fluid card">
      <div class="content">
<h3>General Contacts</h3>
<p2>Inquiries:hello@zora.in</p2>
<br/>
<p2>Careers:hello@zora.in</p2>
<br/>
<p2>Media:hello@zora.in</p2>
<br/>
<div className="icons">
  <ul>
    <li>
{/* <FacebookIcon sx={{color:'darkblue'}}/> */}
<img className='contactFaceIcon' src="https://cdn-icons-png.flaticon.com/512/220/220200.png?w=740&t=st=1663504404~exp=1663505004~hmac=e11ebc62bf151a1a53439fd05598cb311e24c38e332fd8cded9bcbface286e3b" alt="" />
</li>
<li>
{/* <TwitterIcon sx={{color:'lightblue'}}/> */}
<img className='contactFaceIcon' src="https://cdn-icons-png.flaticon.com/512/889/889147.png?w=740&t=st=1663504464~exp=1663505064~hmac=d1aa446f12f3fd006430ca827df1df52d5346a6ab4807bcda3d97451382dcbb5"></img>
</li>
<li>
{/* <InstagramIcon sx={{color:'rgb(233, 89, 80)'}}/> */}
<img className='contactFaceIcon' src="https://cdn-icons-png.flaticon.com/512/174/174855.png?w=740&t=st=1663504258~exp=1663504858~hmac=23ed646cc4bb3f0ce99dbfa2d04b69473f987f0114b782aa937217acdfaedc61"></img>
</li>
<li>
{/* <LinkedInIcon sx={{color:'#0a66c2'}}/> */}
<img className='contactFaceIcon' src="https://cdn-icons-png.flaticon.com/512/124/124011.png?w=740&t=st=1663504011~exp=1663504611~hmac=0927381a84bd58398014967c186fcdf1367c92f8375ec4229582b404f61f954e"></img>
</li>
</ul>
</div>
      </div>
    </div>
  </div>
</div>

</Grid>
<Grid item xl={2} lg={2} md={1} sm={1} xs={1}></Grid>
<Grid item xl={1} lg={1} md={1} sm={1} xs={1}>

</Grid>
<Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
<div className="message">
  <h3>Send us a message</h3>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className="labels" type="text" name="firstname" placeholder="First Name"  variant="outlined"onChange={handleChangeb}/>
      <TextField className="labels" type="text" name="lastname" placeholder="Last Name"  variant="outlined" onChange={handleChangeb}/>
      <br/>
      <TextField className="labels" type="text" name="email" placeholder="Email"  variant="outlined" onChange={handleChangeb}/>
      <TextField className="labels" type="text" name="phonenumber" placeholder="Phone Number"  variant="outlined" onChange={handleChangeb}/>

</Box>
<br/>
<Box className="messagebox" component="form" sx={{
        '& .MuiTextField-root': { m: 1, },}}noValidate autoComplete="off">
 <TextField
          id="outlined-textarea"
          label="Message"
          placeholder=""
          multiline
        />
        </Box>
        <br/>
        <button class="buttoncontact" onClick={handleClick}><span>Send Message</span> </button>
</div>
</Grid>

<Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
  <div className="questions">
  <h3>General FAQ</h3>

  <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>1. What are the procedures behind for a user to bookappoinments?</Typography>
        </AccordionSummary >
        <AccordionDetails>
          <Typography>
          You can apply for the job at INFOLKS by submitting your application and resume at our career portal https://www.infolks.info/career. Always it’s first come first served. So make sure you submit your application at the earliest.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>2. Can I apply for multiple Careers through this platform?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          yes, you can apply for multiple job roles according to your interests. Simply check multiple boxes given under job titles while applying for job at INFOLKS. Your multi talence is very much appreciated.  

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>3. Once I have submitted my application how will I be informed regarding the interview?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After your application is received and scrutinized, you will receive a confirmation mail from our executives. If your candidature is confirmed, an email will be sent shortly to your registered email address detailing the date, time and venue of the drive.          
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>4. What is the strongest evidence for the treatment of depression with clinical psychology?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Studies on CBT and a combination of medication and psychological therapy show that it is an effective treatment for a wide range of mental illnesses, including depression, anxiety disorders, bipolar disorder, eating disorders and schizophrenia.      </Typography>
        </AccordionDetails>
      </Accordion>


     

      <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>5. Does the company give more priority for experienced candidates over freshers ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
        All the candidates are given equal importance. Experienced candidates may have priority considering their field of work or our requirements. Such a priority will be clearly mentioned or informed to the candidates prior to their recruitment drive.
          </Typography>
        </AccordionDetails>
      </Accordion>




</div>


</Grid>


<Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
  
</Grid>

      </Grid>
</Box>


{/* This is the next section  */}

<Box sx={{ flexGrow: 1 }} className="salsecond" >
      <Grid container spacing={2}>
      <Grid item  xs={12}>
    <div className="main">
      <div className="contenthead">
    <h1>Contact Us</h1>
    <p2>Feel free to get in touch with us</p2>
    </div>
    </div>
   </Grid>
      <Grid item xs={1}></Grid>
<Grid item xs={10}>
<div class="column">
    <div class="ui fluid card">
      <div class="contenthead">
      <PlaceOutlinedIcon sx={{ fontSize: 45,color:'#23BDB8'}}/>
<h3>Zora@Halifax</h3>
<p2>5416 spring Garden Rd,</p2>   
   </div>
    </div>
  </div>
</Grid>
<Grid item xs={1}></Grid>

<Grid item xs={1}></Grid>
<Grid item xs={10}>
<div class="column">
    <div class="ui fluid card">
      <div class="content">
      <PlaceOutlinedIcon sx={{ fontSize: 45,color:'#23BDB8'}}/>

      <h3>Zora@Halifax</h3>
<p2>5416 spring Garden Rd,</p2> 
      </div>
    </div>
  </div>
</Grid>
<Grid item xs={1}>

</Grid>
<Grid item xs={1}></Grid>

<Grid item xs={10}>
  <div cl ass="column">
    <div class="ui fluid card">
      <div class="content">
<h3>General Contacts</h3>
<p2>Inquiries:hello@zora.in</p2>
<br/>
<p2>Careers:hello@zora.in</p2>
<br/>
<p2>Media:hello@zora.in</p2>
<br/>
<div className="icons">
  <ul>
    <li>
{/* <FacebookIcon sx={{color:'darkblue'}}/> */}
<img className='contactFaceIcon' src="https://cdn-icons-png.flaticon.com/512/220/220200.png?w=740&t=st=1663504404~exp=1663505004~hmac=e11ebc62bf151a1a53439fd05598cb311e24c38e332fd8cded9bcbface286e3b" alt="" />
</li>
<li>
{/* <TwitterIcon sx={{color:'lightblue'}}/> */}
<img className='contactFaceIcon' src="https://cdn-icons-png.flaticon.com/512/889/889147.png?w=740&t=st=1663504464~exp=1663505064~hmac=d1aa446f12f3fd006430ca827df1df52d5346a6ab4807bcda3d97451382dcbb5"></img>

</li>
<li>
{/* <InstagramIcon sx={{color:'rgb(233, 89, 80)'}}/> */}
<img className='contactFaceIcon' src="https://cdn-icons-png.flaticon.com/512/174/174855.png?w=740&t=st=1663504258~exp=1663504858~hmac=23ed646cc4bb3f0ce99dbfa2d04b69473f987f0114b782aa937217acdfaedc61"></img>

</li>
<li>
{/* <LinkedInIcon sx={{color:'#0a66c2'}}/> */}
<img className='contactFaceIcon' src="https://cdn-icons-png.flaticon.com/512/124/124011.png?w=740&t=st=1663504011~exp=1663504611~hmac=0927381a84bd58398014967c186fcdf1367c92f8375ec4229582b404f61f954e"></img>

</li>
</ul>
</div>
      </div>
    </div>
  </div>
</Grid>


<Grid item xs={1}></Grid>




      <Grid item xs={1}>
</Grid>

<Grid item xs={10}>
<div className="message">
  <h3>Send us a message</h3>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className="label" type="text" name="firstname" placeholder="First Name"  variant="outlined" />
      <TextField className="label" type="text" name="lastname" placeholder="Last Name"  variant="outlined" />
      <TextField className="label" type="text" name="email" placeholder="Email"  variant="outlined" />
      <TextField className="label" type="text" name="phonenumber" placeholder="Phone Number"  variant="outlined" />

</Box>
<br/>
<Box className="messagebox" component="form" sx={{
        '& .MuiTextField-root': { m: 1, },}}noValidate autoComplete="off">
 <TextField
          id="outlined-textarea"
          label="Message"
          placeholder=""
          multiline
        />
        </Box>
        <br/>
        <button class="buttoncontact"><span>Send Message</span> </button>
</div>

</Grid>
<Grid item xs={1}>

</Grid>

<Grid item xs={1}>

</Grid>
<Grid item xs={10}>
  <br/>
  <div className="questions">
  <h3>General FAQ</h3>
  <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>1. What are the procedures behind for a user to bookappoinments?</Typography>
        </AccordionSummary >
        <AccordionDetails>
          <Typography>
          You can apply for the job at INFOLKS by submitting your application and resume at our career portal https://www.infolks.info/career. Always it’s first come first served. So make sure you submit your application at the earliest.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>2. Can I apply for multiple Careers through this platform ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          yes, you can apply for multiple job roles according to your interests. Simply check multiple boxes given under job titles while applying for job at INFOLKS. Your multi talence is very much appreciated.  

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>3. Once I have submitted my application how will I be informed regarding the interview?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After your application is received and scrutinized, you will receive a confirmation mail from our executives. If your candidature is confirmed, an email will be sent shortly to your registered email address detailing the date, time and venue of the drive.          
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>4. Once I have submitted my application how will I be informed regarding the interview?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After your application is received and scrutinized, you will receive a confirmation mail from our executives. If your candidature is confirmed, an email will be sent shortly to your registered email address detailing the date, time and venue of the drive.          </Typography>
        </AccordionDetails>
      </Accordion>


     

      <Accordion>
        <AccordionSummary
        style={{background:'linear-gradient(135deg, #23BDB8 0%, #43E794 100%)',}}
          expandIcon={<ExpandMoreIcon className="expansion"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'17px',color:'white'}}>5. Does the company give more priority for experienced candidates over freshers ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
        All the candidates are given equal importance. Experienced candidates may have priority considering their field of work or our requirements. Such a priority will be clearly mentioned or informed to the candidates prior to their recruitment drive.
          </Typography>
        </AccordionDetails>
      </Accordion>




</div>


</Grid>


<Grid item xs={1}>
  
</Grid>





</Grid>
</Box>




    </div>
  )
}

export default Contact