import React from "react";
import { Card } from "react-bootstrap";

export const ProductInfo = (props) => {
    
    return(
        <Card className="info">
            <h1>{props.product.title}</h1>
            <h3>{props.product.price}</h3>
            <h3>{props.product.description}</h3>
        </Card>
    )
}