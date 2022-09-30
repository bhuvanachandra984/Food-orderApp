import React from 'react';
import classes from './Model.module.css' 
import  ReactDOM  from 'react-dom';

const BackDrop = props =>{

    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    );
}

const ModelOverlay = props =>{
    
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
{props.children}
            </div>
        </div>
    );
}

const portalElement=document.getElementById('overlays');


const Model = props =>{
return(
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,portalElement)}
      {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
    </React.Fragment>
);
}

export default Model;