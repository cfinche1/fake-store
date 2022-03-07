import React from "react";
// import ReviewList  from "./ReviewList";

export class Product extends React.Component {
    state= {
        product = props.product
    } 

    render() {
        return(
            <div className='movie-app'>
                <div className='data'>
                    <h2 className='title'>{product.title}</h2><br/>
                    <h2 className='price'>{product.price}</h2><br/>
                    <h2 className='description'>{product.description}</h2>
                    
                </div>
                <div className='data'>
                    <img height={250} src={product.image}/><br/>
                </div>
            </div>
        )
    }
}