import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'
const FilterMeals = (props) => {
  
  //   const filterHandler = (e) =>{
  //       const keyword = e.target.value;
  //       props.onSearch(keyword);
  //   }
  const [keyword,setKeyWord] = useState('');
  const filterHandler = (e)=>{
    setKeyWord(e.target.value.trim());
  };
  useEffect(()=>{
    
    const oneSecTimeout = setTimeout(()=>{
      
      props.onSearch(keyword);
    },1000);
    return ()=>{
      clearTimeout(oneSecTimeout);
      
    };
  },[keyword,props])


  


  return (
    <div className={classes.FilterMeals}>
        <div className={classes.searchBar}>
            <input value={keyword} className={classes.searchInput} type="text" onChange={filterHandler} placeholder='Please enter key words'/>
            
            <FontAwesomeIcon className={classes.searchIcon} icon={faSearch}/>
        </div>
      
    </div>
  )
}

export default FilterMeals
