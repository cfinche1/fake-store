import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import { cynSHOP } from "../rest/CynSHOP";
import { PostButton } from "./PostButton";

export const NewProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    const fetchProducts = async () => {
        const products = await cynSHOP.get();
        this.setState({ products });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (title && price && description) {
            createProduct({title, price, description});
            setTitle('');
            setPrice('');
            setDescription('');
        }else {
            console.log('invalid product input');
        }
    }

    const createProduct = async (product) => {
        await cynSHOP.post(product);
        this.state.productChanged = true;
        fetchProducts();
    }

    return(
        <div className="product-form">
            <img className="sell" src="https://www.libertyid.com/wp-content/uploads/2017/10/ecommerce-2140604_1920.jpg"/>
            <form onSubmit={onSubmit}>
            <h2>Post a new product</h2><br/>
                <Container>
                    <input
                    type='text'
                    key={title.id}
                    placeholder="product"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    /><br/><br/>
                    <input
                    type='text'
                    key={price.id}
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    /><br/><br/>
                    <input
                    type='text'
                    key={description.id}
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    /><br/><br/>
                    <PostButton type='submit'/>
                </Container>
            </form>
        </div>
    )
}