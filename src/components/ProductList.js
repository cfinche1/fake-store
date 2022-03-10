import React from "react";
import { Product } from './Product';
import { cynSHOP } from "../rest/CynSHOP";
import { NewProductForm } from './NewProductForm';
import Header from "./Header";

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

    createProduct = async (product) => {
        await cynSHOP.post(product);
        this.state.productChanged = true;
        this.fetchProducts();
    }

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
            <div>
                <div>
                    <Header />
                </div>
                <div className="products">
                    <NewProductForm createNewProduct={this.createProduct} />   
                </div>
                <div className="product-list">
                    {this.state.products.map((product) => (
                        <Product
                        product={product}
                        key={product.product}
                        updateProduct={this.updateProduct}
                        deleteProduct={this.deleteProduct}
                        />
                ))}
                </div>
            </div>
           
        )
    }
}
