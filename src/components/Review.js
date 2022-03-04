import React from 'react';
import { NewReviewForm } from './NewReviewForm';

export const Review = (props) => {
    const { product, updateProduct } = props;

    const deleteReview = (reviewId) => {
        const updatedProduct = {
            ...product,
            reviews: product.reviews.filter((x) => x !== reviewId)
        };
        updateProduct(updatedProduct);
    }

    const addNewReview = (review) => {
        updateProduct({...product, reviews:[...product.reviews, review]})
    };

    const reviews = () => (
        <ul>
            {product.reviews.map((review, index) =>(
            <ul key={index}>Reviews
                <label>{`${review}`}</label><br/>
                <button onClick={(e) => deleteReview(review)}>Delete</button>
                </ul>
            ))}
        </ul>
    );

    return(
        <div>
            {reviews({ reviews, productId: product.product, deleteReview})
            }
            <NewReviewForm addNewReview={addNewReview} />
        </div>
    );
}