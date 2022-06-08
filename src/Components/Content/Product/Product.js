import React from 'react'


import getSymbolFromCurrency from 'currency-symbol-map'

function Product(props) {
  return (
    <div className='container2'>
        <div className='product_image'>
        <img src={props.definition.image} height="280px" />
        </div>
        <div className='product_name'>
           {props.definition.name}
        </div>
        <div className='product_brand'>
         {props.definition.category}
        </div>  
        <div className='product_price'>
        {props.definition.price} {getSymbolFromCurrency('EUR')}
        </div>
    </div>
  )
}

export default Product