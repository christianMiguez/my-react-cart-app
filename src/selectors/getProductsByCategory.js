const products = []

export const getProductsByCategory = ({category}) => {
    const validcategory = [1, 2];

    if ( !validcategory.includes(category) ) {
        throw new Error(`category "${category}" está mal wey`);
    }

    return products.filter( product => product.category === category )
}


