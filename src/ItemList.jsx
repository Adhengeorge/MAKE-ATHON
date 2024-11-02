// src/ItemList.jsx
import React from 'react';
import './ItemList.css'; // Import the CSS file

const ItemList = ({ items, addToCart }) => {
    return (
        <div className="item-list">
            {items.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} className="item-image" />
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
