import { types } from "../types/types";

const initialState = {
	cart: []
}

export const cartReducer = (state = initialState, action) => {

	switch (action.type) {
		
        case types.productsAddNew:
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }

		default:
		return state
	}
};
