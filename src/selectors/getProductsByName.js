const products = []

export const getProductsByName = ( name = '' ) => {

    if ( name === '' ) {
        return []
    }

    name = name.toLowerCase();
    return products.filter(product => product.title.toLocaleLowerCase().includes(name))
}