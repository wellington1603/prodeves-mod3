import React, {useState} from "react";
import NavHeader from '../components/Header'
import CardProduct from '../components/CardProduct'

const Produtos = ({products}) => {
    console.log(products)
    return(
        <div>
            <NavHeader />
            <CardProduct products={products}/>
        </div>
    )
}

    export const getServerSideProps = async () => {
        const res = await fetch(`https://api.npoint.io/8c1f1e1303f606bc225b`)
        const {payload} = await res.json()

        return{
            props:{
                products : payload
            }
        }
    }

export default Produtos