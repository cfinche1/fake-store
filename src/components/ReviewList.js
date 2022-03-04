import React from "react";
import { NewReviewForm } from "./NewReviewForm";

export default class ReviewList extends React.Component {
    state = {
        reviews:[]
    }

    render() {
        let {reviews} = this.state;
        return(
            <div className="reviews">
                <NewReviewForm />
                {reviews}
            </div>
        )
    }
}