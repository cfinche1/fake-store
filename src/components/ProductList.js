import React from "react";
import Header from "./Header";
import { Product } from "./Product";
import { storeAPI } from '../rest/StoreAPI'



export class ProductList extends React.Component {
    state = {
        products: [],
        productChanged: false
    };

    componentDidMount() {
        this.fetchProducts();
    };

    fetchProducts = async () => {
        const products = await storeAPI.get();
        this.setState({ products });
    };

    updateProduct = async (product) => {
        await storeAPI.delete(product);
        this.state.productChanged = true;
        this.fetchProducts();
    };

    render() {
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    
                </div>
                <br/>
                <div className="card">
                    {this.state.products.map((product) => (
                        <Product
                        product={product}
                        key={product.product}
                        updateProduct={this.updateProduct}
                        />
                    ))}
                </div>
            </div>
        )
    }     
}