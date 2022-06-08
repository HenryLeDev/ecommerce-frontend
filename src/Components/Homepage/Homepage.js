import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import Brands from './Brands/Brands';
import PopularProducts1 from './PopularProducts/PopularProducts1';
import PopularProducts2 from './PopularProducts/PopularProducts2';
import PopularProducts3 from './PopularProducts/PopularProducts3';
import PopularProducts4 from './PopularProducts/PopularProducts4';
import ProductSlider from './ProductSlider/ProductSlider';
import "./Homepage.css"
import BackToTopButton from './BackToTopButton/BackToTopButton';
import Footer from './Footer/Footer';



function Homepage() {
  return (
    <div className='homepageContainer'>
    <ImageSlider />
    <Brands />
    <div className='topsellerBox'> 
    <h2>Topseller </h2>
    </div>
    <div className='productBox'>
    <PopularProducts1 />
    <PopularProducts2 />
    <PopularProducts3 />
    <PopularProducts4 />
    </div>
    <div className='newArrivedBox'>
    <h2>neu eingetroffen </h2>
    </div>
    <ProductSlider />
    <BackToTopButton />
    <Footer />
    </div>
    
  )
}

export default Homepage