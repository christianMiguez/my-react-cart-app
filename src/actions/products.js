import { types } from "../types/types" 

export const startLoadingProducts = (products) => {
	return async (dispatch) => {    
		dispatch(setProducts(products))
	}
}

export const setProducts = (products) => ({
	type: types.productsLoad,
	payload: products
})


