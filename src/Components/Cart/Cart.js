import React, { useContext, useState } from 'react';
import CheckoutItems from '../Checkout/CheckoutItems'
import "./Cart.css"
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';


function Cart(props) {
  const [paymentMethod, setpaymentMethod] = useState("");
 
  const {item,size,increment} = useContext(CartContext);
  const cartValue = function(){
    let price=0;
    for(let i=0;i<item.length;i++){
        price+=parseInt(item[i].price);
    }
    return price;
    }

 
//   function vorkasseOrPaypal() {
//     var checkBoxVorkasse = document.getElementById("CheckVorkasse");
//     var checkBoxPaypal = document.getElementById("CheckPaypal");
    
//     if (checkBoxVorkasse.checked === true) {
//         setpaymentMethod("Vorkasse")
//     } else {
//         setpaymentMethod("Paypal")
//     } 
//     console.log(paymentMethod)
//   }
  
  return (
    <section className='section'>
            
            <div className="row">
    
               
                <div className="col-lg-8 ">
    
                    
                    <div className="card wish-list ">
                        <div className="card-body">
    
                        { 
                                item.length >0 ?
                                item.map( (value) => (
                                    <CheckoutItems definition={value} />
                                ))
                                : <div style={{height: "100vh", margin: "30px" }}> Der Warenkorb ist leer.</div>
                            }
    
    
                        </div>
                    </div>
                </div>
            

                <div className="col-lg-4">

                
                    <div className="card mb-4">
                        <div className="card-body">

                         <h5 className="mb-3">Gesamtpreis </h5>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Zwischensumme
                                <span> { cartValue() }€<span ></span></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                Versand
                                <span>kostenlos</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                    <strong>Gesamtpreis</strong>
                                    </div>
                                    <span><strong>{ cartValue() }€<span ></span></strong></span>
                                </li>
                               
                                    {/* <label className='brandname' >
                                        <input type="radio" name="flexRadioDefault" id="CheckVorkasse" onClick={vorkasseOrPaypal} /> Vorkasse
                                    </label>
                                    <label className='brandname' >
                                        <input type="radio" name="flexRadioDefault" id="CheckPaypal" onClick={vorkasseOrPaypal} /> Paypal
                                    </label> */}
                               
                            </ul>
                            <center>
                            {
                            <Link to={`/checkout/`} >
                            <button className="btn btn-primary btn-block waves-effect waves-light mt-3">Checkout</button>
                            </Link> 
                            }
                            </center>
                        </div>
                    </div>
                
                
                </div>
            </div>
           
         </section>  
  )
}

export default Cart