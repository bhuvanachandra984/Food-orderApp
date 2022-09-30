import { useContext } from "react";
import { useEffect, useState } from 'react';

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = props =>{
 
const cartCtx=useContext(CartContext);
const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

const { items } = cartCtx;
useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

const numberOfCartItems= cartCtx.items.reduce((currNumber, item)=>{
    return currNumber+item.amount;
},0);
const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;


    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>

        </button>
    );
}

export default HeaderCartButton;