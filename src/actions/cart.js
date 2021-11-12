import { types } from "../types/types";

export const addItemToCart = (cartItem) => ({
	type: types.cartAddNew,
	payload: { ...cartItem },
});

export const cartRemoveItem = (id) => ({
	type: types.cartRemoveItem,
	payload: id,
});
