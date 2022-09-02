import React  from 'react'
import Slider from "react-slick";
import './Testimonials.css'
import { Grid } from '@mui/material'; 
import quotes from '../../../../Assets/homeImages/quotes1.jpeg'

 
 
 
const Testimonials = ( ) => {
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false, 
      };
  return (
    <div className='testimonials'>
      <h1 className='testHead'>Testimonials</h1>
      <Slider {...settings} className='orig'>
           <Grid container>
            <Grid item xs={12}>
            <div className='card1Container  '>
                <Grid container>
                    <Grid item xs={6}>
                    <img className='quote' src={quotes} alt="" />
                    <div className="uk-card uk-card-default uk-width-1-2@m card1Feed">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                                </div>
                                <div className="uk-width-expand Feed1Cont">
                                    <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
                                    <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
                                </div>
                            </div>
                        </div>
                    <div className="uk-card-body">
                        <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    </div>
                    </Grid>
                <Grid item xs={6}>
                    <img className='quote' src={quotes} alt="" />
                    <div className="uk-card uk-card-default uk-width-1-2@m card2Feed">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                                    </div>
                                    <div className="uk-width-expand Feed1Cont">
                                        <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
</Grid>
                </Grid>
          
            </div>
            
            </Grid>
           </Grid>
         
         
           <Grid container>
            <Grid item xs={12}>
            <div className='card1Container'>
                <Grid container>
                    <Grid item xs={6}>
                    <img className='quote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m card1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
               
                    <Grid item xs={6}>
                    <img className='quote' src={quotes} alt="" />
<div className="uk-card uk-card-default uk-width-1-2@m card2Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
</Grid>
                </Grid>
          
            </div>
            
            </Grid>
           </Grid>
           <Grid container>
            <Grid item xs={12}>
            <div className='card1Container'>
                <Grid container>
                    <Grid item xs={6}>
                    <img className='quote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m card1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
               
                    <Grid item xs={6}>
                    <img className='quote' src={quotes} alt="" />
<div className="uk-card uk-card-default uk-width-1-2@m card2Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
</Grid>
                </Grid>
          
            </div>
            
            </Grid>
           </Grid>
           <Grid container>
            <Grid item xs={12}>
            <div className='card1Container'>
                <Grid container>
                    <Grid item xs={6}>
                    <img className='quote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m card1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div> 
</div>
                    </Grid>
               
                    <Grid item xs={6}>
                    <img className='quote' src={quotes} alt="" />
<div className="uk-card uk-card-default uk-width-1-2@m card2Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
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
                    <img className='quote' src={quotes} alt="" />
                    <div className="uk-card uk-card-default uk-width-1-2@m card1Feed">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                                </div>
                                <div className="uk-width-expand Feed1Cont">
                                    <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
                                    <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
                                </div>
                            </div>
                        </div>
                    <div className="uk-card-body">
                        <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
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
                    <img className='quote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m card1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
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
                    <img className='quote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m card1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
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
                    <img className='quote' src={quotes} alt="" />
            <div className="uk-card uk-card-default uk-width-1-2@m card1Feed">
<div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid>
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="50" height="50" src="https://th.bing.com/th/id/OIP.lhbuz_41guqnfvx5HxzGIAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
        </div>
        <div className="uk-width-expand Feed1Cont">
            <h3 className="uk-card-title uk-margin-remove-bottom feed1Head  ">Sara David</h3>
            <p className="uk-text-meta uk-margin-remove-top feed1Para"><time datetime="2016-04-01T19:00">Web developer</time></p>
        </div>
    </div>
</div>
<div className="uk-card-body">
    <p className='feed1Subpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
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
  )
}

export default Testimonials
 