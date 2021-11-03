


export const getProducts = async() => {
    let products = []
    if( localStorage.getItem('products') ) {
        products = JSON.parse( localStorage.getItem('products') );
        return products
    } else {
        const url = process.env.REACT_APP_API_URL;
        const resp = await fetch( url, { 
            method: 'GET', 
            // auth: {
            //     username: process.env.REACT_APP_WOO_PRIVATE_KEY, //public
            //     password: process.env.REACT_APP_WOO_PUBLIC_KEY //secret
            // }
            } );

        const data = await resp.json();

         products = data.map( product => {
            return {
                id: product.id,
                title: product.name,
                img: product.images[0].src,
                price: product.price,

            }
        })
        localStorage.setItem('products', JSON.stringify(products));

        return products;
    }



}