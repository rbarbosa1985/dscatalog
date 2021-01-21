import Auth from 'pages/Auth';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProducDetails from './pages/Catalog/components/ProductDetails';
import Home from './pages/Home';
import PrivateRoute from "./core/components/Routes/PrivateRoute";

const Routes = () => {
     return (
          <BrowserRouter>
               <Navbar/>
               <Switch>
                    <Route path="/" exact> <Home /> </Route>
                    <Route path="/products" exact> <Catalog/> </Route>
                    <Route path="/products/:productId" > <ProducDetails/> </Route>
                    <Redirect from="/admin/auth" to="/admin/auth/login" exact />
                    <Route path="/admin/auth" > <Auth/> </Route>
                    <Redirect from="/admin" to="admin/products" exact></Redirect>
                    <PrivateRoute path="/admin" > <Admin /> </PrivateRoute>
               </Switch>
          </BrowserRouter>
     )
}

export default Routes;