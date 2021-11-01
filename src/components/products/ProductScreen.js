import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom'
import { addItemToCart } from '../../actions/products';
import { getProductsById } from '../../selectors/getProductById';

export const ProductScreen = ({history}) => {
    
    const {productid} = useParams();
    const {products} = useSelector(state => state.products)

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
        
        dispatch(addItemToCart(current))
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
            </div>
        </>
        : 'Fetching data......'
    )
}
