import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"

function ImageSlider() {
  // slider settings
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
    <Slider {...settings}>
      <div className='sliderBox1'>
      <h2 className='sliderFont1'>Beste Smartphones <br></br>zu günstigen Preisen kaufen</h2>
      <a href="/products"  className="btn btn-primary sliderButton1" >Jetzt durchstöbern</a>
      </div>
      <div className='sliderBox2'>
      <h1 className='sliderFont2'>Entdecke noch heute <br></br>dein neues Smartphone</h1>
      </div>
      <div className='sliderBox3'>
      <div className='sliderElements3'>
      <h2 className='sliderFont3'>Top Marken <br></br>unter anderem <br></br>Samsung</h2>
      <a href="/products/Samsung"  className="btn btn-primary sliderButton3" >Samsung Geräte ansehen</a>
      </div>
      </div>
    </Slider>
  )
}

export default ImageSlider