import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext';

const UpdateItems = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [item, setItem] = useContext(ItemContext);

    const formStyle = {
        backgroundColor: "lightpink",
        borderRadius: "10px",
        display: "flex",
        justifycontent: "center",
        marginTop: "8rem",
        margin: "auto",
        padding: "5rem 5rem",
        width: "300px",
        flexDirection: "column"
    }

    const addName = (e) => {
        setName(e.target.value);
    }

    const addPrice = (e) => {
        setPrice(e.target.value);
    }

    const addId = (e) => {
        setId(e.target.value);
    }

    const updateItem = (e) => {
        e.preventDefault();
        setItem(currentList => [...currentList, { name: name, price: price, id: id }]);
    }

    return (
        <div style={{ padding: "0.5rem" }} >
            <form onSubmit={updateItem} style={formStyle} >
                <h1> INPUT SHOPPING ITEMS </h1>
                <p>NAME: <input type="text" placeholder="name" onChange={addName} value={name} /></p>
                <p>PRICE: <input type="text" placeholder="price" onChange={addPrice} value={price} /></p>
                <p>ID: <input type="number" placeholder="id" onChange={addId} value={id} /> </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdateItems
