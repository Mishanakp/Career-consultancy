import React from 'react'
import './Footer.css'
import {Grid} from '@mui/material'
import {Link} from 'react-router-dom'

 
function Footer() {
  
  return (
    <div className='footer'>
    <Grid container>
      <Grid item sm={4} xs={12}>
        <div className='foot1'>
          <h1 className='footerLogo'>Logo</h1>
        </div>
      </Grid>
      <Grid item sm={8} xs={12}>
        <div className='foot2'>
           <Grid container>
            <Grid item md={4} xs={6}>
              <ul className='footList1'>
                <h1 className='footHead1'>Our Company</h1>
                <Link to="/whoweare"><li className='footLIstitem1'>About Us</li></Link>
                <Link to="/contact"><li className='footLIstitem1'>Contact Us</li></Link>
              </ul>
            </Grid>
            <Grid item md={4} xs={6}>
              <ul className='footList2'>
                <h1 className='footHead1'>For You</h1>
                 
                <li className='footLIstitem1'>Login</li> 
                
               
              </ul>
            </Grid>
            <Grid item md={4} xs={6}>
              <ul className='footList3'>
                <h1 className='footHead1'>Whom Do We Serve</h1>
                <li className='footLIstitem1'>Students</li>
                <li className='footLIstitem1'>Career Change</li>
                <li className='footLIstitem1'>Special Needs</li>
                <li className='footLIstitem1'>Career Break</li>
                <li className='footLIstitem1'>Freshers</li>
                <li className='footLIstitem1'>Career Energize</li> 
              </ul>
            </Grid>
           </Grid>
           <Grid container>
            <Grid item xs={12}>
              <Grid container>
                
                <Grid item  lg={4} sm={6} xs={12}>
                  <h4 className="footSub">SUBSCRIBE FOR UPDATES</h4>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                <span className='email_span'>
            <form className='footerForm'>
          <input  className="uk-input uk-form-blank uk-form-width-medium" type="email" placeholder="Enter Email" name='email'/>
            </form>
            </span>
            <span className='icon__span' uk-icon="icon: arrow-right; ratio: 1.8"></span>
                  </Grid>
                  <Grid item lg={4} sm={6} xs={12}>
                  <div className='icons__footer'>
                <a href='https://www.youtube.com/'><span className='icon__span2' uk-icon="icon: youtube; ratio: 1.5"></span> &nbsp;</a>
               <a href='https://www.linkedin.com/'><span className='icon__span2' uk-icon="icon:  linkedin; ratio: 1.5"></span> &nbsp;</a> 
               <a href='https://www.instagram.com/'><span className='icon__span2' uk-icon="icon:  instagram; ratio: 1.5"></span> </a> 
               <a href='https://www.facebook.com/'><span className='icon__span2' uk-icon="icon: facebook; ratio: 1.5"></span>  </a>
               <a href='https://www.twitter.com/'><span className='icon__span2' uk-icon="icon:  twitter; ratio: 1.5"></span></a>
            </div>
                  </Grid>
                 
               
              </Grid>
            </Grid>
           </Grid>
        </div> 
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
      <div className='last__footer'>
        <Grid container>
          <Grid item lg={4} md={5} sm={6} xs={12}>
          <p className='pricopyright'>© 2022 Career Consultancy. All rights reserved.</p> 
          </Grid> 
          <Grid item lg={8} md={7} sm={6} xs={12}>
        <p className='priprivacy__terms'  > <span className='priprivacy'> Privacy Policy</span>  <span uk-icon="minus" className='minus'>  </span> <span className='terms'> Terms of Use</span></p>
        </Grid>
        </Grid>
      </div>
      </Grid>
    </Grid>
</div> 
  )
}

export default Footer