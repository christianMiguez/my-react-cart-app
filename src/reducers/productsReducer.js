import { types } from "../types/types";

const initialState = {
	products: [],
	currentItem: null
}

export const productsReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case types.productsLoad:
			return {
				...state,
				products: [...action.payload]
			}
			
		case types.setCurrentItem:
			return {
				...state,
				current: [...action.payload]
			}
		default:
		return state
	}
};
