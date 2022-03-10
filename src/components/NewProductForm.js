import React, { useState } from "react";

export const NewProductForm = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (title && price && description) {
            props.createNewProduct({title, price, description});
            setTitle('');
            setPrice('');
            setDescription('');
        }else {
            console.log('invalid product input');
        }
    }

    return(
        <div>
            <h1>Products</h1>
            <h2>Post a new product</h2>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                key={title.id}
                placeholder="product"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
                <input
                type='text'
                key={price.id}
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                />
                <input
                type='text'
                key={description.id}
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />
                <button type="submite">Post Product</button>
            </form>
        </div>
    )
}