import React,{ useContext, useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom'
import ProductService from '../ProductService';
import "./Productdetails.css"
import { CartContext } from '../CartContext';

function Productdetails() {

  const {increment} = useContext(CartContext);
  const [productDetails,setProductDetails] = useState([]);
  let { id } = useParams();


  const addToCart = function() {
    increment(productDetails);
  }

  useEffect(()=>{

    //api call
    ProductService.getProductsById(id).then((response) => {
      setProductDetails(response.data)
    });
  

},[]);


  return (
    <div className='containerProductDetails'>
    <div className="row">
        <div className="col-sm-5 d-flex justify-content-center">
            <img className="mt-5 productImage"  src={productDetails.image}
                 alt="" />
        </div>
        
     
    
        <div className="col-sm-7 mt-5">
            <h2 >{productDetails.name}</h2>
            <p >Marke: {productDetails.category}</p>
            
            <h2> <span >{productDetails.price} </span> Euro</h2>
            <p className='productDetailsInfo' >{productDetails.description}</p>
            <a href=""  className="btn btn-primary cartButton" onClick={addToCart}>Add to cart</a>
        </div>
    </div>
    </div>
  )
}

export default Productdetails