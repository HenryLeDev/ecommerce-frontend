import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);
        let existingCart = localStorage.getItem('myCart') !== null ? JSON.parse(localStorage.getItem('myCart')) : [] ;
        

        // set state 
        this.state = { 
            item:  existingCart,
            // add a product
            increment: (value) => {
                let itemList= this.state.item;
                itemList.push(value);

                this.setState( { item: itemList } );

                this.state.saveToLocalCache();
            },
            // remove a product
             decrement: (value) => {
                 for(let i= 0; i < existingCart.length; i++) {
                     if (value === existingCart[i].id) {
                         existingCart.splice(i, 1)
                        
                     }
                 }
               
                 this.setState(existingCart);

                 this.state.saveToLocalCache();
             },
            saveToLocalCache: ()=>{
                 localStorage.setItem('myCart', JSON.stringify(this.state.item));
            }
         }
    }
    render() { 
        return ( 
            <CartContext.Provider value={{ ...this.state,...this.increment, ...this.decrement }} >
                {this.props.children}
            </CartContext.Provider>
         );
    }
}
 
export default CartContextProvider;