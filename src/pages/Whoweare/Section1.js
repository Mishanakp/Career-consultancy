import React from 'react'
import './Section1.css';

function Section1() {
  return (
         
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid id="mishanafirstsection">
    <div class="uk-card-media-left uk-cover-container" id="mishanafirstt">
    <video className='vdo' src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/man-sitting-with-a-laptop-browsing-social-media-3574996-2992253.mp4"  loop muted playsinline uk-video="autoplay: inview"></video>
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

    
  )
}

export default Section1


