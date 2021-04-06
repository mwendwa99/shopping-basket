import React, { useContext } from 'react';
import { ItemContext } from './ItemContext';

const Nav = () => {

    const [list] = useContext(ItemContext);

    const navStyle = {
        position: "fixed",
        width: "100%",
        top: "0",
        backgroundColor: "purple",
        color: "white",
        height: "100px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }

    return (
        <div style={navStyle} >
            <h1>Shopping List</h1>
            <h3>Total Items: {list.length} </h3>
        </div>
    )
}

export default Nav;
