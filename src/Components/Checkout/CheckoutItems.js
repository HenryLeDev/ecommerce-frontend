import React,{ useContext, useEffect, useState }  from 'react';
import "./Checkout.css";
import { CartContext } from '../CartContext';

function CheckoutItems(props) {

    const {item,size,increment,decrement} = useContext(CartContext);

    const removeProduct = function() {
             decrement(props.definition.id)
      }

    return (
        <div>
           <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
                <div style={{margin: "25px"}}>
                    <img height="200px" src={props.definition.image} />
                </div>
                <div style={{ marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="textgap">{props.definition.name}</div>
                    <div style={{ fontWeight: "bold"}} className="textgap">{props.definition.price} €</div>
                    <div className='removeDiv' onClick={removeProduct}> Produkt entfernen</div>
                </div>
               
            </div>
        </div>
    );
}

export default CheckoutItems;