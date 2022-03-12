import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { NewReviewForm } from './NewReviewForm'

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
                    <button onClick={(e) => deleteReview(review)}>Delete</button>
                </ul>
            ))}
        </ul>
    );
//brand new component that will house necklace data... but start with blank component first
    return (
        <div className="product">
             <h1>{product.title}</h1><br/>
            <button onClick={deleteProduct}>Delete</button>
            {
                reviews({ reviews, productId: product._id, deleteReview})
            }
             <NewReviewForm addNewReview={addNewReview} />
        </div>
    );
};
