// src/AddItem.jsx
import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(), // Simple unique ID
            name,
            price: parseFloat(price),
            image,
        };
        addItem(newItem);
        setName('');
        setPrice('');
        setImage('');
    };

    return (
        <div className="add-item">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Item Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    step="0.01"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
