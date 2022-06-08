import React from 'react'
import "./PopularProducts.css"
import { useNavigate } from "react-router-dom";

function PopularProducts4() {

  let navigate = useNavigate(); 
  
  const routeChangeId = () =>{ 
  let path = `/order/12`; 
  navigate(path);
  }

  return (
    <div className='AdvertisementOne_main'>
    <div className='AdvertisementOne_header'>
        OnePlus 10 Pro (256 GB) - Volcanic Black
    </div>
    <div className='AdvertisementOne_body'>
        <img src="https://ik.imagekit.io/pxfecu1wols/OnePlus_10_Pro_lHXzSicXp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652174051954" width="170px;"  />
    </div>
    <div onClick={routeChangeId} className='AdvertisementOne_footer'>
        Siehe Mehr
    </div>
</div>
  )
}

export default PopularProducts4