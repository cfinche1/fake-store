import React from "react";
import { Button } from "react-bootstrap";

export const PostButton = ({type}) => {
    return(
        <Button className='btn btn-primary' type={type}>Post</Button>
    )
}
