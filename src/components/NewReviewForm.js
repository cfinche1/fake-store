import React, { useState } from "react";

export const NewReviewForm = (props) => {
    const [review, setReview] = useState('');

    const { addNewReview } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(addNewReview);
        console.log(review);
        if (review) {
            addNewReview({review});
            setReview('');
        }else {
            console.log('invalid review');
        }
    }
    
    return(
        <div>
            <h2>Add new review</h2>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                key={review.id}
                placeholder='Type review here'
                onChange={(e) => setReview(e.target.value)}
                />
                <button type="submit">Add Review</button>
            </form>
        </div>  
    );
} 