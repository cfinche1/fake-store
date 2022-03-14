import React from "react";
import { Button } from "react-bootstrap";

export const DeleteButton = ({onClick}) => {
    return(
        <Button className='btn btn-danger' onClick={onClick}>Delete</Button>
    )
}