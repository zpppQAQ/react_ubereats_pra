import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css'


const backdrop_root = document.getElementById('backdrop-root');
const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={`${classes.backdrop} ${props.className}`}>
        {props.children}
    </div>, backdrop_root
  )
}

export default Backdrop
