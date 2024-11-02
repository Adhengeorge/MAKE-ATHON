// src/Item.jsx
import React from 'react';

const Item = ({ item, addToCart }) => {
    return (
        <div className="item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default Item;
