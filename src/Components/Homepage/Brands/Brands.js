import React from 'react'
import "./Brands.css"
import { useNavigate } from "react-router-dom";


function Brands() {
  
  let navigate = useNavigate(); 
  
  const routeChangeApple = () =>{ 
  let path = `/products/apple`; 
  navigate(path);
  }

  const routeChangeSamsung = () =>{ 
  let path = `/products/samsung`; 
  navigate(path);
  }

  const routeChangeGoogle = () =>{ 
  let path = `/products/google`; 
  navigate(path);
  }

  const routeChangeXiaomi = () =>{ 
  let path = `/products/xiaomi`; 
  navigate(path);
  }

  const routeChangeOnePlus = () =>{ 
  let path = `/products/oneplus`; 
  navigate(path);
  }

  return (
    <div className='container'>
        <img onClick={routeChangeApple} className='brandLogos' src='https://ik.imagekit.io/pxfecu1wols/Logos/kisspng-apple-logo-computer-icons-apple-logo-5abdfcd34080f4.8895316315224004672642_DgXtDowFw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649447872056' />
        <img onClick={routeChangeSamsung} className='brandLogos' src='https://ik.imagekit.io/pxfecu1wols/Logos/5a355b5ad2c9a3.2366288215134462348634_XraAhsWNZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649447872038' />
        <img onClick={routeChangeGoogle} className='brandLogos' src='https://ik.imagekit.io/pxfecu1wols/Logos/Illustration-of-Google-icon-on-transparent-background-PNG_7crH2vgXc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649447872274' />
        <img onClick={routeChangeXiaomi} className='brandLogos' src='https://ik.imagekit.io/pxfecu1wols/Logos/Logo-xiaomi-mi-icon-PNG_CJm8S1IO2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649447872422' />
        <img onClick={routeChangeOnePlus} className='brandLogos' src='https://ik.imagekit.io/pxfecu1wols/Logos/pngwing.com_6HXR3hJg3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649448148554' />
    </div>
  )
}

export default Brands