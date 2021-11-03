import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom'
import { addItemToCart } from '../../actions/cart';
import { getProductsById } from '../../selectors/getProductById';
import {useEffect } from 'react';
import Swal from 'sweetalert2';

export const ProductScreen = ({history}) => {
    
    const {productid} = useParams();
    const {products} = useSelector(state => state.products)
    // const {cart} = useSelector(state => state.cart)

    const dispatch = useDispatch(); 
    const current = getProductsById(products, productid)
    
    if(!products.length > 0) {  
        Redirect('/')
    }    

    const handleReturn = () => {

        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }
    }

    const handleAddCart = () => {
        Swal.fire('Success', '¡Producto agregado!', 'success')
        dispatch(addItemToCart(current))

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(current);
        localStorage.setItem("cart", JSON.stringify(cart));



    }

    const handlePayment = () => {
        console.log('Pay button clicked')
    }

    useEffect(() => {
        console.log(JSON.stringify(current))
        // obtain a mercadopago preference for using with CHECKOUT-PRO
        // fetch('https://serendipia.uy/mercadopago-server/', {    
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: 'data='+ JSON.stringify(current)
        // }).then(res => res.json()).then(dat => console.log(dat));
        
    })

    

    if(!current) {
        return <Redirect to='/' />
    }

    return (
        products.length > 0 &&
        <>
            <div className="col-5">
                <img src={current.img} alt={current.title} className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-7">
                <h3>{current.title}</h3>
                

                <h5 className="mt-4">Price</h5>
                <p className="mb-4">{current.price}</p>

                <button onClick={ handleAddCart } className="btn btn-success d-block mb-4">ADD TO CART</button>
                <button onClick={ handleReturn } className="btn btn-secondary">Return</button>
                <button onClick={ handlePayment } className="btn btn-secondary">PAY </button>
                <div id="button-checkout"></div> 
            </div>
        </>
    )
}
