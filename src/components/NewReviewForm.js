import React, { useState } from "react";

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
        <div>
            <h4>Add new review</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='main'
                    onChange={(e) => setMain(e.target.value)}
                    value={main}
                    />
                <input
                    type='text'
                    placeholder='date'
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
               <button type="submit">Add Review</button> 
            </form>
        </div>
    );
    
}