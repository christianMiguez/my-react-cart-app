import React from 'react'

export const CartItem = ({title, img, price}) => {

   
    return (
        
        <li className="cart_item clearfix">
            <div className="cart_item_image"><img src={img} alt={title} /></div>
            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                <div className="cart_item_name cart_info_col">
                    <div className="cart_item_title">Name</div>
                    <div className="cart_item_text">{title}</div>
                </div>

                <div className="cart_item_quantity cart_info_col">
                    <div className="cart_item_title">Quantity</div>
                    <div className="cart_item_text">1</div>
                </div>
                <div className="cart_item_price cart_info_col">
                    <div className="cart_item_title">Price</div>
                    <div className="cart_item_text">{price}</div>
                </div>
                <div className="cart_item_total cart_info_col">
                    <div className="cart_item_title">Total</div>
                    <div className="cart_item_text">-</div>
                </div>
            </div>
        </li>
                
    )
}
