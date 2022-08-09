import React,{useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
import Product from './Product/Product';
import ProductService from '../ProductService';
import "./Content.css"


function Content() {
  const [categoryName, setCategoryName] = useState("");
  const [listOfProduct,setListOfProducts] = useState([]);
  

  useEffect(()=>{

    //api call
    ProductService.getProducts().then((response) => {
        setListOfProducts(response.data)
      });
   
},[]);

  // filter function
   function categoryFilter() {
    var checkBoxDefault = document.getElementById("CheckDefault");
     var checkBoxApple = document.getElementById("Check1");
     var checkBoxSamsung = document.getElementById("Check2");
     var checkBoxGoogle = document.getElementById("Check3");
     var checkBoxXiaomi = document.getElementById("Check4");
     var checkBoxOnePlus = document.getElementById("Check5");

     if(checkBoxApple.checked === true) {
      setCategoryName("Apple");
     } else if (checkBoxSamsung.checked === true) {
      setCategoryName("Samsung");
     } else if (checkBoxGoogle.checked === true) {
      setCategoryName("Google");
     }
     else if (checkBoxXiaomi.checked === true) {
      setCategoryName("Xiaomi");
     }
     else if (checkBoxOnePlus.checked === true) {
      setCategoryName("OnePlus");
     }else if (checkBoxDefault.checked === true){
      setCategoryName("");
     }
   }
     
  

  return (
    <div style={{ display: "flex", marginTop: "50px" }}>
        <div>
        <div className='leftSize_main'>
        <div className='leftSide_header'>
            Hersteller
        </div>
        <div className='leftSide_brandname'>
        <label className='brandname' >
                <input type="radio" name="flexRadioDefault" id="CheckDefault" onClick={categoryFilter} /> Alle
            </label>
            <label className='brandname' >
                <input type="radio" name="flexRadioDefault" id="Check1" onClick={categoryFilter} /> Apple
            </label>
            <label className='brandname' >
                <input type="radio" name="flexRadioDefault" id='Check2' value="Samsung" onClick={categoryFilter} /> Samsung
            </label>
            <label className='brandname'>
                <input type="radio" name="flexRadioDefault" id='Check3' value="Google" onClick={categoryFilter} /> Google
            </label>
            <label className='brandname'>
                <input type="radio" name="flexRadioDefault" id='Check4' value="Xiaomi" onClick={categoryFilter} /> Xiaomi
            </label>
            <label className='brandname'>
                <input type="radio" name="flexRadioDefault" id='Check5' value="OnePlus" onClick={categoryFilter} /> OnePlus
            </label>
            <Link to={'/products/' + categoryName}>
            <button>Filter</button>
            </Link>
        </div>
    </div>
        </div>
        <div>
        <div className="rightSide_main">
      {
      listOfProduct.map ( (item) =>(
        <Link to={'/order/'+ item.id } >
              <Product definition={item} />
         </Link> 
         ))
      }
        </div>
        </div>
    </div>
  )
}

export default Content