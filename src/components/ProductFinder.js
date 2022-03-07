import React from "react";
import { useRouteMatch, Link, Switch, Route }
 from "react-router-dom";
import { ProductList } from "./ProductList";

export const ProductFinder = (props) => { 
  const products = props.products;
  console.log(products);
  const match = useRouteMatch();
  const findProductById = (id) => 
    products.filter((products) => products.product == id)[0];
  
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product, index) => {
            return (
              <li key={index}>
                <Link to={`${match.url}/${products.product}`}>
                  {product.image}
                </Link>
              </li>
            );
          })}
        </ul>
        <Switch>
          <Route
            path={`${match.path}/:productId`}
            render={(props) => (
              <ProductList
              {...props}
              data={findProductById(props.match.params.productId)}
              />
            )}
            />
            <Route path={match.path}>
              <h3>Please select a Product</h3>
            </Route>
        </Switch>
      </div>
    );
  }