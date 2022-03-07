import React from "react";
import {
    BrowserRouter as Router,
    Switch, Route, Link }
    from 'react-router-dom';
import {ProductFinder } from "./ProductFinder";

export function Container() {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/productFinder'>Products</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/productFinder'>
                            <ProductFinder/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
       
      )
}