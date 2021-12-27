import React from "react";
import Header from '../../components/Header'
import style from '../../../styles/productDetails.module.scss'
import { BsCart2 } from "react-icons/bs";
import { Tabs, Rate } from 'antd';
import { useCart } from "../../context/CartContext";
import GalleryImg from "../../components/galleryImg";

const { TabPane } = Tabs;

const ProductDetails = ({payload}) => {
  
    const { addToCart } = useCart()
   
    return(
        <div>
           <Header />
           <div className={style.container}>
               
            <div className={style.productDetails}>
            
                    <GalleryImg images={payload.images} />

                    <div>
                        <h2>{payload.title}</h2>
                        <Rate disabled defaultValue={payload.rating} style={{fontSize: 14}}/>  ({payload.reviews.length})

                        <div className={style.price}>
                            <p>{payload.value.toMoney()}</p>
                            <p className={style.strik}>{payload.originalValue.toMoney()}</p>
                        </div>

                        <p>{payload.description}</p>

                        <div className={style.icon} >
                            <div>Adicionar ao carrinho</div>
                            <BsCart2 size={15} onClick={() => addToCart(payload)} className={style.addCart} />
                        </div>
                    </div>
                </div>

                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Descrição" key="1">
                    {payload.fullDescription}
                    </TabPane>
                    <TabPane tab="Informações Adicionais" key="2">
                    {payload.additionalInfo}
                    </TabPane>
                    <TabPane tab="Video" key="3">
                    {payload.video}
                    </TabPane>
                   
                </Tabs>
           </div>
            
        </div>
    )

    
}

export async function  getServerSideProps({query}) {

    const { productDetails} = query
    
    const req = await fetch(`https://api.npoint.io/${productDetails}`)
    const {payload} = await req.json()
    
    console.log(payload)
    return{
        props: {
            payload
        }
    }
}

export default ProductDetails