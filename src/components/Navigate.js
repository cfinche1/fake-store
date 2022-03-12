import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, NavLink, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from "./ProductList";
import { NewProductForm } from "./NewProductForm";



export function Navigate () {
    return(
        <div className="navigate">
            <Router>
                <Nav className="navBar">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/products'>Products</Nav.Link>
                    <Nav.Link as={NavLink} to='/post'>Post Product</Nav.Link>
                </Nav>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home /> 
                    </Route>
                    <Route path='/products'>
                        <ProductList />
                    </Route>
                    <Route path='/post'>
                        <NewProductForm />
                    </Route>
                </Switch>
            </Router> 
        </div>
    ) 
} 


export default Navigate;