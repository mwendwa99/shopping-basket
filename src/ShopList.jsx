import React from 'react';
import DeleteItem from './DeleteItem';

const ShopList = ({ list, price, id, thing }) => {

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
        <div style={listStyle} >
            <h3> item name: {list} </h3>
            <h5> price: {price} </h5>
            <DeleteItem item={list} price={price} id={id} />
        </div>
    )
}

export default ShopList
