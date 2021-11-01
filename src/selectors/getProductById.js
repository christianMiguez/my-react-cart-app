export const getProductsById = (products, id) => {
   return products.find( product => product.id === parseInt(id) )
}