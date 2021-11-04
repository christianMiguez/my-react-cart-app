import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom'
import { addItemToCart } from '../../actions/cart';
import { getProductsById } from '../../selectors/getProductById';
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
        //obtain a mercadopago preference for using with CHECKOUT-PRO
        fetch('https://serendipia.uy/mercadopago-server/', {    
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'data='+ JSON.stringify(current)
        }).then(res => res.json()).then(dat => {

            if (dat) {
                console.log('dat: ', dat)
                const loadScript = (url, handleScriptLoad) => {
                    let script = document.createElement('script');
                    script.type = 'text/javascript';
                
                    if (script.readyState) {
                      script.onreadystatechange = () => {
                        if (
                          script.readyState === 'loaded' ||
                          script.readyState === 'complete'
                        ) {
                          script.onreadystatechange = null;
                          handleScriptLoad();
                        }
                      };
                    } else {
                      script.onload = () => handleScriptLoad();
                    }
                    script.src = url;
                    document.getElementsByTagName('head')[0].appendChild(script);
                  };
                
                  const handleScriptLoad = () => {
                    const mp = new window.MercadoPago('APP_USR-7492c649-794a-4051-b4e0-9d31f2d80c18', {
                      locale: 'es-AR'
                    });
                    mp.checkout({
                      preference: {
                        id: dat
                      },
                      autoOpen: true
                    });
                  };
                
                  loadScript('https://sdk.mercadopago.com/js/v2', handleScriptLoad);
              }
              
        
        
        })
    }



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
                <div className="button-checkout"></div> 
            </div>
        </>
    )
}
