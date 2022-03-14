import React from "react";
import { NewReviewForm } from './NewReviewForm'
import { ProductInfo } from "./ProductInfo";
import { DeleteButton } from "./DeleteButton";

export const Product = (props) => {
    const { product, updateProduct } = props;
    // console.log(product,"Printing out product");
    // console.log(product.reviews, "Printing out product and reviews");

    const deleteProduct = () => {
        props.deleteProduct(product);
    };

    const deleteReview = (reviewId) => {
        const updatedProduct = {
            ...product,
            reviews: product.reviews.filter((x) => x !== reviewId)
        };
        updateProduct(updatedProduct);
    };

    const addNewReview = (review) => updateProduct({...product, reviews:[...product.reviews, review]});
    
    const reviews = () => (
        <ul>
            {product.reviews.map((review, index) =>(
                <ul key={index}>
                    <label>{`Review comment: ${review.main}`}</label><br/>
                    <label>{`Date: ${review.date}`}</label><br/>
                    <DeleteButton onClick={(e) => deleteReview(review)}/>
                </ul>
            ))}
        </ul>
    );
//brand new component that will house necklace data... but start with blank component first
    return (
        <div className="product">
            <div className="item">
                <ProductInfo product={product}/>
            </div>
            <DeleteButton onClick={deleteProduct}/>
            <br/><br/>
            <div className="add-review">
                <NewReviewForm addNewReview={addNewReview} />
            </div>
            <br/>
            <div className="reviews">
                {
                reviews({ reviews, productId: product._id, deleteReview})
                }
            </div>
        </div>
    );
};
