export const getProductsByName = (products,  name = '' ) => {

    if ( name === '' ) {
        return []
    }

    name = name.toLowerCase();
    return products.filter(product => product.title.toLocaleLowerCase().includes(name))
}