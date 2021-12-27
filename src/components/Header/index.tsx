import { NextPage } from "next";
import Link from 'next/link'
import React from "react";
import styles from './nav.module.scss'
import { Input, Space, Badge, Avatar } from 'antd';
import { BsCart2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Cart from '../Cart'
import TotalValue from "../TotalValue";
import { useRouter } from "next/dist/client/router";



const Nav: NextPage = () => {
    
    const { Search } = Input;
    const router = useRouter()

    return(
        <div className={styles.container}>

            <h1>
                ProDevs
            </h1>

            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/produtos'>
                        <a>Produtos</a>
                    </Link>
                </li>
            </ul>

            <div className={styles['container-nav-input']} >
                <Space >
                    <Search placeholder="Buscar produtos, marcas e muito mais..."  style={{ width: 370 }}  />
                </Space>
            </div>

            <div className={styles['container-nav-location']}>
                <IoLocationOutline color='white' size={30}/>
                <div>Ver ofertas para minha região</div>
            </div>


            <div onClick={() => router.push('/shoppingCart')} className={styles.divCart}>
                <Cart />
            </div>
        </div>
    )
}

export default Nav