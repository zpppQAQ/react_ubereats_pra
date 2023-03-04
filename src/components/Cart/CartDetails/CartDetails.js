import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart-context/cart-context'
import Meal from '../../Meals/Meal/Meal'
import Backdrop from '../../UI/Backdrop/Backdrop'
import ConfirmInfo from '../../UI/ConfirmInfo/ConfirmInfo'
const CartDetails = () => {
    const ctx = useContext(CartContext);
    const [showConfirm,setShowConfirm] = useState(false);
    const showConfirmHandler = () =>{
        setShowConfirm(true);
    };
    const confirmNoChoice=(e)=>{
      e.stopPropagation();
      setShowConfirm(false);
    };
    const confirmYesChoice=()=>{
      ctx.setDispatch({type:'CLEAR'});
    };
  return (
    <>
  <Backdrop/>
    {showConfirm && <ConfirmInfo onConfirm={confirmYesChoice} onCancel={confirmNoChoice} confirmText='Are you sure to remove all those meals?'/> }
    <div onClick={e=>e.stopPropagation()} className={classes.mealsDetail}>
        
      <div className={classes.header}>
        <h2 className={classes.mealsTitle}>Meal Details</h2>
        <div className={classes.clearFont}>
        <FontAwesomeIcon onClick={showConfirmHandler} className={classes.trashIcon}  icon={faTrash}/>
        <span onClick={showConfirmHandler}>Clear all meals</span>  
       </div>
      </div>
      <div className={classes.cartMealDetails}>
        {ctx.items.map(item=> <Meal noDesc key={item.id} meal={item} />)}
      </div>
      
    </div>
    </>
    )
}

export default CartDetails
