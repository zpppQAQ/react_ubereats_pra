import React, { useContext } from 'react'
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context/cart-context'
const Counter = (props) => {
    const cart_ctx = useContext(CartContext);
    const addButtonHandler = () =>{
        cart_ctx.setDispatch({type:'ADD',meal:props.meal})
    }
    const subButtonHandler = () =>{
        cart_ctx.setDispatch({type:'SUB',meal:props.meal})
        
    }
  return (
    <div className={classes.counter}>
        {
            (props.meal.amount && props.meal.amount !== 0) ? (
            <>
            <button className={classes.sub} onClick={subButtonHandler}>
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </button>
            <div className={classes.countNum}>
                <span>{props.meal.amount}</span>
            </div>
            </>
            ) : null
        }
        <button className={classes.add} onClick={addButtonHandler}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
    </div>
  )
}

// <button className={classes.sub}>-</button>
        // <div className={classes.countNum}>
        //     <span>2</span>
        // </div>

export default Counter
