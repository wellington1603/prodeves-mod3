import { createContext, useContext, useEffect, useState } from "react";
import { message, Button, Space } from 'antd';

export const CartContext = createContext(undefined as any)

type Product = {
    title: string;
    id: number;
    description: string;
    images: Array<string>;
    new: boolean;
    originalValue: number;
    value: number;
    rating: number;
    qty? : number
}


export const CartProvider = (props: any) => {
    const [cartProducts, setCartProducts] = useState<Product[]>([])
    const [ frete, setFrete] = useState(0)

    function recovereLocalData(){
        if(localStorage){
            const localStorageProducts = JSON.parse(localStorage.getItem('cart_products') || '[]')
            setCartProducts(localStorageProducts)
        }
    }

    useEffect(() => {
        recovereLocalData()
    },[])

    const cartValue = cartProducts.map((product: Product) => product.value)
    .reduce((value: number, newValue: number) => value + newValue, 0)
    
    
    function addToCart(newProduct: Product  ){
        const newCart = [...cartProducts, newProduct]
        setCartProducts(newCart)  
        
        // const exist: any = cartProducts.find((x) => x.id === newProduct.id);

        // if(exist){
        //     setCartProducts(cartProducts.map((x) => x.id === newProduct.id ? {...exist, qty: exist.qty ++} : x))
        // }else{
        //     setCartProducts([...cartProducts, {...newProduct, qty: 1}])
        // }

        message.success(`Produto adicionado ao carrinho`);
        localStorage.setItem('cart_products', JSON.stringify(newCart))
    }

    function calcFrete(cartValue: number){
        setFrete( 35)
    }

    return(
        <CartContext.Provider value={{
            cartProducts,
            addToCart,
            cartValue,
            calcFrete,
            frete
            
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cartContext = useContext(CartContext);
    if(!cartContext)
        throw new Error('UseCart must be used inside of CartProvider')
    return cartContext
}
