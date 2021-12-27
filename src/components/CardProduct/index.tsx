import React from "react";
import style from './cardProduct.module.scss'
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/dist/client/router";
import { message, Button, Space } from 'antd';

const CardProduct = ({products}: any) => {
    const { addToCart}  = useCart()
    const router = useRouter()

    const success = () => {
        message.success(`sasaaaaas`);
      };
    
    return(
        <div >
            {products.map((product: any) =>(
                <div className={style.cardProduct} >

                    <img src={product.images[0]} alt="" onClick={() => router.push(`product/${product.id}`)} className={style.img}/>

                    <div>
                        <h2>{product.title}</h2>

                        <div className={style.price}>
                            <p>{product.value.toMoney()}</p>
                            <p className={style.strik}>{product.originalValue.toMoney()}</p>
                            <p>{product.rating}</p>
                        </div>

                        <p>{product.description}</p>

                        <div className={style.icon}>

                            <Space>
                                <div onClick={() => addToCart(product)} onKeyDown={success}>
                                    <BsCart2 size={18} />
                                </div>
                            </Space>
                            <div>
                                <FaRegHeart size={18}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CardProduct