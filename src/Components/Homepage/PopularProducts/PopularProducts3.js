import React from 'react'
import "./PopularProducts.css"
import { useNavigate } from "react-router-dom";

function PopularProducts3() {

  let navigate = useNavigate(); 
  
  const routeChangeId = () =>{ 
  let path = `/order/15`; 
  navigate(path);
  }

  return (
    <div className='AdvertisementOne_main'>
    <div className='AdvertisementOne_header'>
    Google Pixel 6 Pro (256 GB) - Stormy Black
    </div>
    <div className='AdvertisementOne_body'>
        <img src="https://ik.imagekit.io/pxfecu1wols/Google-Pixel-6-Pro-128GB-Stormy-Black-GA03164-GB-21102021-01_4gjcI90Fm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654340740522" width="250px;"  />
    </div>
    <div onClick={routeChangeId} className='AdvertisementOne_footer'>
       Siehe Mehr
    </div>
</div>
  )
}

export default PopularProducts3