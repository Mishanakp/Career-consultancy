import React, { useState }   from 'react' 
import   './Footer.css'
import {Grid} from '@mui/material'
import {Link} from 'react-router-dom'
import careerLogo from '../../Assets/homeImages/careerLogo2.png'

function Footer() {  

 


  return (
//     <div className='footer'>
//     <Grid container>
//       <Grid item sm={4} xs={12}>
//         <div className='foot1'>
//           <img src={careerLogo} alt='' className='footerLogo2'/>
//         </div>
//       </Grid>
//       <Grid item sm={8} xs={12}>
//         <div className='foot2'>
//            <Grid container>
//             <Grid item md={4} xs={6}>
//               <ul className='footList1'>
//                 <h1 className='footHead1'>Our Company</h1>
//                 <Link to="/whoweare"><li className='footLIstitem1'>About Us</li></Link>
//                 <Link to="/contact"><li className='footLIstitem1'>Contact Us</li></Link>
//               </ul>
//             </Grid>
//             <Grid item md={4} xs={6}>
//               <ul className='footList2'>
//                 <h1 className='footHead1'>For You</h1>
                 
//                 <li className='footLIstitem1'>Login</li> 
                
               
//               </ul>
//             </Grid>
//             <Grid item md={4} xs={6}>
//               <ul className='footList3'>
//                 <h1 className='footHead1'>Whom Do We Serve</h1>
//                 <li className='footLIstitem1'>Students</li>
//                 <li className='footLIstitem1'>Career Change</li>
//                 <li className='footLIstitem1'>Special Needs</li>
//                 <li className='footLIstitem1'>Career Break</li>
//                 <li className='footLIstitem1'>Freshers</li>
//                 <li className='footLIstitem1'>Career Energize</li> 
//               </ul>
//             </Grid>
//            </Grid>
//            <Grid container>
//             <Grid item xs={12}>
//               <Grid container>
                
//                 <Grid item  lg={4} sm={6} xs={12}>
//                   <h4 className="footSub">SUBSCRIBE FOR UPDATES</h4>
//                 </Grid>
//                 <Grid item lg={4} sm={6} xs={12}>
//                 <span className='email_span'>
//             <form className='footerForm'>
//           <input  className="uk-input uk-form-blank uk-form-width-medium" type="email" placeholder="Enter Email" name='message'  
         
//                required/>
                
//             </form>
//             </span>
//             <span className='icon__span' uk-icon="icon: arrow-right; ratio: 1.8"></span>
//                   </Grid>
//                   <Grid item lg={4} sm={6} xs={12}>
//                   <div className='icons__footer'>
//                 <a href='https://www.youtube.com/'><span className='icon__span2' uk-icon="icon: youtube; ratio: 1.5"></span> &nbsp;</a>
//                <a href='https://www.linkedin.com/'><span className='icon__span2' uk-icon="icon:  linkedin; ratio: 1.5"></span> &nbsp;</a> 
//                <a href='https://www.instagram.com/'><span className='icon__span2' uk-icon="icon:  instagram; ratio: 1.5"></span> </a> 
//                <a href='https://www.facebook.com/'><span className='icon__span2' uk-icon="icon: facebook; ratio: 1.5"></span>  </a>
//                <a href='https://www.twitter.com/'><span className='icon__span2' uk-icon="icon:  twitter; ratio: 1.5"></span></a>
//             </div>
//                   </Grid>
                 
               
//               </Grid>
//             </Grid>
//            </Grid>
//         </div> 
//       </Grid>
//     </Grid>
//     <Grid container>
//       <Grid item xs={12}>
//       <div className='last__footer'>
//         <Grid container>
//           <Grid item lg={4} md={5} sm={6} xs={12}>
//           <p className='pricopyright'>© 2022 Career Consultancy. All rights reserved.</p> 
//           </Grid> 
//           <Grid item lg={8} md={7} sm={6} xs={12}>
//         <p className='priprivacy__terms'  > <span className='priprivacy'> Privacy Policy</span>  <span uk-icon="minus" className='minus'>  </span> <span className='terms'> Terms of Use</span></p>
//         </Grid>
//         </Grid>
//       </div>
//       </Grid>
//     </Grid>
// </div> 

<div className='foooterCons'>
  <Grid container className='footerContainer'>
    <Grid item  sm={3} xs={12}>
    <img src={careerLogo} alt='' className='footerLogo2'/>
    <p className='footerParaCons'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique, provident tempore tempora blanditiis debitis iusto, minima quia totam placeat, doloribus sit maiores aliquid sequi iure deserunt eligendi sint possimus.</p>
    </Grid>
    <Grid item  sm={2} xs={12}>
    <ul className='footList1'>
                  <h1 className='footHead1'>Our Company</h1>
                 <Link to="/whoweare"><li className='footLIstitem1'>About Us</li></Link>
                  <Link to="/contact"><li className='footLIstitem1'>Contact Us</li></Link>
               </ul>
    </Grid>
    <Grid item  sm={2} xs={12}>
    <ul className='footList2'>
               <h1 className='footHead1'>For You</h1>
                 
                <li className='footLIstitem1'>Login</li> 
                
               
              </ul>
    </Grid>
    <Grid item sm={2} xs={12}>
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
    <div className='icons__footer'>
                 <a href='https://www.youtube.com/'><span className='icon__span2' ><img className='footericonimage' src="https://cdn-icons-png.flaticon.com/512/733/733590.png?w=740&t=st=1663503820~exp=1663504420~hmac=2746187a470efb3f33fdbff1f93fc43ddcd9893b0b7839d9716381a6c62fea38"></img></span> &nbsp;</a>
                 <a href='https://www.linkedin.com/'><span className='icon__span2'  ><img className='footericonimage2' src="https://cdn-icons-png.flaticon.com/512/124/124011.png?w=740&t=st=1663504011~exp=1663504611~hmac=0927381a84bd58398014967c186fcdf1367c92f8375ec4229582b404f61f954e"></img></span> &nbsp;</a> 
                 <a href='https://www.instagram.com/'><span className='icon__span2'    ><img className='footericonimage3' src="https://cdn-icons-png.flaticon.com/512/174/174855.png?w=740&t=st=1663504258~exp=1663504858~hmac=23ed646cc4bb3f0ce99dbfa2d04b69473f987f0114b782aa937217acdfaedc61"></img></span> </a> 
                 <a href='https://www.facebook.com/'><span className='icon__span2'   ><img className='footericonimage4' src="https://cdn-icons-png.flaticon.com/512/220/220200.png?w=740&t=st=1663504404~exp=1663505004~hmac=e11ebc62bf151a1a53439fd05598cb311e24c38e332fd8cded9bcbface286e3b"></img></span>  </a>
                 <a href='https://www.twitter.com/'><span className='icon__span2'  ><img className='footericonimage5' src="https://cdn-icons-png.flaticon.com/512/889/889147.png?w=740&t=st=1663504464~exp=1663505064~hmac=d1aa446f12f3fd006430ca827df1df52d5346a6ab4807bcda3d97451382dcbb5"></img></span></a>
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