import React from 'react'
import { useSelector } from 'react-redux';

import { ProductCard } from './ProductCard'


export const ProductList = () => {

    const {products} = useSelector(state => state.products)
    
    return (
        <>
            {
                products.length > 0 ? products.map(product => ( <ProductCard key={product.id} {...product} /> ) ) : <p>Cargando...</p>
            }            
           
        </>
    )
}
