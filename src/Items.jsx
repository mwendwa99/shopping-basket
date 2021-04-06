import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext';
import DeleteItem from './DeleteItem';

const Items = () => {

    const [items] = useContext(ItemContext);

    const [lists, setLists] = useState([items]);

    function handleRemove(id) {
        const newList = lists.filter((item) => item.id !== id);

        setLists(newList);

    }

    const listStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "wheat",
        borderRadius: "10px",
        border: "1px solid #2d2d2d",
        width: "50%",
        height: "200px",
        margin: "1rem auto"
    }

    return (
        <div>
            {items.map((thing) => (
                <ul key={thing.id} style={listStyle} >
                    <h1>name: {thing.name} </h1>
                    <h2>price: {thing.price} </h2>

                    <button style={{ width: "50%", display: "flex", margin: "auto", textAlign: "justify" }}
                        type="button"
                        onClick={() => handleRemove(thing.id)}>
                        Remove
                    </button>
                </ul>
            ))}
        </div>
    );
}

export default Items;