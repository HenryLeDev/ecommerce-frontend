import React from 'react'
import "./ProductSlider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Productslider() {
    
  let navigate = useNavigate(); 
  
  const routeChangeProduct1 = () =>{ 
  let path = `/order/17`; 
  navigate(path);
  }

  const routeChangeProduct2 = () =>{ 
  let path = `/order/2`; 
  navigate(path);
  }

  const routeChangeProduct3 = () =>{ 
  let path = `/order/8`; 
  navigate(path);
  }

  const routeChangeProduct4 = () =>{ 
  let path = `/order/5`; 
  navigate(path);
  }

  const routeChangeProduct5 = () =>{ 
  let path = `/order/9`; 
  navigate(path);
  }

  const routeChangeProduct6 = () =>{ 
    let path = `/order/12`; 
    navigate(path);
    }

    const routeChangeProduct7 = () =>{ 
      let path = `/order/3`; 
      navigate(path);
      }

  
  // slider settings
  const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    }
    return (
        <div className='sliderBox'>
        <Slider {...settings}>
          <div>
            <img onClick={routeChangeProduct1} className='sliderImage' src='https://ik.imagekit.io/pxfecu1wols/Xiaomi_Redmi_10_8l_UjGrTc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652181742360'/>
          </div>
          <div>
          <img onClick={routeChangeProduct2} className='sliderImage2' src='https://ik.imagekit.io/pxfecu1wols/Apple_iPhone_13_Pro__128_GB__-_Alpingr%C3%BCn_1fIZncZOS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651443082896'/>
          </div>
          <div>
          <img onClick={routeChangeProduct3} className='sliderImage' src='https://ik.imagekit.io/pxfecu1wols/Samsung_Galaxy_S20_FE_5G_GmB48w0Ek.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651443083360'/>
          </div>
          <div>
          <img onClick={routeChangeProduct4} className='sliderImage2' src='https://ik.imagekit.io/pxfecu1wols/Apple_iPhone_12_Mini__64_GB__-_Schwarz_gTPYJ8fxV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651443082265'/>
          </div>
          <div>
          <img onClick={routeChangeProduct5} className='sliderImage' src='https://ik.imagekit.io/pxfecu1wols/Samsung_Galaxy_S21__8Y3VZE6tW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651443084068'/>
          </div>
          <div>
          <img onClick={routeChangeProduct6} className='sliderImage2' src='https://ik.imagekit.io/pxfecu1wols/OnePlus_10_Pro_lHXzSicXp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652174051954'/>
          </div>
          <div>
          <img onClick={routeChangeProduct7} className='sliderImage2' src='https://ik.imagekit.io/pxfecu1wols/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__oXdLTokVzJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647853466539'/>
          </div>
        </Slider>
      </div>
  )
}

export default Productslider