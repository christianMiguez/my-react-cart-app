export const getCart = () => {
    if( localStorage.getItem('cart') ) {
        const cart = JSON.parse( localStorage.getItem('cart') );
        return cart
    } else {
        return []
    }

}