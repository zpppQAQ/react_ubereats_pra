import { useReducer, useState } from 'react';
import './App.css';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Meals from './components/Meals/Meals'
import CartContext from './store/cart-context/cart-context'
import Cart from './components/Cart/Cart';

const mealsData = [
  {
    id:'1',
    title:'McChicken Extra Value Meal',
    desc:'Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. ',
    price:12.49,
    img:'img/meal1.png',
  },
  {
    id:'2',
    title:'Big Mac Extra Value Meal',
    desc:'Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. ',
    price:12.57,
    img:'img/meal2.png'
  },
  {
    id:'3',
    title:'6 Spicy Chicken McNuggets',
    desc:'Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. ',
    price:7.39,
    img:'img/meal3.png'
  },
  {
    id:'4',
    title:'Double Big Mac Extra Value Meal',
    desc:'Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. ',
    price:15.80,
    img:'img/meal4.png'
  },
  {
    id:'5',
    title:'Double Quarter Pounder without Cheese Extra Value Meal',
    desc:'Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. ',
    price:14.22,
    img:'img/meal5.png'
  },
  {
    id:'6',
    title:'Happy Meal Hamburger with Mini Fry',
    desc:'Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. ',
    price:5.19,
    img:'img/meal6.png'
  },
  {
    id:'7',
    title:'Med Fries',
    desc:'Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. ',
    price:4.82,
    img:'img/meal7.png'
  }
];
const reducerAction = (cartData,action)=>{
  const newCart = {...cartData};
  switch(action.type){
    case 'ADD':
      if(newCart.items.indexOf(action.meal)===-1){
        newCart.items.push(action.meal);
        action.meal.amount =1;
      }
      else{
        action.meal.amount+=1;
      }
      newCart.totalAmount+=1;
      newCart.totalPrice+=action.meal.price;
      newCart.totalPrice = Math.floor(newCart.totalPrice*100)/100;
      return(newCart);
    case 'SUB':
      action.meal.amount-=1;
      if(action.meal.amount ===0){
        newCart.items.splice(newCart.items.indexOf(action.meal),1);
        
      }
      newCart.totalAmount-=1;
      newCart.totalPrice-=action.meal.price;
      newCart.totalPrice = Math.floor(newCart.totalPrice*100)/100;
      return (newCart);
    case 'CLEAR':
        newCart.items.forEach(item=>delete item.amount);
        newCart.items = [];
        newCart.totalAmount=0;
        newCart.totalPrice=0;
        return (newCart);
    default:
      return cartData;
  }
};

function App() {
  const [foodData,setfoodData] = useState(mealsData);
  // const [cartData,setCartData] = useState({
  //   items:[],
  //   totalAmount:0,
  //   totalPrice:0
  // });
  const [cartData,setDispatch] = useReducer(reducerAction,{
      items:[],
      totalAmount:0,
      totalPrice:0
    })
  // const addItem = (meal)=>{
  //     const newCart = {...cartData};
  //     if(newCart.items.indexOf(meal)===-1){
  //       newCart.items.push(meal);
  //       meal.amount =1;
  //     }
  //     else{
  //       meal.amount+=1;
  //     }
  //     newCart.totalAmount+=1;
  //     newCart.totalPrice+=meal.price;
  //     setCartData(newCart);
  // };
  // const removeItem = (meal)=>{
  //   const newCart = {...cartData};
  //   meal.amount-=1;
  //   if(meal.amount ===0){
  //     newCart.items.splice(newCart.items.indexOf(meal),1);
  //   }
  //   newCart.totalAmount-=1;
  //   newCart.totalPrice-=meal.price;
  //   setCartData(newCart);

  // };

  const keywordHandler = (keyword) =>{
  
    const newMealsData = mealsData.filter(item => item.title.toLowerCase().indexOf(keyword)!==-1);
    setfoodData(newMealsData);
    
  };
  // const clearItem =() =>{
  //   const newCart = {...cartData};
  //   newCart.items.forEach(item=>delete item.amount);
  //   newCart.items = [];
  //   newCart.totalAmount=0;
  //   newCart.totalPrice=0;
  //   setCartData(newCart);
  // };

  return <CartContext.Provider value={{...cartData,setDispatch}}>
      <div className='testVW' >
            <FilterMeals onSearch = {keywordHandler}/>
            <Meals mealsData = {foodData}/>
            <Cart/>
            
      </div>
      

      </CartContext.Provider>
      
  
  
  ;
}

export default App;
