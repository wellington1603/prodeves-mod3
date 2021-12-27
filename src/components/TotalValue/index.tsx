import React, { Children } from "react";
import { useCart } from "../../context/CartContext";
import style from './totalValue.module.scss'

const TotalValue = ({children} : any) => {

  const {cartValue, frete} = useCart()
  

  return (
    <div className={style.valueContainer}>
      <div className={style.value}>
        <p>Subtotal:</p>
        <p>{cartValue.toMoney()}</p>
      </div>
      <div className={style.value}>
        <p>Total:</p>
        <p>{(cartValue + frete).toMoney()}</p>
      </div>

      {children}
    </div>
  );
};

export default TotalValue;
