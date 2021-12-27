import React from "react";
import Header from '../components/Header'
import style from '../../styles/shoppingCart.module.scss'
import TotalValue from '../components/TotalValue'
import { useCart } from "../context/CartContext";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const ShoppingCart = () => {

    const {cartProducts, calcFrete, cartValue} = useCart()
    const [cep, setCep] = useState('')
    const router = useRouter()

    return(
        <div>
            <Header />
            <div className={style.container}>
                <table className={style.tableCart}>
                    <thead>
                        <tr className={style.headTable}>
                            <th colSpan={2}>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.map((product) =>  {
                            
                            return(
                                <tr>
                                    <td className={style.tdProduto}>
                                        <img src={product.images[0]} alt="" />
                                    
                                    </td>
                                    <td>
                                        <p>{product.title}</p>
                                    </td>
                                    <td>{product.value.toMoney()}</td>
                                    <td>x</td>
                                    <td>{product.value.toMoney()}</td>
                                </tr>
                            )
                            })}
                        
                    </tbody>
                </table>

                <div>
                    <div>
                        <h2 className={style.TextCenter}>Carrinho</h2>

                       <TotalValue>
                            <button className={style.btn} onClick={() => router.push('/checkout')}>Prosseguir para o checkout</button>
                       </TotalValue>
                        
                    </div>
                    
                    <div>
                        <h2 className={style.TextCenter}>Calcular frete</h2>
                        <div className={style.frete}>
                            <input type="number" placeholder='CEP' className={style.inputCep} value={cep} onChange={(e) => setCep(e.target.value)}/>
                            <div>
                                <button onClick={() => calcFrete(cartValue)}>Calcular</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

          
        </div>
    )
}

export default ShoppingCart;