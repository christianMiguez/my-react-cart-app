import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import { ProductScreen } from '../components/products/ProductScreen'
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from '../components/search/SearchScreen'
import { ProductList } from '../components/products/ProductList'
import { CartScreen } from '../components/cart/CartScreen'
import { CheckoutScreen } from '../components/checkout/CheckoutScreen'


export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <div className="row">
                    <Switch>
                        <Route exact path="/home/" component={ ProductList }  />
                        <Route exact path="/product/:productid" component={ ProductScreen }  />
                        <Route exact path="/search" component={ SearchScreen } />
                        <Route exact path="/cart" component={ CartScreen } />
                        <Route exact path="/checkout" component={ CheckoutScreen } />

                        <Redirect to='/home' />
                    </Switch>
                </div>
            </div>
        </>
    )
}
