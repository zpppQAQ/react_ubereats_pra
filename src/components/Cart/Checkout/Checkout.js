import React, { useContext } from 'react'
import classes from './Checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context/cart-context'
import CheckoutItems from './CheckoutItems/CheckoutItems'
import PayBar from './CheckoutItems/PayBar/PayBar'
const Checkout = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.checkoutPage}>
      <FontAwesomeIcon onClick={props.onHide} className={classes.Xmark} icon={faXmark}/>
      <div className={classes.checkoutContainer}>
        <header>
          <div className={classes.listTitle}>
            <p>Meals List</p> 
          </div>
        </header>
        <div className={classes.CheckoutItemsContainer}>
          {ctx.items.map(item => <CheckoutItems key={item.id} meal={item}/>)}
        </div>
        <footer>
          <div className={classes.totalWrapper}>
            <div className={classes.totalPrice}>{ctx.totalPrice}</div>
          </div>
        </footer>
      </div>
      <PayBar totalPrice={ctx.totalPrice}/>

    </div>
    
  )
}

export default Checkout
