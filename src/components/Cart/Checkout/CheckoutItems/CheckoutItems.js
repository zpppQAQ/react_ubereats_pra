import React from 'react'
import classes from './CheckoutItems.module.css'
import Counter from '../../../UI/Counter/Counter'
const CheckoutItems = (props) => {
  return (
    <div className={classes.checkoutContainer}>
      <div className={classes.imgContainer}>
        <img src={props.meal.img} alt="" />
      </div>
      <div className={classes.itemInfo}>
        <div className={classes.checkoutItemTitle}>{props.meal.title}</div>
        <div className={classes.counterInfo}>
            <Counter meal={props.meal}/>
            <div className={classes.totalPrice}>{(props.meal.price * props.meal.amount)}</div>
        </div>
      </div>
      
    </div>
  )
}

export default CheckoutItems
