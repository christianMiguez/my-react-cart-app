import { types } from "../types/types";
import { getCart } from "../helpers/getCart"


const initialState = {
	cart: getCart()
}

export const cartReducer = (state = initialState, action) => {

	switch (action.type) {
		
        case types.cartAddNew:
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }

		default:
		return state
	}
};
