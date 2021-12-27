import { useRouter } from "next/dist/client/router";
import React from "react";
import style from '../../styles/checkout.module.scss'
import Header from '../components/Header'
import TotalValue from "../components/TotalValue";
import { useCart } from "../context/CartContext";

const Checkout = () =>{

    type Product = {
        title: string;
        id: number;
        description: string;
        images: Array<string>;
        new: boolean;
        originalValue: number;
        value: number;
        rating: number;
    }

    const {cartProducts} = useCart()
    const router = useRouter()

    return(
        <div>
            <Header />
               
            <div className={style.container}>

                <form action="##" className={style.form}>
                    <h2>Informações de contato</h2>
                    <input type="email" placeholder='Email ou telefone' />

                    <h2>Endereço de entrega</h2>
                    <div className={style.formDivInput}>
                        <input type="text" placeholder='Nome'/>
                        <input type="text" placeholder='Sobrenome'/>
                    </div>
                    <input type="text" placeholder='Endereço'/>
                    <input type="text" placeholder='Complemento' />
                    <input type="text" placeholder='Cidade' />

                    <div className={style.formDivInput}>
                        <input type="text" placeholder='Bairro' />
                        <input type="text" placeholder='CEP' />
                    </div>

                    <div>
                        <button onClick={() => router.push('/completedLogin')}>Continuar para pagamento</button>
                    </div>
                        
                </form>

                <div>
                    <table>
                        {cartProducts.map((product : Product) => (

                            <tr className={style.trTable}>
                                <td className={style.tdProduct}>
                                    <img src={product.images[0]} alt="" width={80}/>
                                    <div>
                                       <p>{product.title}</p> 
                                    </div>
                                </td>
                                <td>
                                    <p>{product.value.toMoney()}</p>
                                </td>
                            </tr>
                        ))}
                        
                    </table>

                   <TotalValue />
                   
                </div>
            </div>

        </div>
    )
}

export default Checkout;