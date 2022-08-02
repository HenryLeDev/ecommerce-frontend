import React, { useContext } from 'react';
import "./Checkout.css"
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';


function Checkout() {
  const {item,size,increment} = useContext(CartContext);
  var checkItem = item ? item.length : 0;
  const cartValue = function(){
    let price=0;
    for(let i=0;i<checkItem;i++){
        price+=parseInt(item[i].price);
    }
    return price;
    }

  return (
    <section className='section'>
            
    <div className="row">

       
        <div className="col-lg-8 ">

            
            <div className="card wish-list ">
                <div className="card-body">

                    <h5 className="mb-2">Versand Informationen</h5>

                   
                    <div className="row">

                        
                        <div className="col-lg-6">

                           
                            <div className="md-form md-outline mb-0 mb-lg-4">
                                <label for="firstName">Vorname</label>
                                <input type="text" id="firstName" required className="form-control mb-0 mb-lg-2"/>
                            </div>

                        </div>
                        
                        <div className="col-lg-6">

                           
                            <div className="md-form md-outline">
                                <label for="lastName">Nachname</label>
                                <input type="text" id="lastName" required className="form-control"/>
                            </div>

                        </div>
                       

                    </div>
                  

                    <div className="d-flex flex-wrap">
                        <div className="select-outline position-relative w-100">
                            <label>Land - <strong>Deutschland</strong></label>


                        </div>
                    </div>

                    
                    <div className="md-form md-outline mt-2">
                        <label for="form14">Straße, Hausnummer</label>
                        <input type="text" required id="form14" placeholder="House number and street name" className="form-control"/>
                    </div>


                    
                    <div className="md-form md-outline mt-3">
                        <label for="form16">Postleitzahl</label>
                        <input type="text" maxlength="6" minlength="6" required id="form16" className="form-control"/>
                    </div>

                   
                    <div className="md-form md-outline mt-2">
                        <label for="form17">Stadt</label>
                        <input type="text" required id="form17" className="form-control"/>

                    </div>

                   
                    <div className="md-form md-outline mt-2">
                        <label for="form18">Telefonnummer</label>
                        <input type="number" minlength="10" maxlength="10" required id="form18" className="form-control"/>
                    </div>

                   
                    <div className="md-form md-outline mt-2">
                        <label for="form19">Email Addresse</label>
                        <input type="email" required id="form19" className="form-control"/>
                    </div>

                   
                    <div className="md-form md-outline mt-2">
                        <label for="form76">Zusätzliche Informationen</label>
                        <textarea id="form76" className="md-textarea form-control" rows="4"></textarea>
                    </div>



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
                        <span>{ cartValue() }€<span ></span></span>
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
                    </ul>
                    <center>
                     {/* <form action="" method="post" > </form>  */}
                     <Link to={`/checkout/Confirmation`} >
                    <button type='submit'  className="btn btn-primary btn-block waves-effect waves-light">Jetzt kaufen</button>
                    </Link>
                    </center>
                </div>
            </div>
        
        
        </div>
    </div>
   
 </section>  
  );
}

export default Checkout