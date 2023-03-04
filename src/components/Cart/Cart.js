import React, { useContext, useEffect, useState } from 'react'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context/cart-context';
import CartDetails from './CartDetails/CartDetails'
import Checkout from './Checkout/Checkout';

const Cart = () => {
    const updateCart = useContext(CartContext);
    const [showCart,setShowCart] = useState(false);
    const [showCheckout,setCheckout] = useState(false);
    const bagpath = "img/bag.png";
    const toggleMealDetail = () =>{
      if(updateCart.totalAmount===0){
        return;
      }
      setShowCart(prevState => !prevState);
    };
    const hideCheckoutHandler = () =>{
      setCheckout(false);
    }
    const togglecheckout = () =>{
      if(updateCart.totalAmount===0){
        return;
      }
      setCheckout(true);
    };
    useEffect(()=>{
      if(updateCart.totalAmount===0){
        setShowCart(false);
        setCheckout(false);
      }
    },[setShowCart,setCheckout,updateCart]);
    
  return (
    
    <div onClick={toggleMealDetail}>
      
      {showCheckout&&<Checkout onHide = {hideCheckoutHandler}/>}
      {
        ((showCart&&updateCart.totalAmount!==0) && <CartDetails />)
      }
      
      <div className={classes.cart}>
        <div className={classes.iconImg}>
            <img src={bagpath} className={classes.bagIcon} alt='NOT FOUND'/>
            {
              updateCart.totalAmount ===0 ? null : <span className={classes.totoalitem}>{updateCart.totalAmount}</span>
            }
            
        </div>
        
        { 
        updateCart.totalPrice===0 ? 
        <p className={classes.emptyItem}>Please add some products</p> 
        : 
        <p className={classes.totalprice}>{updateCart.totalPrice}</p>
        } 
        
        <button onClick={togglecheckout} className={`${classes.cart_btn}  ${ updateCart.totalAmount===0? classes.disable : ''}`}>Pay</button>
        
      </div>
    </div>
  )
}

export default Cart
