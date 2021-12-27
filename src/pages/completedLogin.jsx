import { useRouter } from "next/dist/client/router";
import React from "react";
import style from '../../styles/completedLogin.module.scss'
import Header from '../components/Header'

const CompletedLogin = () =>{
    const router = useRouter()
    return(
        <div >
            <Header />
            <div className={style.container}>
                <h2>Seu pedido está quase finalizado!</h2>
                <button onClick={() => router.push('/')}>Home</button>

            </div>
        </div>
    )
}

export default CompletedLogin