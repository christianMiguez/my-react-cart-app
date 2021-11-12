import { types } from "../types/types";
import { getCart } from "../helpers/getCart";

const initialState = {
	cart: getCart(),
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.cartAddNew:
			return {
				...state,
				cart: [action.payload, ...state.cart],
			};

		case types.cartRemoveItem:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};

		default:
			return state;
	}
};
