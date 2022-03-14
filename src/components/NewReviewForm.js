import React, { useState } from "react";
import { PostButton } from "./PostButton";

export const NewReviewForm = (props) => {
    const [main, setMain] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (main && date) {
           props.addNewReview({main, date}); 
           setMain('');
           setDate('');
        }else{
            console.log('invalid submit')
        }
    };


    return (
        <div className="review-form">
            <h4>Add new review</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='main'
                    onChange={(e) => setMain(e.target.value)}
                    value={main}
                    /><br/><br/>
                <input
                    type='text'
                    placeholder='date'
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                /><br/><br/>
               <PostButton type="submit"/> 
            </form>
        </div>
    );
    
}