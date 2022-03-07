import React from "react";
import Header from "./Header";
import { storeAPI } from '../rest/StoreAPI'
import { Review } from "./Review";
import { Container } from "./Container";



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

    updateProduct = async (updatedProduct) => {
        await storeAPI.delete(updatedProduct);
        this.state.productChanged = true;
        this.fetchProducts();
    };

    render() {
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <br/>
                <div className="card">
                   <Container />
                </div>
                <br/>
            </div>
        )
    }     
}