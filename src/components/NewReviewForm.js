import React, { useState } from "react";

export const NewReviewForm = (props) => {
    const [review, setReview] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(review) {
            props.addNewReview({review});
            setReview('');
        }else {
            console.log('invalid review');
        }
    }

    return(
        <div>
            <h2>Add a new review</h2>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    key={review.id}
                    placeholder='Enter review'
                    onChange={(e) => setReview(e.target.value)}
                />
                <button type="submit">Post review</button>
            </form>
        </div>
    )
} 