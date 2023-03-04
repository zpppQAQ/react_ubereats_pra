import React from 'react'
import classes from './PayBar.module.css'
const PayBar = (props) => {
  return (
    <div className={classes.paybarContainer}>
      <div className={classes.paybarTotal}>
        {props.totalPrice}
      </div>
      <button className={classes.paybarbtn}>
        Checkout
      </button>
    </div>
  )
}

export default PayBar
