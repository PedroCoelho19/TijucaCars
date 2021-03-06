import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import { verificaToken } from '../controller/verificarToken'
import { Login } from '../pages/login'
import { AdminPage } from '../pages/AdminPage'
import {Cliente} from '../pages/cliente'



 const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
         <Route {...rest} render={props => (
            verificaToken() ? (
                <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
        )} />
    )
}

export const Routes = () => { 
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <PrivateRoute path='/cliente' component={Cliente} />
                <PrivateRoute path='/admin' component={AdminPage} />
            </Switch>
        </BrowserRouter>
    )
}
