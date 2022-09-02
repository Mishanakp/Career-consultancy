import React from 'react'
import Slider from "react-slick";
import './HomeSlider.css'
import homeImage1 from '../../../../Assets/homeImages/ques.png';
import homeImage2 from '../../../../Assets/homeImages/final.png';
import homeImage3 from '../../../../Assets/homeImages/slide.jpeg'; 

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
   
 
  

const HomeSlider = () => {
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
   
    
  return (
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
  )
}

export default HomeSlider
