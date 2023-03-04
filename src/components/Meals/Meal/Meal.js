import React from 'react'
import classes from './Meal.module.css'
import Counter from '../../UI/Counter/Counter'
const Meal = (props) => {
  return <div className={classes.Meal}>
    <div className={classes.imgArea}>
        <img className={classes.imgArea} src= {props.meal.img} alt='' />
    </div>
    <div className={classes.mealDescription}>
        <h2>{props.meal.title}</h2>
        {
            props.noDesc? null:<p className={classes.description}>
            {props.meal.desc}
        </p>
        }
        {/* <p className={classes.description}>
            {props.meal.desc}
        </p> */}
        <div className={classes.priceAndCount}>
            <span className={classes.price}>{props.meal.price}</span>
            <Counter amount={props.meal.amount} meal = {props.meal}/>
        </div>
    </div>
      
</div>
  
}

export default Meal
