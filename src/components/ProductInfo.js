import React from "react";
import { Product } from "./Product";

export const ProductInfo = () => {
    return(
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
    );
};