import React, { useState } from 'react';
import { NewReviewForm } from './NewReviewForm';

export const Review = (props) => {
   const { product, updateProduct } = props;

   const deleteReview = (reviewId) => {
       const updatedProduct = {
           ...product,
           reviews: product.review.filter((x) => x !== reviewId)
       };
       updateProduct(updatedProduct);
   }

   const addNewReview = (review) => updateProduct({...product, reviews:[...product.reviews, review]});

   const reviews = () => (
       <ul>
           {product.reviews.map((review, index) =>(
               <ul key={index}>
                   <label>{`${review}`}</label><br/>
                   <button onClick={(e) => deleteReview(review.id)}>Delete</button>
               </ul>
           ))}
       </ul>
   );

   
   return(
       <div>
           {reviews}
           <NewReviewForm addNewReview={addNewReview} />
       </div>
    );
};