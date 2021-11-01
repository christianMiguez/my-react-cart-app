import React, { useEffect } from 'react'
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLoadingProducts } from '../actions/products';
import { getProducts } from '../helpers/getProducts';

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    useEffect( () => {
        
        getProducts( )
        .then( products => {
            
            dispatch(startLoadingProducts(products))
                
            })

            console.log('I Fire once');

    })

    return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route path="/" component={ DashboardRoutes }  />

            </Switch>
        </div>
    </Router>
    )
}
