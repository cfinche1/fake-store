import React from "react";
import { Product } from './Product';
import { cynSHOP } from "../rest/CynSHOP";
import { Card } from "react-bootstrap";
// import { NewProductForm } from './NewProductForm';
// import Navigate from "./Navigate";

export class ProductList extends React.Component {
    state = {
        products: [],
        productChanged: false
    };

    componentDidMount() {
        this.fetchProducts();
    };

    fetchProducts = async () => {
        const products = await cynSHOP.get();
        this.setState({ products });
    };


    updateProduct = async (updatedProduct) => {
        await cynSHOP.put(updatedProduct);
        this.fetchProducts();
    };

    deleteProduct = async (product) => {
        await cynSHOP.delete(product);
        this.state.productChanged = true;
        this.fetchProducts();
    }


    render() {
        return (
            <Card>
                <div className="product-list">
                    {this.state.products.map((product) => (
                        <Product
                        product={product}
                        key={product.product}
                        updateProduct={this.updateProduct}
                        deleteProduct={this.deleteProduct}
                        productChanged={this.productChanged}
                        />
                    ))}
                </div>
            </Card>
           
        )
    }
}
