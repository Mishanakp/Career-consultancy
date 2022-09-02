import React from 'react'
import cartoon from '../../Assets/about/cartoon.jpeg';
import './Section2.css';

function Section2() {
  return (
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
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
  )
}

export default Section2