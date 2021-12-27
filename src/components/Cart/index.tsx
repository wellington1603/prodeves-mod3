import React, { useContext } from "react";
import {Badge} from 'antd'
import { BsCart2 } from "react-icons/bs";
import {useCart} from '../../context/CartContext'

const Cart = () => {
    const {cartProducts} = useCart()

    const cartLegth = cartProducts.length

    return(
        <Badge count={cartLegth} offset={[7, 30]} color='green' size='small'>
                <BsCart2 size={30} color='white'/>
        </Badge>
    )
}

export default Cart