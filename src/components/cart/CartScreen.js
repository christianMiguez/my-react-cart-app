import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { CartItem } from "./CartItem";

export const CartScreen = () => {
	const { cart } = useSelector((state) => state.cart);

	const history = useHistory();

	const handleReturn = () => {
		history.push("/");
	};

	const handleCheckoutBtn = () => {
		history.push("/checkout");
	};

	return (
		<div className="cart_section">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						<div className="cart_container">
							<div className="cart_title">
								Shopping Cart
								<small> (X item in your cart) </small>
							</div>
							<div className="cart_items">
								<ul className="cart_list">
									{cart.length > 0 ? (
										cart.map((cartItem) => (
											<CartItem
												key={Math.random()
													.toString(16)
													.slice(2)}
												{...cartItem}
											/>
										))
									) : (
										<p>No hay items en el carrito...</p>
									)}
								</ul>
							</div>
							<div className="order_total">
								<div className="order_total_content text-md-right">
									<div className="order_total_title">
										Order Total:
									</div>
									<div className="order_total_amount">
										₹22000
									</div>
								</div>
							</div>
							<div className="cart_buttons">
								{" "}
								<button
									type="button"
									className="button cart_button_clear"
									onClick={handleReturn}
								>
									Continue Shopping
								</button>{" "}
								<button
									type="button"
									className="button cart_button_checkout"
									onClick={handleCheckoutBtn}
								>
									CHECKOUT
								</button>{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
