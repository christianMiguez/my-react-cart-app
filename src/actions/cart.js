
import { types } from "../types/types" 


export const addItemToCart = (cartItem) => ({
	type: types.cartAddNew,
	payload: { ...cartItem}
})

