import React from 'react'
import "./PopularProducts.css"
import { useNavigate } from "react-router-dom";

function PopularProducts2() {

  let navigate = useNavigate(); 

  const routeChangeId = () =>{ 
    let path = `/order/3`; 
    navigate(path);
    }

  return (
    <div className='AdvertisementOne_main'>
    <div className='AdvertisementOne_header'>
    Apple iPhone 13 (128 GB) - Blau
    </div>
    <div className='AdvertisementOne_body'>
        <img src="https://ik.imagekit.io/pxfecu1wols/iphone13bluehome_MZ32eQhAJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654340005217" width="250px;"  />
    </div>
    <div onClick={routeChangeId} className='AdvertisementOne_footer'>
        Siehe Mehr
    </div>
</div>
  )
}

export default PopularProducts2