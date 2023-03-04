import React from 'react'
import classes from './ConfirmInfo.module.css'
import BackDrop from '../Backdrop/Backdrop'
const ConfirmInfo = (props) => {
  return (
    <div >
        <BackDrop className={classes.ConfirmPage}>
            <div className={classes.confirmBOX}>
                <div className={classes.confirmFont}>
                    <p >{props.confirmText}</p>
                </div>
                
                <div>
                    <button onClick={props.onCancel} className={`${classes.ConfirmBtn} ${classes.Nobtn}`}>NO</button>
                    <button onClick={props.onConfirm} className={`${classes.ConfirmBtn} ${classes.Yesbtn}`}>YES</button>
                </div>
                
            </div>
        </BackDrop>
    </div>
    
  )
}

export default ConfirmInfo
